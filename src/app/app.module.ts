import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { NavComponent } from './components/nav/nav.component';
import { ArticleComponent } from './components/article/article.component';
import { FooterComponent } from './components/footer/footer.component';
import { ArticlesComponent } from './components/articles/articles.component';
import { ThumbsComponent } from './components/thumbs/thumbs.component';

@NgModule({
    declarations: [
        AppComponent,
        HeaderComponent,
        NavComponent,
        ArticleComponent,
        FooterComponent,
        ArticlesComponent,
        ThumbsComponent
    ],
    imports: [
        BrowserModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
