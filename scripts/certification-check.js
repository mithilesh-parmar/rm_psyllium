/**
 * scripts/certification-check.js
 * Automated B2B Sourcing Campaign CLI Reminder
 * Fires on 'npm run dev' to keep all cert/audit status top-of-mind.
 */
const reset = "\x1b[0m";
const bold = "\x1b[1m";
const yellow = "\x1b[33m";
const green = "\x1b[32m";
const cyan = "\x1b[36m";

console.log("\n" + yellow + bold + "┌──────────────────────────────────────────────────────────────────────────────┐" + reset);
console.log(yellow + bold + "│  ⚠️  B2B SEO/AEO CAMPAIGN: ZERO-CREDENTIAL STATUS REMINDER                   │" + reset);
console.log(yellow + bold + "├──────────────────────────────────────────────────────────────────────────────┤" + reset);
console.log(yellow + "│                                                                              │" + reset);
console.log(yellow + "│  " + bold + "Status:" + reset + yellow + " Per your request, " + bold + "ALL" + reset + yellow + " certifications and export registrations       │" + reset);
console.log(yellow + "│  (FSSAI, APEDA, active IEC, Spices Board, GMP, ISO, HACCP, Halal, Kosher)    │" + reset);
console.log(yellow + "│  are strictly " + bold + "HIDDEN / COMMENTED OUT" + reset + yellow + " across all 100 localized pages.       │" + reset);
console.log(yellow + "│  This ensures legal safety while you wait for your GST registration.         │" + reset);
console.log(yellow + "│                                                                              │" + reset);
console.log(yellow + "│  " + bold + "How to Activate:" + reset + yellow + " Once your GST is live and you receive your new     │" + reset);
console.log(yellow + "│  registrations, open the permanent guide in your root workspace:             │" + reset);
console.log(yellow + "│  " + cyan + bold + "./CERTIFICATION_UPDATE_GUIDE.md" + reset + yellow + "                                             │" + reset);
console.log(yellow + "│  It contains a 2-minute dynamic translation & badge activation checklist.    │" + reset);
console.log(yellow + "│                                                                              │" + reset);
console.log(yellow + bold + "└──────────────────────────────────────────────────────────────────────────────┘" + reset + "\n");
