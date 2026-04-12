import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-http-examples',
  templateUrl: './http-examples.component.html',
  styleUrls: ['./http-examples.component.css']
})
export class HttpExamplesComponent implements OnInit {

  private readonly baseUrl = 'https://jsonplaceholder.typicode.com';

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.createNewPost();
    this.updatePost();
  }

  createNewPost(): void {
    const postData = {
      title: 'foo',
      body: 'bar',
      userId: 1
    };

    this.http.post(`${this.baseUrl}/posts`, postData).subscribe({
      next: (response) => console.log('Post created successfully:', response),
      error: (error) => console.error('Error creating post:', error),
      complete: () => console.log('Post creation request completed')
    });
  }

  updatePost(): void {
    const updatedData = {
      title: 'Updated Title',
      body: 'Updated Body',
      userId: 1
    };

    this.http.put(`${this.baseUrl}/posts/${updatedData.userId}`, updatedData).subscribe({
      next: (response) => console.log('Post updated successfully:', response),
      error: (error) => console.error('Error updating post:', error),
      complete: () => console.log('Post update request completed')
    });
  }

}
