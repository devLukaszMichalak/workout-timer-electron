import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { AppComponent } from './app.component';
import { TimerComponent } from './timer/timer.component';
import { ResizeDirective } from './directives/resize.directive';

declare global {
  interface Window {
    electron: {
      ipcRenderer: import('electron').IpcRenderer;
    };
  }
}

@NgModule({
  declarations: [
    ResizeDirective,
    AppComponent,
    TimerComponent
  ],
  imports: [
    BrowserModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
