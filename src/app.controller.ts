import { Controller, Get, Param } from '@nestjs/common';

@Controller('greet')
export class AppController {
  @Get(':name')
  getGreeting(@Param('name') name: string): string {
    return `Hello ${name} its death grips`;
  }
}
