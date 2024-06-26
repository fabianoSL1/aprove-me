import { Injectable, NotFoundException } from '@nestjs/common';
import { Assignor } from './interfaces/assignor.interface';
import { AssignorRepository } from './assignor.repository';
import { AssignorDTO } from './dtos/assignor.dto';

@Injectable()
export class AssignorService {
    constructor(private readonly assignorRepository: AssignorRepository) {}

    async createAssignor(createAssignor: AssignorDTO): Promise<Assignor> {
        return await this.assignorRepository.save(createAssignor);
    }

    async findById(assignorId: string): Promise<Assignor> {
        const assignor = await this.assignorRepository.findById(assignorId);

        if (!assignor) {
            throw new NotFoundException();
        }

        return assignor;
    }

    async update(
        assignorId: string,
        updateAssignor: AssignorDTO,
    ): Promise<Assignor> {
        return await this.assignorRepository.update(assignorId, updateAssignor);
    }

    async destroy(assignorId: string): Promise<Assignor> {
        return await this.assignorRepository.destroy(assignorId);
    }
}
