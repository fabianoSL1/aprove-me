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
import { AssignorDTO } from './dtos/assignor.dto';
import { AssignorService } from './assignor.service';
import { Response } from 'express';

@Controller()
export class AssignorController {
    constructor(private readonly assignorService: AssignorService) {}

    @Post()
    async create(@Body() createAssignor: AssignorDTO, @Res() res: Response) {
        const assignor =
            await this.assignorService.createAssignor(createAssignor);
        return res.status(HttpStatus.CREATED).json(assignor);
    }

    @Get(':id')
    async get(@Param('id') assignorId: string) {
        return await this.assignorService.findById(assignorId);
    }

    @Delete(':id')
    async destroy(@Param('id') assignorId: string) {
        return await this.assignorService.destroy(assignorId);
    }

    @Put(':id')
    async update(
        @Param('id') assignorId: string,
        @Body() assignor: AssignorDTO,
    ) {
        return await this.assignorService.update(assignorId, assignor);
    }
}
