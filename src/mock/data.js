/**
 * Mock data for local development — no Firebase required.
 * Replace these with Firestore reads in Phase 2.
 */

/** Blocked / restricted visitors list */
export const BLOCKED_LIST = [
  { idNumber: 'TEST-BLOCKED-001', reason: 'Access revoked — security incident 2025-01-15' },
  { idNumber: 'TEST-BLOCKED-002', reason: 'Pending legal review' },
]

/** Staff / personnel list for the "Who are you visiting?" dropdown */
export const PERSONNEL = [
  { id: 'p1', name: 'Maria Santos',    dept: 'Administration' },
  { id: 'p2', name: 'Jose Reyes',      dept: 'Operations' },
  { id: 'p3', name: 'Ana Garcia',      dept: 'Finance' },
  { id: 'p4', name: 'Pedro Cruz',      dept: 'Human Resources' },
  { id: 'p5', name: 'Linda Villanueva',dept: 'IT / Systems' },
  { id: 'p6', name: 'Michael Tan',     dept: 'Security' },
  { id: 'p7', name: 'Rosario Bautista',dept: 'Reception' },
  { id: 'p8', name: 'Rafael Mendoza',  dept: 'Warehouse / Logistics' },
]

/** ID types accepted */
export const ID_TYPES = [
  'Philippine National ID (PhilSys)',
  "Driver's License",
  'Passport',
  'SSS ID',
  'GSIS ID',
  'PRC ID',
  'Voter ID',
  'Postal ID',
  'Company ID',
  'Senior Citizen ID',
  'PWD ID',
  'Other Government ID',
]

/** Purpose of visit options */
export const VISIT_PURPOSES = [
  'Business Meeting',
  'Delivery / Pick-up',
  'Maintenance / Repair',
  'Job Interview',
  'Training / Seminar',
  'Audit / Inspection',
  'Personal Visit',
  'Other',
]

/** House rules content */
export const HOUSE_RULES = `
<h3>1. General Conduct</h3>
<ul>
  <li>All visitors must sign in and sign out at the reception desk.</li>
  <li>Valid government-issued ID is required at all times.</li>
  <li>Visitors must wear their visitor badge visibly at all times while on premises.</li>
  <li>Visitors must be accompanied by a staff escort beyond the reception area.</li>
</ul>

<h3>2. Prohibited Items</h3>
<ul>
  <li>No weapons, explosives, or dangerous materials.</li>
  <li>No recording devices (cameras, audio recorders) without prior written approval.</li>
  <li>No food or beverages in production areas.</li>
</ul>

<h3>3. Safety</h3>
<ul>
  <li>Personal Protective Equipment (PPE) must be worn in designated areas.</li>
  <li>PPE will be provided by reception if not brought by visitor.</li>
  <li>Follow all posted safety signs and instructions from staff.</li>
  <li>In case of emergency, follow evacuation instructions from security personnel.</li>
</ul>

<h3>4. Data & Privacy</h3>
<ul>
  <li>Do not access or attempt to access company computer systems.</li>
  <li>Confidential materials must not be removed from the premises.</li>
</ul>

<h3>5. Compliance</h3>
<ul>
  <li>Violation of these rules may result in immediate removal from the premises.</li>
  <li>Management reserves the right to search bags upon exit.</li>
</ul>
`

/** Privacy notice content */
export const PRIVACY_NOTICE = `
<h3>Data We Collect</h3>
<p>We collect your full name, a photo of you and your ID, ID number, address, company affiliation, purpose of visit, and the personnel you are visiting. We also log entry and exit timestamps.</p>

<h3>Why We Collect It</h3>
<p>This information is collected solely for facility security and access control purposes, in compliance with applicable laws and our internal security policies.</p>

<h3>How We Store It</h3>
<p>Your data is stored securely in an access-controlled system. Photos and ID information are encrypted at rest and in transit.</p>

<h3>How Long We Keep It</h3>
<p>Visitor records are retained for a minimum of 90 days and a maximum of 3 years, after which they are permanently deleted unless required by law to retain longer.</p>

<h3>Who Can Access It</h3>
<p>Only authorized reception staff, security personnel, and system administrators may access visitor records. We do not sell or share your data with third parties.</p>

<h3>Your Rights</h3>
<p>You may request access to or deletion of your data by contacting our Data Privacy Officer. This facility operates under the Philippine Data Privacy Act of 2012 (RA 10173).</p>
`
