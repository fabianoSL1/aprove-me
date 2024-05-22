import { Routes } from '@nestjs/core';
import { AssignorModule } from 'src/app/assignor/assignor.module';
import { PayableModule } from 'src/app/payable/payable.module';

export const routes: Routes = [
    {
        path: '/integrations',
        children: [
            {
                path: '/assignor',
                module: AssignorModule,
            },
            {
                path: '/payable',
                module: PayableModule,
            },
        ],
    },
];
