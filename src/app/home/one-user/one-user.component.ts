import {Component, Input, OnInit} from '@angular/core';
import {UserModel} from '../../shared/service/models/user.model';

@Component({
  selector: 'app-one-user',
  templateUrl: './one-user.component.html',
  styleUrls: ['./one-user.component.scss']
})
export class OneUserComponent implements OnInit {

  description: string;
  @Input() user: UserModel;

  constructor() { }

  changeLimit(p: string, limit: number): string {
    let text = [];
    text = p.split('');
    if (text.length > limit) {
      this.description = text.slice(0, limit).join('');
    } else {
      this.description = p;
    }
    return this.description;
  }

  ngOnInit(): void {
  }

}
