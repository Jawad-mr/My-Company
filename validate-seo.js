const fs = require('fs');
const path = require('path');

const rootDir = __dirname;
const siteBase = 'https://www.jsncreative.studio';

const htmlFiles = [
  'index.html',
  '404.html',
  'bakery-pos.html',
  'gym-management.html',
  'restaurant-pos.html',
  'hotel-management.html',
  'ebooks.html',
  'ai-chatbot.html',
  'web-development.html',
  'app-development.html',
  'custom-software.html',
  'graphic-designing.html',
  'video-editing.html',
  'ui-ux-design.html',
  'seo-services.html',
  'ai-solutions.html',
  'digital-marketing.html',
  'educational-consultancy.html',
  'contact.html',
  'privacy.html',
  'terms.html',
];

const results = {
  totalFiles: htmlFiles.length,
  missingTitles: [],
  shortOrLongTitles: [],
  missingDescriptions: [],
  shortOrLongDescriptions: [],
  missingCanonicals: [],
  invalidCanonicals: [],
  multipleOrZeroH1s: [],
  imagesMissingAlt: [],
  imagesMissingDimensions: [],
  brokenInternalLinks: [],
  duplicateTitles: {},
  duplicateDescriptions: {},
  sitemapErrors: [],
  robotsErrors: []
};

const titlesSeen = new Map();
const descsSeen = new Map();

console.log('==================================================');
console.log('   JSN CREATIVE ENTERPRISE SEO VALIDATOR V2       ');
console.log('==================================================\n');

