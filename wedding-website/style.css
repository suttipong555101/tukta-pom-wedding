:root {
    --cream: #F8F3E8;
    --cream-dark: #EDE4CF;
    --gold: #C4973B;
    --gold-light: #E8C97A;
    --gold-dark: #8B6914;
    --brown: #3D2B1F;
    --text: #4A3728;
    --white: #FFFFFF;
    --shadow: rgba(196, 151, 59, 0.15);
}

* { margin: 0; padding: 0; box-sizing: border-box; }
html { scroll-behavior: smooth; }

body {
    font-family: 'Sarabun', sans-serif;
    background: var(--cream);
    color: var(--text);
    overflow-x: hidden;
}

/* ── NAV ─────────────────────────────────── */
.nav {
    position: fixed;
    top: 0; left: 0; right: 0;
    z-index: 1000;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0.9rem 2.5rem;
    background: rgba(248, 243, 232, 0.96);
    backdrop-filter: blur(12px);
    border-bottom: 1px solid var(--cream-dark);
    transition: box-shadow 0.3s;
}
.nav.scrolled { box-shadow: 0 2px 20px var(--shadow); }

.nav-logo {
    font-family: 'Playfair Display', serif;
    font-size: 1.3rem;
    color: var(--gold-dark);
    letter-spacing: 2px;
    text-decoration: none;
}
.nav-logo span { color: var(--gold); }

.nav-links {
    list-style: none;
    display: flex;
    gap: 2rem;
}
.nav-links a {
    text-decoration: none;
    color: var(--text);
    font-size: 0.9rem;
    font-weight: 500;
    letter-spacing: 0.5px;
    transition: color 0.3s;
}
.nav-links a:hover, .nav-links a.active { color: var(--gold); }
.nav-rsvp {
    padding: 0.4rem 1.2rem;
    background: var(--gold);
    color: var(--white) !important;
    border-radius: 50px;
    transition: background 0.3s !important;
}
.nav-rsvp:hover { background: var(--gold-dark) !important; }

.hamburger {
    display: none;
    background: none;
    border: none;
    font-size: 1.5rem;
    cursor: pointer;
    color: var(--gold-dark);
}

.mobile-menu {
    position: fixed;
    top: 60px; left: 0; right: 0;
    z-index: 999;
    background: var(--cream);
    border-bottom: 2px solid var(--cream-dark);
    display: flex;
    flex-direction: column;
    padding: 1rem 2rem;
    gap: 1rem;
    box-shadow: 0 4px 20px var(--shadow);
}
.mobile-menu a {
    text-decoration: none;
    color: var(--text);
    font-size: 1rem;
    font-weight: 500;
    padding: 0.5rem 0;
    border-bottom: 1px solid var(--cream-dark);
}

/* ── HERO ─────────────────────────────────── */
.hero {
    position: relative;
    height: 100vh;
    min-height: 650px;
    display: flex;
    align-items: stretch;
    justify-content: center;
    overflow: hidden;
}

.hero-bg {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center 20%;
}

.hero-overlay {
    position: absolute;
    inset: 0;
    background: linear-gradient(
        to bottom,
        rgba(0,0,0,0.55) 0%,
        rgba(0,0,0,0.30) 45%,
        rgba(0,0,0,0.10) 100%
    );
    z-index: 1;
}

.hero-content {
    position: relative;
    z-index: 2;
    text-align: center;
    color: var(--white);
    padding: 5.5rem 1rem 7rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.6rem;
    justify-content: flex-start;
}

.hero-logo {
    width: 180px;
    filter: brightness(0) invert(1);
    margin-bottom: 0.5rem;
}

.hero-sub {
    font-size: 0.9rem;
    letter-spacing: 2px;
    opacity: 0.9;
    margin-top: auto;
}

.hero-names {
    font-family: 'Playfair Display', serif;
    font-size: 2.4rem;
    letter-spacing: 4px;
    font-weight: 400;
}

.hero-infinity {
    color: var(--gold-light);
    margin: 0 0.5rem;
}

.hero-date {
    font-size: 1rem;
    letter-spacing: 3px;
    opacity: 0.85;
}

/* Countdown */
.countdown {
    display: flex;
    align-items: flex-start;
    gap: 0.5rem;
    margin: 0.8rem 0 1rem;
}
.countdown-item {
    display: flex;
    flex-direction: column;
    align-items: center;
    min-width: 65px;
}
.countdown-item span {
    font-family: 'Playfair Display', serif;
    font-size: 2.6rem;
    font-weight: 700;
    color: var(--gold-light);
    line-height: 1;
}
.countdown-item label {
    font-size: 0.7rem;
    letter-spacing: 1.5px;
    opacity: 0.8;
    margin-top: 4px;
    text-transform: uppercase;
}
.countdown-sep {
    font-size: 2rem;
    color: var(--gold-light);
    line-height: 1;
    padding-top: 4px;
    opacity: 0.7;
}

.btn-hero {
    display: inline-block;
    padding: 0.85rem 2.5rem;
    background: var(--gold);
    color: var(--white);
    text-decoration: none;
    border-radius: 50px;
    font-size: 1rem;
    font-weight: 600;
    letter-spacing: 1.5px;
    transition: all 0.3s;
    border: 2px solid var(--gold);
    margin-top: 0.5rem;
}
.btn-hero:hover {
    background: transparent;
    border-color: var(--gold-light);
    color: var(--gold-light);
}

