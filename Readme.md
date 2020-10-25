# The Headliners web app
The headliners app is a pet project of mine which I started to make my daily press overview a bit easier, better my web development skills and learn typescript. The code of the app is available for anyone to fork and modify, just mention the OG in the footer please, so I can get some internet points :rocket:

![App in the iphone mock](/src/assets/iphone_mock.png "Iphone mock")

# Table of contents
1. [About the project](#about)
    1. [User handbook](#howto)
    2. [Technologies](#tech)
2. [Getting Started](#start)
3. [Project road map](#roadmap)
4. [Contact](#contact)

<a name="about"></a>
## About the project
The project, despite a fancy name, is simply an web app that allows to search, traverse and access articles from many different sources which are supplied by the [News API](https://newsapi.org). The API shape strongly influenced the app's architecture and design.

<a name="howto"></a>
### User handbook
Points below explain how to use key features of the current version of the app
- First, select three parameters - category, language and a country, then confirm your choice. You will be presented with news sources that fit chosen criteria 
- Next, select the article sources You wish to read articles from and confirm slection. If no sources were chosen, You will receive articles from all of them
- Twenty articles will be loaded at the time. If there are more available, the button at the end of the list will allow You to load the next batch
- Click the title of the article and you will be redirected to its place of origin so you can read it. Note: some websites have paywalls, those You will have to handle yourself

<a name="tech"></a>
### Technologies
Below are listed all major technologies that have been used to develop this application
- [Typescript](https://www.typescriptlang.org/) - typing for javascript
- [React](https://reactjs.org/) - framework
- [Redux](https://redux.js.org/) - state management
- [Sass](https://sass-lang.com/) - styling
- [Webpack](https://webpack.js.org/) - bundling and development process

<a name="start"></a>
# Getting started
There are few things that need to be done in order to be able to deveop the project locally. Below is the list of them.

### Installation
1. Go to the [News API](https://newsapi.org) website and forge Your own API key. It is free and allows for 500 request for every 24h
2. Get the latest copy of the project
```
git clone https://github.com/MKovvalski/headliner-app.git
```
3. Install packages
```
yarn install
```
4. Create an `config.ts` file in the project's root, then add your API key. This file is within the `.gitignore` list so feel free to put any sensitive stuff there as well
```
export const API_KEY: string = 'YOUR_API_KEY'
```
5. Run command below for local developement `port: 8000`
```
yarn start:dev
```
6. To run and test a Your current build run *prod* option.
```
yarn start:prod
```
<a name="roadmap"></a>
# Project Road Map
Currently, the project is at the brink of beginning the **Stage 2**

## Stage 1 :white_check_mark:
- define parameters reqiured to select sources - category, language and a country
- select the sources from which articles will be delivered
- display first twenty available articles
- provide a way to lazy load additional articles if they are available
- create styling for mobile, tablet and desktop queries

## Stage 2 :soon:
- save the last parameters configuration input by user (category, language, country) and use them to search for articles on next page visit
- provide way for user to mark article/s so they can be added to the *to read* list
- create a *to read* list that will host articles added by the user
- save the articles in the local storage and populate the list with them on page visit
- provide a way to mark article in the *to read* list as a *already read*
- provide a way to remove article from the *to read* list

## Stage 3
- move project away from github hosting
- create backend structure for personal accounts
- update styling

<a name="contact"></a>
# Contact
If you wish to contact me, visit my linkedin or write me an email

- [Linkedin](https://www.linkedin.com/in/mateusz-kowalski-62b758113/)
- matt.kowalski.public@gmail.com