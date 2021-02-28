import port1 from '../img/portImages/amazon-clone.png';
import port2 from '../img/portImages/covid-19.png';
import port3 from '../img/portImages/slack.png';
import port4 from '../img/portImages/instagram.png';
import port6 from '../img/portImages/youtube.png';
import port7 from '../img/portImages/unsplash.png';
import port8 from '../img/portImages/web-scraping.png';
import port9 from '../img/portImages/node.jpg';



const portfolios = [
    {
        id: 1,
        category: 'React',
        link1: 'https://github.com/droidjahangir/amazon-clone-react-firebase-stripe',
        link2: 'https://challenge-617a5.web.app/',
        icon1: 'Git',
        icon2: 'Live',
        image: port1,
        title: 'Amazon clone',
        description: 'This project build with React, context api, hooks, mongodb, Stripe payment system, material ui and many more.'
    },
    {
        id: 2,
        category: 'React',
        link1: 'https://github.com/droidjahangir/covid-19-tracker-react-hooks',
        link2: 'https://covid-19-tracker-a0485.web.app/',
        icon1: 'Git',
        icon2: 'Live',
        image: port2,
        title: 'Covid 19 Tracker',
        description: 'This project is build with react js, hooks, material ui and many more. Backend services hoisted in Firebase cloud service.'
    },
    {
        id: 3,
        category: 'React',
        link1: 'https://github.com/droidjahangir/slack-clone',
        link2: 'https://slack-clone-c73a0.web.app/',
        icon1: 'Git',
        icon2: 'Live',
        image: port3,
        title: 'Slack clone',
        description: 'This project is build with Reactjs, Context API, hooks, Material ui, google authentication system, firebase cloud storage and many more.'
    },
    {
        id: 4,
        category: 'Javascript',
        link1: 'https://github.com/droidjahangir/instagram-clone',
        link2: 'https://instagram-clone-react-18f44.web.app/',
        icon1: 'Git',
        icon2: 'Youtube',
        image: port4,
        title: 'Instagram clone',
        description: 'This project is build with React js, hooks, Material ui, firebase and mongodb.'
    },
    {
        id: 5,
        category: 'React Js',
        link1: 'https://github.com/droidjahangir/react-youtube-clone',
        link2: 'https://clone-29604.web.app/',
        icon1: 'Git',
        icon2: 'Live',
        image: port6,
        title: 'Youtube clone',
        description: 'This project is build with react and we integrate youtube api. It is hoisted in Firebase.'
    },
    {
        id: 6,
        category: 'React Js',
        link1: 'https://github.com/droidjahangir/react-unsplash-clone',
        link2: 'https://unsplash-clone-69be5.web.app/',
        icon1: 'Git',
        icon2: 'Live',
        image: port7,
        title: 'Unsplash clone',
        description: 'This project is just clone of Unsplash site. we will use api to catch pics.This project is hoisted in Firebase server.'
    },
    {
        id: 7,
        category: 'python',
        link1: 'https://github.com/droidjahangir/python-web-scraping',
        link2: 'https://jahangir-devs.medium.com/web-scraping-%E0%A6%93%E0%A7%9F%E0%A7%87%E0%A6%AC-%E0%A6%B8%E0%A7%8D%E0%A6%95%E0%A7%8D%E0%A6%B0%E0%A7%87%E0%A6%AA%E0%A6%BF%E0%A6%82-5dc56a2eb7d8',
        icon1: 'Git',
        icon2: 'Blog',
        image: port8,
        title: 'Web scraping using scrapy',
        description: 'In this repository I have scraped three different site cigabuy, imdb and livecoin.'
    },
    {
        id: 8,
        category: 'node js',
        link1: 'https://github.com/droidjahangir/nodejs-backend-solution',
        link2: 'https://jahangir-devs.medium.com/%E0%A6%A8%E0%A7%8B%E0%A6%A1-node-js-42fb6359b749',
        icon1: 'Git',
        icon2: 'Blog',
        image: port9,
        title: 'Node js backend solution',
        description: 'I have added almost all feature about node js. Such as Authentication, REST api, MongoDB, Sorting, Pagination, Filtering, File upload.'
    }
]

export default portfolios;