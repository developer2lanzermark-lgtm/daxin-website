import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import {
  CUSTOMERS_COUNT,
  PARTNERS_COUNT,
  yearsOfExperience,
} from "../config/siteStats.js";
import { FAQ_CATEGORIES } from "../pages/FAQ.jsx";
import "../styles/sitechat.css";

// Hand-written knowledge base — general questions about Daxin, its
// products, careers and contact, independent of the FAQ page content.
const KB = [
  {
    keywords: [
      "product", "products", "what do you offer", "what do you build",
      "software", "gpro", "demander", "voice bill", "voicebill",
    ],
    answer:
      "We build three products — gPro (business management software for billing, inventory and accounts), Demander (a 24x7 online ordering platform), and Voice Bill (voice-based billing for retail counters).",
    links: [{ to: "/products", label: "Explore Products" }],
  },
  {
    keywords: ["gpro", "erp", "business management software", "billing software", "inventory software"],
    answer:
      "gPro is our business management software — covering billing, inventory, accounts and every core part of running a business.",
    links: [{ to: "https://gprosoftware.com/", label: "Visit gPro", external: true }],
  },
  {
    keywords: ["demander", "ordering platform", "order online", "receive orders", "b2b orders"],
    answer:
      "Demander is a smart ordering platform that lets businesses receive orders from customers 24x7, without the noise of calls and messages.",
    links: [{ to: "/products", label: "Learn More" }],
  },
  {
    keywords: ["voice bill", "voicebill", "speak bill", "voice billing", "speech billing"],
    answer:
      "Voice Bill is our voice-based retail billing solution — simply speak, and the bill is created. Built for faster checkout at busy counters.",
    links: [{ to: "/products#voicebill", label: "Learn About Voice Bill" }],
  },
  {
    keywords: [
      "about", "company", "history", "founded", "since when", "tirunelveli",
      "who are you", "daxin technologies",
    ],
    answer: `DAXIN Technologies is a software product company based in Tirunelveli, India, building our own products since 1998 — that's ${yearsOfExperience}+ years and still building. We're trusted by ${CUSTOMERS_COUNT} businesses.`,
    links: [{ to: "/about", label: "About Us" }],
  },
  {
    keywords: [
      "career", "careers", "job", "jobs", "hiring", "vacancy", "vacancies",
      "internship", "apply", "work with you", "work at daxin",
    ],
    answer:
      "We're always open to great talent across every department. Our internship program runs 6 months to 1 year based on skill, with a real path to a full-time role.",
    links: [{ to: "/careers", label: "Careers & Internship" }],
  },
  {
    keywords: ["contact", "phone", "email", "reach you", "talk to someone", "support contact"],
    answer:
      "You can reach our team through the Contact page, or book an appointment directly from anywhere on the website.",
    links: [{ to: "/contact", label: "Contact Us" }],
  },
  {
    keywords: ["demo", "book appointment", "schedule", "meeting", "trial", "book a call"],
    answer:
      "You can book an appointment with our team right from the \"Ready to work better?\" section on any page — just click Book an Appointment.",
    links: [{ to: "/contact", label: "Contact Us" }],
  },
  {
    keywords: ["referral", "partner program", "refer", "referral partner"],
    answer: `Our Referral Partner program is for anyone who can introduce Daxin products to other businesses. We already work with a network of ${PARTNERS_COUNT} partners.`,
    links: [{ to: "/faq", label: "More on Referrals" }],
  },
  {
    keywords: ["faq", "frequently asked", "help", "questions"],
    answer: "You can find answers to common questions on our FAQ page, organized by Company, Software, Careers and Referral Partners.",
    links: [{ to: "/faq", label: "View FAQ" }],
  },
];

// The real FAQ content from the FAQ page becomes searchable chat answers too.
const FAQ_KB = FAQ_CATEGORIES.flatMap((cat) =>
  cat.items.map((item) => ({
    keywords: [item.q],
    answer: item.a,
    links: item.link
      ? [{ to: item.link.to, label: item.link.label, external: item.link.external }]
      : [{ to: "/faq", label: "More FAQs" }],
  }))
);

const ALL_ANSWERS = [...KB, ...FAQ_KB];

const SMALL_TALK = [
  {
    keywords: ["hi", "hii", "hello", "hey", "good morning", "good afternoon", "good evening"],
    answer: "Hello! 👋 How can I help you with Daxin today?",
  },
  {
    keywords: ["thank you", "thanks", "thank u", "thnks", "tq"],
    answer: "You're welcome! Happy to help. Anything else you'd like to know?",
  },
  {
    keywords: ["welcome", "you are welcome", "you're welcome"],
    answer: "Thank you! 😊",
  },
  {
    keywords: ["bye", "goodbye", "good bye", "see you", "nice day", "good day", "have a nice day", "have a good day"],
    answer: "Have a great day! Feel free to ask anytime you have questions about Daxin.",
  },
  {
    keywords: ["how are you", "how r u"],
    answer: "I'm doing great, thanks for asking! How can I help you today?",
  },
];

const STOP_WORDS = new Set([
  "a", "an", "the", "is", "are", "do", "does", "i", "me", "my", "of", "for", "to", "you", "your",
  "daxin", "what", "how", "about", "can", "with", "in", "on", "it", "be", "or", "and", "if", "will",
]);

