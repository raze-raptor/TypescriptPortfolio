function App() {
  return (
    <main className="bg-[#121413] bg-[radial-gradient(#2B2F2D_1px,transparent_1px)] bg-[length:28px_28px]">
      <section id="hero" className="dots min-h-screen">
        {/* hero */}

        <h1 id="hero-h" className="inline-block">
          Matthew<br></br>
          Matiyenga
        </h1>

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
