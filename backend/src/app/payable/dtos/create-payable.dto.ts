import { IsDate, IsNotEmpty, IsNumber } from 'class-validator';
import { AssignorDTO } from 'src/app/assignor/dtos/assignor.dto';

export class CreatePayableDTO {
    @IsNumber()
    value: number;

    @IsDate()
    emissionDate: Date;

    @IsNotEmpty()
    assignor: AssignorDTO | string;
}
