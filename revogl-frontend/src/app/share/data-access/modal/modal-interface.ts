//This is an interface for modal components
import { EventEmitter } from "@angular/core";

export interface IModal{
    close(): any,
    submit?(): any,
    title?: string,
    size?: string,
    closeEvent: EventEmitter<any>,
    submitEvent?: EventEmitter<any>
}