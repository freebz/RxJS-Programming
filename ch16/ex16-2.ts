// 코드 16-2 HttpHandler 클래스

abstract class HttpHandler {
    abstract handle(req: HttpRequest<any>): Observable<HttpEvent<any>>
}
