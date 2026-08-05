(function () {
  'use strict';

  var EN_COUNTRIES = new Set([
    'US', 'GB', 'UK', 'CA', 'AU', 'NZ', 'IE', 'ZA', 'SG', 'PH', 'IN', 'NG',
    'KE', 'JM', 'TT', 'BZ', 'GY', 'BB', 'BS', 'MT', 'PK', 'GH', 'ZW', 'UG',
    'BW', 'NA', 'MW', 'ZM', 'LR', 'SL', 'AG', 'GD', 'KN', 'LC', 'VC', 'DM'
  ]);

  var T = {
    es: {
      'meta.title': 'BirdieLabs. Tu entrenador personal de golf con IA',
      'meta.description': 'BirdieLabs analiza cada ronda y te dice exactamente qué debes entrenar para bajar tu hándicap. Únete a la beta privada.',
      'meta.ogTitle': 'BirdieLabs  Tu entrenador personal de golf con IA',
      'meta.ogDescription': 'Deja de mirar estadísticas. Empieza a bajar tu hándicap. BirdieLabs te dice exactamente qué entrenar.',
      'meta.twitterDescription': 'Deja de mirar estadísticas. Empieza a bajar tu hándicap.',
      'nav.problem': 'Problema',
      'nav.how': 'Cómo funciona',
      'nav.features': 'Funciones',
      'nav.testimonials': 'Testimonios',
      'nav.beta': 'Únete a la beta',
      'nav.theme': 'Cambiar modo claro/oscuro',
      'hero.eyebrow': 'Beta privada 100 plazas limitadas',
      'hero.titleLine1': 'PRUEBA BIRDIELABS 2026',
      'hero.titleEm': 'Empieza a bajar tu hándicap.',
      'hero.sub': 'BirdieLabs analiza cada ronda con IA y te dice exactamente qu debes entrenar para jugar mejor golf.',
      'hero.cta1': 'Únete a la beta',
      'hero.cta2': 'Ver cómo funciona',
      'hero.trust1': '? Sin tarjeta de crédito',
      'hero.trust2': '? Acceso anticipado gratis',
      'hero.trust3': '? Solo para amateur golfistas',
      'hero.float1Title': '-2.3 golpes',
      'hero.float1Sub': 'Mejora media en 6 semanas',
      'hero.float2Title': 'Plan listo',
      'hero.float2Sub': 'Entrenamiento de hoy',
      'hero.imgAlt': 'Mockup BirdieLabs  coach IA en iPhone mostrando mensaje personalizado y gráfico de golpes',
      'problem.eyebrow': 'El problema',
      'problem.title': 'La mayoría de apps te muestran datos. Muy pocas te explican cómo mejorar.',
      'problem.sub': 'BirdieLabs no es una app de estadísticas. Es tu entrenador personal, basado en IA, que detecta dónde pierdes golpes y te dice exactamente qué entrenar.',
      'problem.oldBadge': 'Apps tradicionales',
      'problem.oldTitle': 'Te dan gráficos y números.',
      'problem.oldText': 'Te dicen qué pasó, pero no qué hacer con esa información. Terminas mirando datos sin saber dónde enfocarte.',
      'problem.newBadge': 'BirdieLabs',
      'problem.newTitle': 'Te dice qué entrenar.',
      'problem.newText': 'Analiza tus golpes con IA, encuentra patrones en tus puntos débiles y genera un plan personalizado para la próxima ronda.',
      'how.eyebrow': 'Cómo funciona',
      'how.title': 'Tres pasos. Sin complicaciones.',
      'how.sub': 'Diseñado para golfistas amateur que quieren mejorar sin perder horas analizándose a sí mismos.',
      'how.step1Title': 'Registra tu ronda',
      'how.step1Text': 'Sube los datos de tu ronda en menos de 2 minutos desde la app. BirdieLabs se conecta con tu tee, smartwatch o entrada manual.',
      'how.step2Title': 'La IA analiza todo',
      'how.step2Text': 'Nuestro modelo examina cada golpe, identifica patrones y encuentra dónde estás perdiendo golpes y exactamente igual que haría un coach profesional.',
      'how.step3Title': 'Recibe tu plan',
      'how.step3Text': 'Obtienes un plan de entrenamiento semanal personalizado, objetivos claros y un informe post-ronda con qué cambiar la próxima vez.',
      'sg.eyebrow': 'Análisis inteligente',
      'sg.title': 'Strokes Gained explicado para amateur, no para profesionales.',
      'sg.sub': 'BirdieLabs traduce los mismos datos que usan los jugadores del PGA Tour a lenguaje claro, accionable y orientado a tu juego.',
      'sg.check1': 'Detección automática de patrones de pérdida de golpes',
      'sg.check2': 'Comparativa con jugadores de tu mismo handicap',
      'sg.check3': 'Informes visuales después de cada ronda',
      'sg.check4': 'Recomendaciones accionables en lenguaje claro',
      'sg.imgAlt': 'Pantalla BirdieLabs con gráfico de Strokes Gained y comparativa por categorías',
      'feat.eyebrow': 'Funciones principales',
      'feat.title': 'Todo lo que necesitas para mejorar de verdad.',
      'feat.sub': 'Diseñado por golfistas y expertos en IA. Sin relleno, sin funciones inútiles. Solo lo que baja golpes.',
      'feat.coachTitle': 'Coach IA',
      'feat.coachText': 'Conversa con un coach que entiende tu juego. Pregunta, recibe respuestas personalizadas y aplica cambios reales.',
      'feat.planTitle': 'Plan semanal',
      'feat.planText': 'Cada semana recibes un plan claro con qué entrenar, cuánto tiempo dedicar y por qué importa para tu handicap.',
      'feat.sgTitle': 'Análisis de Strokes Gained',
      'feat.sgText': 'Las mismas métricas que usan los profesionales, traducidas para que tú sepas dónde ganar golpes.',
      'feat.hcpTitle': 'Seguimiento del handicap',
      'feat.hcpText': 'Visualiza tu evolución con claridad. Saber qué funciona y qué no, sin conjeturas.',
      'feat.goalsTitle': 'Objetivos inteligentes',
      'feat.goalsText': 'Metas realistas basadas en tus datos. Sin promesas vacías, solo progreso medible.',
      'feat.reportTitle': 'Informes post-ronda',
      'feat.reportText': 'Recibe un informe claro tras cada ronda con qué cambiaste, qué funcionó y dónde seguir mejorando.',
      'ben.eyebrow': 'Beneficios',
      'ben.title': 'Deja de entrenar al azar.',
      'ben.sub': 'La mayoría de golfistas amateur entrenan lo que les gusta, no lo que les hace mejores. BirdieLabs invierte esa ecuación.',
      'ben.check1': 'Descubre exactamente dónde pierdes golpes',
      'ben.check2': 'Mejora más rápido con menos horas de práctica',
      'ben.check3': 'Entrena solo lo que importa',
      'ben.check4': 'Lleva un entrenador profesional en el bolsillo',
      'ben.imgAlt': 'Plan semanal BirdieLabs con tarjetas de entrenamiento diario',
      'test.quote': 'No sabía que perdía tantos golpes alrededor del green. En dos semanas empecé a entrenar justo eso y bajé tres golpes de media.',
      'test.author': ' Carlos M., handicap 18 ? 15 Madrid',
      'cta.title': 'Empieza hoy.',
      'cta.sub': 'Únete a la beta privada de BirdieLabs. Acceso anticipado gratuito para un grupo limitado de golfistas.',
      'cta.placeholder': 'tu@email.com',
      'cta.button': 'Solicitar acceso',
      'cta.buttonDone': 'Listo! Te avisaremos pronto',
      'cta.note': 'Plazas limitadas. Sin compromiso. Solo los primeros 1.000 golfistas.',
      'foot.tagline': 'Tu entrenador personal de golf, basado en Inteligencia Artificial. Bajar tu hándicap, un golpe a la vez.',
      'foot.product': 'Producto',
      'foot.how': 'Cómo funciona',
      'foot.features': 'Funciones',
      'foot.beta': 'Beta privada',
      'foot.roadmap': 'Roadmap',
      'foot.company': 'Compañía',
      'foot.about': 'Sobre nosotros',
      'foot.contact': 'Contacto',
      'foot.privacy': 'Privacidad',
      'foot.terms': 'Términos',
      'foot.resources': 'Recursos',
      'foot.blog': 'Blog',
      'foot.guides': 'Guías',
      'foot.help': 'Ayuda',
      'foot.copy': '© 2026 BirdieLabs. Todos los derechos reservados.'
    },
    en: {
      'meta.title': 'BirdieLabs  Your AI personal golf coach',
      'meta.description': 'BirdieLabs analyzes every round and tells you exactly what to practice to lower your handicap. Join the private beta.',
      'meta.ogTitle': 'BirdieLabs Your AI personal golf coach',
      'meta.ogDescription': 'Stop staring at stats. Start lowering your handicap. BirdieLabs tells you exactly what to practice.',
      'meta.twitterDescription': 'Stop staring at stats. Start lowering your handicap.',
      'nav.problem': 'Problem',
      'nav.how': 'How it works',
      'nav.features': 'Features',
      'nav.testimonials': 'Testimonials',
      'nav.beta': 'Join the beta',
      'nav.theme': 'Toggle light/dark mode',
      'hero.eyebrow': 'Private beta  limited spots',
      'hero.titleLine1': 'Stop staring at stats.',
      'hero.titleEm': 'Start lowering your handicap.',
      'hero.sub': 'BirdieLabs analyzes every round with AI and tells you exactly what to practice to play better golf.',
      'hero.cta1': 'Join the beta',
      'hero.cta2': 'See how it works',
      'hero.trust1': '? No credit card required',
      'hero.trust2': '? Free early access',
      'hero.trust3': '? Built for amateur golfers',
      'hero.float1Title': '-2.3 strokes',
      'hero.float1Sub': 'Average improvement in 6 weeks',
      'hero.float2Title': 'Plan ready',
      'hero.float2Sub': "Today's training",
      'hero.imgAlt': 'BirdieLabs mockup  AI coach on iPhone showing personalized message and stroke chart',
      'problem.eyebrow': 'The problem',
      'problem.title': 'Most apps show you data. Very few tell you how to improve.',
      'problem.sub': "BirdieLabs isn't a stats app. It's your AI personal coach that finds where you lose strokes and tells you exactly what to practice.",
      'problem.oldBadge': 'Traditional apps',
      'problem.oldTitle': 'They give you charts and numbers.',
      'problem.oldText': "They tell you what happened, but not what to do with that information. You end up staring at data without knowing where to focus.",
      'problem.newBadge': 'BirdieLabs',
      'problem.newTitle': 'It tells you what to practice.',
      'problem.newText': 'AI analyzes your shots, finds patterns in your weak spots, and builds a personalized plan for your next round.',
      'how.eyebrow': 'How it works',
      'how.title': 'Three steps. No hassle.',
      'how.sub': 'Built for amateur golfers who want to improve without spending hours analyzing themselves.',
      'how.step1Title': 'Log your round',
      'how.step1Text': 'Upload your round data in under 2 minutes from the app. BirdieLabs connects with your tee, smartwatch, or manual entry.',
      'how.step2Title': 'AI analyzes everything',
      'how.step2Text': 'Our model examines every shot, identifies patterns, and finds where you lose strokes  just like a pro coach would.',
      'how.step3Title': 'Get your plan',
      'how.step3Text': 'You get a personalized weekly training plan, clear goals, and a post-round report on what to change next time.',
      'sg.eyebrow': 'Smart analysis',
      'sg.title': 'Strokes Gained explained for amateurs, not pros.',
      'sg.sub': 'BirdieLabs translates the same data PGA Tour players use into clear, actionable language tailored to your game.',
      'sg.check1': 'Automatic detection of stroke-loss patterns',
      'sg.check2': 'Comparison with players at your handicap level',
      'sg.check3': 'Visual reports after every round',
      'sg.check4': 'Actionable recommendations in plain language',
      'sg.imgAlt': 'BirdieLabs screen with Strokes Gained chart and category breakdown',
      'feat.eyebrow': 'Key features',
      'feat.title': 'Everything you need to actually improve.',
      'feat.sub': 'Built by golfers and AI experts. No fluff, no useless features. Only what lowers your score.',
      'feat.coachTitle': 'AI Coach',
      'feat.coachText': 'Chat with a coach that understands your game. Ask questions, get personalized answers, and make real changes.',
      'feat.planTitle': 'Weekly plan',
      'feat.planText': 'Every week you get a clear plan of what to practice, how long to spend, and why it matters for your handicap.',
      'feat.sgTitle': 'Strokes Gained analysis',
      'feat.sgText': 'The same metrics pros use, translated so you know exactly where to gain strokes.',
      'feat.hcpTitle': 'Handicap tracking',
      'feat.hcpText': 'See your progress clearly. Know what works and what doesn\'t  no guesswork.',
      'feat.goalsTitle': 'Smart goals',
      'feat.goalsText': 'Realistic targets based on your data. No empty promises, just measurable progress.',
      'feat.reportTitle': 'Post-round reports',
      'feat.reportText': 'Get a clear report after every round on what changed, what worked, and where to keep improving.',
      'ben.eyebrow': 'Benefits',
      'ben.title': 'Stop practicing at random.',
      'ben.sub': 'Most amateur golfers practice what they enjoy, not what makes them better. BirdieLabs flips that equation.',
      'ben.check1': 'Discover exactly where you lose strokes',
      'ben.check2': 'Improve faster with fewer practice hours',
      'ben.check3': 'Practice only what matters',
      'ben.check4': 'Carry a pro coach in your pocket',
      'ben.imgAlt': 'BirdieLabs weekly plan with daily training cards',
      'test.quote': "I didn't know I was losing so many strokes around the green. In two weeks I started practicing exactly that and dropped three strokes on average.",
      'test.author': '© Carlos M., handicap 18 ? 15 © Madrid',
      'cta.title': 'Start today.',
      'cta.sub': 'Join the BirdieLabs private beta. Free early access for a limited group of golfers.',
      'cta.placeholder': 'you@email.com',
      'cta.button': 'Request access',
      'cta.buttonDone': 'Done! We\'ll notify you soon',
      'cta.note': 'Limited spots. No commitment. First 1,000 golfers only.',
      'foot.tagline': 'Your AI personal golf coach. Lower your handicap, one stroke at a time.',
      'foot.product': 'Product',
      'foot.how': 'How it works',
      'foot.features': 'Features',
      'foot.beta': 'Private beta',
      'foot.roadmap': 'Roadmap',
      'foot.company': 'Company',
      'foot.about': 'About us',
      'foot.contact': 'Contact',
      'foot.privacy': 'Privacy',
      'foot.terms': 'Terms',
      'foot.resources': 'Resources',
      'foot.blog': 'Blog',
      'foot.guides': 'Guides',
      'foot.help': 'Help',
      'foot.copy': '© 2026 BirdieLabs. All rights reserved.'
    }
  };

  function getStoredLang() {
    try {
      var stored = localStorage.getItem('bl-lang');
      if (stored === 'es' || stored === 'en') return stored;
    } catch (e) {}
    return null;
  }

  function setStoredLang(lang) {
    try {
      localStorage.setItem('bl-lang', lang);
    } catch (e) {}
  }

  function browserLangFallback() {
    var nav = navigator.language || navigator.userLanguage || '';
    return nav.toLowerCase().indexOf('en') === 0 ? 'en' : 'es';
  }

  function detectLangByIp() {
    return fetch('https://ipwho.is/', { cache: 'no-store' })
      .then(function (res) { return res.json(); })
      .then(function (data) {
        if (data && data.success && EN_COUNTRIES.has(data.country_code)) {
          return 'en';
        }
        return 'es';
      })
      .catch(function () {
        return browserLangFallback();
      });
  }

  function applyLang(lang) {
    var dict = T[lang] || T.es;
    document.documentElement.lang = lang;

    document.querySelectorAll('[data-i18n]').forEach(function (el) {
      var key = el.getAttribute('data-i18n');
      if (dict[key] != null) el.textContent = dict[key];
    });

    document.querySelectorAll('[data-i18n-placeholder]').forEach(function (el) {
      var key = el.getAttribute('data-i18n-placeholder');
      if (dict[key] != null) el.placeholder = dict[key];
    });

    document.querySelectorAll('[data-i18n-alt]').forEach(function (el) {
      var key = el.getAttribute('data-i18n-alt');
      if (dict[key] != null) el.alt = dict[key];
    });

    document.querySelectorAll('[data-i18n-aria]').forEach(function (el) {
      var key = el.getAttribute('data-i18n-aria');
      if (dict[key] != null) el.setAttribute('aria-label', dict[key]);
    });

    var title = document.querySelector('title');
    if (title && dict['meta.title']) title.textContent = dict['meta.title'];

    var desc = document.querySelector('meta[name="description"]');
    if (desc && dict['meta.description']) desc.setAttribute('content', dict['meta.description']);

    var ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle && dict['meta.ogTitle']) ogTitle.setAttribute('content', dict['meta.ogTitle']);

    var ogDesc = document.querySelector('meta[property="og:description"]');
    if (ogDesc && dict['meta.ogDescription']) ogDesc.setAttribute('content', dict['meta.ogDescription']);

    var twTitle = document.querySelector('meta[name="twitter:title"]');
    if (twTitle && dict['meta.ogTitle']) twTitle.setAttribute('content', dict['meta.ogTitle']);

    var twDesc = document.querySelector('meta[name="twitter:description"]');
    if (twDesc && dict['meta.twitterDescription']) twDesc.setAttribute('content', dict['meta.twitterDescription']);

    document.querySelectorAll('.lang-btn').forEach(function (btn) {
      var isActive = btn.getAttribute('data-lang') === lang;
      btn.classList.toggle('active', isActive);
      btn.setAttribute('aria-pressed', isActive ? 'true' : 'false');
    });

    window.__blLang = lang;
    window.__blDict = dict;
  }

  function initLangSwitcher() {
    document.querySelectorAll('.lang-btn').forEach(function (btn) {
      btn.addEventListener('click', function () {
        var lang = btn.getAttribute('data-lang');
        setStoredLang(lang);
        applyLang(lang);
      });
    });
  }

  function init() {
    initLangSwitcher();
    var stored = getStoredLang();
    if (stored) {
      applyLang(stored);
      return;
    }
    applyLang('es');
    detectLangByIp().then(function (lang) {
      if (!getStoredLang()) {
        applyLang(lang);
      }
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

  window.BirdieLabsI18n = { applyLang: applyLang, T: T };
})();
