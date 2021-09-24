import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { UserInfoService } from '../user-info.service';

@Component({
  selector: 'app-create-user-info',
  templateUrl: './create-user-info.component.html',
  styleUrls: ['./create-user-info.component.css'],
})
export class CreateUserInfoComponent implements OnInit {
  userInfoForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private userInfoService: UserInfoService,
    private router: Router
  ) {
    this.userInfoForm = this.fb.group({
      name: new FormControl('', [Validators.required]),
      age: new FormControl('', [Validators.required]),
      address: new FormControl('', [Validators.required]),
    });
  }

  ngOnInit(): void {}

  onSubmit() {
    this.userInfoService
      .addUserInfo(this.userInfoForm.value)
      .subscribe((res) => {
        this.router.navigate(['/']);
      });
  }
}
