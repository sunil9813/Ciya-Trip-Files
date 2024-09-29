import { useState } from "react";
import { Title } from "../../utils/Route";
import { dots } from "../../assets/data";
import { FaMapMarkerAlt } from "react-icons/fa";
import { TitleDetails2 } from "../../components/common/Title";

interface Dot {
  top: string;
  left: string;
  info: string;
  image: string;
  country: string;
}

export const Map: React.FC = () => {
  return <h1>Hotel Booking Project By GorkCoder</h1>;
};
