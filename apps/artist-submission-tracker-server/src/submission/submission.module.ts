import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { SubmissionModuleBase } from "./base/submission.module.base";
import { SubmissionService } from "./submission.service";
import { SubmissionController } from "./submission.controller";
import { SubmissionResolver } from "./submission.resolver";

@Module({
  imports: [SubmissionModuleBase, forwardRef(() => AuthModule)],
  controllers: [SubmissionController],
  providers: [SubmissionService, SubmissionResolver],
  exports: [SubmissionService],
})
export class SubmissionModule {}
