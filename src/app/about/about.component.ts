import { Component, OnInit, OnDestroy } from '@angular/core';
import { DataManagerService } from '../data-manager.service';
import { Post } from '../Post';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  
  favNumber = this.route.snapshot.params['favNum'];
  foodItem = this.route.snapshot.queryParams['food'];


  posts: Array<Post> = [];

  private livePostSub: any; // make the subscription reference "private"

  constructor(private data: DataManagerService, private route: ActivatedRoute){};

  ngOnInit(): void {
    this.livePostSub = this.data.getLivePosts().subscribe(data => this.posts = data);
  }

  ngOnDestroy(){
    this.livePostSub.unsubscribe();
  }

}
