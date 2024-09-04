import Navbar from "./components/Navbar/Navbar";
import Navside from "./components/Navbar/Navside"
import Hero from "./components/Hero/Hero";
const App = () => {
  return (
    <div className="flex flex-row">
      <Navside />
      <div>
      <Navbar />
      <Hero />
      </div>
    </div>
  )
};

export default App;