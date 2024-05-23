import { assignorDtoSchema } from 'src/app/assignor/dtos/assignor.dto';
import { z } from 'zod';

export const createPayableDtoSchema = z
    .object({
        value: z.number().min(0),
        emissionDate: z.string().datetime(),
        assignor: z.string().or(assignorDtoSchema),
    })
    .required();

export type CreatePayableDTO = z.infer<typeof createPayableDtoSchema>;
