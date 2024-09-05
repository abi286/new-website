import { Headphones } from "lucide-react";
import { Settings } from "lucide-react";

const Footer = () => {
  return (
    <div>
      <div className="px-5 py-8">
        <a href="#HelpCenter">
          <span className="flex gap-2  font-medium text-lg ">
            <Headphones color="#000000" absoluteStrokeWidth className="ml-3" />
            Help Center
          </span>
        </a>
      </div>
      <div className="px-5 py-3">
        <a href="#Settings">
          <span className="flex gap-2  font-medium text-lg ">
            <Settings color="#000000" absoluteStrokeWidth className="ml-3" />
            Settings
          </span>
        </a>
      </div>
    </div>
  );
};

export default Footer;
