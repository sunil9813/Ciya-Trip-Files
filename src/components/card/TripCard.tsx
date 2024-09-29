import { FaLocationDot } from "react-icons/fa6";
import { RxCalendar } from "react-icons/rx";
import { FaStar } from "react-icons/fa";
import React from "react";
import { NavLink } from "react-router-dom";

interface TripCardProps {
  item: {
    id: number;
    image: string;
    flag: string;
    country: string;
    address: string;
    rating: string;
    discount: string;
    price: string;
    avatar: string;
    desc: string;
  };
}

export const TripCard: React.FC<TripCardProps> = ({ item }) => {
  return (
    <>
      <h1>TripCard</h1>
    </>
  );
};
