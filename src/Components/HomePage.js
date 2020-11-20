import React from 'react'
import Title from './Title'
import Recommendation from './Recommendation.js';
import Technology from './Technology.js';
import Project from './Project';
import About from './About';
import Blog from './Blog';

function HomePage() {
    return (
        <div>
            <Title />
            <Recommendation />
            <Technology />
            <Project />
            <About />
            <Blog />
        </div>
    )
}

export default HomePage;
