import { Injectable } from '@angular/core';
import { Course, Institute } from '../models';

@Injectable({
  providedIn: 'root'
})
export class InstituteStoreService {
  private institutes: Institute[] = [];

  constructor() {
    this.populateStore();
  }

  private populateStore() {
    this.institutes.push(
      new Institute()
        .setName("University of Wollongong")
        .setThumbnail("assets/images/uow.png")
    );
    
    this.institutes.push(
      new Institute()
        .setName("French School of Kuala Lumpur")
    );

    this.institutes.push(
      new Institute()
        .setName("The University of Melbourne")
        .setThumbnail("assets/images/uom.png")
    );

    this.institutes.push(
      new Institute()
        .setName("University of Arizona")
        .setThumbnail("assets/images/uoa.png")
    );
  }

  get() {
    return this.institutes;
  }
}
