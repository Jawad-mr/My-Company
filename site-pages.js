(() => {
  const siteBase = 'https://creative.vercel.app';
  const pageKey = (window.location.pathname.split('/').pop() || 'index.html').toLowerCase();
  const pageConfigs = {
    'index.html': {
      description: 'JSN Creative builds business websites, web apps, mobile apps, custom software, AI solutions, SEO services, and design-led digital products.',
      schemaType: 'WebSite',
      ogImage: `${siteBase}/social-preview.svg`,
      keywords: 'Web Development, Website Development, Mobile App Development, Software Development, Custom Software, React Development, MERN Stack Development, UI/UX Design, AI Solutions, SEO Services, Business Websites, Digital Solutions, JSN Creative',
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
    'contact.html': { description: 'Contact JSN Creative by form, email, WhatsApp, or call for project and product enquiries.', schemaType: 'ContactPage', ogImage: `${siteBase}/social-preview.svg` },
    'privacy.html': { description: 'Privacy policy for JSN Creative website visitors and form submissions.', schemaType: 'WebPage', ogImage: `${siteBase}/social-preview.svg` },
    'terms.html': { description: 'Terms and conditions for using JSN Creative website, products, and services.', schemaType: 'WebPage', ogImage: `${siteBase}/social-preview.svg` },
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
  upsertLink('link[rel="icon"]', { rel: 'icon', href: '/favicon.svg', type: 'image/svg+xml' });
  upsertLink('link[rel="apple-touch-icon"]', { rel: 'apple-touch-icon', href: '/apple-touch-icon.svg' });

  const schemaGraphs = [];
  if (pageConfig.schemaType === 'WebSite') {
    schemaGraphs.push({
      '@context': 'https://schema.org',
      '@type': 'Organization',
      name: 'JSN Creative',
      url: siteBase,
      logo: `${siteBase}/favicon.svg`,
      sameAs: [],
      contactPoint: [{ '@type': 'ContactPoint', telephone: '+91-72043-51696', contactType: 'sales', availableLanguage: ['English'] }],
    });
    schemaGraphs.push({
      '@context': 'https://schema.org',
      '@type': 'WebSite',
      name: 'JSN Creative',
      url: siteBase,
    });
  } else if (pageConfig.schemaType === 'ContactPage') {
    schemaGraphs.push({
      '@context': 'https://schema.org',
      '@type': 'ContactPage',
      name: document.title,
      url: currentUrl,
      mainEntity: { '@type': 'Organization', name: 'JSN Creative' },
    });
  } else if (pageConfig.schemaType === 'Product') {
    schemaGraphs.push({
      '@context': 'https://schema.org',
      '@type': 'Product',
      name: document.title.replace(' | JSN Creative', ''),
      description: pageConfig.description,
      brand: { '@type': 'Brand', name: 'JSN Creative' },
      offers: { '@type': 'Offer', priceCurrency: 'INR', price: '0', availability: 'https://schema.org/InStock', url: currentUrl },
    });
  } else if (pageConfig.schemaType === 'Service') {
    schemaGraphs.push({
      '@context': 'https://schema.org',
      '@type': 'Service',
      name: document.title.replace(' | JSN Creative', ''),
      description: pageConfig.description,
      provider: { '@type': 'Organization', name: 'JSN Creative', url: siteBase },
      areaServed: 'IN',
    });
  }

  const breadcrumbItems = [
    { name: 'Home', url: siteBase },
  ];
  if (pageKey !== 'index.html') {
    breadcrumbItems.push({ name: document.title.replace(' | JSN Creative', ''), url: currentUrl });
    schemaGraphs.push({
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: breadcrumbItems.map((item, index) => ({ '@type': 'ListItem', position: index + 1, name: item.name, item: item.url })),
    });
  }

  const existingSchema = document.head.querySelector('script[type="application/ld+json"]');
  if (existingSchema) existingSchema.remove();
  const schemaScript = document.createElement('script');
  schemaScript.type = 'application/ld+json';
  schemaScript.textContent = JSON.stringify(schemaGraphs.length === 1 ? schemaGraphs[0] : schemaGraphs, null, 2);
  document.head.appendChild(schemaScript);

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

  const loader = document.createElement('div');
  loader.className = 'site-loader';
  loader.innerHTML = `
    <div class="site-loader-inner">
      <div class="site-loader-mark">JSN CREATIVE</div>
      <div class="site-loader-sub">Loading creative experience</div>
    </div>
  `;
  document.body.prepend(loader);

  const hideLoader = () => {
    loader.classList.add('hidden');
    window.setTimeout(() => loader.remove(), 450);
  };

  if (document.readyState === 'complete') {
    window.setTimeout(hideLoader, 900);
  } else {
    window.addEventListener('load', () => window.setTimeout(hideLoader, 900), { once: true });
  }

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
  const backdrop = document.getElementById('mobileBackdrop');
  const sidebarClose = document.querySelector('.sidebar-close');
  const productsSection = document.getElementById('products');
  const servicesSection = document.getElementById('services');
  const venturesSection = document.getElementById('ventures');
  const sectionsOrder = ['products', 'services', 'ventures'];

  if (productsSection && servicesSection && productsSection.compareDocumentPosition(servicesSection) & Node.DOCUMENT_POSITION_FOLLOWING) {
    servicesSection.parentNode.insertBefore(productsSection, servicesSection);
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
  }

  window.addEventListener('scroll', updateActiveState);
  updateActiveState();
})();