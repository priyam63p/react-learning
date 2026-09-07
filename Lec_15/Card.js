import { useState } from "react";

const foodItems = [
  { id: 1, food: "Pizza", price: 200 },
  { id: 2, food: "Burger", price: 150 },
  { id: 3, food: "Pasta", price: 180 },
  { id: 4, food: "Sandwich", price: 120 },
  { id: 5, food: "Fries", price: 80 },
  { id: 6, food: "Salad", price: 140 },
  { id: 7, food: "Tacos", price: 160 },
  { id: 8, food: "Sushi", price: 300 },
  { id: 9, food: "Steak", price: 450 },
  { id: 10, food: "Pancakes", price: 130 },
  { id: 11, food: "Waffles", price: 140 },
  { id: 12, food: "Ice Cream", price: 90 },
  { id: 13, food: "Donut", price: 60 },
  { id: 14, food: "Smoothie", price: 110 },
  { id: 15, food: "Coffee", price: 70 },
];

export default function Card() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        flexWrap: "wrap",
        gap: "15px",
      }}
    >
      {foodItems.map((value) => {
        return (
          <div key={value.id}>
            <FoofCart></FoofCart>
          </div>
        );
      })}
    </div>
  );
}
