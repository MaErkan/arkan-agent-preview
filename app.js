/* ARKAN AGENT — landing app */
const I18N = {
  ar: {
    dir: 'rtl', lang: 'ar',
    logoSub: 'AI & AUTOMATION',
    navHome: 'الرئيسية', navAgents: 'الوكلاء', navAutomation: 'الأتمتة', navIntegrations: 'التكاملات', navPricing: 'الأسعار',
    login: 'تسجيل الدخول', ctaStart: 'ابدأ الآن',
    heroBadge: 'منصة الوكلاء الأذكياء الأقوى عربياً',
    heroTitleA: 'مستقبل العمل مع',
    heroSub: 'أركان يبني لك وكلاء ذكاء اصطناعي ينفّذون مهامك تلقائياً — من الرد على العملاء إلى إدارة سير العمل بالكامل، بدون كتابة سطر برمجي واحد.',
    ctaFree: 'ابدأ مجاناً', ctaDemo: 'شاهد العرض',
    trust1: 'بدون بطاقة ائتمان', trust2: 'أمان عالي', trust3: 'سهولة الاستخدام',
    words: ['أتمتة ذكية', 'وكلاء أذكياء', 'نتائج حقيقية'],
    dashKicker: 'مساحة العمل الحية', dashTitle: 'لوحة تحكم تنبض بالحياة', dashSub: 'راقب وكلاءك وهم يعملون لحظة بلحظة',
    dsDash: 'لوحة التحكم', dsAgents: 'الوكلاء', dsFlows: 'الأتمتة', dsReports: 'التقارير',
    agentsOnline: 'وكيل متصل', workspace: 'مساحة عمل الذكاء الاصطناعي', perf: 'الأداء',
    wfTrigger: 'محفّز', wfAgent: 'وكيل ذكي', wfGen: 'توليد محتوى', wfNotify: 'إرسال إشعار', wfCloud: 'حفظ سحابي',
    activity: 'النشاط الأخير',
    feed: [
      ['robot', 'وكيل المبيعات', 'أنشأ رداً على عميل جديد'],
      ['chart', 'وكيل التقارير', 'أنجز التقرير الأسبوعي'],
      ['mail', 'وكيل البريد', 'أرسل 12 رسالة متابعة'],
      ['bolt', 'أتمتة الفواتير', 'عالجت 8 فواتير جديدة'],
      ['cloud', 'وكيل الأرشفة', 'رفع 34 ملفاً إلى السحابة'],
      ['bell', 'وكيل الإشعارات', 'نبّه فريق الدعم لتذكرة عاجلة'],
      ['doc', 'وكيل المحتوى', 'كتب مسودة منشور جديد']
    ],
    justNow: 'الآن',
    stat1: 'مستخدم نشط', stat2: 'وكيل ذكي', stat3: 'عملية مؤتمتة', stat4: 'ساعة موفرة',
    featKicker: 'المميزات', featTitle: 'كل ما تحتاجه لأتمتة أعمالك',
    f1t: 'وكلاء ذكيون', f1p: 'وكلاء AI يفهمون سياق عملك ويتخذون قرارات وينفذون مهام معقدة باستقلالية.',
    f2t: 'أتمتة سير العمل', f2p: 'صمّم تدفقات عمل مرئية بالسحب والإفلات تربط أدواتك وتعمل على مدار الساعة.',
    f3t: 'تكاملات متعددة', f3p: 'اربط أكثر من 100 أداة: Google وSlack وNotion وغيرها بنقرة واحدة.',
    f4t: 'تحليلات وتقارير', f4p: 'لوحات بيانية حية تقيس أداء وكلاءك وتُظهر العائد على الاستثمار بوضوح.',
    f5t: 'أمان وخصوصية', f5p: 'تشفير كامل للبيانات، وامتثال لأعلى معايير الأمان العالمية.',
    f6t: 'لغات متعددة', f6p: 'واجهة ووكلاء يتحدثون العربية والإنجليزية والتركية وأكثر بطلاقة.',
    howKicker: 'كيف يعمل', howTitle: 'ثلاث خطوات وتبدأ الأتمتة',
    s1t: 'اربط أدواتك', s1p: 'وصّل حساباتك وأدوات العمل التي تستخدمها يومياً خلال دقائق.',
    s2t: 'صمّم وكيلك', s2p: 'حدّد المهام والقواعد بواجهة مرئية بسيطة — بدون أي برمجة.',
    s3t: 'أطلق واسترخِ', s3p: 'وكيلك يعمل على مدار الساعة وأنت تراقب النتائج من لوحة التحكم.',
    intKicker: 'التكاملات', intTitle: 'يتكامل مع أدواتك المفضلة',
    testi: '"وفّرنا أكثر من 30 ساعة أسبوعياً بفضل وكلاء أركان. الرد على العملاء أصبح فورياً والتقارير تُبنى تلقائياً. أفضل استثمار قمنا به هذه السنة."',
    testiName: 'سارة الحربي', testiRole: 'مديرة العمليات — شركة نمو التقنية',
    ctaTitle: 'جاهز تطلق وكيلك الأول؟', ctaSub: 'ابدأ مجاناً اليوم — لا حاجة لبطاقة ائتمان، والإعداد يستغرق أقل من 5 دقائق.', ctaBtn: 'ابدأ الآن مجاناً',
    footTag: 'منصة الوكلاء الأذكياء والأتمتة للشركات الطموحة.',
    footProduct: 'المنتج', footCompany: 'الشركة', footLegal: 'قانوني',
    footAbout: 'من نحن', footBlog: 'المدونة', footContact: 'تواصل معنا', footPrivacy: 'الخصوصية', footTerms: 'الشروط',
    copyright: '© 2025 ARKAN AI — جميع الحقوق محفوظة',
    chatTitle: 'مساعد أركان', chatOnline: 'متصل الآن',
    chatHello: 'أهلاً بك في أركان! كيف أقدر أساعدك اليوم؟',
    chatQuick: ['ما هو وكيل الذكاء الاصطناعي؟', 'كيف أبدأ مجاناً؟', 'ما التكاملات المتاحة؟'],
    chatReplies: [
      'الوكيل الذكي هو مساعد رقمي يفهم مهام عملك وينفذها تلقائياً: يرد على العملاء، يبني التقارير، ويدير سير العمل — كل ذلك بدون تدخل منك.',
      'بسيطة! اضغط «ابدأ مجاناً»، أنشئ حسابك خلال دقيقة، واربط أول أداة لك. لا حاجة لبطاقة ائتمان.',
      'ندعم أكثر من 100 تكامل: Google، Microsoft 365، Slack، Notion، Telegram، OpenAI وغيرها الكثير.'
    ]
  },
  en: {
    dir: 'ltr', lang: 'en',
    logoSub: 'AI & AUTOMATION',
    navHome: 'Home', navAgents: 'Agents', navAutomation: 'Automation', navIntegrations: 'Integrations', navPricing: 'Pricing',
    login: 'Sign in', ctaStart: 'Get Started',
    heroBadge: 'The most powerful AI agents platform',
    heroTitleA: 'The future of work with',
    heroSub: 'Arkan builds AI agents that execute your tasks automatically — from replying to customers to running entire workflows, without writing a single line of code.',
    ctaFree: 'Start for Free', ctaDemo: 'Watch Demo',
    trust1: 'No credit card', trust2: 'High security', trust3: 'Easy to use',
    words: ['smart automation', 'smarter agents', 'real results'],
    dashKicker: 'Live Workspace', dashTitle: 'A dashboard that feels alive', dashSub: 'Watch your agents work in real time',
    dsDash: 'Dashboard', dsAgents: 'Agents', dsFlows: 'Automations', dsReports: 'Reports',
    agentsOnline: 'Agents Online', workspace: 'My AI Workspace', perf: 'Performance',
    wfTrigger: 'Trigger', wfAgent: 'AI Agent', wfGen: 'Generate Content', wfNotify: 'Send Notification', wfCloud: 'Save to Cloud',
    activity: 'Recent Activity',
    feed: [
      ['robot', 'Sales Agent', 'replied to a new customer'],
      ['chart', 'Reports Agent', 'finished the weekly report'],
      ['mail', 'Mail Agent', 'sent 12 follow-up emails'],
      ['bolt', 'Invoice Automation', 'processed 8 new invoices'],
      ['cloud', 'Archive Agent', 'uploaded 34 files to the cloud'],
      ['bell', 'Notify Agent', 'alerted support about an urgent ticket'],
      ['doc', 'Content Agent', 'drafted a new post']
    ],
    justNow: 'now',
    stat1: 'Active Users', stat2: 'AI Agents', stat3: 'Automated Tasks', stat4: 'Hours Saved',
    featKicker: 'Features', featTitle: 'Everything you need to automate your business',
    f1t: 'Smart Agents', f1p: 'AI agents that understand your business context, make decisions, and execute complex tasks autonomously.',
    f2t: 'Workflow Automation', f2p: 'Design visual drag-and-drop workflows that connect your tools and run around the clock.',
    f3t: 'Rich Integrations', f3p: 'Connect 100+ tools: Google, Slack, Notion and more — in one click.',
    f4t: 'Analytics & Reports', f4p: 'Live dashboards that measure agent performance and clearly show ROI.',
    f5t: 'Security & Privacy', f5p: 'Full data encryption with compliance to top global security standards.',
    f6t: 'Multi-language', f6p: 'Interface and agents fluent in Arabic, English, Turkish and more.',
    howKicker: 'How it works', howTitle: 'Three steps to automation',
    s1t: 'Connect your tools', s1p: 'Link the accounts and tools you use daily within minutes.',
    s2t: 'Design your agent', s2p: 'Define tasks and rules with a simple visual interface — zero code.',
    s3t: 'Launch & relax', s3p: 'Your agent works 24/7 while you watch results from the dashboard.',
    intKicker: 'Integrations', intTitle: 'Works with your favorite tools',
    testi: '"We saved 30+ hours a week thanks to Arkan agents. Customer replies are instant and reports build themselves. Our best investment this year."',
    testiName: 'Sara Alharbi', testiRole: 'Operations Manager — Numou Tech',
    ctaTitle: 'Ready to launch your first agent?', ctaSub: 'Start free today — no credit card required, setup takes under 5 minutes.', ctaBtn: 'Start Free Now',
    footTag: 'The AI agents & automation platform for ambitious teams.',
    footProduct: 'Product', footCompany: 'Company', footLegal: 'Legal',
    footAbout: 'About', footBlog: 'Blog', footContact: 'Contact', footPrivacy: 'Privacy', footTerms: 'Terms',
    copyright: '© 2025 ARKAN AI — All rights reserved',
    chatTitle: 'Arkan Assistant', chatOnline: 'Online',
    chatHello: 'Welcome to Arkan! How can I help you today?',
    chatQuick: ['What is an AI agent?', 'How do I start free?', 'Which integrations exist?'],
    chatReplies: [
      'An AI agent is a digital assistant that understands your work and executes it automatically: replying to customers, building reports, running workflows — all hands-free.',
      'Easy! Hit "Start for Free", create your account in a minute, and connect your first tool. No credit card needed.',
      'We support 100+ integrations: Google, Microsoft 365, Slack, Notion, Telegram, OpenAI and many more.'
    ]
  },
  tr: {
    dir: 'ltr', lang: 'tr',
    logoSub: 'AI & AUTOMATION',
    navHome: 'Ana Sayfa', navAgents: 'Ajanlar', navAutomation: 'Otomasyon', navIntegrations: 'Entegrasyonlar', navPricing: 'Fiyatlar',
    login: 'Giriş Yap', ctaStart: 'Hemen Başla',
    heroBadge: 'En güçlü yapay zeka ajan platformu',
    heroTitleA: 'İşin geleceği:',
    heroSub: 'Arkan, görevlerinizi otomatik olarak yerine getiren yapay zeka ajanları oluşturur — müşteri yanıtlarından tüm iş akışlarına kadar, tek satır kod yazmadan.',
    ctaFree: 'Ücretsiz Başla', ctaDemo: 'Demoyu İzle',
    trust1: 'Kredi kartı gerekmez', trust2: 'Yüksek güvenlik', trust3: 'Kullanımı kolay',
    words: ['akıllı otomasyon', 'akıllı ajanlar', 'gerçek sonuçlar'],
    dashKicker: 'Canlı Çalışma Alanı', dashTitle: 'Canlı bir kontrol paneli', dashSub: 'Ajanlarınızı gerçek zamanlı izleyin',
    dsDash: 'Panel', dsAgents: 'Ajanlar', dsFlows: 'Otomasyonlar', dsReports: 'Raporlar',
    agentsOnline: 'Ajan Çevrimiçi', workspace: 'AI Çalışma Alanım', perf: 'Performans',
    wfTrigger: 'Tetikleyici', wfAgent: 'AI Ajanı', wfGen: 'İçerik Üret', wfNotify: 'Bildirim Gönder', wfCloud: 'Buluta Kaydet',
    activity: 'Son Aktiviteler',
    feed: [
      ['robot', 'Satış Ajanı', 'yeni bir müşteriye yanıt verdi'],
      ['chart', 'Rapor Ajanı', 'haftalık raporu tamamladı'],
      ['mail', 'E-posta Ajanı', '12 takip e-postası gönderdi'],
      ['bolt', 'Fatura Otomasyonu', '8 yeni fatura işledi'],
      ['cloud', 'Arşiv Ajanı', '34 dosyayı buluta yükledi'],
      ['bell', 'Bildirim Ajanı', 'acil talep için desteği uyardı'],
      ['doc', 'İçerik Ajanı', 'yeni bir gönderi taslağı yazdı']
    ],
    justNow: 'şimdi',
    stat1: 'Aktif Kullanıcı', stat2: 'AI Ajanı', stat3: 'Otomatik İşlem', stat4: 'Tasarruf Edilen Saat',
    featKicker: 'Özellikler', featTitle: 'İşinizi otomatikleştirmek için ihtiyacınız olan her şey',
    f1t: 'Akıllı Ajanlar', f1p: 'İş bağlamınızı anlayan, kararlar alan ve karmaşık görevleri bağımsız yürüten AI ajanları.',
    f2t: 'İş Akışı Otomasyonu', f2p: 'Araçlarınızı bağlayan ve 7/24 çalışan görsel sürükle-bırak iş akışları tasarlayın.',
    f3t: 'Zengin Entegrasyonlar', f3p: '100+ aracı tek tıkla bağlayın: Google, Slack, Notion ve daha fazlası.',
    f4t: 'Analitik ve Raporlar', f4p: 'Ajan performansını ölçen ve yatırım getirisini net gösteren canlı paneller.',
    f5t: 'Güvenlik ve Gizlilik', f5p: 'Tam veri şifreleme ve en yüksek küresel güvenlik standartlarına uyum.',
    f6t: 'Çok Dilli', f6p: 'Arapça, İngilizce, Türkçe ve daha fazlasını akıcı konuşan arayüz ve ajanlar.',
    howKicker: 'Nasıl çalışır', howTitle: 'Otomasyona üç adım',
    s1t: 'Araçlarını bağla', s1p: 'Günlük kullandığınız hesapları ve araçları dakikalar içinde bağlayın.',
    s2t: 'Ajanını tasarla', s2p: 'Basit görsel arayüzle görevleri ve kuralları belirleyin — sıfır kod.',
    s3t: 'Başlat ve rahatla', s3p: 'Ajanınız 7/24 çalışırken siz sonuçları panelden izleyin.',
    intKicker: 'Entegrasyonlar', intTitle: 'Favori araçlarınızla çalışır',
    testi: '"Arkan ajanları sayesinde haftada 30+ saat kazandık. Müşteri yanıtları anında, raporlar kendiliğinden hazır. Bu yılki en iyi yatırımımız."',
    testiName: 'Sara Alharbi', testiRole: 'Operasyon Müdürü — Numou Tech',
    ctaTitle: 'İlk ajanını başlatmaya hazır mısın?', ctaSub: 'Bugün ücretsiz başlayın — kredi kartı gerekmez, kurulum 5 dakikadan kısa sürer.', ctaBtn: 'Ücretsiz Başla',
    footTag: 'Hırslı ekipler için AI ajanları ve otomasyon platformu.',
    footProduct: 'Ürün', footCompany: 'Şirket', footLegal: 'Yasal',
    footAbout: 'Hakkımızda', footBlog: 'Blog', footContact: 'İletişim', footPrivacy: 'Gizlilik', footTerms: 'Şartlar',
    copyright: '© 2025 ARKAN AI — Tüm hakları saklıdır',
    chatTitle: 'Arkan Asistanı', chatOnline: 'Çevrimiçi',
    chatHello: "Arkan'a hoş geldiniz! Size nasıl yardımcı olabilirim?",
    chatQuick: ['AI ajanı nedir?', 'Nasıl ücretsiz başlarım?', 'Hangi entegrasyonlar var?'],
    chatReplies: [
      'AI ajanı, işinizi anlayan ve otomatik yürüten dijital bir asistandır: müşterilere yanıt verir, raporlar oluşturur, iş akışlarını yönetir.',
      'Çok kolay! "Ücretsiz Başla"ya tıklayın, bir dakikada hesabınızı oluşturun ve ilk aracınızı bağlayın. Kredi kartı gerekmez.',
      "100+ entegrasyon destekliyoruz: Google, Microsoft 365, Slack, Notion, Telegram, OpenAI ve daha fazlası."
    ]
  }
};

