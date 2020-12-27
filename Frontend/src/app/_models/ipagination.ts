import { IPort } from "./port";

export interface IPagination {
  pageIndex: number;
  pageSize: number;
  count: number;
  data: IPort[];
}
