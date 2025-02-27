import fs from 'fs';
import fetch from 'node-fetch';
import { fileTypeFromBuffer } from 'file-type';

const saveWordFileFromAPI = async (api: string) => {
  const response = await fetch(api, {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ 
      'contractSignDate': '26th February 2025',
      'header': {
        'no': '',
        'projectName': 'WAREHOUSE WH(19.2x40)',
        'itemName': 'STEEL STRUCTURE',
        'location': 'THAILAND'
      },
      'partyA': {
        'company': 'STRENGTH ENGINEERING CO.,LTD.',
        'representedBy': 'Miss Am Phuchaknin',
        'position': 'Managing Director',
        'address': '18/12 moo.8 T.numnoi Hatyai Songkla Thailand 90110'
      },
      'quotation': {
        'date': '19th February 2025',
        'ddmmyy': '19/02/2025'
      },
      'contractPeriod': {
        'preparationPhase': {
          'day': 1,
          'type': 'week'
        },
        'approvalPhase': {
          'day': 1,
          'type': 'week'
        },
        'shopDrawingPhase': {
          'day': 1,
          'type': 'week'
        },
        'fabricationPhase': {
          'day': 6,
          'type': 'week'
        },
        'transportationPhase': {
          'day': 1,
          'type': 'week'
        },
        'location': 'Bangkok port'
      },
      'contractValue':{
        'value': 55100,
        'incoterms': 'CIF',
        'place': 'Bangkok Port, Thailand',
        'incotermsYear': '2010',
        'valueAsWord': 'fifty-five thousand one hundred'
      },
      'payment': {
        'firstPayment': {
          'percent': 20,
          'valueAsWord': 'eleven thousand twenty',
          'maxDayText': '1 week'
        },
        'secondPayment': {
          'percent': 80,
          'valueAsWord': 'forty-four thousand eighty',
          'maxDayText': '7 (seven)'
        }
      },
      'consignee': {
        'name': 'STRENGTH ENGINEERING CO.,LTD.',
        'location': '18/12 MOO.8 T.NUMNOI HATYAI SONGKLA THAILAND 90110'
      },
      'notificationParty': {
        'name': 'STRENGTH ENGINEERING CO.,LTD.',
        'location': '18/12 MOO.8 T.NUMNOI HATYAI SONGKLA THAILAND 90110'
      },
      'pos': 'Ho Chi Minh City Port, Viet Nam',
      'pod': 'Bangkok port, Thailand',
      'shipmentTerms': 'CIF Bangkok, Thailand'
    }),
  });
  const arrayBuffer = await response.arrayBuffer();

  console.log({arrayBuffer});
  

  const buffer = Buffer.from(arrayBuffer);
  const fileType = await fileTypeFromBuffer(buffer);
  if (fileType?.ext) {
      const outputFileName = `from_api.${fileType.ext}`
      fs.createWriteStream(outputFileName).write(buffer);
  } else {
      console.log('File type could not be reliably determined! The binary data may be malformed! No file saved!')
  }
}




saveWordFileFromAPI('http://localhost:5001/api/contract/contract.json')
