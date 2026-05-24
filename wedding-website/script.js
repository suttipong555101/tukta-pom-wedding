
// ── TIMELINE SCROLL ANIMATION ───────────────────────────────────────────────
(function () {
    const tlWrap     = document.getElementById('tlWrap');
    const tlProgress = document.getElementById('tlProgress');
    const cards      = document.querySelectorAll('.tl-card');

    // Progress line
    function updateProgress() {
        if (!tlWrap || !tlProgress) return;
        const rect   = tlWrap.getBoundingClientRect();
        const winH   = window.innerHeight;
        const ratio  = Math.max(0, Math.min(1, (winH - rect.top) / (rect.height + winH * 0.3)));
        tlProgress.style.height = (ratio * 100) + '%';
    }

    // Card slide-in via IntersectionObserver
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(e => {
            if (e.isIntersecting) {
                setTimeout(() => e.target.classList.add('tl-visible'), 100);
                observer.unobserve(e.target);
            }
        });
    }, { threshold: 0.25 });

    cards.forEach(c => observer.observe(c));

    window.addEventListener('scroll', updateProgress, { passive: true });
    updateProgress();
})();

// ── COUNTDOWN ───────────────────────────────────────────────
const WEDDING_DATE = new Date('2026-06-27T08:09:00');
const ADMIN_PASSWORD = 'pomlovetukta';
const STORAGE_KEY = 'wedding_guests_tukta_pom';
const SHEET_URL = 'https://script.google.com/macros/s/AKfycbz3HbI3WTmoB_lxj7b9KDa1Z2YUwUIrYHRhH-qQ7NHybwjwDuXUIY5GGT38ELJqNRld/exec';

function updateCountdown() {
    const now = new Date();
    const diff = WEDDING_DATE - now;

    if (diff <= 0) {
        document.getElementById('countdown').innerHTML =
            '<p style="font-size:1.3rem;letter-spacing:3px;color:var(--gold-light);">🎊 วันนี้คือวันแต่งงาน! 🎊</p>';
        return;
    }

    const days    = Math.floor(diff / 86400000);
    const hours   = Math.floor((diff % 86400000) / 3600000);
    const minutes = Math.floor((diff % 3600000) / 60000);
    const seconds = Math.floor((diff % 60000) / 1000);

    document.getElementById('days').textContent    = String(days).padStart(2, '0');
    document.getElementById('hours').textContent   = String(hours).padStart(2, '0');
    document.getElementById('minutes').textContent = String(minutes).padStart(2, '0');
    document.getElementById('seconds').textContent = String(seconds).padStart(2, '0');
}

setInterval(updateCountdown, 1000);
updateCountdown();

// ── NAV SCROLL ───────────────────────────────────────────────
window.addEventListener('scroll', () => {
    const nav = document.getElementById('nav');
    nav.classList.toggle('scrolled', window.scrollY > 50);

    // Highlight active nav link
    const sections = document.querySelectorAll('section[id]');
    const links = document.querySelectorAll('.nav-links a[href^="#"]');
    let current = '';
    sections.forEach(s => {
        if (window.scrollY >= s.offsetTop - 120) current = s.id;
    });
    links.forEach(a => {
        a.classList.remove('active');
        if (a.getAttribute('href') === '#' + current) a.classList.add('active');
    });
});

// ── MOBILE MENU ───────────────────────────────────────────────
document.getElementById('hamburger').addEventListener('click', () => {
    document.getElementById('mobileMenu').classList.toggle('hidden');
});

function closeMobile() {
    document.getElementById('mobileMenu').classList.add('hidden');
}

// ── ENVELOPE OPEN ───────────────────────────────────────────────
function openEnvelope() {
    const envelope = document.getElementById('envelope');
    if (envelope.classList.contains('open')) return;

    envelope.classList.add('open', 'opened');

    const hint = document.getElementById('envelopeHint');
    if (hint) hint.style.opacity = '0';

    // หลังอนิเมชันเสร็จ → fade ซอง → แสดงการ์ด (layout ไม่ขยับ)
    setTimeout(() => {
        document.getElementById('envelopeScene').classList.add('fade-out');
        setTimeout(() => {
            document.getElementById('envelopeCards').classList.add('show');
        }, 500);
    }, 1900);
}

// ── GALLERY LIGHTBOX ───────────────────────────────────────────────
function openLightbox(el) {
    const img = el.querySelector('img');
    document.getElementById('lightboxImg').src = img.src;
    document.getElementById('lightbox').classList.remove('hidden');
    document.body.style.overflow = 'hidden';
}

