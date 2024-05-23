import { z } from 'zod';

export const updatePayableDtoSchema = z
    .object({
        value: z.number().min(0),
        emissionDate: z.string().datetime()
    })
    .required();

export type UpdatePayableDTO = z.infer<typeof updatePayableDtoSchema>;
