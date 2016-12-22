import { Component } from '@angular/core';

import {
  ApiService
} from './services/ApiService';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  constructor(private apiService: ApiService){

  }

  invokeApi(): void {
    this.apiService.get();
  }
}