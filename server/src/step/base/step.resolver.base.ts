/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/docs/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as common from "@nestjs/common";
import * as graphql from "@nestjs/graphql";
import * as apollo from "apollo-server-express";
import * as nestAccessControl from "nest-access-control";
import { GqlDefaultAuthGuard } from "../../auth/gqlDefaultAuth.guard";
import * as gqlACGuard from "../../auth/gqlAC.guard";
import { isRecordNotFoundError } from "../../prisma.util";
import { MetaQueryPayload } from "../../util/MetaQueryPayload";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { CreateStepArgs } from "./CreateStepArgs";
import { UpdateStepArgs } from "./UpdateStepArgs";
import { DeleteStepArgs } from "./DeleteStepArgs";
import { StepFindManyArgs } from "./StepFindManyArgs";
import { StepFindUniqueArgs } from "./StepFindUniqueArgs";
import { Step } from "./Step";
import { StepIngredientFindManyArgs } from "../../stepIngredient/base/StepIngredientFindManyArgs";
import { StepIngredient } from "../../stepIngredient/base/StepIngredient";
import { Recipe } from "../../recipe/base/Recipe";
import { StepService } from "../step.service";

@graphql.Resolver(() => Step)
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
export class StepResolverBase {
  constructor(
    protected readonly service: StepService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @graphql.Query(() => MetaQueryPayload)
  @nestAccessControl.UseRoles({
    resource: "Step",
    action: "read",
    possession: "any",
  })
  async _stepsMeta(
    @graphql.Args() args: StepFindManyArgs
  ): Promise<MetaQueryPayload> {
    const results = await this.service.count({
      ...args,
      skip: undefined,
      take: undefined,
    });
    return {
      count: results,
    };
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => [Step])
  @nestAccessControl.UseRoles({
    resource: "Step",
    action: "read",
    possession: "any",
  })
  async steps(@graphql.Args() args: StepFindManyArgs): Promise<Step[]> {
    return this.service.findMany(args);
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => Step, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "Step",
    action: "read",
    possession: "own",
  })
  async step(@graphql.Args() args: StepFindUniqueArgs): Promise<Step | null> {
    const result = await this.service.findOne(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => Step)
  @nestAccessControl.UseRoles({
    resource: "Step",
    action: "create",
    possession: "any",
  })
  async createStep(@graphql.Args() args: CreateStepArgs): Promise<Step> {
    return await this.service.create({
      ...args,
      data: {
        ...args.data,

        recipe: args.data.recipe
          ? {
              connect: args.data.recipe,
            }
          : undefined,
      },
    });
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => Step)
  @nestAccessControl.UseRoles({
    resource: "Step",
    action: "update",
    possession: "any",
  })
  async updateStep(@graphql.Args() args: UpdateStepArgs): Promise<Step | null> {
    try {
      return await this.service.update({
        ...args,
        data: {
          ...args.data,

          recipe: args.data.recipe
            ? {
                connect: args.data.recipe,
              }
            : undefined,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new apollo.ApolloError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.Mutation(() => Step)
  @nestAccessControl.UseRoles({
    resource: "Step",
    action: "delete",
    possession: "any",
  })
  async deleteStep(@graphql.Args() args: DeleteStepArgs): Promise<Step | null> {
    try {
      return await this.service.delete(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new apollo.ApolloError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.ResolveField(() => [StepIngredient])
  @nestAccessControl.UseRoles({
    resource: "StepIngredient",
    action: "read",
    possession: "any",
  })
  async stepIngredients(
    @graphql.Parent() parent: Step,
    @graphql.Args() args: StepIngredientFindManyArgs
  ): Promise<StepIngredient[]> {
    const results = await this.service.findStepIngredients(parent.id, args);

    if (!results) {
      return [];
    }

    return results;
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.ResolveField(() => Recipe, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "Recipe",
    action: "read",
    possession: "any",
  })
  async recipe(@graphql.Parent() parent: Step): Promise<Recipe | null> {
    const result = await this.service.getRecipe(parent.id);

    if (!result) {
      return null;
    }
    return result;
  }
}
