import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';

const Terms = () => {
    return (
        <div className="container" style={{ paddingTop: '120px', paddingBottom: '80px', maxWidth: '1000px' }}>
            <Helmet>
                <title>Terms of Service - GameFlex</title>
                <meta name="description" content="Read our Terms of Service to understand the rules and regulations for using GameFlex." />
            </Helmet>
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
            >
                <h1 style={{ fontSize: '3rem', marginBottom: '2rem', color: 'var(--text-primary)' }}>Terms & Conditions</h1>
                <div className="card" style={{ padding: '3rem' }}>
                    <p style={{ color: 'var(--text-secondary)', marginBottom: '1.5rem', lineHeight: '1.6' }}>
                        You agree to the terms and conditions outlined in this Terms of Use Agreement ('Agreement') with respect to this Web site (the 'Site'). This Agreement constitutes the entire and only agreement between us and you, and supersedes all prior or contemporaneous agreements, representations, warranties and understandings with respect to the Site, the content and computer programs provided by or through the Site, and the subject matter of this Agreement. This Agreement may be amended at any time by us from time to time without specific notice to you. The latest Agreement will be posted on the Site, and you should review this Agreement prior to each use of the Site.
                    </p>
                    <p style={{ color: 'var(--text-secondary)', marginBottom: '1.5rem', lineHeight: '1.6' }}>
                        The following terms and conditions (this 'Agreement') is a legal agreement between us ('Company') and you ('You' or 'Your'), the user of the website (the 'Site'). You and Company may also be individually referred to herein as a 'Party' and collectively as 'Parties'. You agree to use the Site and any additional services offered by Company in the future only in accordance with this Agreement. Company reserves the right to make changes to the Site and the terms and conditions of this Agreement at any time. Your continued use of the Site after any such modification and notification thereof shall constitute Your consent to such modification.
                    </p>

                    <h3 style={{ color: 'var(--text-primary)', marginTop: '2rem', marginBottom: '1rem' }}>1. Background and Use of the Site.</h3>
                    <p style={{ color: 'var(--text-secondary)', marginBottom: '1rem', lineHeight: '1.6' }}>
                        The Site allows Company to post offers of advertising programs sponsored by Company or its affiliates on the system ('Program(s)'). The Programs will specify the amount and terms under which You will receive payment ('Bounty') when the Program's requirements are fulfilled. Bounties are generated from a specified event ('Event') identified in a Program, such as clicks, click-throughs, sales, registrations, views and leads. The definition of the Event associated with a Program is set forth in the Program's specifications, and such definition shall govern this Agreement. If You accept a Program, You agree to place that Program's advertising creative on Your media properties, such as Your website, affiliated websites or email distribution lists ('Media'), in accordance with the terms of the accepted Program. Company may change a Program at any time unless otherwise specified upon reasonable notice to You. Similarly, You may drop previously accepted Programs at any time unless otherwise specified. Company is responsible for displaying and administrating all active Programs and tracking the payments owed. Company shall compile, calculate and electronically deliver data required to determine Your billing and compensation. Company's figures and calculations shall be final and binding. Any questions regarding the data provided by Company need to be submitted in writing within 30 days of receipt, otherwise the information will be deemed accurate and accepted as such by You.
                    </p>

                    <h3 style={{ color: 'var(--text-primary)', marginTop: '2rem', marginBottom: '1rem' }}>2. License.</h3>
                    <p style={{ color: 'var(--text-secondary)', marginBottom: '1rem', lineHeight: '1.6' }}>
                        All websites, newsletters, companies, or individuals need official approval from Company before they can become an Affiliate Partner ('Affiliate'). Only websites, affiliated websites and email distribution lists that have been reviewed and approved are permitted to use the Site. Company reserves the right to withhold or refuse approval for any reason, whatsoever.
                    </p>
                    <p style={{ color: 'var(--text-secondary)', marginBottom: '1rem', lineHeight: '1.6' }}>
                        In order to be eligible to become a Company Affiliate, all websites, affiliated websites and email distribution lists must meet the following criteria: Be content-based, not simply a list of links or advertisements, nor can the site be centered around making money off of our Advertisers. Have a top-level domain name. Be fully functional at all levels; no 'under construction' sites or sections. Spawning process pop-ups and exit pop-ups are prohibited.
                    </p>
                    <p style={{ color: 'var(--text-secondary)', marginBottom: '1rem', lineHeight: '1.6' }}>
                        The content of the websites, affiliated websites, and email distribution lists cannot infringe on any personal rights, intellectual property rights, or copyrights. including but not limited to: Racial, ethnic, political, hate-mongering or otherwise objectionable content Investment, money-making opportunities or advice not permitted under law Gratuitous violence or profanity Material that defames, abuses, or threatens physical harm to others Promotion of illegal substances or activities such as illegal online gambling, how to build a bomb, counterfeiting money, etc. Software Pirating (e.g., Warez, Hotline) Hacking or Phreaking. Any illegal activity whatsoever Any spoofing, redirecting, or trafficking from adult-related websites in an effort to gain traffic
                    </p>
                    <p style={{ color: 'var(--text-secondary)', marginBottom: '1rem', lineHeight: '1.6' }}>
                        Company grants You a non-transferable, non-exclusive limited license, if approved, to use the Site and any data, reports, information or analyses arising out of such use, subject to the terms and conditions set forth herein. You acknowledge and agree that You do not have, nor will claim any right, title or interest in the Site software, applications, data, methods of doing business or any elements thereof. You may only access the Site via web browser, email or in a manner approved by Company. Site integration tags must NOT be altered. Altering tags may jeopardize Your ability to be paid for Events.
                    </p>

                    <h3 style={{ color: 'var(--text-primary)', marginTop: '2rem', marginBottom: '1rem' }}>3. Fraud.</h3>
                    <p style={{ color: 'var(--text-secondary)', marginBottom: '1rem', lineHeight: '1.6' }}>
                        Company actively monitors traffic for Fraud. If we detect fraud, your account will be made inactive pending further investigation.
                    </p>
                    <p style={{ color: 'var(--text-secondary)', marginBottom: '1rem', lineHeight: '1.6' }}>
                        If you fraudulently add leads or clicks or inflate leads or clicks by fraudulent traffic generation (as determined solely by Company, such as pre- population of forms or mechanisms not approved by Company), you will forfeit your entire commission for all programs and your account will be terminated. Company reserves sole judgment in determining fraud, and you agree to this clause.
                    </p>
                    <p style={{ color: 'var(--text-secondary)', marginBottom: '1rem', lineHeight: '1.6' }}>
                        It is the OBLIGATION of the Affiliate to prove to Company that they are NOT committing fraud. Company will hold your payment in 'Pending Status' until you have satisfactorily provided evidence that you are not defrauding the system. We flag accounts that:
                    </p>
                    <ul style={{ color: 'var(--text-secondary)', marginBottom: '1rem', lineHeight: '1.6', paddingLeft: '20px' }}>
                        <li>Have click-through rates that are much higher than industry averages and where solid justification is not evident.</li>
                        <li>Have ONLY click programs generating clicks with no indication by site traffic that it can sustain the clicks reported.</li>
                        <li>Have shown fraudulent leads as determined by our clients.</li>
                        <li>Use fake redirects, automated software, and/or fraud to generate clicks or leads from our programs.</li>
                    </ul>

                    <h3 style={{ color: 'var(--text-primary)', marginTop: '2rem', marginBottom: '1rem' }}>4. Payment.</h3>
                    <p style={{ color: 'var(--text-secondary)', marginBottom: '1rem', lineHeight: '1.6' }}>
                        You will be paid per the occurrence of an Event. Parties understand and agree that payment will be owed to Affiliate from Merchant on terms of NET 30. All accounts will be paid in US dollars ($US). unless otherwise specified. No checks will be issued for any amounts less than $50 US Dollars. Every US Affiliate account must have a unique, valid taxpayer identification number (TIN) or valid Social Security number, International Affiliates (Outside the US) can complete our w8 form. All payments are based on actual figures as defined, accounted and audited by Merchant. Company will facilitate payment by disbursing the earned portion of lump sum aggregate payments to individual Affiliates upon receipt of payment from Merchant. (this is generally net30 but in many cases can be net15 or net7 if quality and volume allow.)
                    </p>
                    <p style={{ color: 'var(--text-secondary)', marginBottom: '1rem', lineHeight: '1.6' }}>
                        In the event Company fails to receive payment due from Merchant it shall have no payment obligation to Affiliate. If Merchant does not pay on time, Company will notify Affiliate and offer its best efforts in matters related to collections. Company will not pay for any Events that occur before a Program is initiated, or after a Program terminates. Invoices submitted to Company and payments made to You shall be based on the Events and corresponding Bounties as reported by Company. Company will not be responsible to compensate You for Events that are not recorded due to Your error.
                    </p>

                    <h3 style={{ color: 'var(--text-primary)', marginTop: '2rem', marginBottom: '1rem' }}>5. Termination.</h3>
                    <p style={{ color: 'var(--text-secondary)', marginBottom: '1rem', lineHeight: '1.6' }}>
                        This Agreement shall commence upon Your acceptance and remain in effect until terminated. This Agreement may be terminated by either Party upon three (3) days' notice. This Agreement shall terminate immediately upon the dissolution or insolvency of either Party. Company reserves the right, in its sole and absolute discretion, to terminate a Program and remove any advertisements at any time for any reason. Company also reserves the right to terminate Your access to the Site at any time without notice. Reasons for termination or suspension can include but are not limited to fraudulent, inaccurate or expired contact information and fraudulent lead data or transactions.
                    </p>
                    <p style={{ color: 'var(--text-secondary)', marginBottom: '1rem', lineHeight: '1.6' }}>
                        Termination notice may be provided via e-mail and will be effective immediately. All legitimate moneys due to Affiliate will be paid during the next billing cycle. If Affiliate defrauds the system, then payment is revoked as determined solely by Company.
                    </p>
                    <p style={{ color: 'var(--text-secondary)', marginBottom: '1rem', lineHeight: '1.6' }}>
                        The representations, warranties and obligations contained in paragraphs 5, 6, 7, 8, 9 and 10 shall remain in full force and effect after termination of this Agreement. All payment obligations accruing prior to the termination date shall survive until fully performed.
                    </p>

                    <h3 style={{ color: 'var(--text-primary)', marginTop: '2rem', marginBottom: '1rem' }}>6. Representations and Warranties.</h3>
                    <p style={{ color: 'var(--text-secondary)', marginBottom: '1rem', lineHeight: '1.6' }}>
                        You represent and warrant that: Your Media is in compliance with all applicable laws and does not contain or promote, nor links to another website that contains, libelous, defamatory, abusive, violent, prejudicial, obscene, sexually explicit or illegal content; You agree not to send Unsolicited Commercial Email (i.e., SPAM). You cannot post any specific messages to newsgroups, chat rooms, bulletin boards or any other places unless expressly approved in writing from Company. You can post messages which are generic in nature and do not mention any specific client or offer, which are expressly approved in writing from Company; You agree not to promote via website or link to websites containing any pornographic, racial, ethnic, political, software pirating (e.g. Warez) or hacking, hate-mongering, or otherwise objectionable content; You agree not to engage in any illegal activity, in accordance with Federal Law, whatsoever, is not allowed; You own or have the legal right to use and distribute all content, copyrighted material, products, and services displayed on Your Media; You agree to not use deceit when marketing Advertiser’s offers or presenting these offers to consumers; You have the right, power, and authority to enter into this Agreement and grant the rights specified herein; You will not attempt in any way to alter, modify, eliminate, conceal, or otherwise render inoperable or ineffective the Site tags, source codes, links, pixels, modules or other data provided by or obtained from Company that allows Company to measure ad performance and provide its service ('Site Data'); If instructed to do so by Company and/or if this Agreement terminates, You will immediately remove and discontinue the use of any Site Data; You acknowledge that Company does not represent, warrant, or make any specific or implied promises as to the successful outcome of any Programs; You agree to display the creative exactly as it appears on the Program and will not alter any creative that has been submitted to the Site; If You are notified that fraudulent activities may be occurring on your Media, and You do not take any actions to stop the fraudulent activities, then You are responsible for all associated costs and legal fees resulting in these fraudulent activities; If any errors or undesirable results occur due to no fault of Company, Company shall not be responsible for losses and You may not be compensated.
                    </p>

                    <h3 style={{ color: 'var(--text-primary)', marginTop: '2rem', marginBottom: '1rem' }}>7. Customer Information; Non-Disclosure.</h3>
                    <p style={{ color: 'var(--text-secondary)', marginBottom: '1rem', lineHeight: '1.6' }}>
                        All information submitted by end-user customers pursuant to a Program is proprietary to and owned by Company or its affiliates. Such customer information is confidential and may not be disclosed by Company. In addition, You acknowledge that all non-public information, data and reports received from Company hereunder or as part of the services hereunder is proprietary to and owned by Company. All proprietary information is protected by copyright, trademark and other intellectual property law. You agree not to reproduce, disseminate, sell, distribute or commercially exploit any proprietary information in any manner. These non-disclosure obligations shall survive the termination of this Agreement.
                    </p>

                    <h3 style={{ color: 'var(--text-primary)', marginTop: '2rem', marginBottom: '1rem' }}>8. Limitation of Liability; Disclaimer of Warranty.</h3>
                    <p style={{ color: 'var(--text-secondary)', marginBottom: '1rem', lineHeight: '1.6' }}>
                        IN NO EVENT SHALL COMPANY BE LIABLE FOR ANY DAMAGES OF ANY KIND ARISING FROM YOUR USE OF THE SITE, OPERATION OF A PROGRAM, OR YOUR DISPLAY OF ANY PROGRAM CREATIVE ON YOUR MEDIA, INCLUDING BUT NOT LIMITED TO BROKEN IMAGES, SPECIAL, INDIRECT, INCIDENTAL, PUNITIVE AND CONSEQUENTIAL DAMAGES, EVEN IF COMPANY HAS BEEN ADVISED OF THE POSSIBILITY OF SUCH DAMAGES.
                    </p>
                    <p style={{ color: 'var(--text-secondary)', marginBottom: '1rem', lineHeight: '1.6' }}>
                        THE INFORMATION, CONTENT AND SERVICES ON THE SITE ARE PROVIDED ON AN 'AS IS' BASIS WITH NO WARRANTY. YOU USE THE SITE AND RUN PROGRAMS AT YOUR OWN RISK. TO THE MAXIMUM EXTENT PERMITTED BY LAW, COMPANY DISCLAIMS ALL REPRESENTATIONS AND WARRANTIES OF ANY KIND, EXPRESS OR IMPLIED, WITH RESPECT TO THE OPERATION OF THE SITE, THE INFORMATION, SERVICES, AND CONTENT INCLUDED ON THE SITE AND PROVIDED BY COMPANY, INCLUDING BUT NOT LIMITED TO IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE. COMPANY DOES NOT REPRESENT OR WARRANT THAT THE INFORMATION ON THIS SITE OR PROVIDED BY COMPANY IS ACCURATE, COMPLETE OR CURRENT.
                    </p>

                    <h3 style={{ color: 'var(--text-primary)', marginTop: '2rem', marginBottom: '1rem' }}>9. Indemnity.</h3>
                    <p style={{ color: 'var(--text-secondary)', marginBottom: '1rem', lineHeight: '1.6' }}>
                        You shall indemnify, defend and hold Company harmless from and against any and all claims, allegations, liabilities, costs and expenses (including reasonable attorneys' fees) by third parties arising out of Your: (a) improper use of the Site; (b) improper operation of a Program; or (c) breach or violation of this Agreement. Company shall indemnify, defend and hold You harmless from and against any and all claims allegations, liabilities, costs and expenses (including reasonable attorneys' fees) by third parties arising out of any actual infringement of intellectual property rights resulting from Your display of Company’s advertising creative provided in connection with operating a Program.
                    </p>

                    <h3 style={{ color: 'var(--text-primary)', marginTop: '2rem', marginBottom: '1rem' }}>10. Assignment and Jurisdiction.</h3>
                    <p style={{ color: 'var(--text-secondary)', marginBottom: '1rem', lineHeight: '1.6' }}>
                        Company may assign this Agreement to a subsidiary or business successor. You may not assign this Agreement without the prior written consent of Company, which shall not be unreasonably withheld. This Agreement shall be construed and governed by the law of the state of New York. You expressly consent to the exclusive venue and personal jurisdiction of the state and federal courts located in New York County, New York for any actions arising from or relating to this Agreement.
                    </p>

                    <h3 style={{ color: 'var(--text-primary)', marginTop: '2rem', marginBottom: '1rem' }}>11. Severability.</h3>
                    <p style={{ color: 'var(--text-secondary)', marginBottom: '1rem', lineHeight: '1.6' }}>
                        If any provision of this Agreement is held to be invalid, illegal or unenforceable for any reason, such invalidity, illegality or unenforceability shall not effect any other provisions of this Agreement, and this Agreement shall be construed as if such invalid, illegal or unenforceable provision had not been contained herein.
                    </p>

                    <h3 style={{ color: 'var(--text-primary)', marginTop: '2rem', marginBottom: '1rem' }}>12. Force Majeure.</h3>
                    <p style={{ color: 'var(--text-secondary)', marginBottom: '1rem', lineHeight: '1.6' }}>
                        Neither Party shall be liable to the other by reason of failure or delay in the performance of its obligations hereunder on account of Acts of God, fires, storms, war, governmental action, labor conditions, earthquakes, natural disasters, interruption in internet service or any other cause which is beyond the reasonable control of such Party.
                    </p>

                    <h3 style={{ color: 'var(--text-primary)', marginTop: '2rem', marginBottom: '1rem' }}>13. Attorneys' Fees.</h3>
                    <p style={{ color: 'var(--text-secondary)', marginBottom: '1rem', lineHeight: '1.6' }}>
                        Company shall be entitled to an award of its reasonable costs and expenses, including attorneys' fees, in any action or proceeding arising out of this Agreement.
                    </p>

                    <h3 style={{ color: 'var(--text-primary)', marginTop: '2rem', marginBottom: '1rem' }}>14. Miscellaneous.</h3>
                    <p style={{ color: 'var(--text-secondary)', marginBottom: '1rem', lineHeight: '1.6' }}>
                        This Agreement contains the sole and entire agreement and understanding between the Parties relating to the subject matter herein, and merges all prior discussions, whether through officers, directors, salespersons, employees or consultants. Each Party is an independent contractor and not a partner, joint venturer or employee of the other. All notices shall be sent to the addresses submitted by You when signing up for the service by certified mail, fax, email or courier.
                    </p>
                    <p style={{ color: 'var(--text-secondary)', marginBottom: '1rem', lineHeight: '1.6' }}>
                        Company reserves the right to change any conditions of this contract at any time, with or without notice.
                    </p>

                    <h3 style={{ color: 'var(--text-primary)', marginTop: '2rem', marginBottom: '1rem' }}>15. IMPORTANT NOTICE: The Can Spam Law</h3>
                    <p style={{ color: 'var(--text-secondary)', marginBottom: '1rem', lineHeight: '1.6' }}>
                        Affiliates must comply with The CAN SPAM Act which regulates the form (what information must be included and the required format) commercial email must take. Specifically, The CAN SPAM Act requires that all commercial email contain the following:
                    </p>
                    <ul style={{ color: 'var(--text-secondary)', marginBottom: '1rem', lineHeight: '1.6', paddingLeft: '20px' }}>
                        <li>Clear and conspicuous identification that the message is an advertisement or solicitation, if the email is unsolicited</li>
                        <li>Clear and conspicuous notice of the opportunity to opt-out</li>
                        <li>A truthful subject line.</li>
                        <li>A functioning mechanism to opt-out.</li>
                        <li>A valid postal address for the sender.</li>
                        <li>Labeling of unsolicited sexually explicit material.</li>
                    </ul>

                    <h3 style={{ color: 'var(--text-primary)', marginTop: '2rem', marginBottom: '1rem' }}>Copyright:</h3>
                    <p style={{ color: 'var(--text-secondary)', marginBottom: '1rem', lineHeight: '1.6' }}>
                        The content, organization, graphics, design, compilation, magnetic translation, digital conversion and other matters related to the Site are protected under applicable copyrights, trademarks and other proprietary (including but not limited to intellectual property) rights. The copying, redistribution, use or publication by you of any such matters or any part of the Site, except as allowed under 'Limited Right to Use' below, is strictly prohibited. You do not acquire ownership rights to any content, document or other materials viewed through the Site.
                    </p>

                    <h3 style={{ color: 'var(--text-primary)', marginTop: '2rem', marginBottom: '1rem' }}>Copyright and Service Mark Information:</h3>
                    <p style={{ color: 'var(--text-secondary)', marginBottom: '1rem', lineHeight: '1.6' }}>
                        All trademarks are the property of their respective owners.
                    </p>
                </div>
            </motion.div>
        </div>
    );
};

export default Terms;
