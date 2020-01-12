# Couple of goals

A New Wizard is easy to create sponsered by Heid Immobilien GmbH

![alt text](https://www.heid-immobilienbewertung.de/img/heid-immobilienbewertung-logo.png)


- Wizard libary comes with the basic steps
- wizard-card
- New steps can be greated very easily by providing new custom step components (?)
- New componets has its own css file
- Wizard's styles can easily be changed by providing a new styles file (!)
  - Global style sheet to easily switch brands
  - Component level style sheet


  # Usage of the project

  Install
    - Clone the project
    - run npm i

  Start
    - npm run start:app1

  
  # Modification of the wizard - Configuration

  The wizard is build upon configratuions. This makes sure a changed is mainly driven by a configration change. The changes are made in the wizard.config file of the project.

```json
{
  "background_img": "img/Optimized-background_2.jpeg",
  "backend": {
    "api": "",
  },
  "claims": [
    "Beratung durch Experten",
  ],
  "steps": [
    {

      
    }
  ]
}
```
# Modification of the wizard - Adding callback when sending data to backend

```html

   <script>
   
      var test = function (a){
         debugger;
         console.log('value', a);

      }
   
   </script>

<script id="wizard" src="test.js?callback=test"></script>

```


# Build Instructions

Pending


# Deployment Instructions

This project will integrate a small wizard build upon react into your web application.

## How to deploy a package

  - Unpack the zip of the specific version in <b>/packages/{project-name}/release-vxx</b> folder
  - Use the javascript, css in folder and insert them in your html page
  - Make sure the folders are available in your static serving webserver <b>(svg, img)</b>
  - Add an div element to your web site at the position were you want to integrate the wizard

```html
<div id="root">

</div>
```
