import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpService } from "../../../core/_services/http.service";
import { TokenStorageService } from "../../../core/_services/token-storage.service";
import { API } from 'src/app/core/ultils/systemconst';
import { JSUtils } from "../../../core/ultils/jsutils";
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.less']
})
export class LoginComponent implements OnInit {
  validateForm!: FormGroup;

  submitForm(): void {
    for (const i in this.validateForm.controls) {
      this.validateForm.controls[i].markAsDirty();
      this.validateForm.controls[i].updateValueAndValidity();
    }
    console.log(this.validateForm.controls);
    if (this.validateForm.valid) {
      this.getPublicKey();

    }
  }
  constructor(
    private fb: FormBuilder,
    private http: HttpService,
    private tokenService: TokenStorageService
  ) { }

  ngOnInit(): void {
    this.validateForm = this.fb.group({
      userName: [null, [Validators.required]],
      password: [null, [Validators.required]],
    });
  }

  getPublicKey() {
    this.http.sendToServer("GET", API.ACCOUNT.PUBLIC_KEY, {
      userName: this.validateForm.controls.userName.value
    }, { "Content-Type": "application/json", "format": "4" }, data => {
      if (data && data.key) {
        let publicKey = data.key;
        console.log(publicKey);

        const pass_raw = this.validateForm.controls.password.value.trim();
        const pass_Encrypt = JSUtils.rsaEncryptPublicKeyWithMD5AndMGF1Padding(publicKey, pass_raw);
        console.log(pass_raw);
        console.log(pass_Encrypt);
        this.tokenService.saveUser(this.validateForm.controls.userName.value);
        this.login(this.validateForm.controls.userName.value, pass_Encrypt);

      }
    });

  }
  login(username, password) {
    this.http.sendToServer("POST", API.ACCOUNT.LOGIN, {
      "userName": username,
      "password": password
    }, {
      "Content-Type": "application/json",
      "pkcs": "20"
    }, data => {
      console.log(data);

      // this.user.password = "";
      // this.user.username = "";


      // if (data.expiredAt) {
      //   this.router.navigate([ROUTE.LOGIN + "/" + ROUTE.VERIFY]);
      //   this.localStorageService.setOtpExpire(data.expiredAt);

      // } else {
      //   this.toastrService.error("Login fail");
      // }
    }, error => {
      // this.toastrService.error("Login fail");
    });
  }



}
