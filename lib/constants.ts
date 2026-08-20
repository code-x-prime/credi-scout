export const logoUrl = '/logo-2.png'

export const navItems = [
  { label: 'Home', href: '/' },
  { label: 'Who We Are', href: '/who-we-are' },
  { label: 'Services', href: '/services' },
  { label: 'CrediScout CRM', href: '/crm' },
]

export const services = [
  ['01', 'Customer Profile Validation', 'Validate customer-provided information through residence, business, tele, document, and other applicable verification activities.', 'UserRoundCheck', '/services/customer-profile-validation.jpg'],
  ['02', 'Address Verification', 'Conduct physical residence and business address verification to confirm applicant presence and validate submitted address information.', 'MapPinCheck', '/services/address-verification.jpg'],
  ['03', 'Tele Verification', 'Contact applicants or businesses through structured tele-verification workflows to validate contactability and relevant customer information.', 'PhoneCall', '/services/tele-verification.jpg'],
  ['04', 'Document Verification', 'Verify applicable identity, financial, income, and supporting documents against appropriate sources and verification procedures.', 'FileCheck2', '/services/document-verification.jpg'],
  ['05', 'Fraud & Risk Control', 'Support FRC/RCU operations through screening, sampling, document checks, field investigation, and discrepancy identification.', 'ShieldCheck', '/services/fraud-risk-control.jpg'],
  ['06', 'Field Investigation', 'Conduct structured desk and field investigations for cases requiring deeper validation of applicant, business, or transaction-related information.', 'SearchCheck', '/services/field-investigation.jpg'],
  ['07', 'Dealer Stockyard Audits', 'Assess physical stock, stock movement, and applicable funding utilization as required by financial institutions.', 'SearchCheck', '/services/dealer-stockyard-audits.jpg'],
  ['08', 'Mystery Shopping', 'Evaluate defined processes, service execution, infrastructure, and operational practices through structured assessment activities.', 'UserRoundCheck', '/services/mystery-shopping.jpg'],
]

export const industries = ['Credit Cards', 'Personal Loans', 'Business Loans', 'Home Loans', 'Auto & Commercial Vehicles', 'Education Loans', 'Loans Against Property', 'KYC & Retail Assets']
export const process = [['01', 'Case Upload', 'Verification cases enter the centralized system with the required customer and case information.'], ['02', 'Case Allocation', 'Cases are assigned to relevant field executives according to defined mapping and operational requirements.'], ['03', 'Field Verification', 'The assigned executive conducts the required residence, business, document, or investigation activity.'], ['04', 'Evidence Capture', 'Relevant location information, photographs, observations, timestamps, and verification details are recorded during the visit.'], ['05', 'Quality Review', 'Submitted information moves through defined backend review and quality-control processes.'], ['06', 'Report Delivery', 'Final findings and case information are made available to authorized stakeholders for further assessment and decision-making.']]
export const standards = [['ISO 27001', 'Information security management practices designed to protect sensitive information.'], ['ISO 9001', 'Quality management standards supporting structured, consistent processes.'], ['SOC 2', 'Independent assessment of applicable controls supporting security.'], ['DPDP Ready', 'Processes designed with India’s data protection framework in mind.']]
export const faqs = [
  ['What is banking field verification?', 'Banking field verification involves validating customer, residence, business, document, or other relevant information through structured field activities to support lending, onboarding, risk assessment, and financial decision-making.'],
  ['What is CrediScout CRM?', 'CrediScout CRM is a technology-driven platform designed to manage banking field verification workflows, including case allocation, field execution, geo-tagged activity, evidence capture, status tracking, review, and reporting.'],
  ['Which banking verification services does CrediScout provide?', 'CrediScout supports Customer Profile Validation, address verification, tele verification, document verification, Fraud & Risk Control activities, field investigations, dealer audits, mystery shopping, and applicable document support services.'],
  ['Who can use CrediScout?', 'CrediScout is designed primarily for banks, NBFCs, insurance companies, lending businesses, and other financial institutions that require structured customer and field verification operations.'],
  ['How does CrediScout improve field verification visibility?', 'The CRM can capture relevant field information such as location data, timestamps, photographs, observations, case updates, and verification findings within a centralized workflow.'],
]

