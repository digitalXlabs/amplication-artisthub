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
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { Submission } from "./Submission";
import { SubmissionCountArgs } from "./SubmissionCountArgs";
import { SubmissionFindManyArgs } from "./SubmissionFindManyArgs";
import { SubmissionFindUniqueArgs } from "./SubmissionFindUniqueArgs";
import { CreateSubmissionArgs } from "./CreateSubmissionArgs";
import { UpdateSubmissionArgs } from "./UpdateSubmissionArgs";
import { DeleteSubmissionArgs } from "./DeleteSubmissionArgs";
import { Artwork } from "../../artwork/base/Artwork";
import { Organization } from "../../organization/base/Organization";
import { SubmissionService } from "../submission.service";
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => Submission)
export class SubmissionResolverBase {
  constructor(
    protected readonly service: SubmissionService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @graphql.Query(() => MetaQueryPayload)
  @nestAccessControl.UseRoles({
    resource: "Submission",
    action: "read",
    possession: "any",
  })
  async _submissionsMeta(
    @graphql.Args() args: SubmissionCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => [Submission])
  @nestAccessControl.UseRoles({
    resource: "Submission",
    action: "read",
    possession: "any",
  })
  async submissions(
    @graphql.Args() args: SubmissionFindManyArgs
  ): Promise<Submission[]> {
    return this.service.submissions(args);
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => Submission, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "Submission",
    action: "read",
    possession: "own",
  })
  async submission(
    @graphql.Args() args: SubmissionFindUniqueArgs
  ): Promise<Submission | null> {
    const result = await this.service.submission(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => Submission)
  @nestAccessControl.UseRoles({
    resource: "Submission",
    action: "create",
    possession: "any",
  })
  async createSubmission(
    @graphql.Args() args: CreateSubmissionArgs
  ): Promise<Submission> {
    return await this.service.createSubmission({
      ...args,
      data: {
        ...args.data,

        artwork: args.data.artwork
          ? {
              connect: args.data.artwork,
            }
          : undefined,

        organization: args.data.organization
          ? {
              connect: args.data.organization,
            }
          : undefined,
      },
    });
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => Submission)
  @nestAccessControl.UseRoles({
    resource: "Submission",
    action: "update",
    possession: "any",
  })
  async updateSubmission(
    @graphql.Args() args: UpdateSubmissionArgs
  ): Promise<Submission | null> {
    try {
      return await this.service.updateSubmission({
        ...args,
        data: {
          ...args.data,

          artwork: args.data.artwork
            ? {
                connect: args.data.artwork,
              }
            : undefined,

          organization: args.data.organization
            ? {
                connect: args.data.organization,
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

  @graphql.Mutation(() => Submission)
  @nestAccessControl.UseRoles({
    resource: "Submission",
    action: "delete",
    possession: "any",
  })
  async deleteSubmission(
    @graphql.Args() args: DeleteSubmissionArgs
  ): Promise<Submission | null> {
    try {
      return await this.service.deleteSubmission(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.ResolveField(() => Artwork, {
    nullable: true,
    name: "artwork",
  })
  @nestAccessControl.UseRoles({
    resource: "Artwork",
    action: "read",
    possession: "any",
  })
  async getArtwork(
    @graphql.Parent() parent: Submission
  ): Promise<Artwork | null> {
    const result = await this.service.getArtwork(parent.id);

    if (!result) {
      return null;
    }
    return result;
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.ResolveField(() => Organization, {
    nullable: true,
    name: "organization",
  })
  @nestAccessControl.UseRoles({
    resource: "Organization",
    action: "read",
    possession: "any",
  })
  async getOrganization(
    @graphql.Parent() parent: Submission
  ): Promise<Organization | null> {
    const result = await this.service.getOrganization(parent.id);

    if (!result) {
      return null;
    }
    return result;
  }
}
