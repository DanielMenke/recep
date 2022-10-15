import { Module } from "@nestjs/common";
import { StepModuleBase } from "./base/step.module.base";
import { StepService } from "./step.service";
import { StepResolver } from "./step.resolver";

@Module({
  imports: [StepModuleBase],
  providers: [StepService, StepResolver],
  exports: [StepService],
})
export class StepModule {}
