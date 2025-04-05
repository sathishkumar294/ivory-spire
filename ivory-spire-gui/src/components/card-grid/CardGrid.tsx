// src/components/CardGrid.js
import React from "react";
import "./CardGrid.css";
import Card from "../card/Card";

interface ICardGridProps {
  items: Shortcut[];
}

function CardGrid({ items }: ICardGridProps) {
  return (
    <div className="card-grid">
      {items.map((item, idx) => (
        <Card
          key={idx}
          title={item.title}
          imageUrl={item.icon}
          url={item.url}
        />
      ))}
    </div>
  );
}

export default CardGrid;