export const crmStats = [['Total Cases', '12,840'], ['Pending Cases', '1,284'], ['In Progress', '4,106'], ['Completed', '7,450']]
export const crmFeatures = [
  ['Smart Case Allocation', 'Upload verification cases and allocate them to mapped field executives based on defined operational and location requirements.'],
  ['Geo-Tagged Field Visits', 'Capture GPS-supported field information to strengthen visit authentication and provide greater visibility into on-ground verification activity.'],
  ['Timestamped Visit Tracking', 'Record relevant field activity timestamps to help operations teams monitor visits, turnaround times, and case movement.'],
  ['On-Site Evidence Capture', 'Capture photographs, field observations, customer information, and other required evidence directly during verification visits.'],
  ['Real-Time Case Updates', 'Track verification progress as field information moves through the system, reducing dependence on fragmented manual follow-ups.'],
  ['Centralized Reporting', 'Bring field findings, case information, observations, and reports together to simplify review and support faster decision-making.'],
]

export const team = [
  {
    name: 'Faiz Alam',
    role: 'Founder & Director',
    photo: '/team/faiz-aalam.png',
    bio: [
      "Faiz Alam is a seasoned BFSI professional with a 10-year track record of driving operational excellence and market expansion. As the Founder, he is dedicated to establishing the firm as a gold standard for trust and reliability in India's financial sector.",
      "Faiz's leadership style is rooted in his \"turnaround\" mindset—taking challenged operations and transforming them into high-growth engines. His background includes significant leadership stints at Onicra and Serco BPO, where he gained a reputation for building high-performing cultures and executing high-impact initiatives.",
    ],
    competencies: [
      { label: 'Strategic Vision', desc: 'Scaling BFSI operations in both high-growth and mature markets.' },
      { label: 'Operational Excellence', desc: 'Creating efficient, value-driven processes that improve bottom lines.' },
      { label: 'Leadership', desc: 'Mentoring top-tier talent and fostering a culture of performance.' },
    ],
    education: 'MBA (Marketing & Finance) – Jamia Hamdard University',
  },
  {
    name: 'Shweta Dhiman',
    role: 'Director of HR & Administration',
    photo: '/team/shweta-dhiman.png',
    bio: [
      'Ms. Shweta Dhiman is a seasoned leader and a versatile force in the corporate world, bringing decades of managerial expertise to the organization. With a career defined by innovation and strategic foresight, she has consistently proven herself as an invaluable asset to the private and BPO sectors.',
      "Shweta's professional journey includes pivotal roles at prestigious organizations such as HCL, Serco BPO, Net Ambit, TeamLease, and Save the Children. This diverse background allows her to approach human capital management with a unique, \"out-of-the-box\" perspective, blending corporate efficiency with social responsibility.",
      'An alumna of Lucknow University with an MBA in HR, Shweta currently leads the HR and Administrative divisions, ensuring the organizational culture remains as vibrant and forward-thinking as her leadership style.',
    ],
    competencies: [],
    education: 'MBA (HR) – Lucknow University',
  },
  {
    name: 'Rohin Jain',
    role: 'Sales Director',
    photo: '/team/rohin-jain.png',
    bio: [
      'Rohin Jain is a Sales Director working in the financial services sector. He is responsible for managing sales operations, handling clients, and supporting overall business growth.',
      'He focuses on building strong customer relationships and helping clients choose the right verification solutions based on their needs. He also works closely with his team to achieve sales targets and ensure smooth operations.',
      'Rohin is known for his good communication skills, dedication, and practical approach. His goal is to provide reliable service and maintain long-term trust with customers.',
    ],
    competencies: [],
    education: '',
  },
  {
    name: 'Gaurav Kumar',
    role: 'IT Project Manager',
    photo: '/team/gaurav-dubey.jpg',
    bio: [
      'Gaurav Kumar is a seasoned IT Project Manager with a 12-year track record of leading diverse teams to deliver 70+ national and international projects on schedule and under budget. He drives innovation in web development, mastering Agile practices to achieve faster deliveries and high client satisfaction.',
      "Gaurav's leadership style is rooted in his \"delivery-first\" mindset—turning complex scopes into seamless successes across web and CRM platforms. His career highlights include coordinating high-impact IT initiatives, building high-performing teams, and excelling in client relationships and risk mitigation.",
    ],
    competencies: [
      { label: 'Strategic Project Delivery', desc: 'Scaling IT projects in dynamic national and global markets.' },
      { label: 'Agile Mastery', desc: 'Streamlining team coordination and processes for optimal efficiency.' },
      { label: 'Client Excellence', desc: 'Fostering trust through superior communication and results.' },
    ],
    education: '',
  },
]

