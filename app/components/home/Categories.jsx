import React from "react";

function Categories() {
  return (
    <div className=" h-72  w-full md:w-4/5 lg:w-3/5 grid grid-cols-2 py-5 gap-5 text-center text-[#f2f3f2]">
      <div className="bg-[#aeb9ae] rounded-tl-[2rem] flex justify-center items-center category">
        Eğlence
      </div>
      <div className="bg-[#aeb9ae] rounded-tr-[2rem] flex justify-center items-center category">
        Fatura
      </div>
      <div className="bg-[#aeb9ae] rounded-bl-[2rem] flex justify-center items-center category">
        Mutfak
      </div>
      <div className="bg-[#aeb9ae] rounded-br-[2rem] flex justify-center items-center category">
        Kredi Kartı
      </div>
    </div>
  );
}

export default Categories;
