export default {
  background_img: "/images/wizard/wizard-bg-3.jpeg",
  backend: {
    api: "",
  },
  claims: [
    "Beratung durch Experten",
    "Über 10.000 zufriedene Kunden",
    "Kostenlose Immobilienbewertung"
  ],
  certsImage: "/img/zert.png",
  steps: [
    {
      "id": 0,
      "type": "cards-step",
      "description":"house select",
      "title": "Kostenlos & Unverbindliche Beratung",
      "fieldName": "Objekt_Typ",
      "options": [
        {  id:"0", value:"Tragwerksplanung", "next" : 1, "stepRange":{"from": 1, "to": 99}, "options": {"icon":"/images/wizard/beam.svg", "text":"Neubau", "size":"s"}},
        {  id:"1", value:"Bautechnische Prüfung", "next" : 100, "stepRange":{"from": 100, "to": 199}, "options": {"icon":"/images/wizard/ruler.svg", "text":"Umbau", "size":"s"}},
        {  id:"2", value:"Ausführplanung", "next" : 200, "stepRange":{"from": 200, "to": 299}, "options": {"icon":"/images/wizard/planning.svg", "text":"Durchbruch", "size":"s"}},
        {  id:"2", value:"Sachverständigen Gutachten", "next" : 300, "stepRange":{"from": 300, "to": 399}, "options": {"icon":"/images/wizard/assessment.png", "text":"Durchbruch", "size":"s"}}
      ]
    },
    {
      "id": 1,
      "type": "cards-step",
      "description":"type of real estate",
      "title": "Um welche Art Haus handelt es sich?",
      "fieldName": "Art_des_Gebäudes",
      "options": [
        {  id:"0", value:"Neubau", "next" : 2, "prev" : -1, "options": {"icon":"/images/wizard/symbol-efh-klein.png", "text":"Einfamilienhaus", "size":"s"}},
        {  id:"1", value:"Umbau", "next" : 2, "prev" : -1, "options": {"icon":"/images/wizard/symbol-mfh.png", "text":"Mehrfamilienhaus", "size":"s"}},
        {  id:"2", value:"Wand- oder Deckendurchbruch", "next" : 900, "prev" : -1, "options": {"icon":"/images/wizard/symbol-bauplan.png", "text":"Sonstiges", "size":"s"}}
      ]
    },
    {
      "id": 2,
      "type": "cards-step",
      "description":"type of real estate",
      "title": "Um welche Art Haus handelt es sich?",
      "fieldName": "Art_des_Gebäudes",
      "options": [
        {  id:"0", value:"Einfamilien&shy;haus", "next" : 4, "prev" : -1, "options": {"icon":"/images/wizard/symbol-efh-klein.png", "text":"Einfamilienhaus", "size":"s"}},
        {  id:"1", value:"Mehr&shy;familien&shy;haus", "next" : 4, "prev" : -1, "options": {"icon":"/images/wizard/symbol-mfh.png", "text":"Mehrfamilienhaus", "size":"s"}},
        {  id:"2", value:"Sonstiges", "next" : 3, "prev" : -1, "options": {"icon":"/images/wizard/symbol-bauplan.png", "text":"Sonstiges", "size":"s"}}
      ]
    },

  {
    "id": 3,
    "type": "input-step",
    "description":"Grund_für_die_Bewertung",
    "title": "Um welche Art Haus handelt es sich?",
    "isSpecialSelection": true,
    "fieldName": "type_of_real_estate",
    "options": [
      { id:"0", "next" : 900, "prev" : "nil", "button_title": "Next", "options": {
        "default": '',
        "text":"",
        "icon": "/images/wizard/other.svg",
        "button_title": "Weiter",
        "placeholder" : "z.B. Golfplatz",
        "description": "Für eine professionelle Beratung benötigen wir den Type des Objektes"
      }
    }
    ]
  },
    {
      "id": 4,
      "type": "slider-step",
      "description":"floorspace",
      "title": "Wie groß ist die Wohnfläche?",
      "fieldName": "Wohnfläche",
      "options": [
        { id:"0", "next" : 900, "prev" : "nil", "options": {
          "unit": "m<sup>2</sup>",
          "range": {
            "min": 100,
            "max": 250
          },
          "default": 100,
          "text":"Wohnfläche",
          "icon": "/images/wizard/square-size.svg",
          "button_title": "Weiter",
          "placeholder" : "m<sup>2</sup>",
        }
      }
      ]
    },
  {
    "id": 100,
    "type": "slider-step",
    "description":"Apartment Count",
    "title": "Anzahl Geschosse",
    "fieldName": "Anzahl_Geschosse",
    "options": [
      { id:"0", "next" : 101, "prev" : "nil", "options": {
        "unit": "",
        "range": {
          "min": 1,
          "max": 10
        },
        "default": 1,
        "text":"Anzahl der Geschosse",
        "icon": "",
        "button_title": "Weiter",
        "placeholder" : "Anzahl",
      }
    }
    ]
  },
    {
      "id": 900,
      "type": "map-locator-step",
      "description":"PLZ",
      "isSharedStep":true,
      "title": "In welcher Region befindet sich die Immobilie?",
      "fieldName": "PLZ",
      "options": [
        { id:"0", "next" : 901, "prev" : "nil", "options": {
          "default": "",
          "text":"Postleitzahl",
          "description": "Wir benötigen Ihre Postleitzahl, um den Wert Ihrer Immobilie besser ermitteln zu können",
          "icon": "/images/wizard/map.png",
          "button_title": "Weiter",
        }
      }
      ]
    },
    {
      "id": 901,
      "type": "send-step",
      "description":"send data",
      "title": "Ihre Immobilienbewertung wird erstellt",
      "isSharedStep":true,
      
      "sideImg": "https://www.heid-immobilienbewertung.de/bilder/xImmobiliengutachten-berlin.jpg.pagespeed.ic.UTGXV8wIdf.webp",
      "options": [
        { 
          "id":"0", "next" : 902,
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
      "id": 902,
      "type": "confirmation-step",
      "description":"send data",
      "title": "Danke! Wir werden Sie in Kürze telefonisch kontaktieren",
      "picture_title": "André Heid",
      "picture_subtitle":"Geschäftsführer",
      "img":"/libs/wizard/img/owner-circle-cropped.png",
      "html_text":"\
      <p class=\"wui cs-main-content-line\"><span class=\"wui cs-main-content-line-styled\">Sehr geehrter Interessent,</span></p>\
      <p class=\"wui cs-main-content-line\">um Ihnen eine genaue Analyse Ihrer Immobilie zukommen lassen zu können, benötigen wir weitere Daten von Ihnen. Dazu wird Sie in Kürze ein Kundenberater telefonisch kontaktieren.</p>\
      <p class=\"wui cs-main-content-line\">Mit freundlichen Grüßen<span class=\"wui cs-main-content-line-styled\">André Heid</span></p>\
      "
    }
    ]}