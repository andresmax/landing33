#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

// Read config
const configPath = path.join(__dirname, 'config.json');
const config = JSON.parse(fs.readFileSync(configPath, 'utf8'));

// Flatten config for easier replacement
function flattenConfig(obj, prefix = '') {
  return Object.keys(obj).reduce((acc, key) => {
    const value = obj[key];
    const newKey = prefix ? `${prefix}.${key}` : key;
    if (typeof value === 'object' && value !== null && !Array.isArray(value)) {
      Object.assign(acc, flattenConfig(value, newKey));
    } else {
      acc[newKey] = value;
    }
    return acc;
  }, {});
}

const flatConfig = flattenConfig(config);

// Process a template file
function processTemplate(inputFile, outputFile) {
  const template = fs.readFileSync(inputFile, 'utf8');

  // Replace all {{key}} placeholders
  let output = template;
  for (const [key, value] of Object.entries(flatConfig)) {
    const placeholder = new RegExp(`{{${key}}}`, 'g');
    output = output.replace(placeholder, value);
  }

  // Handle conditional blocks: {{#if key}}...{{/if}}
  output = output.replace(/{{#if\s+(\S+)}}([\s\S]*?){{\/if}}/g, (match, key, content) => {
    const value = flatConfig[key];
    return value && value.trim() !== '' ? content : '';
  });

  fs.writeFileSync(outputFile, output);
  console.log(`Built ${outputFile}`);
}

// Process all templates
const templates = [
  { input: 'src/template.html', output: 'index.html' },
  { input: 'src/privacy.html', output: 'privacy.html' },
  { input: 'src/terms.html', output: 'terms.html' },
  { input: 'src/sitemap.xml', output: 'sitemap.xml' },
  { input: 'src/robots.txt', output: 'robots.txt' },
  { input: 'src/site.webmanifest', output: 'site.webmanifest' }
];

templates.forEach(({ input, output }) => {
  const inputPath = path.join(__dirname, input);
  const outputPath = path.join(__dirname, output);

  if (fs.existsSync(inputPath)) {
    processTemplate(inputPath, outputPath);
  }
});
