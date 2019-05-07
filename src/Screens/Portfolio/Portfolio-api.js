import java from '@iconify/react/logos/java';
import hibernate from '@iconify/react/logos/hibernate';
import react from '@iconify/react/logos/react';
import redux from '@iconify/react/logos/redux';
import bootstrap from '@iconify/react/logos/bootstrap';
import javascript from '@iconify/react/logos/javascript';
import spring from '@iconify/react/logos/spring';
import angularIcon from '@iconify/react/logos/angular-icon';
import githubOctocat from '@iconify/react/logos/github-octocat';
import typescriptIcon from '@iconify/react/logos/typescript-icon';
import reactRouter from '@iconify/react/logos/react-router';
import androidOs from '@iconify/react/flat-color-icons/android-os';
import googleIcon from '@iconify/react/flat-color-icons/google';
import weatherIcon from '@iconify/react/flat-ui/weather';

const imageSize = 120;

const workDone = [
    {
        "id": 0,
        "url": "https://play.google.com/store/apps/details?id=com.insu.sunny.hireme",
        "title": "Hire.me",
        "classes": "sticky-l",
        "background": "#8ddbf8",
        "tech": "Android",
        "stack": [androidOs, java],
        "body": `This app is the demonstration of my work related to web and mobile technology. 
                 It is basically a responsive portfolio app built using React library and rendered inside 
                 android using WebClient. It comes with a contact form. If you want to provide me any feedbacks
                 or any suggetions/offer then just fill the form and Hire.me will send those details 
                 to me through JavaMail API.`,
        "image": `https://img.icons8.com/color/${imageSize}/000000/permanent-job.png`
    },
    {
        "id": 1,
        "url": "https://github.com/sprakash57/todo-app",
        "title": "Tasker",
        "classes": "sticky-l",
        "background": "#cfc",
        "tech":"Web",
        "stack": [react, redux, bootstrap],
        "body": `When you put Redux into react for steady state management then you get Tasker. A classic to-do list
                app built using React, Redux and Bootstrap`,
        "image": `https://img.icons8.com/color/${imageSize}/000000/to-do.png`
    },
    {
        "id": 2,
        "url": "https://play.google.com/store/apps/details?id=com.droidvista.sunny.tictactoe",
        "title": "Connect 3",
        "classes": "sticky-r",
        "background": "#e380bc",
        "tech":"Android",
        "stack": [androidOs, java],
        "body": `My first official android app. Coded in java, Connect 3 is a 3x3 classic Tic Tac Toe board game. The player who 
                succeeds in placing three of their marks in a horizontal, vertical, or diagonal row wins the game. You can play with your
                bestie or try to challange your smartphone in single player mode`,
        "image": `https://img.icons8.com/dusk/${imageSize}/000000/share-2.png`
    },
    {
        "id": 3,
        "url": "https://github.com/sprakash57/What-s-the-weather",
        "title": "Weather today?",
        "classes": "sticky-l",
        "background": "#ccf",
        "tech":"Web",
        "stack": [react, javascript, weatherIcon],
        "body": `Weather today gives you flexibility to access forecast information of different cities in a list format. 
                Just search for your city name and it will provide you sunset and sunrise time, weather info, max and min temperature. 
                It is using OpenWeather API in the backend.`,
        "image": `https://img.icons8.com/bubbles/${imageSize}/000000/sun.png`
    },
    {
        "id": 4,
        "url": "https://github.com/sprakash57/book-explorer",
        "title": "Bookplorer",
        "classes": "sticky-r",
        "background": "#e380bc",
        "tech":"Web",
        "stack": [react, javascript, googleIcon],
        "body": `Google has many book in their database and this app let you tap into that treasure. You put the title of the book and it
                 provide you all the possible outcome in galary format.`,
        "image": `https://img.icons8.com/clouds/${imageSize}/000000/book.png`
    },
    {
        "id": 5,
        "url": "https://github.com/sprakash57/User-Search",
        "title": "gitHub users",
        "classes": "sticky-r",
        "background": "#bf8",
        "tech":"Web",
        "stack": [angularIcon, typescriptIcon, githubOctocat],
        "body": `This was developed as a POC project after learning Angualar 6 and typescript. It searches all the github users for you 
                along with some useful data.`,
        "image": `https://img.icons8.com/color/${imageSize}/000000/github.png`
    },
    {
        "id": 6,
        "url": "https://github.com/sprakash57/web-customer-tracker",
        "title": "CRM",
        "classes": "sticky-l",
        "background": "#ffc",
        "tech":"Web",
        "stack": [java, spring, bootstrap, hibernate],
        "body": `Built on Spring framework CRM(Customer relationship manager) app presents a miniature version of salesforce. It has its 
                database where customer data can be stored, retrieved, updated and deleted`,
        "image": `https://img.icons8.com/cotton/${imageSize}/000000/customer-support.png`
    },
    {
        "id": 7,
        "url": "https://sprakash57.github.io/portfolio",
        "title": "Portfolio",
        "classes": "sticky-r",
        "background": "#f3a456",
        "tech":"Web",
        "stack": [react, reactRouter, bootstrap],
        "body": `This is the very website where you are browsing right now. Initially it was based on vanilla javascript. But later on 
                developed using React and some other latest javascript libraries.`,
        "image": `https://img.icons8.com/office/${imageSize}/000000/set-as-resume.png`
    }
];

export default workDone;