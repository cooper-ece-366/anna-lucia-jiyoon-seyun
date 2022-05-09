import React from 'react' // THIS LINE IS REQUIRED

//Function coded by: Anna Konvicka
const Learn_more = () => {
    return (
        //<div className="experience flex flex-col items-center justify-start px-[5rem] bg-[#020917] h-[60rem] pt-[18rem] mt-[-10rem] relative z-[2] rounded-b-[5rem]">
        //    <div className="headline mt-7 flex flex-col items-center text-[2rem]">
        <div className="learn_more flex flex-col items-center justify-start px-[5rem] bg-[#020917] h-[60rem] pt-[18rem] mt-[-10rem] relative z-[2] rounded-b-[5rem]">
            <div className="headline mt-7 flex flex-col items-center text-[3rem]">
                <span> <b>Learn More</b> </span>
            </div>

            <div>
            <span>
                Below are some resources we referenced and used conceptually in developing this project
            </span>
            </div>

            <div className="headline mt-5 flex flex-col items-center text-[2rem]">
                <span> Ongoing Work </span>
            </div>
            <div>
                <span>
                    The Steinardt School at NYU is working on SONYC, an ongoing project to monitor and classify features of the acoustic environment in NYC, with a focus on mitigation.
                </span>
            </div>
            <div>
                <a href="https://steinhardt.nyu.edu/marl/research/projects/sounds-new-york-city-sonyc">SONYC website</a>
            </div>


            <div className="headline mt-5 flex flex-col items-center text-[2rem]">
                <span> Exploring Audiospace </span>
            </div>
            <div>
                <span>
                    We were inspired by exploratory methods of classification similar to those of the Spotify algorithm based on using labels to create categories of similar sounds.
                </span>
            </div>
            <div>
                <a href="https://everynoise.com/">Every Noise at Once</a>
            </div>


            <div className="audiospace py-[0.7rem]">
                <div className="audiospace_title text-[0.9rem] py-[0.5rem]">
                    Exploring Audiospace
                </div>

            </div>
            <div className="topic_work py-[0.7rem]">
                <div className="work_title text-[0.9rem] py-[0.5rem]">
                    Other Work
                </div>

            </div>

        </div>
    );
}

export default Learn_more;