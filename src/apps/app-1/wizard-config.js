export default {
  backend: {
    api: '/api/wizard/submit',
  },
  steps: [
  {
    "id": 0,
    "type": "cards-step",
    "description":"house select",
    "title": "Welche Immobilie möchten Sie bewerten?",
    "fieldName": "houseType",
    "options": [
      {  id:"0", value:"Haus", "next" : 1, "prev" : -1, "options": {"icon":"other.svg", "text":"Haus", "size":"s"}},
      {  id:"1", value:"Wohnung", "next" : 100, "prev" : -1, "options": {"icon":"other.svg", "text":"Wohnung", "size":"s"}},
      {  id:"2", value:"Gewerbe", "next" : 200, "prev" : -1, "options": {"icon":"other.svg", "text":"Gewerbe", "size":"s"}},
      {  id:"2", value:"Grundstück", "next" : 300, "prev" : -1, "options": {"icon":"other.svg", "text":"Grundstück", "size":"s"}},
      {  id:"3", value:"Sonderimmobilien", "next" : 400, "prev" : -1, "options": {"icon":"other.svg", "text":"Sonderimmobilien", "size":"s"}}
    ]
  },
  {
    "id": 1,
    "type": "cards-step",
    "description":"Art des Gebäudes",
    "title": "Art des Gebäudes",
    "fieldName": "propertyType",
    "options": [
      {  id:"0", value:"Einfamilienhaus", "next" : 2, "prev" : -1, "options": {"icon":"other.svg", "text":"Einfamilienhaus", "size":"s"}},
      {  id:"1", value:"Reihenendhaus", "next" : 2, "prev" : -1, "options": {"icon":"other.svg", "text":"Reihenendhaus", "size":"s"}},
      {  id:"2", value:"Reihenmittelhaus", "next" : 2, "prev" : -1, "options": {"icon":"other.svg", "text":"Reihenmittelhaus", "size":"s"}},
      {  id:"2", value:"Doppelhaushälfte", "next" : 2, "prev" : -1, "options": {"icon":"other.svg", "text":"Doppelhaushälfte", "size":"s"}},
      {  id:"3", value:"Mehrfamilienhaus", "next" : 2, "prev" : -1, "options": {"icon":"other.svg", "text":"Mehrfamilienhaus", "size":"s"}},
      {  id:"3", value:"Wohn- & Geschäftshaus", "next" : 2, "prev" : -1, "options": {"icon":"other.svg", "text":"Wohn- & Geschäftshaus", "size":"s"}}
    ]
  },
  {
    "id": 2,
    "type": "cards-step",
    "description":"marketingType",
    "title": "Grund für die Bewertung",
    "fieldName": "contractReason",
    "options": [
      {  id:"0", value:"Erbe", "next" : 998, "prev" : -1, "options": {"icon":"other.svg", "text":"Erbe", "size":"s"}},
      {  id:"1", value:"Scheidung", "next" : 998, "prev" : -1, "options": {"icon":"other.svg", "text":"Scheidung", "size":"s"}},
      {  id:"2", value:"Verkauf", "next" : 998, "prev" : -1, "options": {"icon":"other.svg", "text":"Verkauf", "size":"s"}},
      {  id:"3", value:"Kauf", "next" : 998, "prev" : -1, "options": {"icon":"other.svg", "text":"Kauf", "size":"s"}},
      {  id:"4", value:"Finanzamt", "next" : 998, "prev" : -1, "options": {"icon":"other.svg", "text":"Finanzamt", "size":"s"}},
      {  id:"5", value:"Gericht", "next" : 998, "prev" : -1, "options": {"icon":"other.svg", "text":"Gericht", "size":"s"}},
      {  id:"6", value:"Sonstiges", "next" : 998, "prev" : -1, "options": {"icon":"other.svg", "text":"Sonstiges", "size":"s"}},
    ]
  },
  {
    "id": 100,
    "type": "slider-step",
    "description":"Apartment Count",
    "title": "Anzahl der Wohneinheiten",
    "fieldName": "apartmentAmount",
    "options": [
      { id:"0", "next" : 101, "prev" : "nil", "options": {
        "unit": "Anzahl",
        "range": {
          "from": 1,
          "to": 10
        },
        "default": 1,
        "text":"Anzahl der Wohnungen",
        "icon": "property-square.svg"
      }
    }
    ]
  },
  {
    "id": 101,
    "type": "cards-step",
    "description":"marketingType",
    "title": "Grund für die Bewertung",
    "fieldName": "contractReason",
    "options": [
      {  id:"0", value:"Erbe", "next" : 998, "prev" : -1, "options": {"icon":"other.svg", "text":"Erbe", "size":"s"}},
      {  id:"1", value:"Scheidung", "next" : 998, "prev" : -1, "options": {"icon":"other.svg", "text":"Scheidung", "size":"s"}},
      {  id:"2", value:"Verkauf", "next" : 998, "prev" : -1, "options": {"icon":"other.svg", "text":"Verkauf", "size":"s"}},
      {  id:"3", value:"Kauf", "next" : 998, "prev" : -1, "options": {"icon":"other.svg", "text":"Kauf", "size":"s"}},
      {  id:"4", value:"Finanzamt", "next" : 998, "prev" : -1, "options": {"icon":"other.svg", "text":"Finanzamt", "size":"s"}},
      {  id:"5", value:"Gericht", "next" : 998, "prev" : -1, "options": {"icon":"other.svg", "text":"Gericht", "size":"s"}},
      {  id:"6", value:"Sonstiges", "next" : 998, "prev" : -1, "options": {"icon":"other.svg", "text":"Sonstiges", "size":"s"}},
    ]
  },
  {
    "id": 200,
    "type": "slider-step",
    "description":"Apartment Count",
    "title": "Nutzfläche",
    "fieldName": "floorSpace",
    "options": [
      { id:"0", "next" : 201, "prev" : "nil", "options": {
        "unit": "m2",
        "range": {
          "from": 500,
          "to": 2500
        },
        "default": 500,
        "text":"Nutzfläche",
        "icon": "property-square.svg"
      }
    }
    ]
  },
  {
    "id": 201,
    "type": "cards-step",
    "description":"marketingType",
    "title": "Nutzungsart",
    "fieldName": "contractReason",
    "options": [
      {  id:"0", value:"Produktion", "next" : 202, "prev" : -1, "options": {"icon":"other.svg", "text":"Produktion", "size":"s"}},
      {  id:"1", value:"Lager/ Logistik", "next" : 202, "prev" : -1, "options": {"icon":"other.svg", "text":"Lager/ Logistik", "size":"s"}},
      {  id:"2", value:"Büro/ Praxis", "next" : 202, "prev" : -1, "options": {"icon":"other.svg", "text":"Büro/ Praxis", "size":"s"}},
      {  id:"3", value:"Handel", "next" : 202, "prev" : -1, "options": {"icon":"other.svg", "text":"Handel", "size":"s"}},
      {  id:"4", value:"Sonstiges (Eingabefeld)", "next" : 202, "prev" : -1, "options": {"icon":"other.svg", "text":"Sonstiges (Eingabefeld) ", "size":"s"}},      
    ]
  },
  {
    "id": 202,
    "type": "cards-step",
    "description":"marketingType",
    "title": "Grund für die Bewertung",
    "fieldName": "contractReason",
    "options": [
      {  id:"0", value:"Erbe", "next" : 998, "prev" : -1, "options": {"icon":"other.svg", "text":"Erbe", "size":"s"}},
      {  id:"1", value:"Scheidung", "next" : 998, "prev" : -1, "options": {"icon":"other.svg", "text":"Scheidung", "size":"s"}},
      {  id:"2", value:"Verkauf", "next" : 998, "prev" : -1, "options": {"icon":"other.svg", "text":"Verkauf", "size":"s"}},
      {  id:"3", value:"Kauf", "next" : 998, "prev" : -1, "options": {"icon":"other.svg", "text":"Kauf", "size":"s"}},
      {  id:"4", value:"Finanzamt", "next" : 998, "prev" : -1, "options": {"icon":"other.svg", "text":"Finanzamt", "size":"s"}},
      {  id:"5", value:"Gericht", "next" : 998, "prev" : -1, "options": {"icon":"other.svg", "text":"Gericht", "size":"s"}},
      {  id:"6", value:"Sonstiges", "next" : 998, "prev" : -1, "options": {"icon":"other.svg", "text":"Sonstiges", "size":"s"}},
    ]
  },
  {
    "id": 300,
    "type": "slider-step",
    "description":"propertySize",
    "title": "Grundstücksgröße",
    "fieldName": "propertySize",
    "options": [
      { id:"0", "next" : 301, "prev" : "nil", "options": {
        "unit": "Anzahl",
        "range": {
          "from": 500,
          "to": 1000
        },
        "default": 500,
        "text":"Grundstücksgröße",
        "icon": "property-square.svg"
      }
    }
    ]
  },
  {
    "id": 301,
    "type": "cards-step",
    "description":"marketingType",
    "title": "Grund für die Bewertung",
    "fieldName": "contractReason",
    "options": [
      {  id:"0", value:"Erbe", "next" : 998, "prev" : -1, "options": {"icon":"other.svg", "text":"Erbe", "size":"s"}},
      {  id:"1", value:"Scheidung", "next" : 998, "prev" : -1, "options": {"icon":"other.svg", "text":"Scheidung", "size":"s"}},
      {  id:"2", value:"Verkauf", "next" : 998, "prev" : -1, "options": {"icon":"other.svg", "text":"Verkauf", "size":"s"}},
      {  id:"3", value:"Kauf", "next" : 998, "prev" : -1, "options": {"icon":"other.svg", "text":"Kauf", "size":"s"}},
      {  id:"4", value:"Finanzamt", "next" : 998, "prev" : -1, "options": {"icon":"other.svg", "text":"Finanzamt", "size":"s"}},
      {  id:"5", value:"Gericht", "next" : 998, "prev" : -1, "options": {"icon":"other.svg", "text":"Gericht", "size":"s"}},
      {  id:"6", value:"Sonstiges", "next" : 998, "prev" : -1, "options": {"icon":"other.svg", "text":"Sonstiges", "size":"s"}},
    ]
  },
  {
    "id": 400,
    "type": "slider-step",
    "description":"Apartment Count",
    "title": "Nutzfläche",
    "fieldName": "floorSpace",
    "options": [
      { id:"0", "next" : 401, "prev" : "nil", "options": {
        "unit": "m2",
        "range": {
          "from": 500,
          "to": 2000
        },
        "default": 500,
        "text":"Nutzfläche",
        "icon": "property-square.svg"
      }
    }
    ]
  },
  {
    "id": 401,
    "type": "cards-step",
    "description":"marketingType",
    "title": "Nutzungsart",
    "fieldName": "contractReason",
    "options": [
      {  id:"0", value:"Hotel", "next" : 402, "prev" : -1, "options": {"icon":"other.svg", "text":"Hotel", "size":"s"}},
      {  id:"1", value:"Pflegeheim", "next" : 402, "prev" : -1, "options": {"icon":"other.svg", "text":"Pflegeheim", "size":"s"}},
      {  id:"2", value:"Krankenhaus", "next" : 402, "prev" : -1, "options": {"icon":"other.svg", "text":"Krankenhaus", "size":"s"}},
      {  id:"3", value:"Gastronomie", "next" : 402, "prev" : -1, "options": {"icon":"other.svg", "text":"Gastronomie", "size":"s"}},
      {  id:"4", value:"Sonstiges (Eingabefeld)", "next" : 402, "prev" : -1, "options": {"icon":"other.svg", "text":"Sonstiges (Eingabefeld) ", "size":"s"}},      
    ]
  },
  {
    "id": 402,
    "type": "cards-step",
    "description":"marketingType",
    "title": "Grund für die Bewertung",
    "fieldName": "contractReason",
    "options": [
      {  id:"0", value:"Erbe", "next" : 998, "prev" : -1, "options": {"icon":"other.svg", "text":"Erbe", "size":"s"}},
      {  id:"1", value:"Scheidung", "next" : 998, "prev" : -1, "options": {"icon":"other.svg", "text":"Scheidung", "size":"s"}},
      {  id:"2", value:"Verkauf", "next" : 998, "prev" : -1, "options": {"icon":"other.svg", "text":"Verkauf", "size":"s"}},
      {  id:"3", value:"Kauf", "next" : 998, "prev" : -1, "options": {"icon":"other.svg", "text":"Kauf", "size":"s"}},
      {  id:"4", value:"Finanzamt", "next" : 998, "prev" : -1, "options": {"icon":"other.svg", "text":"Finanzamt", "size":"s"}},
      {  id:"5", value:"Gericht", "next" : 998, "prev" : -1, "options": {"icon":"other.svg", "text":"Gericht", "size":"s"}},
      {  id:"6", value:"Sonstiges", "next" : 998, "prev" : -1, "options": {"icon":"other.svg", "text":"Sonstiges", "size":"s"}},
    ]
  },
  {
    "id": 998,
    "type": "slider-step",
    "description":"propertyLocation",
    "title": "Ort",
    "fieldName": "propertySize",
    "options": [
      { id:"0", "next" : 999, "prev" : "nil", "options": {
        "unit": "m2",
        "range": {
          "from": 200,
          "to": 2500
        },
        "text":"Postleitzahl",
        "icon": "property-square.svg"
      }
    }
    ]
  },
  {
    "id": 999,
    "type": "send-step",
    "description":"send data",
    "title": "send data",
    "options": [
      {  id:"0", "next" : 1000},
    ]
  },
  {
    "id": 1000,
    "type": "confirmation-step",
    "description":"send data",
    "title": "Anfrage erfolgreich gesendet",
    "options": [
    ]
  }
  ]}