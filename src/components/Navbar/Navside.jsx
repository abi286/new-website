import { ChevronLeft } from "lucide-react";
import { House } from "lucide-react";
import { BookMinus } from 'lucide-react';
import { BookmarkMinus } from 'lucide-react';
import { Presentation } from 'lucide-react';
import { GraduationCap } from 'lucide-react';
import { Medal } from 'lucide-react';
import { NotepadText } from 'lucide-react';
import Footer from "./Footer";

const Navside = () => {
  return (
    <div>
      <div className=" min-w-80  h-dvh border-r  border-gray-300">
        <div className="fex flex-col">
          <h1 className="text-3xl text-[#7455F7] font-bold px-7 pt-10 pb-2">
            T-Course
          </h1>
        </div>
        <button className="inline-flex items-center justify-center border border-input bg-white rounded-2xl p-1 ml-12 translate-x-72 ">
          <ChevronLeft />
        </button>
        <div className="h-3/6 mt-10 border-b border-gray-300">
          <div className="px-5 py-3">
          <a href="#dashboard" >
                <span className="flex gap-2 bg-[#F2EEFE] text-[#7455F7] font-bold text-lg pr-44 py-3 rounded-3xl">
                    <House color="#7455F7" absoluteStrokeWidth className="ml-3"/>
                    Dashboard
                </span>
            </a>
          </div>
          <div className="px-5 py-3">
          <a href="#MyCoruse" >
                <span className="flex gap-2  font-medium text-lg ">
                <BookMinus color="#000000" absoluteStrokeWidth className="ml-3"/>
                    My Coruse
                </span>
            </a>
          </div>
          <div className="px-5 py-3">
          <a href="#SavedCoruse" >
                <span className="flex gap-2  font-medium text-lg ">
                <BookmarkMinus color="#000000" absoluteStrokeWidth className="ml-3"/>
                Saved Coruse
                </span>
            </a>
          </div>
          <div className="px-5 py-3">
          <a href="#Report" >
                <span className="flex gap-2  font-medium text-lg ">
                <Presentation color="#000000" absoluteStrokeWidth className="ml-3"/>
                Report
                </span>
            </a>
          </div>
          <div className="px-5 py-3">
          <a href="#ExploreCourse" >
                <span className="flex gap-2  font-medium text-lg ">
                <GraduationCap color="#000000" absoluteStrokeWidth className="ml-3"/>
                Explore Course
                </span>
            </a>
          </div>
          <div className="px-5 py-3">
          <a href="#Sertificate" >
                <span className="flex gap-2  font-medium text-lg ">
                <Medal color="#000000" absoluteStrokeWidth className="ml-3"/>
                Sertificate
                </span>
            </a>
          </div>
          <div className="px-5 py-3">
          <a href="#Transaction" >
                <span className="flex gap-2  font-medium text-lg ">
                <NotepadText color="#000000" absoluteStrokeWidth className="ml-3"/>
                Transaction
                </span>
            </a>
          </div>
        </div>
        <Footer/>
      </div>
    </div>
  );
};

export default Navside;
