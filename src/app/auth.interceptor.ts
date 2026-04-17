import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpResponse
} from '@angular/common/http';
import { catchError, filter, map, Observable, of, tap } from 'rxjs';

// Interceptor is used as a common place to modify outgoing HTTP requests and incoming HTTP responses. It can be used to add authentication tokens, log requests and responses, handle errors, or perform any other necessary transformations on the HTTP Request.
// In this example, the AuthInterceptor is implemented to add an Authorization header with a token to every outgoing HTTP request. Additionally, it adds some custom headers, query parameters, and modifies the request body by adding new key-value pairs. The modified request is then passed to the next handler in the chain using handler.handle(modifiedRequest).
@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<unknown>, handler: HttpHandler): Observable<HttpEvent<unknown>> {
    const token = 'mytoken';
    const safeBody =
      request.body !== null && typeof request.body === 'object' && !Array.isArray(request.body)
        ? (request.body as Record<string, unknown>)
        : {};

    const modifiedRequest = request.clone({
      setHeaders: {
        Authorization: `Bearer ${token}`,
        header2 : 'value2',
        header3 : 'value3'
      },
      setParams: {
        param1: 'value1',
        param2: 'value2',
        param3: 'value3'
      },
      body: {
        ...safeBody,
        key1: 'value1',
        key2: 'value2',
        key3: 'value3'
      }
    });

    // By calling handler.handle(modifiedRequest), the modified request is sent either to the next interceptor in the chain (if there are multiple interceptors) or directly to the server if there are no more interceptors. This allows the modified request to be processed and sent to the server as intended. If you don't call handler.handle(modifiedRequest), the modified request will not be sent, and the HTTP request will effectively be blocked, thus it will not be sent to the server.
    // it is important to call handler.handle(modifiedRequest) to ensure that the modified request is sent to the server and the HTTP request lifecycle continues as expected. If you don't call handler.handle(modifiedRequest), the modified request will not be sent, and the HTTP request will effectively be blocked, thus it will not be sent to the server

    // Interceptor can be used to intercept/listen the incoming resonse of the HTTP request and modify it or just log it. For example, you can use the RxJS operators to modify the response before it reaches the component that made the HTTP request. You can also handle errors globally in the interceptor, so you don't have to handle them in every component that makes an HTTP request.
    // So basically here we can modify the data that is coming from the server before it reaches the component that made the HTTP request. This can be useful for adding additional data to the response, transforming the data into a different format, or handling errors in a centralized way.
    return handler.handle(modifiedRequest).pipe(
      tap((event) => {
        console.log('Response received in interceptor:', event);
      }),
      map((event) => {
        // Only map GET response bodies. Progress events and other methods pass through unchanged.
        if (modifiedRequest.method === 'GET' && event instanceof HttpResponse) {
          const originalBody = event.body as Record<string, unknown> | null;

          const mappedBody = originalBody
            ? {
                ...originalBody,
                interceptedAt: new Date().toISOString(),
                source: 'AuthInterceptor map()'
              }
            : originalBody;

          const mappedResponse = event.clone({ body: mappedBody });
          console.log('map : Response after modification in interceptor:', mappedResponse);
          return mappedResponse;
        }

        return event;
      }),
      catchError((err)=>{
        console.error('catchError : Error in interceptor:', err);
        // here you have two choices
        // 1. you can throw the error to be handled by the component that made the HTTP request
        // throw err;
        // throw new Error('An error occurred while processing the request.'); // you can also throw a custom error message or a custom error object to be handled by the component that made the HTTP request 
        // 2. you can return a default value or an empty response to the component that made the HTTP request
        return of(err); // returning the error as an observable to be handled by the component that made the HTTP request. You can also return a default value or an empty response instead of the error if you want to handle the error in a different way.
      })
    );
  }
}
