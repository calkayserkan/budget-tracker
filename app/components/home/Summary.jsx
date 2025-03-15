import React from 'react'

function Summary() {
  return (
    <div className="min-h-fit my-1 w-full md:w-4/5 lg:w-3/5  text-center justify-center items-center">
      {/* <p className="text-3xl text-center mb-10">Summary</p> */}
      <div className="text-start">
        <p className="text-start">last 30 days</p>
        <div className="grid grid-cols-2 grid-rows-2 gap-10 py-5">
          <div className="summary-card">
            <div className="summary-card-content">
              <div className="summary-card-icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="size-10 text-[#e1e7e1]"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a.75.75 0 0 1-.75-.75V4.66L7.3 6.76a.75.75 0 0 1-1.1-1.02l3.25-3.5a.75.75 0 0 1 1.1 0l3.25 3.5a.75.75 0 1 1-1.1 1.02l-1.95-2.1v12.59A.75.75 0 0 1 10 18Z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <p className="summary-card-amount">25.000 TL</p>
            </div>
            <div className="summary-card-bottom">
              <p className="summary-card-link">view all</p>
            </div>
          </div>
          <div className="summary-card">
            <div className="summary-card-content">
              <div className="summary-card-icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="size-10 text-[#e1e7e1]"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 2a.75.75 0 0 1 .75.75v12.59l1.95-2.1a.75.75 0 1 1 1.1 1.02l-3.25 3.5a.75.75 0 0 1-1.1 0l-3.25-3.5a.75.75 0 1 1 1.1-1.02l1.95 2.1V2.75A.75.75 0 0 1 10 2Z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <p className="summary-card-amount">20.000 TL</p>
            </div>
            <div className="summary-card-bottom">
              <p className="summary-card-link">view all</p>
            </div>
          </div>
          <div className="summary-card col-span-2">
            <div className="summary-card-content">
              <div className="summary-card-icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="size-10 text-[#e1e7e1]"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a.75.75 0 0 1-.75-.75V4.66L7.3 6.76a.75.75 0 0 1-1.1-1.02l3.25-3.5a.75.75 0 0 1 1.1 0l3.25 3.5a.75.75 0 1 1-1.1 1.02l-1.95-2.1v12.59A.75.75 0 0 1 10 18Z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <p className="summary-card-amount">5.000 TL</p>
            </div>
            <div className="summary-card-bottom ">
              <p className="summary-card-link">view all</p>
            </div>
          </div>
        </div>
      </div>
      <div>
        <p className="text-start">All Time</p>
        <div className="grid grid-cols-2 grid-rows-2 gap-10 py-5">
          <div className="summary-card">
            <div className="summary-card-content">
              <div className="summary-card-icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="size-10 text-[#e1e7e1]"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a.75.75 0 0 1-.75-.75V4.66L7.3 6.76a.75.75 0 0 1-1.1-1.02l3.25-3.5a.75.75 0 0 1 1.1 0l3.25 3.5a.75.75 0 1 1-1.1 1.02l-1.95-2.1v12.59A.75.75 0 0 1 10 18Z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <p className="summary-card-amount">50.000 TL</p>
            </div>
            <div className="summary-card-bottom">
              <p className="summary-card-link">view all</p>
            </div>
          </div>
          <div className="summary-card">
            <div className="summary-card-content">
              <div className="summary-card-icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="size-10 text-[#e1e7e1]"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 2a.75.75 0 0 1 .75.75v12.59l1.95-2.1a.75.75 0 1 1 1.1 1.02l-3.25 3.5a.75.75 0 0 1-1.1 0l-3.25-3.5a.75.75 0 1 1 1.1-1.02l1.95 2.1V2.75A.75.75 0 0 1 10 2Z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <p className="summary-card-amount">40.000 TL</p>
            </div>
            <div className="summary-card-bottom">
              <p className="summary-card-link">view all</p>
            </div>
          </div>
          <div className="summary-card col-span-2">
            <div className="summary-card-content">
              <div className="summary-card-icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="size-10 text-[#e1e7e1]"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a.75.75 0 0 1-.75-.75V4.66L7.3 6.76a.75.75 0 0 1-1.1-1.02l3.25-3.5a.75.75 0 0 1 1.1 0l3.25 3.5a.75.75 0 1 1-1.1 1.02l-1.95-2.1v12.59A.75.75 0 0 1 10 18Z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <p className="summary-card-amount">10.000 TL</p>
            </div>
            <div className="summary-card-bottom ">
              <p className="summary-card-link">view all</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Summary