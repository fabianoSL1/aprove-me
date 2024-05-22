import { Module } from '@nestjs/common';
import { AssignorService } from './assignor.service';
import { AssignorRepository } from './assignor.repository';
import { AssignorController } from './assignor.controller';
import { PrismaService } from 'src/config/prisma/prisma.service';

@Module({
    controllers: [AssignorController],
    providers: [AssignorService, AssignorRepository, PrismaService],
})
export class AssignorModule {}
