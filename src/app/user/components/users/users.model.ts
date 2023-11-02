export interface User {
  id: number;
  name: string;
  username: string;
  email: string;
  address: AdderssI;
  phone: string;
  website: string;
  company: CompanyI;
}

export interface AdderssI {
  street: string;
  suite: string;
  city: string;
  zipcode: string;
  geo: GeoI;
}

export interface GeoI {
  lat: string;
  lng: string;
}
export interface CompanyI {
  name: string;
  catchPhrase: string;
  bs: string;
}