import { z } from 'zod';

export const assignorDtoSchema = z
    .object({
        document: z.string().max(30),
        email: z.string().email().max(140),
        phone: z.string().max(30),
        name: z.string().max(140),
    })
    .required();

export type AssignorDTO = z.infer<typeof assignorDtoSchema>;
