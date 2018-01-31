
import { SharingService } from './services/sharing.service';
import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TranslatePipe } from '../translate/translate.pipe';
import { LogoutComponent } from '../components/logout/logout.component';
import { JsGridComponent } from '../components/controls/js-grid/js-grid.component';
import { Select2Component } from '../components/controls/select2/select2.component';
import { DtpickerComponent } from '../components/controls/dtpicker/dtpicker.component';
import { LanguageService } from './services/language.service';
import { DisabledAllDirective } from './directives/disabled-all.directive';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule
    ],
    declarations: [
        TranslatePipe,
        LogoutComponent,
        JsGridComponent,
        Select2Component,
        DtpickerComponent,
        DisabledAllDirective
    ],
    exports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        TranslatePipe,
        LogoutComponent,
        JsGridComponent,
        Select2Component,
        DtpickerComponent,
        DisabledAllDirective
    ], entryComponents: [
    ],
})
export class SharedModule {
    static forRoot(): ModuleWithProviders {
        return {
            ngModule: SharedModule,
            providers:
            [
                LanguageService, SharingService
            ]
        };
    }
}
