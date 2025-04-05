// src/components/Header.js
import React from "react";
import "./Header.css";

interface IHeaderProps {
  name: string;
}

function Header({ name }: IHeaderProps) {
  return (
    <header className="header">
      <h1 className="name">{name}</h1>
    </header>
  );
}

export default Header;
