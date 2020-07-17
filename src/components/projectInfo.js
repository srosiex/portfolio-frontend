
import concert from '../photos/concert.png'
import cookbook from '../photos/cookbookss.png'
import portfo from '../photos/portfo.png'
import task from '../photos/t.png'
import vegrev from '../photos/vegrev.png'

const projects = [
     {
        name: "cookbook",
        category: "react",
        tech: "Utilized React, Redux, and CSS. Used Rails API to persist data. Implemented Redux for state management.",
        description: "Developed a single page web app for users to input recipes, organize by their favorites, and add comments.",
        image:cookbook,
        preview: 'https://cookbook-sh.netlify.app/',
        github: 'https://github.com/srosiex/cookbook-frontend',    
    },
    {
        name: "tasks",
        category: "javascript",
        tech: "Utilized Rails API and Javascript, Applied CRUD actions, Utilized JSON Web Tokens for secure user login.",
        description: "Built a web application that allows users to organize their todo lists.",
        image: task,
        preview: 'https://www.youtube.com/watch?v=5V4XZZUu2zA',
        github: 'https://github.com/srosiex/tasks_frontend',    

    },
    {
        name: "portfolio",
        category: "react",
        tech: "Used React for the frontend, react router dom for smooth url transitions. Used wordpress API and docker for blog.",
        description: "First portfolio made with React to house projects and blog.",
        image: portfo,
        preview: 'blank',
        github: 'https://github.com/srosiex/portfolio-frontend',  
    },
    {
        name: "veg reviews",
        category: "rails",
        tech: "Utilized Ruby on Rails. Implemented cookies and Omniauth for secure login. Applied CRUD actions.",
        description: "Created a Yelp-like restaurant review web application to create new restaurants and add reviews.",
        image: vegrev,
        preview: 'https://www.youtube.com/watch?v=8CGxZ-Q05yA',
        github: 'https://github.com/srosiex/veg_reviews',  

    },
    {
        name: "concert collector",
        category: "sinatra",
        tech: "Utilized Ruby, and ActiveRecord. Used cookies for secure login. Implemented REST for clear URL mapping.",
        description: "Constructed a web application for users to share concerts that they have attended.",
        image: concert,
        preview: 'https://concert-collector-sinatra.herokuapp.com/',
        github: 'https://github.com/srosiex/concert_collector',  
    }
]
// const projects = {
//         react: {
//             name: "cookbook",
//             category: "react",
//             description: "blah blah blah"
//             }

// }
export default projects

