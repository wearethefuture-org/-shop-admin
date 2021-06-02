import { IBasicProduct } from './IProducts';
import { UserTableData, IOrderUser } from './IUsers';

export interface Common {
  id: number;
  createdAt: string;
  updatedAt: string;
}

export interface IBasicOrder extends Common {
  userId: number;
  status: string;
  amount: number;
}

export interface IProductToOrder extends Common{
  quantity: number;
  amount: number;
  product: IBasicProduct;
}

export interface IGetOrders extends IBasicOrder {
  productToOrder: Array<IProductToOrder>;
  user: UserTableData;
}

export interface IOrdersData {
  list: Array<IGetOrders>;
  loading: boolean;
  currentOrder: ICurrentOrder | null;
  error: string | null;
  count: number,
  totalPages: number,
}

export interface ICurrentOrder extends Common{
  status: string;
  amount: number;
  productToOrder: Array<IProductToOrder>;
  user: IOrderUser;
}
