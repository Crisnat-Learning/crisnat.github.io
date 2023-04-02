import { Component } from "@angular/core"
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';


@Component({
    selector:"app-home",
    templateUrl:"./homepage.html",
    styleUrls:['./homepage.css']
})
export class homepage{
    defaultElevation = 2;
    raisedElevation = 8;
    name = 'Angular';

    crisnatBlogUrl: SafeResourceUrl;

    constructor(private sanitizer: DomSanitizer) {
        this.crisnatBlogUrl = this.sanitizer.bypassSecurityTrustResourceUrl("https://www.crisnat.com");
    }
}