export default {
  background_img: "img/Optimized-background_2.jpeg",
  backend: {
    api: "",
  },
  claims: [
    "Beratung durch Experten",
    "Über 10.000 zufriedene Kunden",
    "Kostenlose Immobilienbewertung"
  ],
  certsImage: "https://www.heid-immobilienbewertung.de/img/xzert.png.pagespeed.ic.dcLLhaE8be.png",
  steps: [
    {
      "id": 0,
      "type": "cards-step",
      "description":"house select",
      "title": "Welche Immobilie möchten Sie bewerten?",
      "fieldName": "Objekt_Typ",
      "options": [
        {  id:"0", value:"Haus", "next" : 1, "stepRange":{"from": 1, "to": 99}, "options": {"icon":"svg/house.svg", "text":"Haus", "size":"s"}},
        {  id:"1", value:"Wohnung", "next" : 2, "stepRange":{"from": 100, "to": 199}, "options": {"icon":"svg/apartment.svg", "text":"Wohnung", "size":"s"}},
        {  id:"2", value:"Gewerbe", "next" : 1, "stepRange":{"from": 200, "to": 299}, "options": {"icon":"svg/commercial.svg", "text":"Gewerbe", "size":"s"}},
        {  id:"3", value:"Grund&shy;stück", "next" : 1, "stepRange":{"from": 300, "to": 399}, "options": {"icon":"svg/property1.svg", "text":"Grundstück", "size":"s"}},
        {  id:"4", value:"Sonder&shy;immobilien", "next" : 1, "stepRange":{"from": 400, "to": 499}, "options": {"icon":"svg/special.svg", "text":"Sonderimmobilien", "size":"s"}}
      ]
    },
    {
      "id": 1,
      "type": "cards-step",
      "description":"type of real estate",
      "title": "Bitte wählen Sie die Art des Gebäudes aus",
      "fieldName": "Art_des_Gebäudes",
      "options": [
        {  id:"0", value:"Einfamilien&shy;haus", "next" : 998, "prev" : -1, "options": {"icon":"svg/one_family_house.svg", "text":"Einfamilienhaus", "size":"s"}},
        {  id:"1", value:"Reihen&shy;end&shy;haus", "next" : 998, "prev" : -1, "options": {"icon":"svg/row_end_house.svg", "text":"Reihenendhaus", "size":"s"}},
        {  id:"2", value:"Reihen&shy;mittelhaus", "next" : 998, "prev" : -1, "options": {"icon":"svg/row_house_middle.svg", "text":"Reihenmittelhaus", "size":"s"}},
        {  id:"3", value:"Doppel&shy;haus&shy;hälfte", "next" : 998, "prev" : -1, "options": {"icon":"svg/row_house.svg", "text":"Doppelhaushälfte", "size":"s"}},
        {  id:"4", value:"Mehrfamilien&shy;haus", "next" : 998, "prev" : -1, "options": {"icon":"svg/multifamily_house.svg", "text":"Mehrfamilienhaus", "size":"s"}},
        {  id:"5", value:"Wohn- & Geschäfts&shy;haus", "next" : 998, "prev" : -1, "options": {"icon":"svg/live_commercial.svg", "text":"Wohn- & Geschäftshaus", "size":"s"}}
      ]
    },
    {
      "id": 1,
      "type": "cards-step",
      "description":"type of real estate",
      "title": "Bitte wählen Sie die Art des Gebäudes aus",
      "fieldName": "Art_des_Gebäudes",
      "options": [
        {  id:"0", value:"Einfamilien&shy;haus", "next" : 998, "prev" : -1, "options": {"icon":"svg/one_family_house.svg", "text":"Einfamilienhaus", "size":"s"}},
        {  id:"1", value:"Reihen&shy;end&shy;haus", "next" : 998, "prev" : -1, "options": {"icon":"svg/row_end_house.svg", "text":"Reihenendhaus", "size":"s"}},
        {  id:"2", value:"Reihen&shy;mittelhaus", "next" : 2998, "prev" : -1, "options": {"icon":"svg/row_house_middle.svg", "text":"Reihenmittelhaus", "size":"s"}},
        {  id:"3", value:"Doppel&shy;haus&shy;hälfte", "next" : 998, "prev" : -1, "options": {"icon":"svg/row_house.svg", "text":"Doppelhaushälfte", "size":"s"}},
        {  id:"4", value:"Mehrfamilien&shy;haus", "next" : 998, "prev" : -1, "options": {"icon":"svg/multifamily_house.svg", "text":"Mehrfamilienhaus", "size":"s"}},
        {  id:"5", value:"Wohn- & Geschäfts&shy;haus", "next" : 998, "prev" : -1, "options": {"icon":"svg/live_commercial.svg", "text":"Wohn- & Geschäftshaus", "size":"s"}}
      ]
    },
    {
      "id": 998,
      "type": "map-locator-step",
      "description":"PLZ",
      "isSharedStep":true,
      "title": "In welcher Region befindet sich die Immobilie?",
      "fieldName": "PLZ",
      "options": [
        { id:"0", "next" : 999, "prev" : "nil", "options": {
          "default": "",
          "text":"Postleitzahl",
          "description": "Wir benötigen Ihre Postleitzahl, um den Wert Ihrer Immobilie besser ermitteln zu können",
          "icon": "svg/map.png",
          "button_title": "Weiter",
        }
      }
      ]
    },
    {
      "id": 999,
      "type": "send-step",
      "description":"send data",
      "title": "Ihre Immobilienbewertung wird erstellt",
      "isSharedStep":true,
      
      "sideImg": "https://www.heid-immobilienbewertung.de/bilder/xImmobiliengutachten-berlin.jpg.pagespeed.ic.UTGXV8wIdf.webp",
      "options": [
        { 
          "id":"0", "next" : 1000,
          "text": "Wer soll die Immobilienbewertung erhalten?", 
          "button_title": "Bewertung erhalten",
          "description": "Dieser Service ist kostenfrei. Mit Klick auf \"Bewertung erhalten\" bestätigen Sie die Kenntnisnahme unserer\
          <a className=\"\"\
          href=\"\"\
          target=\"_blank\">AGBs</a> und <a\
          className=\"\" href=\"\"\
          target=\"_blank\">Datenschutzbestimmungen</a>"
        },
      ],
      api: '/api/wizard/submit',
    },
    {
      "id": 1000,
      "type": "confirmation-step",
      "description":"send data",
      "title": "Danke! Wir werden Sie in Kürze telefonisch kontaktieren",
      "picture_title": "André Heid",
      "picture_subtitle":"Geschäftsführer",
      "img":"img/owner-circle-cropped.png",
      "html_text":"\
      <p class=\"wui cs-main-content-line\"><span class=\"wui cs-main-content-line-styled\">Sehr geehrter Interessent,</span></p>\
      <p class=\"wui cs-main-content-line\">um Ihnen eine genaue Analyse Ihrer Immobilie zukommen lassen zu können, benötigen wir weitere Daten von Ihnen. Dazu wird Sie in Kürze ein Kundenberater telefonisch kontaktieren.</p>\
      <p class=\"wui cs-main-content-line\">Mit freundlichen Grüßen<span class=\"wui cs-main-content-line-styled\">André Heid</span></p>\
      "
    }
    ]}