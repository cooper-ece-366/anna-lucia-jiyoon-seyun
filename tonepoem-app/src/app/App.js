import React, { Component } from 'react';
import './App.css';
import { PieChart, Pie, Sector, ResponsiveContainer } from 'recharts';
import {
  Route,
  Routes
} from 'react-router-dom';
import Home from '../pages/home/Home';

const data = [
  { name: 'Group A', value: 1 },
  { name: 'Group B', value: 1 },
  { name: 'Group C', value: 1 },
  { name: 'Group D', value: 1 },
  { name: 'Group E', value: 1 },
  { name: 'Group F', value: 1 },
];

const renderActiveShape = (props) => {
  const RADIAN = Math.PI / 180;
  const { cx, cy, midAngle, innerRadius, outerRadius, startAngle, endAngle, fill, payload, percent, value } = props;
  const sin = Math.sin(-RADIAN * midAngle);
  const cos = Math.cos(-RADIAN * midAngle);
  const sx = cx + (outerRadius + 10) * cos;
  const sy = cy + (outerRadius + 10) * sin;
  const mx = cx + (outerRadius + 30) * cos;
  const my = cy + (outerRadius + 30) * sin;
  const ex = mx + (cos >= 0 ? 1 : -1) * 22;
  const ey = my;
  const textAnchor = cos >= 0 ? 'start' : 'end';

  return (
    <g>
      <text x={cx} y={cy} dy={8} textAnchor="middle" fill={fill}>
        {payload.name}
      </text>
      <Sector
        cx={cx}
        cy={cy}
        innerRadius={innerRadius}
        outerRadius={outerRadius}
        startAngle={startAngle}
        endAngle={endAngle}
        fill={fill}
      />
      <Sector
        cx={cx}
        cy={cy}
        startAngle={startAngle}
        endAngle={endAngle}
        innerRadius={outerRadius + 6}
        outerRadius={outerRadius + 10}
        fill={fill}
      />
      <path d={`M${sx},${sy}L${mx},${my}L${ex},${ey}`} stroke={fill} fill="none" />
      <circle cx={ex} cy={ey} r={2} fill={fill} stroke="none" />
      <text x={ex + (cos >= 0 ? 1 : -1) * 12} y={ey} textAnchor={textAnchor} fill="#333">{`name`}</text>
    </g>
  );
};

class App extends Component {

  state = {
    activeIndex: 0,
  };

  onPieEnter = (_, index) => {
    this.setState({
      activeIndex: index,
    });
  };

render() {
  return (
    <div className="App">
      <div className="app-body">
        <Routes>
          <Route path="/home" component={Home}></Route>
        </Routes>
      </div>
      <div class="topnav">
        <a class="active" href="/">TONEPOEM</a>
        <a href="/latest">Latest</a>
        <a href="/search">Search</a>
        <a href="/data">Data/API</a>
        <a href="/about">About</a>
      </div>

      <section class="section">
        <h1>What is TONEPOEM</h1>
        <p>A collaborative effort to create a comprehensive and well-classified database of sounds using a concise list of adjectives.</p>

        <h2>Why does it matter?</h2>
        <p>There are few tagged databases of sounds and of those that are documented, the tags are exclusively literal descriptions. Audio tagging is an important task to be able to predict the tags of audio clips. This is only possible through a thoroughly tagged audio-database.</p>

        <h2>How does it work?</h2>
        <p>To contribute to the database of audio tags and explore the audio space, listen to a short randomly-selected audio clip and choose from the word wheel the best adjective associated with the audio. Then learn more about the source of the audio clip which will be revealed.</p>

        <h2>How can I interact with the data?</h2>
        <p>Have fun <i>tagging</i> audio! You can also <i>explore</i> what sounds have been associated with which adjectives. If you’re interested in <i>playing</i> with the data we collect and <i>expanding</i> on the TONEPOEM mission, all tags are made open-source as are the audio databases we pull from. Check out the Data/API tab and feel free to contact us.</p>

      </section>

      <section class="section">
        <PieChart width={700} height={700}>
          <Pie 
            activeIndex={this.state.activeIndex}
            activeShape={renderActiveShape}
            data={data} 
            dataKey="value" 
            outerRadius={250} 
            fill="#ac3b61" 
            onMouseEnter={this.onPieEnter}/>
        </PieChart>
      </section>
    </div>
  );
}
}

export default App;

