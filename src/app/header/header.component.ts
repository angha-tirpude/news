import { NewsService } from '../news.service';
import { Component, OnInit } from '@angular/core';
import { News } from '../news.model';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
title;
newsfeed;
images;
search;
drop=false;
li;
searchTitle = 'LATEST';
customSearch = false;
latest; India; world; business;  technology; entertainment; states; cities; editorials; education;
newscollection : News[] = [];


  constructor(private service: NewsService ) { }
collection() {

}


// load by search
loadSearch() {
this.searchTitle = this.search.toUpperCase();
this.latest = this.service.getfeed1(this.search)
.subscribe(data => {
  const feed1 = data[0].articles;
  const feed2 = data[1].articles;

  this.latest = feed2;
  this.customSearch = true;
  console.log(this.newsfeed);
});
  }

// latestNews() {

// }
showDropdown() {
  this.drop = true;
  }


closeDropdown() {
     this.search = this.li;
    this.drop = false;
  }
 
  ngOnInit() {
  this.title = 'Results';
  
  // get feed
  const searchlatest = 'latest';
  const searchIndia = 'India';
  const searchworld = 'world';
  const searchbusiness = 'business';
  const searchtechnology = 'technology';
  const searchentertainment = 'entertainment';
  const searchstates = 'states';
  const searchcities = 'cities';
  const searcheditorials = 'editorials';


  this.latest = this.service.getfeed1(searchlatest)
  .subscribe(data => {
    const feed1 = data[0].articles;
    const feed2 = data[1].articles;

    this.latest = feed2;
    this.searchTitle
      console.log(this.latest);
  });



  this.India = this.service.getfeed1(searchIndia)
  .subscribe(data => {
    const feed1 = data[0].articles;
    const feed2 = data[1].articles;

    this.India = feed2;
      console.log(this.India);
  });


  this.world = this.service.getfeed1(searchworld)
  .subscribe(data => {
    const feed1 = data[0].articles;
    const feed2 = data[1].articles;

    this.world = feed2;

      console.log(this.world);
  });


  this.business = this.service.getfeed1(searchbusiness)
  .subscribe(data => {
    const feed1 = data[0].articles;
    const feed2 = data[1].articles;

    this.business = feed2;

      console.log(this.business);
  });


  this.technology = this.service.getfeed1(searchtechnology)
  .subscribe(data => {
    const feed1 = data[0].articles;
    const feed2 = data[1].articles;

    this.technology = feed2;

      console.log(this.technology);
  });

  this.entertainment = this.service.getfeed1(searchentertainment)
  .subscribe(data => {
    const feed1 = data[0].articles;
    const feed2 = data[1].articles;

    this.entertainment = feed2;

      console.log(this.entertainment);
  });



  this.states = this.service.getfeed1(searchstates)
  .subscribe(data => {
    const feed1 = data[0].articles;
    const feed2 = data[1].articles;

    this.states = feed2;

      console.log(this.states);
  });

  this.cities = this.service.getfeed1(searchcities)
  .subscribe(data => {
    const feed1 = data[0].articles;
    const feed2 = data[1].articles;

    this.cities = feed2;

      console.log(this.cities)
  });


  this.editorials = this.service.getfeed1(searcheditorials)
  .subscribe(data => {
    const feed1 = data[0].articles;
    const feed2 = data[1].articles;

    this.editorials = feed2;

      console.log(this.editorials);
  });



  this.collection();

  }

}

 