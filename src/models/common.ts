export interface PaginationParams {
  _limit: number;
  _page: number;
  _totalRows: number;
}

export interface ListResponse<T> {
  data: T[];
  pagination: PaginationParams;
}

export interface ListParams {
  _page?: number;
  _limit?: number;
  _sort?: string;
  _order?: 'asc' | 'desc';

  [key: string]: any;
}

export interface ITokenInfo {
  accessToken: string | null;
  expiresAt: number | null;
  refreshToken: string | null;
}

export interface IItemList {
  id: string;
  name: string;
}

export interface IBox {
  id: string;
  name: string;
  list?: any
}