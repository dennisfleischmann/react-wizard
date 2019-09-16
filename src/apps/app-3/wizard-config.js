export default {
  backend: {
    api: '/api/wizard/submit',
  },
  steps: [
  {
    "id":"0",
    "type": "cards-step",
    "description":"stairlift type",
    "title": "Welche Art Lift benötigen Sie?",
    "fieldName": "stairliftType",
    "options": [
      {  id:"0", value:"Sitzlift", "next" : 1, "prev" : -1, "options": {"icon":"stairlift.png", "text":"Sitzlift", "size":"s"}},
      {  id:"1", value:"Plattformlift", "next" : 1, "prev" : -1, "options": {"icon":"chair.png", "text":"Plattformlift", "size":"s"}},
      {  id:"2", value:"Hublift", "next" : 5, "prev" : -1, "options": {"icon":"lift.png", "text":"Hublift", "size":"s"}}
    ]
  },
  {
    "id":"1",
    "type": "cards-step",
    "description":"stairs type",
    "title": "Wie ist Ihre Treppe beschaffen?",
    "fieldName": "stairsType",
    "options": [
      {  id:"0", value:"Gerade", "next" : 2, "prev" : -1, "options": {"icon":"straight.png", "text":"Gerade", "size":"s"}},
      {  id:"1", value:"Kurvig", "next" : 2, "prev" : -1, "options": {"icon":"curved.png", "text":"Kurvig", "size":"s"}},
      {  id:"2", value:"Sonstiges", "next" : 2, "prev" : -1, "options": {"icon":"other.png", "text":"Sonstiges", "size":"s"}}
    ]
  },
  {
    "id":"2",
    "type": "send-step",
    "description":"send data",
    "title": "Kostenloses Angebot erhalten",
    "options": [
      {  id:"0", "next" : 3},
    ]
  },
  {
    "id":"3",
    "type": "confirmation-step",
    "description":"show confirmation",
    "title": "Anfrage erfolgreich gesendet",
    "options": [
    ]
  }
  ]}