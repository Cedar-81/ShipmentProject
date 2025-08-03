"use client";
import StepperComponent from "./components/StepperComponent";
import PersonIcon from '@mui/icons-material/Person';

import * as React from 'react';
import Image from "next/image";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import KeyboardArrowLeftOutlinedIcon from '@mui/icons-material/KeyboardArrowLeftOutlined';

import Carrier from "@/public/carrier.png"

export default function Home() {

  const [showNav, setShowNav] = React.useState(false)

  return (
    <main className="flex min-h-screen">
      {/* Sidebar - Visible on mobile, hidden on desktop */}
      {showNav && <div className="fixed lg:hidden top-0 left-0 z-20 shadow-xl transition-colors">
        <Sidebar />
      </div>}

      {/* Sidebar - Hidden on mobile, visible on desktop */}
      <div className="hidden lg:block">
        <Sidebar />
      </div>
      
      <section className="w-full lg:ml-18">
        <Navbar setShowNav={setShowNav} />


        <div className="px-4 sm:px-6 lg:px-8 space-y-6 lg:space-y-10 mt-4 lg:mt-8">
          <StepperComponent />

          {/* Customer Info Section*/}
          <section className="bg-white px-4 sm:px-6 lg:px-8 py-4 rounded-xl">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-8">
              <div className="flex gap-3 sm:gap-4 items-center border-b sm:border-b-0 sm:border-r border-[#E5E5E5] pb-4 sm:pb-0">
                <div className="size-8 sm:size-10 bg-gray rounded-full flex items-center justify-center flex-shrink-0">
                  <PersonIcon className="text-brand text-sm sm:text-base" />
                </div>
                <div className="min-w-0 flex-1">
                  <p className="text-xs text-dark-gray">Customer name</p>
                  <h4 className="font-bold text-sm sm:text-base truncate">Adedamola Olarele</h4>
                </div>
              </div>
              
              <div className="flex gap-3 sm:gap-4 items-center border-b sm:border-b-0 sm:border-r border-[#E5E5E5] pb-4 sm:pb-0 px-0 sm:px-4 lg:px-8">
                <div className="size-8 sm:size-10 bg-gray rounded-full flex items-center justify-center flex-shrink-0">
                  <PersonIcon className="text-brand text-sm sm:text-base" />
                </div>
                <div className="min-w-0 flex-1">
                  <p className="text-xs text-dark-gray">Business name</p>
                  <h4 className="font-bold text-sm sm:text-base truncate">Dolf Technologies</h4>
                </div>
              </div>
              
              <div className="flex gap-3 sm:gap-4 items-center px-0 sm:px-4 lg:px-8">
                <div className="size-8 sm:size-10 bg-gray rounded-full flex items-center justify-center flex-shrink-0">
                  <PersonIcon className="text-brand text-sm sm:text-base" />
                </div>
                <div className="min-w-0 flex-1">
                  <p className="text-xs text-dark-gray">Unit no.</p>
                  <h4 className="font-bold text-sm sm:text-base">1E</h4>
                </div>
              </div>
            </div>
          </section>

          {/* Shipping Method Section */}
          <section className="space-y-4 lg:space-y-6">
            <h2 className="text-lg sm:text-xl font-bold px-2">Shipping Method</h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-8">
              {/* Consignee Details */}
              <div className="w-full bg-white rounded-t-xl py-4">
                <div>
                  <h3 className="font-bold px-4">Consignee Details</h3>
                </div>
                <div className="flex flex-col divide-y space-y-4 divide-gray">
                  {[
                    {title: "Full Name", data: "John Carter"}, 
                    {title: "Email Address", data: "john@wakabuy.com"}, 
                    {title: "Phone Number", data: "+1 01539 702257"}, 
                    {title: "Address Line 1", data: "20 Cooper Square"}, 
                    {title: "Country", data: "USA"}
                  ].map((item, idx) => (
                    <div className="px-4 py-2" key={idx}>
                      <h4 className="text-sm font-medium">{item.title}</h4>
                      <p className="text-xs text-[#818181] break-words">{item.data}</p>
                    </div>
                  ))}

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                    {[
                      {title: "State", data: "Florida"}, 
                      {title: "City", data: "Sebring"}, 
                      {title: "Zip", data: "33875"}
                    ].map((item, idx) => (
                      <div className="px-4 w-full py-2" key={idx}>
                        <h4 className="text-sm font-medium">{item.title}</h4>
                        <p className="text-xs text-[#818181]">{item.data}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Shipping Details */}
              <div className="w-full bg-white rounded-t-xl py-4">
                <div>
                  <h3 className="font-bold px-4">Shipping Details</h3>
                </div>
                <div className="flex flex-col divide-y space-y-4 divide-gray">
                  {[
                    {title: "Method Name", data: "Air Freight"}, 
                    {title: "Shipping Date", data: "JUL-25-2025"}, 
                    {title: "Carrier", data: ""}, 
                    {title: "ETA", data: "JUL-03-2025"}, 
                    {title: "Price", data: "$20.00"}
                  ].map((item, idx) => (
                    <div className="px-4 py-2" key={idx}>
                      <h4 className="text-sm font-medium">{item.title}</h4>
                      {item.title !== "Carrier" ? (
                        <p className="text-xs text-[#818181] break-words">{item.data}</p>
                      ) : (
                        <div className="mt-2">
                          <Image 
                            alt="carrier" 
                            height={23} 
                            width={172} 
                            className="border-2 max-w-full h-auto" 
                            src={Carrier} 
                          />
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* Textarea and Cost Section */}
          <section className="grid grid-cols-1 lg:grid-cols-3 gap-4 lg:gap-8">
            <textarea 
              name="" 
              id="" 
              placeholder="Add Details" 
              className="text-sm bg-white rounded-lg p-4 border border-[#BCBCBC] lg:col-span-2 min-h-[120px] resize-none"
            />
            
            <div className="bg-[#CEE5FF] border-brand rounded-lg flex flex-col sm:flex-row lg:flex-col justify-between divide-y sm:divide-y-0 sm:divide-x lg:divide-x-0 lg:divide-y divide-brand/10 py-4">
              <div className="text-center space-y-1 w-full py-2 sm:py-0">
                <h4 className="text-sm font-medium">Total Cost</h4>
                <p className="text-lg sm:text-xl font-semibold">$100.00</p>
              </div>
              <div className="text-center space-y-1 w-full py-2 sm:py-0">
                <h4 className="text-sm font-medium">Repacking/Consolidation</h4>
                <p className="text-lg sm:text-xl font-semibold">$10.00</p>
              </div>
              <div className="text-center space-y-1 w-full py-2 sm:py-0">
                <h4 className="text-sm font-medium">Total Shipping Cost</h4>
                <p className="text-lg sm:text-xl font-semibold text-brand">$510.00</p>
              </div>
            </div>
          </section>

          {/* Action Buttons */}
          <section className="flex flex-col sm:flex-row items-center justify-end w-full pb-6 lg:pb-10 gap-4">
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 w-full sm:w-auto">
              <button className="flex rounded-full cursor-pointer gap-2 text-sm font-bold py-3 items-center justify-center px-6 sm:px-8 bg-[#FF5E1424] w-full sm:w-auto">
                <KeyboardArrowLeftOutlinedIcon sx={{height: 20}} className="text-black" />
                <span>Back</span>
              </button>
              <button className="flex rounded-full cursor-pointer gap-2 text-sm font-bold py-3 items-center justify-center px-6 sm:px-8 text-center bg-brand text-white w-full sm:w-auto">
                Save for later
              </button>
              <button className="flex rounded-full cursor-pointer gap-2 text-sm font-bold py-3 items-center justify-center px-6 sm:px-8 text-center bg-brand/10 border-2 border-brand w-full sm:w-auto">
                Create Shipment
              </button>
            </div>
          </section>
        </div>
      </section>
    </main>
  );
}
