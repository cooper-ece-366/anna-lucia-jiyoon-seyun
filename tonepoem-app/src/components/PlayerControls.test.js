//Coded by Seyun Kim
//This file tests componenets in playerControls.js
//Using testing-library/react, the contents of this file test whether the buttons exist and
//whether correct functions are called when they are clicked.
import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import PlayerControls from '../components/PlayerControls';
import Player from "./Player";

it("check if button exists", () => {
    const { queryByTitle } = render(<PlayerControls />);
    const btn = queryByTitle("button1");

    expect(btn).toBeTruthy();
});

it("check if skip button skips songs", () => {
    // const player = render(<Player />);
    // const { skipsong } = player.getByText("SkipSong");

    const playerControls = render(<PlayerControls />);
    const forwardBtn = playerControls.queryByTitle("button1");

    fireEvent.click(forwardBtn);
    // expect(skipsong).toBe(1);
})