htmlFiles.forEach((file) => {
  const filePath = path.join(rootDir, file);
  if (!fs.existsSync(filePath)) {
    console.error(`[ERROR] File not found: ${file}`);
    return;
  }

  const content = fs.readFileSync(filePath, 'utf8');

  // 1. Title Check
  const titleMatch = content.match(/<title>([^<]+)<\/title>/i);
  if (!titleMatch || !titleMatch[1].trim()) {
    results.missingTitles.push(file);
  } else {
    const title = titleMatch[1].trim();
    if (title.length < 20 || title.length > 75) {
      results.shortOrLongTitles.push(`${file} (${title.length} chars): "${title}"`);
    }
    if (titlesSeen.has(title)) {
      results.duplicateTitles[title] = (results.duplicateTitles[title] || [titlesSeen.get(title)]).concat(file);
    } else {
      titlesSeen.set(title, file);
    }
  }

  // 2. Meta Description Check
  const descMatch = content.match(/<meta\s+name=["']description["']\s+content=["']([^"']+)["']/i);
  if (!descMatch || !descMatch[1].trim()) {
    results.missingDescriptions.push(file);
  } else {
    const desc = descMatch[1].trim();
    if (desc.length < 50 || desc.length > 200) {
      results.shortOrLongDescriptions.push(`${file} (${desc.length} chars)`);
    }
    if (descsSeen.has(desc)) {
      results.duplicateDescriptions[desc] = (results.duplicateDescriptions[desc] || [descsSeen.get(desc)]).concat(file);
    } else {
      descsSeen.set(desc, file);
    }
  }

  // 3. Canonical Check
  const canonicalMatch = content.match(/<link\s+rel=["']canonical["']\s+href=["']([^"']+)["']/i);
  if (!canonicalMatch) {
    results.missingCanonicals.push(file);
  } else {
    const expectedCanonical = `${siteBase}/${file === 'index.html' ? '' : file}`;
    const actualCanonical = canonicalMatch[1].trim();
    if (actualCanonical !== expectedCanonical) {
      results.invalidCanonicals.push(`${file}: Expected "${expectedCanonical}", found "${actualCanonical}"`);
    }
  }

  // 4. H1 Check
  const h1Matches = content.match(/<h1[^>]*>[\s\S]*?<\/h1>/gi) || [];
  if (h1Matches.length !== 1 && file !== '404.html') {
    results.multipleOrZeroH1s.push(`${file} (found ${h1Matches.length} H1 tags)`);
  }

  // 5. Image Alt & Dimension Check
  const imgRegex = /<img\s+([^>]+)>/gi;
  let imgMatch;
  while ((imgMatch = imgRegex.exec(content)) !== null) {
    const attributes = imgMatch[1];
    const hasAlt = /alt=["']([^"']*)["']/i.test(attributes);
    const hasWidth = /width=["']\d+["']/i.test(attributes);
    const hasHeight = /height=["']\d+["']/i.test(attributes);

    if (!hasAlt) {
      results.imagesMissingAlt.push(`${file}: <img ${attributes.slice(0, 40)}...>`);
    }
    if (!hasWidth || !hasHeight) {
      results.imagesMissingDimensions.push(`${file}: <img ${attributes.slice(0, 40)}...>`);
    }
  }

  // 6. Internal Link Check
  const hrefRegex = /href=["']([^"']+)["']/gi;
  let hrefMatch;
  while ((hrefMatch = hrefRegex.exec(content)) !== null) {
    const link = hrefMatch[1].trim();
    if (link.endsWith('.html') && !link.startsWith('http')) {
      const cleanLink = link.split('#')[0];
      if (!fs.existsSync(path.join(rootDir, cleanLink))) {
        results.brokenInternalLinks.push(`${file} -> broken link to "${link}"`);
      }
    }
  }
});

// 7. Sitemap Check
const sitemapPath = path.join(rootDir, 'sitemap.xml');
if (fs.existsSync(sitemapPath)) {
  const sitemapContent = fs.readFileSync(sitemapPath, 'utf8');
  htmlFiles.forEach((file) => {
    if (file === '404.html') return; // 404 should not be in sitemap
    const expectedUrl = `${siteBase}/${file === 'index.html' ? '' : file}`;
    if (!sitemapContent.includes(expectedUrl)) {
      results.sitemapErrors.push(`Missing URL in sitemap.xml: ${expectedUrl}`);
    }
  });
} else {
  results.sitemapErrors.push('sitemap.xml file not found');
}

// 8. Robots.txt Check
const robotsPath = path.join(rootDir, 'robots.txt');
if (fs.existsSync(robotsPath)) {
  const robotsContent = fs.readFileSync(robotsPath, 'utf8');
  if (!robotsContent.includes(`Sitemap: ${siteBase}/sitemap.xml`)) {
    results.robotsErrors.push(`robots.txt missing sitemap reference: ${siteBase}/sitemap.xml`);
  }
} else {
  results.robotsErrors.push('robots.txt file not found');
}

// Output Audit Summary Report
console.log('## SEO AUDIT SUMMARY REPORT\n');
console.log(`Pages Checked:               ${results.totalFiles}`);
console.log(`Missing Titles:              ${results.missingTitles.length}`);
console.log(`Titles Length Warnings:      ${results.shortOrLongTitles.length}`);
console.log(`Missing Descriptions:        ${results.missingDescriptions.length}`);
console.log(`Descriptions Length Warnings:${results.shortOrLongDescriptions.length}`);
console.log(`Missing Canonicals:          ${results.missingCanonicals.length}`);
console.log(`Canonical Mis-matches:       ${results.invalidCanonicals.length}`);
console.log(`H1 Tag Structure Warnings:   ${results.multipleOrZeroH1s.length}`);
console.log(`Images Missing Alt Text:     ${results.imagesMissingAlt.length}`);
console.log(`Images Missing Dimensions:   ${results.imagesMissingDimensions.length}`);
console.log(`Broken Internal Links:       ${results.brokenInternalLinks.length}`);
console.log(`Duplicate Title Conflicts:   ${Object.keys(results.duplicateTitles).length}`);
console.log(`Sitemap Errors:              ${results.sitemapErrors.length}`);
console.log(`Robots.txt Errors:           ${results.robotsErrors.length}`);

if (results.imagesMissingDimensions.length > 0) {
  console.log('\n--- Images Missing Width/Height Dimensions ---');
  results.imagesMissingDimensions.forEach(item => console.log(` - ${item}`));
}

if (results.invalidCanonicals.length > 0) {
  console.log('\n--- Canonical Mismatches ---');
  results.invalidCanonicals.forEach(item => console.log(` - ${item}`));
}

if (results.multipleOrZeroH1s.length > 0) {
  console.log('\n--- H1 Warnings ---');
  results.multipleOrZeroH1s.forEach(item => console.log(` - ${item}`));
}

console.log('\n==================================================');
