// src/components/Card.js
import React from "react";
import "./Card.css";

interface ICardProps {
  title: string;
  imageUrl: string;
  url: string;
}

function Card({ title, imageUrl, url }: ICardProps) {
  return (
    // The entire card is a link opening in a new tab
    <a
      href={url}
      target="_blank" // Opens in new tab
      rel="noopener noreferrer" // Security best practice
      className="shortcut-card"
    >
      <img src={imageUrl} alt={title} className="card-image" />
      <h3 className="card-title">{title}</h3>
    </a>
  );
}

export default Card;
