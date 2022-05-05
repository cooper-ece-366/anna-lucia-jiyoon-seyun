import React, {useState} from 'react'
import ReactWordcloud from 'react-wordcloud'
import MiniPlayer from '../mini_components/MiniPlayer'

// const [currentPage, setCurrentPage] = useState(1);
// const [postsPerPage, setPostsPerPage] = useState(10);

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

const songs = [
    {
        title: "Food",
        artist: "AWOL",
        album: "AWOL - A Way of Life",
        src: "000002.mp3"
    },
    {
        title: "This World",
        artist: "AWOL",
        album: "AWOL - A Way of Life",
        src: "000005.mp3"
    },
    {
        title: "Freeway",
        artist: "Kurt Vile",
        album: "Constant Hitmaker",
        src: "000010.mp3"
    },
    {
        title: "Queen Of The Wires",
        artist: "Alec K Redfearn And The Eyesores",
        album: "The Blind Spot",
        src: "000140.mp3"
    },
    {
        title: "Ohioo",
        artist: "Alec K Redfearn And The Eyesores",
        album: "Every Man For Himself",
        src: "000148.mp3"
    }
];

const Explore = () => {
  return(
    <div>
      <div className="text-xl text-[#67748a] text-left px-[5rem] py-[1rem]">
        <b>Explore</b>
      </div>

        <div className = "wrapper flex items-center justify-between px-[5rem] w-[100%] relative z-[3]">
            <div className="MiniPlayer flex flex-col items-center justify-center h-[100%] w-[50%] text-sm">
                <MiniPlayer
                    song={songs[0]}
                />
                <MiniPlayer
                    song={songs[1]}
                />
                <MiniPlayer
                    song={songs[2]}
                />
                <MiniPlayer
                    song={songs[3]}
                />
                <MiniPlayer
                    song={songs[4]}
                />



            </div>

            <div className="headings flex flex-col items-start justify-center h-[100%] w-[50%] text-[3rem]">
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