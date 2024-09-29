import { BsPinMap } from "react-icons/bs";
import { quickLinks } from "../../assets/data";
import { TitleDetails2 } from "./Title";
import { NavLink } from "react-router-dom";
import React from "react";

interface CardProps {
  color: string;
}

export const Footer = () => {
  return (
    <>
      <h1>Footer</h1>
    </>
  );
};

export const Card: React.FC<CardProps> = ({ color }) => {
  return <h1>Card</h1>;
};
