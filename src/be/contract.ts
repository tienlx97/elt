// import fs from 'fs';
// import PizZip from 'pizzip';
// import Docxtemplater from 'docxtemplater';

// const convertPhase2Text = (phase: ExecutionPhase) => `${phase.day} ${phase.type}${phase.day > 1 ? 's' : ''}`;

// const formatCurrency = (currency: number) => {
//   const formatted = currency.toLocaleString('en-US', {
//     minimumFractionDigits: 2,
//     maximumFractionDigits: 2,
//   });

//   return formatted;
// };

// const normalizeData = (request: CreateContractRequest) => {
//   const { contractValue, payment, contractPeriod, header, partyA, quotation, consignee, notificationParty } = request;

//   return {
//     contract_date: request.contractSignDate,
//     contract_no: header.no,
//     project_name: header.projectName,
//     item: header.itemName?.toUpperCase() ?? 'STEEL STRUCTURE',
//     contract_country: header.location,
//     party_a_company: partyA.company,
//     party_a_represented_by: partyA.representedBy,
//     party_a_position: partyA.position,
//     party_a_address: partyA.address,
//     contract_quotation_date: quotation.date,
//     contract_quotation_date_ddmmyy: quotation.ddmmyy,
//     preparation_day: convertPhase2Text(contractPeriod.preparationPhase),
//     approval_day: convertPhase2Text(contractPeriod.approvalPhase),
//     shop_drawing_day: convertPhase2Text(contractPeriod.shopDrawingPhase),
//     fabrication_day: convertPhase2Text(contractPeriod.fabricationPhase),
//     transportation_day: convertPhase2Text(contractPeriod.transportationPhase),
//     location: contractPeriod.location,
//     contract_value: formatCurrency(contractValue.value),
//     incoterm: contractValue.incoterms,
//     place: contractValue.place,
//     contract_value_word: contractValue.valueAsWord,
//     first_pm_percent: payment.firstPayment.percent,
//     first_pm_value: formatCurrency((payment.firstPayment.percent / 100) * contractValue.value),
//     first_pm_value_word: payment.firstPayment.valueAsWord,
//     first_pm_max_day: payment.firstPayment.maxDayText,
//     second_pm_percent: payment.secondPayment.percent,
//     second_pm_value: formatCurrency((payment.secondPayment.percent / 100) * contractValue.value),
//     second_pm_value_word: payment.secondPayment.valueAsWord,
//     second_pm_max_day: payment.secondPayment.maxDayText,
//     consignee_name: consignee.name?.toUpperCase(),
//     consignee_location: consignee.location?.toUpperCase(),
//     notify_party_name: notificationParty.name?.toUpperCase(),
//     notify_party_location: notificationParty.location?.toUpperCase(),
//     pos: request.pos,
//     pod: request.pod,
//     shipment_terms: request.shipmentTerms,
//   };
// };

// export const createContract = async (request: CreateContractRequest) => {
//   try {
//     // Load the template dynamically per request
//     const content = fs.readFileSync('template.docx', 'binary');
//     const zip = new PizZip(content);
//     const doc = new Docxtemplater(zip);

//     // Normalize data and render the document
//     const data = normalizeData(request);
//     await doc.renderAsync(data);

//     // Generate the Word file as a Buffer
//     const buf = doc.getZip().generate({ type: 'nodebuffer' });

//     // Save the file (optional)
//     fs.writeFileSync('output.docx', buf);

//     return buf;
//   } catch (error) {
//     console.error('Error generating contract:', error);
//     throw new Error('Contract generation failed');
//   }
// };
