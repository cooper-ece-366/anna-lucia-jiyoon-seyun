import React from 'react'
import ReactWordcloud from 'react-wordcloud'

const words = [
    {
        text: 'told',
        value: 5000,
    },

    {
        text: 'mistake',
        value: 2000,
    },

    {
        text: 'thought',
        value: 3000,
    },

    {
        text: 'bad',
        value: 1200,
    },
]

const callbacks = {
    //getWordColor: word => word.value > 50 ? "blue" : "red",
    //onWordClick: console.log,
    onWordMouseOver: console.log,
    getWordTooltip: word => `${word.text} (${word.value}) [${word.value > 50 ? "good" : "bad"}]`,
}

const options = {
    rotations: 1,
    rotationAngles: [0, 180],
};

const size = [600, 400];

const Explore = () => {
    return(
        <div>
            <div className="text-xl text-[#67748a] text-left px-[5rem] py-[1rem]">
                <b>Explore</b>
            </div>

            <div className="headings flex flex-col items-start justify-center h-[100%] text-[3rem]">

            </div>

            <ReactWordcloud
                callbacks = {callbacks}
                options = {options}
                size = {size}
                words = {words}
            />
        </div>
    );
}

export default Explore;