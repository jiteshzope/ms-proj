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
    this.getPosts();
    // this.createNewPost();
    // this.updatePost();
    // this.deletePost();

    // this.simulateError();
  }

  simulateError(): void {
    this.http.get(`${this.baseUrl}/invalid-endpoint`).subscribe({
      next: (response) => console.log('next/data callback Response:', response),
      error: (error) => console.error('Error occurred:', error),
      complete: () => console.log('Request completed')
    });
  }

  // Method to retrieve posts
  // Here we are making a GET request to the JSONPlaceholder API to fetch a list of posts. We subscribe to the observable returned by the HttpClient's get method and handle the response, error, and completion cases.
  // we make an api call to `${this.baseUrl}/posts` . Here `${this.baseUrl}` is the backend API base URL and `/posts` is the endpoint we want to access. 
  getPosts(): void {
    this.http.get(`${this.baseUrl}/posts`).subscribe({
      next: (response) => console.log('Posts retrieved successfully:', response),
      error: (error) => console.error('Error retrieving posts:', error),
      complete: () => console.log('Posts retrieval request completed')
    });
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

  deletePost(): void {
    const postId = 1;

    this.http.delete(`${this.baseUrl}/posts/${postId}`).subscribe({
      next: (response) => console.log('Post deleted successfully:', response),
      error: (error) => console.error('Error deleting post:', error),
      complete: () => console.log('Post deletion request completed')
    });
  }



}
