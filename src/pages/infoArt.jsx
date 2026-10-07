/* Images for the legal info pages.
   Uses built-in SVG illustrations from gPro, stored in src/assets/info/ */

import analytics from '../assets/info/analytics.svg'
import team from '../assets/info/team.svg'
import security from '../assets/info/security.svg'
import support from '../assets/info/support.svg'
import documents from '../assets/info/documents.svg'
import growth from '../assets/info/growth.svg'
import location from '../assets/info/location.svg'
import calendar from '../assets/info/calendar.svg'
import cookies from '../assets/info/cookies.svg'
import sharing from '../assets/info/sharing.svg'
import beta from '../assets/info/beta.svg'
import warning from '../assets/info/warning.svg'
import payment from '../assets/info/payment.svg'
import receipt from '../assets/info/receipt.svg'
import account from '../assets/info/account.svg'
import mail from '../assets/info/mail.svg'
import idea from '../assets/info/idea.svg'
import legal from '../assets/info/legal.svg'
import trial from '../assets/info/trial.svg'
import services from '../assets/info/services.svg'
import disclaimer from '../assets/info/disclaimer.svg'
import jurisdiction from '../assets/info/jurisdiction.svg'
import modification from '../assets/info/modification.svg'

const SVG = {
  analytics, team, security, support, documents, growth, location, calendar, cookies, sharing,
  beta, warning, payment, receipt, account, mail, idea, legal, trial,
  services, disclaimer, jurisdiction, modification,
}
const ALT = {
  analytics: 'Analytics dashboard illustration',
  team: 'Team collaboration illustration',
  security: 'Data security illustration',
  support: 'Customer support illustration',
  documents: 'Documents and approval illustration',
  growth: 'Business growth illustration',
  location: 'Office location illustration',
  calendar: 'Free-trial calendar illustration',
  cookies: 'Website cookies illustration',
  sharing: 'Secure information sharing illustration',
  beta: 'Beta services illustration',
  warning: 'Usage limitations illustration',
  payment: 'Fees and payment illustration',
  receipt: 'Tax invoice illustration',
  account: 'Inactive account illustration',
  mail: 'Communications illustration',
  idea: 'Intellectual property illustration',
  legal: 'Legal terms illustration',
  trial: '15-day free trial illustration',
  services: 'Software services illustration',
  disclaimer: 'Disclaimer of warranties illustration',
  jurisdiction: 'Governing law and jurisdiction illustration',
  modification: 'Updated terms illustration',
}

/* which SVG illustration backs each page's sections */
const MAP = {
  privacy: ['documents', 'analytics', 'sharing', 'security', 'cookies', 'team', 'modification', 'support'],
  terms: [
    'documents',   // Acceptance of Terms
    'services',    // Description of Services
    'beta',        // Beta Services
    'trial',       // Free Trial
    'security',    // Data Privacy
    'warning',     // Limitations on Use
    'team',        // User Enrolment Responsibilities
    'sharing',     // Organisation Accounts and Administrators
    'payment',     // Fees and Payment
    'receipt',     // Taxes
    'account',     // Inactive Accounts
    'mail',        // Communications
    'idea',        // Intellectual Property
    'warning',     // Suspension and Termination
    'disclaimer',  // Disclaimer of Warranties
    'legal',       // Limitation of Liability
    'security',    // Indemnification
    'jurisdiction',// Governing Law and Jurisdiction
    'modification',// Modification of Terms
  ],
}

function Media(src, alt) {
  return (
    <span className="dxinfo-media">
      <img
        src={src}
        alt={alt}
        loading="lazy"
        onError={(e) => e.currentTarget.parentElement.classList.add('dxinfo-media-failed')}
      />
    </span>
  )
}

function illus(name) {
  const key = SVG[name] ? name : 'analytics'
  return Media(SVG[key], ALT[key])
}

export function sectionArt(pageKey, index) {
  const order = MAP[pageKey] || ['analytics']
  return illus(order[index % order.length])
}
