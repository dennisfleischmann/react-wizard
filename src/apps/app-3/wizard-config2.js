export default [
  {
    "id":"0",
    "type": "click-cart",
    "description":"house level select",
    "title": "Über wie viele Etagen soll der Lift führen?",
    "options": [
      {  id:"0", "next" : 1, "prev" : -1, "options": {"icon":"stairlift-1.png", "text":"Etage 1", "size":"s"}},
      {  id:"1", "next" : 1, "prev" : -1, "options": {"icon":"stairlift-2.png", "text":"Etage 2+", "size":"s"}},
    ]
  },
  {
    "id":"1",
    "type": "click-cart",
    "description":"house select",
    "title": "Welchen Treppenlift Type möchten Sie haben",
    "options": [
      {  id:"0", "next" : -1, "prev" : -1, "options": {"icon":"stairlift-straight-1.png", "text":"Bauland", "size":"s"}},
      {  id:"1", "next" : -1, "prev" : -1, "options": {"icon":"stairlift-chair.png", "text":"Ackerland", "size":"s"}},
      {  id:"2", "next" : -1, "prev" : -1, "options": {"icon":"stairlift-lift.png", "text":"Wald / Grünland", "size":"s"}},
    ]
  }
  ]