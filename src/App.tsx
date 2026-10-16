function App() {
  return (
    <main className="bg-[#121413] bg-[radial-gradient(#2B2F2D_1px,transparent_1px)] bg-[length:28px_28px]">
      <section id="hero" className="relative flex items-center dots min-h-screen">
        {/* hero */}
        <div id="hero-content" className="flex flex-wrap max-w-[1240px] w-full mx-auto px-10 py-24">
          <div id="left-hero" className="flex-1 min-w-0">
            <p className="flex items-center gap-2 font-[family-name:var(--jetbrains)]"><svg
  viewBox="0 0 24 24"
  className="w-5 h-5 flex-none fill-none stroke-current stroke-[1.75] [stroke-linecap:round] [stroke-linejoin:round]"
  style={{ color: 'var(--accent)' }}
>
  <path d="M4 17l6-6-6-6M12 19h8" />
</svg>
South Yorkshire, England</p>
            <h1 id="hero-name" className="text-[clamp(56px,7.4vw,108px)] leading-[0.94] tracking-[-0.04em] font-[family-name:var(--header)] font-bold">Matthew<br/>Matiyenga</h1>

            <p id="meDescription" className="max-w-[28em] text-[22px] leading-[1.45] text-[#CFCEC7] text-pretty mt-5">
    Software developer in training, learning to build things properly from the ground up.
    </p>

<p className="flex items-center gap-2 font-[family-name:var(--jetbrains)] mt-2.5">
  <span>AIMING AT</span>
  <span className="relative inline-block w-[9.5ch] h-[1.4em]">
    <span className="absolute top-0 left-0 role-word drop-shadow-[0px_0px_14px_rgba(170,59,255,0.4)]">BACKEND</span>
    <span className="absolute top-0 left-0 role-word drop-shadow-[0px_0px_14px_rgba(170,59,255,0.4)]">SYSTEMS</span>
    <span className="absolute top-0 left-0 role-word drop-shadow-[0px_0px_14px_rgba(170,59,255,0.4)]">SECURITY</span>
    <span className="absolute top-0 left-0 role-word drop-shadow-[0px_0px_14px_rgba(170,59,255,0.4)]">FRONTEND</span>
  </span>
</p>
  <div className="flex gap-4 mt-8">
    <button className="btn btn-soft btn-accent"><svg viewBox="0 0 24 24" className="w-5 h-5 flex-none fill-none stroke-current stroke-[1.75] [stroke-linecap:round] [stroke-linejoin:round]">
  <path d="M12 2l10 5-10 5L2 7zM2 17l10 5 10-5M2 12l10 5 10-5" />
</svg>
View Projects</button>
    <button className="btn btn-dash"><span><svg viewBox="0 0 24 24" className="w-5 h-5 flex-none fill-none stroke-current stroke-[1.75] [stroke-linecap:round] [stroke-linejoin:round]"><path d="M7 17L17 7M7 7h10v10"></path></svg></span>Contact Me</button>
  </div>
{/* SPINNING GLOBE */}
            </div>
            <div id="right-hero" className="flex-1">
              <div className="relative w-full max-w-[480px] mx-auto aspect-square">
                <div className="orbit" aria-hidden="true">
                  <div className="orbit-slot"><div className="orbit-chip"><span>TS</span></div></div>
                  <div className="orbit-slot b"><div className="orbit-chip"><span>C#</span></div></div>
                  <div className="orbit-slot c"><div className="orbit-chip"><span>PY</span></div></div>
                </div>
                <svg viewBox="-20 -20 440 440" role="img" aria-label="Slowly rotating wireframe globe" className="absolute inset-0 w-full h-full overflow-visible">
                  <g transform="rotate(-18 200 200)" fill="none" style={{ stroke: '#5B625E', strokeWidth: 1 }}>
                    <circle className="globe-ring" cx="200" cy="200" r="190" style={{ stroke: '#444A47', strokeDasharray: '1 7' }} />
                    <circle cx="200" cy="200" r="170" style={{ stroke: 'var(--accent)', strokeOpacity: 0.75 }} />
                    <ellipse cx="200" cy="200" rx="170" ry="52" />
                    <ellipse cx="200" cy="119" rx="147" ry="45" />
                    <ellipse cx="200" cy="281" rx="147" ry="45" />
                    <ellipse cx="200" cy="60" rx="85" ry="26" />
                    <ellipse cx="200" cy="340" rx="85" ry="26" />
                    <ellipse className="globe-meridian" cx="200" cy="200" rx="170" ry="170" style={{ animationDelay: '0s' }} />
                    <ellipse className="globe-meridian" cx="200" cy="200" rx="170" ry="170" style={{ animationDelay: '-4s' }} />
                    <ellipse className="globe-meridian" cx="200" cy="200" rx="170" ry="170" style={{ animationDelay: '-8s' }} />
                    <ellipse className="globe-meridian" cx="200" cy="200" rx="170" ry="170" style={{ animationDelay: '-12s' }} />
                    <ellipse className="globe-meridian" cx="200" cy="200" rx="170" ry="170" style={{ animationDelay: '-16s' }} />
                    <ellipse className="globe-meridian" cx="200" cy="200" rx="170" ry="170" style={{ animationDelay: '-20s' }} />
                    <circle className="globe-dot" cx="200" cy="150" r="3.2" style={{ '--a': '48px', '--b': '350px', fill: 'var(--accent)', stroke: 'none' } as React.CSSProperties} />
                    <circle className="globe-dot" cx="200" cy="205" r="3.2" style={{ '--a': '340px', '--b': '40px', fill: 'var(--accent)', stroke: 'none', animationDuration: '15s' } as React.CSSProperties} />
                    <circle className="globe-dot" cx="200" cy="255" r="3.2" style={{ '--a': '70px', '--b': '330px', fill: 'var(--accent)', stroke: 'none', animationDuration: '10s' } as React.CSSProperties} />
                    <circle className="globe-dot" cx="200" cy="100" r="3.2" style={{ '--a': '130px', '--b': '290px', fill: 'var(--accent)', stroke: 'none', animationDuration: '13s' } as React.CSSProperties} />
                    <circle className="globe-dot" cx="200" cy="300" r="3.2" style={{ '--a': '280px', '--b': '120px', fill: 'var(--accent)', stroke: 'none', animationDuration: '17s' } as React.CSSProperties} />
                  </g>
                </svg>
              </div>
            </div>
        </div>
        {/* END OF SPINNING GLOBE */}

        <a href="#projects" aria-label="Scroll to projects" className="absolute left-1/2 bottom-7 -translate-x-1/2 flex flex-col items-center gap-2 text-[#A4A69F]">
          <span className="font-[family-name:var(--jetbrains)] text-xs tracking-[.08em] uppercase">Scroll</span>
          <svg viewBox="0 0 24 24" className="bob w-8 h-8 flex-none fill-none stroke-current stroke-[1.75] [stroke-linecap:round] [stroke-linejoin:round]">
            <path d="M6 9l6 6 6-6" />
          </svg>
        </a>
      </section>

        <div className="bg-[#161918] border-y border-[#2B2F2D] overflow-hidden py-5" aria-hidden="true">
          
          <div className="ticker-track font-[family-name:var(--jetbrains)] text-sm text-[#CFCEC7] gap-9 uppercase tracking-[.06em] flex items-center whitespace-nowrap">
            <span className="whitespace-nowrap">TypeScript</span>
            <i className="w-[7px] h-[7px] bg-[var(--accent)] rotate-45"></i>
            <span className="whitespace-nowrap">Python</span>
            <i className="w-[7px] h-[7px] bg-[var(--accent)] rotate-45"></i>
            <span className="whitespace-nowrap">C#</span>
            <i className="w-[7px] h-[7px] bg-[var(--accent)] rotate-45"></i>
            <span className="whitespace-nowrap">C# MVC</span>
            <i className="w-[7px] h-[7px] bg-[var(--accent)] rotate-45"></i>
            <span className="whitespace-nowrap">C++</span>
            <i className="w-[7px] h-[7px] bg-[var(--accent)] rotate-45"></i>
            <span className="whitespace-nowrap">SPFx</span>
            <i className="w-[7px] h-[7px] bg-[var(--accent)] rotate-45"></i>
            <span className="whitespace-nowrap">React</span>
            <i className="w-[7px] h-[7px] bg-[var(--accent)] rotate-45"></i>
            <span className="whitespace-nowrap">Next.js</span>
            <i className="w-[7px] h-[7px] bg-[var(--accent)] rotate-45"></i>
            <span className="whitespace-nowrap">Tailwind</span>
            <i className="w-[7px] h-[7px] bg-[var(--accent)] rotate-45"></i>
            <span className="whitespace-nowrap">DaisyUI</span>
            <i className="w-[7px] h-[7px] bg-[var(--accent)] rotate-45"></i>
            <span className="whitespace-nowrap">Git</span>
            <i className="w-[7px] h-[7px] bg-[var(--accent)] rotate-45"></i>
            <span className="whitespace-nowrap">GitLab</span>
            <i className="w-[7px] h-[7px] bg-[var(--accent)] rotate-45"></i>
            <span className="whitespace-nowrap">GitHub</span>
            <i className="w-[7px] h-[7px] bg-[var(--accent)] rotate-45"></i>
            <span className="whitespace-nowrap">TypeScript</span>
            <i className="w-[7px] h-[7px] bg-[var(--accent)] rotate-45"></i>
            <span className="whitespace-nowrap">Python</span>
            <i className="w-[7px] h-[7px] bg-[var(--accent)] rotate-45"></i>
            <span className="whitespace-nowrap">C#</span>
            <i className="w-[7px] h-[7px] bg-[var(--accent)] rotate-45"></i>
            <span className="whitespace-nowrap">C# MVC</span>
            <i className="w-[7px] h-[7px] bg-[var(--accent)] rotate-45"></i>
            <span className="whitespace-nowrap">C++</span>
            <i className="w-[7px] h-[7px] bg-[var(--accent)] rotate-45"></i>
            <span className="whitespace-nowrap">SPFx</span>
            <i className="w-[7px] h-[7px] bg-[var(--accent)] rotate-45"></i>
            <span className="whitespace-nowrap">React</span>
            <i className="w-[7px] h-[7px] bg-[var(--accent)] rotate-45"></i>
            <span className="whitespace-nowrap">Next.js</span>
            <i className="w-[7px] h-[7px] bg-[var(--accent)] rotate-45"></i>
            <span className="whitespace-nowrap">Tailwind</span>
            <i className="w-[7px] h-[7px] bg-[var(--accent)] rotate-45"></i>
            <span className="whitespace-nowrap">DaisyUI</span>
            <i className="w-[7px] h-[7px] bg-[var(--accent)] rotate-45"></i>
            <span className="whitespace-nowrap">Git</span>
            <i className="w-[7px] h-[7px] bg-[var(--accent)] rotate-45"></i>
            <span className="whitespace-nowrap">GitLab</span>
            <i className="w-[7px] h-[7px] bg-[var(--accent)] rotate-45"></i>
            <span className="whitespace-nowrap">GitHub</span>
            <i className="w-[7px] h-[7px] bg-[var(--accent)] rotate-45"></i>

          </div>
        </div>

      <section id="projects">
        <div className="dots py-32 ">
          
          

          <div className="max-w-[1240px] w-full mx-auto px-10">
            <p className="text-[#A4A69F] font-[family-name:var(--jetbrains)] text-sm">SELECTED WORK</p>
            <h3 className="text-[clamp(48px,6vw,88px)] leading-[0.95] tracking-[-0.04em] font-[family-name:var(--header)] font-bold">Citadel</h3>

            <div className="flex flex-wrap items-end justify-between gap-6">
              
              
            </div>
          </div>


        </div>
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
