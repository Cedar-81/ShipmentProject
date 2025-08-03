"use client";
import StepperComponent from "./components/StepperComponent";
import PersonIcon from '@mui/icons-material/Person';

import * as React from 'react';
import Image from "next/image";
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import KeyboardArrowLeftOutlinedIcon from '@mui/icons-material/KeyboardArrowLeftOutlined';

import Carrier from "@/public/carrier.png"


export default function Home() {
  const [open, setOpen] = React.useState(false);

  const toggleDrawer = (newOpen: boolean) => () => {
    setOpen(newOpen);
  };
  
  const DrawerList = (
    <Box sx={{ width: 250 }} role="presentation" onClick={toggleDrawer(false)}>
      <List>
        {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        {['All mail', 'Trash', 'Spam'].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    
    <main className="flex">
      <Sidebar />
      <section className="w-full">
        <Navbar />
        <div className="lg:hidden"><Button onClick={toggleDrawer(true)}>Open drawer</Button></div>
        <Drawer open={open} onClose={toggleDrawer(false)}>
          {DrawerList}
        </Drawer>

        <div className="px-8 space-y-10 mt-8">
          <StepperComponent />

          <section className="flex bg-white px-8 py-4 rounded-xl justify-between">
            <div className="flex gap-4 items-center border-r border-r-[#E5E5E5] w-full">
              <div className="size-10 bg-gray rounded-full flex items-center justify-center"><PersonIcon className="text-brand" /></div>
              <div>
                <p className="text-xs text-dark-gray">Customer name</p>
                <h4 className="font-bold">Adedamola Olarele</h4>
              </div>
            </div>
            <div className="flex gap-4 items-center border-r border-r-[#E5E5E5] w-full px-8">
              <div className="size-10 bg-gray rounded-full flex items-center  justify-center"><PersonIcon className="text-brand" /></div>
              <div>
                <p className="text-xs text-dark-gray">Business name</p>
                <h4 className="font-bold">Dolf Technologies</h4>
              </div>
            </div>
            <div className="flex gap-4 items-center w-full px-8">
              <div className="size-10 bg-gray rounded-full flex items-center  justify-center"><PersonIcon className="text-brand" /></div>
              <div>
                <p className="text-xs text-dark-gray">Unit no.</p>
                <h4 className="font-bold">1E</h4>
              </div>
            </div>
          </section>

          <section className="space-y-6">
            <h2 className="text-xl font-bold">Shipping Method</h2>
            <div className="flex gap-8">
              <div className="w-full bg-white rounded-t-xl py-4">
                <div>
                  <h3 className="font-bold px-4">Consignee Details</h3>
                </div>
                <div className=" flex flex-col divide-y space-y-4 divide-gray">
                  {
                    [{title: "Full Name", data: "John Carter"}, {title: "Email Address", data: "john@wakabuy.com"}, {title: "Phone Number", data: "+1 01539 702257"}, {title: "Address Line 1", data: "20 Cooper Square"}, {title: "Country", data: "USA"}]
                    .map((item, idx) => <div className="px-4 py-2" key={idx}>
                      <h4 className="text-sm font-medium">{item.title}</h4>
                      <p className="text-xs text-[#818181]">{item.data}</p>
                    </div>)
                  }

                  <div className="flex justify-between">
                    {
                      [{title: "State", data: "Florida"}, {title: "City", data: "Sebring"}, {title: "Zip", data: "33875"}].map((item, idx) => <div className="px-4 w-full py-2" key={idx}>
                        <h4 className="text-sm font-medium">{item.title}</h4>
                        <p className="text-xs text-[#818181]">{item.data}</p>
                      </div>)
                    }
                  </div>
                </div>
              </div>

              <div className="w-full bg-white rounded-t-xl py-4">
                <div>
                  <h3 className="font-bold px-4">Shipping Details</h3>
                </div>
                <div className="flex flex-col divide-y space-y-4 divide-gray">
                  {
                    [{title: "Method Name", data: "Air Freight"}, {title: "Shipping Date", data: "JUL-25-2025"}, {title: "Carrier", data: ""}, {title: "ETA", data: "JUL-03-2025"}, {title: "Price", data: "$20.00"}]
                    .map((item, idx) => <div className="px-4 py-2" key={idx}>
                      <h4 className="text-sm font-medium">{item.title}</h4>
                      {item.title != "Carrier" ? <p className="text-xs text-[#818181]">{item.data}</p> :
                        <Image alt="carrier" height={23} width={172} className="border-2" src={Carrier} />
                      }
                    </div>)
                  }
                </div>
              </div>
              
            </div>
          </section>

          <section className="flex justify-between gap-8">
            <textarea name="" id="" placeholder="Add Details" className="text-sm bg-white rounded-lg p-4 w-2/3 border border-[#BCBCBC]"></textarea>
            <div className="bg-[#CEE5FF] border-brand rounded-lg w-full flex justify-between divide-x divide-brand/10 py-4">
              <div className="text-center space-y-1 w-full">
                <h4 className="text-sm font-medium">Total Cost</h4>
                <p className="text-xl font-semibold">$100.00</p>
              </div>
              <div className="text-center space-y-1 w-full">
                <h4 className="text-sm font-medium">Repacking/Consolidation</h4>
                <p className="text-xl font-semibold">$10.00</p>
              </div>
              <div className="text-center space-y-1 w-full">
                <h4 className="text-sm font-medium">Total Shipping Cost</h4>
                <p className="text-xl font-semibold text-brand">$510.00</p>
              </div>
            </div>
          </section>

          <section className="flex items-end justify-end w-full pb-10">
            <div className="flex gap-4">
              <button className="flex rounded-full cursor-pointer gap-2 text-sm font-bold py-3 items-center justify-center px-8 bg-[#FF5E1424] ">
                <KeyboardArrowLeftOutlinedIcon sx={{height: 20}} className="text-black" />
                <p>Back</p>
              </button>
              <button className="flex rounded-full cursor-pointer gap-2 text-sm font-bold py-3 items-center justify-center px-8 text-center bg-brand text-white ">
                Save for later
              </button>
              <button className="flex rounded-full cursor-pointer gap-2 text-sm font-bold py-3 items-center justify-center px-8 text-center bg-brand/10 border-2 border-brand">
                Create Shipment
              </button>
            </div>
          </section>
        </div>
      </section>
    </main>
  );
}
