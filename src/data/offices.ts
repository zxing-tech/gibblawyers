export interface OfficeAddress {
  address: string;
  phone: string | string[];
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
        phone: ["+6052410736", "+6052545042"],
        email: "admin@gibblawyers.com",
        mapUrl: "https://maps.app.goo.gl/pQtsuQaJv93UtJK97",
      },
    ],
  },
  {
    name: "Greentown Office",
    addresses: [
      {
        address:
          "No. 9B, Persiaran Greentown 4, Greentown Business Centre, 30450 Ipoh.",
        phone: "+60 5 241 0027",
        email: "admin@gibblawyers.com",
        mapUrl: "https://maps.app.goo.gl/iMnDNvTcaib2qCBZ9",
      },
    ],
  },
];
