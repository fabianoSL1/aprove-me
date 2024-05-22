import { Injectable } from '@nestjs/common';
import { PayableRepository } from './payable.repository';
import { CreatePayableDTO } from './dtos/create-payable.dto';
import { Payable } from './interfaces/payable.interface';
import { UpdatePayableDTO } from './dtos/update-payable.dto';

@Injectable()
export class PayableService {
    constructor(private readonly payableRepository: PayableRepository) {}

    async create(createPayable: CreatePayableDTO): Promise<Payable> {
        return await this.payableRepository.create(createPayable);
    }

    async find(payableId: string) {
        return await this.payableRepository.find(payableId);
    }

    async update(payableId: string, payable: UpdatePayableDTO) {
        return await this.payableRepository.update(payableId, payable);
    }

    async destroy(payableId: string) {
        return await this.payableRepository.destroy(payableId);
    }
}
