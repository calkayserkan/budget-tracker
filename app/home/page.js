import React from "react";
import User from "../components/home/User";
import Summary from "../components/home/Summary";
import Categories from "../components/home/Categories";
function page() {
  return (
    <div className="flex flex-col w-screen min-h-screen justify-start items-center text-black gap-10 bg-alabaster">
      <User />
      <Summary />
    </div>
  );
}

export default page;
