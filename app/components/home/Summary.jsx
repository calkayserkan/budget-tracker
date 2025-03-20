import React from "react";
import CustomPieChart from "../charts/CustomPieChart";
import LineCharts from "../charts/LineCharts";

function Summary() {
  return (
    <div className="min-h-fit my-1 w-full md:w-4/5 lg:w-4/5  text-center justify-center items-center mt-5">
      <p className="text-2xl mb-5">Summary</p>
      <div className="w-full h-[60dvh] grid grid-cols-5 grid-rows-6 gap-4">
        <div className="col-span-2 row-span-6 summary-card flex flex-col justify-center items-center ">
          <div className=" h-3/5 w-full grid grid-cols-2 justify-around items-center gap-10 px-5 ">
            <div className="row-span-4 summary-card-l3m border-oxfordBlue">
              <div className="h-1/4 bg-oxfordBlue text-oxfordBlue-light summary-card-l3m-title">
                income
              </div>
              <div className="h-3/4 summary-card-l3m-content flex flex-col justify-center items-center">
                <div className="summary-card-l3m-content-element ">
                  Salary : $400
                </div>
                <div className="summary-card-l3m-content-element ">
                  rental income : $300
                </div>
                <div className="summary-card-l3m-content-element ">
                  investments : $300
                </div>
              </div>
            </div>
            <div className="row-span-4 summary-card-l3m border-red-900">
              <div className="h-1/4 bg-red-900 summary-card-l3m-title text-red-200">
                expense
              </div>
              <div className="h-3/4 summary-card-l3m-content flex flex-col justify-center items-center">
                <div className="summary-card-l3m-content-element ">
                  Food : $100
                </div>
                <div className="summary-card-l3m-content-element ">
                  invoices : $300
                </div>
                <div className="summary-card-l3m-content-element ">
                  Entertainment : $100
                </div>
              </div>
            </div>
          </div>
          <div className="h-2/5 w-full">
            <CustomPieChart />
          </div>
        </div>
        <div className="col-span-3 row-span-2 col-start-3 summary-card">
          <LineCharts lineColor="#011936" />
        </div>
        <div className="col-span-3 row-span-2 col-start-3 row-start-3 summary-card">
          <LineCharts lineColor="#82181a" />
        </div>
        <div className="col-span-3 row-span-2 col-start-3 row-start-5 summary-card">
          <LineCharts lineColor="#498467" />
        </div>
      </div>
      <div className="w-full h-1/5 flex justify-center items-center bg-white mt-5">
        <div>a</div>
      </div>
    </div>
  );
}

export default Summary;
