import { APP_BASE_HREF, registerLocaleData } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import en from '@angular/common/locales/en';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { en_US, NZ_I18N } from 'ng-zorro-antd/i18n';
import { environment } from '../environments/environment';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IconsProviderModule } from './icons-provider.module';
import { AntDesignModule } from './shared/ant-design/ant-design.module';
import { SidebarComponent } from './shared/components/sidebar/sidebar.component';
import { HomeComponent } from './shared/components/home/home.component';
import { DashboardModule } from './modules/dashboard/dashboard.module';
registerLocaleData(en);

@NgModule({
  declarations: [
    AppComponent, SidebarComponent, HomeComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    IconsProviderModule,
    AntDesignModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    DashboardModule
  ],
  providers: [
    { provide: NZ_I18N, useValue: en_US },
    { provide: APP_BASE_HREF, useValue: environment.baseHref },
  ],

  bootstrap: [AppComponent]
})
export class AppModule { }
