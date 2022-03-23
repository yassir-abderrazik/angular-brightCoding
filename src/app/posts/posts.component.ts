import { PostService } from './../services/post.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  posts: any;
  post: any = {
    id: null,
    title: null,
    body: null,
    userId: '4',
  }
  status: boolean = true;
  constructor(private postservice: PostService) {

  }

  ngOnInit(): void {
    this.getPosts();
  }

  getPosts() {
    this.postservice.getPosts().subscribe(response => { this.posts = response })
  }

  createPost() {
    this.postservice.createPost(this.post).subscribe(response => {
      this.post = response;
      this.posts.unshift(this.post)
    })
  }

  editClick(post: any) {
    this.post = post;
    this.status = false
  }
  UpdatePost() {
    this.postservice.UpdatePost(this.post).subscribe(response => {
        this.post = {
          id: null,
          title: null,
          body: null,
          userId: '4',
        };
        this.status = true
      })
  }
  deletePost(post: any) {
    this.postservice.deletePost(this.post)
    .subscribe( response => { this.posts.splice(this.posts.indexOf(post), 1);
        }, (error: Response) => {
        if(error.status === 404){
          alert('ce post déja supp')
        }else{
          alert('erreur inattendue')
        }
      })
  }
}
