/* ===================================================================
   COSTE — interactions
   =================================================================== */
(function () {
  "use strict";

  /* ---- CONFIG ---------------------------------------------------- */
  // Replace with the venue's real WhatsApp number (international, digits only)
  const WHATSAPP_NUMBER = "21621355111";

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
      "menu-kicker":"The Kitchen","menu-title":"The Coste<br/>menu",
      "menu-badge":"Coming soon","menu-soon-title":"Something delicious<br/>is on its way.",
      "menu-soon-lede":"Our chefs are reimagining the COSTE table — from the first leaf to the last spoon. A brand-new seasonal menu, born of the Mediterranean and the Tunisian coast, is almost ready to be served.",
      "menu-soon-stay":"Stay tuned — the reveal is closer than you think.",
      "menu-soon-btn":"Be first to taste it ↗",
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
      "menu-kicker":"La Cuisine","menu-title":"La carte<br/>Coste",
      "menu-badge":"Bientôt disponible","menu-soon-title":"Quelque chose de délicieux<br/>arrive.",
      "menu-soon-lede":"Nos chefs réinventent la table COSTE — de la première feuille à la dernière cuillère. Une toute nouvelle carte de saison, née de la Méditerranée et de la côte tunisienne, est presque prête à être servie.",
      "menu-soon-stay":"Restez à l'écoute — la révélation est plus proche que vous ne le pensez.",
      "menu-soon-btn":"Soyez les premiers à la goûter ↗",
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
      "menu-kicker":"المطبخ","menu-title":"قائمة<br/>كوست",
      "menu-badge":"قريباً","menu-soon-title":"شيء لذيذ<br/>في الطريق.",
      "menu-soon-lede":"يعيد طهاتنا ابتكار مائدة كوست — من أول ورقة إلى آخر ملعقة. قائمة موسمية جديدة كلياً، وُلدت من البحر المتوسط والساحل التونسي، شارفت على أن تُقدَّم.",
      "menu-soon-stay":"ترقّبوا — الكشف أقرب مما تتصوّرون.",
      "menu-soon-btn":"كونوا أول من يتذوقها ↗",
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
     GUEST VOICES — seamless moving marquee
     ----------------------------------------------------------------
     Duplicate the cards once so the -50% scroll loops without a seam.
     ================================================================ */
  const reviewsTrack = $("#reviewsTrack");
  if (reviewsTrack && !matchMedia("(prefers-reduced-motion: reduce)").matches) {
    $$(".review-card", reviewsTrack).forEach(card => {
      const clone = card.cloneNode(true);
      clone.setAttribute("aria-hidden", "true");
      reviewsTrack.appendChild(clone);
    });
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
     MENU — data-driven, category tabs
     ----------------------------------------------------------------
     Names + prices mirror the official menu (menucoste.netlify.app).
     To edit: change a price or add an item in COSTE_MENU below — the
     page re-renders from this single source of truth. Prices are in
     Tunisian Dinar (the " DT" suffix is added in CSS).
     ================================================================ */
  const COSTE_MENU = [
    { id:"petit-dej", label:"Petit Déjeuner", kicker:"Le Matin", img:"img/menu/petit-dejeuner.jpg",
      tagline:"Slow mornings above the bay — formules, brunch and the first light.",
      groups:[
        { title:"Formules", items:[["L'artiste","9.300"],["L'architecte","11.800"],["L'amoureux","12.800"],["Le financier","11.800"],["Le manager","17.300"],["Coste","19.300"],["L'expert","21.200"]] },
        { title:"Brunch", items:[["Pour deux personnes","46.000"]] },
        { title:"À la carte", items:[["Healthy","23.900"],["Tunisien","23.000"],["Continental","25.900"],["L'Américain","23.900"]] }
      ]
    },
    { id:"chaud", label:"Boissons Chaudes", kicker:"Chaud", img:"img/menu/boissons-chaudes.jpg",
      tagline:"Single-origin coffee, signature lattes, teas and hot chocolate.",
      groups:[
        { title:"Classique", items:[["Express","6.500"],["Cappucin","6.800"],["Café crème","7.200"],["Americain","6.900"],["Café turc","8.800"],["Nescafé au lait","7.200"]] },
        { title:"Café Signature", items:[["Expresso","8.500"],["Macchiato","8.800"],["Cappuccino","9.200"],["Cappuccino chantilly","10.200"],["Café liégeois","10.300"],["Café aromatisé","10.500"],["Maroccino","9.900"],["Tiramisu","9.900"],["Viennese","9.900"],["Montebianco","9.900"],["Amabile","9.900"]] },
        { title:"Hot Chocolate", items:[["Nutella Chaud","14.000"],["Chocolat au lait","8.800"],["Chocolat chaud nature","10.900"],["Chocolat chaud aromatisé","13.500"],["Chocolat chaud chantilly","13.500"],["Chocolat chaud amandes","13.500"]] },
        { title:"Thés & Chicha", items:[["Thé marocain","6.500"],["Supplément amandes","5.800"],["Thé aux pignons","14.900"],["Thé infusion","8.500"],["Thé infusion Lipton","9.800"],["Chicha","20.000"],["Chicha Glacon","24.500"],["Supplément jabbed","2.500"]] }
      ]
    },
    { id:"froid", label:"Boissons Froides", kicker:"Glacé", img:"img/menu/boissons-froides.jpg",
      tagline:"Iced coffees, frappés, fresh juices, milkshakes and alcohol-free cocktails.",
      groups:[
        { title:"Ice Americano", items:[["ICE Americano","7.500"],["ICE Latte","8.200"],["ICE Macchiatto Moka","9.900"],["ICE Macchiatto Chocolate","9.900"],["ICE Macchiatto Caramel","9.900"],["ICE Macchiatto Toffee","9.900"]] },
        { title:"Frappuccino", items:[["Tiramisu","11.700"],["Brownies","11.700"],["Cookies","11.700"],["Pop Corn","11.700"],["Noisettes grillées","11.700"],["Caramel salé","11.700"],["Speculoos","11.700"],["Chocolat Blanc","11.700"]] },
        { title:"Cold Chocolate", items:[["Chocolat glacé","11.500"],["Chocolat liégeois","12.000"],["Chocolat glacé Coste","13.500"]] },
        { title:"Limonades & Jus Frais", items:[["Citronnade à la menthe","9.300"],["Citronnade fraiche","8.900"],["Citronnade aux amandes","12.900"],["Boisson Gazeuse","7.600"],["BOGA (Menthe / Grenadine)","7.900"],["Fraise","9.900"],["Banane","12.500"],["Pêche","9.900"],["Orange","9.900"],["Ananas","9.900"]] },
        { title:"Smoothie", items:[["Th Sun, Pina Colada, Choco-Ban","11.000"],["Mojito","12.900"]] },
        { title:"Milkshakes", items:[["Fraise","12.900"],["Banane","12.900"],["Chocolat","12.900"],["Noisette","12.900"],["Vanille","12.900"],["2 parfums","14.400"],["Nutella","15.000"],["Nutella banane","16.000"],["Oreo","15.000"]] },
        { title:"Cocktails Sans Alcool", items:[["Tropical Punch","14.000"],["Island Breeze","14.000"],["Sunset Bliss","14.000"],["Minty Mind","15.500"],["Sunny Berry","14.000"],["Cristal","13.500"],["Vamos","13.800"],["Iceberg","13.800"],["Space Toons","13.500"],["Bikini","13.500"],["Glory","13.500"],["Coste","14.500"],["Dreamer","13.500"]] },
        { title:"Eaux & Glaces", items:[["Eau minérale 1L","5.900"],["Eau minérale 1/2 L","3.900"],["Eau gazéifiée","6.800"],["Sorbet citron / orange","10.900"],["Banana split","14.200"],["Chou chou","12.900"],["Coste","13.600"]] }
      ]
    },
    { id:"gaufres", label:"Gaufres & Crêpes", kicker:"Sucré", img:"img/menu/gaufres-crepes.jpg",
      tagline:"Waffles, crêpes and sweet treats, made to order.",
      groups:[
        { title:"Gaufres Sucrées", items:[["Gaufre au sucre","12.500"],["Gaufre chocolat","14.500"],["Gaufre chocolat banane","15.900"],["Gaufre chocolat amandes","15.900"],["Gaufre nutella","18.900"],["Gaufre Pistache Nutella","21.900"],["Gaufre nutella banane","19.900"],["Gaufre nutella amandes","19.900"],["Gaufre chocolat noisettes","15.900"],["Gaufre chocolat banane noisettes","17.900"],["Gaufre chocolat amandes noisettes","18.900"],["Gaufre nutella noisettes","19.900"],["Gaufre nutella banane noisettes","19.900"],["Gaufre Pistache","18.900"],["Gaufre glacé","13.900"]] },
        { title:"Gaufres Salées", items:[["Gaufre fromage","11.900"],["Gaufre jambon fromage","14.500"],["Gaufre thon fromage","15.000"],["Gaufre bacon fromage","15.500"],["Gaufre Poulet pané","16.800"]] },
        { title:"Nut Crêpes", items:[["Crêpe Kinder","15.400"],["Crêpe Amandino","16.400"],["Crêpe Speculoos","15.400"],["Crêpe Coste","16.900"],["Crêpe Oreo","15.400"],["Crêpe M&M's","15.400"],["Crêpe Rafaello","15.400"],["Crêpe Snickers","15.400"],["Crêpe Pistache","16.400"],["Crêpe Chocolat Dubai","16.400"]] },
        { title:"Crêpes Sucrées", items:[["Crêpe au sucre","10.500"],["Crêpe au miel","10.900"],["Crêpe au chocolat","13.900"],["Crêpe chocolat banane","14.600"],["Crêpe chocolat amandes","14.600"],["Crêpe chocolat noisettes","14.600"],["Crêpe chocolat amande noisettes","16.600"],["Crêpe chocolat banane noisettes","16.600"],["Crêpe nutella","14.900"],["Crêpe nutella banane","16.900"],["Crêpe nutella amande","16.900"],["Crêpe nutella noisettes","16.900"],["Crêpe nutella banane noisettes","18.900"],["Crêpe nutella amande noisettes","18.900"],["Pancake Coste","16.400"]] },
        { title:"Sweet Treats", items:[["Viennoiserie chaude","3.900"],["Tiramisu","13.900"],["Fondant au chocolat","12.900"],["Fondant chocolat noisettes","13.900"],["Cheese cake","14.900"]] }
      ]
    },
    { id:"sale", label:"Salé", kicker:"Savoureux", img:"img/menu/sale.jpg",
      tagline:"Crêpes, paninis, burgers, tacos and garden salads.",
      groups:[
        { title:"Crêpes Salées", items:[["Crêpe fromage","11.900"],["Crêpe thon","15.000"],["Crêpe jambon","15.000"],["Crêpe poulet champignon","15.900"],["Crêpe Coste","17.200"],["Crêpe pizza","15.600"],["Crêpe américaine","16.900"],["Crêpe Chorizo","15.000"],["Crêpe Océan","22.000"]] },
        { title:"Omelettes", items:[["Omelette nature","8.900"],["Omelette fromage","9.900"],["Omelette thon fromage","11.500"],["Omelette jambon fromage","11.500"],["Omelette bacon","11.700"],["Omelette poulet champignons","11.900"],["Omelette végétarienne","11.700"]] },
        { title:"Toasts", items:[["Norvégien","14.900"],["Italien","15.500"],["Tounsi","15.900"]] },
        { title:"Panini", items:[["Panini fromage","12.100"],["Panini thon fromage","13.700"],["Panini jambon fromage","13.100"],["Panini poulet fromage","14.100"],["Panini tunisien","14.600"]] },
        { title:"Sandwichs", items:[["Polo","14.900"],["Poulet panné","15.500"],["Américano","15.900"]] },
        { title:"Burgers", items:[["La classique","15.500"],["Burger'in","16.700"],["Fils de Coste","18.600"],["Chiken burger","13.900"]] },
        { title:"Tacos", items:[["Tacos Crispy","14.800"],["Tacos Poulet Grillé","14.300"],["Tacos Shawarma","14.300"],["Tacos viande hachée & bacon","15.800"]] },
        { title:"Makloub", items:[["Al tonno","14.900"],["Tipico","14.900"],["Catalano","15.900"],["Escalope pannée","16.400"]] },
        { title:"Baguette Farcie", items:[["Chicken'in","16.900"],["Chicken'in panné","17.700"],["L'américaine","18.600"]] },
        { title:"Salades", items:[["Salade césar","19.000"],["Salade reine","19.700"],["Salade tonato","19.500"],["Salade niçoise","19.500"],["Salade tomate mozzarella","19.500"],["Salade mexicaine","23.000"],["Salade burrata bresaola","25.000"],["Salade norvégienne","26.000"],["Salade Coste","24.000"],["Salade de fruits","12.900"]] },
        { title:"Menu Enfant", items:[["Nuggets, Pâtes, Frites, Jus","15.900"]] }
      ]
    },
    { id:"plats", label:"Plats & Pizza", kicker:"La Table", img:"img/menu/plats-pizza.jpg",
      tagline:"Escalopes, fresh pasta and wood-fire pizza.",
      groups:[
        { title:"Plats", items:[["Escalope grillée","24.500"],["Escalope panée","25.500"],["Escalope cordon bleu","26.500"],["Escalope à la crème","26.500"],["Escalope panée à la crème","27.000"],["Fajitas au poulet mexicain","26.000"],["Plat émincé de bœuf","32.000"],["Plat de Poisson","26.000"],["Escalope de poulet sauce fromage au four","25.000"],["Escalope farcie","26.000"]] },
        { title:"Pasta", items:[["Tagliatelli poulet champignon","23.000"],["Tagliatelli saumon","26.000"],["Penne thon et olive","22.000"],["Lasagnes","19.900"],["Chicken pesto","22.300"],["Carbonara","21.500"],["Bolognaise","22.400"],["Penne aux boulettes","24.000"],["Gratin de pâtes à la viande émincée","27.000"],["Spaghetti gratinés au poulet pané","26.000"],["Penne 4 fromages","24.500"],["Penne aux poulet pané","25.000"]] },
        { title:"Pizza", items:[["Marguerita","18.000"],["Tonato","22.000"],["Regina","21.000"],["Quatre fromages","25.500"],["Libanaise","25.500"],["Végétarienne","21.000"],["Tunisienne","22.000"],["Pepperoni","23.000"],["Norvégienne","27.000"],["4 saisons","24.000"],["Ricotta épinard","25.500"],["Anchois","22.500"],["Burrata","27.000"],["Mexicaine","26.000"],["Chicken BBQ","24.900"]] }
      ]
    }
  ];

  const menuTabs = $("#menuTabs"), menuPanels = $("#menuPanels");
  if (menuTabs && menuPanels) {
    const esc = (s) => String(s).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;");
    const rowHtml = (it) =>
      `<li class="menu2__row"><span class="menu2__name">${esc(it[0])}</span><span class="menu2__lead" aria-hidden="true"></span><span class="menu2__price">${esc(it[1])}</span></li>`;
    const groupHtml = (g) =>
      `<section class="menu2__group"><h4 class="menu2__group-title">${esc(g.title)}</h4><ul class="menu2__list">${g.items.map(rowHtml).join("")}</ul></section>`;

    COSTE_MENU.forEach((cat, i) => {
      const tab = document.createElement("button");
      tab.className = "menu2__tab" + (i === 0 ? " is-active" : "");
      tab.dataset.cat = cat.id;
      tab.setAttribute("role", "tab");
      tab.setAttribute("data-cursor", "hover");
      tab.textContent = cat.label;
      menuTabs.appendChild(tab);

      const panel = document.createElement("div");
      panel.className = "menu2__panel" + (i === 0 ? " is-active" : "");
      panel.dataset.cat = cat.id;
      panel.setAttribute("role", "tabpanel");
      const blocks = cat.groups.map(groupHtml);
      if (cat.img) {
        const photo = `<figure class="menu2__photo"><img src="${cat.img}" alt="${esc(cat.label)} — COSTE" loading="lazy" decoding="async" /></figure>`;
        blocks.splice(Math.ceil(blocks.length / 2), 0, photo);   // nestle it mid-column
      }
      panel.innerHTML =
        `<div class="menu2__panel-head">
           <span class="menu2__panel-kicker">${esc(cat.kicker)}</span>
           <h3>${esc(cat.label)}</h3>
           ${cat.tagline ? `<p>${esc(cat.tagline)}</p>` : ""}
         </div>
         <div class="menu2__groups">${blocks.join("")}</div>`;
      menuPanels.appendChild(panel);
    });

    menuTabs.addEventListener("click", (e) => {
      const tab = e.target.closest(".menu2__tab");
      if (!tab) return;
      const cat = tab.dataset.cat;
      $$(".menu2__tab", menuTabs).forEach(t => t.classList.toggle("is-active", t === tab));
      $$(".menu2__panel", menuPanels).forEach(p => p.classList.toggle("is-active", p.dataset.cat === cat));
      tab.scrollIntoView({ inline: "center", block: "nearest", behavior: "smooth" });
    });
  }

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