export const partners = [
  { name: 'Aditya Birla Housing Finance', logo: '/logos/aditya-birla-housing-finance.png' },
  { name: 'Ambit Finvest', logo: '/logos/ambit-finvest.png' },
  { name: 'AU Small Finance Bank', logo: '/logos/au-small-finance-bank.png' },
  { name: 'Authum Finance', logo: '/logos/authum-finance.png' },
  { name: 'Electronica Finance', logo: '/logos/electronica-finance.png' },
  { name: 'Equitas Small Finance Bank', logo: '/logos/equitas-small-finance-bank.png' },
  { name: 'ESAF Small Finance Bank', logo: '/logos/esaf-small-finance-bank.png' },
  { name: 'HDFC Bank', logo: '/logos/hdfc-bank.png' },
  { name: 'Hinduja Housing Finance', logo: '/logos/hinduja-housing-finance.png' },
  { name: 'ICICI Bank', logo: '/logos/icici-bank.png' },
  { name: 'IDBI Bank', logo: '/logos/idbi-bank.png' },
  { name: 'IndusInd Bank', logo: '/logos/indusind-bank.png' },
  { name: 'Kotak Mahindra Bank', logo: '/logos/kotak-mahindra-bank.png' },
  { name: 'L&T Finance', logo: '/logos/lt-finance.jpeg' },
  { name: 'Maxemo Capital', logo: '/logos/maxemo-capital.png' },
  { name: 'Poonawalla Fincorp', logo: '/logos/poonawalla-fincorp.png' },
  { name: 'SMFG India Credit', logo: '/logos/smfg-india-credit.png' },
  { name: 'TVS Credit', logo: '/logos/tvs-credit.png' },
  { name: 'Ujjivan Small Finance Bank', logo: '/logos/ujjivan-small-finance-bank.png' },
  { name: 'YES BANK', logo: '/logos/yes-bank.png' },
]

export const coreValues = [
  ['Integrity in Every Verification', 'We approach every case with objectivity, professionalism, and a commitment to reporting findings responsibly.'],
  ['Security by Design', 'Protecting sensitive customer and institutional information remains central to our technology and operational processes.'],
  ['Accountability in the Field', 'Structured workflows and digital field controls help create greater traceability throughout verification operations.'],
  ['Quality Without Shortcuts', 'Defined processes and review mechanisms help maintain consistency across verification activities and reporting.'],
  ['Technology with Purpose', 'We use technology where it solves genuine operational problems, improves visibility, and makes verification easier to manage.'],
  ['Client-Focused Execution', 'Our workflows remain aligned with the practical operational requirements of banks, NBFCs, and financial institutions.'],
]

export const pageMeta ={ title: 'CrediScout | Banking Verification & Field Investigation', description: 'Technology-enabled banking verification and field investigation for banks, NBFCs and financial institutions.' }
export const icons = { UserRoundCheck: 'UserRoundCheck', MapPinCheck: 'MapPinCheck', PhoneCall: 'PhoneCall', FileCheck2: 'FileCheck2', ShieldCheck: 'ShieldCheck', SearchCheck: 'SearchCheck' } as const
