import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ContactComponent } from './contact/contact.component';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ContactService } from './services/contact.service';

@NgModule({
    declarations: [AppComponent, ContactComponent],
    imports: [BrowserModule, HttpClientModule, FormsModule],
    providers: [ContactService, HttpClientModule],
    bootstrap: [AppComponent],
})
export class AppModule {}
