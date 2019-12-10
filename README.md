# Couple of goals

A new wizard is easy to create
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

  
  Modification of the wizard

  The wizard is build upon configratuions. This makes sure a changed is mainly driven by a configration change. The changes are made in the wizard.config file of the project.

```json
export default {
  background_img: "img/Optimized-background_2.jpeg",
  backend: {
    api: "",
  },
  claims: [
    "Beratung durch Experten",
  ],
  certsImage: "",
  steps: [
    {

      ..
    }
    ]}
```



# Build Instructions

Pending


# Deployment Instructions

This project will integrate a small wizard build upon react into your web application.

## How to deploy a package

  - Unpack the zip of the specific version in /packages/{project-name}/release-vxx folder
  - Use the javascript, css in folder and insert them in your html page
  - Make sure the folders are available in your static serving webserver (svg, img)
  - Add an div element to your web site at the position were you want to integrate the wizard 
