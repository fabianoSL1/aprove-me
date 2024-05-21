import { Module } from '@nestjs/common';
import { RouterModule } from '@nestjs/core';
import { routes } from './config/routes';
import { AssignorModule } from './app/assignor/assignor.module';

@Module({
    imports: [
        AssignorModule,
        RouterModule.register(routes)
    ],
    controllers: [],
    providers: [],
})
export class AppModule {}
