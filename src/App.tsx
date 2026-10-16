function App() {
  return (
    <main className="bg-[#121413] bg-[radial-gradient(#2B2F2D_1px,transparent_1px)] bg-[length:28px_28px]">
      <section id="hero" className="dots min-h-screen">
        {/* hero */}
        <div id="hero-content" className="flex flex-wrap max-w-[1240px] mx-auto px-10 py-24">
          <div id="left-hero">
            <h1 id="hero-name" className="text-[clamp(56px,7.4vw,108px)] leading-[0.94] tracking-[-0.04em] font-bold
    ">
              Matthew<br></br>
              Matiyenga
            </h1>
            <p id="meDescription"className="max-w-[28em] text-[22px] leading-[1.45] text-[#CFCEC7] text-pretty">
    Software developer in training, learning to build things properly from the ground up.
    </p>

            </div>
            <div id="right-hero">
              {/* where the globe will be */}
            </div>
        </div>
      </section>

      <div className="bg-[#161918] border-y border-[#2B2F2D]">{/* ticker */}</div>

      <section id="projects">
        <div className="dots py-32">{/* 01 Citadel */}</div>
        <div className="bg-[#181B1A] py-32">{/* 02 Placement */}</div>
        <div className="dots py-32">{/* 03 This site */}</div>
      </section>

      <section id="skills" className="bg-[#181B1A] py-28">{/* skills */}</section>
      <section id="about" className="py-32">{/* about */}</section>
      <section id="contact" className="dots bg-[#181B1A] py-32">{/* contact */}</section>
    </main>
    
  )
}

export default App
