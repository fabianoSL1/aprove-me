import { IsEmail, IsNotEmpty, MaxLength } from 'class-validator';

export class AssignorDTO {
    @IsNotEmpty()
    @MaxLength(30, { message: 'max 30 caracters' })
    document: string;

    @IsEmail()
    @MaxLength(140, { message: 'max 140 caracters' })
    email: string;

    @IsNotEmpty()
    @MaxLength(30, { message: 'max 30 caracters' })
    phone: string;

    @IsNotEmpty()
    @MaxLength(140, { message: 'max 140 caracters' })
    name: string;
}
