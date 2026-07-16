import './style.css';
import entranceBackground from '../figs/background.jpg';

const portfolio = {
  siteTitle: 'Rain Memory',
  entranceQuote: 'What can I hold you with?',
  entranceButton: 'ENTER THE RAIN',
  entranceBackground,
  music: '/music/theme.mp3',
  identity: {
    name: 'Ruo Chang',
    role: 'xxx',
    location: 'Based somewhere after midnight.'
  },
  intro: [
    'xxx',
    'xxx'
  ],
  about: [
    'xxx',
    'xxx'
  ],
  works: [
    {
      title: 'Rain Archive',
      year: '2026',
      type: 'Web Direction / Frontend',
      description:
        'A journal-like interface for cataloging weather, fragments of voice notes, and cities remembered through windows.'
    },
    {
      title: 'Night Window',
      year: '2025',
      type: 'Interactive Story / Visual Design',
      description:
        'A cinematic single-page experience built around soft transitions, muted typography, and distant light.'
    },
    {
      title: 'Field Notes for Soft Machines',
      year: '2024',
      type: 'Creative Coding / Writing',
      description:
        'An experiment in pairing technical essays with ambient interface motion, treating code as a form of pacing.'
    }
  ],
  notes: [
    'xxx',
    'xxx',
    'xxx'
  ],
  links: {
    github: { label: 'GitHub', href: 'https://github.com/123THU' },
    x: { label: 'X', href: 'https://x.com/' },
    email: { label: 'Email', href: 'mailto:hello@example.com' }
  }
};

const app = document.querySelector('#app');

app.innerHTML = `
  <div class="scene">
    <div
      class="sky"
      aria-hidden="true"
      style="--entrance-bg: url('${portfolio.entranceBackground}')"
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
        <h1>${portfolio.entranceQuote}</h1>
        <button class="enter-button" type="button">
          <span>${portfolio.entranceButton}</span>
        </button>
        <p class="audio-status" aria-live="polite"></p>
      </div>
    </section>

    <main class="portfolio" id="main-content" tabindex="-1" aria-hidden="true">
      <header class="hero panel" data-depth="0.06">
        <p class="eyebrow">${portfolio.identity.location}</p>
        <h2>${portfolio.identity.name}</h2>
        <p class="hero__role">${portfolio.identity.role}</p>
        <div class="hero__intro">
          ${portfolio.intro.map((paragraph) => `<p>${paragraph}</p>`).join('')}
        </div>
      </header>

      <section class="panel panel-grid" id="about" data-depth="0.12">
        <p class="section-label">About</p>
        <div class="section-body">
          ${portfolio.about.map((paragraph) => `<p>${paragraph}</p>`).join('')}
        </div>
      </section>

      <section class="panel panel-grid" id="work" data-depth="0.18">
        <p class="section-label">Selected Work</p>
        <div class="section-body works">
          ${portfolio.works
            .map(
              (work) => `
                <article class="work-item">
                  <div class="work-item__meta">
                    <span>${work.year}</span>
                    <span>${work.type}</span>
                  </div>
                  <h3>${work.title}</h3>
                  <p>${work.description}</p>
                </article>
              `
            )
            .join('')}
        </div>
      </section>

      <section class="panel panel-grid" id="notes" data-depth="0.1">
        <p class="section-label">Notes</p>
        <div class="section-body notes">
          ${portfolio.notes.map((note) => `<p>${note}</p>`).join('')}
        </div>
      </section>

      <footer class="panel panel-grid footer" id="contact" data-depth="0.08">
        <p class="section-label">Elsewhere</p>
        <nav class="section-body links" aria-label="Social links">
          ${Object.values(portfolio.links)
            .map(
              (link) => `
                <a href="${link.href}" target="_blank" rel="noreferrer">${link.label}</a>
              `
            )
            .join('')}
        </nav>
      </footer>
    </main>

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
`;

const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
const entrance = document.querySelector('.entrance');
const enterButton = document.querySelector('.enter-button');
const portfolioRoot = document.querySelector('.portfolio');
const musicToggle = document.querySelector('.music-toggle');
const audioStatus = document.querySelector('.audio-status');
const cursorGlow = document.querySelector('.cursor-glow');
const panels = document.querySelectorAll('[data-depth]');
const rainCanvas = document.querySelector('.rain-canvas');
const rainContext = rainCanvas.getContext('2d');

const audio = new Audio(portfolio.music);
audio.loop = true;
audio.preload = 'auto';

let isEntered = false;
let musicPlaying = false;
let raindrops = [];
let rainFrame = 0;

function createRaindrop(width, height, spawnAnywhere = false) {
  const depth = Math.random();
  return {
    x: Math.random() * width,
    y: spawnAnywhere ? Math.random() * height : -Math.random() * height * 0.3,
    length: 10 + depth * 18,
    speed: 4.5 + depth * 9,
    thickness: 0.7 + depth * 1.4,
    opacity: 0.18 + depth * 0.45
  };
}

