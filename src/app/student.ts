export interface Address {
    country: string;
    city: string;
    postcode: string;
  }
  
export interface Student {
    id: string;
    firstName: string;
    lastName: string;
    email: string;
    gender: string;
    created: string;
    totalSpentInBooks: number;
    favouriteSubjects: string[];
    address: Address;
}