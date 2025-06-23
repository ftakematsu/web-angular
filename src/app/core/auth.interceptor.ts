import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { addToken } from "../config/http-header.const";
import { AuthService } from "../services/auth.service";

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
    // APIs que não terão o cabeçalho de autenticação
    private bypassUris = [
        '/login',
        '/auth', 
    ];

    constructor(private authService: AuthService) {}

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        // Se a URL da requisição for uma das URLs do ByPass
        // Apenas retornar a requisição sem os headers
        if (this._isBypassUrls(req.url)) {
          return next.handle(req);
        }

        // Obtém o token de autenticação
        const token = this.authService.getToken();
        // Adiciona o token ao cabeçalho
        req = addToken(req, token!);
        return next.handle(req);
    }

    private _isBypassUrls(url: string): boolean {
        return this.bypassUris.some((uri) => url.includes(uri));
    }

}