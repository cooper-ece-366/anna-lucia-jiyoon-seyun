import React, { Component } from "react";

<<<<<<< HEAD
//Test Implemented by: Seyun Kim
=======
//Test implemented by: Seyun Kim
>>>>>>> 4965377a91fe991d74fcd1b8d0badf48007bdaa5
class App extends Component {
    state = {
        audio: new Audio(sound),
        isPlaying: false,
    };

    playPause = () => {
        let isPlaying = this.state.isPlaying;

        if (isPlaying) {
            this.state.audio.pause();
        }
        else{
            this.state.audio.play();
        }

        this.setState({isPlaying: !isPlaying});
    };
}

export default test;