export interface IItemList {
  id: string;
  name: string;
  date: Date;
}

export interface IBox {
  id: string;
  name: string;
  list?: any;
}

export interface IReqAddItem {
  idBox: string;
  item: IItemList;
}

export interface IReqRemoveItem {
  boxId: string;
  id: string;
}
