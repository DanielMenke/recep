import { Module } from "@nestjs/common";
import { RecipeModuleBase } from "./base/recipe.module.base";
import { RecipeService } from "./recipe.service";
import { RecipeResolver } from "./recipe.resolver";

@Module({
  imports: [RecipeModuleBase],
  providers: [RecipeService, RecipeResolver],
  exports: [RecipeService],
})
export class RecipeModule {}
