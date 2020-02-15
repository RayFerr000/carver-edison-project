# Carver Edison Front End Project
> This is a very simple app that which features OAuth, RWD, React state using hooks, and a bit of deployment


## Installation

The first thing you need to do in order to get this project running locally is clone this repo. In your terminal, run this command

```sh
git clone https://github.com/RayFerr000/carver-edison-project.git
```
After this, I would suggest that you go through the procees of getting a google app client ID. You can do this here https://developers.google.com/identity/sign-in/web/sign-in

Once you have a client ID, run the following commands in your terminal

```sh
cd carver-edison-project
npm install
touch .env
```
Now that the file .env is created, open it in your editor of choice and add the following line

```sh
REACT_APP_GOOGLE_CLIENT_ID="PASTE YOUR CLIENT ID HERE"
```

After this, you cant start the application with 
```sh
npm start
```
## Deployment

The apllication is currently setup to be deployed via firebase. However, for some reason it's broken. Will fix when I have the chance
