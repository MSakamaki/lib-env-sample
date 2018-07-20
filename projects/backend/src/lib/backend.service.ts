import { Injectable, Inject } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BackendService {

  constructor(
    @Inject('environment') private environment: any,
) { }

  call() {
    console.log('environment', this.environment);
  }

  get env() {
    return this.environment;
  }
}
