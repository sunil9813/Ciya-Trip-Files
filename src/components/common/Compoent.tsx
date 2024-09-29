import React from "react";

interface ProgressProps {
  value: number;
  text: string;
}

interface CardProps {
  children: React.ReactNode;
}

export const Card: React.FC<CardProps> = ({ children }) => {
  return (
    <>
      <div className="shadow-s4 p-5 rounded-md my-10">{children}</div>
    </>
  );
};

export const Progress: React.FC<ProgressProps> = ({ value, text }) => {
  return (
    <>
      <div>
        <div className="flexc justify-between mb-2">
          <span className="progress-text font-semibold">{text}</span>
          <span className="progress-text text-sm">{value}%</span>
        </div>
        <div className="progress-container">
          <div className="progress-bar" style={{ width: `${value}%` }}></div>
        </div>
      </div>
    </>
  );
};
