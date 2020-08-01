import { Directive, ViewContainerRef} from '@angular/core';

@Directive({
    selector: '[widgets]'
})

export class WidgetDirective{
    constructor(public viewRef: ViewContainerRef){

    }
}