const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
let lang = localStorage.getItem('arkan-lang') || 'ar';
if (!I18N[lang]) lang = 'ar';
let wordIdx = 0, feedIdx = 0, feedTimer = null;

/* ---------- helpers ---------- */
const $ = s => document.querySelector(s);
const $$ = s => [...document.querySelectorAll(s)];
const T = () => I18N[lang];

function applyLang(l) {
  lang = l;
  localStorage.setItem('arkan-lang', l);
  const t = T();
  document.documentElement.lang = t.lang;
  document.documentElement.dir = t.dir;
  document.title = 'ARKAN AGENT — AI & Automation';
  $$('[data-i18n]').forEach(el => { if (t[el.dataset.i18n] !== undefined) el.textContent = t[el.dataset.i18n]; });
  $$('#langSwitch button').forEach(b => b.classList.toggle('active', b.dataset.lang === l));
  wordIdx = 0; $('#rotatingWord').textContent = t.words[0];
  resetFeed();
  renderChat(true);
  animateRing();
}

/* ---------- rotating words ---------- */
setInterval(() => {
  const t = T();
  wordIdx = (wordIdx + 1) % t.words.length;
  const el = $('#rotatingWord');
  el.style.animation = 'none'; void el.offsetWidth; el.style.animation = '';
  el.textContent = t.words[wordIdx];
}, 2600);

