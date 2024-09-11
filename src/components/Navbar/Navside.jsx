import { useState } from "react";
import { ChevronLeft } from "lucide-react";
import { House } from "lucide-react";
import { BookMinus } from "lucide-react";
import { BookmarkMinus } from "lucide-react";
import { Presentation } from "lucide-react";
import { GraduationCap } from "lucide-react";
import { Medal } from "lucide-react";
import { NotepadText } from "lucide-react";
import { Headphones, Settings } from "lucide-react";
// import { ChevronRight } from "lucide-react";

const Navside = () => {
  const [expanded, setExpanded] = useState(true);
  const Menus = [
    {
      title: "Dashboard",
      icon: <House color="#7455F7" strokeWidth={4} className="ml-3" />,
    },
    {
      title: "My Course",
      icon: <BookMinus color="#5C6067" strokeWidth={2} className="ml-3" />,
    },
    {
      title: "Saved Course",
      icon: <BookmarkMinus color="#5C6067" strokeWidth={2} className="ml-3" />,
    },
    {
      title: "Report",
      icon: <Presentation color="#5C6067" strokeWidth={2} className="ml-3" />,
    },
    {
      title: "Explore Course",
      icon: <GraduationCap color="#5C6067" strokeWidth={2} className="ml-3" />,
    },
    {
      title: "Certificate",
      icon: <Medal color="#5C6067" strokeWidth={2} className="ml-3" />,
    },
    {
      title: "Transaction",
      icon: <NotepadText color="#5C6067" strokeWidth={2} className="ml-3" />,
    },
  ];
  const footerMenus = [
    {
      title: "Help Center",
      icon: <Headphones color="#5C6067" strokeWidth={2} className="ml-3" />,
      href: "#HelpCenter",
    },
    {
      title: "Settings",
      icon: <Settings color="#5C6067" strokeWidth={2} className="ml-3" />,
      href: "#Settings",
    },
  ];
  return (
    <div className={`border-r  border-gray-300 duration-300 ${expanded ? "w-72" : "w-20"}`}>
      <div className={`${expanded ? "w-72" : "w-20"} duration-200 min-w-52 w-72  h-full`}>
        <div
          className={`flex px-7 pt-8 pb-2 overflow-hidden transition-all `}
        >
          <h1 className={`text-3xl text-[#7455F7] font-bold `}>T</h1>
          <h1
            className={`text-3xl text-[#7455F7] font-bold  overflow-hidden transition-all ${
              !expanded && "scale-0"
            }`}
          >
            -Course
          </h1>
        </div>
        <button
          onClick={() => setExpanded((curr) => !curr)}
          className={` ${
            expanded ? "translate-x-[221px]" : ""
          } inline-flex items-center justify-center border border-input bg-white rounded-3xl p-2 ml-12 mt-2  duration-300 ${
            !expanded && "rotate-180"
          }`}
        >
          <ChevronLeft />
        </button>
        <div className={`flex flex-col gap-8 h-[435px] duration-200 mt-4 ${expanded ? "w-72" : "w-[88px]"}`}>
          <ul>
            {Menus.map((menu, index) => (
              <div key={index} className="px-5 py-3 mb-2">
                <a href={`#${menu.title.replace(" ", "")}`}>
                  <span
                    className={`flex gap-4 rounded ${
                      menu.title === "Dashboard"
                        ? "py-3 rounded-s-full rounded-r-full bg-[#F2EEFE] text-[#7455F7] font-bold"
                        : "text-[#5C6067]"
                    } `}
                  >
                    {menu.icon}
                    <span className={`${!expanded && "hidden"}`}>
                      {menu.title}
                    </span>
                  </span>
                </a>
              </div>
            ))}
          </ul>
          <div className="border-b border-gray-300  w-60 ml-5"></div>
          <ul>
            {footerMenus.map((menu, index) => (
              <div key={index} className="px-5 py-3 mb-2">
                <a href={menu.href}>
                  <span className="flex gap-2 text-[#5C6067]">
                    {menu.icon}
                    <span className={`${!expanded && "hidden"}`}>
                      {menu.title}
                    </span>
                  </span>
                </a>
              </div>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navside;
