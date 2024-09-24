import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { ArtworkService } from "./artwork.service";
import { ArtworkControllerBase } from "./base/artwork.controller.base";

@swagger.ApiTags("artworks")
@common.Controller("artworks")
export class ArtworkController extends ArtworkControllerBase {
  constructor(
    protected readonly service: ArtworkService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
