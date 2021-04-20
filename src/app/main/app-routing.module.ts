import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';

import { FuseSharedModule } from '@fuse/shared.module';
import { LogisticTemperatureComponent } from './logistic-temperature/logistic-temperature.component';

const routes: Routes = [
    {
        path:'logistic-temperature', component: LogisticTemperatureComponent
    }  
];

@NgModule({
    imports: [RouterModule.forRoot(routes),
        TranslateModule,
        FuseSharedModule],
    exports: [RouterModule]
  })


export class AppRoutingModule
{
}
