import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';

// Interceptor is used as a common place to modify outgoing HTTP requests and incoming HTTP responses. It can be used to add authentication tokens, log requests and responses, handle errors, or perform any other necessary transformations on the HTTP Request.
// In this example, the NewInterceptor is implemented to add an Authorization header with a token to every outgoing HTTP request. Additionally, it adds some custom headers, query parameters, and modifies the request body by adding new key-value pairs. The modified request is then passed to the next handler in the chain using handler.handle(modifiedRequest).
@Injectable()
export class NewInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<unknown>, handler: HttpHandler): Observable<HttpEvent<unknown>> {
    const token = 'mytoken';
    const safeBody =
      request.body !== null && typeof request.body === 'object' && !Array.isArray(request.body)
        ? (request.body as Record<string, unknown>)
        : {};

    const modifiedRequest = request.clone({
      // method: 'POST',
      url: request.url.replace('https', 'https'),
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
    return handler.handle(modifiedRequest);
  }
}
