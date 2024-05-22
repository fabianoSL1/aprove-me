import { Module } from '@nestjs/common';
import { RouterModule } from '@nestjs/core';
import { routes } from './config/routes';
import { AssignorModule } from './app/assignor/assignor.module';
import { PayableModule } from './app/payable/payable.module';

@Module({
    imports: [AssignorModule, PayableModule, RouterModule.register(routes)],
    controllers: [],
    providers: [],
})
export class AppModule {}
