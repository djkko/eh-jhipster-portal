import { IB } from 'app/shared/model/b.model';

export interface IA {
  id?: number;
  orderNo?: number;
  name?: string | null;
  code?: string | null;
  bs?: IB[] | null;
}

export const defaultValue: Readonly<IA> = {};
