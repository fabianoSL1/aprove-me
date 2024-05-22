import {
    Body,
    Controller,
    Delete,
    Get,
    HttpStatus,
    Param,
    Post,
    Put,
    Res,
} from '@nestjs/common';
import { PayableService } from './payable.service';
import { CreatePayableDTO } from './dtos/create-payable.dto';
import { Response } from 'express';
import { UpdatePayableDTO } from './dtos/update-payable.dto';

@Controller('payable')
export class PayableController {
    constructor(private readonly payableService: PayableService) {}

    @Post()
    async create(
        @Body() createPayable: CreatePayableDTO,
        @Res() response: Response,
    ) {
        const payable = await this.payableService.create(createPayable);
        response.status(HttpStatus.CREATED).json(payable);
    }

    @Get(':id')
    async find(@Param('id') payableId: string) {
        return await this.payableService.find(payableId);
    }

    @Put(':id')
    async update(
        @Param('id') payableId: string,
        @Body() payable: UpdatePayableDTO,
    ) {
        return await this.payableService.update(payableId, payable);
    }

    @Delete(':id')
    async destroy(@Param('id') payableId: string) {
        return await this.payableService.destroy(payableId);
    }
}
