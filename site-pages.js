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
      description: 'Jsn Creative builds business websites, web apps, mobile apps, custom software, AI solutions, SEO services, and design-led digital products.',
      schemaType: 'WebSite',
      ogImage: `${siteBase}/social-preview.svg`,
      keywords: 'Web Development, Website Development, Mobile App Development, Software Development, Custom Software, React Development, MERN Stack Development, UI/UX Design, AI Solutions, SEO Services, Business Websites, Digital Solutions, Jsn Creative',
    },
    'bakery-pos.html': { description: 'Bakery POS App with lifetime access, billing, inventory, and sales tracking for bakeries.', schemaType: 'Product', ogImage: `${siteBase}/social-preview.svg` },
    'gym-management.html': { description: 'Gym Management App with memberships, attendance, trainer scheduling, and lifetime access.', schemaType: 'Product', ogImage: `${siteBase}/social-preview.svg` },
    'restaurant-pos.html': { description: 'Restaurant POS App for billing, kitchen flow, table management, and lifetime access.', schemaType: 'Product', ogImage: `${siteBase}/social-preview.svg` },
    'hotel-management.html': { description: 'Hotel Management App for bookings, housekeeping, and front desk coordination.', schemaType: 'Product', ogImage: `${siteBase}/social-preview.svg` },
    'ebooks.html': { description: 'E-Books digital product page with lifetime access and clear digital content delivery.', schemaType: 'Product', ogImage: `${siteBase}/social-preview.svg` },
    'ai-chatbot.html': { description: 'AI Chatbot product page with lead capture, automation, and lifetime access.', schemaType: 'Product', ogImage: `${siteBase}/social-preview.svg` },
    'web-development.html': { description: 'Web Development service page for responsive business websites and modern web applications.', schemaType: 'Service', ogImage: `${siteBase}/social-preview.svg` },
    'app-development.html': { description: 'App Development service page for mobile apps built for iOS and Android.', schemaType: 'Service', ogImage: `${siteBase}/social-preview.svg` },
    'custom-software.html': { description: 'Custom Software service page for tailored business workflows and automation.', schemaType: 'Service', ogImage: `${siteBase}/social-preview.svg` },
    'graphic-designing.html': { description: 'Graphic Designing service page for branding, social creatives, and visual identity.', schemaType: 'Service', ogImage: `${siteBase}/social-preview.svg` },
    'video-editing.html': { description: 'Video Editing service page for reels, ads, and polished brand content.', schemaType: 'Service', ogImage: `${siteBase}/social-preview.svg` },
    'ui-ux-design.html': { description: 'UI/UX Design service page for clear, accessible, and user-centred interfaces.', schemaType: 'Service', ogImage: `${siteBase}/social-preview.svg` },
    'seo-services.html': { description: 'SEO Services page for technical SEO, content optimization, and search visibility.', schemaType: 'Service', ogImage: `${siteBase}/social-preview.svg` },
    'ai-solutions.html': { description: 'AI Solutions page for automation, chatbots, and intelligent business integrations.', schemaType: 'Service', ogImage: `${siteBase}/social-preview.svg` },
    'digital-marketing.html': { description: 'Digital Marketing service page for campaigns, content, and audience growth.', schemaType: 'Service', ogImage: `${siteBase}/social-preview.svg` },
    'educational-consultancy.html': { description: 'Educational Consultancy page for guidance, planning, and academic support.', schemaType: 'Service', ogImage: `${siteBase}/social-preview.svg` },
    'contact.html': { description: 'Contact Jsn Creative by form, email, WhatsApp, or call for project and product enquiries.', schemaType: 'ContactPage', ogImage: `${siteBase}/social-preview.svg` },
    'privacy.html': { description: 'Privacy policy for Jsn Creative website visitors and form submissions.', schemaType: 'WebPage', ogImage: `${siteBase}/social-preview.svg` },
    'terms.html': { description: 'Terms and conditions for using Jsn Creative website, products, and services.', schemaType: 'WebPage', ogImage: `${siteBase}/social-preview.svg` },
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
  upsertMeta('meta[name="robots"]', { name: 'robots', content: 'index,follow,max-image-preview:large,max-snippet:-1,max-video-preview:-1' });
  upsertMeta('meta[name="theme-color"]', { name: 'theme-color', content: '#1a73e8' });
  upsertMeta('meta[property="og:type"]', { property: 'og:type', content: pageConfig.schemaType === 'Product' ? 'product' : pageConfig.schemaType === 'Service' ? 'article' : 'website' });
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
    url: siteBase,
    logo: `${siteBase}/favicon.svg`,
    image: `${siteBase}/social-preview.svg`,
    description: 'Jsn Creative is a digital innovation studio building business websites, web apps, mobile apps, custom software, AI solutions, SEO services, and design-led digital products.',
    founder: {
      '@type': 'Person',
      name: 'Muhammad Jawad M R',
      jobTitle: 'Founder & CEO',
      url: 'https://muhammadjawadmr.framer.website/',
      sameAs: ['https://muhammadjawadmr.framer.website/']
    },
    sameAs: ['https://muhammadjawadmr.framer.website/'],
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
      publisher: { '@id': `${siteBase}/#organization` },
      potentialAction: {
        '@type': 'SearchAction',
        target: {
          '@type': 'EntryPoint',
          urlTemplate: `${siteBase}/contact.html?query={search_term_string}`
        },
        'query-input': 'required name=search_term_string'
      }
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
      '@id': `${currentUrl}/#webpage`,
      name: document.title,
      url: currentUrl,
      description: pageConfig.description,
      mainEntity: { '@id': `${siteBase}/#organization` }
    });
  } else if (pageConfig.schemaType === 'Product') {
    schemaGraphs.push({
      '@context': 'https://schema.org',
      '@type': 'Product',
      name: document.title.replace(' | Jsn Creative', '').replace(' | JSN CREATIVE', ''),
      description: pageConfig.description,
      image: `${siteBase}/social-preview.svg`,
      brand: { '@type': 'Brand', name: 'Jsn Creative' },
      offers: {
        '@type': 'Offer',
        priceCurrency: 'INR',
        price: '0',
        priceValidUntil: '2027-12-31',
        availability: 'https://schema.org/InStock',
        url: currentUrl,
        seller: { '@type': 'Organization', name: 'Jsn Creative' }
      }
    });
  } else if (pageConfig.schemaType === 'Service') {
    schemaGraphs.push({
      '@context': 'https://schema.org',
      '@type': 'Service',
      name: document.title.replace(' | Jsn Creative', '').replace(' | JSN CREATIVE', ''),
      description: pageConfig.description,
      provider: { '@id': `${siteBase}/#organization` },
      areaServed: {
        '@type': 'Country',
        name: 'India'
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
      highlightSpan.innerHTML = `Founder & CEO — <a href="https://muhammadjawadmr.framer.website/" target="_blank" rel="noopener">Muhammad Jawad M R</a>`;
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

  // Initialize Lucide Icons
  if (typeof lucide !== 'undefined') {
    lucide.createIcons();
  }

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

  window.addEventListener('scroll', updateActiveState);
  updateActiveState();
})();