import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/config/prisma/prisma.service';
import { CreatePayableDTO } from './dtos/create-payable.dto';
import { AssignorDTO } from '../assignor/dtos/assignor.dto';
import { Payable } from './interfaces/payable.interface';
import { UpdatePayableDTO } from './dtos/update-payable.dto';

@Injectable()
export class PayableRepository {
    constructor(private readonly prisma: PrismaService) {}

    async create(createPayable: CreatePayableDTO): Promise<Payable> {
        const { assignor, ...payable } = createPayable;

        return await this.prisma.payable.create({
            data: {
                ...payable,
                assignor: {
                    connectOrCreate: {
                        where: {
                            id: assignor as string,
                        },
                        create: assignor as AssignorDTO,
                    },
                },
            },
        });
    }

    async update(
        payableId: string,
        updatePayable: UpdatePayableDTO,
    ): Promise<Payable> {
        return await this.prisma.payable.update({
            data: updatePayable,
            where: {
                id: payableId,
            },
        });
    }

    async find(payableId: string): Promise<Payable> {
        return await this.prisma.payable.findFirst({
            where: {
                id: payableId,
            },
        });
    }

    async destroy(payableId: string): Promise<Payable> {
        return await this.prisma.payable.delete({
            where: {
                id: payableId,
            },
        });
    }
}
