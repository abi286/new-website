import { Search } from "lucide-react";
import { Bell } from "lucide-react";
import { MuiAvatar } from "./MuiAvatar";
import { ChevronDown } from "lucide-react";

const Navbar = () => {
  return (
    <div className="">
      {/* upper navbar */}
      <div className="flex flex-row border-b">
        <header className="ml-6 h-24 flex items-center ">
          <div className=" ml-4 mr-96 pt-12">
            <input
              type="text"
              placeholder="Try search programming course"
              className="w-[400px]  h-max group-hover:w-[300px] pl-11 py-2 pr-28 rounded-full border-0 bg-[#EFEFEF]"
            />
            <Search
              size={50}
              color="#6F737A"
              className="-top-1/2 -translate-y-11 px-3"
            />
          </div>
          <button>
            <Bell
              size={30}
              color="#6F737A"
              absoluteStrokeWidth
              className="mr-5 "
            />
          </button>
          <div className="flex gap-2 items-center cursor-pointer">
            <MuiAvatar />
            John Cena
            <ChevronDown size={20} color="#222F30" absoluteStrokeWidth className="mr-10"/>
          </div>
        </header>
      </div>
    </div>
  );
};

export default Navbar;
