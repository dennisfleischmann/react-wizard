export default {
  background_img: "",
  backend: {
    api: "",
  },
  claims: [
    "Trainings by Experts",
    "XXX XXXX",
    "Free for early Birds"
  ],
  certsImage: "",
  steps: [
    {
      "id": 0,
      "type": "cards-step",
      "description":"trainings",
      "title": "Our top training courses",
      "fieldName": "training_course",
      "options": [
        {  id:"0", value:"Angular Training", "next" : 1, "stepRange":{"from": 1, "to": 99}, "options": {"icon":"/svg/angular.svg", "text":"Angular Training", "size":"s"}},
        {  id:"1", value:"React Training", "next" : 997, "stepRange":{"from": 100, "to": 199}, "options": {"icon":"/svg/react-icon.svg", "text":"React Training", "size":"s"}},
        {  id:"2", value:"NodeJS Training", "next" : 997, "stepRange":{"from": 200, "to": 299}, "options": {"icon":"/svg/nodejs-icon.svg", "text":"NodeJS Training", "size":"s"}},
        {  id:"2", value:"ES6 Training", "next" : 997, "stepRange":{"from": 300, "to": 399}, "options": {"icon":"/svg/es6-icon.svg", "text":"ES6 Training", "size":"s"}}
      ]
    },
    {
      "id": 1,
      "type": "cards-step",
      "description":"type of real estate",
      "title": "Angular trainings",
      "fieldName": "Angular_Training",
      "options": [
        {  id:"0", value:"Angular Intensiv", "next" : 997, "prev" : -1, "options": {"icon":"/img/angular_basic.png", "text":"", "size":"s"}},
        {  id:"1", value:"Angular Advanced", "next" : 997, "prev" : -1, "options": {"icon":"/img/angular_advanced.png", "text":"", "size":"s"}},
        {  id:"2", value:"TypeScript Advanced", "next" : 997, "prev" : -1, "options": {"icon":"/svg/Typescript-logo-vector-02.svg", "text":"", "size":"s"}}
      ]
    },
    {
      "id": 997,
      "type": "slider-step",
      "description":"Apartment Count",
      "title": "Please let us know the number of participants",
      "isSharedStep":true,
      "fieldName": "participant_count",
      "options": [
        { id:"0", "next" : 998, "prev" : "nil", "options": {
          "unit": "",
          "range": {
            "min": 1,
            "max": 25
          },
          "default": 1,
          "text":"Size of the Team",
          "icon": "",
          "button_title": "Next",
          "placeholder" : "Participants",
        }
      }
      ]
    },
    {
      "id": 998,
      "type": "input-step",
      "description":"More Details",
      "title": "Key area of Focus",
      "isSharedStep":true,
      "fieldName": "team_size",
      "options": [
        { id:"0", "next" : 999, "prev" : "nil", "button_title": "Next", "options": {
          "default": '',
          "text":"Reason of the training",
          "icon": "/svg/classroom.svg",
          "button_title": "Next",
          "placeholder" : "i.e Product Development",
          "description": "Please provide the most important archivements"
        }
      }
      ]
    },

    {
      "id": 999,
      "type": "cards-step",
      "description":"type of real estate",
      "isSharedStep":true,
      "title": "Location",
      "fieldName": "Angular_Training",
      "options": [
        {  id:"0", value:"Inhouse Training", "next" : 1000, "prev" : -1, "options": {"icon":"/img/angular_basic.png", "text":"", "size":"s"}},
        {  id:"0", value:"Training Center", "next" : 1000, "prev" : -1, "options": {"icon":"/img/angular_basic.png", "text":"", "size":"s"}},
        
      ]
    },
    {
      "id": 1000,
      "type": "send-step",
      "description":"send data",
      "isSharedStep":true,
      "title": "Ihre Immobilienbewertung wird erstellt",
      "isSharedStep":true,
      "sideImg": "",
      "options": [
        { 
          "id":"0", "next" : 1001,
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
      "id": 1001,
      "isSharedStep":true,
      "type": "confirmation-step",
      "description":"send data",
      "title": "Thanks! We will contract you shortly.",
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