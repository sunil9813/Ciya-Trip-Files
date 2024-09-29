import React, { useEffect, useState } from "react";
import { IoMdClose } from "react-icons/io";
import { GiShoppingCart } from "react-icons/gi";
import { IoIosSearch } from "react-icons/io";
import { RiMenu4Fill } from "react-icons/ri";
import { NavLists } from "../../assets/data";

interface NavLinkProps {
  path: string;
  url: string;
  onClick?: () => void;
}
const NavLink: React.FC<NavLinkProps> = ({ path, url, onClick }) => <h1>Hotel Booking Project By GorkCoder</h1>;

// Reusable Logo component
const Logo = () => <h1>Hotel Booking Project By GorkCoder</h1>;

// Reusable AccountButtons component
const AccountButtons = () => <h1>Hotel Booking Project By GorkCoder</h1>;

// Reusable MobileMenu component
interface MobileMenuProps {
  isOpen: boolean;
  toggleMenu?: () => void;
}
const MobileMenu: React.FC<MobileMenuProps> = ({ isOpen, toggleMenu }) => <h1>Hotel Booking Project By GorkCoder</h1>;

export const Header = () => {
  return <h1>Hotel Booking Project By GorkCoder</h1>;
};
