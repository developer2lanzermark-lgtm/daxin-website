import { useRef, useState } from "react";
import { Link } from "react-router-dom";
import {
  CUSTOMERS_COUNT,
  PRODUCTS_COUNT,
  PARTNERS_COUNT,
  yearsOfExperience,
} from "../config/siteStats.js";
import "../styles/FAQ.css";

export const FAQ_CATEGORIES = [
  {
    id: "company",
    title: "Company",
    desc: "About Daxin, our story, values and products",
    items: [
      {
        q: "What is Daxin Technologies?",
        a: "DAXIN Technologies is a software product company, building and evolving our own products to help growing businesses work simpler, smarter and better.",
      },
      {
        q: "When and where did Daxin start?",
        a: `Daxin started in the 1990s in a small shop in Tirunelveli, at the southern tip of India, offering computer training and project guidance for students. Since 1998 we have been building software products — that's ${yearsOfExperience}+ years and still building.`,
      },
      {
        q: "What products does Daxin offer?",
        a: "Our main products are gPro (business management software), Demander (a smart ordering platform that lets you receive orders 24x7) and Voice Bill (a voice-based solution for faster retail billing — \"Simply Speak, Simply Bill\").",
      },
      {
        q: "How many businesses use Daxin products?",
        a: `Our products are trusted by ${CUSTOMERS_COUNT} customers across industries, supported by a network of ${PARTNERS_COUNT} partners.`,
      },
      {
        q: "What values guide Daxin?",
        a: "Our Craft, Our Integrity and Our Passion. We never compromise on quality, we are honest and transparent with no hidden agenda, we honour our promises with responsive support, and we keep exploring new technologies to make our products better.",
      },
      {
        q: "Where are Daxin's offices located?",
        a: "Our office is located at Plot No. 743, 2nd Floor, Near Income Tax Office, Rahmath Nagar 3rd Street, Tiruchendur Road, Palayamkottai, Tirunelveli – 627011, Tamil Nadu, India.",
      },
      {
        q: "How can I contact Daxin?",
        a: "Contact our Sales Team at sales@gprosoftware.com / +91 90470 29298, or our Support Team at support@gprosoftware.com / +91 63790 53761.",
        
      },
    ],
  },
  {
    id: "software",
    title: "Software Development",
    desc: "Our products, how we build them, updates and support",
    items: [
      {
        q: "Does Daxin build its own software products?",
        a: `Yes. Daxin is a product company. We design, build and continuously evolve our own products, with ${PRODUCTS_COUNT} product releases and improvements over the years.`,
      },
      
      {
        q: "Which devices do Daxin products work on?",
        a: "Our products are built to work across desktop, tablet and mobile, so you can manage your business wherever you are.",
      },
      {
        q: "Are the products updated regularly?",
        a: "Yes. Our products are continuously developed over time, adding new capabilities and adapting to changing business and technology needs.",
      },
      {
        q: "Do you take custom software projects?",
        a: "Our focus is on building and improving our own products. If you have a specific business need, talk to us — many requirements can be met through our existing products and their ongoing development.",
      },
      {
        q: "What kind of support do I get after purchase?",
        a: "We believe in responsive support and long-term relationships. Our team helps with installation, training and day-to-day questions so you can use the software with confidence.",
      },
      {
         q: "What are the support hours?",
         a: "Our support team is available Monday to Friday, 9:30 AM to 7:00 PM, and Saturday, 9:30 AM to 4:30 PM (IST). We are closed on Sundays and public holidays.",
             
      },
    ],
  },
  {
    id: "careers",
    title: "Careers",
    desc: "Jobs, internship program, culture and hiring process",
    items: [
      {
        q: "Is Daxin hiring?",
        a: "We are always open to great talent. If you are passionate about building real software, we'd love to hear from you.",
      },
      {
        q: "How do I apply for a job or internship?",
        a: "Visit the Careers & Internship page and click \"Explore It\" to fill in the application form. It only takes a few minutes.",
        link: { label: "Go to Careers", to: "/careers" },
      },
      {
        q: "How does the internship program work?",
        a: "The program is for serious job seekers, not students on a break. It runs from 6 months to 1 year based on your skill and ability.",
      },
      {
        q: "Can the internship lead to a full-time job?",
        a: "Yes. It is a real path to a full-time job — if you are eligible at the end of the program, the role becomes permanent.",
      },
      {
        q: "Is there a stipend during the internship?",
        a: "Yes. Interns receive a fair monthly stipend, along with festival and personal leave.",
      },
      // {
      //   q: "Where is the team located?",
      //   a: "We are a Tirunelveli-rooted team. You get meaningful product work without the metro-city grind.",
      // },
      {
        q: "What is it like to work at Daxin?",
        a: "Small teams, direct access and real decisions. Every engineer owns a real module and talks directly to the people who decide what ships — with working hours that don't bleed into your evenings.",
      },
      {
        q: "What is the hiring process like?",
        a: "Our hiring is simple, merit-based and candidate-friendly. After you apply, our team reviews your application and contacts shortlisted candidates for the next steps.",
      },
    ],
  },
  {
    id: "referral",
    title: "Referral Partners",
    desc: "Partner program, eligibility, referrals and rewards",
    items: [
      {
        q: "What is the Daxin Referral Partner program?",
        a: `It is a program for people and businesses who recommend Daxin products to others. We already work with a network of ${PARTNERS_COUNT} partners across regions.`,
      },
      {
        q: "Who can become a referral partner?",
        a: "Anyone with a business network can join — computer dealers, accountants, consultants, existing customers and other professionals who work with growing businesses.",
      },
      {
        q: "How do I become a referral partner?",
        a: "Contact our team with your details and area of operation. We will explain the program and help you get started.",
        link: { label: "Contact us", to: "/contact" },
      },
      {
        q: "Which products can I refer?",
        a: "You can refer any of our products — gPro, Demander and Voice Bill — to businesses that can benefit from them.",
      },
      {
        q: "What do I get for a successful referral?",
        a: "Referral partners are rewarded for referrals that become customers. The reward details are shared by our team when you join the program.",
      },
      {
        q: "Do I need technical knowledge to refer?",
        a: "No. Just introduce the business to us. Our team handles the demo, installation, training and support.",
      },
      {
        q: "Will Daxin support the customers I refer?",
        a: "Yes. Every customer gets the same dedicated support from our team, so your referrals are always in good hands.",
      },
        {
        q: "Can a referral partner become a reseller later?",
        a: "No. The Referral Partner program and reselling are separate, and a referral partner role does not convert into a reseller role",
      },
    ],
  },
];

