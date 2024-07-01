import React from "react";
import { Logo } from "../../static-img-urls";
import {
  NotificationMessageSvg,
  SearchIconSvg,
  UpDownBtnSvg,
} from "../../static-svgs-urls";

const Header = () => {
  return (
    <div className="px-[16px] bg-[#F5F5F5] h-[60px] flex items-center">
      <div className="flex items-center gap-[8px]">
        <span className="w-[24px] h-[24px] bg-[#6E6E80] text-white rounded-full flex items-center justify-center">
          X
        </span>
        <div className="flex items-center">
          <p className="text-[13px] text-[#202123] font-medium">
            Organization X
          </p>
          <UpDownBtnSvg />
        </div>
        <p className="text-[14px] text-[#ACACBE]">/</p>
        <div className="flex items-center">
          <p className="text-[13px] text-[#202123] font-medium">
            Default Project
          </p>
          <UpDownBtnSvg />
        </div>
      </div>
      <div className="flex grow justify-center">
        <img src={Logo} alt="" srcset="" />
      </div>
      <div className="flex gap-[16px] items-center">
        <p className="text-[14px] text-[#ACACBE]">Docs</p>
        <SearchIconSvg />
        <NotificationMessageSvg />
        <span className="w-[28px] h-[28px] bg-[#D9D9E3] text-[#202123] rounded-full flex items-center justify-center">
          A
        </span>
      </div>
    </div>
  );
};

export default Header;
