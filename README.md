# Shraddha — Chapter 22 ❤️
## A Cinematic, Interactive Birthday Love Story Website

> *"22 memories. One extraordinary person. A story that is still becoming more beautiful."*

---

## What This Is

A completely personal, handcrafted digital birthday experience for Shraddha's 22nd birthday (28 October 2026). It includes:

- 🎬 **Cinematic hero** with Marine Drive night atmosphere, floating petals and particles
- ⏱️ **Live countdown** to 28 October 2026, 00:00:00 IST — precise to the second
- 📖 **22-memory timeline** — an interactive editorial scrapbook of your real story
- 💌 **22 love notes** — tap-to-reveal cards
- 🌊 **Marine Drive dream section** — a cinematic parallax tribute to your shared dream
- ✉️ **Personal letter** — opens in a beautiful unfolding paper modal
- 🎁 **Birthday finale** — interactive gift box with confetti
- 🎵 **Optional music player** — add your own song, no autoplay
- 🖼️ **Photo lightbox** — swipe-enabled, keyboard-navigable

---

## Quick Start

This website requires **no build step**. Just open `index.html` in a browser.

> **Note on local images/audio:** Browsers restrict loading local files directly from the filesystem when using `file://` URLs. To see images and hear audio, use any local server:

### Option 1 — VS Code Live Server (Easiest)
1. Install the **Live Server** extension in VS Code
2. Right-click `index.html` → **Open with Live Server**

### Option 2 — Python (if installed)
```bash
cd "path/to/sh birthday"
python -m http.server 8080
# Then open: http://localhost:8080
```

### Option 3 — Node.js (if installed)
```bash
npx serve .
```

---

## Personalising the Site

**Everything you need to change is in `config.js`** — you do not need to touch any other file.

### 1. Add Your Photographs

Create folders inside `images/` for organisation:
```
images/
├── hero/          ← Hero section photo (if you have one)
├── marine-drive/  ← Marine Drive photos
├── juhu-beach/    ← Juhu Beach photos
├── elephanta/     ← Elephanta Caves photos
├── college/       ← College memories
└── other-memories/
```

In `config.js`, update the `image` field for each memory:
```js
{
  id: 6,
  title: "Marine Drive",
  image: "images/marine-drive/our-photo.jpg",  // ← Add your actual photo
  imageAlt: "Us at Marine Drive",
  ...
}
```

Leave `image: ""` for memories where you don't have a photo — a beautiful placeholder will show.

### 2. Fill In Your Personal Memories

Find the **[EDITABLE]** comments in `config.js` (memories 19, 20, 21 and love notes 11–22) and replace the placeholder text with your real memories.

### 3. Add Background Music

1. Place your MP3 in the `audio/` folder
2. Rename it to `song.mp3`
3. In `config.js`, update:
```js
music: {
  src: "audio/song.mp3",
  title: "Song Name — Artist Name",
},
```

The player will appear in the bottom-right corner. **Music never autoplays** — she has to press play.

### 4. Add Real Dates to Memories

In `config.js`, add dates where you remember them:
```js
date: "June 2024",   // or "Summer 2024", or a full date
```

Leave `date: ""` if you don't remember or prefer not to show a date.

---

## Sharing the Website

### Option A — Simple File Sharing
Zip the entire `sh birthday` folder and send it. She can open `index.html` in any browser. **Note:** Images and audio only work if she uses a local server as described above, or if she opens it from a web host.

### Option B — Host it Online (Recommended)

For the best experience, host the site so she can open a link on her phone.

#### Netlify (Free, Easy, Fast)
1. Go to [netlify.com](https://netlify.com) → Sign up free
2. Drag the entire `sh birthday` folder onto the Netlify dashboard
3. You get a URL like `https://shraddha-chapter22.netlify.app`
4. Share that link with her

#### GitHub Pages
1. Create a **private** repository on GitHub
2. Upload all files
3. Go to Settings → Pages → Deploy from branch → `main`

> ⚠️ **Privacy Warning:** GitHub Pages repos must be **public** for free Pages hosting. Use Netlify or a password-protected service if you want privacy.

---

## Privacy Notes

- This site has **no analytics, no trackers, no backend**.
- It is a completely static website.
- All personal content lives only in your files.
- If you host it with an "unlisted" link (no password), anyone who has the URL can see it. Netlify does not offer password protection on the free tier, but you can add a client-side passcode by editing `index.html` if needed.
- **Never commit personal photos to a public GitHub repository.**

---

## File Structure

```
sh birthday/
├── index.html          ← Main page (do not edit)
├── style.css           ← All styles (do not edit)
├── app.js              ← All JavaScript (do not edit)
├── config.js           ← ⭐ EDIT THIS FILE to personalise
├── images/
│   ├── hero-bg.jpg     ← Marine Drive night (atmospheric)
│   ├── juhu-beach.jpg  ← Juhu Beach night (atmospheric)
│   ├── elephanta-caves.jpg
│   ├── marine-drive-dream.jpg
│   ├── boat-ride.jpg   ← Mumbai harbour ferry
│   └── [your photos here]
├── audio/
│   └── song.mp3        ← Your chosen song (add yourself)
└── README.md           ← This file
```

---

## Testing Checklist

Before sharing with Shraddha, verify:

- [ ] Open `index.html` via a local server (not bare `file://`)
- [ ] Hero section loads with background image and floating petals
- [ ] "Open Your Birthday Surprise" button works and reveals main content
- [ ] Countdown shows correct days/hours/minutes/seconds to 28 Oct 2026 IST
- [ ] All 22 memory cards display correctly on mobile (test in phone screen width)
- [ ] Photos appear in memories where you've added them
- [ ] Placeholder boxes show for memories without photos
- [ ] All 22 love notes open when tapped
- [ ] "Read My Letter" opens the letter modal
- [ ] "One Last Surprise" opens the finale with gift box
- [ ] Tapping the gift box opens it and shows confetti
- [ ] "Replay Our Story" returns to the hero section
- [ ] Music player shows but does NOT autoplay
- [ ] Music plays when the play button is pressed (if song.mp3 added)
- [ ] Lightbox opens when tapping memory photos
- [ ] Lightbox swipe works on mobile
- [ ] No horizontal scrolling on any screen size
- [ ] Escape key closes all modals
- [ ] Keyboard navigation works throughout

---

## Browser Support

Works in all modern browsers: Chrome, Safari, Firefox, Edge.
Optimised for mobile (Android & iOS) — Shraddha will most likely open it on her phone.

---

*Built with love for Shraddha's 22nd birthday — 28 October 2026* ❤️
