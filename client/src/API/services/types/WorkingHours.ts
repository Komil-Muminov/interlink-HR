import { Dayjs } from "dayjs";

export interface ISignatureList {
  id?: number;
  fullname: string;
  role: string;
  status?: boolean;
}

export interface IWorkingHours {
  id: string | number;
  month: Dayjs | null;
  year: Dayjs | null;
  days: string;
  workingDays: Dayjs | null;
  weekendDays: Dayjs | null;
  executor: string;
  htmlContent?: string;
  state: string;
  signatureList: ISignatureList[];
}
