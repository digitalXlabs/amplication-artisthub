import { Test } from "@nestjs/testing";
import {
  INestApplication,
  HttpStatus,
  ExecutionContext,
  CallHandler,
} from "@nestjs/common";
import request from "supertest";
import { ACGuard } from "nest-access-control";
import { DefaultAuthGuard } from "../../auth/defaultAuth.guard";
import { ACLModule } from "../../auth/acl.module";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { map } from "rxjs";
import { JournalController } from "../journal.controller";
import { JournalService } from "../journal.service";

const nonExistingId = "nonExistingId";
const existingId = "existingId";
const CREATE_INPUT = {
  brewTime: 42.42,
  coffeeName: "exampleCoffeeName",
  content: "exampleContent",
  createdAt: new Date(),
  id: "exampleId",
  notes: "exampleNotes",
  rating: 42,
  roastDate: new Date(),
  roaster: "exampleRoaster",
  title: "exampleTitle",
  updatedAt: new Date(),
  waterTemperature: 42.42,
};
const CREATE_RESULT = {
  brewTime: 42.42,
  coffeeName: "exampleCoffeeName",
  content: "exampleContent",
  createdAt: new Date(),
  id: "exampleId",
  notes: "exampleNotes",
  rating: 42,
  roastDate: new Date(),
  roaster: "exampleRoaster",
  title: "exampleTitle",
  updatedAt: new Date(),
  waterTemperature: 42.42,
};
const FIND_MANY_RESULT = [
  {
    brewTime: 42.42,
    coffeeName: "exampleCoffeeName",
    content: "exampleContent",
    createdAt: new Date(),
    id: "exampleId",
    notes: "exampleNotes",
    rating: 42,
    roastDate: new Date(),
    roaster: "exampleRoaster",
    title: "exampleTitle",
    updatedAt: new Date(),
    waterTemperature: 42.42,
  },
];
const FIND_ONE_RESULT = {
  brewTime: 42.42,
  coffeeName: "exampleCoffeeName",
  content: "exampleContent",
  createdAt: new Date(),
  id: "exampleId",
  notes: "exampleNotes",
  rating: 42,
  roastDate: new Date(),
  roaster: "exampleRoaster",
  title: "exampleTitle",
  updatedAt: new Date(),
  waterTemperature: 42.42,
};

const service = {
  createJournal() {
    return CREATE_RESULT;
  },
  journals: () => FIND_MANY_RESULT,
  journal: ({ where }: { where: { id: string } }) => {
    switch (where.id) {
      case existingId:
        return FIND_ONE_RESULT;
      case nonExistingId:
        return null;
    }
  },
};

const basicAuthGuard = {
  canActivate: (context: ExecutionContext) => {
    const argumentHost = context.switchToHttp();
    const request = argumentHost.getRequest();
    request.user = {
      roles: ["user"],
    };
    return true;
  },
};

const acGuard = {
  canActivate: () => {
    return true;
  },
};

const aclFilterResponseInterceptor = {
  intercept: (context: ExecutionContext, next: CallHandler) => {
    return next.handle().pipe(
      map((data) => {
        return data;
      })
    );
  },
};
const aclValidateRequestInterceptor = {
  intercept: (context: ExecutionContext, next: CallHandler) => {
    return next.handle();
  },
};

describe("Journal", () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      providers: [
        {
          provide: JournalService,
          useValue: service,
        },
      ],
      controllers: [JournalController],
      imports: [ACLModule],
    })
      .overrideGuard(DefaultAuthGuard)
      .useValue(basicAuthGuard)
      .overrideGuard(ACGuard)
      .useValue(acGuard)
      .overrideInterceptor(AclFilterResponseInterceptor)
      .useValue(aclFilterResponseInterceptor)
      .overrideInterceptor(AclValidateRequestInterceptor)
      .useValue(aclValidateRequestInterceptor)
      .compile();

    app = moduleRef.createNestApplication();
    await app.init();
  });

  test("POST /journals", async () => {
    await request(app.getHttpServer())
      .post("/journals")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        createdAt: CREATE_RESULT.createdAt.toISOString(),
        roastDate: CREATE_RESULT.roastDate.toISOString(),
        updatedAt: CREATE_RESULT.updatedAt.toISOString(),
      });
  });

  test("GET /journals", async () => {
    await request(app.getHttpServer())
      .get("/journals")
      .expect(HttpStatus.OK)
      .expect([
        {
          ...FIND_MANY_RESULT[0],
          createdAt: FIND_MANY_RESULT[0].createdAt.toISOString(),
          roastDate: FIND_MANY_RESULT[0].roastDate.toISOString(),
          updatedAt: FIND_MANY_RESULT[0].updatedAt.toISOString(),
        },
      ]);
  });

  test("GET /journals/:id non existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/journals"}/${nonExistingId}`)
      .expect(HttpStatus.NOT_FOUND)
      .expect({
        statusCode: HttpStatus.NOT_FOUND,
        message: `No resource was found for {"${"id"}":"${nonExistingId}"}`,
        error: "Not Found",
      });
  });

  test("GET /journals/:id existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/journals"}/${existingId}`)
      .expect(HttpStatus.OK)
      .expect({
        ...FIND_ONE_RESULT,
        createdAt: FIND_ONE_RESULT.createdAt.toISOString(),
        roastDate: FIND_ONE_RESULT.roastDate.toISOString(),
        updatedAt: FIND_ONE_RESULT.updatedAt.toISOString(),
      });
  });

  test("POST /journals existing resource", async () => {
    const agent = request(app.getHttpServer());
    await agent
      .post("/journals")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        createdAt: CREATE_RESULT.createdAt.toISOString(),
        roastDate: CREATE_RESULT.roastDate.toISOString(),
        updatedAt: CREATE_RESULT.updatedAt.toISOString(),
      })
      .then(function () {
        agent
          .post("/journals")
          .send(CREATE_INPUT)
          .expect(HttpStatus.CONFLICT)
          .expect({
            statusCode: HttpStatus.CONFLICT,
          });
      });
  });

  afterAll(async () => {
    await app.close();
  });
});
