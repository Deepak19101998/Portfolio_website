import React from 'react'
import Title from './Title'
import Recommendation from './Recommendation.js';
import Skill from './Skill.js';
import Project from './Project';
import About from './About';
import Blog from './Blog';

function HomePage() {
    return (
        <div>
            <Title />
            <Recommendation />
            <Skill />
            <Project />
            <About />
            <Blog />
        </div>
    )
}

export default HomePage;
