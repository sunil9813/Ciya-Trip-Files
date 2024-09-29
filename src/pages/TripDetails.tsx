import { useParams } from "react-router-dom";
import { booking, gallary1, gallary2, gallary3, gallary4, gallary5, trips } from "../assets/data";
import { Progress, Title } from "../utils/Route";
import { RxCalendar } from "react-icons/rx";
import { FaDownload, FaLocationDot, FaStar } from "react-icons/fa6";
import React, { useState } from "react";
import { IoBookmark, IoTimeOutline } from "react-icons/io5";
import { MdOutlineModeComment } from "react-icons/md";
import { FaMapMarkerAlt, FaShareAlt } from "react-icons/fa";
import { TbMessageReportFilled } from "react-icons/tb";
import { TitleDetails, TitleDetails2 } from "../components/common/Title";
import { RiVerifiedBadgeFill } from "react-icons/ri";
import { Card } from "../components/common/Compoent";
import { GoDotFill } from "react-icons/go";
import { AiFillMinusCircle } from "react-icons/ai";
import { options, Value } from "../utils";
import Select from "react-select";
import DatePicker from "react-date-picker";
import { CiCalendarDate } from "react-icons/ci";
import RangeSlider from "../components/common/RangeSlider";

interface ButtonProps {
  text: string;
  icon: React.ReactNode;
}
interface TripImgProps {
  img: string;
  desc: string;
}
interface TripRatingProps {
  rating: string;
}

export const TripDetails = () => {
  const { id } = useParams<{ id: string }>();
  const trip = trips.find((t) => t.id === Number(id));

  if (!trip) {
    return <p>Trip not found</p>;
  }

  return (
    <>
      <h1>Hotel Booking Project By GorkCoder</h1>
    </>
  );
};

export const Button: React.FC<ButtonProps> = ({ text, icon }) => {
  return <h1>Hotel Booking Project By GorkCoder</h1>;
};

export const TripImg: React.FC<TripImgProps> = ({ img, desc }) => {
  return <h1>Hotel Booking Project By GorkCoder</h1>;
};

export const TripRating: React.FC<TripRatingProps> = ({ rating }) => {
  return <h1>Hotel Booking Project By GorkCoder</h1>;
};

export const TripBooking = () => {
  return <h1>Hotel Booking Project By GorkCoder</h1>;
};

export const TripGallary = () => {
  return <h1>Hotel Booking Project By GorkCoder</h1>;
};

export const TripMap = () => {
  return <h1>Hotel Booking Project By GorkCoder</h1>;
};

export const TripReview = () => {
  return <h1>Hotel Booking Project By GorkCoder</h1>;
};

export const TripBookingForm = () => {
  return <h1>Hotel Booking Project By GorkCoder</h1>;
};

export const TripPriceSlider = () => {
  return <h1>Hotel Booking Project By GorkCoder</h1>;
};

export const TripLocation = () => {
  return <h1>Hotel Booking Project By GorkCoder</h1>;
};

export const TripForm = () => {
  return <h1>Hotel Booking Project By GorkCoder</h1>;
};
