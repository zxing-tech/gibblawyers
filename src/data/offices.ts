export interface OfficeAddress {
  address: string;
  phone: string;
  fax?: string;
  email: string;
  mapUrl: string;
}

export interface Office {
  name: string;
  addresses: OfficeAddress[];
}

export const OFFICES: Office[] = [
  {
    name: "Ipoh Office",
    addresses: [
      {
        address:
          "Unit 2, 7th floor, Ipoh Tower. Jalan Dato Seri Ahmad Said, 31350 Ipoh.",
        phone: "+605 547 1313",
        fax: "+605 548 1313",
        email: "admin@gibblawyers.com",
        mapUrl: "https://maps.app.goo.gl/pQtsuQaJv93UtJK97",
      },
    ],
  },
  {
    name: "Teluk Intan Office",
    addresses: [
      {
        address:
          "28A (1st Floor) Taman Ros, Jalan Sultan Abdullah, 36000, Teluk Intan, Perak, Malaysia.",
        phone: "+605 623 1713",
        fax: "+605 623 2713",
        email: "admin-ti@gibblawyers.com",
        mapUrl:
          "https://www.google.com/maps/place/Gibb+%26+Hope+Advocates+and+Solicitors/@4.0147023,101.0183558,15z/data=!4m9!1m2!2m1!1s28A+(1st+Floor)+Taman+Ros,+Jalan+Sultan+Abdullah,+36000,+Teluk+Intan,+Perak,+Malaysia!3m5!1s0x31cb15257124b8df:0xf59a1ceb4f398d43!8m2!3d4.0219803!4d101.0380411!15sClUyOEEgKDFzdCBGbG9vcikgVGFtYW4gUm9zLCBKYWxhbiBTdWx0YW4gQWJkdWxsYWgsIDM2MDAwLCBUZWx1ayBJbnRhbiwgUGVyYWssIE1hbGF5c2lhkgEGbGF3eWVy",
      },
    ],
  },
];