function closeLightbox() {
    document.getElementById('lightbox').classList.add('hidden');
    document.body.style.overflow = '';
}

document.addEventListener('keydown', e => {
    if (e.key === 'Escape') closeLightbox();
});

// ── GALLERY ALBUM TABS ───────────────────────────────────────────────
function switchAlbum(name) {
    document.querySelectorAll('.album-tab').forEach(t =>
        t.classList.toggle('active', t.dataset.album === name));
    document.querySelectorAll('.album-panel').forEach(p =>
        p.classList.toggle('active', p.dataset.album === name));
}

// ── RSVP FORM ───────────────────────────────────────────────
function setupPickButtons(containerId, hiddenId, onChange) {
    document.getElementById(containerId).querySelectorAll('.pick-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            document.getElementById(containerId).querySelectorAll('.pick-btn')
                .forEach(b => b.classList.remove('selected'));
            btn.classList.add('selected');
            document.getElementById(hiddenId).value = btn.dataset.value;
            if (onChange) onChange(btn.dataset.value);
        });
    });
}

setupPickButtons('teamSelector', 'guestTeam');
setupPickButtons('attendSelector', 'guestAttend', (val) => {
    document.getElementById('countGroup').style.display = val === 'yes' ? '' : 'none';
    document.getElementById('wishGroup').style.display  = val === 'no'  ? '' : 'none';
    document.getElementById('slipGroup').style.display  = val === 'no'  ? '' : 'none';
    if (val !== 'yes') document.getElementById('guestCount').value = '';
    if (val !== 'no') {
        document.getElementById('guestWish').value = '';
        document.getElementById('guestSlip').value = '';
        document.getElementById('slipImg').style.display = 'none';
        document.getElementById('slipPlaceholder').style.display = 'block';
    }
});

document.getElementById('rsvpForm').addEventListener('submit', function (e) {
    e.preventDefault();

    const nickname = document.getElementById('guestNickname').value.trim();
    const team     = document.getElementById('guestTeam').value;
    const attend   = document.getElementById('guestAttend').value;
    const count    = document.getElementById('guestCount').value;
    const wish     = document.getElementById('guestWish').value.trim();

    if (!nickname) { alert('กรุณาใส่ชื่อเล่น'); return; }
    if (!team)     { alert('กรุณาเลือกทีม'); return; }
    if (!attend)   { alert('กรุณาเลือกการเข้าร่วม'); return; }
    if (attend === 'yes' && !count) { alert('กรุณาเลือกจำนวนผู้เข้าร่วม'); return; }

    const slipImg  = document.getElementById('slipImg');
    const slipBase64 = (attend === 'no' && slipImg.style.display !== 'none' && slipImg.src)
        ? slipImg.src.split(',')[1] : '';

    const guestData = {
        id: Date.now(),
        nickname,
        team,
        attend,
        count: attend === 'yes' ? parseInt(count) : 0,
        wish:  attend === 'no' ? wish : '',
        date: new Date().toLocaleDateString('th-TH', {
            day: '2-digit', month: '2-digit', year: 'numeric'
        })
    };

    // บันทึก localStorage (ไม่เก็บรูป)
    const guests = getGuests();
    guests.push(guestData);
    saveGuests(guests);
    renderScoreboard();

    // ส่งไป Google Sheets (รวมรูป)
    const sheetData = Object.assign({}, guestData, {
        slipBase64,
        slipMime: 'image/jpeg'
    });
    fetch(SHEET_URL, {
        method: 'POST',
        mode: 'no-cors',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(sheetData)
    }).catch(() => {});

    document.getElementById('successMsg').textContent =
        attend === 'yes' ? `รบกวนคูณ${nickname}ช่วยsaveรูปนี้ไว้ เพื่อนำไปลงทะเบียนจับฉลากของชำร่วยในวันงาน` : 'ขอบคุณที่ส่งใจมาด้วยนะ 💌';

    document.getElementById('rsvpBox').classList.add('hidden');

    const successEl = document.getElementById('rsvpSuccess');
    const iconEl    = successEl.querySelector('.success-icon');
    successEl.classList.remove('hidden', 'pop');
    iconEl.classList.remove('bounce');
    void successEl.offsetWidth;
    successEl.classList.add('pop');
    iconEl.classList.add('bounce');

    launchConfetti();
});

