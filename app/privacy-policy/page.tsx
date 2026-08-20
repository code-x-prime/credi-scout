import React from 'react'
import { LegalPage } from '@/components/site'

export const metadata = { title: 'Privacy Policy | CrediScout' }

export default function PrivacyPolicy() {
  return <LegalPage title="Privacy Policy" updated="July 17, 2026" sections={[
    ['1. Introduction', <React.Fragment key="1. Introduction">
      <p>This policy describes how CrediScout collects, uses, protects, and processes your personal data in compliance with the Digital Personal Data Protection Act, 2023 (DPDP Act).</p>
      <p>CrediScout (&ldquo;we&rdquo;, &ldquo;our&rdquo;, or &ldquo;us&rdquo;) is committed to protecting the privacy and security of your personal data. This Privacy Policy explains how we collect, store, process, and protect your information when you visit our website, use our services, or communicate with us.</p>
      <p>This policy is designed to comply with the Digital Personal Data Protection Act, 2023 (DPDP Act) of India and other applicable data protection regulations.</p>
    </React.Fragment>],
    ['2. Data Fiduciary', <React.Fragment key="2. Data Fiduciary">
      <p>For the purposes of the DPDP Act, 2023, CrediScout acts as a Data Fiduciary. We determine the purpose and means of processing your personal data.</p>
      <ul>
        <li><b>Company Name:</b> Brighto Credit Information Pvt. Ltd. (operating as CrediScout)</li>
        <li><b>Registered Address:</b> C-83, 1st Floor, Sector-2, Noida, India</li>
        <li><b>Contact Email:</b> Support@brightoindia.com</li>
        <li><b>Contact Phone:</b> +91-9311463901</li>
      </ul>
    </React.Fragment>],
    ['3. Personal Data We Collect', <React.Fragment key="3. Personal Data We Collect">
      <p>We collect the following categories of personal data based on your interaction with us:</p>
      <ul>
        <li><b>Contact Information:</b> Name, email address, phone number, company/organization name, and job title.</li>
        <li><b>Professional Information:</b> Resume/CV, work experience, education details, and professional references (for job applications).</li>
        <li><b>Service Data:</b> Case details, field visit records, verification logs, and evidence required to execute engagement scopes.</li>
        <li><b>Technical Data:</b> IP address, browser type, device information, operating system, and interaction history on our website.</li>
        <li><b>Communication Data:</b> Messages, inquiries, and correspondence sent through our website forms.</li>
      </ul>
    </React.Fragment>],
    ['4. Purpose of Data Collection', <React.Fragment key="4. Purpose of Data Collection">
      <p>We process your personal data for the following purposes, each supported by valid legal bases under the DPDP Act:</p>
      <ul>
        <li><b>Service Delivery:</b> To provide customer verification, field investigation, and risk control services (Contract Performance).</li>
        <li><b>Communication:</b> To respond to inquiries, service requests, and provide technical support (Legitimate Interest).</li>
        <li><b>Employment:</b> To process job applications and evaluate candidates (Consent).</li>
        <li><b>Compliance:</b> To meet legal and regulatory obligations, including ISO 27001 and SOC 2 compliance (Legal Obligation).</li>
        <li><b>Security:</b> To ensure platform security, prevent fraud, and protect against operational risks (Legitimate Interest).</li>
      </ul>
    </React.Fragment>],
    ['5. Legal Basis for Processing', <React.Fragment key="5. Legal Basis for Processing">
      <p>Under the DPDP Act, 2023, we process your personal data based on:</p>
      <ul>
        <li><b>Consent:</b> Where you have given explicit, informed, and free consent for specific purposes (e.g., job applications, marketing communications).</li>
        <li><b>Contract Performance:</b> Where processing is necessary to fulfill a contract with you or your organization.</li>
        <li><b>Legitimate Interest:</b> Where processing is necessary for our legitimate business interests, such as improving our services and ensuring security.</li>
        <li><b>Legal Obligation:</b> Where processing is required by applicable laws, regulations, or court orders.</li>
      </ul>
      <p>You may withdraw your consent at any time by contacting us at Support@brightoindia.com.</p>
    </React.Fragment>],
    ['6. Data Retention', <React.Fragment key="6. Data Retention">
      <p>We retain your personal data only for as long as necessary to fulfill the purposes for which it was collected:</p>
      <ul>
        <li><b>Inquiry Data:</b> Retained for 12 months from the date of submission or until the inquiry is resolved, whichever is later.</li>
        <li><b>Job Application Data:</b> Retained for 24 months from the date of application. Unsuccessful applications are deleted after this period.</li>
        <li><b>Service Data:</b> Retained for the duration of the service contract plus 7 years as required by Indian law.</li>
        <li><b>Technical Data:</b> Retained for 12 months for security purposes.</li>
      </ul>
    </React.Fragment>],
    ['7. Data Security (ISO 27001 & SOC 2 Compliance)', <React.Fragment key="7. Data Security (ISO 27001 & SOC 2 Compliance)">
      <p>As an ISO 27001-certified and SOC 2 audited company, CrediScout implements stringent administrative, physical, and technical safeguards:</p>
      <ul>
        <li>All data is encrypted in transit (TLS 1.3) and at rest (AES-256).</li>
        <li>Access is restricted exclusively to authorized personnel on a need-to-know basis.</li>
        <li>Regular security audits, penetration testing, and vulnerability assessments are conducted.</li>
        <li>Multi-factor authentication (MFA) is enforced for all internal systems.</li>
        <li>Incident response procedures are in place to address any data breaches within 72 hours.</li>
      </ul>
    </React.Fragment>],
    ['8. Data Sharing and Third Parties', <React.Fragment key="8. Data Sharing and Third Parties">
      <p>We do not sell, rent, or trade your personal data. Information is shared only:</p>
      <ul>
        <li>With client-approved financial institutions (banks, NBFCs) as specified in engagement contracts.</li>
        <li>With trusted service providers who assist in our operations (hosting), bound by Data Processing Agreements.</li>
        <li>Where required under applicable laws, regulations, or court orders.</li>
      </ul>
      <p><b>Third-Party Services Used:</b></p>
      <ul>
        <li><b>Hostinger VPS:</b> Website hosting and deployment. Data processed: Usage data, IP addresses. Stored in: Global CDN.</li>
      </ul>
    </React.Fragment>],
    ['9. Your Rights Under the DPDP Act', <React.Fragment key="9. Your Rights Under the DPDP Act">
      <p>As a Data Principal under the DPDP Act, 2023, you have the following rights:</p>
      <ul>
        <li><b>Right to Access:</b> You may request a copy of all personal data we hold about you.</li>
        <li><b>Right to Correction:</b> You may request correction of inaccurate or incomplete personal data.</li>
        <li><b>Right to Erasure:</b> You may request deletion of your personal data when it is no longer necessary for the purpose it was collected.</li>
        <li><b>Right to Withdraw Consent:</b> You may withdraw your consent at any time, and we will cease processing your data.</li>
        <li><b>Right to Grievance Redressal:</b> You may file a complaint with our Grievance Officer if you believe your data protection rights have been violated.</li>
        <li><b>Right to Nominate:</b> You may nominate another individual to exercise your rights in the event of your death or incapacity.</li>
      </ul>
    </React.Fragment>],
    ['10. Cookies and Tracking', <React.Fragment key="10. Cookies and Tracking">
      <p>Our website uses only essential cookies required for core website functionality. We do not use any analytics, advertising, or tracking cookies.</p>
      <ul><li><b>Essential Cookies:</b> Required for core website functionality and security.</li></ul>
      <p>You can manage or disable cookies through your browser settings.</p>
    </React.Fragment>],
    ['11. Data Deletion', <React.Fragment key="11. Data Deletion">
      <p>You may request deletion of your personal data at any time by:</p>
      <ul>
        <li>Emailing us at Support@brightoindia.com with subject line &ldquo;Data Deletion Request&rdquo;.</li>
        <li>Include your full name, email address, and the specific data you wish to have deleted.</li>
      </ul>
      <p>We will process your deletion request within 30 days and confirm completion via email. Some data may be retained if required by applicable law.</p>
    </React.Fragment>],
    ['12. Grievance Officer', <React.Fragment key="12. Grievance Officer">
      <p>In accordance with the DPDP Act, 2023 and the Information Technology Act, 2000, the name and contact details of our Grievance Officer are:</p>
      <p><b>Grievance Officer</b><br/>CrediScout Data Protection Team</p>
      <p>Email: Support@brightoindia.com<br/>Phone: +91-9311463901<br/>Address: C-83, 1st Floor, Sector-2, Noida, India</p>
      <p>We will acknowledge your grievance within 24 hours and resolve it within 30 days.</p>
    </React.Fragment>],
    ['13. Contact Information', <React.Fragment key="13. Contact Information">
      <p>For any questions about this Privacy Policy or our data practices, please contact us:</p>
      <p><b>CrediScout Data Protection Office</b></p>
      <p>Email: Support@brightoindia.com<br/>Call: +91-9311463901<br/>Address: C-83, 1st Floor, Sector-2, Noida, India</p>
    </React.Fragment>],
    ['14. Changes to This Policy', <React.Fragment key="14. Changes to This Policy">
      <p>We may update this Privacy Policy from time to time. Any changes will be posted on this page with an updated &ldquo;Last updated&rdquo; date. Material changes will be communicated via email or prominent notice on our website.</p>
    </React.Fragment>],
  ]}/>
}
