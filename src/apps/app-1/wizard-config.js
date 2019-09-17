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
      {  id:"0", value:"Haus", "next" : 1, "stepRange":{"from": 1, "to": 99}, "options": {"icon":"house.svg", "text":"Haus", "size":"s"}},
      {  id:"1", value:"Wohnung", "next" : 100, "stepRange":{"from": 100, "to": 199}, "options": {"icon":"apartment.svg", "text":"Wohnung", "size":"s"}},
      {  id:"2", value:"Gewerbe", "next" : 200, "stepRange":{"from": 200, "to": 299}, "options": {"icon":"commercial.svg", "text":"Gewerbe", "size":"s"}},
      {  id:"3", value:"Grundstück", "next" : 300, "stepRange":{"from": 300, "to": 399}, "options": {"icon":"property1.svg", "text":"Grundstück", "size":"s"}},
      {  id:"4", value:"Sonderimmobilien", "next" : 400, "stepRange":{"from": 400, "to": 499}, "options": {"icon":"special.svg", "text":"Sonderimmobilien", "size":"s"}}
    ]
  },
  {
    "id": 1,
    "type": "cards-step",
    "description":"Art des Gebäudes",
    "title": "Art des Gebäudes",
    "fieldName": "propertyType",
    "options": [
      {  id:"0", value:"Einfamilienhaus", "next" : 2, "prev" : -1, "options": {"icon":"apartment.svg", "text":"Einfamilienhaus", "size":"s"}},
      {  id:"1", value:"Reihenendhaus", "next" : 2, "prev" : -1, "options": {"icon":"apartment.svg", "text":"Reihenendhaus", "size":"s"}},
      {  id:"2", value:"Reihenmittelhaus", "next" : 2, "prev" : -1, "options": {"icon":"apartment.svg", "text":"Reihenmittelhaus", "size":"s"}},
      {  id:"3", value:"Doppelhaushälfte", "next" : 2, "prev" : -1, "options": {"icon":"apartment.svg", "text":"Doppelhaushälfte", "size":"s"}},
      {  id:"4", value:"Mehrfamilienhaus", "next" : 2, "prev" : -1, "options": {"icon":"apartment.svg", "text":"Mehrfamilienhaus", "size":"s"}},
      {  id:"5", value:"Wohn- & Geschäftshaus", "next" : 2, "prev" : -1, "options": {"icon":"apartment.svg", "text":"Wohn- & Geschäftshaus", "size":"s"}}
    ]
  },
  {
    "id": 2,
    "type": "cards-step",
    "description":"marketingType",
    "title": "Grund für die Bewertung",
    "fieldName": "contractReason",
    "options": [
      {  id:"0", value:"Erbe", "next" : 998, "prev" : -1, "options": {"icon":"apartment.svg", "text":"Erbe", "size":"s"}},
      {  id:"1", value:"Scheidung", "next" : 998, "prev" : -1, "options": {"icon":"apartment.svg", "text":"Scheidung", "size":"s"}},
      {  id:"2", value:"Verkauf", "next" : 998, "prev" : -1, "options": {"icon":"apartment.svg", "text":"Verkauf", "size":"s"}},
      {  id:"3", value:"Kauf", "next" : 998, "prev" : -1, "options": {"icon":"apartment.svg", "text":"Kauf", "size":"s"}},
      {  id:"4", value:"Finanzamt", "next" : 998, "prev" : -1, "options": {"icon":"apartment.svg", "text":"Finanzamt", "size":"s"}},
      {  id:"5", value:"Gericht", "next" : 998, "prev" : -1, "options": {"icon":"apartment.svg", "text":"Gericht", "size":"s"}},
      {  id:"6", value:"Sonstiges", "next" : 3, "prev" : -1, "options": {"icon":"apartment.svg", "text":"Sonstiges", "size":"s"}},
    ]
  },
  {
    "id": 3,
    "type": "input-step",
    "description":"differentReason",
    "title": "Anderer Grund",
    "fieldName": "differentReason",
    "options": [
      { id:"0", "next" : 998, "prev" : "nil", "options": {
        "default": '',
        "text":"Grund für die Bewertung?",
        "icon": "property-square.svg"
      }
    }
    ]
  },
  {
    "id": 100,
    "type": "slider-step",
    "description":"Apartment Count",
    "title": "Wie viele Zimmer hat die Wohnung?(ohne Bad und Küche)",
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
      {  id:"0", value:"Erbe", "next" : 998, "prev" : -1, "options": {"icon":"apartment.svg", "text":"Erbe", "size":"s"}},
      {  id:"1", value:"Scheidung", "next" : 998, "prev" : -1, "options": {"icon":"apartment.svg", "text":"Scheidung", "size":"s"}},
      {  id:"2", value:"Verkauf", "next" : 998, "prev" : -1, "options": {"icon":"apartment.svg", "text":"Verkauf", "size":"s"}},
      {  id:"3", value:"Kauf", "next" : 998, "prev" : -1, "options": {"icon":"apartment.svg", "text":"Kauf", "size":"s"}},
      {  id:"4", value:"Finanzamt", "next" : 998, "prev" : -1, "options": {"icon":"apartment.svg", "text":"Finanzamt", "size":"s"}},
      {  id:"5", value:"Gericht", "next" : 998, "prev" : -1, "options": {"icon":"apartment.svg", "text":"Gericht", "size":"s"}},
      {  id:"6", value:"Sonstiges", "next" : 998, "prev" : -1, "options": {"icon":"apartment.svg", "text":"Sonstiges", "size":"s"}},
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
      {  id:"0", value:"Produktion", "next" : 202, "prev" : -1, "options": {"icon":"apartment.svg", "text":"Produktion", "size":"s"}},
      {  id:"1", value:"Lager/ Logistik", "next" : 202, "prev" : -1, "options": {"icon":"apartment.svg", "text":"Lager/ Logistik", "size":"s"}},
      {  id:"2", value:"Büro/ Praxis", "next" : 202, "prev" : -1, "options": {"icon":"apartment.svg", "text":"Büro/ Praxis", "size":"s"}},
      {  id:"3", value:"Handel", "next" : 202, "prev" : -1, "options": {"icon":"apartment.svg", "text":"Handel", "size":"s"}},
      {  id:"4", value:"Sonstiges (Eingabefeld)", "next" : 202, "prev" : -1, "options": {"icon":"apartment.svg", "text":"Sonstiges (Eingabefeld) ", "size":"s"}},      
    ]
  },
  {
    "id": 202,
    "type": "cards-step",
    "description":"marketingType",
    "title": "Grund für die Bewertung",
    "fieldName": "contractReason",
    "options": [
      {  id:"0", value:"Erbe", "next" : 998, "prev" : -1, "options": {"icon":"apartment.svg", "text":"Erbe", "size":"s"}},
      {  id:"1", value:"Scheidung", "next" : 998, "prev" : -1, "options": {"icon":"apartment.svg", "text":"Scheidung", "size":"s"}},
      {  id:"2", value:"Verkauf", "next" : 998, "prev" : -1, "options": {"icon":"apartment.svg", "text":"Verkauf", "size":"s"}},
      {  id:"3", value:"Kauf", "next" : 998, "prev" : -1, "options": {"icon":"apartment.svg", "text":"Kauf", "size":"s"}},
      {  id:"4", value:"Finanzamt", "next" : 998, "prev" : -1, "options": {"icon":"apartment.svg", "text":"Finanzamt", "size":"s"}},
      {  id:"5", value:"Gericht", "next" : 998, "prev" : -1, "options": {"icon":"apartment.svg", "text":"Gericht", "size":"s"}},
      {  id:"6", value:"Sonstiges", "next" : 998, "prev" : -1, "options": {"icon":"apartment.svg", "text":"Sonstiges", "size":"s"}},
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
        "unit": "Alternativ eintippen",
        "range": {
          "from": 500,
          "to": 1000
        },
        "default": 500,
        "text":"Welche Fläche hat das Grundstück?",
        "icon": "m2-area-icon.svg"
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
      {  id:"0", value:"Erbe", "next" : 998, "prev" : -1, "options": {"icon":"apartment.svg", "text":"Erbe", "size":"s"}},
      {  id:"1", value:"Scheidung", "next" : 998, "prev" : -1, "options": {"icon":"apartment.svg", "text":"Scheidung", "size":"s"}},
      {  id:"2", value:"Verkauf", "next" : 998, "prev" : -1, "options": {"icon":"apartment.svg", "text":"Verkauf", "size":"s"}},
      {  id:"3", value:"Kauf", "next" : 998, "prev" : -1, "options": {"icon":"apartment.svg", "text":"Kauf", "size":"s"}},
      {  id:"4", value:"Finanzamt", "next" : 998, "prev" : -1, "options": {"icon":"apartment.svg", "text":"Finanzamt", "size":"s"}},
      {  id:"5", value:"Gericht", "next" : 998, "prev" : -1, "options": {"icon":"apartment.svg", "text":"Gericht", "size":"s"}},
      {  id:"6", value:"Sonstiges", "next" : 998, "prev" : -1, "options": {"icon":"apartment.svg", "text":"Sonstiges", "size":"s"}},
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
      {  id:"0", value:"Hotel", "next" : 402, "prev" : -1, "options": {"icon":"apartment.svg", "text":"Hotel", "size":"s"}},
      {  id:"1", value:"Pflegeheim", "next" : 402, "prev" : -1, "options": {"icon":"apartment.svg", "text":"Pflegeheim", "size":"s"}},
      {  id:"2", value:"Krankenhaus", "next" : 402, "prev" : -1, "options": {"icon":"apartment.svg", "text":"Krankenhaus", "size":"s"}},
      {  id:"3", value:"Gastronomie", "next" : 402, "prev" : -1, "options": {"icon":"apartment.svg", "text":"Gastronomie", "size":"s"}},
      {  id:"4", value:"Sonstiges (Eingabefeld)", "next" : 402, "prev" : -1, "options": {"icon":"apartment.svg", "text":"Sonstiges (Eingabefeld) ", "size":"s"}},      
    ]
  },
  {
    "id": 402,
    "type": "cards-step",
    "description":"marketingType",
    "title": "Grund für die Bewertung",
    "fieldName": "contractReason",
    "options": [
      {  id:"0", value:"Erbe", "next" : 998, "prev" : -1, "options": {"icon":"apartment.svg", "text":"Erbe", "size":"s"}},
      {  id:"1", value:"Scheidung", "next" : 998, "prev" : -1, "options": {"icon":"apartment.svg", "text":"Scheidung", "size":"s"}},
      {  id:"2", value:"Verkauf", "next" : 998, "prev" : -1, "options": {"icon":"apartment.svg", "text":"Verkauf", "size":"s"}},
      {  id:"3", value:"Kauf", "next" : 998, "prev" : -1, "options": {"icon":"apartment.svg", "text":"Kauf", "size":"s"}},
      {  id:"4", value:"Finanzamt", "next" : 998, "prev" : -1, "options": {"icon":"apartment.svg", "text":"Finanzamt", "size":"s"}},
      {  id:"5", value:"Gericht", "next" : 998, "prev" : -1, "options": {"icon":"apartment.svg", "text":"Gericht", "size":"s"}},
      {  id:"6", value:"Sonstiges", "next" : 998, "prev" : -1, "options": {"icon":"apartment.svg", "text":"Sonstiges", "size":"s"}},
    ]
  },
  {
    "id": 998,
    "type": "map-locator-step",
    "description":"propertyLocation",
    "isSharedStep":true,
    "title": "Ort",
    "fieldName": "zip",
    "options": [
      { id:"0", "next" : 999, "prev" : "nil", "options": {
        "default": "",
        "text":"Postleitzahl",
        "description": "Wir benötigen Ihre Postleitzahl, um den Wert Ihrer Immobilie besser ermitteln zu können",
        "icon": "map.png"
      }
    }
    ]
  },
  {
    "id": 999,
    "type": "send-step",
    "description":"send data",
    "isSharedStep":true,
    "title": "send data",
    "options": [
      {  id:"0", "next" : 1000},
    ]
  },
  {
    "id": 1000,
    "type": "confirmation-step",
    "description":"send data",
    "isSharedStep":true,
    "title": "Um Ihnen eine genaue Analyse Ihrer Immobilie zukommen lassen zu können, benötigen wir weitere Daten von Ihnen. Dazu wird Sie in Kürze ein Kundenberater telefonisch kontaktieren.",
    "options": [
    ]
  }
  ]}