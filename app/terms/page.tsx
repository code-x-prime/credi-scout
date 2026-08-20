import { LegalPage } from '@/components/site'

export const metadata = { title: 'Terms & Conditions | CrediScout' }

export default function Terms() {
  return <LegalPage title="Terms & Conditions" updated="June 30, 2026" sections={[
    ['1. Acceptance of Terms', <p key="1">By accessing and using this website, you agree to comply with and be bound by these Terms of Use and all applicable laws and regulations. If you do not agree with any of these terms, you are prohibited from using or accessing this site.</p>],
    ['2. Service Scope & Independence', <p key="1">CrediScout provides independent banking verification, field investigation, tele-verification, document verification, and fraud & risk control services. Our reports and assessments are based on objective observations, on-site checks, and document reviews within the specific scope agreed upon in client contracts.</p>],
    ['3. Intellectual Property Rights', <p key="1">All content on this website—including text, graphics, logos, images, code, and design—is the intellectual property of CrediScout and is protected by applicable copyright and trademark laws. Unauthorized copying, modification, or distribution is strictly prohibited.</p>],
    ['4. Limitations of Liability', <p key="1">The information provided on this website is for general guidance and informational purposes. In no event shall CrediScout or its officers be liable for any damages (including, without limitation, damages for loss of data or profit) arising out of the use or inability to use the materials on our website.</p>],
    ['5. User Conduct & Security', <p key="1">Users agree not to use the website to transmit malicious software, execute unauthorized access, or disrupt the website services. Any attempt to compromise database systems or site security will result in termination of access and legal action.</p>],
    ['6. Governing Law', <p key="1">Any claim relating to CrediScout&rsquo;s website or services shall be governed by the laws of India, without regard to its conflict of law provisions, and shall be subject to the exclusive jurisdiction of the courts in Noida, Uttar Pradesh, India.</p>],
  ]}/>
}
