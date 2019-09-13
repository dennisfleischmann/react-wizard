export default [{
  "id":"0",
  "type": "click-cart",
  "description":"house select",
  "title": "Welche Immobilie möchten Sie bewerten?",
  "options": [
    {  id:"0", "next" : "1", "prev" : "nil", "options": {"icon":"property.svg", "text":"Grundstück", "size":"s"}},
    {  id:"1", "next" : "2", "prev" : "nil", "options": {"icon":"house.svg", "text":"Haus", "size":"s"}},
    {  id:"2", "next" : "3", "prev" : "nil", "options": {"icon":"apartment.svg", "text":"Wohnung", "size":"s"}},
    {  id:"3",  "next" : "4", "prev" : "nil", "options": {"icon":"commercial.svg", "text":"Gewerbe", "size":"s"}}
  ]
},
{
  "id":"1",
  "type": "slider",
  "description":"property size",
  "title": "Welche Fläche hat das Grundstück?",
  "options": [
    { id:"0", "next" : "1", "prev" : "nil", "options": {
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