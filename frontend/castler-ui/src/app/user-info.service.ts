import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class UserInfoService {
  BASE_URL = 'http://localhost:4000/api/';

  USER_URL = this.BASE_URL + 'userInfo';

  constructor(private httpClient: HttpClient) {}

  addUserInfo(userInfo: any) {
    return this.httpClient.post(this.USER_URL, userInfo);
  }

  getUserInfo() {
    return this.httpClient.get(this.USER_URL);
  }
}
