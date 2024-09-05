import { useEffect, useState } from "react";
import NavBar from "./components/NavBar";
import Hero from "./components/Hero";
import About from "./components/About";
import Technologies from "./components/Technologies";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Footer from "./components/Footer";
import Contact from "./components/Contact";
import { BsSun } from 'react-icons/bs'
import './index.css'





function App() {
  const [theme, setTheme] = useState('dark');

    const toggleTheme = () =>{
      setTheme((prevTheme) => (prevTheme === 'dark' ? 'light' : 'dark'));
    }
    console.log(theme);

    useEffect(() => {
      document.body.className = theme;
    }, [theme]);
    


  return (
    <>
      <div id="Home" className="overflow-x-hidden text-neutral-300 antialiased selection:bg-cyan-300 selection:text-cyan-900">
        <div className="fixed top-0 -z-10 h-full w-full">
          
        </div>
        <NavBar  />
        <div className="container mx-auto px-8">
         
          <Hero />
          <About></About>
          <Technologies />
          {/* <Experience></Experience> */}
          <Projects></Projects>
          <Contact></Contact>
        </div>
        <Footer></Footer>
      </div>
      <button
        className='fixed bottom-5 right-5 bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 w-[3rem] h-[3rem] bg-opacity-60 backdrop-blur-[0.5rem] shadow-white shadow-2xl rounded-full flex items-center justify-center hover:scale-110  active:scale-105 transition:all'
        onClick={toggleTheme}
    >
        <BsSun></BsSun> 
    </button>
    </>
  );
}

export default App;
