export default {
  background_img: "/libs/wizard/img/Optimized-background_2.jpeg",
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
      "title": "Welche Immobilie möchten Sie bewerten?",
      "fieldName": "Objekt_Typ",
      "options": [
        {  id:"0", value:"Haus", "next" : 1, "stepRange":{"from": 1, "to": 99}, "options": {"icon":"/libs/wizard/svg/house.svg", "text":"Haus", "size":"s"}},
        {  id:"1", value:"Wohnung", "next" : 100, "stepRange":{"from": 100, "to": 199}, "options": {"icon":"/libs/wizard/svg/apartment.svg", "text":"Wohnung", "size":"s"}},
        {  id:"2", value:"Gewerbe", "next" : 200, "stepRange":{"from": 200, "to": 299}, "options": {"icon":"/libs/wizard/svg/commercial.svg", "text":"Gewerbe", "size":"s"}},
        {  id:"3", value:"Grund&shy;stück", "next" : 300, "stepRange":{"from": 300, "to": 399}, "options": {"icon":"/libs/wizard/svg/property1.svg", "text":"Grundstück", "size":"s"}},
        {  id:"4", value:"Sonder&shy;immobilien", "next" : 400, "stepRange":{"from": 400, "to": 499}, "options": {"icon":"/libs/wizard/svg/special.svg", "text":"Sonderimmobilien", "size":"s"}}
      ]
    },
    {
      "id": 1,
      "type": "cards-step",
      "description":"type of real estate",
      "title": "Bitte wählen Sie die Art des Gebäudes aus",
      "fieldName": "Art_des_Gebäudes",
      "options": [
        {  id:"0", value:"Einfamilien&shy;haus", "next" : 2, "prev" : -1, "options": {"icon":"/libs/wizard/svg/one_family_house.svg", "text":"Einfamilienhaus", "size":"s"}},
        {  id:"1", value:"Reihen&shy;end&shy;haus", "next" : 2, "prev" : -1, "options": {"icon":"/libs/wizard/svg/row_end_house.svg", "text":"Reihenendhaus", "size":"s"}},
        {  id:"2", value:"Reihen&shy;mittelhaus", "next" : 2, "prev" : -1, "options": {"icon":"/libs/wizard/svg/row_house_middle.svg", "text":"Reihenmittelhaus", "size":"s"}},
        {  id:"3", value:"Doppel&shy;haus&shy;hälfte", "next" : 2, "prev" : -1, "options": {"icon":"/libs/wizard/svg/row_house.svg", "text":"Doppelhaushälfte", "size":"s"}},
        {  id:"4", value:"Mehrfamilien&shy;haus", "next" : 2, "prev" : -1, "options": {"icon":"/libs/wizard/svg/multifamily_house.svg", "text":"Mehrfamilienhaus", "size":"s"}},
        {  id:"5", value:"Wohn- & Geschäfts&shy;haus", "next" : 2, "prev" : -1, "options": {"icon":"/libs/wizard/svg/live_commercial.svg", "text":"Wohn- & Geschäftshaus", "size":"s"}}
      ]
    },
    {
      "id": 2,
      "type": "cards-step",
      "description":"Grund_für_die_Bewertung",
      "title": "Grund für die Bewertung",
      "fieldName": "Grund_für_die_Bewertung",
      "options": [
        {  id:"0", value:"Erbe", "next" : 998, "prev" : -1, "options": {"icon":"/libs/wizard/svg/heritage.svg", "text":"Erbe", "size":"s"}},
        {  id:"1", value:"Scheidung", "next" : 998, "prev" : -1, "options": {"icon":"/libs/wizard/svg/divorce.svg", "text":"Scheidung", "size":"s"}},
        {  id:"2", value:"Verkauf", "next" : 998, "prev" : -1, "options": {"icon":"/libs/wizard/svg/sell.svg", "text":"Verkauf", "size":"s"}},
        {  id:"3", value:"Kauf", "next" : 998, "prev" : -1, "options": {"icon":"/libs/wizard/svg/buy.svg", "text":"Kauf", "size":"s"}},
        {  id:"4", value:"Finanz&shy;amt", "next" : 998, "prev" : -1, "options": {"icon":"/libs/wizard/svg/finance_office.svg", "text":"Finanzamt", "size":"s"}},
        {  id:"5", value:"Gericht", "next" : 998, "prev" : -1, "options": {"icon":"/libs/wizard/svg/law_court_justice.svg", "text":"Gericht", "size":"s"}},
        {  id:"6", value:"Sonstiges", "next" : 3, "prev" : -1, "options": {"icon":"/libs/wizard/svg/other.svg", "text":"Sonstiges", "size":"s"}},
      ]
    },
    {
      "id": 3,
      "type": "input-step",
      "description":"Grund_für_die_Bewertung",
      "title": "Grund für die Bewertung",
      "isSpecialSelection": true,
      "fieldName": "Grund_für_die_Bewertung",
      "options": [
        { id:"0", "next" : 998, "prev" : "nil", "button_title": "Next", "options": {
          "default": '',
          "text":"Anderer Grund",
          "icon": "/libs/wizard/svg/other.svg",
          "button_title": "Weiter",
          "placeholder" : "z.B. Schenkung",
          "description": "Für eine professionelle Beratung benötigen wir den Grund des Gutachtens oder einer Beratung"
        }
      }
      ]
    },
    {
      "id": 100,
      "type": "slider-step",
      "description":"Apartment Count",
      "title": "Wählen Sie die Anzahl der Wohnungen",
      "fieldName": "Anzahl_Wohnungen",
      "options": [
        { id:"0", "next" : 101, "prev" : "nil", "options": {
          "unit": "",
          "range": {
            "min": 1,
            "max": 100
          },
          "default": 1,
          "text":"Anzahl der Wohnungen",
          "icon": "/libs/wizard/svg/flat_count.svg",
          "button_title": "Weiter",
          "placeholder" : "Anzahl",
        }
      }
      ]
    },
    {
      "id": 101,
      "type": "cards-step",
      "description":"Grund_für_die_Bewertung",
      "title": "Wählen Sie den Grund für eine Immobilienbewertung aus",
      "fieldName": "Grund_für_die_Bewertung",
      "options": [
        {  id:"0", value:"Erbe", "next" : 998, "prev" : -1, "options": {"icon":"/libs/wizard/svg/heritage.svg", "text":"Erbe", "size":"s"}},
        {  id:"1", value:"Scheidung", "next" : 998, "prev" : -1, "options": {"icon":"/libs/wizard/svg/divorce.svg", "text":"Scheidung", "size":"s"}},
        {  id:"2", value:"Verkauf", "next" : 998, "prev" : -1, "options": {"icon":"/libs/wizard/svg/sell.svg", "text":"Verkauf", "size":"s"}},
        {  id:"3", value:"Kauf", "next" : 998, "prev" : -1, "options": {"icon":"/libs/wizard/svg/buy.svg", "text":"Kauf", "size":"s"}},
        {  id:"4", value:"Finanz&shy;amt", "next" : 998, "prev" : -1, "options": {"icon":"/libs/wizard/svg/finance_office.svg", "text":"Finanzamt", "size":"s"}},
        {  id:"5", value:"Gericht", "next" : 998, "prev" : -1, "options": {"icon":"/libs/wizard/svg/law_court_justice.svg", "text":"Gericht", "size":"s"}},
        {  id:"6", value:"Sonstiges", "next" : 102, "prev" : -1, "options": {"icon":"/libs/wizard/svg/other.svg", "text":"Sonstiges", "size":"s"}},
      ]
    },
    {
      "id": 102,
      "type": "input-step",
      "description":"Grund_für_die_Bewertung",
      "title": "Grund für die Bewertung",
      "isSpecialSelection": true,
      "fieldName": "Grund_für_die_Bewertung",
      "options": [
        { id:"0", "next" : 998, "prev" : "nil", "button_title": "Next", "options": {
          "default": '',
          "text":"Anderer Grund",
          "icon": "/libs/wizard/svg/other.svg",
          "button_title": "Weiter",
          "placeholder" : "z.B. Schenkung",
          "description": "Für eine professionelle Beratung benötigen wir den Grund des Gutachtens oder einer Beratung"
        }
      }
      ]
    },
    {
      "id": 200,
      "type": "slider-step",
      "description":"floorspace",
      "title": "Wie groß ist die Nutzfläche?",
      "fieldName": "Nutzfläche",
      "options": [
        { id:"0", "next" : 201, "prev" : "nil", "options": {
          "unit": "m<sup>2</sup>",
          "range": {
            "min": 500,
            "max": 2500
          },
          "default": 500,
          "text":"Nutzfläche",
          "icon": "/libs/wizard/svg/square-size.svg",
          "button_title": "Weiter",
          "placeholder" : "m<sup>2</sup>",
        }
      }
      ]
    },
    {
      "id": 201,
      "type": "cards-step",
      "description":"Nutzungsart",
      "title": "Bitte wählen Sie die Nutzungsart aus",
      "fieldName": "Nutzungsart",
      "options": [
        {  id:"0", value:"Produktion", "next" : 203, "prev" : -1, "options": {"icon":"/libs/wizard/svg/production.svg", "text":"Produktion", "size":"s"}},
        {  id:"1", value:"Lager/ Logistik", "next" : 203, "prev" : -1, "options": {"icon":"/libs/wizard/svg/store_logistic.svg", "text":"Lager/ Logistik", "size":"s"}},
        {  id:"2", value:"Büro/ Praxis", "next" : 203, "prev" : -1, "options": {"icon":"/libs/wizard/svg/doctors_office.svg", "text":"Büro/ Praxis", "size":"s"}},
        {  id:"3", value:"Handel", "next" : 203, "prev" : -1, "options": {"icon":"/libs/wizard/svg/commerce.svg", "text":"Handel", "size":"s"}},
        {  id:"4", value:"Sonstiges", "next" : 202, "prev" : -1, "options": {"icon":"/libs/wizard/svg/other.svg", "text":"Sonstiges", "size":"s"}},      
      ]
    },
    {
      "id": 202,
      "type": "input-step",
      "description":"Nutzungsart",
      "title": "Andere Nutzart",
      "isSpecialSelection": true,
      "fieldName": "Nutzungsart",
      "options": [
        { id:"0", "next" : 203, "prev" : "nil", "button_title": "Next", "options": {
          "default": '',
          "text":"Andere Nutzart",
          "icon": "/libs/wizard/svg/other.svg",
          "button_title": "Weiter",
          "placeholder" : "z.B. Golfplatz",
          "description": "Für eine professionelle Beratung benötigen wir die Nutzart"
        }
      }
      ]
    },
    {
      "id": 203,
      "type": "cards-step",
      "description":"Grund_für_die_Bewertung",
      "title": "Wählen Sie den Grund für eine Immobilienbewertung aus",
      "fieldName": "Grund_für_die_Bewertung",
      "options": [
        {  id:"0", value:"Erbe", "next" : 998, "prev" : -1, "options": {"icon":"/libs/wizard/svg/heritage.svg", "text":"Erbe", "size":"s"}},
        {  id:"1", value:"Scheidung", "next" : 998, "prev" : -1, "options": {"icon":"/libs/wizard/svg/divorce.svg", "text":"Scheidung", "size":"s"}},
        {  id:"2", value:"Verkauf", "next" : 998, "prev" : -1, "options": {"icon":"/libs/wizard/svg/sell.svg", "text":"Verkauf", "size":"s"}},
        {  id:"3", value:"Kauf", "next" : 998, "prev" : -1, "options": {"icon":"/libs/wizard/svg/buy.svg", "text":"Kauf", "size":"s"}},
        {  id:"4", value:"Finanz&shy;amt", "next" : 998, "prev" : -1, "options": {"icon":"/libs/wizard/svg/finance_office.svg", "text":"Finanzamt", "size":"s"}},
        {  id:"5", value:"Gericht", "next" : 998, "prev" : -1, "options": {"icon":"/libs/wizard/svg/law_court_justice.svg", "text":"Gericht", "size":"s"}},
        {  id:"6", value:"Sonstiges", "next" : 204, "prev" : -1, "options": {"icon":"/libs/wizard/svg/other.svg", "text":"Sonstiges", "size":"s"}},
      ]
    },
    {
      "id": 204,
      "type": "input-step",
      "description":"Grund_für_die_Bewertung",
      "title": "Anderer Grund",
      "isSpecialSelection": true,
      "fieldName": "Grund_für_die_Bewertung",
      "options": [
        { id:"0", "next" : 998, "prev" : "nil", "button_title": "Next", "options": {
          "default": '',
          "text":"Anderer Grund",
          "icon": "/libs/wizard/svg/other.svg",
          "button_title": "Weiter",
          "placeholder" : "z.B. Golfplatz",
          "description": "Für eine professionelle Beratung einen anderen Grund"
        }
      }
      ]
    },
    {
      "id": 300,
      "type": "slider-step",
      "description":"Grundstücksgroße",
      "title": "Um welche Grundstücksgröße handelt es sich?",
      "fieldName": "Grundstücksgroße",
      "options": [
        { id:"0", "next" : 301, "prev" : "nil", "options": {
          "unit": "m<sup>2</sup>",
          "range": {
            "min": 500,
            "max": 1000
          },
          "default": 500,
          "text":"Welche Fläche hat das Grundstück?",
          "icon": "/libs/wizard/svg/m2-size.svg",
          "button_title": "Weiter",
          "placeholder" : "m<sup>2</sup>",
        }
      }
      ]
    },
    {
      "id": 301,
      "type": "cards-step",
      "description":"Grund_für_die_Bewertung",
      "title": "Wählen Sie den Grund für eine Immobilienbewertung aus",
      "fieldName": "Grund_für_die_Bewertung",
      "options": [
        {  id:"0", value:"Erbe", "next" : 998, "prev" : -1, "options": {"icon":"/libs/wizard/svg/heritage.svg", "text":"Erbe", "size":"s"}},
        {  id:"1", value:"Scheidung", "next" : 998, "prev" : -1, "options": {"icon":"/libs/wizard/svg/divorce.svg", "text":"Scheidung", "size":"s"}},
        {  id:"2", value:"Verkauf", "next" : 998, "prev" : -1, "options": {"icon":"/libs/wizard/svg/sell.svg", "text":"Verkauf", "size":"s"}},
        {  id:"3", value:"Kauf", "next" : 998, "prev" : -1, "options": {"icon":"/libs/wizard/svg/buy.svg", "text":"Kauf", "size":"s"}},
        {  id:"4", value:"Finanz&shy;amt", "next" : 998, "prev" : -1, "options": {"icon":"/libs/wizard/svg/finance_office.svg", "text":"Finanzamt", "size":"s"}},
        {  id:"5", value:"Gericht", "next" : 998, "prev" : -1, "options": {"icon":"/libs/wizard/svg/law_court_justice.svg", "text":"Gericht", "size":"s"}},
        {  id:"6", value:"Sonstiges", "next" : 302, "prev" : -1, "options": {"icon":"/libs/wizard/svg/other.svg", "text":"Sonstiges", "size":"s"}},
      ]
    },
    {
      "id": 302,
      "type": "input-step",
      "description":"Grund_für_die_Bewertung",
      "title": "Grund für die Bewertung",
      "isSpecialSelection": true,
      "fieldName": "Grund_für_die_Bewertung",
      "options": [
        { id:"0", "next" : 998, "prev" : "nil", "button_title": "Next", "options": {
          "default": '',
          "text":"Anderer Grund",
          "icon": "/libs/wizard/svg/other.svg",
          "button_title": "Weiter",
          "placeholder" : "z.B. Schenkung",
          "description": "Für eine professionelle Beratung benötigen wir den Grund des Gutachtens oder einer Beratung"
        }
      }
      ]
    },
    {
      "id": 400,
      "type": "slider-step",
      "description":"Nutzfläche",
      "title": "Wie groß ist die Nutzfläche der Sonderimmobilie?",
      "fieldName": "Nutzfläche",
      "options": [
        { id:"0", "next" : 401, "prev" : "nil", "options": {
          "unit": "m<sup>2</sup>",
          "range": {
            "min": 500,
            "max": 2000
          },
          "default": 500,
          "text":"Nutzfläche",
          "icon": "/libs/wizard/svg/square-size.svg",
          "button_title": "Weiter",
          "placeholder" : "m<sup>2</sup>"
        }
      }
      ]
    },
    {
      "id": 401,
      "type": "cards-step",
      "description":"Typ_Sonderimmobilie",
      "title": "Um welche art einer Sonderimmobilie handelt es sich?",
      "fieldName": "Typ_Sonderimmobilie",
      "options": [
        {  id:"0", value:"Hotel", "next" : 403, "prev" : -1, "options": {"icon":"/libs/wizard/svg/hotel.svg", "text":"Hotel", "size":"s"}},
        {  id:"1", value:"Pflegeheim", "next" : 403, "prev" : -1, "options": {"icon":"/libs/wizard/svg/residential_care.svg", "text":"Pflegeheim", "size":"s"}},
        {  id:"2", value:"Krankenhaus", "next" : 403, "prev" : -1, "options": {"icon":"/libs/wizard/svg/hospital_1.svg", "text":"Krankenhaus", "size":"s"}},
        {  id:"3", value:"Gastronomie", "next" : 403, "prev" : -1, "options": {"icon":"/libs/wizard/svg/gastronomy.svg", "text":"Gastronomie", "size":"s"}},
        {  id:"4", value:"Sonstiges", "next" : 402, "prev" : -1, "options": {"icon":"/libs/wizard/svg/other.svg", "text":"Sonstiges", "size":"s"}},      
      ]
    },
  
    {
      "id": 402,
      "type": "input-step",
      "description":"Typ_Sonderimmobilie",
      "title": "Um welche Art einer Sonderimmobilie handelt es sich?",
      "fieldName": "Typ_Sonderimmobilie",
      "isSpecialSelection":true,
      "options": [
        { id:"0", "next" : 403, "prev" : "nil", "options": {
          "default": '',
          "text":"",
          "icon": "/libs/wizard/svg/other.svg",
          "button_title": "Weiter",
          "placeholder" : "z.B. Fitnessstudio",
          "description": "Für eine professionelle Beratung benötigen wir die Art der Sonderimmobilie"
        }
      }
      ]
    },
    {
      "id": 403,
      "type": "cards-step",
      "description":"Grund_für_die_Bewertung",
      "title": "Wählen Sie den Grund für eine Immobilienbewertung aus",
      "fieldName": "Grund_für_die_Bewertung",
      "options": [
        {  id:"0", value:"Erbe", "next" : 998, "prev" : -1, "options": {"icon":"/libs/wizard/svg/heritage.svg", "text":"Erbe", "size":"s"}},
        {  id:"1", value:"Scheidung", "next" : 998, "prev" : -1, "options": {"icon":"/libs/wizard/svg/divorce.svg", "text":"Scheidung", "size":"s"}},
        {  id:"2", value:"Verkauf", "next" : 998, "prev" : -1, "options": {"icon":"/libs/wizard/svg/sell.svg", "text":"Verkauf", "size":"s"}},
        {  id:"3", value:"Kauf", "next" : 998, "prev" : -1, "options": {"icon":"/libs/wizard/svg/buy.svg", "text":"Kauf", "size":"s"}},
        {  id:"4", value:"Finanz&shy;amt", "next" : 998, "prev" : -1, "options": {"icon":"/libs/wizard/svg/finance_office.svg", "text":"Finanzamt", "size":"s"}},
        {  id:"5", value:"Gericht", "next" : 998, "prev" : -1, "options": {"icon":"/libs/wizard/svg/law_court_justice.svg", "text":"Gericht", "size":"s"}},
        {  id:"6", value:"Sonstiges", "next" : 404, "prev" : -1, "options": {"icon":"/libs/wizard/svg/other.svg", "text":"Sonstiges", "size":"s"}},
      ]
    },
    
  {
    "id": 404,
    "type": "input-step",
    "description":"Grund_für_die_Bewertung",
    "title": "Grund für die Bewertung",
    "isSpecialSelection": true,
    "fieldName": "Grund_für_die_Bewertung",
    "options": [
      { id:"0", "next" : 998, "prev" : "nil", "button_title": "Next", "options": {
        "default": '',
        "text":"Anderer Grund",
        "icon": "/libs/wizard/svg/other.svg",
        "button_title": "Weiter",
        "placeholder" : "z.B. Schenkung",
        "description": "Für eine professionelle Beratung benötigen wir den Grund des Gutachtens oder einer Beratung"
      }
    }
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
          "icon": "/libs/wizard/svg/map.png",
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
      "img":"/libs/wizard/img/owner-circle-cropped.png",
      "html_text":"\
      <p class=\"wui cs-main-content-line\"><span class=\"wui cs-main-content-line-styled\">Sehr geehrter Interessent,</span></p>\
      <p class=\"wui cs-main-content-line\">um Ihnen eine genaue Analyse Ihrer Immobilie zukommen lassen zu können, benötigen wir weitere Daten von Ihnen. Dazu wird Sie in Kürze ein Kundenberater telefonisch kontaktieren.</p>\
      <p class=\"wui cs-main-content-line\">Mit freundlichen Grüßen<span class=\"wui cs-main-content-line-styled\">André Heid</span></p>\
      "
    }
    ]}