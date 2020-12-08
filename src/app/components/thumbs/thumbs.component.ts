import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'app-thumbs',
    templateUrl: './thumbs.component.html',
    styleUrls: ['./thumbs.component.scss']
})

export class ThumbsComponent  {

    constructor() { }
    @Input() thumbs: number;
    @Input() inverse: boolean;
    @Output() clickThumb = new EventEmitter<number>();

    public up(): void {
        this.clickThumb.emit( 1 );
    }
    public down(): void {
        this.clickThumb.emit( -1 );
    }
}
