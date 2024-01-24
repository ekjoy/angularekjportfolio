# Installation pre-requisites

Please use Node 16.20.1 long-term support (LTS) version.
Npm 8.19.4
Angular 16 version

# Installing the Angular CLI

With the following command the angular-cli will be installed globally in your machine:

    npm install -g @angular/cli
    or
    npm i -g @angular/cli@x.y.z.

Its also possible to install the modules as usual using npm:

    npm install

NPM 5 or above has the big advantage that if you use it you will be installing the exact same dependencies than I installed in my machine, so you wont run into issues caused by semantic versioning updates.

This should take a couple of minutes.

# To run the Development UI Server

To run the frontend part of our code, we will use the Angular CLI:

    npm start

The application is available at port 4200: [http://localhost:4200](http://localhost:4200)

# To run the Angular Universal Live Development Server

To run the application in development mode but still have it server side rendered:

    npm run dev:ssr

The live universal application is available at port 4200: [http://localhost:4200](http://localhost:4200)

To Build

    npm run build:ssr

Deployment steps

    After build /dist folder will be created with below structure
    /dist/<projectname>/browser
    /dist/<projectname>/server

    move the /dist folder to the deployment root folder
    copy the main.js file from /dist/<projectname>/server to deployment root folder
    Update hosting (plesk) by installing node JS version 16 and start up file as main.js
