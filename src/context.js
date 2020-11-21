import React,{Component} from 'react';

const Context = React.createContext();

export class Provider extends Component{
    state = {
        projects:
        [
            {
                id: 1,
                ImageUrl:"https://storage.googleapis.com/unschool-portfolio-website/free-stock-image-1.jpg",
                title:"Project 1",
                content:"This is my project about...",
                body : "Body 1",
            },
            {
                id: 2,
                ImageUrl:"https://storage.googleapis.com/unschool-portfolio-website/free-stock-image-1.jpg",
                title:"Project 2",
                content:"This is my project about...",
                body : "Body 2",
            },
            {   
                id:3,
                ImageUrl:"https://storage.googleapis.com/unschool-portfolio-website/free-stock-image-1.jpg",
                title:"Project 3",
                content:"This is my project about...",
                body : "Body 3",
            },
            {   
              id:4,
              ImageUrl:"https://storage.googleapis.com/unschool-portfolio-website/free-stock-image-1.jpg",
              title:"Project 4",
              content:"This is my project about...",
              body : "Body 4",
            },
            {   
              id:5,
              ImageUrl:"https://storage.googleapis.com/unschool-portfolio-website/free-stock-image-1.jpg",
              title:"Project 5",
              content:"This is my project about...",
              body : "Body 5",
            },
            {   
              id:6,
              ImageUrl:"https://storage.googleapis.com/unschool-portfolio-website/free-stock-image-1.jpg",
              title:"Project 6",
              content:"This is my project about...",
              body : "Body 6",
            },
        ],
       
        blogs :
        [   
            {
                id: 1,
                imageUrl:"https://storage.googleapis.com/unschool-portfolio-website/free-stock-image-2.jpg",
                title:"Blog 1",
                content:"This is my Blog about..."
            },
            {
                id: 2,
                imageUrl:"https://storage.googleapis.com/unschool-portfolio-website/free-stock-image-2.jpg",
                title:"Blog 2",
                content:"This is my Blog about..."
            },
            {
                id: 3,
                imageUrl:"https://storage.googleapis.com/unschool-portfolio-website/free-stock-image-2.jpg",
                title:"Blog 3",
                content:"This is my Blog about..."
            },
            {
              id: 4,
              imageUrl:"https://storage.googleapis.com/unschool-portfolio-website/free-stock-image-2.jpg",
              title:"Blog 4",
              content:"This is my Blog about..."
            },
            {
              id: 5,
              imageUrl:"https://storage.googleapis.com/unschool-portfolio-website/free-stock-image-2.jpg",
              title:"Blog 5",
              content:"This is my Blog about..."
            },
        ],

        recommendationcards : 
        [
            {
                id: 0,
                title:"He is a Good Engineer",
                about:"Random Guy",
                company:"CEO At MNO Company"
            },
            {
                id: 1,
                title:"He is a Good Engineer",
                about:"Random Girl",
                company:"CEO At ABC Company"
            },
            {
                id: 2,
                title:"He is a Good Engineer",
                about:"Random Boy",
                company:"CEO At BCD Company"
            },
            {
                id: 3,
                title:"He is a Good Engineer",
                about:"Random Uncle",
                company:"CEO At EFG Company"
            },
            {
                id: 4,
                title:"He is a Good Engineer",
                about:"Random project",
                company:"CEO At HIJ Company"
            },
            {
                id: 5,
                title:"He is a Good Engineer",
                about:"Random task",
                company:"CEO At KLM Company"
            }       
        ],

        technologies : [
            {
                id: 1,
                imageUrl:"https://storage.googleapis.com/unschool-portfolio-website/html5.png",
                name:"HTML5",
                starsTotal:3,
                starsActive:2
            },
            {
                id: 2,
                name: "CSS3",
                imageUrl:
                  "https://storage.googleapis.com/unschool-portfolio-website/css3.png",
                starsTotal: 3,
                starsActive: 1,
              },
              {
                id: 3,
                name: "Javascript",
                imageUrl:
                  "https://storage.googleapis.com/unschool-portfolio-website/javascript.png",
                starsTotal: 3,
                starsActive: 2,
              },
              {
                id: 4,
                name: "Bootstrap 4",
                imageUrl:
                  "https://storage.googleapis.com/unschool-portfolio-website/bootstrap4.png",
                starsTotal: 3,
                starsActive: 1,
              },
              {
                id: 5,
                name: "React",
                imageUrl:
                  "https://storage.googleapis.com/unschool-portfolio-website/react.png",
                starsTotal: 3,
                starsActive: 3,
              },
              {
                id: 6,
                name: "MySQL",
                imageUrl:
                  "https://storage.googleapis.com/unschool-portfolio-website/mysql.png",
                starsTotal: 3,
                starsActive: 1,
              },
              {
                id: 7,
                name: "Python",
                imageUrl:
                  "https://storage.googleapis.com/unschool-portfolio-website/python.png",
                starsTotal: 3,
                starsActive: 2,
              },
              {
                id: 8,
                name: "Flask",
                imageUrl:
                  "https://storage.googleapis.com/unschool-portfolio-website/flask.png",
                starsTotal: 3,
                starsActive: 0,
              }
        ]
    }
    
    render(){
        return(
            <Consumer.Provider value={this.state}>
                {this.props.children}
            </Consumer.Provider>
        )
    }
}

export const Consumer = Context.Consumer;

