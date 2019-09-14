export default [
  {
    "id":"0",
    "type": "click-cart",
    "description":"house select",
    "title": "Welche Immobilie möchten Sie bewerten?",
    "options": [
      {  id:"0", "next" : 2, "prev" : -1, "options": {"icon":"property.svg", "text":"Grundstück", "size":"s"}},
      {  id:"1", "next" : 1, "prev" : -1, "options": {"icon":"house.svg", "text":"Haus", "size":"s"}},
      {  id:"2", "next" : 1, "prev" : -1, "options": {"icon":"apartment.svg", "text":"Wohnung", "size":"s"}},
      {  id:"3", "next" : 1, "prev" : -1, "options": {"icon":"commercial.svg", "text":"Gewerbe", "size":"s"}}
    ]
  },
  {
    "id":"1",
    "type": "click-cart",
    "description":"house select",
    "title": "Welche Immobilie möchten Sie bewerten?",
    "options": [
      {  id:"0", "next" : 3, "prev" : -1, "options": {"icon":"onefamily.svg", "text":"Einfamilienhaus", "size":"m"}},
      {  id:"1", "next" : 3, "prev" : -1, "options": {"icon":"rowhouse.svg", "text":"Reihenhaus", "size":"m"}},
      {  id:"2", "next" : 3, "prev" : -1, "options": {"icon":"parthouse.svg", "text":"Doppelhaushälfte", "size":"m"}},
      {  id:"3",  "next" : 3, "prev" : -1, "options": {"icon":"multifamilyhouse.svg", "text":"Mehrfamilienhaus", "size":"m"}},
      {  id:"4",  "next" : 3, "prev" : -1, "options": {"icon":"commercialproperty.svg", "text":"Wohn- und Geschäftshaus", "size":"m"}}
    ]
  },
  {
    "id":"2",
    "type": "slider",
    "description":"property size",
    "title": "Welche Fläche hat das Grundstück?",
    "options": [
      { id:"0", "next" : 1, "prev" : "nil", "options": {
        "unit": "m2",
        "range": {
          "from": 200,
          "to": 2500
        },
        "title":"Alternativ eintippen"
      }
    }
   ]
  },
  {
    "id":"3",
    "type": "slider",
    "description":"property size",
    "title": "Welche Fläche hat das Grundstück?",
    "options": [
      { id:"0", "next" : 1, "prev" : "nil", "options": {
        "unit": "m2",
        "range": {
          "from": 200,
          "to": 2500
        },
        "title":"Alternativ eintippen"
      }
    }
   ]
  }
  ]