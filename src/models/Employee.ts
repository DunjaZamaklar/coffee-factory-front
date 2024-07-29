import { UserRole } from './UserRole';

export interface Employee {
  Id: string;
  FirstName: string;
  LastName: string;
  Address: string;
  City: string;
  Country: string;
  PhoneNumber: string;
  Email: string;
  Username: string;
  Password: string;
  Status: string;
  Role?: UserRole;
}