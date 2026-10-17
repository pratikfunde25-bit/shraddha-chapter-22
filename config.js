/**
 * ═══════════════════════════════════════════════════════════════
 *  SHRADDHA — CHAPTER 22 ❤️
 *  EDITABLE CONTENT CONFIGURATION FILE
 *
 *  This is the ONLY file you need to edit to personalise the site.
 *  ─────────────────────────────────────────────────────────────
 *  RULES:
 *  - All strings use single or double quotes.
 *  - For images, add files to the "images/" folder and set the
 *    path as shown below.  Leave the path as "" if no photo yet.
 *  - Do NOT invent dates. Only fill in real dates you remember.
 *  - Captions marked [EDITABLE] should be replaced with your
 *    own genuine memories.
 * ═══════════════════════════════════════════════════════════════
 */

const SITE_CONFIG = {

  /* ── PERSONAL DETAILS ──────────────────────────────── */
  name: "Shraddha",
  myName: "Pratik",
  birthday: "2026-10-28",          // ISO date — do not change
  timezone: "Asia/Kolkata",
  ageturning: 22,
  projectTitle: "Shraddha — Chapter 22",
  location: "Mumbai, Maharashtra",

  /* ── MUSIC ─────────────────────────────────────────── */
  music: {
    // Place your MP3 at:  audio/song.mp3
    // Leave src as "" if you have no file yet.
    src: "audio/song.mp3",
    title: "Our Song",             // Change to your actual song title
  },

  /* ── LETTER ────────────────────────────────────────── */
  letter: [
    // Each string becomes one paragraph.
    "Dear Shraddha,",
    "Happy 22nd birthday, my love.",
    "When I think about our story, I smile at how unexpectedly everything began. We met through DSA, became classmates, and somehow started with misunderstandings instead of a perfect beginning.",
    "Then came the journeys — Marine Drive, our taxi rides, Elephanta Caves, the boat ride — and that unforgettable night at Juhu Beach.",
    "Some memories are beautiful because of where we went. Others are beautiful because of what we shared — the questions we asked, the feelings we discovered, and the moments that brought us closer.",
    "I love that our story has its own beginning, its own imperfect chapters and its own little moments that only we can fully understand.",
    "On your birthday, I wish you happiness, confidence, good health, success and the courage to pursue everything you dream of.",
    "Thank you for being part of my life and for all the memories we have made together.",
    "I hope we keep growing, understanding each other, respecting each other and creating many more memories — one day at a time.",
    "Today, I celebrate you.",
    "Happy birthday, Shraddha. ❤️",
  ],

  /* ── 22 MEMORIES ───────────────────────────────────── */
  memories: [
    {
      id: 1,
      title: "The DSA Beginning",
      caption: "We didn't know that a college subject would become the beginning of our story. Data Structures and Algorithms — an unlikely starting point for something so meaningful.",
      date: "",                       // Add real date if you remember it
      image: "",                      // e.g. "images/college/dsa-class.jpg"
      imageAlt: "Our college days",
      quote: "The most important journeys begin without a map.",
      layout: "left",
    },
    {
      id: 2,
      title: "Just Classmates",
      caption: "At first, we were simply two people sharing the same college world — the same classrooms, the same schedules, the same ordinary days.",
      date: "",
      image: "",
      imageAlt: "College life",
      quote: "",
      layout: "right",
    },
    {
      id: 3,
      title: "The Attitude Problem",
      caption: "You didn't exactly like my attitude. Our beginning was far from perfect. Not every great story starts with love at first sight.",
      date: "",
      image: "",
      imageAlt: "Early days",
      quote: "Even rough beginnings can lead somewhere beautiful.",
      layout: "left",
    },
    {
      id: 4,
      title: "From Rivals to Something More",
      caption: "Somehow, the person who once disliked me gradually became someone special. That shift — subtle, unplanned — changed everything.",
      date: "",
      image: "",
      imageAlt: "A changing connection",
      quote: "",
      layout: "right",
    },
    {
      id: 5,
      title: "The First Signs",
      caption: "Little by little, our conversations and connection started changing. Something new was growing in the spaces between our words.",
      date: "",
      image: "",
      imageAlt: "Growing connection",
      quote: "Love grows quietly, long before it announces itself.",
      layout: "left",
    },
    {
      id: 6,
      title: "Marine Drive",
      caption: "The sea, the city lights and the moments we shared together. Walking along the Queen's Necklace, with Mumbai glowing all around us.",
      date: "",
      image: "images/hero-bg.jpg",
      imageAlt: "Marine Drive at night, Mumbai",
      quote: "",
      layout: "right",
      feature: false,
    },
    {
      id: 7,
      title: "Our Taxi Journey",
      caption: "One taxi, one journey and another memory that became ours. An ordinary thing that somehow stays with me.",
      date: "",
      image: "",
      imageAlt: "A taxi ride in Mumbai",
      quote: "Some of the best conversations happen in motion.",
      layout: "left",
    },
    {
      id: 8,
      title: "A Dream Beside the Sea",
      caption: "We imagined coming back — five or ten years from now — with our own flat on Marine Drive, a life we'd built together. It's a dream I want to keep.",
      date: "",
      image: "images/marine-drive-dream.jpg",
      imageAlt: "Marine Drive at golden hour",
      quote: "The best things we build start as something we dared to imagine.",
      layout: "right",
      feature: true,
    },
    {
      id: 9,
      title: "Elephanta Caves",
      caption: "A day of exploring, travelling and making memories together. Ancient stone, warm light and a sense of history all around us.",
      date: "",
      image: "images/elephanta-caves.jpg",
      imageAlt: "Elephanta Caves, Mumbai",
      quote: "",
      layout: "left",
    },
    {
      id: 10,
      title: "The Taj Hotel from Afar",
      caption: "A beautiful Mumbai view that became part of our journey together — the iconic silhouette of the Taj against the harbour sky.",
      date: "",
      image: "images/boat-ride.jpg",
      imageAlt: "View of Taj Hotel from the water",
      quote: "",
      layout: "right",
    },
    {
      id: 11,
      title: "Our Boat Ride",
      caption: "Out on the water together, enjoying a different kind of moment. The city behind us, the sea ahead — and just us.",
      date: "",
      image: "images/boat-ride.jpg",
      imageAlt: "Boating in Mumbai harbour",
      quote: "The water has a way of making moments feel lighter.",
      layout: "left",
    },
    {
      id: 12,
      title: "The Road to Juhu Beach",
      caption: "A call, a journey and questions about the future that mattered to both of us. You were on your way to Juhu, and something was shifting.",
      date: "",
      image: "",
      imageAlt: "The road to Juhu Beach",
      quote: "",
      layout: "right",
    },
    {
      id: 13,
      title: "The Questions That Changed Everything",
      caption: "Love, marriage, the differences between us and the courage to ask what the future might hold. You asked the questions many people avoid, and that took real honesty.",
      date: "",
      image: "",
      imageAlt: "A meaningful conversation",
      quote: "It takes real courage to ask the questions that matter most.",
      layout: "left",
      feature: false,
    },
    {
      id: 14,
      title: "Your First Confession",
      caption: "The moment your feelings became something we could finally talk about. The beginning of a new chapter in our story.",
      date: "",
      image: "",
      imageAlt: "A moment of honesty",
      quote: "Some feelings are too real to stay unspoken forever.",
      layout: "right",
      feature: true,
    },
    {
      id: 15,
      title: "A Night by the Sea",
      caption: "Conversations and time together at Juhu Beach until around 2–3 AM. The kind of night that belongs only in memory — unhurried, honest and ours.",
      date: "",
      image: "images/juhu-beach.jpg",
      imageAlt: "Juhu Beach at night",
      quote: "",
      layout: "left",
      feature: true,
    },
    {
      id: 16,
      title: "Our First Hug",
      caption: "A simple moment that made the night unforgettable. Sometimes the smallest gestures carry the most meaning.",
      date: "",
      image: "",
      imageAlt: "A meaningful moment",
      quote: "In that moment, everything else became quiet.",
      layout: "right",
    },
    {
      id: 17,
      title: "Our First Kiss",
      caption: "A memory that became one of the most personal chapters of our story. Some things don't need many words.",
      date: "",
      image: "",
      imageAlt: "A tender moment",
      quote: "The best chapters write themselves.",
      layout: "left",
    },
    {
      id: 18,
      title: "Becoming Closer",
      caption: "Over the following months, our bond grew deeper and more meaningful. Something that had started unexpectedly was becoming something real.",
      date: "",
      image: "",
      imageAlt: "Growing closer",
      quote: "Real love is built slowly, one honest moment at a time.",
      layout: "right",
    },
    {
      id: 19,
      title: "The Little Things",
      // ─── [EDITABLE] Replace this with a real habit, gesture or detail about Shraddha ───
      caption: "[Add a genuine little detail here — something she does, a habit, a gesture, a small thing about her that you love and want to remember.]",
      date: "",
      image: "",
      imageAlt: "A personal memory",
      quote: "",
      layout: "left",
    },
    {
      id: 20,
      title: "Our Favourite Moment",
      // ─── [EDITABLE] Replace with a genuine shared experience ───
      caption: "[Add a real memory here — a specific day, outing, conversation or experience that stands out as one of your favourites together.]",
      date: "",
      image: "",
      imageAlt: "A favourite memory",
      quote: "",
      layout: "right",
    },
    {
      id: 21,
      title: "The Future We Imagine",
      // ─── [EDITABLE] Add a real shared hope, dream or plan ───
      caption: "[Add a genuine shared hope or dream here — something you've talked about, something you're both working towards, or a place you want to visit together.]",
      date: "",
      image: "",
      imageAlt: "The future",
      quote: "",
      layout: "left",
    },
    {
      id: 22,
      title: "The Story Is Still Being Written",
      caption: "Today, on your 22nd birthday, I don't just celebrate the day you were born. I celebrate the person you are and the beautiful memories we have yet to make.",
      date: "",
      image: "",
      imageAlt: "Chapter 22",
      quote: "The most beautiful part of our story? It isn't finished yet.",
      layout: "right",
      feature: true,
    },
  ],

  /* ── 22 LOVE NOTES ─────────────────────────────────── */
  loveNotes: [
    { id: 1,  icon: "✨", text: "I love how our story began in a way neither of us expected." },
    { id: 2,  icon: "🌸", text: "I love how you gave us a chance even when our beginning was not perfect." },
    { id: 3,  icon: "🌊", text: "I love the memories we have created together in Mumbai." },
    { id: 4,  icon: "🌙", text: "I love that we can dream about a future while remembering where we started." },
    { id: 5,  icon: "💬", text: "I love the little moments with you that become memories without us even realising it." },
    { id: 6,  icon: "💛", text: "I love having someone whose happiness genuinely matters to me." },
    { id: 7,  icon: "🎯", text: "I love your courage — to ask the hard questions, to be honest even when it is difficult." },
    { id: 8,  icon: "🚢", text: "I love that we've explored this city together and made it part of our story." },
    { id: 9,  icon: "🌟", text: "I love how far we've come from two people who barely got along." },
    { id: 10, icon: "☕", text: "I love the ordinary moments with you — they never feel ordinary." },
    // ─── [EDITABLE] ── Replace the remaining notes with genuine personal reasons ──────────────
    { id: 11, icon: "📚", text: "[Add your own reason here — something specific about her that you love.]" },
    { id: 12, icon: "🎵", text: "[Add your own reason here — a memory, a habit, something that makes you smile.]" },
    { id: 13, icon: "🌺", text: "[Add your own reason here.]" },
    { id: 14, icon: "🌅", text: "[Add your own reason here.]" },
    { id: 15, icon: "💌", text: "[Add your own reason here.]" },
    { id: 16, icon: "🎭", text: "[Add your own reason here.]" },
    { id: 17, icon: "🕊️", text: "[Add your own reason here.]" },
    { id: 18, icon: "🏙️", text: "[Add your own reason here.]" },
    { id: 19, icon: "🌿", text: "[Add your own reason here.]" },
    { id: 20, icon: "🎂", text: "[Add your own reason here.]" },
    { id: 21, icon: "🌠", text: "[Add your own reason here.]" },
    { id: 22, icon: "❤️", text: "[Add your own reason here — make this last one special.]" },
  ],

};
