/* Code by Seyun Kim, Jiyoon Pyo and Lucia Rhode */
// Music Player coded by Seyun Kim
// Pie Chart coded by Jiyoon Pyo
// Axios Authorization coded by Lucia Rhode

/*Functionality:
User is given a pie chart that is in three hierarchy. At their final hierarchy (the third one) after picking the one they would
like to the description of the sound. They will hit submit. This will update the database and redirect them to the explore tab
*/
import React, { useRef, useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

import AudioPlayer from "../../Components/AudioPlayer/AudioPlayer";
import { ADJS } from "./adjectives";

import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

import { Pie, getElementAtEvent } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

// Data initialization for the pie chart
export const data = {
  labels: ["bad", "fearful", "peaceful", "happy", "sad", "disgusted", "angry"],
  datasets: [
    {
      label: "adjectives",
      data: [1, 1, 1, 1, 1, 1, 1],
      backgroundColor: [
        "rgba(236, 85, 101, 1)",
        "rgba(242, 110, 83, 1)",
        "rgba(103, 152, 208, 1)",
        "rgba(255, 206, 85, 1)",
        "rgba(91, 193, 166, 1)",
        "rgba(231, 136, 184, 1)",
        "rgba(244, 247, 250, 1)",
      ],
      borderColor: ["#081730"],
      borderWidth: 1,
    },
  ],
};

export const options = {
  tooltips: {
    enabled: false
  }
};

// This function changes the data being displayed on the pie chart when a sector is clicked
function changeData(chart, label) {
  chart.data.labels = label;
  chart.update();
}

const Tag = () => {
  const [sound, setSound] = useState([]);

  let { _id } = useParams();

  // The axios receives the information on the sound
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

  // onClick, the adjective follows the adjectives.js and goes to its children, and resets the label
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

        <div className="mr-[10rem] chart relative w-[35%]">
          <Pie 
            ref={chartRef} 
            data={data} 
            onClick={onClick} 
            options={options}/>

          <button
            className="place-self-center mb-[10rem] mt-[5rem] ml-[16rem] mr-[35px] w-[100px] px-[25px] py-[7px] hover:bg-[#E9C46A] hover:text-[#081730] border-[2px] rounded-[10px] border-[#E9C46A]"
            onClick={(e) => {
              e.preventDefault();
              axios.put(`http://localhost:8080/api/sounds/${_id}/${selection}`, {}, { headers: { authorization: localStorage.getItem("login_token")}});
              window.location.href=`/explore/${_id}`;
            }}
          >Submit</button>
        </div>
      </div>
    </div>
  );
};

export default Tag;
