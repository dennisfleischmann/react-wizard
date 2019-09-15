export default [
  {
    "id":"0",
    "type": "click-cart",
    "description":"house select",
    "title": "Welche Immobilie möchten Sie bewerten?",
    "options": [
      {  id:"0", "next" : 1, "prev" : -1, "options": {"icon":"property.svg", "text":"Grundstück", "size":"s"}},
      {  id:"1", "next" : 1, "prev" : -1, "options": {"icon":"house.svg", "text":"Haus", "size":"s"}},
      {  id:"2", "next" : 5, "prev" : -1, "options": {"icon":"apartment.svg", "text":"Wohnung", "size":"s"}},
      {  id:"3", "next" : 1, "prev" : -1, "options": {"icon":"commercial.svg", "text":"Gewerbe", "size":"s"}}
    ]
  },
  {
    "id":"1",
    "type": "slider",
    "description":"property size",
    "title": "Welche Fläche hat das Grundstück?",
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
    "id":"2",
    "type": "click-cart",
    "description":"house select",
    "title": "Um was für einen Grundstückstyp handelt es sich?",
    "options": [
      {  id:"0", "next" : 3, "prev" : -1, "options": {"icon":"building-land.svg", "text":"Bauland", "size":"s"}},
      {  id:"1", "next" : 3, "prev" : -1, "options": {"icon":"farm.svg", "text":"Ackerland", "size":"s"}},
      {  id:"2", "next" : 3, "prev" : -1, "options": {"icon":"forest.svg", "text":"Wald / Grünland", "size":"s"}},
      {  id:"3", "next" : 3, "prev" : -1, "options": {"icon":"other.svg", "text":"Sonstiges", "size":"s"}}
    ]
  },
  {
    "id":"3",
    "type": "click-cart",
    "description":"house select",
    "title": "Wofür benötigen Sie den Immobilienwert?",
    "options": [
      {  id:"0", "next" : 1, "prev" : -1, "options": {"icon":"sell.svg", "text":"Verkauf", "size":"s"}},
      {  id:"1", "next" : 1, "prev" : -1, "options": {"icon":"buy.svg", "text":"Kauf", "size":"s"}},
      {  id:"2", "next" : 5, "prev" : -1, "options": {"icon":"other-2.svg", "text":"Sonstiges", "size":"s"}},
    ]
  },
  {
    "id":"-1",
    "type": "click-cart",
    "description":"house select",
    "title": "Bitte wählen Sie die Art Ihres Hauses",
    "options": [
      {  id:"0", "next" : 3, "prev" : -1, "options": {"icon":"onefamily.svg", "text":"Einfamilienhaus", "size":"m"}},
      {  id:"1", "next" : 3, "prev" : -1, "options": {"icon":"rowhouse.svg", "text":"Reihenhaus", "size":"m"}},
      {  id:"2", "next" : 3, "prev" : -1, "options": {"icon":"parthouse.svg", "text":"Doppelhaushälfte", "size":"m"}},
      {  id:"3",  "next" : 3, "prev" : -1, "options": {"icon":"multifamilyhouse.svg", "text":"Mehrfamilienhaus", "size":"m"}},
      {  id:"4",  "next" : 3, "prev" : -1, "options": {"icon":"commercialproperty.svg", "text":"Wohn- und Geschäftshaus", "size":"m"}}
    ]
  },
  {
    "id":"-1",
    "type": "slider",
    "description":"house size",
    "title": "Welche Fläche hat das Apartment?",
    "options": [
      { id:"0", "next" : -1, "prev" : "nil", "options": {
        "unit": "m2",
        "range": {
          "from": 200,
          "to": 2500
        },
        "text":"Wohnfläche",
        "icon": "square.svg"
      }
    }]
  },
  {
    "id":"-1",
    "type": "slider",
    "description":"property size",
    "title": "Welche Fläche hat das Grundstück?",
    "options": [
      { id:"0", "next" : 3, "prev" : "nil", "options": {
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
    "id":"-1",
    "type": "click-cart",
    "description":"apartment type",
    "title": "Bitte wählen Sie die Art Ihrer Wohnung?",
    "options": [
      {  id:"0", "next" : 4, "prev" : -1, "options": {"icon":"ground-floor.svg", "text":"Erdgeschosswohnung", "size":"m"}},
      {  id:"1", "next" : 4, "prev" : -1, "options": {"icon":"middle-floor.svg", "text":"Etagenwohnung", "size":"m"}},
      {  id:"2", "next" : 4, "prev" : -1, "options": {"icon":"top-floor.svg", "text":"Penthouse/Dachgeschoss", "size":"m"}},
      {  id:"3",  "next" : 4, "prev" : -1, "options": {"icon":"other.svg", "text":"Andre", "size":"m"}}
    ]
  },
  ]