import { useState,useEffect,useRef } from "react";
import { Search, Bell, LogOut, User, Settings } from "lucide-react";
import { MuiAvatar } from "./MuiAvatar";
import { ChevronDown } from "lucide-react";

const Navbar = () => {
  const [isNotificationOpen, setNotificationOpen] = useState(false);
  const [isProfileOpen, setProfileOpen] = useState(false);

  const toggleNotification = () => setNotificationOpen((prev) => !prev);
  const toggleProfile = () => setProfileOpen((prev) => !prev);

  const notificationRef = useRef(); 
  const profileRef = useRef();

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        !notificationRef.current.contains(event.target)) {
        setNotificationOpen(false);
      }
      if ( !profileRef.current.contains(event.target)) {
        setProfileOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);


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
          <div className=" flex justify-between items-center mr-9" ref={notificationRef}>
            <button className="flex relative" onClick={toggleNotification}>
              <Bell
                size={35}
                color="#273435"
                strokeWidth={1.5}
                className="mr-5"
              />
              <div className="w-3 h-3 bg-[#7455F7] rounded-full -translate-x-9"></div>

              {/* Notification Dropdown */}
              {isNotificationOpen && (
                <div className="absolute gap-2 right-0 mt-10 w-auto bg-white border-8 border-white shadow-lg rounded-lg">

                    <div className="py-2 justify-start pl-4 pr-80 font-bold text-[#5C6067] border-b border-gray-200">Notifications</div>

                  <ul className="py-2 ">
                    <li className="flex justify-between px-4 py-4 gap-5 text-[#5C6067] hover:bg-gray-100 cursor-pointer">
                      Join Now - Digital Marketing
                      <time className="text-xs ">
                        4:25 PM
                      </time>
                    </li>
                    <li className="flex justify-between px-4 py-4 gap-5 text-[#5C6067] hover:bg-gray-100 cursor-pointer">
                      Do Class Work - Cyber Security
                      <time className="text-xs">
                        4:25 PM
                      </time>
                    </li>
                    <li className="flex justify-between px-4 py-4 gap-5 text-[#5C6067] hover:bg-gray-100 cursor-pointer">
                      Upgrade to T-Course PLUS+
                      <time className="text-xs">
                        4:25 PM
                      </time>
                    </li>
                  </ul>
                </div>
              )}
            </button>
            <div className="flex gap-2 items-center cursor-pointer text-[#222F30] relative" onClick={toggleProfile} >
              <MuiAvatar />
              John Cena
              <ChevronDown
                size={20}
                color="#222F30"
                absoluteStrokeWidth
                className="mr-10 "
                
                ref={profileRef}
              />
              {/* Profile Dropdown */}
              {isProfileOpen && (
                <div className="absolute right-0 mt-72 w-48 bg-white border border-gray-200 shadow-lg rounded-lg">
                  <div className="border border-gray-200 py-4">
                    <p className="ml-4">John Cena</p>
                    <p className="ml-4 text-[#5C6067] font-extralight text-sm">
                      johncena@gmail.com
                    </p>
                  </div>
                  <ul className="py-2">
                    <li className="flex  justify-start gap-2 px-4 py-2 hover:bg-gray-100 cursor-pointer  text-[#5C6067]">
                      <User color="#5C6067" />
                      Profile
                    </li>
                    <li className="flex  justify-start gap-2 px-4 py-2 hover:bg-gray-100 cursor-pointer  text-[#5C6067]">
                      <Settings color="#5C6067" />
                      Settings
                    </li>
                    <li className="flex  justify-start gap-2 px-4 py-2 hover:bg-gray-100 cursor-pointer text-[#5C6067]">
                      <LogOut color="#5C6067" />
                      Logout
                    </li>
                  </ul>
                </div>
              )}
            </div>
          </div>
        </header>
      </div>
    </div>
  );
};

export default Navbar;
