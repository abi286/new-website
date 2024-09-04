import { ChevronLeft } from 'lucide-react';

const Navside = () => {
  return (
    <div>
        <div className=" min-w-80  h-dvh border-r  border-gray-300">
            <div className='fex flex-col'>
              <h1 className="text-3xl text-[#7455F7] font-bold p-5">T-Course</h1>
            </div>
              <button className='inline-flex items-center justify-center whitespace-nowrap text-sm font-medium ring-offset-background transition-colors border border-input bg-white hover:bg-accent hover:text-accent-foreground h-9 rounded-full py-2 px-2 translate-x-72 '>
              <ChevronLeft />
              </button>
            <div className="h-96 p-10 border-b border-gray-300">
              <div className="px-5 py-3"><a href="#dashboard">Dashboard</a></div>
              <div className="px-5 py-3"><a href="#dashboard">My Course</a></div>
              <div className="px-5 py-3"><a href="#dashboard">Saved Course</a></div>
              <div className="px-5 py-3"><a href="#dashboard">Report</a></div>
              <div className="px-5 py-3"><a href="#dashboard">Explore Course</a></div>
              <div className="px-5 py-3"><a href="#dashboard">Sertificate</a></div>
              <div className="px-5 py-3"><a href="#dashboard">Transaction</a></div>
            </div>
            <div className="h-80 p-10">
            <div className="px-5 py-3"><a href="#dashboard">Help Center</a></div>
            <div className="px-5 py-3"><a href="#dashboard">Settings</a></div>
            </div>
          </div>
    </div>
  )
}

export default Navside