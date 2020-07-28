import { Controller, Get } from '@nestjs/common';
import { YysTVService } from './yysTV.service';
import { YysTV } from './yysTV.entity';

@Controller()
export class YysTVController {
  constructor(private readonly yysTVService: YysTVService) {}
  @Get('/api/v3/yysTV')
  getYysTV(): Promise<YysTV> {
    return this.yysTVService.findAll();
  }
}
