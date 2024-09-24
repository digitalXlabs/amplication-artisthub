import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { ArtistModuleBase } from "./base/artist.module.base";
import { ArtistService } from "./artist.service";
import { ArtistController } from "./artist.controller";
import { ArtistResolver } from "./artist.resolver";

@Module({
  imports: [ArtistModuleBase, forwardRef(() => AuthModule)],
  controllers: [ArtistController],
  providers: [ArtistService, ArtistResolver],
  exports: [ArtistService],
})
export class ArtistModule {}
