import { Component } from "@angular/core";
import { CommonModule } from "@angular/common";
@Component({
    selector:'products',
    templateUrl:'./products.html',
    styleUrls:['./products.css']
})
export class products{

    left_products = [
        {
            title: "Crisnat Developers",
            description: "This website is a guide and help to all the geeks who are beginner to coding. We provide solutions to coding problems free of cost. The guide is given in three languages: Java, Python and C. Also, the seeker can take help from the video tutorial provided from our youtube channel.",
            image: "./assets/developer.png",
            preview: "https://developer.crisnat.com/",
            previewtext:"Try Now"
        },
        {
            title: "Taaza Khabar",
            description: "This is and android application for latest news. The app also mentions the source and date of the news. Also it has the search option so that the user can search any news he desires.",
            image:"./assets/taazakhabar.png",
            preview: "https://play.google.com/store/apps/details?id=com.crisnat.taazakhabar",
            previewtext:"Try Now"
        },
        {
            title: "Crisnat Learning",
            description: "This website provides the facts that are not known to us in general or is a mystry till date! We love to explore in tech as well as the real world. Some mystries have been resolved and some is under research.",
            image: "./assets/logo.png",
            preview: "https://www.crisnat.com/",
            previewtext: "Try Now"
        }
    ];


    right_products = [
        {
            title: "Crisnat Driving Licence Status",
            description: "This application is provides an easy way to track the status of driving licence status. It uses the data from e-pariwahan government website.",
            image: "./assets/driving.png",
            preview: "https://play.google.com/store/apps/details?id=com.crisnat.drivinglicenseapplicationstatus",
            previewtext: "Try Now"
        },
        {
            title: "Sharotary",
            description: "This is an android application for writing stories. Yes, we listen you! People who lack to talk to someone can share their thoughts and story here.",
            image: "./assets/logo.png",
            preview: "https://developer.crisnat.com/",
            previewtext: "Try Now"
        },
    ];

}