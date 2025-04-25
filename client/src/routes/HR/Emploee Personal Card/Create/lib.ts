export const INITIAL_VALUES = {
  generalInformation: {
    userType: "Новый",
    fullname: "",
    role: "",
    subdivision: "",
    orgName: `ГУП "Центр финансовых информационных технологий"`,
    phoneNumber: "",
    email: "",
    status: "Активный",
  },
  personalInformation: {
    dateOfBirth: null,
    citizenship: "",
    maritalStatus: "Женат/Замужем",
    numberOfChildren: 0,
    residentialAddress: "",
    tin: "",
    passport: "",
    insuranceNumber: "",
  },
  professionalInformation: {
    education: "",
    universityName: "",
    generalSpecialty: "",
    specialtyAccordingDiploma: "",
    yearOfGraduation: null,
  },
  experience: [
    {
      id: "",
      jobStatus: "",
      placeOfWork: "",
      position: "",
      startDate: null,
      endDate: null,
    },
  ],
  files: {
    qualificationFiles: null,
    personalFiles: null,
  },
  state: "",
  status: "",
};

export const maritialStatus = [
  {
    id: 1,
    title: "Холост",
  },
  {
    id: 2,
    title: "Женат/Замужем",
  },
];
