function App() {
  return (
    <>


  {/* hero */}
  <div id="hero" className="hero min-h-screen bg-base-200">
    <div className="hero-content">


      {/* code box */}
      <div className="glass p-4 rounded-lg shadow-lg w-145 max-w-2xl h-56 flex flex-col justify-center items-center">
        <div className="mockup-code w-full max-w-2xl">
          <pre data-prefix=":~$" className="flex items-center">
            <code id="whoami" className="text-lg typewriter-cursor text-green-500 w- max-w-2x1 whoami">whoami</code>
          </pre>
        </div>
        {/*end of code box */}

        <p id="start-execute" className="elipsis bounce5s">press enter</p>
      </div>
    </div>
  </div>

  {/* end of hero */}
  {/* start of about section */}

  <div id="about" className="hero min-h-screen bg-base-200">
    <div id="about-left-content"className="hero-content flex-col lg:flex-row-reverse">
      <p>My name is</p>
      <h1>MATTHEW MATIYENGA</h1>
      <p>Aspiring Backend Software Engineer & Web Developer</p>

      <p>I'm a backend and systems developer who builds things because I want them to exist, not because a brief told me to. I run my own home server with 20+ containerised services, all locked down behind a Cloudflare Tunnel with SSO on everything, and I look at every system I touch and ask how I'd break it.</p>
      <p>Right now I'm on placement at Barnsley Hospital NHS Foundation Trust as a Junior Applications Developer, shipping internal SharePoint tools with SPFx, TypeScript and React. Outside of that I'm teaching myself C++ and Windows internals, and co-running Venus Softworks, a web design startup for small businesses.</p>
      <p>I work in TypeScript and Python day to day, and I'd rather ship something real and slightly rough than talk about something perfect.</p>
    </div>
    <div id="about-right-content" className="hero-content flex-col lg:flex-row-reverse">
      {/*spinning earth*/}
    </div>
  </div>
    </>
  )
}

export default App
