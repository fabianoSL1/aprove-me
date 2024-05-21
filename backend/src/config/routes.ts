import { Routes } from "@nestjs/core";
import { AssignorModule } from "src/app/assignor/assignor.module";

export const routes: Routes = [{
    path: '/integrations',
    children: [
        {
            path: '/assignor',
            module: AssignorModule
        }
    ]
}]