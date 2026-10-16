const citadelHops = [
  { name: 'Internet', sub: 'REQUEST', x: 30, w: 160 },
  { name: 'Cloudflare Tunnel', sub: 'NO OPEN PORTS', x: 290, w: 200 },
  { name: 'Nginx Proxy Manager', sub: 'REVERSE PROXY', x: 580, w: 200 },
  { name: 'Authentik SSO', sub: 'ONE LOGIN', x: 870, w: 210, hub: true },
]

const citadelServices = [
  { name: 'Nextcloud', sub: 'FILES', title: 'Files, calendar and contacts', x: 105 },
  { name: 'Navidrome', sub: 'MUSIC', title: 'Music streaming', x: 280 },
  { name: 'Vaultwarden', sub: 'PASSWORDS', title: 'Password manager', x: 455 },
  { name: 'Grafana', sub: 'DASHBOARDS', title: 'Monitoring dashboards', x: 630 },
  { name: 'Pi-hole', sub: 'DNS ADBLOCK', title: 'Network-wide ad blocking', x: 805 },
  { name: 'Transmission', sub: 'DOWNLOADS', title: 'Torrent client', x: 980 },
]

function Badge({ icon, className = '', children }: { icon: string; className?: string; children: React.ReactNode }) {
  return (
    <span className={`badge h-8 px-3.5 gap-2 rounded-full border border-[#3A3F3C] bg-[#161918] text-[#ECEAE3] text-sm transition hover:-translate-y-0.5 hover:border-[var(--accent)] ${className}`}>
      <svg viewBox="0 0 24 24" className="w-4 h-4 flex-none fill-none stroke-current stroke-[1.75] [stroke-linecap:round] [stroke-linejoin:round] text-[var(--accent)]">
        <path d={icon} />
      </svg>
      {children}
    </span>
  )
}

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
          
          

          <div className="max-w-[1240px] w-full mx-auto px-10 flex flex-col gap-14">
            <div className="flex flex-wrap items-end justify-between gap-6">
              <div>
                <p className="text-[#A4A69F] font-[family-name:var(--jetbrains)] text-sm">SELECTED WORK</p>
                <h3 className="text-[clamp(48px,6vw,88px)] leading-[0.95] tracking-[-0.04em] font-[family-name:var(--header)] font-bold" style={{color: '#eceae3'}}>Citadel</h3>
              </div>
              <div className="ghost font-[family-name:var(--header)] text-[240px]">01</div>
            </div>

            <div className="rounded-2xl border border-[#2B2F2D] bg-[#0D0F0E] bg-[radial-gradient(ellipse_at_85%_0%,color-mix(in_srgb,var(--accent)_12%,transparent),transparent_55%)] overflow-x-auto">
              <svg
                viewBox="0 0 1100 340"
                role="img"
                aria-label="Animated diagram: a request travels from the internet through Cloudflare Tunnel and Nginx Proxy Manager to Authentik single sign-on, then out to self-hosted services: Nextcloud, Navidrome, Vaultwarden, Grafana, Pi-hole and Transmission"
                className="diagram block w-full min-w-[760px] h-auto"
              >
                <defs>
                  <linearGradient id="citadel-line" gradientUnits="userSpaceOnUse" x1="190" y1="0" x2="870" y2="0">
                    <stop offset="0" stopColor="#3A3F3C" />
                    <stop offset="1" style={{ stopColor: 'var(--accent)' }} />
                  </linearGradient>
                </defs>

                <path className="diagram-flow" d="M190 68H290M490 68H580M780 68H870" stroke="url(#citadel-line)" strokeWidth="1.5" />

                {citadelServices.map((s) => {
                  const route = `M975 100C975 155 ${s.x} 150 ${s.x} 206`
                  return (
                    <g key={s.name} className="svc">
                      <title>{`${s.name}: ${s.title}`}</title>
                      <path className="svc-route diagram-flow" d={route} strokeWidth="1.5" />
                      <g className="node">
                        <rect className="node-box" x={s.x - 75} y="206" width="150" height="60" rx="14" />
                        <rect className="node-glow" x={s.x - 75} y="206" width="150" height="60" rx="14" />
                        <text className="node-label" x={s.x} y="233" textAnchor="middle">{s.name}</text>
                        <text className="node-sub" x={s.x} y="252" textAnchor="middle">{s.sub}</text>
                      </g>
                      <circle r="4" className="diagram-packet" opacity="0">
                        <animateMotion dur="4s" repeatCount="indefinite" path={route} keyPoints="0;0;1;1" keyTimes="0;0.5;0.8;1" calcMode="spline" keySplines="0 0 1 1;0.45 0 0.25 1;0 0 1 1" />
                        <animate attributeName="opacity" dur="4s" repeatCount="indefinite" values="0;0;1;1;0;0" keyTimes="0;0.5;0.53;0.78;0.82;1" />
                      </circle>
                    </g>
                  )
                })}

                {citadelHops.map((h) => (
                  <g key={h.name} className={h.hub ? 'node hub-node' : 'node'}>
                    <rect className={h.hub ? 'node-box hub' : 'node-box'} x={h.x} y="36" width={h.w} height="64" rx="16" />
                    {h.hub && <rect className="node-glow hub" x={h.x} y="36" width={h.w} height="64" rx="16" />}
                    <text className="node-label" x={h.x + h.w / 2} y="65" textAnchor="middle">{h.name}</text>
                    <text className="node-sub" x={h.x + h.w / 2} y="85" textAnchor="middle">{h.sub}</text>
                  </g>
                ))}

                <circle r="5" className="diagram-packet" opacity="0">
                  <animateMotion dur="4s" repeatCount="indefinite" path="M110 68H975" keyPoints="0;1;1" keyTimes="0;0.5;1" calcMode="spline" keySplines="0.45 0 0.25 1;0 0 1 1" />
                  <animate attributeName="opacity" dur="4s" repeatCount="indefinite" values="0;1;1;0;0" keyTimes="0;0.05;0.48;0.52;1" />
                </circle>

                <text className="caption" x="30" y="318">20+ CONTAINERS, ONE LOGIN</text>
                <text className="caption" x="1070" y="318" textAnchor="end">HOVER A SERVICE</text>
              </svg>
            </div>

            <div className="flex flex-wrap gap-x-16 gap-y-10 items-start font-[family-name:var(--header)]">
              <p className="flex-[5_1_360px] min-w-0 text-[19px] text-pretty text-[#CFCEC7]">
                My home server: a second-hand IBM x3650 in my bedroom. Every service sits behind a Cloudflare Tunnel and single sign-on, so nothing is exposed directly.
              </p>

              <div className="flex-[4_1_320px] min-w-0 flex flex-col gap-3.5">
                <Badge icon="M13 2L3 14h9l-1 8 10-12h-9z" className="self-start h-auto py-1.5 whitespace-normal text-left">
                  Built with Claude and locally run models as my sysadmin
                </Badge>
                <p className="text-base text-pretty text-[#A4A69F]">
                  I'm learning Linux by reading what it did and why. I run the AI side myself with LM Studio and llama.cpp. I self-host because I believe the internet should stay free and open, the way it was before I was born, and running my own stack is how I put that into practice.
                </p>
              </div>

              <div className="flex-[3_1_220px] min-w-0 flex flex-wrap gap-2.5">
                <Badge icon="M2 4h20v6H2zM2 14h20v6H2zM6 7h.01M6 17h.01">Self-hosting</Badge>
                <Badge icon="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z">SSO</Badge>
                <Badge icon="M4 17l6-6-6-6M12 19h8">Linux</Badge>
              </div>
            </div>

          </div>

      

        </div>
        <div className="relative overflow-hidden bg-[#181B1A] border-y border-[#2B2F2D] py-32">
          <div className="ghost absolute -right-5 top-5 text-[360px] opacity-70 font-[family-name:var(--header)]" aria-hidden="true">02</div>
          {/* 02 Placement */}

          <div className="relative max-w-[1240px] mx-auto px-10 py-... flex flex-wrap items-center gap-18">
            <div className="flex-[6_1_460px] min-w-0">
              <div className="mock-window -rotate-[2.5deg] border border-[#3A3F3C] bg-[#0D0F0E] rounded-xl overflow-hidden" aria-hidden="true">
                <div className="h-10 flex items-center gap-2 px-4 border-b border-[#2B2F2D]">
                  <i className="w-2.5 h-2.5 rounded-full bg-[#444A47]"></i>
                  <i className="w-2.5 h-2.5 rounded-full bg-[#444A47]"></i>
                  <i className="w-2.5 h-2.5 rounded-full bg-[var(--accent)]"></i>
                  <span className="ml-3 text-[11px] uppercase tracking-[.06em] text-[#A4A69F] font-[family-name:var(--jetbrains)]">SPFx web part</span>
                </div>
                <div className="p-7 grid grid-cols-[repeat(auto-fit,minmax(min(220px,100%),1fr))] gap-6">
                  <div className="flex flex-col gap-3">
                    <div className="sk h-[18px] w-[55%] rounded-md"></div>
                    <div className="sk h-2.5 w-full rounded-md" style={{ animationDelay: '-.3s' }}></div>
                    <div className="sk h-2.5 w-[92%] rounded-md" style={{ animationDelay: '-.6s' }}></div>
                    <div className="sk h-2.5 w-[70%] rounded-md" style={{ animationDelay: '-.9s' }}></div>
                    <div className="mt-2.5 h-10 w-30 rounded-lg bg-[var(--accent)] opacity-85"></div>
                  </div>
                  <div className="grid grid-cols-2 gap-3">
                    <div className="sk h-[84px] rounded-lg"></div>
                    <div className="sk h-[84px] rounded-lg" style={{ animationDelay: '-.5s' }}></div>
                    <div className="sk h-[84px] rounded-lg" style={{ animationDelay: '-1s' }}></div>
                    <div className="sk h-[84px] rounded-lg" style={{ animationDelay: '-1.5s' }}></div>
                  </div>
                </div>
              </div>
            </div>
              {/* so ic an see the seperation */}
            <div className="flex-[5_1_340px] min-w-0"> 

              <p className="leading-[1.45] text-[#CFCEC7] font-[family-name:var(--jetbrains)] text-pretty">PLACEMENT · ONGOING</p>
              <h2 className="text-[56px] leading-none tracking-[-0.03em] font-bold font-[family-name:var(--header)]" style={{color: '#eceae3'}}>Barnsley Hospital NHS</h2>
              <p className="max-w-[28em] text-[22px] leading-[1.45] text-[#CFCEC7] text-pretty mt-5">Junior Applications Developer with the ICT Applications Development team. I work on SharePoint Framework web parts in TypeScript and React, and use GitLab day to day.</p>
              <div className="flex flex-wrap gap-2.5 mt-3">
                <Badge icon="M16 18l6-6-6-6M8 6l-6 6 6 6">SPFx</Badge>
                <Badge icon="M16 18l6-6-6-6M8 6l-6 6 6 6">TypeScript</Badge>
                <Badge icon="M12 2l10 5-10 5L2 7zM2 17l10 5 10-5M2 12l10 5 10-5">React</Badge>
                <Badge icon="M6 3v12M18 9a3 3 0 100-6 3 3 0 000 6zM6 21a3 3 0 100-6 3 3 0 000 6zM18 9a9 9 0 01-9 9">GitLab</Badge>
              </div>
              <p className="text-[#CFCEC7] font-[family-name:var(--jetbrains)] text-pretty mt-8 absolute" style={{opacity: 0.05}}>Internal work, so no public repo or demo.</p>

            </div>
          </div>

        </div>
        <div className="dots relative py-32">
          <div className="max-w-[1000px] mx-auto px-10 flex flex-col items-center text-center gap-7">
            <div className="ghost text-[200px] font-[family-name:var(--header)]" aria-hidden="true">03</div>

            {/* label: First project · In progress */}
            <div className="flex items-center gap-2.5 ">
              <p className="text-[#CFCEC7] font-[family-name:var(--jetbrains)] text-pretty" style={{ color: 'var(--accent)' }}> <svg viewBox="0 0 24 24" className="w-5 h-5  mr-2 flex-none fill-none stroke-current stroke-[1.75] [stroke-linecap:round] [stroke-linejoin:round] inline-block" style={{ color: 'var(--accent)' }}>
    <path d="M12 2l10 5-10 5L2 7zM2 17l10 5 10-5M2 12l10 5 10-5" />
  </svg>FIRST PROJECT · IN PROGRESS</p>
            </div>

            {/* title: This site */}
            <h3 className="text-[clamp(48px,6vw,88px)] leading-[0.95] tracking-[-0.04em] font-[family-name:var(--header)] font-bold" style={{color: '#eceae3'}}>This site</h3>

            {/* paragraph */}
            <p className="text-[#CFCEC7] text-pretty" style={{margin: 0, maxWidth: '30em', color: '#CFCEC7', fontSize: '19px', textWrap: 'pretty'}}>Rebuilt from scratch in React and TypeScript. It's my first proper project, and I'm learning the tooling by building it.</p>

            {/* layer stack: DaisyUI, Tailwind CSS, React + TypeScript, Vite */}
            <div className="flex flex-wrap gap-2.5 mt-3">
              <Badge icon="M2 4h20v6H2zM2 14h20v6H2zM6 7h.01M6 17h.01">DaisyUI</Badge>
              <Badge icon="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z">Tailwind CSS</Badge>
              <Badge icon="M16 18l6-6-6-6M8 6l-6 6 6 6">React + TypeScript</Badge>
              <Badge icon="M12 2l10 5-10 5L2 7zM2 17l10 5 10-5M2 12l10 5 10-5">Vite</Badge>
            </div>
            {/* GitHub button */}
            <div className="flex flex-wrap justify-center gap-3 pt-4">
              <a className="btn btn-dash group" href="https://github.com/raze-raptor/TypescriptPortfolio">
                <svg viewBox="0 0 24 24" className="w-5 h-5 flex-none fill-none stroke-current stroke-[1.75] [stroke-linecap:round] [stroke-linejoin:round]">
                  <path d="M6 3v12M18 9a3 3 0 100-6 3 3 0 000 6zM6 21a3 3 0 100-6 3 3 0 000 6zM18 9a9 9 0 01-9 9" />
                </svg>
                GitHub
                <svg viewBox="0 0 24 24" className="w-5 h-5 flex-none fill-none stroke-current stroke-[1.75] [stroke-linecap:round] [stroke-linejoin:round] transition-transform group-hover:translate-x-[3px] group-hover:-translate-y-[3px]">
                  <path d="M7 17L17 7M7 7h10v10" />
                </svg>
              </a>
            </div>

          </div>
        </div>
      </section>

      <section id="skills" className="bg-[#181B1A] py-28">{/* skills */}</section>
      <section id="about" className="py-32">{/* about */}</section>
      <section id="contact" className="dots bg-[#181B1A] py-32">{/* contact */}</section>
    </main>
    
  )
}

export default App
