import { Injectable } from "@nestjs/common";
import { PrismaService } from "nestjs-prisma";
import { StepServiceBase } from "./base/step.service.base";

@Injectable()
export class StepService extends StepServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
