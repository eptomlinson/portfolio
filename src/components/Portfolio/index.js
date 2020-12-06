import React from 'react';

const Portfolio = () => {
    return (
        <div className="infoContainer" >
            <div className ="infoWrapper">
                <div className= "infoRow">
                    <div className= "infoCol">
                        <div className = "textWrapper">
                        <div className = "heading">
                            <h2>Deployed apps developed at the Northwestern Coding Bootcamp:</h2>
                            {/* <img src="https://cdn.mos.cms.futurecdn.net/HjFE8NKWuCmgfHCcndJ3rK-1024-80.jpg.webp" alt="zebra"></img> */}
                            <a href="https://boiling-scrubland-76321.herokuapp.com/">Bobby's Hobbies</a>
                            <a href="https://tranquil-gorge-52847.herokuapp.com/">Krusty Krab Employee Database</a>
                            <a href="https://afternoon-shelf-73240.herokuapp.com/">Fitness Tracker</a>
                            <a href="https://fierce-dawn-26517.herokuapp.com/">Game of Games</a>
                            <a href="https://eptomlinson.github.io/project1/">Dinner and a Movie</a>

                        </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Portfolio;
