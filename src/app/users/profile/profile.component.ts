import { Component, OnInit } from '@angular/core';
import { IResponse } from '../models/i-reponse';
import { ProfileService } from '../services/profile.service';
import { UserModel } from '../models/user-model';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styles: [
  ]
})
export class ProfileComponent implements OnInit {

  public users: UserModel[] = [];
  constructor(private profileService: ProfileService) { }

  ngOnInit(): void {
    this.profileService.cargarUsuarios().subscribe(
      (resp) => {
        console.log(resp);
        this.users = resp;
      }
    );
  }

}