function handleSlip(input) {
    const file = input.files[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = function(ev) {
        const img = new Image();
        img.onload = function() {
            const MAX = 1000;
            let w = img.width, h = img.height;
            if (w > MAX || h > MAX) {
                if (w > h) { h = Math.round(h * MAX / w); w = MAX; }
                else       { w = Math.round(w * MAX / h); h = MAX; }
            }
            const canvas = document.createElement('canvas');
            canvas.width = w; canvas.height = h;
            canvas.getContext('2d').drawImage(img, 0, 0, w, h);
            const compressed = canvas.toDataURL('image/jpeg', 0.75);
            document.getElementById('slipImg').src = compressed;
            document.getElementById('slipImg').style.display = 'block';
            document.getElementById('slipPlaceholder').style.display = 'none';
        };
        img.src = ev.target.result;
    };
    reader.readAsDataURL(file);
}

function resetRsvp() {
    document.getElementById('rsvpForm').reset();
    document.getElementById('guestTeam').value   = '';
    document.getElementById('guestAttend').value = '';
    document.getElementById('countGroup').style.display = 'none';
    document.querySelectorAll('#teamSelector .pick-btn, #attendSelector .pick-btn')
             .forEach(b => b.classList.remove('selected'));
    document.getElementById('rsvpBox').classList.remove('hidden');
    document.getElementById('rsvpSuccess').classList.add('hidden');
}

function renderScoreboard() {
    fetch(SHEET_URL + '?action=get')
        .then(r => r.json())
        .then(data => {
            const guests = Array.isArray(data) && data.length > 0 ? data : getGuests();
            updateScoreboardUI(guests);
        })
        .catch(() => updateScoreboardUI(getGuests()));
}

function updateScoreboardUI(guests) {
    document.getElementById('scoreGroom').textContent = guests.filter(g => g.team === 'groom').length;
    document.getElementById('scoreBride').textContent = guests.filter(g => g.team === 'bride').length;
}

// ── STORAGE HELPERS ───────────────────────────────────────────────
function getGuests() {
    try {
        return JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]');
    } catch {
        return [];
    }
}

function saveGuests(guests) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(guests));
}

// ── ADMIN ───────────────────────────────────────────────
function checkAdmin() {
    const pass = document.getElementById('adminPass').value;
    const err  = document.getElementById('adminError');

    if (pass === ADMIN_PASSWORD) {
        document.getElementById('adminLogin').classList.add('hidden');
        document.getElementById('guestlistContent').classList.remove('hidden');
        loadGuestTable();
    } else {
        err.classList.remove('hidden');
        setTimeout(() => err.classList.add('hidden'), 3000);
    }
}

function logoutAdmin() {
    document.getElementById('adminLogin').classList.remove('hidden');
    document.getElementById('guestlistContent').classList.add('hidden');
    document.getElementById('adminPass').value = '';
}

function renderGuestTable(guests) {
    const tbody = document.getElementById('guestTableBody');
    let totalAttendees = 0;

    tbody.innerHTML = '';

    if (guests.length === 0) {
        tbody.innerHTML = '<tr><td colspan="9" style="text-align:center;padding:2rem;opacity:0.5;">ยังไม่มีผู้ตอบรับ</td></tr>';
    } else {
        guests.forEach((g, i) => {
            totalAttendees += (g.count || 0);
            const teamLabel   = g.team === 'groom' ? '🤵 เจ้าบ่าว' : g.team === 'bride' ? '👰 เจ้าสาว' : '—';
            const attendLabel = g.attend === 'yes' ? '🎉 เข้าร่วม' : g.attend === 'no' ? '💌 ส่งใจ' : '—';
            const slipCell    = g.slip ? `<a href="${escHtml(g.slip)}" target="_blank" style="color:var(--gold)">ดูรูป</a>` : '—';
            const tr = document.createElement('tr');
            tr.innerHTML = `
                <td>${i + 1}</td>
                <td><strong>${escHtml(g.nickname || g.name || '—')}</strong></td>
                <td>${teamLabel}</td>
                <td>${attendLabel}</td>
                <td style="text-align:center;">${g.attend === 'yes' ? g.count : '—'}</td>
                <td style="max-width:160px;white-space:normal;font-size:0.82rem;">${g.wish ? escHtml(g.wish) : '—'}</td>
                <td>${slipCell}</td>
                <td style="white-space:nowrap;">${escHtml(g.date)}</td>
                <td><button class="btn-delete" onclick="deleteGuest(${g.id})">ลบ</button></td>
            `;
            tbody.appendChild(tr);
        });
    }

    document.getElementById('totalRSVP').textContent     = guests.length;
    document.getElementById('totalAttendees').textContent = totalAttendees;
}

