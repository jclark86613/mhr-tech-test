import { Component } from '@angular/core';
import { Article } from './../../interfaces/article';

@Component({
    selector: 'app-articles',
    templateUrl: './articles.component.html',
    styleUrls: ['./articles.component.scss']
})

export class ArticlesComponent {

    constructor() { }

    public mockData: Article[] = [
        {
            title: 'Heading One',
            thumbs: 0,
            content: [
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sit amet commodo nulla facilisi. Ut venenatis tellus in metus vulputate. Amet mauris commodo quis imperdiet massa. Sed felis eget velit aliquet sagittis id. Sit amet justo donec enim. Purus sit amet luctus venenatis lectus magna fringilla. Dignissim sodales ut eu sem integer vitae justo. Quis viverra nibh cras pulvinar.',
                'Nulla pharetra diam sit amet nisl suscipit adipiscing bibendum est. Ipsum a arcu cursus vitae congue mauris. Adipiscing bibendum est ultricies integer. Pretium vulputate sapien nec sagittis aliquam malesuada. Diam donec adipiscing tristique risus. Nunc congue nisi vitae suscipit tellus mauris a diam. A lacus vestibulum sed arcu non odio euismod lacinia at. Fringilla urna porttitor rhoncus dolor purus non enim praesent. Ac turpis egestas maecenas pharetra convallis posuere morbi leo urna. Enim nec dui nunc mattis enim.'
            ],
            tags: [ '#tag1', '#tag2', '#tag3' ]
        },
        {
            title: 'Heading Two',
            thumbs: 0,
            content: [ 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Tellus in metus vulputate eu scelerisque felis imperdiet proin. Amet tellus cras adipiscing enim eu turpis egestas pretium. Elit duis tristique sollicitudin nibh sit amet commodo. Elementum facilisis leo vel fringilla est ullamcorper eget nulla. Purus viverra accumsan in nisl nisi scelerisque eu. Sed risus ultricies tristique nulla. Dignissim sodales ut eu sem integer vitae justo eget magna.','Id venenatis a condimentum vitae sapien pellentesque habitant morbi. Turpis massa tincidunt dui ut ornare lectus. Amet facilisis magna etiam tempor orci eu lobortis elementum nibh. Luctus accumsan tortor posuere ac ut. Amet consectetur adipiscing elit ut aliquam purus. Viverra aliquet eget sit amet tellus. Lacus suspendisse faucibus interdum posuere lorem ipsum dolor. Maecenas ultricies mi eget mauris pharetra.' ],
            tags: [ '#tag1', '#tag2', '#tag3' ]

        },
        {
            title: 'Heading Three',
            thumbs: 0,
            content: [ 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Tellus in metus vulputate eu scelerisque felis imperdiet proin. Amet tellus cras adipiscing enim eu turpis egestas pretium. Elit duis tristique sollicitudin nibh sit amet commodo. Elementum facilisis leo vel fringilla est ullamcorper eget nulla. Purus viverra accumsan in nisl nisi scelerisque eu. Sed risus ultricies tristique nulla. Dignissim sodales ut eu sem integer vitae justo eget magna.','Id venenatis a condimentum vitae sapien pellentesque habitant morbi. Turpis massa tincidunt dui ut ornare lectus. Amet facilisis magna etiam tempor orci eu lobortis elementum nibh. Luctus accumsan tortor posuere ac ut. Amet consectetur adipiscing elit ut aliquam purus. Viverra aliquet eget sit amet tellus. Lacus suspendisse faucibus interdum posuere lorem ipsum dolor. Maecenas ultricies mi eget mauris pharetra.' ],
            tags: [ '#tag1', '#tag2', '#tag3' ]
        },
        {
            title: 'Heading Four',
            thumbs: 0,
            content: [ 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Tellus in metus vulputate eu scelerisque felis imperdiet proin. Amet tellus cras adipiscing enim eu turpis egestas pretium. Elit duis tristique sollicitudin nibh sit amet commodo. Elementum facilisis leo vel fringilla est ullamcorper eget nulla. Purus viverra accumsan in nisl nisi scelerisque eu. Sed risus ultricies tristique nulla. Dignissim sodales ut eu sem integer vitae justo eget magna.','Id venenatis a condimentum vitae sapien pellentesque habitant morbi. Turpis massa tincidunt dui ut ornare lectus. Amet facilisis magna etiam tempor orci eu lobortis elementum nibh. Luctus accumsan tortor posuere ac ut. Amet consectetur adipiscing elit ut aliquam purus. Viverra aliquet eget sit amet tellus. Lacus suspendisse faucibus interdum posuere lorem ipsum dolor. Maecenas ultricies mi eget mauris pharetra.' ],
            tags: [ '#tag1', '#tag2', '#tag3' ]
        }
    ];
}
