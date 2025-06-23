import { HttpHeaders, HttpParams, HttpRequest } from '@angular/common/http';

export const PARAMS_REFRESH_TOKEN = new HttpParams().set('grant_type', 'refresh_token');

export const CLIENT_HEADER = new HttpHeaders({
  'Content-Type': 'application/json',
});

export function addToken(req: HttpRequest<any>, token: string): HttpRequest<any> {
  return req.clone({
    setHeaders: {
      Authorization: `Bearer ${token}`,
    },
  });
}