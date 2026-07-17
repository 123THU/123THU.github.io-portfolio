(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const d of i)if(d.type==="childList")for(const b of d.addedNodes)b.tagName==="LINK"&&b.rel==="modulepreload"&&n(b)}).observe(document,{childList:!0,subtree:!0});function o(i){const d={};return i.integrity&&(d.integrity=i.integrity),i.referrerPolicy&&(d.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?d.credentials="include":i.crossOrigin==="anonymous"?d.credentials="omit":d.credentials="same-origin",d}function n(i){if(i.ep)return;i.ep=!0;const d=o(i);fetch(i.href,d)}})();const F="/123THU.github.io-portfolio/assets/background-CV4NlUWj.jpg",a={entranceQuote:"What can I hold you with?",entranceButton:"ENTER THE RAIN",entranceBackground:F,music:"/123THU.github.io-portfolio/music/theme.m4a",poem:{dedication:"This poem is for the girl I have loved for more than ten years.",title:"What can I hold you with?",author:"Jorge Luis Borges",source:"Two English Poems, 1934",lines:["I offer you lean streets, desperate sunsets, the moon of the jagged suburbs.","I offer you the bitterness of a man who has looked long and long at the lonely moon.","I offer you my ancestors, my dead men, the ghosts that living men have honoured in bronze: my father's father killed in the frontier of Buenos Aires, two bullets through his lungs, bearded and dead, wrapped by his soldiers in the hide of a cow; my mother's grandfather —just twentyfour— heading a charge of three hundred men in Peru, now ghosts on vanished horses.","I offer you whatever insight my books may hold, whatever manliness or humour my life.","I offer you the loyalty of a man who has never been loyal.","I offer you that kernel of myself that I have saved, somehow —the central heart that deals not in words, traffics not with dreams, and is untouched by time, by joy, by adversities.","I offer you the memory of a yellow rose seen at sunset, years before you were born.","I offer you explanations of yourself, theories about yourself, authentic and surprising news of yourself.","I can give you my loneliness, my darkness, the hunger of my heart; I am trying to bribe you with uncertainty, with danger, with defeat."]},identity:{name:"Ruo Chang",location:"Based somewhere after midnight."},about:["This site is less a finished portrait than a place to keep looking.","I am still trying to figure out who he is."],favorites:[{id:"poets",category:"Poets",intro:"xxx",people:[{id:"poet-1",name:"xxx",summary:"xxx",paragraphs:["xxx","xxx"]},{id:"poet-2",name:"xxx",summary:"xxx",paragraphs:["xxx"]},{id:"poet-3",name:"xxx",summary:"xxx",paragraphs:["xxx","xxx"]}]},{id:"directors",category:"Directors",intro:"xxx",people:[{id:"director-1",name:"xxx",summary:"xxx",paragraphs:["xxx","xxx"]},{id:"director-2",name:"xxx",summary:"xxx",paragraphs:["xxx"]},{id:"director-3",name:"xxx",summary:"xxx",paragraphs:["xxx","xxx"]}]},{id:"musicians",category:"Musicians",intro:"xxx",people:[{id:"musician-1",name:"xxx",summary:"xxx",paragraphs:["xxx","xxx"]},{id:"musician-2",name:"xxx",summary:"xxx",paragraphs:["xxx"]},{id:"musician-3",name:"xxx",summary:"xxx",paragraphs:["xxx","xxx"]}]}],notes:["xxx","xxx","xxx"],links:{github:{label:"GitHub",href:"https://github.com/123THU"},x:{label:"X",href:"https://x.com/"},email:{label:"Email",href:"mailto:hello@example.com"}},credit:"© 2026 123THU"},V=document.querySelector("#app");V.innerHTML=`
  <div class="scene">
    <div
      class="sky"
      aria-hidden="true"
      style="--entrance-bg: url('${a.entranceBackground}')"
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
        <h1>${a.entranceQuote}</h1>
        <button class="enter-button" type="button">
          <span>${a.entranceButton}</span>
        </button>
        <p class="audio-status" aria-live="polite"></p>
        <a class="scroll-cue" href="#poem">Scroll for the poem</a>
      </div>
    </section>

    <section class="poem" id="poem" aria-label="Poem by Jorge Luis Borges">
      <div class="poem__inner">
        <p class="poem__dedication">${a.poem.dedication}</p>
        <p class="poem__label">From Two English Poems</p>
        <h2 class="poem__title">${a.poem.title}</h2>
        <div class="poem__body">
          ${a.poem.lines.map(e=>`<p>${e}</p>`).join("")}
        </div>
        <p class="poem__credit">${a.poem.author} · ${a.poem.source}</p>
      </div>
    </section>

    <main class="portfolio" id="main-content" tabindex="-1" aria-hidden="true">
      <header class="hero panel" data-depth="0.06">
        <p class="eyebrow">${a.identity.location}</p>
        <h2>${a.identity.name}</h2>
      </header>

      <section class="panel panel-grid" id="about" data-depth="0.12">
        <p class="section-label">About</p>
        <div class="section-body">
          <ul class="about-list">
            ${a.about.map(e=>`<li>${e}</li>`).join("")}
          </ul>
        </div>
      </section>

      <section class="panel panel-grid" id="favorites" data-depth="0.12">
        <p class="section-label">Favorites</p>
        <div class="section-body works">
          ${a.favorites.map(e=>`
                <article class="work-item favorite-item">
                  <a class="favorite-link" href="#/favorites/${e.id}">
                    <h3>${e.category}</h3>
                    <p>${e.intro}</p>
                  </a>
                </article>
              `).join("")}
        </div>
      </section>

      <section class="panel panel-grid" id="notes" data-depth="0.12">
        <p class="section-label">Notes</p>
        <div class="section-body notes">
          ${a.notes.map(e=>`<p>${e}</p>`).join("")}
        </div>
      </section>

      <footer class="site-footer" id="contact">
        <nav class="links" aria-label="Social links">
          ${Object.values(a.links).map(e=>`
                <a href="${e.href}" target="_blank" rel="noreferrer">${e.label}</a>
              `).join("")}
        </nav>
        <p class="site-credit">${a.credit}</p>
      </footer>
    </main>

    <section
      class="detail-view"
      id="detail-view"
      tabindex="-1"
      hidden
      aria-hidden="true"
    >
      <div class="detail-view__inner"></div>
    </section>

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
`;const v=window.matchMedia("(prefers-reduced-motion: reduce)"),P=document.querySelector(".entrance"),E=document.querySelector(".poem"),g=document.querySelector(".enter-button"),y=document.querySelector(".portfolio"),m=document.querySelector(".detail-view"),_=document.querySelector(".detail-view__inner"),l=document.querySelector(".back-button"),p=document.querySelector(".music-toggle"),U=document.querySelector(".audio-status"),$=document.querySelector(".cursor-glow"),z=document.querySelectorAll("[data-depth]"),f=document.querySelector(".rain-canvas"),r=f.getContext("2d"),c=new Audio(a.music);c.loop=!0;c.preload="auto";c.volume=1;c.load();let u=!1,q=!1,A=[],C=0,s={view:"portfolio",categoryId:null,personId:null};function k(e){return a.favorites.find(t=>t.id===e)||null}function H(e,t){return e?.people.find(o=>o.id===t)||null}function L(){const e=window.location.hash.replace(/^#/,""),o=(e.startsWith("/")?e.slice(1):e).split("/").filter(Boolean);if(o[0]==="favorites"&&o[1]){const n=k(o[1]);if(!n)return{view:"portfolio",categoryId:null,personId:null};if(o[2]){const i=H(n,o[2]);return i?{view:"person",categoryId:n.id,personId:i.id}:{view:"category",categoryId:n.id,personId:null}}return{view:"category",categoryId:n.id,personId:null}}return{view:"portfolio",categoryId:null,personId:null}}function x(e){const t=e.startsWith("#")?e:`#${e}`;if(window.location.hash===t){T(L());return}window.location.hash=t}function D(e){return`
    <p class="detail-kicker">Favorites</p>
    <h2 class="detail-title">${e.category}</h2>
    <p class="detail-intro">${e.intro}</p>
    <div class="people-list">
      ${e.people.map(t=>`
            <a class="person-link" href="#/favorites/${e.id}/${t.id}">
              <h3>${t.name}</h3>
              <p>${t.summary}</p>
            </a>
          `).join("")}
    </div>
  `}function G(e,t){return`
    <p class="detail-kicker">${e.category}</p>
    <h2 class="detail-title">${t.name}</h2>
    <p class="detail-intro">${t.summary}</p>
    <div class="detail-body">
      ${t.paragraphs.map(o=>`<p>${o}</p>`).join("")}
    </div>
  `}function h(){if(!u){l.hidden=!0;return}if(l.hidden=!1,s.view==="person"){l.setAttribute("aria-label","Back to category"),l.textContent="← Back";return}if(s.view==="category"){l.setAttribute("aria-label","Back to portfolio"),l.textContent="← Back";return}l.setAttribute("aria-label","Back to entrance"),l.textContent="← Back"}function M(e){_.innerHTML=e,m.hidden=!1,m.setAttribute("aria-hidden","false"),document.body.classList.add("has-detail"),y.setAttribute("aria-hidden","true"),window.scrollTo({top:0,behavior:"auto"}),m.focus({preventScroll:!0})}function I(){m.hidden=!0,m.setAttribute("aria-hidden","true"),_.innerHTML="",document.body.classList.remove("has-detail"),u&&y.setAttribute("aria-hidden","false")}function T(e){if(s=e,!u){I(),h();return}if(s.view==="category"){const t=k(s.categoryId);if(!t){x("#/");return}M(D(t)),h();return}if(s.view==="person"){const t=k(s.categoryId),o=H(t,s.personId);if(!t||!o){x(t?`#/favorites/${t.id}`:"#/");return}M(G(t,o)),h();return}I(),h()}function J(){if(u){if(s.view==="person"&&s.categoryId){x(`#/favorites/${s.categoryId}`);return}if(s.view==="category"){x("#/");return}K()}}function j(e,t,o=!1){const n=Math.random();return{x:Math.random()*e,y:o?Math.random()*t:-Math.random()*t*.3,length:10+n*18,speed:4.5+n*9,thickness:.7+n*1.4,opacity:.18+n*.45}}function Q(){const e=Math.min(window.devicePixelRatio||1,2),t=window.innerWidth,o=window.innerHeight;f.width=Math.floor(t*e),f.height=Math.floor(o*e),f.style.width=`${t}px`,f.style.height=`${o}px`,r.setTransform(e,0,0,e,0,0);const n=Math.round(Math.min(160,Math.max(70,t*.12)));A=Array.from({length:n},()=>j(t,o,!0))}function R(){const e=window.innerWidth,t=window.innerHeight;r.clearRect(0,0,e,t);for(const o of A){o.y+=o.speed,o.x+=o.speed*.08,(o.y>t+o.length||o.x>e+20)&&(Object.assign(o,j(e,t,!1)),o.y=-o.length),r.beginPath();const n=o.opacity>.4?"210, 220, 230":"220, 210, 200";r.strokeStyle=`rgba(${n}, ${o.opacity*.85})`,r.lineWidth=o.thickness,r.lineCap="round",r.moveTo(o.x,o.y),r.lineTo(o.x-o.length*.12,o.y+o.length),r.stroke()}C=window.requestAnimationFrame(R)}function W(){if(Q(),v.matches){r.clearRect(0,0,window.innerWidth,window.innerHeight);for(const e of A.slice(0,40))r.beginPath(),r.strokeStyle=`rgba(220, 230, 240, ${e.opacity*.7})`,r.lineWidth=e.thickness,r.moveTo(e.x,e.y),r.lineTo(e.x-e.length*.12,e.y+e.length),r.stroke();return}cancelAnimationFrame(C),R()}function w(e){U.textContent=e}function S(e){q=e,p.hidden=!1,p.textContent=e?"Sound: On":"Sound: Off",p.setAttribute("aria-label",e?"Pause music":"Play music"),p.setAttribute("aria-pressed",e?"true":"false")}async function N(){try{c.volume=1,c.muted=!1,await c.play(),S(!0),w("")}catch(e){S(!1),w("Music could not start. Tap Sound in the corner to retry."),console.error("Audio playback failed:",e)}}function O(){c.pause(),S(!1)}function X(){u=!0,document.body.classList.add("is-entered"),P.setAttribute("aria-hidden","true"),E.setAttribute("aria-hidden","true"),y.setAttribute("aria-hidden","false"),window.scrollTo({top:0,behavior:"auto"});const e=L();e.view==="portfolio"&&window.location.hash!=="#/"?x("#/"):T(e),s.view==="portfolio"&&y.focus({preventScroll:!0})}function K(){u&&(u=!1,document.body.classList.remove("is-entered"),P.setAttribute("aria-hidden","false"),E.setAttribute("aria-hidden","false"),y.setAttribute("aria-hidden","true"),I(),s={view:"portfolio",categoryId:null,personId:null},window.location.hash&&window.location.hash!=="#poem"&&history.replaceState(null,"",`${window.location.pathname}${window.location.search}`),h(),g.disabled=!1,w(""),window.scrollTo({top:0,behavior:v.matches?"auto":"smooth"}),g.focus())}async function Y(){u||(g.disabled=!0,w("Starting the room tone..."),await N(),X())}async function Z(){if(q){O();return}await N()}function ee(e){window.innerWidth<900||($.style.opacity="1",$.style.transform=`translate(${e.clientX}px, ${e.clientY}px)`)}function te(){$.style.opacity="0"}function B(){if(v.matches)return;const e=window.innerHeight||1;z.forEach(t=>{const o=Number(t.dataset.depth||0),i=(t.getBoundingClientRect().top-e*.5)*o;t.style.transform=`translate3d(0, ${i}px, 0)`})}g.addEventListener("click",Y);l.addEventListener("click",J);p.addEventListener("click",Z);window.addEventListener("hashchange",()=>{u&&T(L())});window.addEventListener("pointermove",ee);window.addEventListener("pointerleave",te);window.addEventListener("scroll",B,{passive:!0});window.addEventListener("resize",()=>{B(),W()});c.addEventListener("ended",()=>{c.loop||O()});v.matches&&document.body.classList.add("reduced-motion");h();B();W();
