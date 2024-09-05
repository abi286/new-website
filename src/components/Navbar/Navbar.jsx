import { Search } from "lucide-react";
import { Bell } from "lucide-react";
import { MuiAvatar } from "./MuiAvatar";
import { ChevronDown } from "lucide-react";

const Navbar = () => {
  return (
    <div className=" h-[105px]">
      {/* upper navbar */}
      <div className="flex flex-row border-b h-[105px]">
        <header className="ml-6  h-full w-full flex justify-between items-center  ">
          <div className=" ml-4 pt-12">
            <input
              type="text"
              placeholder="Try search programming course"
              className="w-[500px]  h-max group-hover:w-[300px] pl-11 py-2 pr-36 rounded-full border-0 bg-[#F7F8FA]"
            />
            <Search
              size={50}
              color="#6F737A"
              className="-top-1/2 -translate-y-11 px-3"
            />
          </div>
          <div className=" flex justify-between items-center mr-9">
            <button className="flex">
              <Bell
                size={35}
                color="#273435"
                strokeWidth={1.5}
                className="mr-5 "
              />
              <div className="w-3 h-3 bg-[#7455F7] rounded-full -translate-x-9"></div>
            </button>
            <div className="flex gap-2 items-center cursor-pointer text-[#222F30]">
              <MuiAvatar />
              John Cena
              <ChevronDown
                size={20}
                color="#222F30"
                absoluteStrokeWidth
                className="mr-10"
              />
            </div>
          </div>
        </header>
      </div>
    </div>
  );
};

export default Navbar;
