import { Directive, ViewContainerRef} from '@angular/core';

@Directive({
    selector: '[widgets]'
})

export class HostDirective{
    constructor(public viewRef: ViewContainerRef){

    }
}