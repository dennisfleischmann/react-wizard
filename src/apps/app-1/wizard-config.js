export default {
  backend: {
    api: '/api/wizard/submit',
  },
  background_img: "https://images.ctfassets.net/64q0dihi81ut/4JsjvN05wPCIhRMI07CzXf/94c3c9089e60271849e01efa0c7a0f75/hero_bg.png?w=1200&fm=jpg&fl=progressive",
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
      {  id:"4", value:"Sonder&shy;immobilien", "next" : 400, "stepRange":{"from": 400, "to": 499}, "options": {"icon":"special.svg", "text":"Sonderimmobilien", "size":"s"}}
    ]
  },
  {
    "id": 1,
    "type": "cards-step",
    "description":"type of real estate",
    "title": "Bitte wählen Sie die Art des Gebäudes aus",
    "fieldName": "propertyType",
    "options": [
      {  id:"0", value:"Einfamilien&shy;haus", "next" : 2, "prev" : -1, "options": {"icon":"one_family_house.svg", "text":"Einfamilienhaus", "size":"m"}},
      {  id:"1", value:"Reihen&shy;end&shy;haus", "next" : 2, "prev" : -1, "options": {"icon":"row_house.svg", "text":"Reihenendhaus", "size":"m"}},
      {  id:"2", value:"Doppelha&shy;us&shy;hälfte", "next" : 2, "prev" : -1, "options": {"icon":"semi_detached_house.svg", "text":"Doppelhaushälfte", "size":"m"}},
      {  id:"3", value:"Mehrfamilien&shy;haus", "next" : 2, "prev" : -1, "options": {"icon":"multifamily_house.svg", "text":"Mehrfamilienhaus", "size":"m"}},
      {  id:"4", value:"Wohn- & Geschäfts&shy;haus", "next" : 2, "prev" : -1, "options": {"icon":"live_commercial.svg", "text":"Wohn- & Geschäftshaus", "size":"m"}},
    ]
  },
  {
    "id": 2,
    "type": "cards-step",
    "description":"contractReason",
    "title": "Grund für die Bewertung",
    "fieldName": "contractReason",
    "options": [
      {  id:"0", value:"Erbe", "next" : 998, "prev" : -1, "options": {"icon":"heritage.svg", "text":"Erbe", "size":"m"}},
      {  id:"1", value:"Scheidung", "next" : 998, "prev" : -1, "options": {"icon":"divorce.svg", "text":"Scheidung", "size":"m"}},
      {  id:"2", value:"Verkauf", "next" : 998, "prev" : -1, "options": {"icon":"sell.svg", "text":"Verkauf", "size":"m"}},
      {  id:"3", value:"Kauf", "next" : 998, "prev" : -1, "options": {"icon":"buy.svg", "text":"Kauf", "size":"m"}},
      {  id:"4", value:"Sonstiges", "next" : 3, "prev" : -1, "options": {"icon":"other.svg", "text":"Sonstiges", "size":"m"}},
    ]
  },
  {
    "id": 3,
    "type": "input-step",
    "description":"differentReason",
    "title": "Grund für die Bewertung",
    "isSpecialSelection": true,
    "fieldName": "differentReason",
    "options": [
      { id:"0", "next" : 998, "prev" : "nil", "button_title": "Next","options": {
        "default": '',
        "text":"Grund",
        "icon": "other.svg",
        "button_title": "Button title",
        "placeholder" : "Add placeholder here",
        "description": "Place some description here"
      }
    }
    ]
  },
  {
    "id": 100,
    "type": "slider-step",
    "description":"Apartment Count",
    "title": "Wählen Sie die Anzahl der Wohnung",
    "fieldName": "apartmentAmount",
    "options": [
      { id:"0", "next" : 101, "prev" : "nil", "options": {
        "unit": "Anzahl",
        "range": {
          "min": 1,
          "max": 100
        },
        "default": 1,
        "text":"Anzahl der Wohnungen",
        "icon": "flat_units.svg"
      }
    }
    ]
  },
  {
    "id": 101,
    "type": "cards-step",
    "description":"marketingType",
    "title": "Wählen Sie den Grund für eine Immobilienbewertung aus",
    "fieldName": "contractReason",
    "options": [
      {  id:"0", value:"Erbe", "next" : 998, "prev" : -1, "options": {"icon":"heritage.svg", "text":"Erbe", "size":"m"}},
      {  id:"1", value:"Scheidung", "next" : 998, "prev" : -1, "options": {"icon":"divorce.svg", "text":"Scheidung", "size":"m"}},
      {  id:"2", value:"Verkauf", "next" : 998, "prev" : -1, "options": {"icon":"sell.svg", "text":"Verkauf", "size":"m"}},
      {  id:"3", value:"Kauf", "next" : 998, "prev" : -1, "options": {"icon":"buy.svg", "text":"Kauf", "size":"m"}},
      {  id:"4", value:"Sonstiges", "next" : 102, "prev" : -1, "options": {"icon":"other.svg", "text":"Sonstiges", "size":"m"}},
    ]
  },
  {
    "id": 102,
    "type": "input-step",
    "description":"differentReason",
    "title": "Grund für die Bewertung",
    "isSpecialSelection": true,
    "fieldName": "contractReason",
    "options": [
      { id:"0", "next" : 998, "prev" : "nil", "options": {
        "default": '',
        "text":"Grund",
        "icon": "other.svg",
        "button_title": "Button title",
        "placeholder" : "Add placeholder here",
        "description": "Place some description here"
      }
    }
    ]
  },
  {
    "id": 200,
    "type": "slider-step",
    "description":"size of usage ",
    "title": "Wie groß ist die Nutzfläche?",
    "fieldName": "floorSpace",
    "options": [
      { id:"0", "next" : 201, "prev" : "nil", "options": {
        "unit": "m2",
        "range": {
          "min": 500,
          "max": 2500
        },
        "default": 500,
        "text":"Nutzfläche",
        "icon": "floorspace.svg"
      }
    }
    ]
  },
  {
    "id": 201,
    "type": "cards-step",
    "description":"marketingType",
    "title": "Bitte wählen Sie die Nutzungsart aus",
    "fieldName": "contractReason",
    "options": [
      {  id:"0", value:"Produktion", "next" : 203, "prev" : -1, "options": {"icon":"production.svg", "text":"Produktion", "size":"m"}},
      {  id:"1", value:"Lager/ Logistik", "next" : 203, "prev" : -1, "options": {"icon":"store_logistic.svg", "text":"Lager/ Logistik", "size":"m"}},
      {  id:"2", value:"Büro/ Praxis", "next" : 203, "prev" : -1, "options": {"icon":"doctors_office.svg", "text":"Büro/ Praxis", "size":"m"}},
      {  id:"3", value:"Handel", "next" : 203, "prev" : -1, "options": {"icon":"commerce.svg", "text":"Handel", "size":"m"}},
      {  id:"4", value:"Sonstiges (Eingabefeld)", "next" : 202, "prev" : -1, "options": {"icon":"other.svg", "text":"Sonstiges (Eingabefeld) ", "size":"m"}},
    ]
  },
  {
    "id": 202,
    "type": "input-step",
    "description":"differentSpecialPropertyType",
    "title": "Um welche Nutzungsart handelt es sich?",
    "fieldName": "differentSpecialPropertyType",
    "isSpecialSelection":true,
    "options": [
      { id:"0", "next" : 203, "prev" : "nil", "options": {
        "default": '',
        "text":"Nutzungsart",
        "icon": "other.svg",
        "button_title": "Button title",
        "placeholder" : "Add placeholder here",
        "description": "Place some description here"
      }
    }
    ]
  },
  {
    "id": 203,
    "type": "cards-step",
    "description":"reason of evaluation",
    "title": "Wählen Sie den Grund für eine Immobilienbewertung aus",
    "fieldName": "contractReason",
    "options": [
      {  id:"0", value:"Erbe", "next" : 998, "prev" : -1, "options": {"icon":"heritage.svg", "text":"Erbe", "size":"m"}},
      {  id:"1", value:"Scheidung", "next" : 998, "prev" : -1, "options": {"icon":"divorce.svg", "text":"Scheidung", "size":"m"}},
      {  id:"2", value:"Verkauf", "next" : 998, "prev" : -1, "options": {"icon":"sell.svg", "text":"Verkauf", "size":"m"}},
      {  id:"3", value:"Kauf", "next" : 998, "prev" : -1, "options": {"icon":"buy.svg", "text":"Kauf", "size":"m"}},
      {  id:"4", value:"Sonstiges", "next" : 204, "prev" : -1, "options": {"icon":"other.svg", "text":"Sonstiges", "size":"m"}},
    ]
  },
  {
    "id": 204,
    "type": "input-step",
    "description":"differentSpecialPropertyType",
    "title": "Wählen Sie den Grund für eine Immobilienbewertung aus",
    "fieldName": "differentSpecialPropertyType",
    "isSpecialSelection":true,
    "options": [
      { id:"0", "next" : 998, "prev" : "nil", "options": {
        "default": '',
        "text":"Grund",
        "icon": "other.svg",
        "button_title": "Button title",
        "placeholder" : "Add placeholder here",
        "description": "Place some description here"
      }
    }
    ]
  },
  {
    "id": 300,
    "type": "slider-step",
    "description":"propertySize",
    "title": "Um welche Grundstücksgröße handelt es sich?",
    "fieldName": "propertySize",
    "options": [
      { id:"0", "next" : 301, "prev" : "nil", "options": {
        "unit": "Alternativ eintippen",
        "range": {
          "min": 500,
          "max": 1000
        },
        "default": 500,
        "text":"Welche Fläche hat das Grundstück?",
        "icon": "floorspace.svg"
      }
    }
    ]
  },
  {
    "id": 301,
    "type": "cards-step",
    "description":"marketingType",
    "title": "Wählen Sie den Grund für eine Immobilienbewertung aus",
    "fieldName": "contractReason",
    "options": [
      {  id:"0", value:"Erbe", "next" : 998, "prev" : -1, "options": {"icon":"heritage.svg", "text":"Erbe", "size":"m"}},
      {  id:"1", value:"Scheidung", "next" : 998, "prev" : -1, "options": {"icon":"divorce.svg", "text":"Scheidung", "size":"m"}},
      {  id:"2", value:"Verkauf", "next" : 998, "prev" : -1, "options": {"icon":"sell.svg", "text":"Verkauf", "size":"m"}},
      {  id:"3", value:"Kauf", "next" : 998, "prev" : -1, "options": {"icon":"buy.svg", "text":"Kauf", "size":"m"}},
      {  id:"4", value:"Sonstiges", "next" : 998, "prev" : -1, "options": {"icon":"other.svg", "text":"Sonstiges", "size":"m"}},
    ]
  },
  {
    "id": 302,
    "type": "input-step",
    "description":"differentSpecialPropertyType",
    "title": "Wählen Sie den Grund für eine Immobilienbewertung aus",
    "fieldName": "differentSpecialPropertyType",
    "isSpecialSelection":true,
    "options": [
      { id:"0", "next" : 998, "prev" : "nil", "options": {
        "default": '',
        "text":"Grund",
        "icon": "other.svg",
        "button_title": "Button title",
        "placeholder" : "Add placeholder here",
        "description": "Place some description here"
      }
    }
    ]
  },
  {
    "id": 400,
    "type": "slider-step",
    "description":"Apartment Count",
    "title": "Um welche Nutzfläche handelt es sich?",
    "fieldName": "floorSpace",
    "options": [
      { id:"0", "next" : 401, "prev" : "nil", "options": {
        "unit": "m2",
        "range": {
          "min": 500,
          "max": 2000
        },
        "default": 500,
        "text":"Nutzfläche",
        "icon": "floorspace.svg"
      }
    }
    ]
  },
  {
    "id": 401,
    "type": "cards-step",
    "description":"marketingType",
    "title": "Um welche Nutzungsart handelt es sich?",
    "fieldName": "specialPropertyType",
    "options": [
      {  id:"0", value:"Hotel", "next" : 403, "prev" : -1, "options": {"icon":"hotel.svg", "text":"Hotel", "size":"m"}},
      {  id:"1", value:"Pflegeheim", "next" : 403, "prev" : -1, "options": {"icon":"residential_care.svg", "text":"Pflegeheim", "size":"m"}},
      {  id:"2", value:"Krankenhaus", "next" : 403, "prev" : -1, "options": {"icon":"hospital_2.svg", "text":"Krankenhaus", "size":"m"}},
      {  id:"3", value:"Gastronomie", "next" : 403, "prev" : -1, "options": {"icon":"gastronomy.svg", "text":"Gastronomie", "size":"m"}},
      {  id:"4", value:"Sonstiges (Eingabefeld)", "next" : 402, "prev" : -1, "options": {"icon":"other.svg", "text":"Sonstiges (Eingabefeld) ", "size":"m"}},
    ]
  },
  {
    "id": 402,
    "type": "input-step",
    "description":"differentSpecialPropertyType",
    "title": "Um welche Nutzungsart handelt es sich?",
    "fieldName": "differentSpecialPropertyType",
    "isSpecialSelection":true,
    "options": [
      { id:"0", "next" : 403, "prev" : "nil", "options": {
        "default": '',
        "text":"Nutzungsart",
        "icon": "other.svg",
        "button_title": "Button title",
        "placeholder" : "Add placeholder here",
        "description": "Place some description here"
      }
    }
    ]
  },
  {
    "id": 403,
    "type": "cards-step",
    "description":"marketingType",
    "title": "Wählen Sie den Grund für eine Immobilienbewertung aus",
    "fieldName": "contractReason",
    "options": [
      {  id:"0", value:"Erbe", "next" : 998, "prev" : -1, "options": {"icon":"heritage.svg", "text":"Erbe", "size":"m"}},
      {  id:"1", value:"Scheidung", "next" : 998, "prev" : -1, "options": {"icon":"divorce.svg", "text":"Scheidung", "size":"m"}},
      {  id:"2", value:"Verkauf", "next" : 998, "prev" : -1, "options": {"icon":"sell.svg", "text":"Verkauf", "size":"m"}},
      {  id:"3", value:"Kauf", "next" : 998, "prev" : -1, "options": {"icon":"buy.svg", "text":"Kauf", "size":"m"}},
      {  id:"4", value:"Sonstiges", "next" : 998, "prev" : -1, "options": {"icon":"other.svg", "text":"Sonstiges", "size":"m"}},
    ]
  },
  {
    "id": 404,
    "type": "input-step",
    "description":"differentSpecialPropertyType",
    "title": "Wählen Sie den Grund für eine Immobilienbewertung aus",
    "fieldName": "differentSpecialPropertyType",
    "isSpecialSelection":true,
    "options": [
      { id:"0", "next" : 998, "prev" : "nil", "options": {
        "default": '',
        "text":"Grund",
        "icon": "other.svg",
        "button_title": "Button title",
        "placeholder" : "Add placeholder here",
        "description": "Place some description here"
      }
    }
    ]
  },
  {
    "id": 998,
    "type": "map-locator-step",
    "description":"propertyLocation",
    "isSharedStep":true,
    "title": "In welcher Region befindet sich die Immobilie?",
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
    "title": "Wer soll ein kostenlose Beratung erhalten?",
    "isSharedStep":true,
    "options": [
      {  id:"0", "next" : 1000, text: "Kostenlos beraten lassen"},
    ]
  },
  {
    "id": 1000,
    "type": "confirmation-step",
    "description":"send data",
    "isSharedStep":true,
    "title": "Ein Kundeberater wird Sie in kürze telefonisch kontaktieren."
  }
  ]}