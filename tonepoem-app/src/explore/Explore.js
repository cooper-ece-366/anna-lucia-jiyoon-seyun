import React from 'react'
import ReactWordcloud from 'react-wordcloud'

const words = [
  {
    text: 'a',
    value: 5000,
  },

  {
    text: 'b',
    value: 2000,
  },

  {
    text: 'c',
    value: 3000,
  },

  {
    text: 'd',
    value: 1200,
  },
  {
    text: 'e',
    value: 5000,
  },

  {
    text: 'f',
    value: 2000,
  },

  {
    text: 'g',
    value: 3000,
  },

  {
    text: 'h',
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

      <div className="wrapper flex items-center justify-between px-[5rem] w-[100%] relative z-[3]">
        <div className="music flex flex-col items-center text-center justify-center w-[50%]">
          {/* <Player
            testID = "player"
            currentSongIndex={currentSongIndex}
            setCurrentSongIndex={setCurrentSongIndex}
            nextSongIndex={nextSongIndex}
            songs={songs}
          /> */}
        </div>

        <div className="wordcloud flex relative w-[50%]">
          <ReactWordcloud 
            callbacks = {callbacks}
            options = {options}
            size = {size}
            words = {words}
          />
        </div>
      </div>
    </div>
  );
}

export default Explore;