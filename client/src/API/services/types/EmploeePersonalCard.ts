import { Dayjs } from "dayjs";

export interface IEmploeePersonalCard {
  id: string | number;
  generalExperience: string;
  state: string;
  status: string;
  generalInformation: {
    userType?: string;
    fullname?: string;
    role?: string;
    subdivision?: string;
    orgName?: string;
    phoneNumber?: string;
    email?: string;
  };
  personalInformation: {
    dateOfBirth: Dayjs | string | null;
    citizenship: string;
    maritalStatus: string;
    numberOfChildren: number;
    residentialAddress: string;
    tin: string;
    passport: string;
    insuranceNumber: string;
  };
  professionalInformation: {
    education: string;
    universityName: string;
    generalSpecialty: string;
    specialtyAccordingDiploma: string;
    yearOfGraduation: Dayjs | string | null;
  };
  experience: Array<{
    id: string | number;
    jobStatus: string;
    placeOfWork: string;
    position: string;
    startDate: Dayjs | string | null;
    endDate: Dayjs | string | null;
  }>;
  files: {
    qualificationFiles: File | null;
    personalFiles: File | null;
  };
}
