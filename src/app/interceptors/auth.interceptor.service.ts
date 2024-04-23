import { HttpHandlerFn, HttpRequest, HttpResponse } from "@angular/common/http";

export function authInterceptor(req:HttpRequest<any> , next:HttpHandlerFn) {
    // console.log(req);
    let modeifiesReq = req;
    if (req.method == "POST") {
        modeifiesReq = req.clone({
            headers: req.headers.append("lang", "en")
        }) 
    }


    return next(modeifiesReq);
}