.hero-scroll {
    position: absolute;
    bottom: 2rem;
    left: 50%;
    transform: translateX(-50%);
    z-index: 2;
    text-align: center;
    color: rgba(255,255,255,0.7);
    font-size: 0.75rem;
    letter-spacing: 2px;
    animation: bounce 2s infinite;
}
.scroll-arrow { font-size: 1.2rem; margin-top: 4px; }

@keyframes bounce {
    0%, 100% { transform: translateX(-50%) translateY(0); }
    50% { transform: translateX(-50%) translateY(8px); }
}

/* ── SHARED ─────────────────────────────────── */
.container {
    max-width: 960px;
    margin: 0 auto;
    padding: 0 2rem;
}

.section-title {
    font-family: 'Playfair Display', serif;
    font-size: 2rem;
    color: var(--gold-dark);
    text-align: center;
    letter-spacing: 2px;
    font-weight: 400;
}
.section-title::after {
    content: '';
    display: block;
    width: 50px;
    height: 2px;
    background: var(--gold);
    margin: 0.6rem auto 2.8rem;
}

/* ── INVITATION ─────────────────────────────────── */
.invitation { padding: 6rem 0 7rem; background: var(--cream); }

/* ── Card Display ── */
.card-display-row {
    display: flex;
    gap: 2rem;
    justify-content: center;
    flex-wrap: wrap;
}

.card-display {
    max-width: 380px;
    flex: 1 1 300px;
    border-radius: 16px;
    overflow: hidden;
    box-shadow: 0 20px 50px rgba(0,0,0,0.2);
}

.card-display img {
    width: 100%;
    display: block;
}

/* ── ENVELOPE ─────────────────────────────────── */
/* Grid overlap — ซองและการ์ดอยู่ใน cell เดียวกัน ไม่ขยับ layout */
.invite-stage {
    display: grid;
    place-items: start center;
}

.invite-stage > * {
    grid-area: 1 / 1;
    width: 100%;
}

/* การ์ด — ซ่อนอยู่ตั้งแต่แรก แต่ยังจอง space ไว้ */
#envelopeCards {
    opacity: 0;
    visibility: hidden;
    pointer-events: none;
    transition: opacity 0.6s, visibility 0.6s;
}

#envelopeCards.show {
    opacity: 1;
    visibility: visible;
    pointer-events: auto;
}

.envelope-scene {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1.4rem;
    transition: opacity 0.5s;
}

.envelope-scene.fade-out {
    opacity: 0;
    pointer-events: none;
}

.envelope {
    position: relative;
    width: 380px;
    max-width: calc(100% - 2rem);
    height: 245px;
    cursor: pointer;
    perspective: 900px;
    filter: drop-shadow(0 16px 36px rgba(0,0,0,0.18));
    transition: filter 0.3s, transform 0.2s;
}

.envelope:hover:not(.opened) {
    transform: translateY(-5px);
    filter: drop-shadow(0 22px 44px rgba(196,151,59,0.3));
}

.envelope.opened { cursor: default; pointer-events: none; }

