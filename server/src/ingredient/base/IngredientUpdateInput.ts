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
import { StepIngredientUpdateManyWithoutIngredientsInput } from "./StepIngredientUpdateManyWithoutIngredientsInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";
@InputType()
class IngredientUpdateInput {
  @ApiProperty({
    required: false,
    type: () => StepIngredientUpdateManyWithoutIngredientsInput,
  })
  @ValidateNested()
  @Type(() => StepIngredientUpdateManyWithoutIngredientsInput)
  @IsOptional()
  @Field(() => StepIngredientUpdateManyWithoutIngredientsInput, {
    nullable: true,
  })
  schrittzutat?: StepIngredientUpdateManyWithoutIngredientsInput;
}
export { IngredientUpdateInput };
