import React, { Component } from "react";

//Test implemented by: Seyun Kim
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