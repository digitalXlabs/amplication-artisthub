import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { JournalServiceBase } from "./base/journal.service.base";

@Injectable()
export class JournalService extends JournalServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
