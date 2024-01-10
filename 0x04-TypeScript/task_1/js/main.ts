export interface Teacher {
  readonly firstName: string;
  readonly lastName: string;
  fullTimeEmployee: boolean;
  yearsOfExperience?: number;
  location: string;
  [index: string]: any;
}

export interface Directors extends Teacher {
  numberOfReports: number;
}

export interface PrintTeacherFunction {
  (firstName: string, lastName: string): string;
}

export function printTeacher(firstName: string, lastName: string): string {
  return `${firstName[0]}. ${lastName}`;
}

export interface StudentClassConstructor {
  new (firstName: string, lastName: string): StudentClass;
}

export interface StudentClass {
  workOnHomework(): string;
  displayName(): string;
}

export class StudentClass implements StudentClass {
  private _firstName!: string;
  private _lastName!: string;

  constructor(firstName: string, lastName: string) {
    this._firstName = firstName;
    this._lastName = lastName;
  }

  workOnHomework(): string {
    return "Currently working";
  }

  displayName(): string {
    return this._firstName;
  }
}

export function createStudent(
  ctor: StudentClassConstructor,
  firstName: string,
  lastName: string
): StudentClass {
  return new ctor(firstName, lastName);
}
