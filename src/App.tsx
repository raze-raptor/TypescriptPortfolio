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

const citadelLabel = 'Animated diagram: a request travels from the internet through Cloudflare Tunnel and Nginx Proxy Manager to Authentik single sign-on, then out to self-hosted services: Nextcloud, Navidrome, Vaultwarden, Grafana, Pi-hole and Transmission'

const timeline = [
  { when: 'Next · September 2027', title: 'Degree apprenticeship', desc: 'After Barnsley College.', icon: 'M22 10L12 5 2 10l10 5zM6 12v5c3 2 9 2 12 0v-5', active: false, ping: false },
  { when: 'Now · Until December 2026', title: 'Junior Applications Developer, placement', desc: 'ICT Applications Development, Barnsley Hospital NHS Foundation Trust.', icon: 'M2 7h20v14H2zM16 21V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v16', active: true, ping: true },
  { when: 'Now', title: 'T Level in Software Development', desc: 'Barnsley College.', icon: 'M22 10L12 5 2 10l10 5zM6 12v5c3 2 9 2 12 0v-5', active: true, ping: false },
]

function Badge({ icon, className = '', children }: { icon?: string; className?: string; children: React.ReactNode }) {
  return (
    <span className={`badge h-8 px-3.5 gap-2 rounded-full border border-[#3A3F3C] bg-[#161918] text-[#ECEAE3] text-sm transition hover:-translate-y-0.5 hover:border-[var(--accent)] ${className}`}>
      {icon && (
        <svg viewBox="0 0 24 24" className="w-4 h-4 flex-none fill-none stroke-current stroke-[1.75] [stroke-linecap:round] [stroke-linejoin:round] text-[var(--accent)]">
          <path d={icon} />
        </svg>
      )}
      {children}
    </span>
  )
}

