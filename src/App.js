import React from 'react';
import {
  BrowserRouter as Router, Switch, Route } from "react-router-dom";

import './App.css';



// import { TabBar } from 'antd-mobile';
import HomeIndex from './pages/HomeIndex/HomeIndex';
import Home from './pages/Home/Home';  //首页
import Mine from './pages/Mine/Mine';  //我的
import Car from './pages/Car/Car';  //购物车
import Search from './pages/Search/Search';  //搜索

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    
    };
  }

  render() {
    return (  
      <div>
        <Router>
        {/* <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
        </ul>
        <hr /> */}
        <Switch>
          <Route exact path="/">
            <HomeIndex />
          </Route>
          <Route exact path="/home">
            <Home />
          </Route>
          <Route path="/mine">
            <Mine />
          </Route>
          <Route path="/car">
            <Car />
          </Route>
          <Route path="/search">
            <Search />
          </Route>
        </Switch>

      </Router>
      </div>
    )
  }
  
}


