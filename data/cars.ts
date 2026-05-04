export interface Car {
  id: number;
  name: string;
  price: number;
  images: string[];
  type : string ;
  transmission: string;
  // year: number;
  fuel: string;
}

// export const cars: Car[] = [
//   // Add your cars here
// ];
export const cars: Car[] = [
  {
    id: 3,
    name: "Volkswagen T-Roc",
    price: 800,
    images: ["/trock.png"],
    type: "luxury",
    transmission: "Auto",
    fuel: "Petrol",
  },
  {
    id: 4,
    name: "Porsche 911",
    price: 2050,
    images: ["/911.png"],
    type: "sport",
    transmission: "Auto",
    fuel: "Petrol",
  },
  {
    id: 5,
    name: "Audi Q3",
    price: 850,
    images: ["/audiq3.png"],
    type: "suv",
    transmission: "Auto",
    fuel: "Petrol",
  },
  {
    id: 6,
    name: "Mercedes CLA",
    price: 900,
    images: ["/cla.png"],
    type: "luxury",
    transmission: "Auto",
    fuel: "Petrol",
  },
  {
    id: 7,
    name: "Renault Clio",
    price: 250,
    images: ["/clio.png"],
    type: "economy",
    transmission: "Manual",
    fuel: "Petrol",
  },
  {
    id: 8,
    name: "Dacia Logan",
    price: 300,
    images: ["/Logan.png"],
    type: "economy",
    transmission: "Manual",
    fuel: "Petrol",
  },
  {
    id: 9,
    name: "Range Rover Sport",
    price: 1000,
    images: ["/range.png"],
    type: "suv",
    transmission: "Auto",
    fuel: "Diesel",
  },
  {
    id: 10,
    name: "Volkswagen Touareg",
    price: 750,
    images: ["/touarge.png"],
    type: "suv",
    transmission: "Auto",
    fuel: "Diesel",
  },
  {
    id: 11,
    name: "Volkswagen Golf",
    price: 600,
    images: ["/vg.png"],
    type: "economy",
    transmission: "Manual",
    fuel: "Petrol",
  },
  {
    id: 12,
    name: "hyundai tucson",
    price: 500,
    images: ["/ticson.png"],
    type: "suv",
    transmission: "Auto",
    fuel: "Petrol",
  },
];