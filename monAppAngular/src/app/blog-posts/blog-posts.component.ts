import { Component, OnInit } from '@angular/core';
import { BlogService } from '../services/blog.service'; 

@Component({
  selector: 'app-blog-posts',
  templateUrl: './blog-posts.component.html',
  styleUrls: ['./blog-posts.component.css']
})
export class BlogPostsComponent implements OnInit {

  blogPosts: any = [];

  constructor(private blogService: BlogService) { }

  ngOnInit(): void {
    this.blogService.getBlogPosts().subscribe(data => {
      this.blogPosts = data;
    });
  }

}
