"use client";

import { useEffect, useState } from "react";
import { Car } from "@/data/cars";

export function useCars() {
  const [cars, setCars] = useState<Car[]>([]);

  useEffect(() => {
    fetch("https://sheetdb.io/api/v1/14kalpl1bvirj")
      .then((res) => res.json())
      .then((data) => {
        setCars(
          data.map((car: any) => ({
            id: Number(car.id),
            name: car.name,
            price: Number(car.price),
            images: [car.image],
            type: car.type,
            transmission: car.transmission,
            fuel: car.fuel,
          }))
        );
      });
  }, []);

  return cars;
}