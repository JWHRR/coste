/* ===================================================================
   WHITE — Coffee House & Restaurant · interactions
   =================================================================== */
(function () {
  "use strict";

  /* ---- CONFIG ---------------------------------------------------- */
  // ⚠️ Replace with WHITE's real WhatsApp number (international, digits only)
  const WHATSAPP_NUMBER = "21600000000";

  const $  = (s, c = document) => c.querySelector(s);
  const $$ = (s, c = document) => Array.from(c.querySelectorAll(s));

  /* ================================================================
     LANGUAGE SWITCHER  (EN / FR / AR)
     ================================================================ */
  const LANGS = {
    en: {
      "nav-experience":"Experience","nav-menu":"Menu","nav-reviews":"Guest Voices",
      "nav-events":"Events","nav-discover":"Discover","nav-host":"Host an Event",
      "hero-eyebrow":"La Marsa · Tunis, Tunisia",
      "hero-t1":"Coffee, brunch &","hero-em":"blue","hero-t2":" Mediterranean days.",
      "hero-lede":"Sunlit mornings, all-day brunch and a blue-and-white terrace by the sea — where good coffee meets a generous Mediterranean table. This is WHITE.",
      "btn-menu-hero":"See the Menu","btn-discover-hero":"Discover the House",
      "hero-scroll":"Scroll",
      "manifesto-kicker":"The House",
      "manifesto-title":`<span class="reveal-word">A</span> <span class="reveal-word">coffee.</span> <span class="reveal-word">A</span> <span class="reveal-word">table.</span> <span class="reveal-word manifesto__accent">A</span> <span class="reveal-word manifesto__accent">bright</span> <span class="reveal-word manifesto__accent">blue</span> <span class="reveal-word manifesto__accent">day.</span>`,
      "manifesto-body":"WHITE is a bright Mediterranean coffee house and restaurant — a place for slow mornings, long brunches and unhurried evenings. Clean blue-and-white rooms, generous plates, and the sea air of La Marsa in every corner.",
      "map-title":"Find us by the sea","map-sub":"WHITE · La Marsa, Tunis Governorate, Tunisia","map-btn":"Open in Maps",
      "exp-kicker":"The Experience","exp-title":"Four ways to live<br/>a day at WHITE",
      "exp1-t":"The Morning Café","exp1-p":"Freshly pulled coffee, warm bread and a sunlit start to the day.",
      "exp2-t":"All-Day Brunch","exp2-p":"Eggs benedict, waffles, bowls and fresh juices — served all day long.",
      "exp3-t":"The Table","exp3-p":"Burgers, fresh pasta, salads and grilled plates from a Mediterranean kitchen.",
      "exp4-t":"Sunset Sessions","exp4-p":"Fresh mojitos, signature coolers and the terrace at golden hour.",
      "menu-kicker":"The Kitchen","menu-title":"The WHITE<br/>menu",
      "menu-intro":"Bowls, salads, fresh pasta and Mediterranean plates — made fresh, served generously. Prices in Tunisian Dinar.",
      "menu-feature-t":"Fresh every day",
      "menu-feature-p":"A Mediterranean kitchen with a Tunisian heart — bowls, salads, pasta and grills, plus all-day brunch and homemade desserts.",
      "menu-feature-btn":"Book a table",
      "menu-note":"Menu & prices may vary seasonally · Ask our team about daily specials.",
      "reviews-title":"What our guests<br/>are saying",
      "feed-kicker":"The Feed","feed-follow":"Follow @white.tn",
      "events-kicker":"Events at WHITE","events-title":"Pick your<br/>experience",
      "events-intro":"From weekend brunches to golden-hour sessions — every gathering at WHITE is a table worth booking.",
      "events-upcoming":"Upcoming","events-recent":"Recent events","events-regular":"Every week at WHITE",
      "events-empty":"No upcoming events right now — new dates are being planned. Stay tuned ☀️",
      "ev1-when":"Every Friday","ev1-t":"Sunset Sessions","ev1-p":"Fresh coolers, a resident selector and the terrace at golden hour.",
      "ev2-when":"Weekends","ev2-t":"The Grand Brunch","ev2-p":"A generous Mediterranean spread — eggs, waffles, bowls, pastries and fresh juice.",
      "ev3-when":"Thursdays","ev3-t":"Pasta & Wine Night","ev3-p":"Fresh pasta, a glass of something nice, and easy evening sound.",
      "host-kicker":"Host an Event at WHITE","host-title":"Book a table<br/>or your event",
      "host-p":"Birthdays, baby showers, team lunches, workshops or a private terrace evening — tell us your idea and we'll make it happen.",
      "form-name":"Your name","form-phone":"Phone / WhatsApp","form-type":"Occasion","form-details":"Tell us more","form-submit":"Send on WhatsApp ↗",
      "discover-kicker":"Around the Bay","discover-title":"Your guide to<br/>La Marsa & beyond",
      "discover-intro":"More than a table — a little map of the most beautiful corners of the Tunis coast, from the WHITE team.",
      "tab-spots":"Photo Spots","tab-gems":"Hidden Gems","tab-nearby":"Nearby",
      "atmos-kicker":"La Marsa","atmos-title":"Blue & white,<br/>sunlit rooms,<br/>sea air.",
      "atmos-body":"Everything at WHITE answers to the Mediterranean — the clean blue and white, the bright open rooms, the jasmine and salt in the evening air. A place made to slow down in, from the first coffee to the last plate.",
      "atmos-li1":"All-day brunch, served generously",
      "atmos-li2":"Mediterranean kitchen, Tunisian soul",
      "atmos-li3":"A terrace built around golden hour",
      "closing-kicker":"La Marsa · Tunis, Tunisia","closing-title":"Your table is <em>waiting</em>.",
      "footer-visit":"Visit","footer-explore":"Explore","footer-connect":"Connect"
    },
    fr: {
      "nav-experience":"Expérience","nav-menu":"Menu","nav-reviews":"Avis Clients",
      "nav-events":"Événements","nav-discover":"Découvrir","nav-host":"Réserver",
      "hero-eyebrow":"La Marsa · Tunis, Tunisie",
      "hero-t1":"Café, brunch &","hero-em":"jours","hero-t2":" bleus de Méditerranée.",
      "hero-lede":"Matins ensoleillés, brunch toute la journée et une terrasse bleu et blanc au bord de la mer — où le bon café rencontre une table méditerranéenne généreuse. Voici WHITE.",
      "btn-menu-hero":"Voir le Menu","btn-discover-hero":"Découvrir la Maison",
      "hero-scroll":"Défiler",
      "manifesto-kicker":"La Maison",
      "manifesto-title":`<span class="reveal-word">Un</span> <span class="reveal-word">café.</span> <span class="reveal-word">Une</span> <span class="reveal-word">table.</span> <span class="reveal-word manifesto__accent">Une</span> <span class="reveal-word manifesto__accent">belle</span> <span class="reveal-word manifesto__accent">journée</span> <span class="reveal-word manifesto__accent">bleue.</span>`,
      "manifesto-body":"WHITE est un café-restaurant méditerranéen lumineux — un lieu pour les matins doux, les longs brunchs et les soirées sans hâte. Des salles bleu et blanc, des assiettes généreuses, et l'air marin de La Marsa partout.",
      "map-title":"Retrouvez-nous au bord de la mer","map-sub":"WHITE · La Marsa, Gouvernorat de Tunis, Tunisie","map-btn":"Ouvrir dans Maps",
      "exp-kicker":"L'Expérience","exp-title":"Quatre façons de vivre<br/>une journée à WHITE",
      "exp1-t":"Le Café du Matin","exp1-p":"Café fraîchement préparé, pain chaud et un réveil ensoleillé.",
      "exp2-t":"Brunch Toute la Journée","exp2-p":"Œufs bénédicte, gaufres, bowls et jus frais — servis toute la journée.",
      "exp3-t":"La Table","exp3-p":"Burgers, pâtes fraîches, salades et grillades d'une cuisine méditerranéenne.",
      "exp4-t":"Sessions Coucher de Soleil","exp4-p":"Mojitos frais, coolers signature et la terrasse à l'heure dorée.",
      "menu-kicker":"La Cuisine","menu-title":"Le menu<br/>WHITE",
      "menu-intro":"Bowls, salades, pâtes fraîches et plats méditerranéens — faits maison, servis généreusement. Prix en Dinar Tunisien.",
      "menu-feature-t":"Frais chaque jour",
      "menu-feature-p":"Une cuisine méditerranéenne au cœur tunisien — bowls, salades, pâtes et grillades, plus le brunch toute la journée et des desserts maison.",
      "menu-feature-btn":"Réserver une table",
      "menu-note":"Menu & prix susceptibles de varier selon la saison · Demandez nos suggestions du jour.",
      "reviews-title":"Ce que disent<br/>nos clients",
      "feed-kicker":"Le Feed","feed-follow":"Suivre @white.tn",
      "events-kicker":"Événements à WHITE","events-title":"Choisissez votre<br/>expérience",
      "events-intro":"Des brunchs du week-end aux sessions crépusculaires — chaque rendez-vous à WHITE est une table à réserver.",
      "events-upcoming":"À venir","events-recent":"Événements récents","events-regular":"Chaque semaine à WHITE",
      "events-empty":"Aucun événement à venir pour l'instant — de nouvelles dates se préparent. Restez à l'écoute ☀️",
      "ev1-when":"Chaque vendredi","ev1-t":"Sessions Coucher de Soleil","ev1-p":"Coolers frais, un selector résident et la terrasse à l'heure dorée.",
      "ev2-when":"Week-ends","ev2-t":"Le Grand Brunch","ev2-p":"Un généreux buffet méditerranéen — œufs, gaufres, bowls, viennoiseries et jus frais.",
      "ev3-when":"Jeudis","ev3-t":"Soirée Pâtes & Vin","ev3-p":"Pâtes fraîches, un bon verre et une ambiance douce en soirée.",
      "host-kicker":"Organisez votre événement à WHITE","host-title":"Réservez une table<br/>ou votre événement",
      "host-p":"Anniversaires, baby showers, déjeuners d'équipe, ateliers ou une soirée privée en terrasse — dites-nous votre idée et on s'occupe du reste.",
      "form-name":"Votre nom","form-phone":"Téléphone / WhatsApp","form-type":"Occasion","form-details":"Dites-nous-en plus","form-submit":"Envoyer sur WhatsApp ↗",
      "discover-kicker":"Autour de la baie","discover-title":"Votre guide de<br/>La Marsa & au-delà",
      "discover-intro":"Plus qu'une table — une petite carte des plus beaux coins de la côte de Tunis, par l'équipe WHITE.",
      "tab-spots":"Spots Photo","tab-gems":"Trésors Cachés","tab-nearby":"À Proximité",
      "atmos-kicker":"La Marsa","atmos-title":"Bleu & blanc,<br/>salles lumineuses,<br/>air marin.",
      "atmos-body":"Tout à WHITE répond à la Méditerranée — le bleu et blanc épuré, les salles ouvertes et lumineuses, le jasmin et le sel dans l'air du soir. Un lieu fait pour ralentir, du premier café à la dernière assiette.",
      "atmos-li1":"Brunch toute la journée, servi généreusement",
      "atmos-li2":"Cuisine méditerranéenne, âme tunisienne",
      "atmos-li3":"Une terrasse pensée pour l'heure dorée",
      "closing-kicker":"La Marsa · Tunis, Tunisie","closing-title":"Votre table vous <em>attend</em>.",
      "footer-visit":"Visiter","footer-explore":"Explorer","footer-connect":"Contact"
    },
    ar: {
      "nav-experience":"تجربة","nav-menu":"القائمة","nav-reviews":"آراء الضيوف",
      "nav-events":"الفعاليات","nav-discover":"اكتشف","nav-host":"احجز",
      "hero-eyebrow":"المرسى · تونس",
      "hero-t1":"قهوة، برانش و","hero-em":"أيام","hero-t2":" متوسطية زرقاء.",
      "hero-lede":"صباحات مشمسة، برانش طوال اليوم وشرفة بالأزرق والأبيض على البحر — حيث تلتقي القهوة الجيدة بمائدة متوسطية كريمة. هذا هو WHITE.",
      "btn-menu-hero":"شاهد القائمة","btn-discover-hero":"اكتشف المكان",
      "hero-scroll":"انزل",
      "manifesto-kicker":"المكان",
      "manifesto-title":`<span class="reveal-word">قهوة.</span> <span class="reveal-word">مائدة.</span> <span class="reveal-word manifesto__accent">يوم</span> <span class="reveal-word manifesto__accent">أزرق</span> <span class="reveal-word manifesto__accent">مشرق.</span>`,
      "manifesto-body":"WHITE هو مقهى ومطعم متوسطي مشرق — مكان للصباحات الهادئة، البرانش الطويل والأمسيات المتأنّية. غرف بالأزرق والأبيض، أطباق كريمة، ونسيم بحر المرسى في كل ركن.",
      "map-title":"تجدوننا على البحر","map-sub":"WHITE · المرسى، ولاية تونس","map-btn":"افتح في الخرائط",
      "exp-kicker":"التجربة","exp-title":"أربع طرق لعيش<br/>يوم في WHITE",
      "exp1-t":"مقهى الصباح","exp1-p":"قهوة طازجة، خبز دافئ وبداية يوم مشمسة.",
      "exp2-t":"برانش طوال اليوم","exp2-p":"بيض بنديكت، وافل، بولات وعصائر طازجة — طوال اليوم.",
      "exp3-t":"المائدة","exp3-p":"برغر، باستا طازجة، سلطات وأطباق مشوية من مطبخ متوسطي.",
      "exp4-t":"جلسات الغروب","exp4-p":"موهيتو طازج، مشروبات مميزة والشرفة عند الغروب.",
      "menu-kicker":"المطبخ","menu-title":"قائمة<br/>WHITE",
      "menu-intro":"بولات، سلطات، باستا طازجة وأطباق متوسطية — طازجة وكريمة. الأسعار بالدينار التونسي.",
      "menu-feature-t":"طازج كل يوم",
      "menu-feature-p":"مطبخ متوسطي بقلب تونسي — بولات، سلطات، باستا ومشاوي، إضافة إلى برانش طوال اليوم وحلويات منزلية.",
      "menu-feature-btn":"احجز طاولة",
      "menu-note":"القائمة والأسعار قد تتغيّر موسمياً · اسأل فريقنا عن أطباق اليوم.",
      "reviews-title":"ماذا يقول<br/>ضيوفنا",
      "feed-kicker":"الفيد","feed-follow":"تابِع @white.tn",
      "events-kicker":"فعاليات WHITE","events-title":"اختر<br/>تجربتك",
      "events-intro":"من برانش نهاية الأسبوع إلى جلسات الغروب — كل لقاء في WHITE طاولة تستحق الحجز.",
      "events-upcoming":"قادم","events-recent":"فعاليات سابقة","events-regular":"كل أسبوع في WHITE",
      "events-empty":"لا فعاليات قادمة حالياً — تواريخ جديدة قيد التحضير. ترقّبوا ☀️",
      "ev1-when":"كل جمعة","ev1-t":"جلسات الغروب","ev1-p":"مشروبات منعشة، منسّق موسيقى مقيم والشرفة عند الغروب.",
      "ev2-when":"عطلة نهاية الأسبوع","ev2-t":"البرانش الكبير","ev2-p":"مائدة متوسطية كريمة — بيض، وافل، بولات، معجنات وعصائر طازجة.",
      "ev3-when":"الخميس","ev3-t":"ليلة الباستا والنبيذ","ev3-p":"باستا طازجة، كأس لطيف وأجواء مسائية هادئة.",
      "host-kicker":"نظّم فعاليتك في WHITE","host-title":"احجز طاولة<br/>أو فعاليتك",
      "host-p":"أعياد ميلاد، حفلات، غداء فريق العمل، ورشات أو أمسية خاصة في الشرفة — أخبرنا بفكرتك وسنحقّقها.",
      "form-name":"اسمك","form-phone":"الهاتف / واتساب","form-type":"المناسبة","form-details":"أخبرنا أكثر","form-submit":"إرسال عبر واتساب ↗",
      "discover-kicker":"حول الخليج","discover-title":"دليلك إلى<br/>المرسى وما حولها",
      "discover-intro":"أكثر من طاولة — خريطة صغيرة لأجمل زوايا ساحل تونس، من فريق WHITE.",
      "tab-spots":"أماكن التصوير","tab-gems":"كنوز خفية","tab-nearby":"قريب",
      "atmos-kicker":"المرسى","atmos-title":"أزرق وأبيض،<br/>غرف مشرقة،<br/>نسيم بحر.",
      "atmos-body":"كل شيء في WHITE يعكس المتوسط — الأزرق والأبيض النظيف، الغرف المفتوحة المضيئة، والياسمين والملح في هواء المساء. مكان صُنع للتمهّل، من أول قهوة إلى آخر طبق.",
      "atmos-li1":"برانش طوال اليوم، يُقدَّم بكرم",
      "atmos-li2":"مطبخ متوسطي بروح تونسية",
      "atmos-li3":"شرفة مصمّمة حول ساعة الغروب",
      "closing-kicker":"المرسى · تونس","closing-title":"طاولتكم <em>بانتظاركم</em>.",
      "footer-visit":"زورونا","footer-explore":"استكشف","footer-connect":"تواصل"
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
    sessionStorage.setItem("white_lang", lang);
  };

  $$(".nav__lang-btn").forEach(b => b.addEventListener("click", () => applyLang(b.dataset.lang)));
  const _savedLang = sessionStorage.getItem("white_lang");
  if (_savedLang && _savedLang !== "en") applyLang(_savedLang);

  /* ================================================================
     PRELOADER
     ================================================================ */
  window.addEventListener("load", () => {
    setTimeout(() => {
      $("#preloader").classList.add("is-done");
      document.body.classList.add("is-loaded");
    }, 1400);
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
     Add events to WHITE_EVENTS below. Each one shows under "Upcoming"
     with a registration button until its date passes — then it moves
     itself to "Recent events" automatically.
     ================================================================ */
  const WHITE_EVENTS = [
    // {
    //   date: "2026-07-12",
    //   tag: "Brunch Live",
    //   title: "Brunch &<br/>live acoustic",
    //   desc: "Le grand brunch WHITE avec musique acoustique en live sur la terrasse.",
    //   img: "img/brunch-eggs.jpg",
    //   price: "45 DT",
    //   details: ["🕐 09:00 – 13:00", "👥 Sur réservation", "🎶 Live acoustic"]
    // }
  ];

  const upcomingGrid = $("#upcomingGrid");
  if (upcomingGrid) {
    const MONTHS_FR = ["Jan","Fév","Mars","Avr","Mai","Juin","Juil","Août","Sept","Oct","Nov","Déc"];
    const recentGrid    = $("#recentGrid");
    const recentWrap    = $("#recentWrap");
    const upcomingEmpty = $("#upcomingEmpty");

    const today = new Date(); today.setHours(0, 0, 0, 0);
    const parseDate = (s) => { const [y, m, d] = s.split("-").map(Number); return new Date(y, m - 1, d); };

    const upcoming = [], past = [];
    WHITE_EVENTS.forEach(ev => {
      const d = parseDate(ev.date);
      (d < today ? past : upcoming).push(Object.assign({ _d: d }, ev));
    });
    upcoming.sort((a, b) => a._d - b._d);
    past.sort((a, b) => b._d - a._d);

    const dateBlock = (d) =>
      `<div class="upcoming-event__date"><span class="ue-day">${String(d.getDate()).padStart(2, "0")}</span><span class="ue-month">${MONTHS_FR[d.getMonth()]}</span></div>`;

    const registerLink = (ev) =>
      `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
        `Bonjour WHITE ☀️ Je souhaite m'inscrire à l'événement « ${ev.tag} » du ${String(ev._d.getDate()).padStart(2, "0")} ${MONTHS_FR[ev._d.getMonth()]} ${ev._d.getFullYear()}.`
      )}`;

    const detailsHtml = (ev) =>
      (ev.details && ev.details.length)
        ? `<div class="upcoming-event__details">${ev.details.map(x => `<span>${x}</span>`).join("")}</div>`
        : "";

    const upcomingCard = (ev) =>
`<article class="upcoming-event" data-cursor="hover">
  <div class="upcoming-event__poster">
    <img src="${ev.img}" alt="${ev.tag} — WHITE" loading="lazy" decoding="async" />
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
    <img src="${ev.img}" alt="${ev.tag} — WHITE" loading="lazy" decoding="async" />
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

    $$(".upcoming-event").forEach(el => { el.classList.add("reveal"); io.observe(el); });
  }

  /* ================================================================
     GUEST VOICES — seamless moving marquee
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
     WHATSAPP INLINE FORM
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
`Booking / event request — WHITE ☀️

Name: ${f.get("name")}
Phone: ${f.get("phone")}
Occasion: ${f.get("type")}
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
    `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text || "Hello WHITE ☀️")}`;
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
      a: "Welcome to WHITE ☀️ I can help with the menu, brunch, opening hours, booking a table, or getting here — just ask!" },

    { k: ["hour","open","close","ouvert","horaire","quand","when","schedule"],
      a: "We're open <b>every day from 08:00 until late</b> ☀️ Morning café, all-day brunch, lunch, dinner and sunset sessions — all in one place." },

    { k: ["brunch","breakfast","morning","petit-déj","déjeuner"],
      a: "Brunch is the heart of WHITE 🍳 Served <b>all day</b>, with eggs benedict on waffles, bowls, fresh juices and homemade pastries. The Grand Brunch runs every weekend from 09:00." },

    { k: ["menu","food","eat","dish","plat","carte","manger","bowl","pasta","pâtes","salad","salade","burger"],
      a: "Our kitchen is Mediterranean with a Tunisian soul 🍽️ Bowls (22–28 DT), salads (18–32 DT), fresh pasta (20–39 DT), grills and plats (22–48 DT), plus all-day brunch & desserts. Scroll to the <b>Menu</b> section for the full list." },

    { k: ["vegetarian","vegan","végé","veggie"],
      a: "Yes 🌱 The Vegetarian Bowl (bulgur, avocado, spinach), several salads and veggie pasta are all on the menu — just ask our team for the day's options." },

    { k: ["book","reservation","reserve","réserver","table","booking"],
      a: "Happy to help you book a table 🪑 Tap below to message us on WhatsApp with your date, time and number of guests.",
      cta: { label: "Book on WhatsApp", act: () => window.open(baseWa("Hello WHITE ☀️ I'd like to book a table"), "_blank") } },

    { k: ["sunset","golden","coucher","terrasse","terrace"],
      a: "Golden hour on the terrace is a favourite 🌇 Fresh mojitos and coolers, easy sound, and the best light of the day. Sunset Sessions every Friday from 18:00." },

    { k: ["event","private","birthday","anniversaire","baby shower","celebration","party","atelier","workshop"],
      a: "We host birthdays, baby showers, team lunches, workshops and private terrace evenings 🎉 Tell us your idea and we'll make it happen.",
      cta: { label: "Plan an event", act: () => window.open(baseWa("Hello WHITE ☀️ I'd like to enquire about hosting an event 🎉"), "_blank") } },

    { k: ["coffee","cafe","café","latte","cappuccino"],
      a: "Freshly pulled coffee from 08:00 ☕ Espresso, cappuccino, lattes and homemade milkshakes — the perfect start to a day in La Marsa." },

    { k: ["dessert","sweet","milkshake","cake","gâteau","french toast"],
      a: "Sweet tooth? 🍫 Homemade milkshakes, French toast with berries, and a rotating selection of desserts. Ask our team about today's." },

    { k: ["where","location","address","get there","direction","find","adresse","comment","map"],
      a: "We're in <b>La Marsa</b>, on the Tunis coast — minutes from the beach 📍",
      cta: { label: "Open in Maps", act: () => window.open("https://www.google.com/maps/search/?api=1&query=La+Marsa+Tunis","_blank") } },

    { k: ["parking","car","voiture"],
      a: "Street parking is available nearby 🚗 Evenings and weekends get busy, so arriving a little early helps." },

    { k: ["wifi","password","internet","travailler","work"],
      a: "Yes, we have WiFi 📶 WHITE is a lovely spot to work or catch up — just ask our team for the password." },

    { k: ["price","cost","how much","expensive","combien","tarif","prix"],
      a: "Bowls 22–28 DT, salads 18–32 DT, pasta 20–39 DT, plats 22–48 DT, sides from 4.5 DT 💙 Prices in Tunisian Dinar." },

    { k: ["instagram","insta","follow","social"],
      a: "Follow us on Instagram <b>@white.tn</b> for the latest plates, events and sunsets 📸" }
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
        btn.addEventListener("click", () => window.open(baseWa("Hello WHITE ☀️ I have a question: " + text), "_blank"));
        wrap.appendChild(btn);
        body.appendChild(wrap);
      }
      handoff.href = baseWa("Hello WHITE ☀️ " + text);
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

  const quickMap = {
    hours: "What are your opening hours?",
    brunch: "Tell me about brunch",
    book: "I'd like to book a table",
    menu: "What's on the menu?",
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
  if (!sessionStorage.getItem("white_greeted")) {
    setTimeout(() => {
      if (!concierge.classList.contains("is-open")) {
        fab.style.animation = "pulse 1s 3";
      }
      sessionStorage.setItem("white_greeted", "1");
    }, 12000);
  }

})();

