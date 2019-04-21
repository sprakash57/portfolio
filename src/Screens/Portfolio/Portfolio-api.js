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
        "title": "Redux Tasker",
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
        "body": "lorem ipsum",
        "image": `https://img.icons8.com/dusk/${imageSize}/000000/share-2.png`
    },
    {
        "id": 3,
        "url": "https://github.com/sprakash57/What-s-the-weather",
        "title": "What's the weather?",
        "classes": "sticky-l",
        "background": "#ccf",
        "tech":"Web",
        "stack": [react, javascript, weatherIcon],
        "body": "lorem ipsum",
        "image": `https://img.icons8.com/bubbles/${imageSize}/000000/sun.png`
    },
    {
        "id": 4,
        "url": "https://github.com/sprakash57/book-explorer",
        "title": "Book-explorer",
        "classes": "sticky-r",
        "background": "#e380bc",
        "tech":"Web",
        "stack": [react, javascript, googleIcon],
        "body": "lorem ipsum",
        "image": `https://img.icons8.com/clouds/${imageSize}/000000/book.png`
    },
    {
        "id": 5,
        "url": "https://github.com/sprakash57/User-Search",
        "title": "gitHub user search",
        "classes": "sticky-r",
        "background": "#bf8",
        "tech":"Web",
        "stack": [angularIcon, typescriptIcon, githubOctocat],
        "body": "lorem ipsum",
        "image": `https://img.icons8.com/color/${imageSize}/000000/github.png`
    },
    {
        "id": 6,
        "url": "https://github.com/sprakash57/web-customer-tracker",
        "title": "Customer-tracker",
        "classes": "sticky-l",
        "background": "#ffc",
        "tech":"Web",
        "stack": [java, spring, bootstrap, hibernate],
        "body": "lorem ipsum",
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
        "body": "lorem ipsum",
        "image": `https://img.icons8.com/office/${imageSize}/000000/set-as-resume.png`
    }
];

export default workDone;