import { Controller, Get } from '@nestjs/common';

@Controller('produts')
export class ProdutsController {

    @Get()
    getHello(): string {
        return "product";
    }


}




