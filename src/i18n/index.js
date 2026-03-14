// ── Bilingual strings: English (en) + Filipino/Tagalog (fil) ──

export const translations = {
  en: {
    // App
    appName:       'Agyle Facility Access System',
    welcome:       'Welcome',
    welcomeSub:    'Please select an option to proceed',

    // Welcome screen
    welcomeGreeting:    'Welcome to Our Facility',
    welcomeTitle:       'How can we help you today?',
    welcomeSubtitle:    'Please select an option below to begin.',
    welcomeVisitorBtn:  'Visitor Check-In',
    welcomeVisitorSub:  'Register your visit and receive a visitor badge.',
    welcomeEmployeeBtn: 'Employee Attendance',
    welcomeEmployeeSub: 'Log your time in or time out.',
    welcomeReceptionNote: 'Need assistance? Please approach the reception desk.',
    comingSoon:         'Coming Soon',

    // Home buttons
    visitorCheckin:    'Visitor Check-In',
    employeeAttendance:'Employee Attendance',
    operatedBy:        'Operated by',

    // Progress steps
    stepFace:     'Face Photo',
    stepID:       'ID Capture',
    stepIdentity: 'Identity',
    stepVisit:    'Visit Info',
    stepConsent:  'Consent',
    stepOf:       'Step',
    of:           'of',

    // Step 1 — Face
    faceTitle:      'Face Photo',
    faceInstruct:   'Position your face within the oval guide and look directly at the camera.',
    faceCapture:    'Capture Photo',
    faceRetake:     'Retake',
    faceNext:       'Use This Photo',
    faceTip:        'Ensure good lighting and remove eyeglasses or hat if possible.',

    // Step 2 — ID
    idTitle:        'ID Photo',
    idInstruct:     'Hold your government-issued ID flat and fully visible within the frame.',
    idCapture:      'Capture ID',
    idRetake:       'Retake',
    idNext:         'Use This Photo',
    idProcessing:   'Reading ID details…',
    idTip:          'Ensure all four corners of the ID are visible and the text is clear.',

    // Step 3 — Identity
    identityTitle:  'Verify Identity',
    identityInstruct: 'Please review and confirm the information extracted from your ID.',
    firstName:      'First Name',
    lastName:       'Last Name',
    idType:         'ID Type',
    idNumber:       'ID Number',
    address:        'Address',
    idTypes: ['Passport', 'Driver\'s License', 'SSS ID', 'PhilHealth ID', 'Postal ID', 'UMID', 'Voter\'s ID', 'PRC ID', 'Other'],
    editNote:       'You may correct any field if the information is inaccurate.',

    // Step 4 — Visit Info
    visitTitle:       'Visit Information',
    visitInstruct:    'Please provide details about your visit.',
    companyAffil:     'Company / Affiliation',
    companyPlaceholder:'e.g. ABC Corporation, Vendor, Government',
    purpose:          'Purpose of Entry',
    purposes:         ['Business Meeting', 'Delivery', 'Maintenance', 'Interview', 'Training', 'Government / Official', 'Personal', 'Other'],
    personnel:        'Person / Department to Visit',
    personnelPlaceholder: 'e.g. Operations Manager, HR Department',
    receptionFieldsInstruct: 'To be completed by reception or security staff.',
    badgeNumber:      'Visitor Badge Number',
    badgePlaceholder: 'Assigned badge no.',
    ppeLoanedLabel:   'PPE Equipment Loaned',
    ppeYes:           'Yes',
    ppeNo:            'No',
    notesLabel:       'Operator Notes',
    notesPlaceholder: 'Internal notes visible to staff only…',
    notesHint:        'Visible to reception / security staff only. Not shown to visitor.',
    required:         'Required',

    // Step 5 — Consent
    consentTitle:       'Facility Rules & Consent',
    consentInstruct:    'Please read the following carefully before proceeding.',
    consentRule:        'I agree to comply with the facility rules and regulations.',
    consentPrivacy:     'I consent to the collection and processing of my personal data in accordance with the facility\'s Data Privacy Policy.',
    viewRules:          'View Facility Rules',
    viewPrivacy:        'View Privacy Policy',
    confirmEntry:       'Confirm Check-In',
    consentRequired:    'You must agree to both items to proceed.',

    // Step 6 — Result
    approvedTitle:      'CHECK-IN APPROVED',
    approvedSub:        'Entry has been recorded successfully.',
    restrictedTitle:    'ACCESS RESTRICTED',
    restrictedSub:      'This individual has been flagged. Please contact security personnel.',
    entryTime:          'Entry Time',
    checkInAnother:     'New Check-In',
    escalate:           'Escalate to Security',
    overrideAdmin:      'Admin Override',

    // Employee
    empTitle:           'Employee Attendance',
    empCheckin:         'Check-In',
    empCheckout:        'Check-Out',
    empCapture:         'Capture & Log',
    empLogged:          'Attendance Logged',

    // General
    back:           'Back',
    next:           'Next',
    cancel:         'Cancel',
    confirm:        'Confirm',
    loading:        'Please wait…',
    error:          'An error occurred. Please try again.',
  },

  fil: {
    // App
    appName:       'Agyle Facility Access System',
    welcome:       'Maligayang Pagdating',
    welcomeSub:    'Pumili ng opsyon upang magpatuloy',

    // Welcome screen
    welcomeGreeting:    'Maligayang Pagdating sa Aming Pasilidad',
    welcomeTitle:       'Paano ka namin matutulungan ngayon?',
    welcomeSubtitle:    'Mangyaring pumili ng opsyon sa ibaba upang magsimula.',
    welcomeVisitorBtn:  'Pagpasok ng Bisita',
    welcomeVisitorSub:  'Irehistro ang iyong pagbisita at makatanggap ng badge ng bisita.',
    welcomeEmployeeBtn: 'Pagdalo ng Empleyado',
    welcomeEmployeeSub: 'I-log ang iyong time in o time out.',
    welcomeReceptionNote: 'Kailangan ng tulong? Lumapit sa reception desk.',
    comingSoon:         'Malapit Na',

    // Home buttons
    visitorCheckin:    'Pagpasok ng Bisita',
    employeeAttendance:'Pagdalo ng Empleyado',
    operatedBy:        'Pinapatakbo ni',

    // Progress steps
    stepFace:     'Larawan',
    stepID:       'ID',
    stepIdentity: 'Pagkakakilanlan',
    stepVisit:    'Impormasyon',
    stepConsent:  'Pahintulot',
    stepOf:       'Hakbang',
    of:           'ng',

    // Step 1 — Face
    faceTitle:      'Larawan ng Mukha',
    faceInstruct:   'Iposisyon ang iyong mukha sa loob ng gabay na hugis-itlog at tumingin nang direkta sa camera.',
    faceCapture:    'Kumuha ng Larawan',
    faceRetake:     'Ulitin',
    faceNext:       'Gamitin ang Larawang Ito',
    faceTip:        'Tiyaking may sapat na liwanag at alisin ang salamin o sombrero kung posible.',

    // Step 2 — ID
    idTitle:        'Larawan ng ID',
    idInstruct:     'Hawakan ang iyong ID nang patag at ganap na nakikita sa loob ng frame.',
    idCapture:      'Kumuha ng Larawan ng ID',
    idRetake:       'Ulitin',
    idNext:         'Gamitin ang Larawang Ito',
    idProcessing:   'Binabasa ang mga detalye ng ID…',
    idTip:          'Tiyaking nakikita ang apat na sulok ng ID at malinaw ang teksto.',

    // Step 3 — Identity
    identityTitle:  'I-verify ang Pagkakakilanlan',
    identityInstruct: 'Pakisuri at kumpirmahin ang impormasyong nakuha mula sa iyong ID.',
    firstName:      'Pangalan',
    lastName:       'Apelyido',
    idType:         'Uri ng ID',
    idNumber:       'Numero ng ID',
    address:        'Tirahan',
    idTypes: ['Pasaporte', 'Lisensya sa Pagmamaneho', 'SSS ID', 'PhilHealth ID', 'Postal ID', 'UMID', 'Voter\'s ID', 'PRC ID', 'Iba Pa'],
    editNote:       'Maaari mong itama ang anumang field kung ang impormasyon ay hindi tama.',

    // Step 4 — Visit Info
    visitTitle:       'Impormasyon ng Pagbisita',
    visitInstruct:    'Mangyaring ibigay ang mga detalye ng iyong pagbisita.',
    companyAffil:     'Kumpanya / Organisasyon',
    companyPlaceholder:'hal. ABC Corporation, Vendor, Gobyerno',
    purpose:          'Layunin ng Pagpasok',
    purposes:         ['Pulong sa Negosyo', 'Paghahatid', 'Pagpapanatili', 'Panayam', 'Pagsasanay', 'Gobyerno / Opisyal', 'Personal', 'Iba Pa'],
    personnel:        'Taong / Departamento na Bibisitahin',
    personnelPlaceholder: 'hal. Operations Manager, HR Department',
    receptionFieldsInstruct: 'Pupunan ng reception o security staff.',
    badgeNumber:      'Numero ng Badge ng Bisita',
    badgePlaceholder: 'Itinalagang numero ng badge',
    ppeLoanedLabel:   'Hiniramo na PPE',
    ppeYes:           'Oo',
    ppeNo:            'Hindi',
    notesLabel:       'Mga Tala ng Operator',
    notesPlaceholder: 'Mga panloob na tala para sa mga kawani lamang…',
    notesHint:        'Nakikita lamang ng reception / security staff. Hindi ipinapakita sa bisita.',
    required:         'Kinakailangan',

    // Step 5 — Consent
    consentTitle:       'Mga Panuntunan at Pahintulot',
    consentInstruct:    'Pakibasa nang mabuti ang sumusunod bago magpatuloy.',
    consentRule:        'Sumasang-ayon akong sumunod sa mga patakaran at regulasyon ng pasilidad.',
    consentPrivacy:     'Pumapayag ako sa pangongolekta at pagproseso ng aking personal na impormasyon alinsunod sa Patakaran sa Pagkapribado ng pasilidad.',
    viewRules:          'Tingnan ang Mga Panuntunan',
    viewPrivacy:        'Tingnan ang Patakaran sa Pagkapribado',
    confirmEntry:       'Kumpirmahin ang Pagpasok',
    consentRequired:    'Kailangan mong sumang-ayon sa parehong aytem upang magpatuloy.',

    // Step 6 — Result
    approvedTitle:      'APRUBADONG PAGPASOK',
    approvedSub:        'Matagumpay na naitala ang pagpasok.',
    restrictedTitle:    'HINDI PINAPAYAGAN',
    restrictedSub:      'Ang indibidwal na ito ay may flag. Makipag-ugnayan sa tauhan ng seguridad.',
    entryTime:          'Oras ng Pagpasok',
    checkInAnother:     'Bagong Pagpasok',
    escalate:           'I-escalate sa Seguridad',
    overrideAdmin:      'Admin Override',

    // Employee
    empTitle:           'Pagdalo ng Empleyado',
    empCheckin:         'Check-In',
    empCheckout:        'Check-Out',
    empCapture:         'Kumuha at I-log',
    empLogged:          'Naitala ang Pagdalo',

    // General
    back:           'Bumalik',
    next:           'Susunod',
    cancel:         'Kanselahin',
    confirm:        'Kumpirmahin',
    loading:        'Sandali lamang…',
    error:          'May naganap na error. Pakisubukang muli.',
  }
}
