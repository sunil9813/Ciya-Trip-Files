import React from "react";
import { paper } from "../../assets/data";

interface TitleProps {
  title1: string;
  title2: string;
  text: string;
  page: boolean;
}
interface TitlesProps {
  title: string;
}
interface TitlesProps2 {
  title: string;
}

export const Title: React.FC<TitleProps> = ({ title1, title2, text, page }) => {
  return (
    <>
      {page ? (
        <>
          <div className="flex items-center gap-4">
            <img src={paper} alt="" />
            <div className="bg-primary h-6 w-1"></div>
            <span className="uppercase text-md text-slate-400">{text}</span>
          </div>
          <h1 className="lg:text-4xl text-xl flex gap-3 mt-4">
            {title1}
            <h2 className="font-semibold"> {title2}</h2>
          </h1>
        </>
      ) : (
        <>
          <div className="flex items-center gap-4">
            <img src={paper} alt="" />
            <div className="bg-primary h-6 w-1"></div>
            <span className="uppercase text-md text-gray-200">{text}</span>
          </div>
          <h1 className="text-4xl flex gap-3 mt-4">
            {title1}
            <h2 className="font-semibold text-white"> {title2}</h2>
          </h1>
        </>
      )}
    </>
  );
};

export const TitleDetails: React.FC<TitlesProps> = ({ title }) => {
  return (
    <>
      <h3 className="text-xl font-semibold pb-6 border-b border-gray-200 mb-6">{title}</h3>
    </>
  );
};

export const TitleDetails2: React.FC<TitlesProps2> = ({ title }) => {
  return (
    <>
      <h3 className="text-xl font-semibold">{title}</h3>
    </>
  );
};
