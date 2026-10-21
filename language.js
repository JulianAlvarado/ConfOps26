"use strict";

let language = "en";

// Template keys retain numbered slots so translated sentences can reorder values.
function t(message, ...values) {
  const key = typeof message === "string" ? message : message.reduce((text, part, i) => text + (i ? `{${i - 1}}` : "") + part, "");
  const translated = language === "es" ? spanish.messages[key] ?? key : key;
  return translated.replace(/\{(\d+)\}/g, (_, index) => String(values[Number(index)]));
}

function translateData(value) {
  if (typeof value === "string") return t(value);
  if (Array.isArray(value)) return value.map(translateData);
  if (value && typeof value === "object") return Object.fromEntries(Object.entries(value).map(([key, item]) => [key, translateData(item)]));
  return value;
}

const translatedElements = spanish.copy.map(copy => {
  const element = document.querySelector(copy.selector);
  if (!element) throw new Error(`Missing translation target: ${copy.selector}`);
  return { element, ...copy };
});

function translateMarkup() {
  document.documentElement.lang = language;
  const variant = language === "es" ? 1 : 0;
  for (const { element, text, attributes, html } of translatedElements) {
    // Static headings may change line breaks; interactive nodes stay mounted.
    if (html) element.innerHTML = html[variant];
    for (const [index, values] of Object.entries(text)) element.childNodes[index].textContent = values[variant];
    for (const [name, values] of Object.entries(attributes)) element.setAttribute(name, values[variant]);
  }
}
