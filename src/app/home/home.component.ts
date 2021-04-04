import { Component, OnInit } from '@angular/core';
import {PaginationModel} from '../shared/service/models/pagination.model';
import {UserService} from '../shared/service/backend/user-service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  users: PaginationModel;
  pages = [];

  constructor(private _userService: UserService) {
    this.init();
  }

  init() {
    this._userService.findUsers().subscribe(next => {
      this.users = next;
      for (let i = 0; i < this.users.total_pages; i++) {
        this.pages.push(i);
      }
      return this.pages;
      console.log(this.pages);
    }, error => {
      console.error(error)
    });
  }

  openPage(n: number) {
    this._userService.findUsers(n).subscribe(next => {
      this.users = next;
    }, error => {
      console.error(error)
    });
  }


  ngOnInit(): void {
  }

}
