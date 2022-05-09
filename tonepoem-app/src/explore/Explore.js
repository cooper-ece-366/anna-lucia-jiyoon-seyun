/*Code written by : Jiyoon Pyo, Seyun Kim*/
//Music Players coded by: Seyun Kim
//WordCloud coded by: Jiyoon Pyo

/*File objective: Display Explore page where user can listen to audio data samples and
* discover statistics of adjectives selected by other users for the corresponding audio sample.
* Users can also navigate to a specific tag page where they can tag adjectives for each audio sample.
* */
import React, {useState} from 'react'
import ReactWordcloud from 'react-wordcloud'
import MiniPlayer from '../mini_audio_player/MiniPlayer'
import ReactPaginate from 'react-paginate'
import BarChart from 'react-bar-chart';

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

const size = [600, 200];

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

//Function coded by: Seyun Kim
const handlePageClick = (event) => {

    console.log("page clicked")
    console.log(event.selected)
}

//Coded by: Jiyoon Pyo, Seyun Kim
const Explore = () => {
  return(
    <div>
      <div className="text-xl text-[#67748a] text-left px-[5rem] py-[1rem]">
        <b>Explore</b>
      </div>

        <div className = "wrapper flex flex-col items-center w-[100%] h-[100%]">
            <div className="MiniPlayerStat flex flex-row items-center justify-center text-sm">
                <MiniPlayer
                    song={songs[0]}
                />
                <ReactWordcloud
                    callbacks = {callbacks}
                    options = {options}
                    size = {size}
                    words = {words}
                />
            </div>
            <div className="MiniPlayerStat flex flex-row items-center justify-center text-sm">
                <MiniPlayer
                    song={songs[0]}
                />
                <ReactWordcloud
                    callbacks = {callbacks}
                    options = {options}
                    size = {size}
                    words = {words}
                />
            </div>
            <div className="MiniPlayerStat flex flex-row items-center justify-center text-sm">
                <MiniPlayer
                    song={songs[0]}
                />
                <ReactWordcloud
                    callbacks = {callbacks}
                    options = {options}
                    size = {size}
                    words = {words}
                />
            </div>
            <div className="MiniPlayerStat flex flex-row items-center justify-center  text-sm">
                <MiniPlayer
                    song={songs[0]}
                />
                <ReactWordcloud
                    callbacks = {callbacks}
                    options = {options}
                    size = {size}
                    words = {words}
                />
            </div>
            <div className="MiniPlayerStat flex flex-row items-center justify-center text-sm">
                <MiniPlayer
                    song={songs[0]}
                />
                <ReactWordcloud
                    callbacks = {callbacks}
                    options = {options}
                    size = {size}
                    words = {words}
                />
            </div>
            <div className="MiniPlayerStat flex flex-row items-center justify-center text-sm">
                <MiniPlayer
                    song={songs[0]}
                />
                <ReactWordcloud
                    callbacks = {callbacks}
                    options = {options}
                    size = {size}
                    words = {words}
                />
            </div>



            {/*<div className="MiniPlayer flex flex-col items-center justify-center h-[100%] w-[50%] text-sm">*/}
            {/*    <MiniPlayer*/}
            {/*        song={songs[0]}*/}
            {/*    />*/}
            {/*    <MiniPlayer*/}
            {/*        song={songs[1]}*/}
            {/*    />*/}
            {/*    <MiniPlayer*/}
            {/*        song={songs[2]}*/}
            {/*    />*/}
            {/*    <MiniPlayer*/}
            {/*        song={songs[3]}*/}
            {/*    />*/}
            {/*    <MiniPlayer*/}
            {/*        song={songs[4]}*/}
            {/*    />*/}
            {/*    <MiniPlayer*/}
            {/*        song={songs[0]}*/}
            {/*    />*/}
            {/*    <MiniPlayer*/}
            {/*        song={songs[1]}*/}
            {/*    />*/}
            {/*    <MiniPlayer*/}
            {/*        song={songs[2]}*/}
            {/*    />*/}
            {/*    <MiniPlayer*/}
            {/*        song={songs[3]}*/}
            {/*    />*/}
            {/*    <MiniPlayer*/}
            {/*        song={songs[4]}*/}
            {/*    />*/}

            {/*</div>*/}

            {/*<div className="headings flex flex-col items-start justify-center h-[100%] w-[50%] text-[3rem]">*/}
            {/*  <ReactWordcloud*/}
            {/*      callbacks = {callbacks}*/}
            {/*      options = {options}*/}
            {/*      size = {size}*/}
            {/*      words = {words}*/}
            {/*  />*/}
              {/*      <BarChart*/}
              {/*        ylabel='adjectives'*/}
              {/*        width={500}*/}
              {/*        height={400}*/}
              {/*        margin={margin}*/}
              {/*        data={words}*/}
              {/*        // onBarClick={this.handleBarClick}/>*/}
              {/*          />*/}
            {/*</div>*/}

        </div>
        <div className="paginate py-[4rem]">
            <ReactPaginate
                pageCount={10}
                previousLabel={'<<'}
                nextLabel={'>>'}
                marginPagesDisplayed={3}
                containerClassName={'pagination justify-content-center'}
                pageClassName={'page-item'}
                pageLinkClassName={'page-link'}
                onPageChange={handlePageClick}
                previousClassName={'page-item'}
                previousLinkClassName={'page-link'}
                nextClassName={'page-item'}
                nextLinkClassName={'page-link'}
                breakClassName={'page-item'}
                breakLinkClassName={'page-link'}
                activeClassName={'active'}
            />
        </div>
    </div>
  );
}

export default Explore;