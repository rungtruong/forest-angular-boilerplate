import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
// import { ToastrService } from 'ngx-toastr';
import { Router } from "@angular/router";
import { environment } from "../../../environments/environment";
import { STORAGE, ROUTE } from '../../core/ultils/systemconst';
import { HttpErrorCode } from '../ultils/http-error-code';
@Injectable({
  providedIn: 'root'
})
export class HttpService {
  constructor
    (private http: HttpClient,
      // private toast: ToastrService,
      private router: Router
    ) { }
  public sendToServer(method: string, api: string, body: any, header: any, onSuccess, onError?) {
    let bd = body || {};
    api = environment.endpoint + api;
    this.needExtendToken = true;
    let head = header || { 'Content-Type': 'application/json', 'version': "" };
    if (localStorage.getItem(STORAGE.TOKEN_KEY)) {
      head["X-Token"] = localStorage.getItem(STORAGE.TOKEN_KEY);
    }

    const headers = new HttpHeaders(head);
    if (!method)
      return;
    let request;
    switch (method.toLowerCase()) {
      case "get":
        let _body = { ...bd };
        Object.keys(_body).forEach(element => {
          if (_body[element] === "") {
            delete _body[element];
          }
        });
        let params = new HttpParams({ fromObject: _body });
        request = this.http.get(api, {
          headers: headers,
          params: params
        });
        break;
      case "post":
        // console.log(1111);
        // console.log(bd);
        request = this.http.post(api, bd, {
          headers: headers
        });
        break;
      case "put":
        request = this.http.put(api, bd, {
          headers: headers
        });
        break;
      case "delete":
        request = this.http.delete(api, {
          headers: headers
        });
        break;
      default:
        break;
    }
    request.subscribe(
      data => {
          if (data && !data.errorCode) {
            if (typeof onSuccess === "function") {
              onSuccess(data);
            }
          } else if (data) {
            this.handleError(data, onError);
          }
      },
      error => {
        this.handleError(error, onError);
      }
    )


  }
  handleError(error, callback) {
    let tem = (error.status !== undefined && error.status !== null) ? "status" : "errorCode";
    let err = HttpErrorCode[error[tem]];
    if (error[tem] == 401 || error[tem] == 403 || typeof (error[tem]) == "undefined") {
      //return login page.
      // this.toast.error("UNAUTHORIZED");
      localStorage.clear();
      this.router.navigate([ROUTE.ACCOUNT.LOGIN]);
    }
    // if (error[tem] == 0 || error[tem] == 504) {
    //   this.toast.error("Cannot connect to server, please contact to administrator");
    //   return "Cannot connect to server, please contact to administrator";
    // }
    // if (error[tem] == 5002) {
    //   this.toast.error("Login fail");
    //   return "Login fail";
    // }
    // if (error[tem] == 5031) {
    //   this.toast.error("Account is inactivated");
    //   return "Account is inactivated";
    // }
    // if (error[tem] == 500) {
    //   this.toast.error("Server error");
    //   return "Server error.";
    // }
    // if (error[tem] == 404) {
    //   this.toast.error("Wrong access");
    //   return "wrong access";
    // }
    if (typeof callback === "function") {
      callback(error);
    }
    // if (err) {
    //   this.toast.error(err);
    // }
    // else if (error.errorMessage) {
    //   this.toast.error(error.errorMessage);
    // }
  }
  needExtendToken: boolean = false;
  setExtend(value: boolean) {
    this.needExtendToken = value;
  }
  exetendToken() {
    // console.log("Extend token", new Date().getTime());

    // if (this.needExtendToken && localStorage.getItem(SYSTEMCONST.LOGIN_SAVE_TOKEN) && localStorage.getItem(SYSTEMCONST.TOKEN_TIME_OUT) && (new Date().getTime() < Number(localStorage.getItem(SYSTEMCONST.TOKEN_TIME_OUT))))
    //   this.sendToServer("POST", SYSTEMCONST.API.EXTEND_TOKEN, {
    //   }, null, data => {
    //     // data.timeout = 600;
    //     this.needExtendToken = false;
    //     localStorage.setItem(SYSTEMCONST.LOGIN_SAVE_TOKEN, data.token);
    //     localStorage.setItem(SYSTEMCONST.TOKEN_TIME_OUT, (new Date().getTime() + (data.timeout * 1000)).toString());
    //     console.log("Extend token OK");
    //   }, err => {
    //     console.log("extend token");
    //   }
    //   );
  }


}
