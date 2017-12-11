import {NgModule} from '@angular/core';
import {ReactiveFormsModule} from '@angular/forms';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {AdminAreaComponent} from './layout/admin/admin-area/admin-area.component';
import {AdminComponent} from './layout/admin/admin.component';
import {AdminModule} from './layout/admin/admin.module';
import {PublicComponent} from './layout/public/public.component';
import {PublicModule} from './layout/public/public.module';
import {SecureComponent} from './layout/secure/secure.component';
import {SecureModule} from './layout/secure/secure.module';
import {DropdownDirective} from './shared/directives/dropdown/dropdown.directive';

@NgModule({
  declarations: [
    AppComponent,
    SecureComponent,
    PublicComponent,
    AdminComponent,
    AdminAreaComponent,
    DropdownDirective,
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    PublicModule,
    AdminModule,
    SecureModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
