/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { isRecordNotFoundError } from "../../prisma.util";
import * as errors from "../../errors";
import { Request, Response } from "express";
import { plainToClass } from "class-transformer";
import { ApiNestedQuery } from "../../decorators/api-nested-query.decorator";
import * as nestAccessControl from "nest-access-control";
import * as defaultAuthGuard from "../../auth/defaultAuth.guard";
import { FileInterceptor } from "@nestjs/platform-express";
import { ArtworkService } from "../artwork.service";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { ArtworkCreateInput } from "./ArtworkCreateInput";
import { Artwork } from "./Artwork";
import { ArtworkFindManyArgs } from "./ArtworkFindManyArgs";
import { ArtworkWhereUniqueInput } from "./ArtworkWhereUniqueInput";
import { ArtworkUpdateInput } from "./ArtworkUpdateInput";
import { SubmissionFindManyArgs } from "../../submission/base/SubmissionFindManyArgs";
import { Submission } from "../../submission/base/Submission";
import { SubmissionWhereUniqueInput } from "../../submission/base/SubmissionWhereUniqueInput";

@swagger.ApiBearerAuth()
@common.UseGuards(defaultAuthGuard.DefaultAuthGuard, nestAccessControl.ACGuard)
export class ArtworkControllerBase {
  constructor(
    protected readonly service: ArtworkService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}
  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Post()
  @swagger.ApiCreatedResponse({ type: Artwork })
  @nestAccessControl.UseRoles({
    resource: "Artwork",
    action: "create",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async createArtwork(
    @common.Body() data: ArtworkCreateInput
  ): Promise<Artwork> {
    return await this.service.createArtwork({
      data: {
        ...data,

        artist: data.artist
          ? {
              connect: data.artist,
            }
          : undefined,
      },
      select: {
        artist: {
          select: {
            id: true,
          },
        },

        createdAt: true,
        description: true,
        file: true,
        id: true,
        title: true,
        updatedAt: true,
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get()
  @swagger.ApiOkResponse({ type: [Artwork] })
  @ApiNestedQuery(ArtworkFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "Artwork",
    action: "read",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async artworks(@common.Req() request: Request): Promise<Artwork[]> {
    const args = plainToClass(ArtworkFindManyArgs, request.query);
    return this.service.artworks({
      ...args,
      select: {
        artist: {
          select: {
            id: true,
          },
        },

        createdAt: true,
        description: true,
        file: true,
        id: true,
        title: true,
        updatedAt: true,
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: Artwork })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "Artwork",
    action: "read",
    possession: "own",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async artwork(
    @common.Param() params: ArtworkWhereUniqueInput
  ): Promise<Artwork | null> {
    const result = await this.service.artwork({
      where: params,
      select: {
        artist: {
          select: {
            id: true,
          },
        },

        createdAt: true,
        description: true,
        file: true,
        id: true,
        title: true,
        updatedAt: true,
      },
    });
    if (result === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Patch("/:id")
  @swagger.ApiOkResponse({ type: Artwork })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "Artwork",
    action: "update",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async updateArtwork(
    @common.Param() params: ArtworkWhereUniqueInput,
    @common.Body() data: ArtworkUpdateInput
  ): Promise<Artwork | null> {
    try {
      return await this.service.updateArtwork({
        where: params,
        data: {
          ...data,

          artist: data.artist
            ? {
                connect: data.artist,
              }
            : undefined,
        },
        select: {
          artist: {
            select: {
              id: true,
            },
          },

          createdAt: true,
          description: true,
          file: true,
          id: true,
          title: true,
          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.Delete("/:id")
  @swagger.ApiOkResponse({ type: Artwork })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "Artwork",
    action: "delete",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async deleteArtwork(
    @common.Param() params: ArtworkWhereUniqueInput
  ): Promise<Artwork | null> {
    try {
      return await this.service.deleteArtwork({
        where: params,
        select: {
          artist: {
            select: {
              id: true,
            },
          },

          createdAt: true,
          description: true,
          file: true,
          id: true,
          title: true,
          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.Put(":id/file")
  @common.UseInterceptors(FileInterceptor("file"))
  @swagger.ApiConsumes("multipart/form-data")
  @swagger.ApiBody({
    schema: {
      type: "object",

      properties: {
        file: {
          type: "string",
          format: "binary",
        },
      },
    },
  })
  @swagger.ApiParam({
    name: "id",
    type: "string",
    required: true,
  })
  @swagger.ApiCreatedResponse({
    type: Artwork,
    status: "2XX",
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException,
  })
  async uploadFile(
    @common.Param()
    params: ArtworkWhereUniqueInput,
    @common.UploadedFile()
    file: Express.Multer.File
  ): Promise<Artwork> {
    return this.service.uploadFile(
      {
        where: params,
      },
      Object.assign(file, {
        filename: file.originalname,
      })
    );
  }

  @common.Get(":id/file")
  @swagger.ApiParam({
    name: "id",
    type: "string",
    required: true,
  })
  @swagger.ApiOkResponse({
    type: common.StreamableFile,
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException,
  })
  async downloadFile(
    @common.Param()
    params: ArtworkWhereUniqueInput,
    @common.Res({
      passthrough: true,
    })
    res: Response
  ): Promise<common.StreamableFile> {
    const result = await this.service.downloadFile({
      where: params,
    });

    if (result === null) {
      throw new errors.NotFoundException(
        "No resource was found for ",
        JSON.stringify(params)
      );
    }

    res.setHeader(
      "Content-Disposition",
      `attachment; filename=${result.filename}`
    );
    res.setHeader("Content-Type", result.mimetype);
    return result.stream;
  }

  @common.Delete(":id/file")
  @swagger.ApiOkResponse({
    type: Artwork,
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException,
  })
  async deleteFile(
    @common.Param()
    params: ArtworkWhereUniqueInput
  ): Promise<Artwork> {
    return this.service.deleteFile({
      where: params,
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get("/:id/submissions")
  @ApiNestedQuery(SubmissionFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "Submission",
    action: "read",
    possession: "any",
  })
  async findSubmissions(
    @common.Req() request: Request,
    @common.Param() params: ArtworkWhereUniqueInput
  ): Promise<Submission[]> {
    const query = plainToClass(SubmissionFindManyArgs, request.query);
    const results = await this.service.findSubmissions(params.id, {
      ...query,
      select: {
        artwork: {
          select: {
            id: true,
          },
        },

        createdAt: true,
        deadline: true,
        fee: true,
        id: true,

        organization: {
          select: {
            id: true,
          },
        },

        title: true,
        updatedAt: true,
      },
    });
    if (results === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return results;
  }

  @common.Post("/:id/submissions")
  @nestAccessControl.UseRoles({
    resource: "Artwork",
    action: "update",
    possession: "any",
  })
  async connectSubmissions(
    @common.Param() params: ArtworkWhereUniqueInput,
    @common.Body() body: SubmissionWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      submissions: {
        connect: body,
      },
    };
    await this.service.updateArtwork({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Patch("/:id/submissions")
  @nestAccessControl.UseRoles({
    resource: "Artwork",
    action: "update",
    possession: "any",
  })
  async updateSubmissions(
    @common.Param() params: ArtworkWhereUniqueInput,
    @common.Body() body: SubmissionWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      submissions: {
        set: body,
      },
    };
    await this.service.updateArtwork({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Delete("/:id/submissions")
  @nestAccessControl.UseRoles({
    resource: "Artwork",
    action: "update",
    possession: "any",
  })
  async disconnectSubmissions(
    @common.Param() params: ArtworkWhereUniqueInput,
    @common.Body() body: SubmissionWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      submissions: {
        disconnect: body,
      },
    };
    await this.service.updateArtwork({
      where: params,
      data,
      select: { id: true },
    });
  }
}
