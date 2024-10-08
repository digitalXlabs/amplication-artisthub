/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { ArtistWhereInput } from "./ArtistWhereInput";
import { IsOptional, ValidateNested, IsInt } from "class-validator";
import { Type } from "class-transformer";
import { ArtistOrderByInput } from "./ArtistOrderByInput";

@ArgsType()
class ArtistFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => ArtistWhereInput,
  })
  @IsOptional()
  @ValidateNested()
  @Field(() => ArtistWhereInput, { nullable: true })
  @Type(() => ArtistWhereInput)
  where?: ArtistWhereInput;

  @ApiProperty({
    required: false,
    type: [ArtistOrderByInput],
  })
  @IsOptional()
  @ValidateNested({ each: true })
  @Field(() => [ArtistOrderByInput], { nullable: true })
  @Type(() => ArtistOrderByInput)
  orderBy?: Array<ArtistOrderByInput>;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsOptional()
  @IsInt()
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  skip?: number;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsOptional()
  @IsInt()
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  take?: number;
}

export { ArtistFindManyArgs as ArtistFindManyArgs };
