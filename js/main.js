/* ===================================================================
   COSTE — interactions
   =================================================================== */
(function () {
  "use strict";

  /* ---- CONFIG ---------------------------------------------------- */
  // Replace with the venue's real WhatsApp number (international, digits only)
  const WHATSAPP_NUMBER = "21620785018";

  const $  = (s, c = document) => c.querySelector(s);
  const $$ = (s, c = document) => Array.from(c.querySelectorAll(s));

  /* ================================================================
     LANGUAGE SWITCHER  (EN / FR / AR)
     ================================================================ */
  const LANGS = {
    en: {
      "nav-experience":"Experience","nav-menu":"Menu","nav-discover":"Discover",
      "nav-events":"Events","nav-club":"Coste Club","nav-reserve":"Reserve",
      "nav-creators":"Creators","nav-catering":"Catering",
      "hero-eyebrow":"Sidi Bou Said · Tunisia",
      "hero-t1":"A Mediterranean","hero-em":"escape","hero-t2":", above the blue.",
      "hero-lede":"Slow mornings, sunlit brunches, and golden-hour terraces where the sea meets the Costewashed hills. This is COSTE.",
      "btn-reserve-hero":"Reserve a Table","btn-discover-hero":"Discover the House",
      "hero-scroll":"Scroll",
      "manifesto-kicker":"The House",
      "manifesto-title":`<span class="reveal-word">Some</span> <span class="reveal-word">places</span> <span class="reveal-word">you</span> <span class="reveal-word">visit.</span> <span class="reveal-word manifesto__accent">COSTE</span> <span class="reveal-word manifesto__accent">you</span> <span class="reveal-word manifesto__accent">remember.</span>`,
      "manifesto-body":"Perched among the cobalt doors and bougainvillea of Sidi Bou Said, COSTE is a house for unhurried hours — where Mediterranean cooking, curated sound, and the slow theatre of sunset become a way of living.",
      "exp-kicker":"The Experience","exp-title":"Four ways to live<br/>a day at COSTE",
      "atmos-kicker":"Sidi Bou Said","atmos-title":"Blue doors,<br/>Coste walls,<br/>endless sea.",
      "atmos-body":"We didn't choose the most beautiful village in the Mediterranean by accident. Every detail at COSTE answers to it — the cobalt, the lime-washed stone, the jasmine in the evening air.",
      "atmos-li1":"A terrace built around the sunset line",
      "atmos-li2":"Mediterranean kitchen, Tunisian soul",
      "atmos-li3":"Sound curated from afternoon to midnight",
      "menu-kicker":"The Kitchen","menu-title":"Signature plates &amp;<br/>house pours",
      "events-kicker":"Events at COSTE","events-title":"Pick your<br/>experience",
      "footer-cta-title":"Your table is<br/>waiting.","footer-reserve":"Reserve at COSTE"
    },
    fr: {
      "nav-experience":"Expérience","nav-menu":"Menu","nav-discover":"Découvrir",
      "nav-events":"Événements","nav-club":"Coste Club","nav-reserve":"Réserver",
      "nav-creators":"Créateurs","nav-catering":"Traiteur",
      "hero-eyebrow":"Sidi Bou Said · Tunisie",
      "hero-t1":"Une escapade","hero-em":"méditerranéenne","hero-t2":", au-dessus du bleu.",
      "hero-lede":"Matins doux, brunchs ensoleillés et terrasses crépusculaires où la mer rejoint les collines de Coste. Voici COSTE.",
      "btn-reserve-hero":"Réserver une Table","btn-discover-hero":"Découvrir la Maison",
      "hero-scroll":"Défiler",
      "manifesto-kicker":"La Maison",
      "manifesto-title":`<span class="reveal-word">Certains</span> <span class="reveal-word">endroits</span> <span class="reveal-word">se</span> <span class="reveal-word">visitent.</span> <span class="reveal-word manifesto__accent">COSTE</span> <span class="reveal-word manifesto__accent">se</span> <span class="reveal-word manifesto__accent">souvient.</span>`,
      "manifesto-body":"Perché parmi les portes cobalt et les bougainvillées de Sidi Bou Said, COSTE est une maison faite pour les heures sans hâte — où cuisine méditerranéenne, son curé et le lent théâtre du coucher de soleil deviennent un art de vivre.",
      "exp-kicker":"L'Expérience","exp-title":"Quatre façons de vivre<br/>une journée à COSTE",
      "atmos-kicker":"Sidi Bou Said","atmos-title":"Portes bleues,<br/>murs Coste,<br/>mer infinie.",
      "atmos-body":"Ce n'est pas par hasard que nous avons choisi le plus beau village de la Méditerranée. Chaque détail de COSTE lui répond — le cobalt, la pierre chaulée, le jasmin dans l'air du soir.",
      "atmos-li1":"Une terrasse bâtie autour de la ligne du coucher de soleil",
      "atmos-li2":"Cuisine méditerranéenne, âme tunisienne",
      "atmos-li3":"Sonorités curées de l'après-midi à minuit",
      "menu-kicker":"La Cuisine","menu-title":"Plats signatures &amp;<br/>boissons maison",
      "events-kicker":"Événements à COSTE","events-title":"Choisissez votre<br/>expérience",
      "footer-cta-title":"Votre table vous<br/>attend.","footer-reserve":"Réserver à COSTE"
    },
    ar: {
      "nav-experience":"تجربة","nav-menu":"القائمة","nav-discover":"اكتشف",
      "nav-events":"الفعاليات","nav-club":"نادي كوست","nav-reserve":"احجز",
      "nav-creators":"المبدعون","nav-catering":"الضيافة",
      "hero-eyebrow":"سيدي بو سعيد · تونس",
      "hero-t1":"هروب","hero-em":"متوسطي","hero-t2":"، فوق الأزرق.",
      "hero-lede":"صباحات هادئة، برانش ذهبي، وشرفات ساعة الغروب حيث يلتقي البحر بتلال كوست. هذا هو COSTE.",
      "btn-reserve-hero":"احجز طاولة","btn-discover-hero":"اكتشف المكان",
      "hero-scroll":"انزل",
      "manifesto-kicker":"المكان",
      "manifesto-title":`<span class="reveal-word">بعض</span> <span class="reveal-word">الأماكن</span> <span class="reveal-word">تُزار.</span> <span class="reveal-word manifesto__accent">كوست</span> <span class="reveal-word manifesto__accent">يُحفر</span> <span class="reveal-word manifesto__accent">في الذاكرة.</span>`,
      "manifesto-body":"متربّعاً بين الأبواب الزرقاء وأشجار البوغانفيل في سيدي بو سعيد، كوست هو بيت للساعات الهادئة — حيث المطبخ المتوسطي والأصوات المختارة ومسرح الغروب يصبحون أسلوب حياة.",
      "exp-kicker":"التجربة","exp-title":"أربع طرق لعيش<br/>يوم في كوست",
      "atmos-kicker":"سيدي بو سعيد","atmos-title":"أبواب زرقاء،<br/>جدران كوست،<br/>بحر لا نهاية له.",
      "atmos-body":"لم نختر أجمل قرى المتوسط بالصدفة. كل تفصيل في كوست يعكسها — اللون الأزرق، الحجر الجيري، وعطر الياسمين في هواء المساء.",
      "atmos-li1":"شرفة مبنية حول خط الغروب",
      "atmos-li2":"مطبخ متوسطي بروح تونسية",
      "atmos-li3":"موسيقى مختارة من الظهر حتى منتصف الليل",
      "menu-kicker":"المطبخ","menu-title":"الأطباق المميزة &amp;<br/>مشروبات المنزل",
      "events-kicker":"فعاليات كوست","events-title":"اختر<br/>تجربتك",
      "footer-cta-title":"طاولتكم<br/>بانتظاركم.","footer-reserve":"احجز في كوست"
    }
  };

  const applyLang = (lang) => {
    const dict = LANGS[lang];
    if (!dict) return;
    $$("[data-i18n]").forEach(el => {
      if (dict[el.dataset.i18n] !== undefined) el.textContent = dict[el.dataset.i18n];
    });
    $$("[data-i18n-html]").forEach(el => {
      const key = el.dataset.i18nHtml;
      if (dict[key] !== undefined) {
        el.innerHTML = dict[key];
        if (el.classList.contains("manifesto__text")) {
          const rect = el.getBoundingClientRect();
          if (rect.bottom > 0 && rect.top < innerHeight) {
            $$(".reveal-word", el).forEach((w, i) =>
              setTimeout(() => w.classList.add("is-in"), i * 70));
          }
        }
      }
    });
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";
    $$(".nav__lang-btn").forEach(b => b.classList.toggle("is-active", b.dataset.lang === lang));
    sessionStorage.setItem("coste_lang", lang);
  };

  $$(".nav__lang-btn").forEach(b => b.addEventListener("click", () => applyLang(b.dataset.lang)));
  const _savedLang = sessionStorage.getItem("coste_lang");
  if (_savedLang && _savedLang !== "en") applyLang(_savedLang);

  /* ================================================================
     PRELOADER
     ================================================================ */
  window.addEventListener("load", () => {
    setTimeout(() => {
      $("#preloader").classList.add("is-done");
      document.body.classList.add("is-loaded");
    }, 1500);
  });

  /* ================================================================
     YEAR
     ================================================================ */
  $("#year").textContent = new Date().getFullYear();

  /* ================================================================
     NAV — scroll state
     ================================================================ */
  const nav = $("#nav");
  const onScroll = () => nav.classList.toggle("is-scrolled", window.scrollY > 40);
  onScroll();
  window.addEventListener("scroll", onScroll, { passive: true });

  /* ================================================================
     MOBILE MENU
     ================================================================ */
  const burger = $("#burger");
  const mobilemenu = $("#mobilemenu");
  burger.addEventListener("click", () => mobilemenu.classList.toggle("is-open"));
  $$(".mobilemenu__links a").forEach(a =>
    a.addEventListener("click", () => mobilemenu.classList.remove("is-open"))
  );

  /* ================================================================
     CUSTOM CURSOR
     ================================================================ */
  const dot = $(".cursor-dot"), ring = $(".cursor-ring");
  if (matchMedia("(hover:hover)").matches) {
    let rx = 0, ry = 0, dx = 0, dy = 0;
    window.addEventListener("mousemove", e => {
      dx = e.clientX; dy = e.clientY;
      dot.style.transform = `translate(${dx}px,${dy}px) translate(-50%,-50%)`;
    });
    const loop = () => {
      rx += (dx - rx) * 0.18; ry += (dy - ry) * 0.18;
      ring.style.transform = `translate(${rx}px,${ry}px) translate(-50%,-50%)`;
      requestAnimationFrame(loop);
    };
    loop();
    document.addEventListener("mouseover", e => {
      if (e.target.closest("[data-cursor='hover'],a,button,input,textarea,label"))
        ring.classList.add("is-hover");
    });
    document.addEventListener("mouseout", e => {
      if (e.target.closest("[data-cursor='hover'],a,button,input,textarea,label"))
        ring.classList.remove("is-hover");
    });
  }

  /* ================================================================
     SCROLL REVEAL
     ================================================================ */
  const io = new IntersectionObserver((entries) => {
    entries.forEach(en => {
      if (en.isIntersecting) { en.target.classList.add("is-in"); io.unobserve(en.target); }
    });
  }, { threshold: 0.12, rootMargin: "0px 0px -8% 0px" });
  $$(".reveal").forEach(el => io.observe(el));

  /* word-by-word manifesto */
  const wio = new IntersectionObserver((entries) => {
    entries.forEach(en => {
      if (en.isIntersecting) {
        $$(".reveal-word", en.target).forEach((w, i) => {
          setTimeout(() => w.classList.add("is-in"), i * 70);
        });
        wio.unobserve(en.target);
      }
    });
  }, { threshold: 0.4 });
  $$(".manifesto__text").forEach(el => wio.observe(el));

  /* ================================================================
     PARALLAX
     ================================================================ */
  const parallaxEls = $$("[data-parallax] img, [data-parallax]");
  let ticking = false;
  const parallax = () => {
    $$("[data-parallax]").forEach(box => {
      const r = box.getBoundingClientRect();
      if (r.bottom < 0 || r.top > innerHeight) return;
      const img = box.querySelector("img") || box;
      const shift = (r.top - innerHeight / 2) * -0.06;
      img.style.transform = `translateY(${shift}px) scale(1.12)`;
    });
    ticking = false;
  };
  window.addEventListener("scroll", () => {
    if (!ticking) { requestAnimationFrame(parallax); ticking = true; }
  }, { passive: true });
  parallax();

  /* ================================================================
     DISCOVER TABS
     ================================================================ */
  $$(".discover__tab").forEach(tab => {
    tab.addEventListener("click", () => {
      const t = tab.dataset.tab;
      $$(".discover__tab").forEach(x => x.classList.toggle("is-active", x === tab));
      $$(".discover__panel").forEach(p =>
        p.classList.toggle("is-active", p.dataset.panel === t));
    });
  });


  /* ================================================================
     EVENTS — auto upcoming / recent by date + registration
     ----------------------------------------------------------------
     Add events to COSTE_EVENTS below. Each one shows under "Upcoming"
     with a registration button until its date passes — then it moves
     itself to "Recent events" automatically.
     ================================================================ */
  const COSTE_EVENTS = [
    {
      date: "2026-06-06",                       // YYYY-MM-DD
      tag: "Atelier Créatif",
      title: "Palette de peinture<br/>en laine feutrée",
      desc: "Une expérience créative immersive par Lainess Design. Brunch inclus, matériel fourni.",
      img: "img/events/112.jpg",
      price: "55 DT",
      details: ["🕐 11:00 – 13:30", "👥 Places limitées", "🍽️ Brunch inclus"]
    }
    // ↑ duplicate this block to add a new event — order doesn't matter.
  ];

  const upcomingGrid = $("#upcomingGrid");
  if (upcomingGrid) {
    const MONTHS_FR = ["Jan","Fév","Mars","Avr","Mai","Juin","Juil","Août","Sept","Oct","Nov","Déc"];
    const recentGrid   = $("#recentGrid");
    const recentWrap   = $("#recentWrap");
    const upcomingEmpty = $("#upcomingEmpty");

    const today = new Date(); today.setHours(0, 0, 0, 0);
    const parseDate = (s) => { const [y, m, d] = s.split("-").map(Number); return new Date(y, m - 1, d); };

    const upcoming = [], past = [];
    COSTE_EVENTS.forEach(ev => {
      const d = parseDate(ev.date);
      (d < today ? past : upcoming).push(Object.assign({ _d: d }, ev));
    });
    upcoming.sort((a, b) => a._d - b._d);   // soonest first
    past.sort((a, b) => b._d - a._d);       // most recent first

    const dateBlock = (d) =>
      `<div class="upcoming-event__date"><span class="ue-day">${String(d.getDate()).padStart(2, "0")}</span><span class="ue-month">${MONTHS_FR[d.getMonth()]}</span></div>`;

    const registerLink = (ev) =>
      `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
        `Bonjour COSTE 🌅 Je souhaite m'inscrire à l'événement « ${ev.tag} » du ${String(ev._d.getDate()).padStart(2, "0")} ${MONTHS_FR[ev._d.getMonth()]} ${ev._d.getFullYear()}.`
      )}`;

    const detailsHtml = (ev) =>
      (ev.details && ev.details.length)
        ? `<div class="upcoming-event__details">${ev.details.map(x => `<span>${x}</span>`).join("")}</div>`
        : "";

    const upcomingCard = (ev) =>
`<article class="upcoming-event" data-cursor="hover">
  <div class="upcoming-event__poster">
    <img src="${ev.img}" alt="${ev.tag} — COSTE" loading="lazy" decoding="async" />
    ${ev.price ? `<div class="upcoming-event__badge">${ev.price}</div>` : ""}
  </div>
  <div class="upcoming-event__body">
    ${dateBlock(ev._d)}
    <div class="upcoming-event__info">
      <span class="upcoming-event__tag">${ev.tag}</span>
      <h3>${ev.title}</h3>
      <p>${ev.desc}</p>
      ${detailsHtml(ev)}
      <a class="btn btn--solid btn--sm upcoming-event__register" href="${registerLink(ev)}" target="_blank" rel="noopener" data-cursor="hover">S'inscrire ↗</a>
    </div>
  </div>
</article>`;

    const pastCard = (ev) =>
`<article class="upcoming-event upcoming-event--past" data-cursor="hover">
  <div class="upcoming-event__poster">
    <img src="${ev.img}" alt="${ev.tag} — COSTE" loading="lazy" decoding="async" />
    <div class="upcoming-event__badge upcoming-event__badge--done">Terminé</div>
  </div>
  <div class="upcoming-event__body">
    ${dateBlock(ev._d)}
    <div class="upcoming-event__info">
      <span class="upcoming-event__tag">${ev.tag}</span>
      <h3>${ev.title}</h3>
      <p>${ev.desc}</p>
    </div>
  </div>
</article>`;

    if (upcoming.length) {
      upcomingGrid.innerHTML = upcoming.map(upcomingCard).join("");
      if (upcomingEmpty) upcomingEmpty.hidden = true;
    } else if (upcomingEmpty) {
      upcomingEmpty.hidden = false;
    }

    if (past.length && recentGrid && recentWrap) {
      recentGrid.innerHTML = past.map(pastCard).join("");
      recentWrap.hidden = false;
    }

    // reveal the freshly injected cards via the existing observer
    $$(".upcoming-event").forEach(el => { el.classList.add("reveal"); io.observe(el); });
  }

  /* ================================================================
     WHATSAPP INLINE FORMS
     ================================================================ */
  const waForm = (form, buildMsg) => {
    if (!form) return;
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      const f = new FormData(form);
      const status = form.querySelector(".leadform__status");
      window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(buildMsg(f))}`, "_blank");
      status.textContent = "Sent! Our team will get back to you shortly ✨";
      form.reset();
    });
  };

  waForm($("#eventProposeForm"), (f) =>
`New event proposal — COSTE 🎉

Name: ${f.get("name")}
Phone: ${f.get("phone")}
Event type: ${f.get("type")}
Details: ${f.get("details") || "—"}`);

  waForm($("#creatorForm"), (f) =>
`Creator application — COSTE ✨

Name: ${f.get("name")}
Phone: ${f.get("phone")}
Handle: ${f.get("handle")}
About: ${f.get("details") || "—"}`);

  waForm($("#cateringForm"), (f) =>
`Corporate / Catering enquiry — COSTE 🍽️

Company: ${f.get("company")}
Contact: ${f.get("name")}
Phone: ${f.get("phone")}${f.get("guests") ? "\nGuests: " + f.get("guests") : ""}
Details: ${f.get("details") || "—"}`);

  /* ================================================================
     AI WHATSAPP CONCIERGE
     ================================================================ */
  const fab        = $("#conciergeFab");
  const concierge  = $("#concierge");
  const body       = $("#conciergeBody");
  const cForm      = $("#conciergeForm");
  const cText      = $("#conciergeText");
  const handoff    = $("#conciergeHandoff");

  const baseWa = (text) =>
    `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text || "Hello COSTE 🌅")}`;
  handoff.href = baseWa();

  const toggleConcierge = (open) => {
    concierge.classList.toggle("is-open", open);
    fab.classList.toggle("is-hidden", open);
    if (open) setTimeout(() => cText.focus(), 300);
  };
  fab.addEventListener("click", () => toggleConcierge(true));
  $("#conciergeClose").addEventListener("click", () => toggleConcierge(false));
  $$("[data-open-concierge]").forEach(b =>
    b.addEventListener("click", e => { e.preventDefault(); toggleConcierge(true); }));

  const addBubble = (text, who = "bot") => {
    const b = document.createElement("div");
    b.className = `bubble bubble--${who}`;
    b.innerHTML = text;
    body.appendChild(b);
    body.scrollTop = body.scrollHeight;
    return b;
  };
  const typing = () => {
    const t = document.createElement("div");
    t.className = "concierge__typing";
    t.innerHTML = "<span></span><span></span><span></span>";
    body.appendChild(t);
    body.scrollTop = body.scrollHeight;
    return t;
  };

  // Lightweight intent engine (front-end demo of the AI concierge).
  const KB = [
    { k: ["hello","hi","hey","salut","bonjour","ahla","marhba"],
      a: "Welcome to COSTE 🌅 I can help you with opening hours, upcoming events, the menu, getting here, or anything else — just ask!" },

    { k: ["hour","open","close","ouvert","horaire","quand","when","schedule"],
      a: "We're open <b>every day from 08:00 until late</b> ☀️ Morning café, brunch, lunch, dinner and sunset sessions — all in one place." },

    { k: ["event","upcoming","agenda","programme","atelier","workshop","session","music","live","concert","whats on","what's on","soirée"],
      a: "🎉 <b>Coming up at COSTE:</b><br/>• <b>6 June</b> — Atelier Créatif: Peinture en laine feutrée (55 DT, brunch inclus, 11h–13h30)<br/>• <b>Every Friday</b> — Sunset Sessions from 18:00<br/>• <b>Weekends</b> — The Grand Brunch from 11:00<br/>• <b>Monthly</b> — Live Under the Stars at 21:00<br/><br/>Message us on WhatsApp for details!",
      cta: { label: "WhatsApp for events", act: () => window.open(baseWa("Hello COSTE, I'd like info about upcoming events 🎉"), "_blank") } },

    { k: ["sunset","golden","coucher"],
      a: "Golden hour is the soul of COSTE 🌇 In summer the sun sets around <b>19:30–20:00</b>. Arrive ~45 min before to get the best terrace spot." },

    { k: ["coffee","cafe","café","breakfast","morning","petit-déj","pastry"],
      a: "Our morning café opens at <b>08:00</b> — single-origin coffee, fresh pastries and the first light over the bay ☕ The perfect start to a day in Sidi Bou Said." },

    { k: ["brunch","lunch","déjeuner","weekend"],
      a: "The Grand Brunch runs <b>every weekend from 11:00</b> — a generous Mediterranean spread of croissants, crepes, charcuterie and live acoustic sound 🥐" },

    { k: ["dinner","dîner","soir","evening","night","nuit"],
      a: "Dinner service starts in the evening — seasonal coastal menu, candlelight, and signature cocktails. We're open until late every night 🕯️" },

    { k: ["private","wedding","birthday","celebration","party"],
      a: "We host private celebrations and full venue buyouts 🎊 Weddings, birthdays, launches — the whole house, the whole terrace, the whole sunset. Reach us on WhatsApp to plan your evening.",
      cta: { label: "Plan a private event", act: () => window.open(baseWa("Hello COSTE, I'd like to enquire about a private event 🎊"), "_blank") } },

    { k: ["cater","corporate","company","office","traiteur"],
      a: "Yes — corporate dinners, launches and off-site catering across greater Tunis. Drop us a message with your date and headcount and we'll put together a proposal.",
      cta: { label: "Enquire catering", act: () => window.open(baseWa("Hello COSTE, I'm interested in corporate catering 🍽️"), "_blank") } },

    { k: ["menu","food","eat","dish","vegan","vegetarian","manger","carte"],
      a: "Our kitchen is Mediterranean with a Tunisian soul 🍽️ Burrata, fresh catch from the bay, saffron risotto, signature cocktails, and vegetarian options throughout. The Chef's Table is a 7-course journey for 8 guests nightly." },

    { k: ["where","location","address","get there","direction","find","adresse","comment"],
      a: "We're in the heart of <b>Sidi Bou Said</b>, above the bay — about 20 min from central Tunis by TGM train 📍",
      cta: { label: "Open in Maps", act: () => window.open("https://maps.google.com/?q=Sidi+Bou+Said+Tunisia","_blank") } },

    { k: ["parking","car","voiture"],
      a: "Parking is available in the village — main lot is a 3-minute walk from COSTE. We recommend the TGM train for the most scenic approach 🚃" },

    { k: ["wifi","password","internet"],
      a: "Yes, we have WiFi 📶 Just ask any member of our team for the password when you arrive." },

    { k: ["club","member","membership","loyalty","vip"],
      a: "The Coste Club is our members' circle — priority terraces, VIP access to every event, rewards and a birthday ritual. Complimentary by invitation each season 🌟" },

    { k: ["creator","influencer","collab","press","content","photo"],
      a: "We host a curated circle of photographers and creators ✨ Tell us about your work and our team reviews collaborations each season." },

    { k: ["price","cost","how much","expensive","combien","tarif"],
      a: "Starters from ~28 DT, mains 46–62 DT, signature cocktails ~22 DT. The Chef's Table is a full tasting experience — message us for details 🍷" }
  ];

  const respond = (text) => {
    const q = text.toLowerCase();
    const hit = KB.find(item => item.k.some(k => q.includes(k)));
    const t = typing();
    setTimeout(() => {
      t.remove();
      if (hit) {
        addBubble(hit.a);
        if (hit.cta) {
          const wrap = document.createElement("div");
          wrap.className = "concierge__quick";
          const btn = document.createElement("button");
          btn.textContent = hit.cta.label;
          btn.addEventListener("click", hit.cta.act);
          wrap.appendChild(btn);
          body.appendChild(wrap);
        }
      } else {
        addBubble("Great question — let me connect you to our team on WhatsApp so we can help you properly. 💬");
        const wrap = document.createElement("div");
        wrap.className = "concierge__quick";
        const btn = document.createElement("button");
        btn.textContent = "Chat on WhatsApp";
        btn.addEventListener("click", () => window.open(baseWa("Hello COSTE, I have a question: " + text), "_blank"));
        wrap.appendChild(btn);
        body.appendChild(wrap);
      }
      // keep the handoff link contextual
      handoff.href = baseWa("Hello COSTE 🌅 " + text);
      body.scrollTop = body.scrollHeight;
    }, 700 + Math.random() * 500);
  };

  cForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const v = cText.value.trim();
    if (!v) return;
    addBubble(v, "user");
    cText.value = "";
    respond(v);
  });

  // quick-reply chips
  const quickMap = {
    hours: "What are your opening hours?",
    sunset: "What's the best sunset time?",
    event: "I want to plan a private event",
    catering: "I need corporate catering",
    getthere: "How do I get there?"
  };
  $("#conciergeQuick").addEventListener("click", (e) => {
    const b = e.target.closest("button[data-q]");
    if (!b) return;
    const text = quickMap[b.dataset.q];
    addBubble(text, "user");
    respond(text);
  });

  /* gentle auto-invite after 12s (once per session) */
  if (!sessionStorage.getItem("coste_greeted")) {
    setTimeout(() => {
      if (!concierge.classList.contains("is-open")) {
        fab.style.animation = "pulse 1s 3";
      }
      sessionStorage.setItem("coste_greeted", "1");
    }, 12000);
  }

})();
