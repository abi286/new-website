import { Headphones } from "lucide-react";
import { Settings } from "lucide-react";

const Footer = () => {
  return (
    <div>
      <div className="px-5 py-8 ml-2">
        <a href="#HelpCenter">
          <span className="flex gap-2 text-[#5C6067]">
            <Headphones color="#5C6067" absoluteStrokeWidth className="ml-3" />
            Help Center
          </span>
        </a>
      </div>
      <div className="px-5 py-3 ml-2">
        <a href="#Settings">
          <span className="flex gap-2 text-[#5C6067] ">
            <Settings color="#5C6067" absoluteStrokeWidth className="ml-3" />
            Settings
          </span>
        </a>
      </div>
    </div>
  );
};

export default Footer;
