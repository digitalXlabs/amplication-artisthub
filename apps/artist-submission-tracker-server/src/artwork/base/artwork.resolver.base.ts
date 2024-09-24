/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as graphql from "@nestjs/graphql";
import { GraphQLError } from "graphql";
import { isRecordNotFoundError } from "../../prisma.util";
import { MetaQueryPayload } from "../../util/MetaQueryPayload";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { GraphQLUpload } from "graphql-upload";
import { FileUpload } from "src/storage/base/storage.types";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { Artwork } from "./Artwork";
import { ArtworkCountArgs } from "./ArtworkCountArgs";
import { ArtworkFindManyArgs } from "./ArtworkFindManyArgs";
import { ArtworkFindUniqueArgs } from "./ArtworkFindUniqueArgs";
import { CreateArtworkArgs } from "./CreateArtworkArgs";
import { UpdateArtworkArgs } from "./UpdateArtworkArgs";
import { DeleteArtworkArgs } from "./DeleteArtworkArgs";
import { SubmissionFindManyArgs } from "../../submission/base/SubmissionFindManyArgs";
import { Submission } from "../../submission/base/Submission";
import { Artist } from "../../artist/base/Artist";
import { ArtworkService } from "../artwork.service";
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => Artwork)
export class ArtworkResolverBase {
  constructor(
    protected readonly service: ArtworkService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @graphql.Query(() => MetaQueryPayload)
  @nestAccessControl.UseRoles({
    resource: "Artwork",
    action: "read",
    possession: "any",
  })
  async _artworksMeta(
    @graphql.Args() args: ArtworkCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => [Artwork])
  @nestAccessControl.UseRoles({
    resource: "Artwork",
    action: "read",
    possession: "any",
  })
  async artworks(
    @graphql.Args() args: ArtworkFindManyArgs
  ): Promise<Artwork[]> {
    return this.service.artworks(args);
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => Artwork, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "Artwork",
    action: "read",
    possession: "own",
  })
  async artwork(
    @graphql.Args() args: ArtworkFindUniqueArgs
  ): Promise<Artwork | null> {
    const result = await this.service.artwork(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => Artwork)
  @nestAccessControl.UseRoles({
    resource: "Artwork",
    action: "create",
    possession: "any",
  })
  async createArtwork(
    @graphql.Args() args: CreateArtworkArgs
  ): Promise<Artwork> {
    return await this.service.createArtwork({
      ...args,
      data: {
        ...args.data,

        artist: args.data.artist
          ? {
              connect: args.data.artist,
            }
          : undefined,
      },
    });
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => Artwork)
  @nestAccessControl.UseRoles({
    resource: "Artwork",
    action: "update",
    possession: "any",
  })
  async updateArtwork(
    @graphql.Args() args: UpdateArtworkArgs
  ): Promise<Artwork | null> {
    try {
      return await this.service.updateArtwork({
        ...args,
        data: {
          ...args.data,

          artist: args.data.artist
            ? {
                connect: args.data.artist,
              }
            : undefined,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.Mutation(() => Artwork)
  @nestAccessControl.UseRoles({
    resource: "Artwork",
    action: "delete",
    possession: "any",
  })
  async deleteArtwork(
    @graphql.Args() args: DeleteArtworkArgs
  ): Promise<Artwork | null> {
    try {
      return await this.service.deleteArtwork(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.Mutation(() => Artwork)
  async uploadFile(
    @graphql.Args({
      name: "file",
      type: () => GraphQLUpload,
    })
    file: FileUpload,
    @graphql.Args()
    args: ArtworkFindUniqueArgs
  ): Promise<Artwork> {
    return await this.service.uploadFile(args, file);
  }

  @graphql.Mutation(() => Artwork)
  async deleteFile(
    @graphql.Args()
    args: ArtworkFindUniqueArgs
  ): Promise<Artwork> {
    return await this.service.deleteFile(args);
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.ResolveField(() => [Submission], { name: "submissions" })
  @nestAccessControl.UseRoles({
    resource: "Submission",
    action: "read",
    possession: "any",
  })
  async findSubmissions(
    @graphql.Parent() parent: Artwork,
    @graphql.Args() args: SubmissionFindManyArgs
  ): Promise<Submission[]> {
    const results = await this.service.findSubmissions(parent.id, args);

    if (!results) {
      return [];
    }

    return results;
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.ResolveField(() => Artist, {
    nullable: true,
    name: "artist",
  })
  @nestAccessControl.UseRoles({
    resource: "Artist",
    action: "read",
    possession: "any",
  })
  async getArtist(@graphql.Parent() parent: Artwork): Promise<Artist | null> {
    const result = await this.service.getArtist(parent.id);

    if (!result) {
      return null;
    }
    return result;
  }
}
