function App() {
  return (
    <main className="bg-[#121413] bg-[radial-gradient(#2B2F2D_1px,transparent_1px)] bg-[length:28px_28px]">
      <section id="hero" className="flex items-center dots min-h-screen">
        {/* hero */}
        <div id="hero-content" className="flex flex-wrap max-w-[1240px] w-full mx-auto px-10 py-24">
          <div id="left-hero" className="flex-1 min-w-0">
            <p className="flex items-center gap-2 font-[family-name:var(--jetbrains)]"><svg
  viewBox="0 0 24 24"
  className="w-5 h-5 flex-none fill-none stroke-current stroke-[1.75] [stroke-linecap:round] [stroke-linejoin:round]"
  style={{ color: '#5fd8e6' }}
>
  <path d="M4 17l6-6-6-6M12 19h8" />
</svg>
South Yorkshire, England</p>
            <h1 id="hero-name" className="text-[clamp(56px,7.4vw,108px)] leading-[0.94] tracking-[-0.04em] font-bold">Matthew<br/>Matiyenga</h1>

            <p id="meDescription" className="max-w-[28em] text-[22px] leading-[1.45] text-[#CFCEC7] text-pretty mt-5">
    Software developer in training, learning to build things properly from the ground up.
    </p>

<p className="flex items-center gap-2 font-[family-name:var(--jetbrains)] mt-2.5">
  <span>AIMING AT</span>
  <span className="relative inline-block w-[9.5ch] h-[1.4em]">
    <span className="absolute top-0 left-0 role-word drop-shadow-[0px_0px_14px_rgba(95,216,230,0.4)]">BACKEND</span>
    <span className="absolute top-0 left-0 role-word drop-shadow-[0px_0px_14px_rgba(95,216,230,0.4)]">SYSTEMS</span>
    <span className="absolute top-0 left-0 role-word drop-shadow-[0px_0px_14px_rgba(95,216,230,0.4)]">SECURITY</span>
    <span className="absolute top-0 left-0 role-word drop-shadow-[0px_0px_14px_rgba(95,216,230,0.4)]">FRONTEND</span>
  </span>
</p>
  <div className="flex gap-4 mt-8">
    <button className="btn btn-soft btn-accent"><svg viewBox="0 0 24 24" className="w-5 h-5 flex-none fill-none stroke-current stroke-[1.75] [stroke-linecap:round] [stroke-linejoin:round]">
  <path d="M12 2l10 5-10 5L2 7zM2 17l10 5 10-5M2 12l10 5 10-5" />
</svg>
View Projects</button>
    <button className="btn btn-dash"><span><svg viewBox="0 0 24 24" className="w-5 h-5 flex-none fill-none stroke-current stroke-[1.75] [stroke-linecap:round] [stroke-linejoin:round]"><path d="M7 17L17 7M7 7h10v10"></path></svg></span>Contact Me</button>
  </div>

            </div>
            <div id="right-hero" className="flex-1">
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
