import React from "react";

interface CardProps {
  children: React.ReactNode;
}

function Card({ children }: CardProps) {
  return (
    <div
      className="px-[10rem] py-[4rem] rounded-[20px]
    shadow-2xl"
    >
      <div>{children}</div>
    </div>
  );
}

export default Card;
