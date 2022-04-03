// import React, { Component } from 'react';
// import './App.css';
// import { PieChart, Pie, Sector } from 'recharts';
// import {
//   Route,
//   Routes
// } from 'react-router-dom';
// import Home from '../pages/home/Home';

// const data = [
//   { name: 'Group A', def: 'sample definition A', value: 1 },
//   { name: 'Group B', def: 'sample definition B', value: 1 },
//   { name: 'Group C', def: 'sample definition C', value: 1 },
//   { name: 'Group D', def: 'sample definition D', value: 1 },
//   { name: 'Group E', def: 'sample definition E', value: 1 },
//   { name: 'Group F', def: 'sample definition F', value: 1 },
// ];

// const renderActiveShape = (props) => {
//   const RADIAN = Math.PI / 180;
//   const { cx, cy, midAngle, innerRadius, outerRadius, startAngle, endAngle, fill, payload, name, def } = props;
//   const sin = Math.sin(-RADIAN * midAngle);
//   const cos = Math.cos(-RADIAN * midAngle);
//   const sx = cx + (outerRadius + 10) * cos;
//   const sy = cy + (outerRadius + 10) * sin;
//   const mx = cx + (outerRadius + 30) * cos;
//   const my = cy + (outerRadius + 30) * sin;
//   const ex = mx + (cos >= 0 ? 1 : -1) * 22;
//   const ey = my;
//   const textAnchor = cos >= 0 ? 'start' : 'end';

//   return (
//     <g>
//       <text x={cx} y={cy} dy={8} textAnchor="middle" fill={fill}>
//         {payload.name}
//       </text>
//       <Sector
//         cx={cx}
//         cy={cy}
//         innerRadius={innerRadius}
//         outerRadius={outerRadius}
//         startAngle={startAngle}
//         endAngle={endAngle}
//         fill={fill}
//       />
//       <Sector
//         cx={cx}
//         cy={cy}
//         startAngle={startAngle}
//         endAngle={endAngle}
//         innerRadius={outerRadius + 6}
//         outerRadius={outerRadius + 10}
//         fill={fill}
//       />
//       <path d={`M${sx},${sy}L${mx},${my}L${ex},${ey}`} stroke={fill} fill="none" />
//       <circle cx={ex} cy={ey} r={2} fill={fill} stroke="none" />
//       <text x={ex + (cos >= 0 ? 1 : -1) * 12} y={ey} textAnchor={textAnchor} fill="#333">{name}</text>
//       <text x={ex + (cos >= 0 ? 1 : -1) * 12} y={ey} dy={18} textAnchor={textAnchor} fill="#999">
//         {def}
//       </text>
//     </g>
//   );
// };

// const moveToNext = (prop) => {
//   console.log("Pie is clicked")
// };

// class App extends Component {

//   state = {
//     activeIndex: 0,
//   };

//   onPieEnter = (_, index) => {
//     this.setState({
//       activeIndex: index,
//     });
//   };

//   // onPieClick = (_) => {
//   //   moveToNext
//   // };

// render() {
//   return (
//     <div className="App">
//       <div className="app-body">
//         <Routes>
//           <Route path="/home" component={Home}></Route>
//           <Route path="/latest" component={Home}></Route>
//         </Routes>
//       </div>

//       <div class="topnav">
//         <a class="active" href="/">TONEPOEM</a>
//         <a href="/latest">Latest</a>
//         <a href="/search">Search</a>
//         <a href="/data">Data/API</a>
//         <a href="/about">About</a>
//       </div>

//       <section class="pie-chart">
//         <PieChart width={700} height={700}>
//           <Pie 
//             activeIndex={this.state.activeIndex}
//             activeShape={renderActiveShape}
//             data={data} 
//             dataKey="value" 
//             outerRadius={250} 
//             fill="#ac3b61" 
//             onMouseEnter={this.onPieEnter}
//             />
//         </PieChart>
//       </section>
//     </div>
//   );
// }
// }

import React from 'react' // THIS LINE IS REQUIRED
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'; // Do npm install react-router-dom@5
import './App.css';
import Navbar from '../navbar/Navbar';
import Home from '../home/Home';
import Tag from '../tag/Tag';
import Explore from '../explore/Explore';
import Contact from '../contact/Contact';

function App() {
  const title = 'Welcome to the new blog';
  const likes = 50;

  return(
    <Router>
      <div className = "App">
        <Navbar />
        <div className = "content">
          <Switch>
            <Route exact path = "/">
              <Home />
            </Route>

            <Route exact path = "/tag">
              <Tag />
            </Route>

            <Route exact path = "/explore">
              <Explore />
            </Route>

            <Route exact path = "/contact">
              <Contact />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>

  );
}

export default App;

