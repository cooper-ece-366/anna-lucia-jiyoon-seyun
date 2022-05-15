import React from 'react' // THIS LINE IS REQUIRED

//Function coded by: Anna Konvicka
const Learn_more = () => {
    return (
        <div className="Contact px-[5rem] py-[2rem]">
            <div className="text-2xl">
                Learn More
            </div>

            <div className="items-center text-[1rem]">
            <span>
                <em>Below are some resources we referenced conceptually in developing this project:</em>
            </span>
            </div>

            <div className="headline mt-5 flex flex-col items-center text-[1.25rem]">
                <b><span> Ongoing Work  <a className="text-muted text-indent 40px" href="https://steinhardt.nyu.edu/marl/research/projects/sounds-new-york-city-sonyc">  - SONYC </a> </span></b>
            </div>
            <div>
                <span>
                    The Steinardt School at NYU is working on SONYC, an ongoing project to monitor and classify features of the acoustic environment in NYC, with a focus on mitigation. As part of this project, they have produced a tagged, open-source sound library of the NYC cityscape.
                </span>
            </div>

            <div className="headline mt-5 flex flex-col items-center text-[1.25rem]">
                <b><span> Exploring Audiospace <a className="text-muted text-indent 40px" href="https://everynoise.com/">  -   Every Noise at Once</a> </span></b>
            </div>
            <div>
                <span>
                    We were inspired by exploratory methods of classification similar to those of the Spotify algorithm based on using labels to create categories of similar sounds.
                </span>
            </div>

            <div className="headline mt-5 flex flex-col items-center text-[1.25rem]">
                <b><span> Tagging a Large Statespace <a className="text-muted" href="https://colornames.org/">  - Colornames</a> </span></b>
            </div>
            <div>
                <span>
                    This open-source playful app encourages users to create inventive descriptions of the entire RGB colorspace with a tool that allows exploration of recent tags.
                </span>
            </div>
        </div>

    );
}

export default Learn_more;