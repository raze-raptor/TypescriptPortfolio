import { Globe } from "./components/ui/globe";
import { useState, useRef, useEffect } from 'react';
import { createRoot } from 'react-dom/client';
import { projects } from "./components/data/projects";
import { ProjectCard } from "./components/ProjectCard.tsx";

function App() {

  // variables
  const heroRef = useRef(null);

  const [heroVisible, setHeroVisible] = useState(false);

  // end of variables 
  // useEffect - creates an observer to watch the viewport for the hero
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {setHeroVisible(entries[0].isIntersecting)})
    if (heroRef.current) {
      observer.observe(heroRef.current) // checking current page
    }
    
    return () => {
      observer.disconnect();
    };
  }, []);

  // useEffect - the press enter listner
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => { if (event.key === 'Enter' && heroVisible) {
      document.getElementById('about')?.scrollIntoView({behavior: 'smooth'}) // personal note: duhh "document.getElementById() is just getting a litteral element by its ID"
    }}
    document.addEventListener('keydown', handleKeyDown)

    return () => { 
      document.removeEventListener('keydown', handleKeyDown); 
    }
  }, [heroVisible]);

  


  return (
    <>

  {/* hero */}
  <div id="hero" ref={heroRef} className="hero min-h-screen bg-base-200">
    <div className="hero-content">
   {/* DO TS */}
   <div id="win10cmdWINDOW" className="border border-base-300 w-full">
    <div id="cmdTitleBar" className="flex justify-between items-center">
      <div id="cmdBarTopLeft" className="flex items-center">
        <img src="/cmd-icon.png" className="w-5 h-5"></img>
        <p>Command Prompt</p>
      </div>
      <div id="cmdBarTopRight" className="flex">
        <img id="minimise" src="../../public/cmd-minimize.svg" className="p-1"></img>
        <img id="maximize" src="../../public/cmd-maximize.svg" className="p-1"></img>
        <img id="close" src="../../public/cmd-close.svg" className="p-1"></img>
      </div>

    </div>
   </div>
  </div>
  </div>



  {/* end of hero */}
  {/* start of about section */}

  <div id="about" className="hero min-h-screen bg-base-200">
    <div className="hero-content flex-col lg:flex-row items-center gap-12 lg:gap-20 max-w-7xl w-full mx-auto px-6 lg:px-16">
      <div id="about-left-content" className="flex flex-col gap-4 text-left flex-1">
        <p className="font-mono text-sm5 lg:text-sm5 font-bold tracking-tight">$ whoami</p>
        <h1 className="font-mono text-9xl lg:text-8xl font-bold tracking-tight">MATTHEW MATIYENGA</h1>
        <p className="font-mono text-secondary text-lg">Aspiring Backend Software Engineer & Web Developer</p>
        <div className="space-y-4 text-base-content/70 leading-relaxed max-w-prose">
          <p>I'm an Aspiring backend and systems developer who builds things because I want them to exist, not because a brief told me to. I run my own home server with 20+ containerised services, all locked down behind a Cloudflare Tunnel with SSO on everything, and I look at every system I touch and ask how I'd break it.</p>
          <p>Right now I'm on placement at Barnsley Hospital NHS Foundation Trust as a Junior Applications Developer, shipping internal SharePoint tools with SPFx, TypeScript and React. Outside of that I'm teaching myself C++ and Windows internals, and co-running Venus Softworks, a web design startup for small businesses.</p>
          <p>I work in TypeScript and Python day to day, and I'd rather ship something real and slightly rough than talk about something perfect.</p>
        </div>
    </div>
    <div id="about-right-content" className="flex-1 relative h-96 lg:h-[500px]">
      <Globe />
      </div>
    </div>
  </div>
  <div id="projects" className="hero min-h-screen bg-base-100">
      {/* code box */}

        <div className="mockup-code w-full max-w-2xl">
          <pre data-prefix=":~$" className="flex items-center">
            <code id="projectsCodeBox" className="text-lg typewriter-cursor text-green-500 max-w-2xl projectsCodeBox">ls /projects</code>
          </pre>
      </div>
        {/*end of code box */}
  </div>
    </>
  )
}

export default App
