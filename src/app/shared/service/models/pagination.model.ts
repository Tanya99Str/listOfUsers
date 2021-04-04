import {UserModel} from './user.model';

export class PaginationModel {
  page: number;
  per_page: number;
  total: number;
  total_pages: number;
  data: UserModel[];
}