/* ---------- activity feed ---------- */
function pushFeedItem() {
  const t = T();
  const [ico, who, what] = t.feed[feedIdx % t.feed.length];
  feedIdx++;
  const li = document.createElement('li');
  li.innerHTML = `<span class="a-ico"><svg class="ic"><use href="#i-${ico}"/></svg></span><span><b>${who}</b> ${what}</span><span class="a-time">${t.justNow}</span>`;
  const feed = $('#activityFeed');
  feed.prepend(li);
  while (feed.children.length > 4) feed.lastChild.remove();
}
function resetFeed() {
  feedIdx = 0;
  $('#activityFeed').innerHTML = '';
  pushFeedItem(); pushFeedItem(); pushFeedItem();
  clearInterval(feedTimer);
  feedTimer = setInterval(pushFeedItem, 3500);
}

/* ---------- performance ring ---------- */
function animateRing() {
  const ring = $('#perfRing'), val = $('#ringVal');
  const target = 98, circ = 213.6;
  if (reduced) { ring.style.strokeDashoffset = circ * (1 - target / 100); val.textContent = target + '%'; return; }
  ring.style.strokeDashoffset = circ;
  let start = null;
  function step(ts) {
    if (!start) start = ts;
    const p = Math.min((ts - start) / 1800, 1);
    const eased = 1 - Math.pow(1 - p, 3);
    val.textContent = Math.round(target * eased) + '%';
    ring.style.strokeDashoffset = circ * (1 - (target / 100) * eased);
    if (p < 1) requestAnimationFrame(step);
  }
  requestAnimationFrame(step);
}

