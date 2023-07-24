import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
// import { StoreModule } from '@ngrx/store';
// import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { AppComponent } from './app.component';
import { PagesModule } from './pages/pages.module';
import { CoreModule } from './core/core.module';
import { HttpClientModule } from '@angular/common/http';

// import { currenciesReducer } from './app.reducer';
// import { environment } from 'src/environments/environment';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    CoreModule,
    PagesModule,
    HttpClientModule,
    // StoreModule.forRoot(currenciesReducer),
    // StoreDevtoolsModule.instrument({
    //   maxAge: 25,
    //   logOnly: environment.production
    // }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
