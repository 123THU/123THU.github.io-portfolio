(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))r(n);new MutationObserver(n=>{for(const s of n)if(s.type==="childList")for(const f of s.addedNodes)f.tagName==="LINK"&&f.rel==="modulepreload"&&r(f)}).observe(document,{childList:!0,subtree:!0});function t(n){const s={};return n.integrity&&(s.integrity=n.integrity),n.referrerPolicy&&(s.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?s.credentials="include":n.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(n){if(n.ep)return;n.ep=!0;const s=t(n);fetch(n.href,s)}})();const T="/assets/background-CV4NlUWj.jpg",i={entranceQuote:"What can I hold you with?",entranceButton:"ENTER THE RAIN",entranceBackground:T,music:"/music/theme.m4a",poem:{dedication:"This poem is for the girl I have loved for more than ten years.",title:"What can I hold you with?",author:"Jorge Luis Borges",source:"Two English Poems, 1934",lines:["I offer you lean streets, desperate sunsets, the moon of the jagged suburbs.","I offer you the bitterness of a man who has looked long and long at the lonely moon.","I offer you my ancestors, my dead men, the ghosts that living men have honoured in bronze: my father's father killed in the frontier of Buenos Aires, two bullets through his lungs, bearded and dead, wrapped by his soldiers in the hide of a cow; my mother's grandfather —just twentyfour— heading a charge of three hundred men in Peru, now ghosts on vanished horses.","I offer you whatever insight my books may hold, whatever manliness or humour my life.","I offer you the loyalty of a man who has never been loyal.","I offer you that kernel of myself that I have saved, somehow —the central heart that deals not in words, traffics not with dreams, and is untouched by time, by joy, by adversities.","I offer you the memory of a yellow rose seen at sunset, years before you were born.","I offer you explanations of yourself, theories about yourself, authentic and surprising news of yourself.","I can give you my loneliness, my darkness, the hunger of my heart; I am trying to bribe you with uncertainty, with danger, with defeat."]},identity:{name:"Ruo Chang",role:"xxx",location:"Based somewhere after midnight."},intro:["xxx","xxx"],about:["xxx","xxx"],works:[{title:"Rain Archive",year:"2026",type:"Web Direction / Frontend",description:"xxx"},{title:"Night Window",year:"2025",type:"Interactive Story / Visual Design",description:"xxx"},{title:"Field Notes for Soft Machines",year:"2024",type:"Creative Coding / Writing",description:"xxx"}],notes:["xxx","xxx","xxx"],links:{github:{label:"GitHub",href:"https://github.com/123THU"},x:{label:"X",href:"https://x.com/"},email:{label:"Email",href:"mailto:hello@example.com"}}},I=document.querySelector("#app");I.innerHTML=`
  <div class="scene">
    <div
      class="sky"
      aria-hidden="true"
      style="--entrance-bg: url('${i.entranceBackground}')"
    ></div>
    <div class="mist mist-one" aria-hidden="true"></div>
    <div class="mist mist-two" aria-hidden="true"></div>
    <canvas class="rain-canvas" aria-hidden="true"></canvas>
    <div class="scrim" aria-hidden="true"></div>
    <div class="grain" aria-hidden="true"></div>
    <div class="vignette" aria-hidden="true"></div>
    <div class="cursor-glow" aria-hidden="true"></div>

    <section class="entrance" aria-label="Entrance scene">
      <div class="entrance__inner">
        <p class="kicker">A private memory, left open in the rain.</p>
        <h1>${i.entranceQuote}</h1>
        <button class="enter-button" type="button">
          <span>${i.entranceButton}</span>
        </button>
        <p class="audio-status" aria-live="polite"></p>
        <a class="scroll-cue" href="#poem">Scroll for the poem</a>
      </div>
    </section>

    <section class="poem" id="poem" aria-label="Poem by Jorge Luis Borges">
      <div class="poem__inner">
        <p class="poem__dedication">${i.poem.dedication}</p>
        <p class="poem__label">From Two English Poems</p>
        <h2 class="poem__title">${i.poem.title}</h2>
        <div class="poem__body">
          ${i.poem.lines.map(e=>`<p>${e}</p>`).join("")}
        </div>
        <p class="poem__credit">${i.poem.author} · ${i.poem.source}</p>
      </div>
    </section>

    <main class="portfolio" id="main-content" tabindex="-1" aria-hidden="true">
      <header class="hero panel" data-depth="0.06">
        <p class="eyebrow">${i.identity.location}</p>
        <h2>${i.identity.name}</h2>
        <p class="hero__role">${i.identity.role}</p>
        <div class="hero__intro">
          ${i.intro.map(e=>`<p>${e}</p>`).join("")}
        </div>
      </header>

      <section class="panel panel-grid" id="about" data-depth="0.12">
        <p class="section-label">About</p>
        <div class="section-body">
          ${i.about.map(e=>`<p>${e}</p>`).join("")}
        </div>
      </section>

      <section class="panel panel-grid" id="work" data-depth="0.18">
        <p class="section-label">Selected Work</p>
        <div class="section-body works">
          ${i.works.map(e=>`
                <article class="work-item">
                  <div class="work-item__meta">
                    <span>${e.year}</span>
                    <span>${e.type}</span>
                  </div>
                  <h3>${e.title}</h3>
                  <p>${e.description}</p>
                </article>
              `).join("")}
        </div>
      </section>

      <section class="panel panel-grid" id="notes" data-depth="0.1">
        <p class="section-label">Notes</p>
        <div class="section-body notes">
          ${i.notes.map(e=>`<p>${e}</p>`).join("")}
        </div>
      </section>

      <footer class="panel panel-grid footer" id="contact" data-depth="0.08">
        <p class="section-label">Elsewhere</p>
        <nav class="section-body links" aria-label="Social links">
          ${Object.values(i.links).map(e=>`
                <a href="${e.href}" target="_blank" rel="noreferrer">${e.label}</a>
              `).join("")}
        </nav>
      </footer>
    </main>

    <button
      class="back-button"
      type="button"
      aria-label="Back to entrance"
      hidden
    >
      ← Back
    </button>

    <button
      class="music-toggle"
      type="button"
      aria-label="Pause music"
      aria-pressed="true"
      hidden
    >
      Sound: On
    </button>
  </div>
`;const m=window.matchMedia("(prefers-reduced-motion: reduce)"),$=document.querySelector(".entrance"),k=document.querySelector(".poem"),u=document.querySelector(".enter-button"),y=document.querySelector(".portfolio"),v=document.querySelector(".back-button"),d=document.querySelector(".music-toggle"),R=document.querySelector(".audio-status"),b=document.querySelector(".cursor-glow"),j=document.querySelectorAll("[data-depth]"),l=document.querySelector(".rain-canvas"),a=l.getContext("2d"),c=new Audio(i.music);c.loop=!0;c.preload="auto";c.volume=1;c.load();let h=!1,S=!1,w=[],A=0;function _(e,o,t=!1){const r=Math.random();return{x:Math.random()*e,y:t?Math.random()*o:-Math.random()*o*.3,length:10+r*18,speed:4.5+r*9,thickness:.7+r*1.4,opacity:.18+r*.45}}function q(){const e=Math.min(window.devicePixelRatio||1,2),o=window.innerWidth,t=window.innerHeight;l.width=Math.floor(o*e),l.height=Math.floor(t*e),l.style.width=`${o}px`,l.style.height=`${t}px`,a.setTransform(e,0,0,e,0,0);const r=Math.round(Math.min(160,Math.max(70,o*.12)));w=Array.from({length:r},()=>_(o,t,!0))}function E(){const e=window.innerWidth,o=window.innerHeight;a.clearRect(0,0,e,o);for(const t of w){t.y+=t.speed,t.x+=t.speed*.08,(t.y>o+t.length||t.x>e+20)&&(Object.assign(t,_(e,o,!1)),t.y=-t.length),a.beginPath();const r=t.opacity>.4?"210, 220, 230":"220, 210, 200";a.strokeStyle=`rgba(${r}, ${t.opacity*.85})`,a.lineWidth=t.thickness,a.lineCap="round",a.moveTo(t.x,t.y),a.lineTo(t.x-t.length*.12,t.y+t.length),a.stroke()}A=window.requestAnimationFrame(E)}function L(){if(q(),m.matches){a.clearRect(0,0,window.innerWidth,window.innerHeight);for(const e of w.slice(0,40))a.beginPath(),a.strokeStyle=`rgba(220, 230, 240, ${e.opacity*.7})`,a.lineWidth=e.thickness,a.moveTo(e.x,e.y),a.lineTo(e.x-e.length*.12,e.y+e.length),a.stroke();return}cancelAnimationFrame(A),E()}function p(e){R.textContent=e}function g(e){S=e,d.hidden=!1,d.textContent=e?"Sound: On":"Sound: Off",d.setAttribute("aria-label",e?"Pause music":"Play music"),d.setAttribute("aria-pressed",e?"true":"false")}async function M(){try{c.volume=1,c.muted=!1,await c.play(),g(!0),p("")}catch(e){g(!1),p("Music could not start. Tap Sound in the corner to retry."),console.error("Audio playback failed:",e)}}function P(){c.pause(),g(!1)}function B(){h=!0,document.body.classList.add("is-entered"),$.setAttribute("aria-hidden","true"),k.setAttribute("aria-hidden","true"),y.setAttribute("aria-hidden","false"),v.hidden=!1,window.scrollTo({top:0,behavior:"auto"}),y.focus({preventScroll:!0})}function W(){h&&(h=!1,document.body.classList.remove("is-entered"),$.setAttribute("aria-hidden","false"),k.setAttribute("aria-hidden","false"),y.setAttribute("aria-hidden","true"),v.hidden=!0,u.disabled=!1,p(""),window.scrollTo({top:0,behavior:m.matches?"auto":"smooth"}),u.focus())}async function C(){h||(u.disabled=!0,p("Starting the room tone..."),await M(),B())}async function N(){if(S){P();return}await M()}function H(e){window.innerWidth<900||(b.style.opacity="1",b.style.transform=`translate(${e.clientX}px, ${e.clientY}px)`)}function O(){b.style.opacity="0"}function x(){if(m.matches)return;const e=window.innerHeight||1;j.forEach(o=>{const t=Number(o.dataset.depth||0),n=(o.getBoundingClientRect().top-e*.5)*t;o.style.transform=`translate3d(0, ${n}px, 0)`})}u.addEventListener("click",C);v.addEventListener("click",W);d.addEventListener("click",N);window.addEventListener("pointermove",H);window.addEventListener("pointerleave",O);window.addEventListener("scroll",x,{passive:!0});window.addEventListener("resize",()=>{x(),L()});c.addEventListener("ended",()=>{c.loop||P()});m.matches&&document.body.classList.add("reduced-motion");x();L();
