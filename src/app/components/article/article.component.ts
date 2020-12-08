import { Component, Input } from '@angular/core';
import { Article } from 'src/app/interfaces/article';

@Component({
    selector: 'app-article',
    templateUrl: './article.component.html',
    styleUrls: ['./article.component.scss']
})

export class ArticleComponent {

    constructor() { }
    @Input() article: Article;
    @Input() inverse: boolean;

    public updateThumbCount( value: number ): void {
        // increase by 1
        if ( value === 1 && this.article.thumbs < 10 ) {
            ++this.article.thumbs;
        }
        // decrease by 1
        if ( value === -1 && this.article.thumbs > 0 ) {
            --this.article.thumbs;
        }
    }
}