function resizeRain() {
  const ratio = Math.min(window.devicePixelRatio || 1, 2);
  const width = window.innerWidth;
  const height = window.innerHeight;
  rainCanvas.width = Math.floor(width * ratio);
  rainCanvas.height = Math.floor(height * ratio);
  rainCanvas.style.width = `${width}px`;
  rainCanvas.style.height = `${height}px`;
  rainContext.setTransform(ratio, 0, 0, ratio, 0, 0);

  const count = Math.round(Math.min(160, Math.max(70, width * 0.12)));
  raindrops = Array.from({ length: count }, () => createRaindrop(width, height, true));
}

function drawRain() {
  const width = window.innerWidth;
  const height = window.innerHeight;
  rainContext.clearRect(0, 0, width, height);

  for (const drop of raindrops) {
    drop.y += drop.speed;
    drop.x += drop.speed * 0.08;

    if (drop.y > height + drop.length || drop.x > width + 20) {
      Object.assign(drop, createRaindrop(width, height, false));
      drop.y = -drop.length;
    }

    rainContext.beginPath();
    const tint = drop.opacity > 0.4 ? '210, 220, 230' : '220, 210, 200';
    rainContext.strokeStyle = `rgba(${tint}, ${drop.opacity * 0.85})`;
    rainContext.lineWidth = drop.thickness;
    rainContext.lineCap = 'round';
    rainContext.moveTo(drop.x, drop.y);
    rainContext.lineTo(drop.x - drop.length * 0.12, drop.y + drop.length);
    rainContext.stroke();
  }

  rainFrame = window.requestAnimationFrame(drawRain);
}

function startRain() {
  resizeRain();

  if (reducedMotion.matches) {
    rainContext.clearRect(0, 0, window.innerWidth, window.innerHeight);
    for (const drop of raindrops.slice(0, 40)) {
      rainContext.beginPath();
      rainContext.strokeStyle = `rgba(220, 230, 240, ${drop.opacity * 0.7})`;
      rainContext.lineWidth = drop.thickness;
      rainContext.moveTo(drop.x, drop.y);
      rainContext.lineTo(drop.x - drop.length * 0.12, drop.y + drop.length);
      rainContext.stroke();
    }
    return;
  }

  cancelAnimationFrame(rainFrame);
  drawRain();
}

function setAudioStatus(message) {
  audioStatus.textContent = message;
}

async function playMusic() {
  try {
    await audio.play();
    musicPlaying = true;
    musicToggle.hidden = false;
    musicToggle.textContent = 'Sound: On';
    musicToggle.setAttribute('aria-label', 'Pause music');
    musicToggle.setAttribute('aria-pressed', 'true');
    setAudioStatus('');
  } catch (error) {
    musicPlaying = false;
    musicToggle.hidden = false;
    musicToggle.textContent = 'Sound: Off';
    musicToggle.setAttribute('aria-label', 'Play music');
    musicToggle.setAttribute('aria-pressed', 'false');
    setAudioStatus('Music could not start. You can try the sound control later.');
    console.error('Audio playback failed:', error);
  }
}

function pauseMusic() {
  audio.pause();
  musicPlaying = false;
  musicToggle.textContent = 'Sound: Off';
  musicToggle.setAttribute('aria-label', 'Play music');
  musicToggle.setAttribute('aria-pressed', 'false');
}

function revealPortfolio() {
  isEntered = true;
  document.body.classList.add('is-entered');
  entrance.setAttribute('aria-hidden', 'true');
  portfolioRoot.setAttribute('aria-hidden', 'false');
  portfolioRoot.focus({ preventScroll: true });
}

async function enterRain() {
  if (isEntered) return;
  enterButton.disabled = true;
  setAudioStatus('Starting the room tone...');
  revealPortfolio();
  await playMusic();
}

async function toggleMusic() {
  if (musicPlaying) {
    pauseMusic();
    return;
  }

  await playMusic();
}

function updateCursorGlow(event) {
  if (window.innerWidth < 900) return;
  cursorGlow.style.opacity = '1';
  cursorGlow.style.transform = `translate(${event.clientX}px, ${event.clientY}px)`;
}

function handlePointerLeave() {
  cursorGlow.style.opacity = '0';
}

function applyParallax() {
  if (reducedMotion.matches) return;

  const viewport = window.innerHeight || 1;
  panels.forEach((panel) => {
    const depth = Number(panel.dataset.depth || 0);
    const rect = panel.getBoundingClientRect();
    const offset = (rect.top - viewport * 0.5) * depth;
    panel.style.transform = `translate3d(0, ${offset}px, 0)`;
  });
}

enterButton.addEventListener('click', enterRain);
musicToggle.addEventListener('click', toggleMusic);

window.addEventListener('pointermove', updateCursorGlow);
window.addEventListener('pointerleave', handlePointerLeave);
window.addEventListener('scroll', applyParallax, { passive: true });
window.addEventListener('resize', () => {
  applyParallax();
  startRain();
});

audio.addEventListener('ended', () => {
  if (audio.loop) return;
  pauseMusic();
});

if (reducedMotion.matches) {
  document.body.classList.add('reduced-motion');
}

applyParallax();
startRain();
