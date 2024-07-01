import React from "react";
import { sidebarFooterLinks, sidebarLinks } from "../../static-data";

const Sidebar = () => {
  return (
    <div className="flex flex-col justify-between p-[12px] gap-[12px] w-[15%] bg-[#FBFBFB] border-r min-h-full">
      <div className="flex px-[2px] flex-col gap-[7px]">
        {sidebarLinks.map((item) => {
          return (
            <div className="flex py-[6px] pl-[6px] pr-[2px] gap-[8px] rounded-[8px] first:bg-[#ECECF1]">
              {<item.icon />}
              <p className="text-[13px] leading-[20px] text-[#6E6E80]">
                {item.heading}
              </p>
            </div>
          );
        })}
      </div>
      <div className="flex px-[2px] flex-col gap-[7px]">
        {sidebarFooterLinks.map((item) => {
          return (
            <div className="flex py-[6px] pl-[6px] pr-[2px] gap-[8px]">
              {<item.icon />}
              <p className="text-[13px] leading-[20px] text-[#6E6E80]">
                {item.heading}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Sidebar;
