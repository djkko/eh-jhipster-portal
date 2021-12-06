import { IA } from 'app/shared/model/a.model';

export interface IB {
  id?: number;
  appName?: string | null;
  appIconContentType?: string | null;
  appIcon?: string | null;
  a?: IA | null;
}

export const defaultValue: Readonly<IB> = {};
