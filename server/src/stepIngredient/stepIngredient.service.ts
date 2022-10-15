import { Injectable } from "@nestjs/common";
import { PrismaService } from "nestjs-prisma";
import { StepIngredientServiceBase } from "./base/stepIngredient.service.base";

@Injectable()
export class StepIngredientService extends StepIngredientServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
