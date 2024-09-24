import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { ArtworkModuleBase } from "./base/artwork.module.base";
import { ArtworkService } from "./artwork.service";
import { ArtworkController } from "./artwork.controller";
import { ArtworkResolver } from "./artwork.resolver";

@Module({
  imports: [ArtworkModuleBase, forwardRef(() => AuthModule)],
  controllers: [ArtworkController],
  providers: [ArtworkService, ArtworkResolver],
  exports: [ArtworkService],
})
export class ArtworkModule {}
