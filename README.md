# VerifyMyAge Frontend test

## Summary

- [About](#about)
- [Deliverables](#deliverables) 
- [Installation](#installation)
- [Ferramentas](#tools)
- [Architecture](#arquitetura)
- [Tests](#tests)

## About

SPA in React.js. Totally responsive. 

## Resultado

![](login.gif)  

Login page. I am only allowed to enter the email `joe@doe.com` and the password `1234joe`.
Having success, I am redirected to another page and there I can log out. 
We also have error handling. If I try to log in with incorrect credentials, I can see an alert. And if I don't fill in the inputs, I also get an alert.
Fully responsive application made based on the options of responsiveness of DevTools.

## Instalação

### Front-end

`$ git clone https://gitlab.com/nykollemalone/frontend-test`

`$ cd front-end`

`$ yarn` 

`$ yarn start`

Your application will be running on port 4000

### Back-end

`$ cd front-end`

`$ yarn` 

`$ yarn run start-api`

Your application will be running on port 8888 

## Tools
- React 
- Context to state management 
- Styled components
- Axios 
- Json Server
- Cypress

## Architecture
**Atomic Design** is a methodology that helps us to think about the user interface (UI) in a hierarchical way, and presents techniques to optimize the design and team development workflow.
By dividing the components into basic atoms, it is easy to see which parts of the site can be reused and how they can be mixed and combined to form other molecules and even organisms.

## Tests
Tests made with [Cypress](https://www.cypress.io/).

Open you terminal and run:
`$ yarn run cypress:open`

Cypress Test Runner will be opened. Chose wich test you want to run and just click.

---

<p align="center">Made with 💛  by <strong>Nykolle Malone :wave: </p>
