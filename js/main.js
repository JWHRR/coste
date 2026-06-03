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
     MODAL HELPERS
     ================================================================ */
  const openModal = (id) => {
    $("#" + id).classList.add("is-open");
    document.body.style.overflow = "hidden";
  };
  const closeModals = () => {
    $$(".modal").forEach(m => m.classList.remove("is-open"));
    document.body.style.overflow = "";
  };
  $$("[data-close-modal]").forEach(b => b.addEventListener("click", closeModals));
  document.addEventListener("keydown", e => { if (e.key === "Escape") closeModals(); });

  /* ================================================================
     RESERVATION — open + step flow
     ================================================================ */
  const reserveForm   = $("#reserveForm");
  const reserveDone   = $("#reserveDone");
  const steps         = $$(".reserve__step");
  const dots          = $$(".reserve__dots span");
  const btnPrev       = $("#reservePrev");
  const btnNext       = $("#reserveNext");
  const btnSubmit     = $("#reserveSubmit");
  let curStep = 0;

  const showStep = (i) => {
    curStep = i;
    steps.forEach((s, n) => s.classList.toggle("is-active", n === i));
    dots.forEach((d, n) => d.classList.toggle("is-active", n === i));
    btnPrev.style.visibility = i === 0 ? "hidden" : "visible";
    const last = i === steps.length - 1;
    btnNext.hidden = last;
    btnSubmit.hidden = !last;
    if (last) buildSummary();
  };

  const buildSummary = () => {
    const f = new FormData(reserveForm);
    $("#reserveSummary").innerHTML =
      `<strong>Your reservation</strong><br/>
       ${f.get("seating") || "—"} · ${f.get("guests") || "—"} guests<br/>
       ${f.get("date") || "—"} at ${f.get("time") || "—"}
       ${f.get("experience") ? "<br/>" + f.get("experience") : ""}`;
  };

  const validateStep = (i) => {
    if (i === 0) {
      if (!reserveForm.querySelector("input[name='seating']:checked")) {
        flash("Please choose where you'd like to sit."); return false;
      }
    }
    if (i === 1) {
      const d = reserveForm.date.value, t = reserveForm.time.value, g = reserveForm.guests.value;
      if (!d || !t || !g) { flash("Please complete the date, time and guests."); return false; }
    }
    return true;
  };

  let flashTimer;
  const flash = (msg) => {
    let el = $("#reserveFlash");
    if (!el) {
      el = document.createElement("div");
      el.id = "reserveFlash";
      el.style.cssText =
        "position:fixed;bottom:24px;left:50%;transform:translateX(-50%);z-index:2000;" +
        "background:#15181d;color:#fff;padding:.9rem 1.6rem;border-radius:100px;font-size:.85rem;" +
        "box-shadow:0 18px 40px rgba(0,0,0,.3);transition:opacity .4s";
      document.body.appendChild(el);
    }
    el.textContent = msg; el.style.opacity = "1";
    clearTimeout(flashTimer);
    flashTimer = setTimeout(() => (el.style.opacity = "0"), 2600);
  };

  $$("[data-open-reserve]").forEach(b => b.addEventListener("click", () => {
    mobilemenu.classList.remove("is-open");
    reserveForm.hidden = false;
    reserveDone.hidden = true;
    $("#reserveExperience").value = b.dataset.experience || "";
    showStep(0);
    openModal("reserveModal");
  }));

  btnNext.addEventListener("click", () => { if (validateStep(curStep)) showStep(curStep + 1); });
  btnPrev.addEventListener("click", () => showStep(curStep - 1));

  reserveForm.addEventListener("submit", (e) => {
    e.preventDefault();
    if (!reserveForm.name.value || !reserveForm.email.value || !reserveForm.phone.value) {
      flash("Please add your name, email and phone."); return;
    }
    const f = new FormData(reserveForm);
    const msg =
`Hello COSTE, I'd like to reserve a table 🌅

• Seating: ${f.get("seating")}
• Date: ${f.get("date")}
• Time: ${f.get("time")}
• Guests: ${f.get("guests")}${f.get("occasion") ? "\n• Occasion: " + f.get("occasion") : ""}${f.get("experience") ? "\n• Experience: " + f.get("experience") : ""}

Name: ${f.get("name")}
Email: ${f.get("email")}
Phone: ${f.get("phone")}`;

    $("#reserveWhatsApp").href =
      `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(msg)}`;
    reserveForm.hidden = true;
    reserveDone.hidden = false;
    // (Hook real bookings here: POST to your reservation API / CRM)
  });

  /* ================================================================
     EVENT BOOKING MODAL
     ================================================================ */
  $$("[data-open-event]").forEach(b => b.addEventListener("click", () => {
    const eventName = b.dataset.openEvent;
    $("#eventKicker").textContent = "Réservation";
    $("#eventTitle").textContent = eventName.split("—")[0].trim();
    $("#eventSubtitle").textContent = eventName.split("—").slice(1).join("·").trim();
    $("#eventNameInput").value = eventName;
    $("#eventForm").reset();
    $(".leadform__status", $("#eventForm")).textContent = "";
    openModal("eventModal");
  }));

  $("#eventForm").addEventListener("submit", (e) => {
    e.preventDefault();
    const f = new FormData(e.target);
    const msg =
`Réservation — ${f.get("eventName")}

Nom: ${f.get("name")}
Email: ${f.get("email")}
Téléphone: ${f.get("phone")}
Nombre de places: ${f.get("guests")}${f.get("details") ? "\nMessage: " + f.get("details") : ""}`;
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(msg)}`, "_blank");
    $(".leadform__status", e.target).textContent = "Merci ! Confirmez sur WhatsApp pour finaliser. ✨";
    e.target.reset();
  });

  /* ================================================================
     LEAD MODALS (events / creators / club)
     ================================================================ */
  $$("[data-open-lead]").forEach(b => b.addEventListener("click", () => {
    const topic = b.dataset.openLead;
    $("#leadKicker").textContent = topic;
    $("#leadTitle").textContent =
      topic === "White Club Membership" ? "Request your invitation" :
      topic === "Creator Collaboration" ? "Apply to collaborate" :
      topic === "Private Event"        ? "Plan your private event" :
      "Tell us more";
    $("#leadTopic").value = topic;
    $("#leadForm").reset();
    $(".leadform__status", $("#leadForm")).textContent = "";
    openModal("leadModal");
  }));

  /* generic lead form handler (modal + inline catering) */
  const handleLead = (form, topic) => {
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      const f = new FormData(form);
      const status = $(".leadform__status", form);
      const t = topic || f.get("topic") || "Enquiry";
      const msg =
`New ${t} enquiry — COSTE

Name: ${f.get("name") || f.get("company") || ""}
${f.get("company") ? "Company: " + f.get("company") + "\n" : ""}Email: ${f.get("email") || ""}
${f.get("phone") ? "Phone: " + f.get("phone") + "\n" : ""}${f.get("guests") ? "Guests: " + f.get("guests") + "\n" : ""}${(f.get("details")) ? "Details: " + f.get("details") : ""}`;
      // Open WhatsApp pre-filled as the instant channel
      window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(msg)}`, "_blank");
      status.textContent = "Thank you — we'll be in touch shortly. ✨";
      form.reset();
      // (Hook real lead capture here: POST to CRM / email service)
    });
  };
  handleLead($("#leadForm"));
  $$("[data-lead]").forEach(f => handleLead(f, f.dataset.lead));

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
    { k: ["reserve","table","book","booking","reservation"],
      a: "I'd love to get you a table 🌅 You can pick your seating, date and time in our live booking — shall I open it?",
      cta: { label: "Open reservation", act: () => { toggleConcierge(false); $("[data-open-reserve]").click(); } } },
    { k: ["hour","open","close","time"],
      a: "We're open <b>daily from 08:00 until late</b> — breakfast through to sunset and dinner service." },
    { k: ["sunset","golden"],
      a: "Golden hour is the soul of COSTE 🌇 In summer the sun sets around <b>19:30–20:00</b>. Arrive ~45 min before for a Sunset Table — they're our most requested." },
    { k: ["event","private","wedding","birthday","celebration","party"],
      a: "We host private celebrations and full buyouts. Tell me the date and headcount and I'll connect you to our events team." },
    { k: ["cater","corporate","company","office"],
      a: "Yes — corporate dinners, launches and off-site catering across greater Tunis. I can take your brief and send a proposal." },
    { k: ["menu","food","eat","dish","vegan","vegetarian"],
      a: "Our kitchen is Mediterranean with a Tunisian soul — burrata, fresh catch from the bay, saffron risotto, plus vegetarian options. The Chef's Table is a 7-course journey for 8 guests nightly." },
    { k: ["where","location","address","get there","direction","parking"],
      a: "We're in the heart of <b>Sidi Bou Said</b>, above the bay — about 20 min from central Tunis. Want me to drop a map pin?",
      cta: { label: "Open in Maps", act: () => window.open("https://maps.google.com/?q=Sidi+Bou+Said+Tunisia","_blank") } },
    { k: ["club","member","membership","loyalty","vip"],
      a: "The White Club is our membership — priority terraces, VIP event access, rewards and a birthday ritual. It's complimentary by invitation." },
    { k: ["creator","influencer","collab","press","content"],
      a: "We host a curated circle of creators ✨ Apply through our Creator Programme and our team reviews each season." },
    { k: ["hello","hi","hey","salut","bonjour","ahla"],
      a: "Welcome to COSTE 🌅 How can I make your visit perfect — a reservation, sunset table, or event?" },
    { k: ["price","cost","how much","expensive"],
      a: "Starters from around €28, mains €46–62, and signature cocktails ~€22. The Chef's Table is a set tasting — I can share details." }
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
    reserve: "I'd like to reserve a table",
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
