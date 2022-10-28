import { NgModule } from '@angular/core';
import { ToolbarModule } from 'primeng/toolbar';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { InputTextModule } from 'primeng/inputtext';
import { TableModule } from 'primeng/table';
import { TabViewModule } from 'primeng/tabview';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { DropdownModule } from 'primeng/dropdown';
import { CalendarModule } from 'primeng/calendar';
import { DialogModule } from 'primeng/dialog';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { SidebarModule } from 'primeng/sidebar';
import { ToastModule } from 'primeng/toast';
import { SplitButtonModule } from 'primeng/splitbutton';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule, NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MenuModule } from 'primeng/menu';
import {PanelMenuModule} from 'primeng/panelmenu';
import { MessageService } from 'primeng/api';
import { ConfirmationService } from 'primeng/api';


@NgModule({
    declarations: [],
    imports: [
        ToolbarModule,
        ButtonModule,
        CardModule,
        InputTextModule,
        TableModule,
        TabViewModule,
        InputTextareaModule,
        DropdownModule,
        CalendarModule,
        DialogModule,
        ConfirmDialogModule,
        SidebarModule,
        ToastModule,
        SplitButtonModule,
        MenuModule,
        PanelMenuModule,
        BrowserModule,
        NoopAnimationsModule
    ],
    exports: [
        ToolbarModule,
        ButtonModule,
        CardModule,
        InputTextModule,
        TableModule,
        TabViewModule,
        InputTextareaModule,
        DropdownModule,
        CalendarModule,
        DialogModule,
        ConfirmDialogModule,
        SidebarModule,
        ToastModule,
        SplitButtonModule,
        MenuModule,
        PanelMenuModule,
        BrowserModule,
        NoopAnimationsModule
    ]
})
export class PrimeNgModule { }