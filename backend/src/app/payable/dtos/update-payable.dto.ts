import { IsDate, IsNotEmpty, IsNumber } from 'class-validator';

export class UpdatePayableDTO {
    @IsNumber()
    value: number;

    @IsDate()
    emissionDate: Date;

    @IsNotEmpty()
    assignorId: string;
}
