import * as common from "@nestjs/common";
import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { StepIngredientResolverBase } from "./base/stepIngredient.resolver.base";
import { StepIngredient } from "./base/StepIngredient";
import { StepIngredientService } from "./stepIngredient.service";

@graphql.Resolver(() => StepIngredient)
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
export class StepIngredientResolver extends StepIngredientResolverBase {
  constructor(
    protected readonly service: StepIngredientService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
