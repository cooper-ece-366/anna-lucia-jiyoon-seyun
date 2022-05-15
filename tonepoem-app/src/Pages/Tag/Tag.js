/* Code by Seyun Kim and Jiyoon Pyo */
// Music Player coded by Seyun Kim
// Pie Chart coded by Jiyoon Pyo

import React, { useRef, useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import styled from "styled-components";

import AudioPlayer from "../../Components/AudioPlayer/AudioPlayer";
import { ADJS } from "./adjectives";

import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

import { Pie, getElementAtEvent } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

const Button = styled.button`
  background-color: #e9c46a;
  color: black;
  padding: 5px 5px;
  border-radius: 6px;
  outline: 0;
`;

export const data = {
  labels: ["bad", "fearful", "peaceful", "happy", "sad", "disgusted", "angry"],
  datasets: [
    {
      label: "adjectives",
      data: [1, 1, 1, 1, 1, 1, 1],
      backgroundColor: [
        "rgba(255, 99, 132, 1)",
        "rgba(54, 162, 235, 1)",
        "rgba(255, 206, 86, 1)",
        "rgba(75, 192, 192, 1)",
        "rgba(153, 102, 255, 1)",
        "rgba(255, 159, 64, 1)",
        "rgba(54, 162, 235, 1)",
      ],
      // borderColor: [
      //   "rgba(255, 99, 132, 1)",
      //   "rgba(54, 162, 235, 1)",
      //   "rgba(255, 206, 86, 1)",
      //   "rgba(75, 192, 192, 1)",
      //   "rgba(153, 102, 255, 1)",
      //   "rgba(255, 159, 64, 1)",
      //   "rgba(54, 162, 235, 1)",
      // ],
      borderWidth: 1,
    },
  ],
};

export const options = {
  tooltips: {
    enabled: false
  }
};

function changeData(chart, label) {
  chart.data.labels = label;
  chart.update();
}

const Tag = () => {
  const [sound, setSound] = useState([]);

  let { _id } = useParams();

  useEffect(function () {
    async function getSound() {
      try {
        const response = await axios.get(
          `http://localhost:8080/api/sounds/${_id}`
        );
        setSound(response.data);
      } catch (error) {
        console.log(error);
      }
    }
    getSound();
  }, []);

  const chartRef = useRef();
  var adjectiveLevel = 0;
  var item = ADJS;
  var selection;

  const onClick = (event) => {
    const chart = chartRef.current;
    var index = getElementAtEvent(chartRef.current, event)[0].index;

    if (adjectiveLevel < 2) {
      item = item.children[index];
      const test = [
        item.children[0].label,
        item.children[1].label,
        item.children[2].label,
        item.children[3].label,
        item.children[4].label,
        item.children[5].label,
        item.children[6].label,
      ];
      changeData(chart, test);
      adjectiveLevel += 1;
    }

    if (adjectiveLevel == 2) {
      selection = item.children[index].label;
    }
  };

  return (
    <div className="Tag px-[5rem] py-[1.5rem]">
      <div className="text-2xl text-[#67748a] text-left">Tag</div>

      <div className="wrapper flex items-center justify-between px-[5rem] w-[100%] relative z-[3]">
        <div className="music flex flex-col items-center text-center justify-center w-[50%]">
          <AudioPlayer
            song={sound}
            src={"http://localhost:3000/" + sound.src}
          />
        </div>

        <div className="chart relative w-[35%]">
          <Pie 
            ref={chartRef} 
            data={data} 
            onClick={onClick} 
            options={options}/>

          <Button
            className="button w-[100px] flex justify-center items-center ml-[10rem]"
            onClick={(e) => {
              e.preventDefault();
              axios.put(`http://localhost:8080/api/sounds/${_id}/${selection}`);
            }}
          >
            <strong>Submit</strong>
          </Button>
        </div>
      </div>
      {/* <div className="flex items-right justify-right">
          <div className="top">
          
          </div>
          <div className="bottom">

          </div>
        </div> */}
    </div>
  );
};

export default Tag;
