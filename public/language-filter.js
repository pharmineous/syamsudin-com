const switcher = document.querySelector(".language-switcher select");
const storageKey = "field-notes-language";
const supportedLanguages = ["all", "id", "en"];

if (switcher) {
  function setEntryVisibility(entry, hidden) {
    entry.hidden = hidden;
    entry.style.display = hidden ? "none" : "";
  }

  let selectedLanguage = "all";
  try {
    const storedLanguage = localStorage.getItem(storageKey);
    if (supportedLanguages.includes(storedLanguage)) selectedLanguage = storedLanguage;
  } catch {
    // Keep the all-content default when browser storage is unavailable.
  }

  function applyLanguage(language) {
    const entries = Array.from(document.querySelectorAll(".filterable"));

    for (const entry of entries) {
      const primaryLanguage = entry.dataset.language;
      const translatedSummary = entry.dataset.translatedSummary;
      const translationLanguage = primaryLanguage === "id" ? "en" : "id";
      const hasSummaryInSelectedLanguage =
        entry.classList.contains("article-entry") &&
        translatedSummary &&
        translationLanguage === language;

      setEntryVisibility(
        entry,
        language !== "all" &&
          primaryLanguage !== language &&
          !hasSummaryInSelectedLanguage,
      );

      if (entry.classList.contains("article-entry")) {
        const summary = entry.querySelector(".entry-summary");
        summary.textContent =
          hasSummaryInSelectedLanguage && language !== "all"
            ? translatedSummary
            : entry.dataset.primarySummary;
      }
    }

    for (const preview of document.querySelectorAll(".home-preview")) {
      const limit = Number(preview.dataset.previewLimit);
      let shown = 0;
      for (const entry of preview.querySelectorAll(":scope > .filterable")) {
        if (entry.hidden) continue;
        if (shown >= limit) {
          setEntryVisibility(entry, true);
        } else {
          shown += 1;
        }
      }
    }

    for (const list of document.querySelectorAll("[data-content-list]")) {
      const entries = Array.from(list.querySelectorAll(":scope > .filterable"));
      let emptyMessage = list.querySelector(":scope > .language-empty");
      if (!emptyMessage) {
        emptyMessage = document.createElement("p");
        emptyMessage.className = "language-empty";
        emptyMessage.setAttribute("role", "status");
        emptyMessage.style.cssText =
          "margin:0;padding:24px 0;color:var(--muted);font-size:12px;line-height:1.7;";
        list.append(emptyMessage);
      }

      const hasVisibleEntry = entries.some((entry) => !entry.hidden);
      emptyMessage.hidden = hasVisibleEntry;
      emptyMessage.style.display = hasVisibleEntry ? "none" : "";
      emptyMessage.textContent =
        language === "id" ? "Belum ada entri dalam bahasa ini." : "No entries in this language yet.";
    }

    switcher.value = language;
  }

  for (const article of document.querySelectorAll(".article-entry")) {
    article.dataset.primarySummary = article.querySelector(".entry-summary").textContent;
  }

  switcher.addEventListener("change", () => {
    selectedLanguage = switcher.value;
    try {
      localStorage.setItem(storageKey, selectedLanguage);
    } catch {
      // The current selection still applies for this page.
    }
    applyLanguage(selectedLanguage);
  });

  applyLanguage(selectedLanguage);
}