export default function FAQ() {
  const [activeTab, setActiveTab] = useState(0);
  const [openIndex, setOpenIndex] = useState(null);
  const tabsAnchorRef = useRef(null);
  const tabsRef = useRef(null);
  const category = FAQ_CATEGORIES[activeTab];

  const selectTab = (index) => {
    setActiveTab(index);
    setOpenIndex(null);
    // If the page is scrolled past the tabs (they're pinned), scroll back so
    // the new category starts from its first question.
    const navbarHeight = parseFloat(getComputedStyle(tabsRef.current).top) || 0;
    const anchorTop =
      tabsAnchorRef.current.getBoundingClientRect().top + window.scrollY - navbarHeight;
    if (window.scrollY > anchorTop) {
      window.scrollTo({ top: anchorTop, behavior: "smooth" });
    }
  };

  return (
    <main className="faq-page">
      <div className="faq-container">
        <h1 className="section-title faq-title">Frequently Asked Questions</h1>
        <span className="faq-title-line" aria-hidden="true" />

        <div ref={tabsAnchorRef} aria-hidden="true" />
        <div className="faq-tabs" role="tablist" ref={tabsRef}>
          {FAQ_CATEGORIES.map((cat, i) => (
            <button
              key={cat.id}
              type="button"
              role="tab"
              aria-selected={i === activeTab}
              className={`faq-tab${i === activeTab ? " faq-tab--active" : ""}`}
              onClick={() => selectTab(i)}
            >
              <span className="faq-tab__num">{i + 1}</span>
              <span className="faq-tab__text">
                <span className="faq-tab__title">{cat.title}</span>
                <span className="faq-tab__desc">{cat.desc}</span>
              </span>
            </button>
          ))}
        </div>

        <div className="faq-list" role="tabpanel">
          {category.items.map((item, i) => {
            const isOpen = openIndex === i;
            return (
              <div key={item.q} className={`faq-item${isOpen ? " faq-item--open" : ""}`}>
                <button
                  type="button"
                  className="faq-item__question"
                  aria-expanded={isOpen}
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                >
                  <span>{item.q}</span>
                  <span className="faq-item__icon" aria-hidden="true">
                    {isOpen ? "−" : "+"}
                  </span>
                </button>
                {isOpen && (
                  <div className="faq-item__answer">
                    <p>{item.a}</p>
                    {item.link &&
                      (item.link.external ? (
                        <a href={item.link.to} target="_blank" rel="noopener noreferrer">
                          {item.link.label} →
                        </a>
                      ) : (
                        <Link to={item.link.to}>{item.link.label} →</Link>
                      ))}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </main>
  );
}
