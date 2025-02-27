// interface ExecutionPhase {
//   day: number;
//   type: 'week' | 'days';
// }

// interface ContractPeriodRequest {
//   preparationPhase: ExecutionPhase;
//   approvalPhase: ExecutionPhase;
//   shopDrawingPhase: ExecutionPhase;
//   fabricationPhase: ExecutionPhase;
//   transportationPhase: ExecutionPhase;
//   location: string;
// }

// interface PartyRequest {
//   company: string;
//   representedBy: string;
//   position: string;
//   address: string;
// }

// interface QuotationRequest {
//   date: string;
//   ddmmyy: string;
// }

// interface HeaderRequest {
//   no: string;
//   projectName: string;
//   itemName: string;
//   location: string;
// }

// interface ContractValueRequest {
//   value: number;
//   place: string;
//   incoterms: string;
//   incotermsYear: number;
//   valueAsWord: string;
// }

// interface PaymentPhase {
//   percent: number;
//   // value: number
//   valueAsWord: string;
//   maxDayText: string;
// }

// interface PaymentRequest {
//   firstPayment: PaymentPhase;
//   secondPayment: PaymentPhase;
// }

// interface ConsigneeRequest {
//   name: string;
//   location: string;
// }

// interface NotificationPartyRequest {
//   name: string;
//   location: string;
// }

// interface CreateContractRequest {
//   contractSignDate: string;
//   header: HeaderRequest;
//   partyA: PartyRequest;
//   quotation: QuotationRequest;
//   contractPeriod: ContractPeriodRequest;
//   contractValue: ContractValueRequest;
//   payment: PaymentRequest;
//   consignee: ConsigneeRequest;
//   notificationParty: NotificationPartyRequest;
//   pos: string;
//   pod: string;
//   shipmentTerms: string;
// }
