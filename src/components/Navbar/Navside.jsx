import { ChevronLeft } from "lucide-react";
import { House } from "lucide-react";
import { BookMinus } from "lucide-react";
import { BookmarkMinus } from "lucide-react";
import { Presentation } from "lucide-react";
import { GraduationCap } from "lucide-react";
import { Medal } from "lucide-react";
import { NotepadText } from "lucide-react";
import Footer from "./Footer";

const Navside = () => {
  return (
    <div className="border-r  border-gray-300">
      <div className=" min-w-52 w-72  h-full">
        <div className="fex flex-col">
          <h1 className="text-3xl text-[#7455F7] font-bold px-7 pt-8 pb-2">
            T-Course
          </h1>
        </div>
        <button className="inline-flex items-center justify-center border border-input bg-white rounded-3xl p-2 ml-12 mt-2 translate-x-[221px] ">
          <ChevronLeft />
        </button>
        <div className="flex flex-col gap-2 h-[435px] mt-4 ">
          <div className="px-5 py-3">
            <a href="#dashboard">
              <span className="flex gap-2 bg-[#F2EEFE] text-[#7455F7] font-bold pr-28 py-3 rounded-3xl">
                <House color="#7455F7" strokeWidth={4} className="ml-3" />
                Dashboard
              </span>
            </a>
          </div>
          <div className="px-5 pb-3">
            <a href="#MyCoruse">
              <span className="flex gap-2 text-[#5C6067]">
                <BookMinus
                  color="#5C6067"
                  absoluteStrokeWidth
                  className="ml-3"
                />
                My Coruse
              </span>
            </a>
          </div>
          <div className="px-5 py-3">
            <a href="#SavedCoruse">
              <span className="flex gap-2 text-[#5C6067]">
                <BookmarkMinus
                  color="#5C6067"
                  absoluteStrokeWidth
                  className="ml-3"
                />
                Saved Coruse
              </span>
            </a>
          </div>
          <div className="px-5 py-3">
            <a href="#Report">
              <span className="flex gap-2 text-[#5C6067]">
                <Presentation
                  color="#5C6067"
                  absoluteStrokeWidth
                  className="ml-3"
                />
                Report
              </span>
            </a>
          </div>
          <div className="px-5 py-3">
            <a href="#ExploreCourse">
              <span className="flex gap-2  text-[#5C6067]">
                <GraduationCap
                  color="#5C6067"
                  absoluteStrokeWidth
                  className="ml-3"
                />
                Explore Course
              </span>
            </a>
          </div>
          <div className="px-5 py-3">
            <a href="#Sertificate">
              <span className="flex gap-2 text-[#5C6067]">
                <Medal color="#5C6067" absoluteStrokeWidth className="ml-3" />
                Sertificate
              </span>
            </a>
          </div>
          <div className="px-5 py-3">
            <a href="#Transaction">
              <span className="flex gap-2 text-[#5C6067]">
                <NotepadText
                  color="#5C6067"
                  absoluteStrokeWidth
                  className="ml-3"
                />
                Transaction
              </span>
            </a>
          </div>
        </div>
        <div className="border-b border-gray-300  w-60 ml-5"></div>
        <Footer />
      </div>
    </div>
  );
};

export default Navside;
