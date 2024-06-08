export interface EmployeeFormValues {
    firstName: string
    lastName: string
    age: string
    jobTitle: string
    termsAccepted: boolean
  }
  
  export enum EMPLOYEE_FORM_NAMES {
    FIRST_NAME = 'firstName',
    LAST_NAME = 'lastName',
    AGE = 'age',
    JOB_TITLE = 'jobTitle',
    TERMS_ACCEPTED = 'termsAccepted',
  }
  