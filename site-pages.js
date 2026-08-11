(() => {
  // Theme initialization
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme === 'light') {
    document.documentElement.classList.add('light-mode');
  } else {
    document.documentElement.classList.remove('light-mode');
  }

  const siteBase = 'https://www.jsncreative.studio';
  const pageKey = (window.location.pathname.split('/').pop() || 'index.html').toLowerCase();
  const pageConfigs = {
    'index.html': {
      description: 'JSN (Jsn Creative) is a full-service digital innovation studio founded by Muhammad Jawad M R. We build web applications, iOS & Android mobile apps, custom software, AI solutions, SEO services, UI/UX design, and operate 6 active tech ventures.',
      schemaType: 'WebSite',
      ogImage: `${siteBase}/social-preview.svg`,
      keywords: 'JSN, Jsn, JSN Creative, Jsn Creative, JSN Studio, JSN Tech, JSN Ventures, JSN Apps, Muhammad Jawad M R, Founder Jsn Creative, CEO Muhammad Jawad M R, Jawad JSN, Scholars Guide, Dexterity Learn, Work Mint, Nexio Tech, Livio Designs, Nexus Agents AI, Web Development, Website Development Agency, Mobile App Development, iOS App Development, Android App Development, Custom Software Development, Custom SaaS Engineering, AI Chatbot Solutions, AI Automation, UI/UX Design Studio, Technical SEO Services, Search Engine Optimization, Digital Marketing Agency, Video Editing Studio, Educational Consultancy, Bakery POS System, Restaurant POS Software, Hotel Management System, Gym Management Software',
    },
    'bakery-pos.html': {
      description: 'Bakery POS App by Jsn Creative — Complete point-of-sale software for bakeries with lifetime access, fast billing, inventory control, and daily sales tracking.',
      schemaType: 'Product',
      ogImage: `${siteBase}/social-preview.svg`,
      keywords: 'Bakery POS, Bakery POS App, Bakery POS System, Bakery Point of Sale Software, Bakery Billing App, Bakery Inventory Management, Jsn Creative Products, Muhammad Jawad M R, Bakery Software Lifetime Access',
    },
    'gym-management.html': {
      description: 'Gym Management App by Jsn Creative — Gym membership tracking, attendance logging, trainer scheduling, and payment renewal software with lifetime access.',
      schemaType: 'Product',
      ogImage: `${siteBase}/social-preview.svg`,
      keywords: 'Gym Management App, Gym Management System, Fitness Center Software, Member Attendance Tracking, Gym Membership Renewal App, Trainer Scheduling System, Jsn Creative, Muhammad Jawad M R',
    },
    'restaurant-pos.html': {
      description: 'Restaurant POS App by Jsn Creative — Comprehensive restaurant billing, table management, kitchen order tickets (KOT), and sales reporting software with lifetime access.',
      schemaType: 'Product',
      ogImage: `${siteBase}/social-preview.svg`,
      keywords: 'Restaurant POS, Restaurant POS App, Restaurant Billing System, KOT Management System, Kitchen Display Software, Table Management App, Restaurant Software Lifetime Access, Jsn Creative, Muhammad Jawad M R',
    },
    'hotel-management.html': {
      description: 'Hotel Management App by Jsn Creative — Unified hotel management software for guest bookings, front desk check-in, housekeeping status, and invoice generation with lifetime access.',
      schemaType: 'Product',
      ogImage: `${siteBase}/social-preview.svg`,
      keywords: 'Hotel Management App, Hotel Management System, Guest Booking Software, Front Desk Hotel Software, Housekeeping Tracker, Hotel Billing App, Jsn Creative, Muhammad Jawad M R',
    },
    'ebooks.html': {
      description: 'E-Books & Digital Content Platform by Jsn Creative — Curated digital publications, educational resources, and tech e-books with lifetime access.',
      schemaType: 'Product',
      ogImage: `${siteBase}/social-preview.svg`,
      keywords: 'E-Books Platform, Digital Content Delivery, Tech E-Books, Business Guides, Educational Books, Dexterity Learn, Jsn Creative, Muhammad Jawad M R',
    },
    'ai-chatbot.html': {
      description: 'AI Chatbot & Conversational AI Platform by Jsn Creative — Intelligent AI chatbot integration for website lead capture, 24/7 customer support, and business automation.',
      schemaType: 'Product',
      ogImage: `${siteBase}/social-preview.svg`,
      keywords: 'AI Chatbot, Website AI Chatbot, Conversational AI Platform, Lead Capture Chatbot, Customer Support Automation, Nexus Agents AI, Jsn Creative, Muhammad Jawad M R',
    },
    'web-development.html': {
      description: 'Web Development Services by Jsn Creative — Custom responsive websites, full-stack web applications, React/MERN stack solutions, and e-commerce platforms engineered for speed and conversion.',
      schemaType: 'Service',
      ogImage: `${siteBase}/social-preview.svg`,
      keywords: 'Web Development, Web Development Services, Full-Stack Web Development, Custom Website Development, Web Application Development, React Development Agency, MERN Stack Agency, SaaS Development, Jsn Creative, Muhammad Jawad M R',
    },
    'app-development.html': {
      description: 'Mobile App Development Services by Jsn Creative — Native iOS, Android, and cross-platform Flutter/React Native mobile applications built for seamless performance and scalability.',
      schemaType: 'Service',
      ogImage: `${siteBase}/social-preview.svg`,
      keywords: 'App Development, Mobile App Development, iOS App Development, Android App Development, Cross-Platform App Development, React Native Apps, Flutter Development, Jsn Creative, Muhammad Jawad M R',
    },
    'custom-software.html': {
      description: 'Custom Software Engineering Services by Jsn Creative — Enterprise software development, automated business workflows, cloud systems, and bespoke SaaS platforms.',
      schemaType: 'Service',
      ogImage: `${siteBase}/social-preview.svg`,
      keywords: 'Custom Software, Custom Software Development, Enterprise Software Engineering, SaaS Software Architecture, Business Workflow Automation, Bespoke Software Solutions, Jsn Creative, Muhammad Jawad M R',
    },
    'graphic-designing.html': {
      description: 'Graphic Design & Visual Identity Services by Jsn Creative — Premium logo design, brand guidelines, social media creative design, marketing banners, and visual assets.',
      schemaType: 'Service',
      ogImage: `${siteBase}/social-preview.svg`,
      keywords: 'Graphic Design, Graphic Design Services, Logo Design Studio, Brand Identity Design, Marketing Creative Design, Visual Branding Agency, Livio Designs, Jsn Creative, Muhammad Jawad M R',
    },
    'video-editing.html': {
      description: 'Professional Video Editing Services by Jsn Creative — High-converting promo videos, social media reels, YouTube editing, motion graphics, and corporate brand videos.',
      schemaType: 'Service',
      ogImage: `${siteBase}/social-preview.svg`,
      keywords: 'Video Editing, Video Editing Services, Commercial Video Editing, YouTube Video Editing, Reels & Shorts Editing, Motion Graphics Studio, Brand Video Production, Jsn Creative, Muhammad Jawad M R',
    },
    'ui-ux-design.html': {
      description: 'UI/UX Design Studio Services by Jsn Creative — User-centred interface design, interactive prototyping, wireframing, mobile UI design, and user experience optimization.',
      schemaType: 'Service',
      ogImage: `${siteBase}/social-preview.svg`,
      keywords: 'UI UX Design, UI UX Design Agency, User Interface Design, User Experience Studio, Mobile App UI Design, Web UI UX Prototyping, Wireframing Agency, Livio Designs, Jsn Creative, Muhammad Jawad M R',
    },
    'seo-services.html': {
      description: 'Search Engine Optimization (SEO) Services by Jsn Creative — Technical SEO audits, keyword research, on-page optimization, content strategy, and high-authority rank building.',
      schemaType: 'Service',
      ogImage: `${siteBase}/social-preview.svg`,
      keywords: 'SEO Services, Search Engine Optimization, Technical SEO Agency, On-Page SEO Optimization, Keyword Ranking Growth, Organic Traffic Strategy, Local SEO Services, Jsn Creative, Muhammad Jawad M R',
    },
    'ai-solutions.html': {
      description: 'AI Solutions & Machine Learning Integration by Jsn Creative — Custom AI models, intelligent process automation, workflow AI agents, LLM integrations, and predictive analytics.',
      schemaType: 'Service',
      ogImage: `${siteBase}/social-preview.svg`,
      keywords: 'AI Solutions, Artificial Intelligence Integration, Business AI Automation, AI Agents Studio, Machine Learning Solutions, Nexus Agents AI, LLM Integration, Jsn Creative, Muhammad Jawad M R',
    },
    'digital-marketing.html': {
      description: 'Digital Marketing & Growth Agency Services by Jsn Creative — Data-driven social media marketing, PPC ad campaigns, content marketing, lead generation, and brand growth.',
      schemaType: 'Service',
      ogImage: `${siteBase}/social-preview.svg`,
      keywords: 'Digital Marketing, Digital Marketing Agency, Social Media Marketing, Performance Marketing, Paid Ads Management, Content Marketing Strategy, Brand Growth Agency, Jsn Creative, Muhammad Jawad M R',
    },
    'educational-consultancy.html': {
      description: 'Educational Consultancy & Career Guidance by Jsn Creative — Strategic academic advising, career planning, institution consulting, and student guidance portals.',
      schemaType: 'Service',
      ogImage: `${siteBase}/social-preview.svg`,
      keywords: 'Educational Consultancy, Academic Career Guidance, Educational Consulting Agency, Student Mentorship, Scholars Guide, Career Advisory, Jsn Creative, Muhammad Jawad M R',
    },
    'contact.html': {
      description: 'Contact Jsn Creative & Founder Muhammad Jawad M R — Enquire about custom software development, mobile apps, AI solutions, SEO services, or product licensing via form, WhatsApp, or email.',
      schemaType: 'ContactPage',
      ogImage: `${siteBase}/social-preview.svg`,
      keywords: 'Contact Jsn Creative, Hire Jsn Creative, Contact Muhammad Jawad M R, Jsn Creative WhatsApp, Digital Studio Contact',
    },
    'privacy.html': {
      description: 'Privacy Policy — Learn how Jsn Creative protects user data, privacy standards, and website security.',
      schemaType: 'WebPage',
      ogImage: `${siteBase}/social-preview.svg`,
      keywords: 'Jsn Creative Privacy Policy, Data Protection, User Privacy Terms',
    },
    'terms.html': {
      description: 'Terms & Conditions — Terms of service for Jsn Creative website, software products, and consulting services.',
      schemaType: 'WebPage',
      ogImage: `${siteBase}/social-preview.svg`,
      keywords: 'Jsn Creative Terms of Service, Software Terms, Product Licensing Terms',
    },
  };

  const pageConfig = pageConfigs[pageKey] || pageConfigs['index.html'];
  const currentUrl = `${siteBase}/${pageKey === 'index.html' ? '' : pageKey}`;

  const upsertMeta = (selector, attributes) => {
    let element = document.head.querySelector(selector);
    if (!element) {
      element = document.createElement('meta');
      document.head.appendChild(element);
    }
    Object.entries(attributes).forEach(([key, value]) => element.setAttribute(key, value));
  };

  const upsertLink = (selector, attributes) => {
    let element = document.head.querySelector(selector);
    if (!element) {
      element = document.createElement('link');
      document.head.appendChild(element);
    }
    Object.entries(attributes).forEach(([key, value]) => element.setAttribute(key, value));
  };

  upsertMeta('meta[name="description"]', { name: 'description', content: pageConfig.description });
  if (pageConfig.keywords) {
    upsertMeta('meta[name="keywords"]', { name: 'keywords', content: pageConfig.keywords });
  }
  upsertMeta('meta[name="author"]', { name: 'author', content: 'Muhammad Jawad M R' });
  upsertMeta('meta[name="robots"]', { name: 'robots', content: 'index,follow,max-image-preview:large,max-snippet:-1,max-video-preview:-1' });
  upsertMeta('meta[name="theme-color"]', { name: 'theme-color', content: '#1a73e8' });
  upsertMeta('meta[name="application-name"]', { name: 'application-name', content: 'JSN' });
  upsertMeta('meta[property="og:type"]', { property: 'og:type', content: pageConfig.schemaType === 'Product' ? 'product' : pageConfig.schemaType === 'Service' ? 'article' : 'website' });
  upsertMeta('meta[property="og:site_name"]', { property: 'og:site_name', content: 'JSN | Jsn Creative' });
  upsertMeta('meta[property="og:title"]', { property: 'og:title', content: document.title });
  upsertMeta('meta[property="og:description"]', { property: 'og:description', content: pageConfig.description });
  upsertMeta('meta[property="og:url"]', { property: 'og:url', content: currentUrl });
  upsertMeta('meta[property="og:image"]', { property: 'og:image', content: pageConfig.ogImage });
  upsertMeta('meta[name="twitter:card"]', { name: 'twitter:card', content: 'summary_large_image' });
  upsertMeta('meta[name="twitter:title"]', { name: 'twitter:title', content: document.title });
  upsertMeta('meta[name="twitter:description"]', { name: 'twitter:description', content: pageConfig.description });
  upsertMeta('meta[name="twitter:image"]', { name: 'twitter:image', content: pageConfig.ogImage });
  upsertLink('link[rel="canonical"]', { rel: 'canonical', href: currentUrl });
  upsertLink('link[rel="icon"]', { rel: 'icon', href: 'favicon.svg', type: 'image/svg+xml' });
  upsertLink('link[rel="apple-touch-icon"]', { rel: 'apple-touch-icon', href: 'apple-touch-icon.svg' });

  const schemaGraphs = [];
  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    '@id': `${siteBase}/#organization`,
    name: 'Jsn Creative',
    alternateName: ['JSN', 'JSN Creative', 'JSN Studio', 'JSN Tech', 'JSN Ventures', 'Jsn Creative Studio'],
    url: siteBase,
    logo: `${siteBase}/favicon.svg`,
    image: `${siteBase}/social-preview.svg`,
    description: 'JSN (Jsn Creative) is a digital innovation studio founded by Muhammad Jawad M R, building business web applications, mobile apps, custom software, AI solutions, and incubating a portfolio of tech ventures.',
    founder: {
      '@type': 'Person',
      '@id': `${siteBase}/#founder`,
      name: 'Muhammad Jawad M R',
      givenName: 'Muhammad Jawad',
      familyName: 'M R',
      alternateName: ['Muhammad Jawad', 'Jawad M R', 'Jawad Jsn Creative', 'Founder of Jsn Creative'],
      jobTitle: 'Founder & CEO',
      worksFor: { '@id': `${siteBase}/#organization` },
      url: 'https://muhammadjawadmr.framer.website/',
      sameAs: [
        'https://muhammadjawadmr.framer.website/',
        'https://instagram.com/jsn_creative',
        'https://www.linkedin.com/company/jsncreative'
      ],
      knowsAbout: ['Web Development', 'Software Engineering', 'AI Automation', 'Product Management', 'SaaS Innovation', 'Digital Ventures']
    },
    subOrganization: [
      { '@type': 'Organization', name: 'Scholars Guide', url: 'https://scholars-guide.vercel.app/', description: 'Education & career guidance portal by Jsn Creative' },
      { '@type': 'Organization', name: 'Dexterity Learn', url: 'https://dexterity-learn.vercel.app/', description: 'Digital publishing & e-book learning platform by Jsn Creative' },
      { '@type': 'Organization', name: 'Work Mint', url: 'https://work-mint-one.vercel.app/', description: 'Freelance & recruitment workspace network by Jsn Creative' },
      { '@type': 'Organization', name: 'Nexio Tech', url: 'https://nexio-tech.vercel.app/', description: 'SaaS & modern software technology studio by Jsn Creative' },
      { '@type': 'Organization', name: 'Livio Designs', url: 'https://livio-designs.vercel.app/', description: 'Design & branding studio venture by Jsn Creative' },
      { '@type': 'Organization', name: 'Nexus Agents', url: 'https://nexus-agents-ai.vercel.app/', description: 'Autonomous AI agents & intelligent automation studio by Jsn Creative' }
    ],
    sameAs: ['https://instagram.com/jsn_creative', 'https://www.linkedin.com/company/jsncreative', 'https://muhammadjawadmr.framer.website/'],
    contactPoint: [{ '@type': 'ContactPoint', telephone: '+91-72043-51696', contactType: 'sales', availableLanguage: ['English'] }],
    knowsAbout: ['Web Development', 'App Development', 'Custom Software', 'Artificial Intelligence Integration', 'Search Engine Optimization', 'UI/UX Design', 'Digital Marketing']
  };

  if (pageConfig.schemaType === 'WebSite') {
    schemaGraphs.push(organizationSchema);
    schemaGraphs.push({
      '@context': 'https://schema.org',
      '@type': 'WebSite',
      '@id': `${siteBase}/#website`,
      name: 'Jsn Creative',
      url: siteBase,
      description: pageConfig.description,
      publisher: { '@id': `${siteBase}/#organization` }
    });

    // Dynamic FAQ Page Schema for GEO optimization
    schemaGraphs.push({
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      'mainEntity': [
        {
          '@type': 'Question',
          'name': 'What services does Jsn Creative offer?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'Jsn Creative offers a full suite of digital innovation services including custom Web Development, iOS & Android App Development, Custom Enterprise Software, AI Solutions & Integration, UI/UX Design, SEO Services, Video Editing, Digital Marketing, and Educational Consultancy.'
          }
        },
        {
          '@type': 'Question',
          'name': 'Does Jsn Creative offer lifetime access for products?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'Yes! Jsn Creative is known for its custom pricing model offering lifetime access to our industry-specific products (such as Bakery POS, Gym Management, and Restaurant POS) with a single one-time payment and no recurring subscriptions.'
          }
        },
        {
          '@type': 'Question',
          'name': 'Who is the founder of Jsn Creative?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'Jsn Creative was founded by Muhammad Jawad M R, who serves as the Founder & CEO. You can learn more about his work on his official website at https://muhammadjawadmr.framer.website/.'
          }
        },
        {
          '@type': 'Question',
          'name': 'How can I get in touch with Jsn Creative?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'You can contact Jsn Creative via our contact page form, directly email us at jsn.creators@gmail.com, or message/call us on WhatsApp at +91-72043-51696.'
          }
        }
      ]
    });
  } else if (pageConfig.schemaType === 'ContactPage') {
    schemaGraphs.push({
      '@context': 'https://schema.org',
      '@type': 'ContactPage',
      '@id': `${currentUrl}#webpage`,
      name: document.title,
      url: currentUrl,
      description: pageConfig.description,
      mainEntity: { '@id': `${siteBase}/#organization` }
    });
  } else if (pageConfig.schemaType === 'Product') {
    const isSoftware = pageKey.includes('-pos') || pageKey.includes('management') || pageKey.includes('chatbot');
    schemaGraphs.push({
      '@context': 'https://schema.org',
      '@type': isSoftware ? ['SoftwareApplication', 'Product'] : 'Product',
      '@id': `${currentUrl}#product`,
      name: document.title.replace(' | Jsn Creative', '').replace(' | JSN CREATIVE', '').replace(' | JSN (Jsn Creative)', ''),
      description: pageConfig.description,
      url: currentUrl,
      image: `${siteBase}/social-preview.svg`,
      brand: { '@type': 'Brand', name: 'Jsn Creative' },
      publisher: { '@id': `${siteBase}/#organization` },
      ...(isSoftware ? {
        applicationCategory: 'BusinessApplication',
        operatingSystem: 'Web Browser, Windows, macOS, Android, iOS'
      } : {}),
      offers: {
        '@type': 'Offer',
        priceCurrency: 'INR',
        price: '0',
        priceValidUntil: '2027-12-31',
        availability: 'https://schema.org/InStock',
        url: currentUrl,
        seller: { '@id': `${siteBase}/#organization` }
      }
    });
  } else if (pageConfig.schemaType === 'Service') {
    schemaGraphs.push({
      '@context': 'https://schema.org',
      '@type': 'Service',
      '@id': `${currentUrl}#service`,
      name: document.title.replace(' | Jsn Creative', '').replace(' | JSN CREATIVE', '').replace(' | JSN (Jsn Creative)', ''),
      description: pageConfig.description,
      url: currentUrl,
      provider: { '@id': `${siteBase}/#organization` },
      areaServed: {
        '@type': 'Country',
        name: 'Worldwide'
      }
    });
  }

  const breadcrumbItems = [
    { name: 'Home', url: siteBase },
  ];
  if (pageKey !== 'index.html') {
    breadcrumbItems.push({ name: document.title.replace(' | Jsn Creative', '').replace(' | JSN CREATIVE', ''), url: currentUrl });
    schemaGraphs.push({
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      '@id': `${currentUrl}/#breadcrumb`,
      itemListElement: breadcrumbItems.map((item, index) => ({
        '@type': 'ListItem',
        position: index + 1,
        name: item.name,
        item: item.url
      })),
    });
  }

  const existingSchema = document.head.querySelector('script[type="application/ld+json"]');
  if (existingSchema) existingSchema.remove();
  const schemaScript = document.createElement('script');
  schemaScript.type = 'application/ld+json';
  schemaScript.textContent = JSON.stringify(schemaGraphs.length === 1 ? schemaGraphs[0] : schemaGraphs, null, 2);
  document.head.appendChild(schemaScript);

  // Inject theme toggle button
  const toggleTheme = () => {
    const isLight = document.documentElement.classList.toggle('light-mode');
    localStorage.setItem('theme', isLight ? 'light' : 'dark');
  };

  const navActions = document.querySelector('.nav-actions, .page-actions');
  if (navActions && !navActions.querySelector('.theme-toggle-btn')) {
    const btn = document.createElement('button');
    btn.className = 'theme-toggle-btn';
    btn.type = 'button';
    btn.setAttribute('aria-label', 'Toggle light/dark mode');
    btn.innerHTML = `
      <svg class="sun-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="5"></circle><line x1="12" y1="1" x2="12" y2="3"></line><line x1="12" y1="21" x2="12" y2="23"></line><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line><line x1="1" y1="12" x2="3" y2="12"></line><line x1="21" y1="12" x2="23" y2="12"></line><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line></svg>
      <svg class="moon-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>
    `;
    btn.addEventListener('click', toggleTheme);
    navActions.insertBefore(btn, navActions.firstChild);
  }

  // Inject footer branding
  if (pageKey !== 'index.html') {
    const footerP = document.querySelector('footer.footer p, footer p');
    if (footerP && !footerP.querySelector('.footer-highlight')) {
      const highlightSpan = document.createElement('span');
      highlightSpan.className = 'footer-highlight';
      highlightSpan.innerHTML = `• Founder & CEO — <a href="https://muhammadjawadmr.framer.website/" target="_blank" rel="noopener">Muhammad Jawad M R</a>`;
      footerP.appendChild(highlightSpan);
    }

    const footerElement = document.querySelector('footer.footer, footer');
    if (footerElement && !footerElement.querySelector('.footer-socials')) {
      const socialRow = document.createElement('div');
      socialRow.className = 'footer-socials';
      socialRow.style.justifyContent = 'center';
      socialRow.style.marginTop = '16px';
      socialRow.innerHTML = `
        <a href="https://instagram.com/jsn_creative" target="_blank" rel="noopener" aria-label="Instagram">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
        </a>
        <a href="https://www.linkedin.com/company/jsncreative" target="_blank" rel="noopener" aria-label="LinkedIn">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
        </a>
        <a href="mailto:jsn.creators@gmail.com" aria-label="Email">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
        </a>
      `;
      footerElement.appendChild(socialRow);
    }
  }

  const images = document.querySelectorAll('img');
  images.forEach((image) => {
    const isHeroImage = Boolean(image.closest('.hero-art'));
    if (isHeroImage) {
      image.loading = 'eager';
      image.fetchPriority = 'high';
      image.decoding = 'async';
    } else {
      image.loading = image.loading || 'lazy';
      image.decoding = 'async';
    }
  });



  const toggle = document.querySelector('[data-menu-toggle]');
  const drawer = document.querySelector('[data-mobile-drawer]');
  const backdrop = document.querySelector('[data-drawer-backdrop]');
  const closeBtn = document.querySelector('[data-menu-close]');

  const setOpen = (open) => {
    if (!toggle || !drawer || !backdrop) return;
    drawer.classList.toggle('open', open);
    backdrop.classList.toggle('open', open);
    document.body.classList.toggle('sidebar-open', open);
    toggle.setAttribute('aria-expanded', String(open));
    drawer.setAttribute('aria-hidden', String(!open));

    const bNav = document.querySelector('.bottom-nav');
    if (bNav) {
      bNav.style.setProperty('display', open ? 'none' : '', 'important');
      bNav.style.setProperty('visibility', open ? 'hidden' : '', 'important');
    }
  };

  if (toggle) {
    toggle.addEventListener('click', () => setOpen(!drawer.classList.contains('open')));
  }
  if (closeBtn) closeBtn.addEventListener('click', () => setOpen(false));
  if (backdrop) backdrop.addEventListener('click', () => setOpen(false));
  if (drawer) drawer.querySelectorAll('a').forEach((link) => link.addEventListener('click', () => setOpen(false)));

  const tabs = document.querySelectorAll('.tab-link');
  const navLinks = document.querySelectorAll('.nav-links a');
  const sidebar = document.getElementById('mobileSidebar');
  const mobileBackdrop = document.getElementById('mobileBackdrop');
  const sidebarClose = document.querySelector('.sidebar-close');
  const productsSection = document.getElementById('products');
  const servicesSection = document.getElementById('services');
  const venturesSection = document.getElementById('ventures');
  const sectionsOrder = ['products', 'services', 'ventures'];

  if (productsSection && servicesSection && productsSection.compareDocumentPosition(servicesSection) & Node.DOCUMENT_POSITION_FOLLOWING) {
    servicesSection.parentNode.insertBefore(productsSection, servicesSection);
  }

  // Inject bottom navigation bar dynamically
  const injectBottomNav = () => {
    if (document.querySelector('.bottom-nav')) return;

    const nav = document.createElement('div');
    nav.className = 'bottom-nav';

    const path = window.location.pathname.split('/').pop() || 'index.html';
    const isIndex = path === 'index.html' || path === '' || path === 'index';

    const items = [
      { name: 'Home', href: isIndex ? '#hero' : 'index.html', icon: 'home', key: 'home' },
      { name: 'Products', href: isIndex ? '#products' : 'index.html#products', icon: 'package', key: 'products' },
      { name: 'Services', href: isIndex ? '#services' : 'index.html#services', icon: 'briefcase', key: 'services' },
      { name: 'Ventures', href: isIndex ? '#ventures' : 'index.html#ventures', icon: 'rocket', key: 'ventures' },
      { name: 'Contact', href: 'contact.html', icon: 'phone', key: 'contact' }
    ];

    nav.innerHTML = items.map(item => {
      let isActive = false;
      if (item.key === 'contact' && path.includes('contact.html')) {
        isActive = true;
      } else if (item.key === 'products' && (path.includes('pos') || path.includes('gym') || path.includes('hotel') || path.includes('ebook') || path.includes('chatbot'))) {
        isActive = true;
      } else if (item.key === 'services' && !isIndex && !path.includes('contact.html') && !path.includes('privacy.html') && !path.includes('terms.html')) {
        isActive = true;
      } else if (item.key === 'home' && isIndex && window.scrollY < 200) {
        isActive = true;
      }

      return `
        <a href="${item.href}" class="bottom-nav-item ${isActive ? 'active' : ''}" data-section="${item.key}">
          <i data-lucide="${item.icon}"></i>
          <span>${item.name}</span>
        </a>
      `;
    }).join('');

    document.body.appendChild(nav);
  };

  injectBottomNav();

  // Initialize Lucide Icons with robust SVG fallback map
  const svgMap = {
    'package': `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-package"><path d="m7.5 4.27 9 5.15"></path><path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z"></path><path d="m3.3 7 8.7 5 8.7-5"></path><path d="M12 22V12"></path></svg>`,
    'briefcase': `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-briefcase"><path d="M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path><rect width="20" height="14" x="2" y="6" rx="2"></rect></svg>`,
    'rocket': `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-rocket"><path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"></path><path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-3.05 11a22.35 22.35 0 0 1-3.95 2z"></path><path d="M9 12H4.5s.55-3.03 2-4c1.62-1.08 5 0 5 0"></path><path d="M12 15v4.5s3.03-.55 4-2c1.08-1.62 0-5 0-5"></path></svg>`,
    'help-circle': `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-help-circle"><circle cx="12" cy="12" r="10"></circle><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path><line x1="12" y1="17" x2="12.01" y2="17"></line></svg>`,
    'arrow-right': `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-arrow-right"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>`,
    'home': `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-home"><path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path><polyline points="9 22 9 12 15 12 15 22"></polyline></svg>`,
    'phone': `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-phone"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>`,
    'dumbbell': `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-dumbbell"><path d="m6.5 6.5 11 11"></path><path d="m21 21-1-1"></path><path d="m3 3 1 1"></path><path d="m18 22 4-4"></path><path d="m2 6 4-4"></path><path d="m3 10 7-7"></path><path d="m14 21 7-7"></path></svg>`,
    'utensils': `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-utensils"><path d="M18 2v20"></path><path d="M21 15V2v0a5 5 0 0 0-5 5v6c0 1.1.9 2 2 2h3Zm0 0v7"></path><path d="M3 2v7c0 1.1.9 2 2 2h4a2 2 0 0 0 2-2V2"></path><path d="M7 2v20"></path></svg>`,
    'building': `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-building"><rect width="16" height="20" x="4" y="2" rx="2" ry="2"></rect><path d="M9 22v-4h6v4"></path><path d="M8 6h.01"></path><path d="M16 6h.01"></path><path d="M12 6h.01"></path><path d="M12 10h.01"></path><path d="M12 14h.01"></path><path d="M16 10h.01"></path><path d="M16 14h.01"></path><path d="M8 10h.01"></path><path d="M8 14h.01"></path></svg>`,
    'book-open': `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-book-open"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path></svg>`,
    'palette': `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-palette"><circle cx="13.5" cy="6.5" r=".5" fill="currentColor"></circle><circle cx="17.5" cy="10.5" r=".5" fill="currentColor"></circle><circle cx="8.5" cy="7.5" r=".5" fill="currentColor"></circle><circle cx="6.5" cy="12.5" r=".5" fill="currentColor"></circle><path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.92 0 1.7-.68 1.83-1.6.09-.64.44-1.2.98-1.54.54-.34 1.23-.42 1.84-.21.84.28 1.75-.12 2.16-.9.6-1.12.38-2.52-.51-3.39l-1.02-.99c-.64-.63-.98-1.5-.95-2.4.07-2.18 1.93-3.96 4.11-3.96h.06C21.36 7 22 6.22 21.6 5.3 20.48 2.76 16.58 2 12 2z"></path></svg>`,
    'graduation-cap': `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-graduation-cap"><path d="M22 10v6M2 10l10-5 10 5-10 5z"></path><path d="M6 12v5c3 3 9 3 12 0v-5"></path></svg>`,
    'megaphone': `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-megaphone"><path d="m3 11 18-5v12L3 13v-2z"></path><path d="M11.6 16.8a3 3 0 1 1-5.8-1.6"></path></svg>`,
    'search': `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-search"><circle cx="11" cy="11" r="8"></circle><path d="m21 21-4.3-4.3"></path></svg>`,
    'film': `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-film"><rect width="18" height="18" x="3" y="3" rx="2"></rect><path d="M7 3v18"></path><path d="M17 3v18"></path><path d="M3 7.5h4"></path><path d="M3 12h18"></path><path d="M3 16.5h4"></path><path d="M17 7.5h4"></path><path d="M17 16.5h4"></path></svg>`,
    'layout': `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-layout"><rect width="18" height="18" x="3" y="3" rx="2" ry="2"></rect><line x1="3" y1="9" x2="21" y2="9"></line><line x1="9" y1="21" x2="9" y2="9"></line></svg>`
  };

  const renderIcons = () => {
    if (typeof lucide !== 'undefined' && lucide.createIcons) {
      lucide.createIcons();
    }
    document.querySelectorAll('i[data-lucide]').forEach((i) => {
      const name = i.getAttribute('data-lucide');
      if (name && svgMap[name]) {
        const temp = document.createElement('div');
        temp.innerHTML = svgMap[name];
        const svg = temp.firstElementChild;
        if (svg) {
          i.parentNode.replaceChild(svg, i);
        }
      }
    });
  };

  renderIcons();
  setTimeout(renderIcons, 200);

  function updateActiveState() {
    let current = '';
    sectionsOrder.forEach((id) => {
      const element = document.getElementById(id);
      if (element && window.scrollY >= element.offsetTop - 120) current = id;
    });

    tabs.forEach((tab) => {
      tab.classList.toggle('active', tab.getAttribute('href') === `#${current}`);
    });

    navLinks.forEach((link) => {
      const href = link.getAttribute('href').replace('#', '');
      link.classList.toggle('active', href === current);
    });

    // Update bottom nav active state
    const bottomItems = document.querySelectorAll('.bottom-nav-item');
    bottomItems.forEach((item) => {
      const section = item.getAttribute('data-section');
      if (section === 'contact') return;

      let isActive = false;
      if (section === 'home' && current === '') {
        isActive = true;
      } else if (section === current) {
        isActive = true;
      }
      item.classList.toggle('active', isActive);
    });
  }

  let lastScrollY = window.scrollY;
  function handleNavVisibilityOnScroll() {
    const bNav = document.querySelector('.bottom-nav');
    if (!bNav) return;

    // Do not hide if mobile sidebar is open
    if (document.body.classList.contains('sidebar-open')) return;

    const currentScrollY = window.scrollY;

    // Show nav if near top of page (less than 60px) or scrolling up
    if (currentScrollY <= 60 || currentScrollY < lastScrollY - 5) {
      bNav.classList.remove('nav-hidden');
    } else if (currentScrollY > lastScrollY + 5 && currentScrollY > 100) {
      // Hide nav when scrolling down past top threshold
      bNav.classList.add('nav-hidden');
    }

    lastScrollY = currentScrollY;
  }

  // Ensure bottom nav is restored when any nav item is clicked
  document.addEventListener('click', (e) => {
    if (e.target.closest('.bottom-nav-item')) {
      const bNav = document.querySelector('.bottom-nav');
      if (bNav) bNav.classList.remove('nav-hidden');
    }
  });

  // Auto-scroll controller with touch & mouse drag support for .icon-scroll
  const initIconScroll = () => {
    const scrollContainer = document.querySelector('.icon-scroll');
    const scrollTrack = document.querySelector('.icon-track');
    if (!scrollContainer || !scrollTrack) return;

    let isInteracting = false;
    let resumeTimeout = null;
    let isMouseDown = false;
    let startX = 0;
    let scrollLeftStart = 0;
    const speed = 0.8; // Smooth pixel speed per frame

    const autoScroll = () => {
      if (!isInteracting && !isMouseDown) {
        scrollContainer.scrollLeft += speed;
        // Seamless loop wrap when scroll reaches half of track scrollWidth
        const halfWidth = scrollTrack.scrollWidth / 2;
        if (halfWidth > 0 && scrollContainer.scrollLeft >= halfWidth) {
          scrollContainer.scrollLeft -= halfWidth;
        }
      }
      requestAnimationFrame(autoScroll);
    };

    const pauseScroll = () => {
      isInteracting = true;
      if (resumeTimeout) clearTimeout(resumeTimeout);
    };

    const resumeScrollWithDelay = (delay = 2000) => {
      if (resumeTimeout) clearTimeout(resumeTimeout);
      resumeTimeout = setTimeout(() => {
        isInteracting = false;
      }, delay);
    };

    // Touch events for mobile swiping
    scrollContainer.addEventListener('touchstart', () => pauseScroll(), { passive: true });
    scrollContainer.addEventListener('touchend', () => resumeScrollWithDelay(1500), { passive: true });
    scrollContainer.addEventListener('touchcancel', () => resumeScrollWithDelay(1500), { passive: true });

    // Mouse drag support for desktop
    scrollContainer.addEventListener('mousedown', (e) => {
      isMouseDown = true;
      pauseScroll();
      startX = e.pageX - scrollContainer.offsetLeft;
      scrollLeftStart = scrollContainer.scrollLeft;
    });

    scrollContainer.addEventListener('mousemove', (e) => {
      if (!isMouseDown) return;
      e.preventDefault();
      const x = e.pageX - scrollContainer.offsetLeft;
      const walk = (x - startX) * 1.5;
      scrollContainer.scrollLeft = scrollLeftStart - walk;
    });

    scrollContainer.addEventListener('mouseup', () => {
      if (isMouseDown) {
        isMouseDown = false;
        resumeScrollWithDelay(1500);
      }
    });

    scrollContainer.addEventListener('mouseleave', () => {
      if (isMouseDown) {
        isMouseDown = false;
        resumeScrollWithDelay(1500);
      } else {
        resumeScrollWithDelay(1000);
      }
    });

    // Mouse hover pause
    scrollContainer.addEventListener('mouseenter', () => pauseScroll());

    // Wheel event (horizontal trackpad/mouse wheel scroll)
    scrollContainer.addEventListener('wheel', () => {
      pauseScroll();
      resumeScrollWithDelay(2000);
    }, { passive: true });

    // Start loop
    requestAnimationFrame(autoScroll);
  };

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initIconScroll);
  } else {
    initIconScroll();
  }

  updateActiveState();
})();