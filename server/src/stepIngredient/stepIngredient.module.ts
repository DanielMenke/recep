import { Module } from "@nestjs/common";
import { StepIngredientModuleBase } from "./base/stepIngredient.module.base";
import { StepIngredientService } from "./stepIngredient.service";
import { StepIngredientResolver } from "./stepIngredient.resolver";

@Module({
  imports: [StepIngredientModuleBase],
  providers: [StepIngredientService, StepIngredientResolver],
  exports: [StepIngredientService],
})
export class StepIngredientModule {}