/* ---------- count-up ---------- */
function countUp(el) {
  const end = +el.dataset.count, suf = el.dataset.suffix || '';
  if (reduced) { el.textContent = end + suf; return; }
  let start = null;
  function step(ts) {
    if (!start) start = ts;
    const p = Math.min((ts - start) / 1600, 1);
    const eased = 1 - Math.pow(1 - p, 3);
    el.textContent = Math.round(end * eased) + suf;
    if (p < 1) requestAnimationFrame(step);
  }
  requestAnimationFrame(step);
}

/* ---------- IntersectionObserver ---------- */
const io = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (!e.isIntersecting) return;
    e.target.classList.add('visible');
    if (e.target.querySelector?.('.count')) e.target.querySelectorAll('.count').forEach(countUp);
    if (e.target.id === 'dashMock') animateRing();
    io.unobserve(e.target);
  });
}, { threshold: 0.2 });
$$('.reveal, .dash-mock').forEach(el => io.observe(el));

/* ---------- connectors robot<->chips ---------- */
function drawConnectors() {
  const scene = $('#robotScene'), svg = $('#connectors');
  const sr = scene.getBoundingClientRect();
  const cx = 250, cy = 250; // viewBox center
  let defs = `<defs><linearGradient id="connGrad" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#22d3ee"/><stop offset="1" stop-color="#a855f7"/></linearGradient></defs>`;
  let lines = '';
  $$('.chip').forEach(chip => {
    const r = chip.getBoundingClientRect();
    const x = ((r.left + r.width / 2 - sr.left) / sr.width) * 500;
    const y = ((r.top + r.height / 2 - sr.top) / sr.height) * 500;
    lines += `<line x1="${cx}" y1="${cy}" x2="${x}" y2="${y}"/>`;
  });
  svg.innerHTML = defs + lines;
}
window.addEventListener('load', drawConnectors);
window.addEventListener('resize', drawConnectors);
setTimeout(drawConnectors, 500);

