import { Injectable, NotFoundException } from '@nestjs/common';
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
        
        const assignorPayload = this.assignorPayload(assignor);
        

        return await this.prisma.payable.create({
            data: {
                ...payable,
                emissionDate: payable.emissionDate,
                assignor: assignorPayload,
            },
        });
    }

    private assignorPayload(assignor: string | AssignorDTO) {
        let payload: Record<string, unknown> = {
            create: assignor
        }

        if (typeof assignor === 'string') {
            payload = {
                connect: {
                    id: assignor
                }
            }    
        }
        
        return payload;
    }

    async update(payableId: string, updatePayable: UpdatePayableDTO): Promise<Payable|null> {
        return await this.prisma.payable.update({
            data: updatePayable,
            where: {
                id: payableId
            }
        })
    }

    async findById(payableId: string): Promise<Payable> {
        const payable = await this.prisma.payable.findFirst({
            where: {
                id: payableId
            }
        })

        if (!payable) {
            throw new NotFoundException();
        }
        
        return payable;
    }

    async destroy(payableId: string): Promise<Payable> {
        return await this.prisma.payable.delete({
            where: {
                id: payableId
            }
        })
    }

}
