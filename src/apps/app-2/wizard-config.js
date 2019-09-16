export default {
  backend: {
    api: '/api/wizard/submit',
  },
  steps: [
  {
    "id":0,
    "type": "cards-step",
    "description":"house select",
    "title": "Welche Immobilie möchten Sie bewerten?",
    "fieldName": "houseType",
    "options": [
      {  id:"0", value:"Grundstück", "next" : 1, "prev" : -1, "options": {"icon":"property.svg", "text":"Grundstück", "size":"s"}},
      {  id:"1", value:"Haus", "next" : 1, "prev" : -1, "options": {"icon":"house.svg", "text":"Haus", "size":"s"}},
      {  id:"2", value:"Wohnung", "next" : 5, "prev" : -1, "options": {"icon":"apartment.svg", "text":"Wohnung", "size":"s"}},
      {  id:"3", value:"Gewerbe", "next" : 1, "prev" : -1, "options": {"icon":"commercial.svg", "text":"Gewerbe", "size":"s"}}
    ]
  },
  {
    "id":1,
    "type": "slider-step",
    "description":"property size",
    "title": "Welche Fläche hat das Grundstück?",
    "fieldName": "propertySize",
    "options": [
      { id:"0", "next" : 2, "prev" : "nil", "options": {
        "unit": "m2",
        "range": {
          "from": 200,
          "to": 2500
        },
        "text":"Grundfläche in m2",
        "icon": "property-square.svg"
      }
    }
    ]
  },
  {
    "id":2,
    "type": "cards-step",
    "description":"house select",
    "title": "Um was für einen Grundstückstyp handelt es sich?",
    "fieldName": "propertyType",
    "options": [
      {  id:"0", value:"Bauland", "next" : 3, "prev" : -1, "options": {"icon":"building-land.svg", "text":"Bauland", "size":"s"}},
      {  id:"1", value:"Ackerland", "next" : 3, "prev" : -1, "options": {"icon":"farm.svg", "text":"Ackerland", "size":"s"}},
      {  id:"2", value:"Wald / Grünland", "next" : 3, "prev" : -1, "options": {"icon":"forest.svg", "text":"Wald / Grünland", "size":"s"}},
      {  id:"3", value:"Sonstiges", "next" : 3, "prev" : -1, "options": {"icon":"other.svg", "text":"Sonstiges", "size":"s"}}
    ]
  },
  {
    "id":3,
    "type": "cards-step",
    "description":"marketingType",
    "title": "Wofür benötigen Sie den Immobilienwert?",
    "fieldName": "marketingType",
    "options": [
      {  id:"0", value:"Verkauf", "next" : 4, "prev" : -1, "options": {"icon":"sell.svg", "text":"Verkauf", "size":"s"}},
      {  id:"1", value:"Kauf", "next" : 4, "prev" : -1, "options": {"icon":"buy.svg", "text":"Kauf", "size":"s"}},
      {  id:"2", value:"Sonstiges", "next" : 4, "prev" : -1, "options": {"icon":"other-2.svg", "text":"Sonstiges", "size":"s"}},
    ]
  },
  {
    "id":4,
    "type": "send-step",
    "description":"send data",
    "title": "send data",
    "options": [
      {  id:"0", "next" : 5},
    ]
  },
  {
    "id":5,
    "type": "confirmation-step",
    "description":"show confirmation",
    "title": "Anfrage erfolgreich gesendet",
    "options": [
    ]
  }
  ]}