function loadGuestTable() {
    const tbody = document.getElementById('guestTableBody');
    tbody.innerHTML = '<tr><td colspan="7" style="text-align:center;padding:2rem;opacity:0.5;">⏳ กำลังโหลดข้อมูล...</td></tr>';

    fetch(SHEET_URL + '?action=get')
        .then(r => r.json())
        .then(data => {
            if (Array.isArray(data) && data.length > 0) {
                renderGuestTable(data);
            } else {
                renderGuestTable(getGuests());
            }
        })
        .catch(() => {
            renderGuestTable(getGuests());
        });
}

function deleteGuest(id) {
    if (!confirm('ลบรายชื่อนี้?')) return;
    const guests = getGuests().filter(g => g.id !== id);
    saveGuests(guests);
    loadGuestTable();
}

function escHtml(str) {
    return String(str)
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;');
}

// ── EXPORT CSV ───────────────────────────────────────────────
function exportCSV() {
    const guests = getGuests();
    const headers = ['#', 'ชื่อเล่น', 'ทีม', 'การเข้าร่วม', 'จำนวน', 'วันที่ตอบรับ'];
    const rows = guests.map((g, i) => [
        i + 1,
        g.nickname || g.name || '',
        g.team === 'groom' ? 'ทีมเจ้าบ่าว' : 'ทีมเจ้าสาว',
        g.attend === 'yes' ? 'เข้าร่วมงาน' : 'ส่งใจไปแทน',
        g.attend === 'yes' ? g.count : 0,
        g.date
    ]);

    const csv = [headers, ...rows]
        .map(r => r.map(c => `"${String(c).replace(/"/g, '""')}"`).join(','))
        .join('\r\n');

    const blob = new Blob(['﻿' + csv], { type: 'text/csv;charset=utf-8;' });
    const url  = URL.createObjectURL(blob);
    const a    = document.createElement('a');
    a.href     = url;
    a.download = 'รายชื่อแขก_ตุ๊กตา-ป้อม.csv';
    a.click();
    URL.revokeObjectURL(url);
}

renderScoreboard();

// ── CONFETTI ───────────────────────────────────────────────
function launchConfetti() {
    const canvas = document.getElementById('confettiCanvas');
    const ctx    = canvas.getContext('2d');
    canvas.width  = window.innerWidth;
    canvas.height = window.innerHeight;
    canvas.style.display = 'block';

    const colors = ['#C4973B','#E8C97A','#FFB7C5','#FF6B9D','#ffffff','#F8F3E8','#b5ead7','#ffd700'];
    const particles = [];

    for (let i = 0; i < 160; i++) {
        const circle = Math.random() < 0.3;
        particles.push({
            x:       Math.random() * canvas.width,
            y:       Math.random() * -canvas.height * 0.6,
            w:       circle ? Math.random() * 10 + 5 : Math.random() * 14 + 5,
            h:       circle ? 0 : Math.random() * 7 + 3,
            circle,
            color:   colors[Math.floor(Math.random() * colors.length)],
            rot:     Math.random() * Math.PI * 2,
            rotV:    (Math.random() - 0.5) * 0.18,
            vx:      (Math.random() - 0.5) * 5,
            vy:      Math.random() * 4 + 2,
            opacity: 1,
        });
    }

    let frame = 0;
    function draw() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        let alive = false;
        for (const p of particles) {
            p.x   += p.vx;
            p.y   += p.vy;
            p.vy  += 0.06;
            p.rot += p.rotV;
            if (frame > 130) p.opacity = Math.max(0, p.opacity - 0.02);
            if (p.opacity > 0 && p.y < canvas.height + 20) alive = true;

            ctx.save();
            ctx.globalAlpha = p.opacity;
            ctx.fillStyle   = p.color;
            ctx.translate(p.x, p.y);
            ctx.rotate(p.rot);
            if (p.circle) {
                ctx.beginPath();
                ctx.arc(0, 0, p.w / 2, 0, Math.PI * 2);
                ctx.fill();
            } else {
                ctx.fillRect(-p.w / 2, -p.h / 2, p.w, p.h);
            }
            ctx.restore();
        }
        frame++;
        if (alive && frame < 240) requestAnimationFrame(draw);
        else { canvas.style.display = 'none'; ctx.clearRect(0, 0, canvas.width, canvas.height); }
    }
    draw();
}