function stem(w) {
  if (w.length > 5 && w.endsWith("ing")) w = w.slice(0, -3);
  else if (w.length > 5 && w.endsWith("ies")) w = w.slice(0, -3) + "y";
  else if (w.length > 4 && w.endsWith("es")) w = w.slice(0, -2);
  else if (w.length > 4 && w.endsWith("ed")) w = w.slice(0, -2);
  else if (w.length > 3 && w.endsWith("s") && !w.endsWith("ss")) w = w.slice(0, -1);
  return w;
}

const SYNONYMS = {
  buy: "purchase", purchasing: "purchase", purchased: "purchase",
  cost: "price", costing: "price", pricing: "price", charge: "price", charges: "price", fee: "price", fees: "price",
  begin: "start", starting: "start", commence: "start",
  assist: "help", assistance: "help", support: "help", helping: "help",
  install: "setup", installation: "setup", installing: "setup", configure: "setup", configuration: "setup",
  issue: "problem", trouble: "problem", error: "problem", bug: "problem",
  upgrade: "update", updating: "update", upgrading: "update",
  train: "training", teach: "training", learn: "training",
  laptop: "computer", pc: "computer", system: "computer", desktop: "computer",
  shift: "move", switching: "move", moving: "move", migrate: "move", migration: "move", transfer: "move",
  vacancy: "job", vacancies: "job", jobs: "job", hiring: "job", opening: "job", openings: "job",
};

const words = (s) =>
  (s.toLowerCase().match(/[a-z0-9]+/g) || []).map((w) => {
    const s2 = stem(w);
    return SYNONYMS[w] || SYNONYMS[s2] || s2;
  });

function findAnswer(raw) {
  const textWords = words(raw);
  let best = null;
  let bestScore = 0;
  for (const entry of ALL_ANSWERS) {
    let score = 0;
    for (const kw of entry.keywords) {
      const kwWords = words(kw);
      if (raw.toLowerCase().includes(kw.toLowerCase())) score += kwWords.length * 3;
      for (const w of kwWords) {
        if (!STOP_WORDS.has(w) && textWords.includes(w)) score += 1;
      }
    }
    if (score > bestScore) {
      bestScore = score;
      best = entry;
    }
  }
  return bestScore > 0 ? best : null;
}

function findSmallTalk(raw) {
  const text = raw.toLowerCase().trim();
  for (const entry of SMALL_TALK) {
    // Word-boundary match so short greetings like "hi" don't false-positive
    // on substrings inside real words (e.g. "internship", "this").
    if (entry.keywords.some((kw) => new RegExp(`\\b${kw}\\b`).test(text))) return entry;
  }
  return null;
}

const FALLBACK =
  "I can answer questions about Daxin's products, careers, internships, and company details. For anything specific, please reach out to our team directly!";

const GREETING = {
  role: "bot",
  text: "Hi! I'm the Daxin Assistant. Ask me anything about gPro, Demander, Voice Bill, careers, or the company.",
};

export default function SiteChat() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([GREETING]);
  const [input, setInput] = useState("");
  const bodyRef = useRef(null);

  useEffect(() => {
    if (bodyRef.current) bodyRef.current.scrollTop = bodyRef.current.scrollHeight;
  }, [messages, open]);

  const send = (e) => {
    e.preventDefault();
    const q = input.trim();
    if (!q) return;
    const smallTalk = findSmallTalk(q);
    const match = smallTalk || findAnswer(q);
    const reply = match
      ? { role: "bot", text: match.answer, links: match.links }
      : { role: "bot", text: FALLBACK };
    setMessages((m) => [...m, { role: "user", text: q }, reply]);
    setInput("");
  };

  return (
    <div className="sc-root">
      {open && (
        <div className="sc-panel" role="dialog" aria-label="Daxin Assistant">
          <div className="sc-head">
            <span>Daxin Assistant</span>
            <button type="button" className="sc-close" onClick={() => setOpen(false)} aria-label="Close chat">
              &times;
            </button>
          </div>
          <div className="sc-body" ref={bodyRef}>
            {messages.map((m, i) => (
              <div key={i} className={`sc-msg sc-${m.role}`}>
                <p>{m.text}</p>
                {m.links && (
                  <div className="sc-links">
                    {m.links.map((l) =>
                      l.external ? (
                        <a
                          key={l.to}
                          href={l.to}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="sc-link"
                          onClick={() => setOpen(false)}
                        >
                          {l.label} →
                        </a>
                      ) : (
                        <Link key={l.to} to={l.to} className="sc-link" onClick={() => setOpen(false)}>
                          {l.label} →
                        </Link>
                      )
                    )}
                  </div>
                )}
              </div>
            ))}
          </div>
          <form className="sc-input-row" onSubmit={send}>
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask about Daxin…"
              aria-label="Type your question"
            />
            <button type="submit" aria-label="Send">
              ↑
            </button>
          </form>
        </div>
      )}
      <button
        type="button"
        className="sc-fab"
        onClick={() => setOpen((o) => !o)}
        aria-label={open ? "Close chat" : "Open Daxin Assistant"}
      >
        {open ? (
          <span className="sc-fab-x">&times;</span>
        ) : (
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
          </svg>
        )}
      </button>
    </div>
  );
}
