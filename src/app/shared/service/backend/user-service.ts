import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {Observable, throwError} from 'rxjs';
import {SERVER_API_URL} from '../../config/url';
import {PaginationModel} from '../models/pagination.model';
import {catchError} from 'rxjs/operators';

@Injectable({providedIn: 'root'})

export class UserService {
  constructor(private _httpClient: HttpClient) {
  }

  findUsers(page?: number): Observable<PaginationModel> {
    let param: HttpParams = new HttpParams();
    if (page) {
      param = param.set("page", String(page));
    }
    return this._httpClient.get<PaginationModel>(SERVER_API_URL + '/users', {params: param})
      .pipe(catchError(err => throwError(err)));

  }

}
