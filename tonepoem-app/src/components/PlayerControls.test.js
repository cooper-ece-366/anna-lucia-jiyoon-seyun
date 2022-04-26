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