/* ---------- mouse parallax ---------- */
if (!reduced) {
  const scene = $('#robotScene');
  scene.addEventListener('mousemove', e => {
    const r = scene.getBoundingClientRect();
    const dx = (e.clientX - r.left) / r.width - 0.5;
    const dy = (e.clientY - r.top) / r.height - 0.5;
    scene.querySelectorAll('[data-depth]').forEach(el => {
      const d = +el.dataset.depth;
      el.style.transform = `translate(${-dx * d}px, ${-dy * d}px)`;
    });
  });
  scene.addEventListener('mouseleave', () => {
    scene.querySelectorAll('[data-depth]').forEach(el => el.style.transform = '');
  });
}

/* ---------- marquee duplication ---------- */
const track = $('#marqueeTrack');
track.innerHTML += track.innerHTML;

/* ---------- chat ---------- */
const chatPanel = $('#chatPanel'), chatBody = $('#chatBody'), chatQuick = $('#chatQuick');
let chatOpened = false;

function addMsg(text, who) {
  const d = document.createElement('div');
  d.className = 'chat-msg ' + who;
  chatBody.appendChild(d);
  chatBody.scrollTop = chatBody.scrollHeight;
  if (reduced || who === 'user') { d.textContent = text; return Promise.resolve(); }
  return new Promise(res => {
    let i = 0;
    const iv = setInterval(() => {
      d.textContent = text.slice(0, ++i);
      chatBody.scrollTop = chatBody.scrollHeight;
      if (i >= text.length) { clearInterval(iv); res(); }
    }, 18);
  });
}
function botReply(idx) {
  const t = T();
  const typing = document.createElement('div');
  typing.className = 'chat-msg bot typing';
  typing.innerHTML = '<i></i><i></i><i></i>';
  chatBody.appendChild(typing);
  chatBody.scrollTop = chatBody.scrollHeight;
  setTimeout(async () => {
    typing.remove();
    await addMsg(t.chatReplies[idx], 'bot');
  }, 900);
}
function renderChat(force) {
  if (force && !chatOpened) return; // build lazily on first open
  const t = T();
  chatBody.innerHTML = ''; chatQuick.innerHTML = '';
  addMsg(t.chatHello, 'bot');
  t.chatQuick.forEach((q, i) => {
    const b = document.createElement('button');
    b.textContent = q;
    b.onclick = () => { addMsg(q, 'user'); botReply(i); };
    chatQuick.appendChild(b);
  });
}
$('#chatBubble').addEventListener('click', () => {
  chatPanel.classList.toggle('open');
  if (!chatOpened) { chatOpened = true; renderChat(false); }
});
$('#chatClose').addEventListener('click', () => chatPanel.classList.remove('open'));

/* ---------- nav ---------- */
$('#hamburger').addEventListener('click', () => {
  $('#hamburger').classList.toggle('open');
  $('#navLinks').classList.toggle('open');
});
$$('#navLinks a').forEach(a => a.addEventListener('click', () => {
  $('#hamburger').classList.remove('open');
  $('#navLinks').classList.remove('open');
}));
$$('#langSwitch button').forEach(b => b.addEventListener('click', () => applyLang(b.dataset.lang)));

/* ---------- init ---------- */
applyLang(lang);
