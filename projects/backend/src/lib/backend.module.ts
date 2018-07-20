import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';


@NgModule({
  imports: [
    CommonModule,
  ],
  declarations: [],
})
export class BackendModule {

  public static forRoot(environment: any): ModuleWithProviders {

    return {
        ngModule: BackendModule,
        providers: [
            {
                provide: 'environment',
                useValue: environment
            }
        ]
    };
  }
}
