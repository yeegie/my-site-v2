import { Controller } from '@nestjs/common';
import { StackService } from './stack.service';

@Controller('stack')
export class StackController {
  constructor(private readonly stackService: StackService) {}
}
