

## library environments examples ( .forRoot() )


```sh

# view to { "production": false }
npm start

# view to { "production": true }
npm start -- --prod


```

### files of interest

#### backend/src/lib/backend.module.ts

environment inject

```typescript

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
```


#### backend/src/lib/backend.service.ts

use inject environment

```typescript

  constructor(
    @Inject('environment') private environment: any,
) { }

```

#### src/app/app.module.ts

set environment

```sh
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BackendModule.forRoot(environment),
    BrowserModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
```

