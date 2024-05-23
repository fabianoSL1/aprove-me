import {
    HttpException,
    HttpStatus,
    Injectable,
    PipeTransform,
} from '@nestjs/common';
import { ZodError, ZodSchema } from 'zod';

@Injectable()
export class ZodValidationPipe implements PipeTransform {
    constructor(private readonly schema: ZodSchema) {}

    transform(value: unknown) {
        try {
            return this.schema.parse(value);
        } catch (error) {
            if (error instanceof ZodError) {
                this.handlerZodException(error);
            }
        }
    }

    private handlerZodException(error: ZodError) {
        const fields = error.issues.map((issue) => {
            return {
                field: issue.path.join('.'),
                message: issue.message,
            };
        });

        throw new HttpException(fields, HttpStatus.BAD_REQUEST);
    }
}