/* ตัวซอง */
.env-back {
    position: absolute;
    inset: 0;
    background: linear-gradient(160deg, #FFF8EC 0%, #F5E6C8 100%);
    border: 2px solid var(--gold);
    border-radius: 8px;
    overflow: hidden;
}

/* เส้นพับมุมซอง (V ล่าง) */
.env-back::before {
    content: '';
    position: absolute;
    bottom: 0; left: 0; right: 0;
    height: 100%;
    background:
        linear-gradient(to top right, rgba(196,151,59,0.18) 49.5%, transparent 50%),
        linear-gradient(to top left,  rgba(196,151,59,0.18) 49.5%, transparent 50%);
    background-size: 50.2% 58%;
    background-position: left bottom, right bottom;
    background-repeat: no-repeat;
}

/* การ์ดที่อยู่ในซอง (เลื่อนขึ้นเมื่อเปิด) */
.env-card-inside {
    position: absolute;
    bottom: 10px;
    left: 50%;
    transform: translateX(-50%) translateY(0);
    width: 70%;
    border-radius: 6px;
    overflow: hidden;
    box-shadow: 0 4px 16px rgba(0,0,0,0.2);
    z-index: 2;
    opacity: 0;
    transition: transform 0.9s cubic-bezier(0.16, 1, 0.3, 1) 0.5s,
                opacity 0.01s linear 0.5s;
}

.envelope.open .env-card-inside {
    opacity: 1;
    transform: translateX(-50%) translateY(-68%);
}

.env-card-inside img { width: 100%; display: block; }

/* ส่วนหน้าล่างของซอง (บังการ์ด) */
.env-front-bottom {
    position: absolute;
    bottom: 0; left: 0; right: 0;
    height: 55%;
    background: linear-gradient(160deg, #FFF8EC 0%, #EDD9A3 100%);
    border-left: 2px solid var(--gold);
    border-right: 2px solid var(--gold);
    border-bottom: 2px solid var(--gold);
    border-radius: 0 0 8px 8px;
    z-index: 3;
}

/* ฝาซอง (wrapper หมุน) */
.env-flap-wrap {
    position: absolute;
    top: 0; left: 0; right: 0;
    height: 55%;
    transform-origin: top center;
    transition: transform 0.7s cubic-bezier(0.4, 0, 0.2, 1);
    z-index: 5;
}

.envelope.open .env-flap-wrap {
    transform: rotateX(-175deg);
}

/* ฝาซอง ทรงสามเหลี่ยม */
.env-flap-face {
    width: 100%;
    height: 100%;
    background: linear-gradient(170deg, #FFF8EC 0%, #E8C97A 100%);
    clip-path: polygon(0 0, 100% 0, 50% 88%);
}

/* ตราประทับ */
.env-seal {
    position: absolute;
    top: 45%; left: 50%;
    transform: translate(-50%, -50%);
    width: 52px; height: 52px;
    background: radial-gradient(circle at 38% 36%, var(--gold-light), var(--gold-dark));
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.6rem;
    z-index: 6;
    box-shadow: 0 3px 14px rgba(196,151,59,0.55), 0 0 0 3px rgba(196,151,59,0.2);
    transition: opacity 0.25s, transform 0.25s;
}

.envelope.open .env-seal {
    opacity: 0;
    transform: translate(-50%, -50%) scale(0);
}

/* ข้อความใต้ซอง */
.envelope-hint {
    font-size: 0.85rem;
    color: var(--gold-dark);
    letter-spacing: 2px;
    font-style: italic;
    animation: hintPulse 2s ease-in-out infinite;
    transition: opacity 0.5s;
}

@keyframes hintPulse {
    0%, 100% { opacity: 0.85; }
    50%       { opacity: 0.3; }
}

/* ป้ายกำกับการ์ด */
.card-label {
    text-align: center;
    margin-top: 0.6rem;
    font-size: 0.85rem;
    color: var(--gold-dark);
    letter-spacing: 1px;
    font-style: italic;
}

/* ── SCHEDULE ─────────────────────────────────── */
.schedule {
    padding: 6rem 0 8rem;
    background: #1A0F06;
    position: relative;
    overflow: hidden;
}

.schedule .section-title { color: var(--gold-light); }
.schedule .section-title::after { background: var(--gold); }

.sched-bg-word {
    position: absolute;
    top: 50%; left: 50%;
    transform: translate(-50%, -50%);
    font-family: 'Playfair Display', serif;
    font-size: clamp(4rem, 14vw, 10rem);
    color: rgba(196,151,59,0.05);
    white-space: nowrap;
    pointer-events: none;
    user-select: none;
    letter-spacing: 0.3em;
}

/* ── Timeline structure ── */
.tl-wrap {
    position: relative;
    max-width: 820px;
    margin: 0 auto;
    padding: 1rem 0 2rem;
}

.tl-track {
    position: absolute;
    left: 50%; top: 0; bottom: 0;
    width: 2px;
    transform: translateX(-50%);
    background: rgba(196,151,59,0.12);
    border-radius: 2px;
}

.tl-progress {
    width: 100%;
    height: 0%;
    background: linear-gradient(to bottom, var(--gold), var(--gold-light), var(--gold));
    border-radius: 2px;
    box-shadow: 0 0 12px rgba(196,151,59,0.7);
    transition: height 0.05s linear;
}

.tl-row {
    display: grid;
    grid-template-columns: 1fr 56px 1fr;
    align-items: center;
    margin-bottom: 4rem;
    position: relative;
    z-index: 1;
}

.tl-mid {
    display: flex;
    justify-content: center;
    align-items: center;
}

/* ── Dot ── */
.tl-dot {
    width: 18px; height: 18px;
    border-radius: 50%;
    background: var(--gold);
    position: relative;
    box-shadow: 0 0 0 3px #1A0F06, 0 0 0 5px var(--gold), 0 0 16px rgba(196,151,59,0.8);
    animation: dotPulse 2s ease-in-out infinite;
}

.tl-ring {
    position: absolute;
    inset: -8px;
    border-radius: 50%;
    border: 1.5px solid rgba(196,151,59,0.6);
    animation: ringOut 2.4s ease-out infinite;
}
.tl-ring2 { animation-delay: 0.8s; }

/* ── Card ── */
.tl-card {
    background: rgba(255,255,255,0.04);
    border: 1px solid rgba(196,151,59,0.25);
    border-radius: 20px;
    padding: 2rem 1.5rem;
    text-align: center;
    color: var(--cream);
    backdrop-filter: blur(12px);
    position: relative;
    overflow: hidden;
    transition: transform 0.3s ease, box-shadow 0.3s ease;
    cursor: default;
}

.tl-card::before {
    content: '';
    position: absolute;
    inset: 0;
    background: linear-gradient(135deg, rgba(196,151,59,0.08) 0%, transparent 60%);
    pointer-events: none;
}

.tl-card:hover {
    transform: translateY(-4px);
    box-shadow: 0 12px 40px rgba(196,151,59,0.2);
    border-color: rgba(196,151,59,0.5);
}

/* Slide-in animation */
.tl-left .tl-card  { opacity: 0; transform: translateX(-50px); transition: opacity 0.8s cubic-bezier(0.16,1,0.3,1), transform 0.8s cubic-bezier(0.16,1,0.3,1); }
.tl-right .tl-card { opacity: 0; transform: translateX(50px);  transition: opacity 0.8s cubic-bezier(0.16,1,0.3,1), transform 0.8s cubic-bezier(0.16,1,0.3,1); }
.tl-left .tl-card.tl-visible, .tl-right .tl-card.tl-visible { opacity: 1; transform: translateX(0); }

/* ── Time ── */
.tl-time {
    font-family: 'Playfair Display', serif;
    font-size: 3rem;
    font-weight: 700;
    color: var(--gold-light);
    letter-spacing: 2px;
    line-height: 1;
    margin-bottom: 1.2rem;
    animation: timeGlow 2s ease-in-out infinite;
}
.tl-time em { font-size: 0.95rem; font-style: normal; opacity: 0.65; margin-left: 4px; }
.tl-colon { animation: colonBlink 1s step-end infinite; display: inline-block; }

/* ── Icon & text ── */
.tl-icon { margin-bottom: 0.8rem; display: flex; justify-content: center; }
.tl-name { font-size: 1rem; font-weight: 700; color: var(--gold-light); margin-bottom: 0.4rem; letter-spacing: 0.5px; }
.tl-desc { font-size: 0.78rem; color: rgba(255,255,255,0.5); line-height: 1.6; }

/* ── Keyframes ── */
@keyframes dotPulse {
    0%,100% { box-shadow: 0 0 0 3px #1A0F06, 0 0 0 5px var(--gold), 0 0 12px rgba(196,151,59,0.6); }
    50%      { box-shadow: 0 0 0 3px #1A0F06, 0 0 0 6px var(--gold-light), 0 0 24px rgba(196,151,59,1); }
}

@keyframes ringOut {
    0%   { transform: scale(1);   opacity: 0.7; }
    100% { transform: scale(3);   opacity: 0; }
}

@keyframes timeGlow {
    0%,100% { text-shadow: 0 0 8px rgba(232,201,122,0.4); color: var(--gold-light); }
    50%      { text-shadow: 0 0 20px rgba(232,201,122,1), 0 0 40px rgba(196,151,59,0.6); color: #FFE08A; }
}

@keyframes colonBlink {
    0%,100% { opacity: 1; }
    50%      { opacity: 0.15; }
}

/* ── VENUE ─────────────────────────────────── */
.venue {
    padding: 6rem 0;
    background: var(--cream);
}

.venue-wrapper {
    display: grid;
    grid-template-columns: 1fr 2fr;
    gap: 2.5rem;
    align-items: center;
}

.venue-info {
    text-align: center;
}
.venue-pin { font-size: 2.5rem; margin-bottom: 0.8rem; }
.venue-info h3 {
    font-family: 'Playfair Display', serif;
    color: var(--gold-dark);
    font-size: 1.3rem;
    margin-bottom: 0.6rem;
    font-weight: 600;
}
.venue-info p {
    color: var(--text);
    line-height: 2;
    font-size: 0.9rem;
    margin-bottom: 1.2rem;
}

.btn-map {
    display: inline-block;
    padding: 0.7rem 1.5rem;
    background: var(--gold);
    color: var(--white);
    text-decoration: none;
    border-radius: 50px;
    font-size: 0.85rem;
    font-weight: 600;
    transition: background 0.3s;
}
.btn-map:hover { background: var(--gold-dark); }

.venue-map { border-radius: 16px; overflow: hidden; box-shadow: 0 8px 30px var(--shadow); }

/* ── ROAD SCENE ─────────────────────────────────── */
.road-scene {
    margin-top: 2.5rem;
    border-radius: 16px;
    overflow: hidden;
    box-shadow: 0 4px 20px var(--shadow);
    user-select: none;
}

/* Sky */
.road-sky {
    position: relative;
    height: 52px;
    background: linear-gradient(180deg, #87ceeb 0%, #c8eaf8 100%);
    overflow: hidden;
}

.sun {
    position: absolute;
    top: 6px;
    right: 24px;
    font-size: 1.6rem;
    animation: sunPulse 3s ease-in-out infinite;
}

@keyframes sunPulse {
    0%, 100% { transform: scale(1); }
    50%       { transform: scale(1.12); }
}

.cloud {
    position: absolute;
    top: 10px;
    font-size: 1.5rem;
    animation: cloudFloat linear infinite;
    white-space: nowrap;
}

.c1 { animation-duration: 10s; animation-delay: -0s;  font-size: 1.6rem; }
.c2 { animation-duration: 14s; animation-delay: -5s;  font-size: 1.1rem; top: 14px; }
.c3 { animation-duration: 11s; animation-delay: -8s;  font-size: 1.3rem; }

@keyframes cloudFloat {
    from { transform: translateX(-80px); }
    to   { transform: translateX(calc(100vw + 40px)); }
}

/* Ground */
.road-ground {
    position: relative;
    height: 46px;
    background: linear-gradient(180deg, #72c04a 0%, #5aab38 100%);
    overflow: hidden;
}

.road-obj {
    position: absolute;
    bottom: 0;
    left: var(--p, 0);
    font-size: 1.9rem;
    line-height: 1;
}

/* Road */
.road-road {
    position: relative;
    height: 56px;
    background: #4a4a4a;
    overflow: hidden;
}

/* ขอบถนน */
.road-road::before,
.road-road::after {
    content: '';
    position: absolute;
    left: 0; right: 0;
    height: 4px;
    background: #f5c542;
}
.road-road::before { top: 0; }
.road-road::after  { bottom: 0; }

/* เส้นกลางถนน */
.road-dashes {
    position: absolute;
    top: 50%;
    left: 0; right: 0;
    height: 4px;
    transform: translateY(-50%);
    background-size: 56px 4px;
    background-image: repeating-linear-gradient(
        90deg,
        #fff 0, #fff 28px,
        transparent 28px, transparent 56px
    );
    animation: dashScroll 0.45s linear infinite;
}

@keyframes dashScroll {
    from { background-position: 0 0; }
    to   { background-position: -56px 0; }
}

/* รถ */
.road-car {
    position: absolute;
    top: 50%;
    transform: translateY(-60%);
    font-size: 2.2rem;
    animation: carDrive 5s linear infinite;
    will-change: left;
}

@keyframes carDrive {
    0%   { left: -70px; }
    100% { left: calc(100% + 30px); }
}

/* ── GALLERY ─────────────────────────────────── */
.gallery {
    padding: 6rem 0;
    background: var(--cream-dark);
}

/* Album Tabs */
.album-tabs {
    display: flex;
    gap: 0.75rem;
    margin: 1.5rem 0 1.75rem;
}

.album-tab {
    padding: 0.65rem 1.6rem;
    border: 2px solid var(--cream-dark);
    border-radius: 50px;
    background: var(--white);
    color: var(--text);
    font-family: 'Sarabun', sans-serif;
    font-size: 0.95rem;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.2s;
}

.album-tab:hover { border-color: var(--gold); }
.album-tab.active { border-color: var(--gold); background: var(--gold); color: var(--white); }

.album-panel { display: none; }
.album-panel.active { display: block; }

/* Pre-Wedding Grid (7 รูป) */
.prewedding-grid {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-auto-rows: 220px;
    gap: 1rem;
}

.prewedding-grid .gallery-item:first-child {
    grid-column: 1 / 3;
    grid-row: 1 / 3;
}

.prewedding-grid .gallery-item:last-child {
    grid-column: 2;
}

/* Drive Card */
.drive-card {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 1rem;
    padding: 5rem 2rem;
    background: var(--white);
    border: 2px dashed var(--cream-dark);
    border-radius: 20px;
    text-decoration: none;
    color: var(--text);
    text-align: center;
    transition: border-color 0.25s, box-shadow 0.25s;
}

.drive-card:hover {
    border-color: var(--gold);
    box-shadow: 0 8px 28px var(--shadow);
}

.drive-icon { font-size: 3.5rem; line-height: 1; }
.drive-card h3 { font-size: 1.2rem; font-weight: 700; color: var(--brown); }
.drive-card p { font-size: 0.9rem; opacity: 0.7; }

.drive-btn {
    margin-top: 0.5rem;
    padding: 0.6rem 1.6rem;
    background: var(--gold);
    color: var(--white);
    border-radius: 50px;
    font-size: 0.9rem;
    font-weight: 600;
}

/* old .gallery-grid kept for backward compat */
.gallery-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 280px 280px;
    gap: 1rem;
}

.gallery-item {
    position: relative;
    overflow: hidden;
    border-radius: 16px;
    cursor: pointer;
    box-shadow: 0 4px 20px rgba(0,0,0,0.12);
}

.gallery-item.large {
    grid-row: 1 / 3;
}

.gallery-item img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.5s ease;
    display: block;
}

.gallery-item:hover img { transform: scale(1.06); }

.gallery-overlay {
    position: absolute;
    inset: 0;
    background: rgba(196, 151, 59, 0.4);
    display: flex;
    align-items: center;
    justify-content: center;
    opacity: 0;
    transition: opacity 0.3s;
}
.gallery-item:hover .gallery-overlay { opacity: 1; }
.gallery-overlay span {
    color: var(--white);
    font-size: 0.9rem;
    letter-spacing: 2px;
    font-weight: 600;
    border: 1.5px solid white;
    padding: 0.5rem 1.2rem;
    border-radius: 50px;
}

/* Lightbox */
.lightbox {
    position: fixed;
    inset: 0;
    z-index: 9999;
    background: rgba(0,0,0,0.9);
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
}
.lightbox img {
    max-width: 90vw;
    max-height: 90vh;
    object-fit: contain;
    border-radius: 8px;
    box-shadow: 0 0 60px rgba(0,0,0,0.5);
}
.lightbox-close {
    position: absolute;
    top: 1.5rem;
    right: 2rem;
    color: white;
    font-size: 2rem;
    cursor: pointer;
    opacity: 0.7;
    transition: opacity 0.3s;
}
.lightbox-close:hover { opacity: 1; }

/* ── ACTIVITIES ─────────────────────────────────── */
.activities {
    padding: 6rem 0;
    background: linear-gradient(180deg, var(--cream-dark) 0%, var(--cream) 100%);
}

.activities-grid {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 1.5rem;
    margin-top: 2.5rem;
}

.activity-card {
    background: var(--white);
    border: 1.5px solid var(--cream-dark);
    border-radius: 20px;
    padding: 2rem 1.5rem;
    text-align: center;
    box-shadow: 0 4px 20px var(--shadow);
    transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.activity-card:hover {
    transform: translateY(-6px);
    box-shadow: 0 12px 32px rgba(196,151,59,0.25);
}

.activity-icon {
    font-size: 2.8rem;
    margin-bottom: 0.75rem;
    line-height: 1;
}

.activity-card h3 {
    font-size: 1.15rem;
    font-weight: 700;
    color: var(--brown);
    margin-bottom: 0.5rem;
}

.activity-desc {
    font-size: 0.92rem;
    color: var(--text);
    line-height: 1.6;
    opacity: 0.8;
}


/* ── RSVP PICK BUTTONS ─────────────────────────────────── */
.pick-row {
    display: flex;
    gap: 0.75rem;
    margin-top: 0.4rem;
}

.pick-btn {
    flex: 1;
    padding: 0.8rem 1rem;
    border: 2px solid var(--cream-dark);
    border-radius: 12px;
    background: var(--white);
    color: var(--text);
    font-family: 'Sarabun', sans-serif;
    font-size: 1rem;
    font-weight: 600;
    cursor: pointer;
    transition: border-color 0.2s, background 0.2s, color 0.2s;
}

.pick-btn:hover {
    border-color: var(--gold);
}

.pick-btn.selected {
    border-color: var(--gold);
    background: var(--gold);
    color: var(--white);
}

/* ── TEAM SCOREBOARD ─────────────────────────────────── */
.team-scoreboard {
    margin-top: 2.5rem;
    padding: 2rem 1.5rem;
    background: var(--white);
    border-radius: 20px;
    text-align: center;
    box-shadow: 0 4px 20px var(--shadow);
}

.scoreboard-label {
    font-size: 0.9rem;
    letter-spacing: 2px;
    color: var(--gold-dark);
    font-weight: 700;
    margin-bottom: 1.5rem;
    text-transform: uppercase;
}

.scoreboard-row {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1.5rem;
}

.score-side {
    flex: 1;
    padding: 1.5rem 1rem;
    background: var(--cream);
    border-radius: 16px;
}

.score-emoji { font-size: 2rem; line-height: 1; margin-bottom: 0.4rem; }

.score-name {
    font-size: 0.9rem;
    font-weight: 600;
    color: var(--brown);
    margin-bottom: 0.5rem;
}

.score-num {
    font-size: 3rem;
    font-weight: 800;
    color: var(--gold);
    line-height: 1;
}

.score-unit {
    font-size: 0.8rem;
    color: var(--text);
    opacity: 0.7;
    margin-top: 0.25rem;
}

.score-vs {
    font-size: 1.4rem;
    font-weight: 800;
    color: var(--brown);
    opacity: 0.4;
    flex-shrink: 0;
}

/* ── RSVP ─────────────────────────────────── */
.rsvp {
    padding: 6rem 0;
    background: var(--cream);
}

.rsvp-note {
    text-align: center;
    color: var(--gold-dark);
    font-style: italic;
    margin-bottom: 2rem;
    font-size: 0.9rem;
}

.rsvp-box {
    max-width: 580px;
    margin: 0 auto;
    background: var(--white);
    border-radius: 24px;
    padding: 2.5rem;
    box-shadow: 0 10px 40px var(--shadow);
    border: 1px solid var(--cream-dark);
}

.rsvp-form { display: flex; flex-direction: column; gap: 0.8rem; }

.form-row {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 1rem;
}
.form-group { display: flex; flex-direction: column; gap: 0.35rem; }
.form-group.full { grid-column: 1 / -1; }

.form-group label {
    font-size: 0.82rem;
    font-weight: 600;
    color: var(--gold-dark);
    letter-spacing: 0.5px;
}
.required { color: #E05555; }

.form-group input,
.form-group select,
.form-group textarea {
    padding: 0.7rem 0.9rem;
    border: 1.5px solid var(--cream-dark);
    border-radius: 10px;
    font-family: 'Sarabun', sans-serif;
    font-size: 0.9rem;
    color: var(--text);
    background: var(--cream);
    outline: none;
    transition: border-color 0.3s;
}
.form-group input:focus,
.form-group select:focus,
.form-group textarea:focus { border-color: var(--gold); background: var(--white); }
.form-group textarea { resize: vertical; min-height: 80px; }

.optional {
    font-weight: 400;
    font-size: 0.75rem;
    opacity: 0.55;
    margin-left: 0.4rem;
}

.slip-zone {
    border: 2px dashed var(--cream-dark);
    border-radius: 12px;
    padding: 1.5rem;
    text-align: center;
    cursor: pointer;
    transition: border-color 0.2s;
    background: var(--cream);
    color: var(--text);
    font-size: 0.85rem;
    opacity: 0.8;
    min-height: 90px;
    display: flex;
    align-items: center;
    justify-content: center;
}
.slip-zone:hover { border-color: var(--gold); opacity: 1; }

.btn-submit {
    width: 100%;
    padding: 0.9rem;
    background: var(--gold);
    color: var(--white);
    border: none;
    border-radius: 50px;
    font-family: 'Sarabun', sans-serif;
    font-size: 1rem;
    font-weight: 600;
    cursor: pointer;
    letter-spacing: 1px;
    transition: background 0.3s;
    margin-top: 0.5rem;
}
.btn-submit:hover { background: var(--gold-dark); }

@keyframes successPop {
    0%   { transform: scale(0.5); opacity: 0; }
    65%  { transform: scale(1.05); opacity: 1; }
    100% { transform: scale(1);    opacity: 1; }
}

@keyframes iconBounce {
    0%, 100% { transform: scale(1) rotate(0deg); }
    25%  { transform: scale(1.3) rotate(-8deg); }
    50%  { transform: scale(1.4) rotate(8deg); }
    75%  { transform: scale(1.2) rotate(-4deg); }
}

.rsvp-success {
    max-width: 580px;
    margin: 0 auto;
    text-align: center;
    background: var(--white);
    border-radius: 24px;
    padding: 3rem 2.5rem;
    box-shadow: 0 10px 40px var(--shadow);
    border: 1px solid var(--cream-dark);
}

.rsvp-success.pop {
    animation: successPop 0.55s cubic-bezier(0.16, 1, 0.3, 1) forwards;
}

.success-icon {
    font-size: 3.5rem;
    margin-bottom: 1rem;
    display: inline-block;
}

.success-icon.bounce {
    animation: iconBounce 0.7s ease 0.3s both;
}
.rsvp-success h3 {
    font-family: 'Playfair Display', serif;
    font-size: 1.6rem;
    color: var(--gold-dark);
    margin-bottom: 0.5rem;
}
.rsvp-success p { color: var(--text); margin-bottom: 1.5rem; }
.btn-again {
    padding: 0.6rem 1.5rem;
    background: transparent;
    border: 1.5px solid var(--gold);
    color: var(--gold-dark);
    border-radius: 50px;
    font-family: 'Sarabun', sans-serif;
    font-size: 0.85rem;
    cursor: pointer;
    transition: all 0.3s;
}
.btn-again:hover { background: var(--gold); color: white; }

/* ── GUEST LIST ─────────────────────────────────── */
.guestlist {
    padding: 6rem 0;
    background: var(--cream-dark);
}

.admin-panel { text-align: center; }
.admin-hint {
    color: var(--gold-dark);
    font-size: 0.9rem;
    font-style: italic;
    margin-bottom: 1rem;
}

.admin-form {
    display: flex;
    gap: 0.5rem;
    justify-content: center;
    flex-wrap: wrap;
}
.admin-form input {
    padding: 0.7rem 1.1rem;
    border: 1.5px solid var(--cream-dark);
    border-radius: 10px;
    font-family: 'Sarabun', sans-serif;
    font-size: 0.9rem;
    outline: none;
    background: var(--white);
    min-width: 180px;
}
.admin-form input:focus { border-color: var(--gold); }
.admin-form button {
    padding: 0.7rem 1.5rem;
    background: var(--gold);
    color: var(--white);
    border: none;
    border-radius: 10px;
    font-family: 'Sarabun', sans-serif;
    font-size: 0.9rem;
    cursor: pointer;
    transition: background 0.3s;
}
.admin-form button:hover { background: var(--gold-dark); }

.admin-error {
    color: #E05555;
    font-size: 0.85rem;
    margin-top: 0.8rem;
}

.guestlist-stats {
    display: flex;
    gap: 1.5rem;
    justify-content: center;
    margin-bottom: 2rem;
    flex-wrap: wrap;
}
.stat-card {
    background: var(--white);
    border-radius: 16px;
    padding: 1.5rem 2.5rem;
    text-align: center;
    box-shadow: 0 4px 20px var(--shadow);
    border: 1px solid var(--cream-dark);
    min-width: 140px;
}
.stat-card span {
    display: block;
    font-family: 'Playfair Display', serif;
    font-size: 2.8rem;
    color: var(--gold);
    font-weight: 700;
    line-height: 1;
    margin-bottom: 0.3rem;
}
.stat-card label { font-size: 0.82rem; color: var(--text); }

.table-wrapper {
    overflow-x: auto;
    background: var(--white);
    border-radius: 16px;
    box-shadow: 0 4px 24px var(--shadow);
    margin-bottom: 1.5rem;
}
.guest-table {
    width: 100%;
    border-collapse: collapse;
    font-size: 0.88rem;
    min-width: 700px;
}
.guest-table th {
    background: var(--gold);
    color: var(--white);
    padding: 0.9rem 1rem;
    text-align: left;
    font-weight: 600;
    letter-spacing: 0.3px;
    white-space: nowrap;
}
.guest-table th:first-child { border-radius: 16px 0 0 0; }
.guest-table th:last-child { border-radius: 0 16px 0 0; }
.guest-table td {
    padding: 0.8rem 1rem;
    border-bottom: 1px solid var(--cream-dark);
    color: var(--text);
    vertical-align: top;
}
.guest-table tr:last-child td { border-bottom: none; }
.guest-table tr:hover td { background: var(--cream); }

.btn-delete {
    background: none;
    border: 1px solid #E05555;
    color: #E05555;
    border-radius: 6px;
    padding: 0.2rem 0.5rem;
    font-size: 0.75rem;
    cursor: pointer;
    transition: all 0.2s;
}
.btn-delete:hover { background: #E05555; color: white; }

.guestlist-actions {
    display: flex;
    gap: 1rem;
    justify-content: center;
    flex-wrap: wrap;
}
.btn-export {
    padding: 0.7rem 1.8rem;
    background: transparent;
    border: 1.5px solid var(--gold);
    color: var(--gold-dark);
    border-radius: 50px;
    font-family: 'Sarabun', sans-serif;
    font-size: 0.9rem;
    cursor: pointer;
    transition: all 0.3s;
}
.btn-export:hover { background: var(--gold); color: var(--white); }

.btn-logout {
    padding: 0.7rem 1.8rem;
    background: transparent;
    border: 1.5px solid var(--cream-dark);
    color: var(--text);
    border-radius: 50px;
    font-family: 'Sarabun', sans-serif;
    font-size: 0.9rem;
    cursor: pointer;
    transition: all 0.3s;
}
.btn-logout:hover { background: var(--cream-dark); }

/* ── FOOTER ─────────────────────────────────── */
.footer {
    background: var(--brown);
    color: var(--cream);
    text-align: center;
    padding: 4rem 2rem 2.5rem;
}
.footer-logo {
    width: 120px;
    filter: brightness(0) invert(0.85) sepia(1) saturate(2) hue-rotate(5deg);
    margin-bottom: 1rem;
}
.footer-date {
    font-family: 'Playfair Display', serif;
    font-size: 1.1rem;
    letter-spacing: 4px;
    color: var(--gold-light);
    margin-bottom: 0.5rem;
}
.footer-quote {
    font-style: italic;
    opacity: 0.7;
    font-size: 0.9rem;
    letter-spacing: 1px;
    margin-bottom: 0.5rem;
}
.footer-copy { font-size: 0.8rem; opacity: 0.5; }
.footer-credit { font-size: 0.72rem; opacity: 0.35; margin-top: 0.8rem; letter-spacing: 1px; }

/* ── UTIL ─────────────────────────────────── */
.hidden { display: none !important; }

/* ── RESPONSIVE ─────────────────────────────────── */
@media (max-width: 768px) {
    .nav-links { display: none; }
    .hamburger { display: block; }

    .hero-logo { width: 130px; }
    .hero-names { font-size: 1.7rem; }
    .countdown-item span { font-size: 1.9rem; }
    .countdown-item { min-width: 50px; }

    .heart-inner { padding: 7rem 3.5rem 7.5rem; }
    .parents-row { flex-direction: column; gap: 0.5rem; }

    /* Timeline mobile — แสดงทุก card ชิดซ้าย */
    .tl-row {
        grid-template-columns: 40px 1fr;
        grid-template-rows: auto;
        margin-bottom: 2.5rem;
        align-items: start;
    }
    .tl-mid  { grid-column: 1; grid-row: 1; }
    .tl-left { grid-column: 2; grid-row: 1; }
    .tl-right{ grid-column: 2; grid-row: 1; }

    /* แสดง card ทั้งฝั่งซ้ายและขวา (มีแค่ 1 ต่อ row อยู่แล้ว) */
    .tl-left .tl-card  { display: block; opacity: 0; transform: translateX(40px); }
    .tl-right .tl-card { display: block; opacity: 0; transform: translateX(40px); }
    .tl-left .tl-card.tl-visible,
    .tl-right .tl-card.tl-visible { opacity: 1; transform: translateX(0); }

    .tl-track { left: 20px; transform: none; }
    .tl-time { font-size: 2.2rem; }

    .venue-wrapper { grid-template-columns: 1fr; }

    .gallery-grid {
        grid-template-columns: 1fr;
        grid-template-rows: 300px 220px 220px;
    }
    .gallery-item.large { grid-row: 1; }

    .prewedding-grid {
        grid-template-columns: 1fr 1fr;
        grid-auto-rows: 180px;
    }
    .prewedding-grid .gallery-item:first-child { grid-column: 1 / 3; grid-row: 1 / 3; }
    .prewedding-grid .gallery-item:last-child  { grid-column: auto; }

    .activities-grid {
        grid-template-columns: 1fr 1fr;
    }
    .activities-grid > .activity-card:nth-child(4) { grid-column: auto; }
    .activities-grid > .activity-card:nth-child(5) { grid-column: 1 / -1; max-width: 280px; margin: 0 auto; width: 100%; }

    .form-row { grid-template-columns: 1fr; }

    .rsvp-box { padding: 1.8rem 1.2rem; }
}

@media (max-width: 480px) {
    .hero-names { font-size: 1.4rem; }
    .countdown { gap: 0.3rem; }
    .countdown-item span { font-size: 1.5rem; }
    .countdown-sep { font-size: 1.4rem; }
    .section-title { font-size: 1.6rem; }
}
