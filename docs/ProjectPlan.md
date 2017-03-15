# ScopeHero Project Plan

## Create Project Scaffolding

* ✅ Create Basic Folder Structure to host a Client-Server Application using the MEAN stack.


        .
        ├── README.md
        ├── client
        │   └── index.html
        ├── docs
        │   ├── PressRelease.md
        │   └── ProjectPlan.md
        ├── package.json
        └── server
            ├── config
            ├── controllers
            ├── models
            └── server.js


## Set Up Basic Server Using Express

* ✅ Populate server.js with the bare minimum required to serve static files from the client folder.
* ✅ Populate index.html with something that will render

## Create Database

* ✅ Populate server/config/db.js with bare minimum required to establish connection to MongoDB database and report errors

## Deploy Application to Heroku

* ✅ Deploy initial work to Heroku named application

## Troubleshoot Heroku Deployment Issues

* ✅ Install Heroku Addon `heroku addons:create mongolab`
* ✅ Modify Database Username
* ✅ Create Necessary Environment Variables
* ✅ Modify `db.config`
* ✅ Complete first successful deployment

## Design Database Schema

* ✅ Create Schema for Users
* ✅ Create Schema for Projects
* ✅ Create Schema for Features

## Create Dynamic Frontend Views and Forms Using Angular.js

* ✅Implement Views using UI-Router
* ✅ Create landing/home page view
* ✅ Create project page view
* ✅ Implement Form for Project Page
* Investigate AngularChart.js for Matrix View
    - ✅ Hardcoded Data Working. Figure out how to dynamically generate.
    - ✅ Initial charting working, but clunky...
* Implement Signup Form (time permitting)
* Implement Signin Form (time permitting)

## Establish Connection Between Frontend and Backend

* Implement API routes and Request Handling
    - ✅ GET
    - ✅ POST
    - PUT
* ✅ Persist Form Data to Database
* ✅ Display Database Data on Frontend

## Create User Authentication

* Implement Signup Process
* Implement Signin Process


