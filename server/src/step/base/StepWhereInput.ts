/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/docs/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { StringFilter } from "../../util/StringFilter";
import { Type } from "class-transformer";
import { IsOptional, ValidateNested } from "class-validator";
import { IntFilter } from "../../util/IntFilter";
import { RecipeWhereUniqueInput } from "../../recipe/base/RecipeWhereUniqueInput";
import { StepIngredientListRelationFilter } from "../../stepIngredient/base/StepIngredientListRelationFilter";
@InputType()
class StepWhereInput {
  @ApiProperty({
    required: false,
    type: StringFilter,
  })
  @Type(() => StringFilter)
  @IsOptional()
  @Field(() => StringFilter, {
    nullable: true,
  })
  id?: StringFilter;

  @ApiProperty({
    required: false,
    type: IntFilter,
  })
  @Type(() => IntFilter)
  @IsOptional()
  @Field(() => IntFilter, {
    nullable: true,
  })
  positon?: IntFilter;

  @ApiProperty({
    required: false,
    type: () => RecipeWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => RecipeWhereUniqueInput)
  @IsOptional()
  @Field(() => RecipeWhereUniqueInput, {
    nullable: true,
  })
  recipe?: RecipeWhereUniqueInput;

  @ApiProperty({
    required: false,
    type: () => StepIngredientListRelationFilter,
  })
  @ValidateNested()
  @Type(() => StepIngredientListRelationFilter)
  @IsOptional()
  @Field(() => StepIngredientListRelationFilter, {
    nullable: true,
  })
  StepIngredients?: StepIngredientListRelationFilter;
}
export { StepWhereInput };