function App() {
  return (
    <>
    <main className="bg-[#121413] bg-[radial-gradient(#2B2F2D_1px,transparent_1px)] bg-[length:28px_28px]">
      <section id="hero" className="relative flex items-center dots min-h-svh">
        {/* hero */}
        <div id="hero-content" className="flex flex-wrap max-w-[1240px] w-full mx-auto px-5 sm:px-10 py-24">
          <div id="left-hero" className="flex-[1_1_340px] min-w-0">
            <p className="flex items-center gap-2 font-[family-name:var(--jetbrains)]"><svg
  viewBox="0 0 24 24"
  className="w-5 h-5 flex-none fill-none stroke-current stroke-[1.75] [stroke-linecap:round] [stroke-linejoin:round]"
  style={{ color: 'var(--accent)' }}
>
  <path d="M4 17l6-6-6-6M12 19h8" />
</svg>
South Yorkshire, England</p>
            <h1 id="hero-name" className="text-[clamp(56px,7.4vw,108px)] leading-[0.94] tracking-[-0.04em] font-[family-name:var(--header)] font-bold">Matthew<br/>Matiyenga</h1>

            <p id="meDescription" className="max-w-[28em] text-lg sm:text-[22px] leading-[1.45] text-[#CFCEC7] text-pretty mt-5">
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
  <div className="flex flex-wrap gap-4 mt-8">
    <button className="btn btn-soft btn-accent"><svg viewBox="0 0 24 24" className="w-5 h-5 flex-none fill-none stroke-current stroke-[1.75] [stroke-linecap:round] [stroke-linejoin:round]">
  <path d="M12 2l10 5-10 5L2 7zM2 17l10 5 10-5M2 12l10 5 10-5" />
</svg>
View Projects</button>
    <button className="btn btn-dash"><span><svg viewBox="0 0 24 24" className="w-5 h-5 flex-none fill-none stroke-current stroke-[1.75] [stroke-linecap:round] [stroke-linejoin:round]"><path d="M7 17L17 7M7 7h10v10"></path></svg></span>Contact Me</button>
  </div>
{/* SPINNING GLOBE */}
            </div>
            <div id="right-hero" className="flex-[1_1_340px] min-w-0">
              <div className="relative w-[calc(100%-56px)] max-w-[480px] mx-auto aspect-square">
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
        <div className="dots py-20 sm:py-32 ">
          
          

          <div className="max-w-[1240px] w-full mx-auto px-5 sm:px-10 flex flex-col gap-14">
            <div className="flex flex-wrap items-end justify-between gap-6">
              <div>
                <p className="text-[#A4A69F] font-[family-name:var(--jetbrains)] text-sm">SELECTED WORK</p>
                <h3 className="text-[clamp(40px,6vw,88px)] leading-[0.95] tracking-[-0.04em] font-[family-name:var(--header)] font-bold" style={{color: '#eceae3'}}>Citadel</h3>
              </div>
              <div className="ghost font-[family-name:var(--header)] text-[clamp(120px,22vw,240px)]">01</div>
            </div>

            <div className="rounded-2xl border border-[#2B2F2D] bg-[#0D0F0E] bg-[radial-gradient(ellipse_at_85%_0%,color-mix(in_srgb,var(--accent)_12%,transparent),transparent_55%)] overflow-hidden">
              <svg
                viewBox="0 0 1100 340"
                role="img"
                aria-label={citadelLabel}
                className="diagram hidden lg:block w-full h-auto"
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
                    <g key={s.name} className="svc" tabIndex={0}>
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
                <text className="caption hint-hover" x="1070" y="318" textAnchor="end">HOVER A SERVICE</text>
              </svg>

              {/* phones and tablets: same diagram stacked vertically, services in a 2-column grid off one trunk */}
              <svg viewBox="0 0 360 680" role="img" aria-label={citadelLabel} className="diagram block lg:hidden w-full max-w-[420px] mx-auto h-auto">
                <defs>
                  <linearGradient id="citadel-line-v" gradientUnits="userSpaceOnUse" x1="0" y1="76" x2="0" y2="272">
                    <stop offset="0" stopColor="#3A3F3C" />
                    <stop offset="1" style={{ stopColor: 'var(--accent)' }} />
                  </linearGradient>
                </defs>

                <path className="diagram-flow" d="M180 76V104M180 160V188M180 244V272" stroke="url(#citadel-line-v)" strokeWidth="1.5" />

                {citadelServices.map((s, i) => {
                  const left = i % 2 === 0
                  const cx = left ? 92 : 268
                  const y = 400 + Math.floor(i / 2) * 76
                  const route = `M180 328V${y + 28}H${left ? 168 : 192}`
                  return (
                    <g key={s.name} className="svc" tabIndex={0}>
                      <title>{`${s.name}: ${s.title}`}</title>
                      <path className="svc-route diagram-flow" d={route} strokeWidth="1.5" />
                      <g className="node">
                        <rect className="node-box" x={cx - 76} y={y} width="152" height="56" rx="14" />
                        <rect className="node-glow" x={cx - 76} y={y} width="152" height="56" rx="14" />
                        <text className="node-label" x={cx} y={y + 25} textAnchor="middle">{s.name}</text>
                        <text className="node-sub" x={cx} y={y + 44} textAnchor="middle">{s.sub}</text>
                      </g>
                      <circle r="4" className="diagram-packet" opacity="0">
                        <animateMotion dur="4s" repeatCount="indefinite" path={route} keyPoints="0;0;1;1" keyTimes="0;0.5;0.8;1" calcMode="spline" keySplines="0 0 1 1;0.45 0 0.25 1;0 0 1 1" />
                        <animate attributeName="opacity" dur="4s" repeatCount="indefinite" values="0;0;1;1;0;0" keyTimes="0;0.5;0.53;0.78;0.82;1" />
                      </circle>
                    </g>
                  )
                })}

                {citadelHops.map((h, i) => {
                  const y = 20 + i * 84
                  return (
                    <g key={h.name} className={h.hub ? 'node hub-node' : 'node'}>
                      <rect className={h.hub ? 'node-box hub' : 'node-box'} x="60" y={y} width="240" height="56" rx="16" />
                      {h.hub && <rect className="node-glow hub" x="60" y={y} width="240" height="56" rx="16" />}
                      <text className="node-label" x="180" y={y + 26} textAnchor="middle">{h.name}</text>
                      <text className="node-sub" x="180" y={y + 45} textAnchor="middle">{h.sub}</text>
                    </g>
                  )
                })}

                <circle r="5" className="diagram-packet" opacity="0">
                  <animateMotion dur="4s" repeatCount="indefinite" path="M180 48V300" keyPoints="0;1;1" keyTimes="0;0.5;1" calcMode="spline" keySplines="0.45 0 0.25 1;0 0 1 1" />
                  <animate attributeName="opacity" dur="4s" repeatCount="indefinite" values="0;1;1;0;0" keyTimes="0;0.05;0.48;0.52;1" />
                </circle>

                <text className="caption" x="180" y="640" textAnchor="middle">20+ CONTAINERS, ONE LOGIN</text>
                <text className="caption hint-hover" x="180" y="662" textAnchor="middle">HOVER A SERVICE</text>
                <text className="caption hint-touch" x="180" y="662" textAnchor="middle">TAP A SERVICE</text>
              </svg>
            </div>

            <div className="flex flex-wrap gap-x-16 gap-y-10 items-start font-[family-name:var(--header)]">
              <p className="flex-[5_1_360px] min-w-0 text-[19px] text-pretty text-[#CFCEC7]">
                My home server: a second-hand IBM x3650 in my bedroom. Every service sits behind a Cloudflare Tunnel and single sign-on, so nothing is exposed directly. (You're connected to it right now!)
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
        <div className="relative overflow-hidden bg-[#181B1A] border-y border-[#2B2F2D] py-20 sm:py-32">
          <div className="ghost absolute -right-5 top-5 text-[clamp(180px,30vw,360px)] opacity-70 font-[family-name:var(--header)]" aria-hidden="true">02</div>
          {/* 02 Placement */}

          <div className="relative max-w-[1240px] mx-auto px-5 sm:px-10 py-... flex flex-wrap items-center gap-18">
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
              <h2 className="text-[clamp(36px,8vw,56px)] leading-none tracking-[-0.03em] font-bold font-[family-name:var(--header)]" style={{color: '#eceae3'}}>Barnsley Hospital NHS</h2>
              <p className="max-w-[28em] text-lg sm:text-[22px] leading-[1.45] text-[#CFCEC7] text-pretty mt-5">Junior Applications Developer with the ICT Applications Development team. I work on SharePoint Framework web parts in TypeScript and React, and use GitLab day to day.</p>
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
        <div className="dots relative py-20 sm:py-32">
          <div className="max-w-[1000px] mx-auto px-5 sm:px-10 flex flex-col items-center text-center gap-7">
            <div className="ghost text-[clamp(110px,20vw,200px)] font-[family-name:var(--header)]" aria-hidden="true">03</div>

            {/* label: First project · In progress */}
            <div className="flex items-center gap-2.5 ">
              <p className="text-[#CFCEC7] font-[family-name:var(--jetbrains)] text-pretty" style={{ color: 'var(--accent)' }}> <svg viewBox="0 0 24 24" className="w-5 h-5  mr-2 flex-none fill-none stroke-current stroke-[1.75] [stroke-linecap:round] [stroke-linejoin:round] inline-block" style={{ color: 'var(--accent)' }}>
    <path d="M12 2l10 5-10 5L2 7zM2 17l10 5 10-5M2 12l10 5 10-5" />
  </svg>FIRST PROJECT · IN PROGRESS</p>
            </div>

            {/* title: This site */}
            <h3 className="text-[clamp(40px,6vw,88px)] leading-[0.95] tracking-[-0.04em] font-[family-name:var(--header)] font-bold" style={{color: '#eceae3'}}>This site</h3>

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

      <section id="skills" className="bg-[#181B1A] border-y border-[#2B2F2D]">
        <div className="max-w-[1240px] mx-auto px-5 sm:px-10 pt-20 sm:pt-32 pb-20 sm:pb-28 flex flex-col gap-16">
          {/* title: Skills (h2, same sizing as the other big titles) */}

          <div className="flex flex-col">
            <h2 className="text-[clamp(40px,6vw,88px)] text-[#ECEAE3] leading-[0.95] tracking-[-0.04em] font-bold font-[family-name:var(--header)]">Skills</h2>
            {/* row 1: Languages (icon M16 18l6-6-6-6M8 6l-6 6 6 6) — TypeScript, Python, C# (MVC) */}
            

            <div className="flex flex-wrap text-[#CFCEC7] items-center gap-x-12 gap-y-4 py-8 border-t border-[#444A47]">
              <h3 className="flex-[0_0_240px] flex items-center gap-3 text-[var(--accent)] font-[family-name:var(--jetbrains)] uppercase tracking-[.06em] text-sm"><svg viewBox="0 0 24 24" className="w-5 h-5 flex-none fill-none stroke-current stroke-[1.75] [stroke-linecap:round] [stroke-linejoin:round]"><path d="M16 18l6-6-6-6M8 6l-6 6 6 6" /></svg>Languages</h3>  
              <div className="flex-[1_1_400px] flex flex-wrap gap-3">       
                <Badge>TypeScript</Badge>
                <Badge>Python</Badge>
                <Badge>C#</Badge>
              </div>
            </div>






            {/* row 2: Frameworks (icon M12 2l10 5-10 5L2 7zM2 17l10 5 10-5M2 12l10 5 10-5) — React, Next.js, SPFx, Tailwind CSS, DaisyUI, Bootstrap */}
                <div className="flex flex-wrap items-center gap-x-12 gap-y-4 py-8 border-t border-[#444A47]">
                  <h3 className="flex-[0_0_240px] flex items-center gap-3 text-[var(--accent)] font-[family-name:var(--jetbrains)] uppercase tracking-[.06em] text-sm"><svg viewBox="0 0 24 24" className="w-5 h-5 flex-none fill-none stroke-current stroke-[1.75] [stroke-linecap:round] [stroke-linejoin:round]"><path d="M12 2l10 5-10 5L2 7zM2 17l10 5 10-5M2 12l10 5 10-5" /></svg>Frameworks</h3>
                  <div className="flex-[1_1_400px] flex flex-wrap gap-3">
                    <Badge>React</Badge>
                    <Badge>Next.js</Badge>
                    <Badge>SPFx</Badge>
                    <Badge>Tailwind CSS</Badge>
                    <Badge>DaisyUI</Badge>
                    <Badge>Bootstrap</Badge>
                  </div>
                </div>
            {/* row 3: Tools (icon M6 3v12M18 9a3 3 0 100-6 3 3 0 000 6zM6 21a3 3 0 100-6 3 3 0 000 6zM18 9a9 9 0 01-9 9) — Git, GitLab, GitHub, Vite */}
            <div className="flex flex-wrap items-center gap-x-12 gap-y-4 py-8 border-t border-[#444A47]">
              <h3 className="flex-[0_0_240px] flex items-center gap-3 text-[var(--accent)] font-[family-name:var(--jetbrains)] uppercase tracking-[.06em] text-sm"><svg viewBox="0 0 24 24" className="w-5 h-5 flex-none fill-none stroke-current stroke-[1.75] [stroke-linecap:round] [stroke-linejoin:round]"><path d="M6 3v12M18 9a3 3 0 100-6 3 3 0 000 6zM6 21a3 3 0 100-6 3 3 0 000 6zM18 9a9 9 0 01-9 9" /></svg>Tools</h3>
              <div className="flex-[1_1_400px] flex flex-wrap gap-3">
                <Badge>Git</Badge>
                <Badge>GitLab</Badge>
                <Badge>GitHub</Badge>
                <Badge>Vite</Badge>
              </div>
            </div>

            {/* row 4: Learning now (icon M13 2L3 14h9l-1 8 10-12h-9z) — C++, WinAPI, Kernel development, Linux */}
            <div className="flex flex-wrap items-center gap-x-12 gap-y-4 py-8 border-t border-[#444A47]">
              <h3 className="flex-[0_0_240px] flex items-center gap-3 text-[var(--accent)] font-[family-name:var(--jetbrains)] uppercase tracking-[.06em] text-sm"><svg viewBox="0 0 24 24" className="w-5 h-5 flex-none fill-none stroke-current stroke-[1.75] [stroke-linecap:round] [stroke-linejoin:round]"><path d="M13 2L3 14h9l-1 8 10-12h-9z" /></svg>Learning now</h3>
              <div className="flex-[1_1_400px] flex flex-wrap gap-3">
                <Badge>C++</Badge>
                <Badge>WinAPI</Badge>
                <Badge>Kernel development</Badge>
                <Badge>Linux</Badge>
              </div>
            </div>
          </div>
        </div>

        {/* outlined reverse ticker: C++ · WinAPI · Kernel · Linux (big outlined text, scrolls the other way) */}
        <div aria-hidden="true" className="border-t border-[#2B2F2D] overflow-hidden py-7">
          <div className="ticker-track ticker-rev text-[clamp(56px,10vw,96px)] font-bold tracking-[-0.04em] leading-none">
            {[0, 1].map((copy) => (
              <div key={copy} className="flex items-center gap-12 pr-12 whitespace-nowrap text-transparent [-webkit-text-stroke:1px_#444A47]">
                <span>C++</span><i className="w-3.5 h-3.5 bg-[var(--accent)] rotate-45"></i>
                <span>WinAPI</span><i className="w-3.5 h-3.5 bg-[var(--accent)] rotate-45"></i>
                <span>Kernel</span><i className="w-3.5 h-3.5 bg-[var(--accent)] rotate-45"></i>
                <span>Linux</span><i className="w-3.5 h-3.5 bg-[var(--accent)] rotate-45"></i>
              </div>
            ))}
          </div>
        </div>

      </section>
      <section id="about" className="relative max-w-[1240px] mx-auto px-5 sm:px-10 pt-20 sm:pt-32 pb-20 sm:pb-28">
        <div className="flex flex-wrap items-start gap-x-20 gap-y-16">
          <div className="flex-[7_1_520px] min-w-0 flex flex-col gap-[72px]">
            <div className="flex flex-col gap-8">
              {/* title: About (h2) */}
              <h2 className="text-[clamp(40px,6vw,88px)] text-[#ECEAE3] leading-[0.95] tracking-[-0.04em] font-bold font-[family-name:var(--header)]">About</h2>

              {/* intro paragraph (large, ~32px, max-w-[22em]) */}
              <p className="text-lg sm:text-[22px] text-[#A4A69F] leading-[1.5] max-w-[22em]">I like understanding a system well enough to break it, then building it so it holds. I'm aiming at backend engineering with a systems and security lean: the layer most people never see.</p>
            </div>

            <ol className="relative flex flex-col gap-10">
              <div aria-hidden="true" className="absolute left-[11px] top-3 bottom-3 w-0.5 bg-[#2B2F2D]">
                <div className="tl-draw h-full bg-[var(--accent)]"></div>
              </div>

              {timeline.map((t) => (
                <li key={t.title} className="relative pl-16">
                  <span className={`absolute left-0 top-1 w-6 h-6 rounded-full bg-[#121413] border-2 flex items-center justify-center ${t.active ? 'border-[var(--accent)] text-[var(--accent)]' : 'border-[#444A47] text-[#A4A69F]'}`}>
                    {t.ping && <i className="tl-ping"></i>}
                    <svg viewBox="0 0 24 24" className="w-3 h-3 fill-none stroke-current stroke-[2] [stroke-linecap:round] [stroke-linejoin:round]">
                      <path d={t.icon} />
                    </svg>
                  </span>
                  <span className={`block font-[family-name:var(--jetbrains)] text-sm uppercase tracking-[.06em] ${t.active ? 'text-[var(--accent)]' : 'text-[#A4A69F]'}`}>{t.when}</span>
                  <strong className="block text-xl font-medium text-[#ECEAE3]">{t.title}</strong>
                  <span className="block text-[#A4A69F]">{t.desc}</span>
                </li>
              ))}
            </ol>
          </div>

          <div className="flex-[4_1_320px] min-w-0 max-w-[440px] mx-auto self-center">
            <svg viewBox="0 0 400 400" role="img" aria-label="Rotating ring reading Backend, Systems, Security, around a shield" className="block w-full h-auto overflow-visible">
              <defs>
                <radialGradient id="about-glow" cx="50%" cy="50%" r="50%">
                  <stop offset="0" style={{ stopColor: 'var(--accent)', stopOpacity: 0.28 }} />
                  <stop offset="0.6" style={{ stopColor: 'var(--accent)', stopOpacity: 0.06 }} />
                  <stop offset="1" style={{ stopColor: 'var(--accent)', stopOpacity: 0 }} />
                </radialGradient>
                <path id="about-text-path" d="M200 200m-168 0a168 168 0 1 1 336 0a168 168 0 1 1-336 0" />
              </defs>

              <circle cx="200" cy="200" r="190" fill="url(#about-glow)" />

              <g className="about-spin-rev" fill="none">
                <circle cx="200" cy="200" r="192" style={{ stroke: '#3A3F3C', strokeDasharray: '1 9' }} />
              </g>

              <g className="about-spin">
                <text textLength="1040" lengthAdjust="spacing" style={{ font: "500 15px 'JetBrains Mono', monospace", fill: '#CFCEC7', letterSpacing: '0.06em' }}>
                  <textPath href="#about-text-path">BACKEND · SYSTEMS · SECURITY · BACKEND · SYSTEMS · SECURITY · </textPath>
                </text>
              </g>

              <circle cx="200" cy="200" r="138" fill="none" style={{ stroke: '#2B2F2D' }} />
              <circle cx="200" cy="200" r="108" fill="none" style={{ stroke: 'var(--accent)', strokeOpacity: 0.5, strokeDasharray: '2 7' }} />

              <g className="about-orbit">
                <circle cx="200" cy="92" r="5" className="about-node" />
                <circle cx="293.5" cy="254" r="5" className="about-node" />
                <circle cx="106.5" cy="254" r="5" className="about-node" />
              </g>

              <circle cx="200" cy="200" r="58" fill="#121413" style={{ stroke: '#444A47' }} />
              <circle cx="200" cy="200" r="58" fill="none" className="about-pulse" style={{ stroke: 'var(--accent)', strokeWidth: 1.5 }} />
              <g transform="translate(164 164) scale(3)" fill="none" style={{ stroke: 'var(--accent)', strokeWidth: 1.5, strokeLinecap: 'round', strokeLinejoin: 'round' }}>
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
              </g>
            </svg>
          </div>
        </div>
      </section>
      <section id="contact" className="dots bg-[#181B1A] border-t border-[#2B2F2D]">
        <div className="max-w-[1240px] mx-auto px-5 sm:px-10 pt-20 sm:pt-32 pb-20 sm:pb-32 flex flex-wrap items-center gap-14">
          <div className="flex-[7_1_520px] min-w-0 flex flex-col gap-9">
            {/* title: Hiring, or just curious? Say hello. (h2, clamp(48px,6.4vw,96px)) */}
            <h2 className="text-[clamp(36px,6.4vw,96px)] leading-[0.95] tracking-[-0.04em] font-bold font-[family-name:var(--header)]" style={{color: '#eceae3'}}>Hiring, or just curious? Say hello.</h2>

            {/* line: LinkedIn is the quickest way to reach me. (~20px) */}
            <p className="text-base sm:text-[20px] text-[#A4A69F] font-[family-name:var(--jetbrains)]">LinkedIn is the quickest way to reach me.</p>

            <div className="flex flex-wrap gap-3.5">
              {/* button 1 (primary): LinkedIn — icon M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-4 0v7h-4v-7a6 6 0 016-6zM2 9h4v12H2zM4 6a2 2 0 100-4 2 2 0 000 4z — then the up-right arrow */}
              <a href="https://www.linkedin.com/in/matthew-matiyenga-3b5793355" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 min-h-11 px-4 py-2 bg-[#2B2F2D] hover:bg-[#3A3F3C] text-[#ECEAE3] font-[family-name:var(--jetbrains)] text-sm border border-[#444A47] hover:border-[#555B58] transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-4 0v7h-4v-7a6 6 0 016-6zM2 9h4v12H2zM4 6a2 2 0 100-4 2 2 0 000 4z"/>
                </svg>
                LinkedIn
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M7 17L17 7M7 7h10v10"/>
                </svg>
              </a>

              {/* button 2: GitHub — branch icon M6 3v12M18 9a3 3 0 100-6 3 3 0 000 6zM6 21a3 3 0 100-6 3 3 0 000 6zM18 9a9 9 0 01-9 9 — then the arrow */}
              <a href="https://github.com/raze-raptor" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 min-h-11 px-4 py-2 bg-[#2B2F2D] hover:bg-[#3A3F3C] text-[#ECEAE3] font-[family-name:var(--jetbrains)] text-sm border border-[#444A47] hover:border-[#555B58] transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M6 3v12M18 9a3 3 0 100-6 3 3 0 000 6zM6 21a3 3 0 100-6 3 3 0 000 6zM18 9a9 9 0 01-9 9"/>
                </svg>
                GitHub
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M7 17L17 7M7 7h10v10"/>
                </svg>
              </a>

              {/* {Will have download CV at some point} */}
            </div>
          </div>

          <div className="flex-[3_1_260px] min-w-0 max-w-[340px] mx-auto">
            <div className="group">
              <svg viewBox="0 0 400 400" aria-hidden="true" className="block w-full h-auto overflow-visible">
                <defs>
                  <radialGradient id="hello-glow" cx="50%" cy="50%" r="50%">
                    <stop offset="0" style={{ stopColor: 'var(--accent)', stopOpacity: 0.35 }} />
                    <stop offset="0.55" style={{ stopColor: 'var(--accent)', stopOpacity: 0.08 }} />
                    <stop offset="1" style={{ stopColor: 'var(--accent)', stopOpacity: 0 }} />
                  </radialGradient>
                  <linearGradient id="hello-disc" x1="0" y1="0" x2="1" y2="1">
                    <stop offset="0" style={{ stopColor: 'color-mix(in srgb, var(--accent) 70%, white)' }} />
                    <stop offset="1" style={{ stopColor: 'var(--accent)' }} />
                  </linearGradient>
                  <path id="hello-text-path" d="M200 200m-168 0a168 168 0 1 1 336 0a168 168 0 1 1-336 0" />
                </defs>

                <circle cx="200" cy="200" r="195" fill="url(#hello-glow)" />

                <g className="about-spin-rev" fill="none">
                  <circle cx="200" cy="200" r="190" style={{ stroke: '#3A3F3C', strokeDasharray: '1 9' }} />
                </g>

                <g className="about-spin" style={{ animationDirection: 'reverse', animationDuration: '60s' }}>
                  <text textLength="1040" lengthAdjust="spacing" style={{ font: "500 15px 'JetBrains Mono', monospace", fill: '#CFCEC7', letterSpacing: '0.06em' }}>
                    <textPath href="#hello-text-path">SAY HELLO · SAY HELLO · SAY HELLO · SAY HELLO · SAY HELLO · </textPath>
                  </text>
                </g>

                <circle cx="200" cy="200" r="134" fill="none" style={{ stroke: '#2B2F2D' }} />
                <circle cx="200" cy="200" r="104" fill="none" style={{ stroke: 'var(--accent)', strokeOpacity: 0.45, strokeDasharray: '2 7' }} />

                <g className="about-orbit" style={{ animationDuration: '14s' }}>
                  <circle cx="200" cy="66" r="5" className="about-node" />
                  <circle cx="316" cy="267" r="5" className="about-node" />
                  <circle cx="84" cy="267" r="5" className="about-node" />
                </g>

                <g className="transition-transform duration-500 [transform-origin:200px_200px] group-hover:scale-110">
                  <circle cx="200" cy="200" r="76" fill="none" className="about-pulse" style={{ stroke: 'var(--accent)', strokeWidth: 1.5 }} />
                  <circle cx="200" cy="200" r="76" fill="url(#hello-disc)" style={{ filter: 'drop-shadow(0 0 22px color-mix(in srgb, var(--accent) 55%, transparent))' }} />
                  <g transform="translate(172 172) scale(2)">
                    <g className="transition-transform duration-300 group-hover:translate-x-[5px] group-hover:-translate-y-[5px]" fill="none" style={{ stroke: '#0B1112', strokeWidth: 2, strokeLinecap: 'round', strokeLinejoin: 'round' }}>
                      <path d="M5 23L23 5M5 5h18v18" />
                    </g>
                  </g>
                </g>
              </svg>
            </div>
          </div>
        </div>
      </section>
    </main>

    <footer className="border-t border-[#2B2F2D]">
      <div className="max-w-[1240px] mx-auto px-5 sm:px-10 py-7 flex flex-wrap justify-between gap-x-8 gap-y-3 text-sm text-[#A4A69F]">
        <span>© {new Date().getFullYear()} Matthew Matiyenga</span>

        {/* footer nav: Projects, Skills, About, Contact (anchor links) */}
      </div>
    </footer>
    </>
  )
}

export default App
