import { Injectable } from '@angular/core';
import { User } from '../models';
import { InstituteStoreService } from './institute-store.service';

@Injectable({
  providedIn: 'root'
})
export class UserStoreService {
  private users: User[] = [];

  constructor(private srvInstitutes: InstituteStoreService) {
    this.populateStore();
  }

  private populateStore() {
    this.users.push(
      new User()
        .setName("Danny William")
        .setProfilePicture("assets/images/user-thumbnail-1.jpeg")
    );

    this.users.push(
      new User()
        .setName("Rick Novak")
        .setInstitute(this.srvInstitutes.get()[1])
        .setProfilePicture("assets/images/user-thumbnail-2.jpeg")
    );

    this.users.push(
      new User()
        .setName("Honda Takumi")
        .setInstitute(this.srvInstitutes.get()[1])
        .setProfilePicture("assets/images/user-thumbnail-3.jpg")
    );
  }

  get() {
    return this.users;
  }
}
