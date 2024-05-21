import { Injectable } from '@nestjs/common';
import { AssignorDTO } from './dtos/assignor.dto';
import { Assignor } from './interfaces/assignor.interface';
import { PrismaService } from '../../config/prisma/prisma.service';

@Injectable()
export class AssignorRepository {
    constructor(private readonly prisma: PrismaService) {}

    async save(createAssignor: AssignorDTO): Promise<Assignor> {
        return await this.prisma.assignor.create({ data: createAssignor });
    }

    async findById(assignorId: string): Promise<Assignor> {
        return await this.prisma.assignor.findFirst({
            where: { id: assignorId },
        });
    }

    async update(
        assignorId: string,
        assignorDTO: AssignorDTO | Assignor,
    ): Promise<Assignor> {
        return await this.prisma.assignor.update({
            data: assignorDTO,
            where: { id: assignorId },
        });
    }

    async destroy(assignorId: string): Promise<Assignor> {
        return await this.prisma.assignor.delete({
            where: { id: assignorId },
        });
    }
}
