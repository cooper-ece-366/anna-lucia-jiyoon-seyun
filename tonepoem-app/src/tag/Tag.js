/* Code by Seyun Kim and Jiyoon Pyo */
// Music Player coded by Seyun Kim
// Pie Chart coded by Jiyoon Pyo

// import React, { useState, useEffect } from "react";
// import { useParams, useNavigate } from "react-router";
 
// export default function Edit() {
//  const [form, setForm] = useState({
//    name: "",
//    position: "",
//    level: "",
//    records: [],
//  });
//  const params = useParams();
//  const navigate = useNavigate();
 
//  useEffect(() => {
//    async function fetchData() {
//      const id = params.id.toString();
//      const response = await fetch(`http://localhost:8080/record/${params.id.toString()}`);
 
//      if (!response.ok) {
//        const message = `An error has occurred: ${response.statusText}`;
//        window.alert(message);
//        return;
//      }
 
//      const record = await response.json();
//      if (!record) {
//        window.alert(`Record with id ${id} not found`);
//        navigate("/");
//        return;
//      }
 
//      setForm(record);
//    }
 
//    fetchData();
 
//    return;
//  }, [params.id, navigate]);
 
//  // These methods will update the state properties.
//  function updateForm(value) {
//    return setForm((prev) => {
//      return { ...prev, ...value };
//    });
//  }
 
//  async function onSubmit(e) {
//    e.preventDefault();
//    const editedPerson = {
//      name: form.name,
//      position: form.position,
//      level: form.level,
//    };
 
//    // This will send a post request to update the data in the database.
//    await fetch(`http://localhost:8080/update/${params.id}`, {
//      method: "POST",
//      body: JSON.stringify(editedPerson),
//      headers: {
//        'Content-Type': 'application/json'
//      },
//    });
 
//    navigate("/");
//  }
 
//  // This following section will display the form that takes input from the user to update the data.
//  return (
//    <div>
//      <h3>Update Record</h3>
//      <form onSubmit={onSubmit}>
//        <div className="form-group">
//          <label htmlFor="name">Name: </label>
//          <input
//            type="text"
//            className="form-control"
//            id="name"
//            value={form.name}
//            onChange={(e) => updateForm({ name: e.target.value })}
//          />
//        </div>
//        <div className="form-group">
//          <label htmlFor="position">Position: </label>
//          <input
//            type="text"
//            className="form-control"
//            id="position"
//            value={form.position}
//            onChange={(e) => updateForm({ position: e.target.value })}
//          />
//        </div>
//        <div className="form-group">
//          <div className="form-check form-check-inline">
//            <input
//              className="form-check-input"
//              type="radio"
//              name="positionOptions"
//              id="positionIntern"
//              value="Intern"
//              checked={form.level === "Intern"}
//              onChange={(e) => updateForm({ level: e.target.value })}
//            />
//            <label htmlFor="positionIntern" className="form-check-label">Intern</label>
//          </div>
//          <div className="form-check form-check-inline">
//            <input
//              className="form-check-input"
//              type="radio"
//              name="positionOptions"
//              id="positionJunior"
//              value="Junior"
//              checked={form.level === "Junior"}
//              onChange={(e) => updateForm({ level: e.target.value })}
//            />
//            <label htmlFor="positionJunior" className="form-check-label">Junior</label>
//          </div>
//          <div className="form-check form-check-inline">
//            <input
//              className="form-check-input"
//              type="radio"
//              name="positionOptions"
//              id="positionSenior"
//              value="Senior"
//              checked={form.level === "Senior"}
//              onChange={(e) => updateForm({ level: e.target.value })}
//            />
//            <label htmlFor="positionSenior" className="form-check-label">Senior</label>
//        </div>
//        </div>
//        <br />
 
//        <div className="form-group">
//          <input
//            type="submit"
//            value="Update Record"
//            className="btn btn-primary"
//          />
//        </div>
//      </form>
//    </div>
//  );
// }

import React, { Component, MouseEvent, useRef, useEffect, useState } from 'react';

import { InteractionItem } from 'chart.js';
import { 
  Chart as ChartJS, 
  ArcElement, 
  Tooltip, 
  Legend 
} from 'chart.js';

import {
  Pie,
  getDatasetAtEvent,
  getElementAtEvent,
  getElementsAtEvent,
} from 'react-chartjs-2';

ChartJS.register(
  ArcElement, 
  Tooltip, 
  Legend
);

export const data = {
  labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
  datasets: [
    {
      label: '# of Votes',
      data: [1, 1, 1, 1, 1, 1],
      backgroundColor: [
        'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)',
        'rgba(153, 102, 255, 1)',
        'rgba(255, 159, 64, 1)',
      ],
      borderColor: [
        'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)',
        'rgba(153, 102, 255, 1)',
        'rgba(255, 159, 64, 1)',
      ],
      borderWidth: 1,
    },
  ],
};

function changeData(chart, label){
  chart.data.labels = label;
  chart.update();
}

const Tag = () => {

  const printElementAtEvent = function (dataset) {
    console.log('test');
  }
  // var printElementAtEvent = (chart, element) => {
  //   if(!element[0].length){
  //     return;
  //   }

  //   var index = element[0].index;

  //   console.log('here');
  //   return index;
  //   //console.log(data.labels[index]);
  // }
//   var printDatasetAtEvent = function (dataset) {
//     if (!dataset.length)
//         return;
//     var datasetIndex = dataset[0].datasetIndex;
//     console.log(data.datasets[datasetIndex].label);
// };

  // var printDatasetAtEvent = function (dataset){
  //   if(!dataset.length){
  //     return;
  //   }

  //   var a = dataset[0];
  //   var datasetIndex = a.datasetIndex;
  //   var index = a.index;

  //   console.log(data.labels[index], data.datasets[datasetIndex].data[index])
  // }
  

  const chartRef = useRef();
  var adjectiveLevel = 0;

  const onClick = (event) => {
    const chart = chartRef.current;
    const label = [['1', '2', '3', '4', '5', '6'], ['a', 'b', 'c', 'd', 'e', 'f']];

    if(!chart) {
      return;
    }

    // console.log(getDatasetAtEvent(chart, event));
    // console.log(getElementAtEvent(chart, event))
    // console.log(getElementsAtEvent(chart, event));

    console.log(printElementAtEvent(chart, getElementAtEvent(chart, event)));
    
    changeData(chart, label[adjectiveLevel]);
    adjectiveLevel += 1;
  }

  return(
    <div>
      <div className="text-xl text-[#67748a] text-left px-[5rem] py-[1rem]">
        <b>Tag</b>
      </div>
      <div className="w-[40%]">
        <Pie 
          ref={chartRef}
          data={data} 
          onClick={onClick}
        />
      </div>
    </div>
  );
}

export default Tag;