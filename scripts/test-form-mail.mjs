import { handleSubmission, parseSubmission, buildVisitorMail, buildStaffMail, parseEmails } from '../netlify/functions/submission-created/form-mail.mjs';

const sample = {
  payload: {
    form_name: 'contact_en',
    site_url: 'https://smart.pky-dripirrigation.com',
    data: {
      name: 'Peter Jakobsen',
      email: 'peter@example.com',
      market: 'Australia',
      business_type: 'Contractor / Installer',
      product_interest: 'Irrigation controller',
      order_type: 'Project use',
      message: 'Need a farm controller quote.',
      lead_source: 'google/cpc/farm-irrigation-controller',
      first_landing: '/product/farm-irrigation-controller/?utm_source=google',
      entry_src: 'live-demo',
      utm_source: 'google',
      utm_medium: 'cpc',
      utm_campaign: 'farm-irrigation-controller'
    }
  }
};

const sub = parseSubmission(sample);
if (sub.email !== 'peter@example.com' || sub.formName !== 'contact_en') throw new Error('parse failed');

const visitor = buildVisitorMail(sub);
if (!visitor.subject.includes('received') || !visitor.text.includes('Peter Jakobsen')) throw new Error('visitor mail failed');

const staff = buildStaffMail(sub, parseEmails(''));
if (!String(staff.to).includes('sandy@') || !staff.subject.includes('Peter Jakobsen')) throw new Error('staff mail failed');
if (!staff.text.includes('google/cpc') || staff.replyTo !== 'peter@example.com') throw new Error('staff attribution failed');

const dry = await handleSubmission(JSON.stringify(sample), { MAIL_FROM: 'PKYDrip <info@pky-dripirrigation.com>' });
if (!dry.staff.skipped || !dry.visitor.skipped) throw new Error('dry-run should skip send');

const oemSample = {
  payload: {
    form_name: 'oem_rfq',
    site_url: 'https://smart.pky-dripirrigation.com',
    data: {
      contact_name: 'Maria Chen',
      email: 'maria@brand.example',
      company: 'Oasis Irrigation',
      country: 'UAE',
      product_type: 'Irrigation Controller',
      zones: '16',
      valve_type: '24VAC',
      connectivity: ['Wi-Fi', '4G'],
      software_cloud: 'Our Own Cloud / App',
      customization: ['Private Label / Logo', 'Firmware'],
      quantity: '10–50',
      project_description: 'White-label 16-zone controller for greenhouse dealers.',
      rfq_file: 'https://forms.netlify.com/uploads/example.pdf',
      page_code: 'PC-0801-2-02-LAND-OEM-SMART-IC-01'
    }
  }
};
const oem = parseSubmission(oemSample);
if (oem.formName !== 'oem_rfq' || oem.name !== 'Maria Chen') throw new Error('oem parse failed');
const oemVisitor = buildVisitorMail(oem);
if (!oemVisitor.subject.includes('OEM RFQ')) throw new Error('oem visitor subject failed');
const oemStaff = buildStaffMail(oem, parseEmails(''));
if (!oemStaff.subject.includes('OEM RFQ') || !oemStaff.text.includes('16') || !oemStaff.text.includes('Wi-Fi, 4G')) {
  throw new Error('oem staff mail failed');
}

console.log('form-mail self-test ok');
console.log('visitor subject:', visitor.subject);
console.log('staff to:', staff.to);
console.log('staff subject:', staff.subject);
