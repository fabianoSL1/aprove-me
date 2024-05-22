import { Module } from '@nestjs/common';
import { PayableService } from './payable.service';
import { PayableRepository } from './payable.repository';
import { PrismaService } from 'src/config/prisma/prisma.service';
import { PayableController } from './payable.controller';

@Module({
    controllers: [PayableController],
    providers: [PayableService, PayableRepository, PrismaService],
})
export class PayableModule {}
