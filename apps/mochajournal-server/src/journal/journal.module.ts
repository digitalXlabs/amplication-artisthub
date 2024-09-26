import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { JournalModuleBase } from "./base/journal.module.base";
import { JournalService } from "./journal.service";
import { JournalController } from "./journal.controller";
import { JournalResolver } from "./journal.resolver";

@Module({
  imports: [JournalModuleBase, forwardRef(() => AuthModule)],
  controllers: [JournalController],
  providers: [JournalService, JournalResolver],
  exports: [JournalService],
})
export class JournalModule {}
