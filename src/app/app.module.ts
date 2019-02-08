import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { FileComponent } from './file/file.component';
import { ControlPanelComponent } from './control-panel/control-panel.component';
import { HeaderComponent } from './header/header.component';
import { FormsModule } from '@angular/forms';
import { TextService } from './text-service/text.service';
import { FooterComponent } from './footer/footer.component';
import { SynonymListComponent } from './synonym-list/synonym-list.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
    declarations: [
        AppComponent,
        FileComponent,
        ControlPanelComponent,
        HeaderComponent,
        FooterComponent,
        SynonymListComponent
    ],
    imports: [
        BrowserModule,
        HttpClientModule,
        FormsModule
    ],
    providers: [
        TextService
    ],
    bootstrap: [
        AppComponent
    ]
})
export class AppModule {
}
