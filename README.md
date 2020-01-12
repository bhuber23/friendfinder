# friendfinder

## Overview
The Friend Finder app is a full-stack web application that presents users with a survey to fill out, then takes their results and compares them to other users and returns a match that would have the highest compatibility, giving the user the name and photo of their best friend match. 

## Link to the Deployed App on Heroku
https://dry-brushlands-65474.herokuapp.com/

## Features
Users are given a survey that contains 10 questions with which they must answer based on how much they agree/disagree with the given statement. After they have submitted their answers, along with their name and an image they've chosen to submit, they will receive a response for the friend that most closely matches their responses. They will be given both the name and the photo of their match. After the form data is submitted, the form automatically clears so that they can submit a new response if they choose to do so.

Users can also view the full list of friends that have been stored in the API. When running locally, the API can be viewed by navigating to http://localhost:8080/api/friends. The API list can also be viewed directly from the deployed Heroku app [here](https://dry-brushlands-65474.herokuapp.com/api/friends). Once a user submits their survey response, their data will be added to the API.

## Demo
![Example demo](public/style/images/demo.gif)

## Technologies Used
* HTML
* CSS/Bootstrap
* jQuery
* NPM's:
    * Express
    * Path
