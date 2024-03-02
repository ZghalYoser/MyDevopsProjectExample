import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BlogService {

  constructor(private http: HttpClient) { }

  getBlogPosts() {
    return this.http.get('http://localhost:8000/api/blogposts/');
  }
}
