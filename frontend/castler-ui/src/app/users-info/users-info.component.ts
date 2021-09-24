import { Component, OnInit } from '@angular/core';
import { UserInfoService } from '../user-info.service';
import { IUserInfo } from '../entities/IUserInfo';

@Component({
  selector: 'app-users-info',
  templateUrl: './users-info.component.html',
  styleUrls: ['./users-info.component.css'],
})
export class UsersInfoComponent implements OnInit {
  displayedColumns: string[] = ['name', 'age', 'address'];
  users: IUserInfo[] = [];

  constructor(private userInfoService: UserInfoService) {}

  ngOnInit(): void {
    this.userInfoService.getUserInfo().subscribe((res: any) => {
      this.users = res;
    });
  }
}
