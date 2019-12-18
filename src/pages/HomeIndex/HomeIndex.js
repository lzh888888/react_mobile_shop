import React from 'react';
import { TabBar } from 'antd-mobile';
import Home from '../Home/Home';
import ProduceClass from '../ProduceClass/ProduceClass';
import Car from '../Car/Car';
import Mine from '../Mine/Mine';

export default class HomeIndex extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedTab: 'home',
      hidden: false,
      fullScreen: false,
    };
  }


  render() {
    return (
      <div style={ { position: 'fixed', height: '100%', width: '100%', top: 0 } }>
        <TabBar
          unselectedTintColor="#bfbfbf"
          tintColor="red"
          barTintColor="white"
          hidden={this.state.hidden}
        >
          <TabBar.Item
            title="首页"
            key="home"
            icon={<div style={{
              width: '22px',
              height: '22px',
              background: `url(${require("../../images/icon/home.png")}) center center /  21px 21px no-repeat` }}
            />
            }
            selectedIcon={<div style={{
              width: '22px',
              height: '22px',
              background: `url(${require("../../images/icon/home_selected.png")}) center center /  21px 21px no-repeat` }}
            />
            }
            selected={this.state.selectedTab === 'home'}
            // badge={1}
            onPress={() => {
              this.setState({
                selectedTab: 'home',
              });
            }}
            data-seed="logId"
          >
            <Home />
          </TabBar.Item>
          <TabBar.Item
            icon={
              <div style={{
                width: '22px',
                height: '22px',
                background: `url(${require("../../images/icon/class.png")}) center center /  21px 21px no-repeat` }}
              />
            }
            selectedIcon={
              <div style={{
                width: '22px',
                height: '22px',
                background: `url(${require("../../images/icon/class_selected.png")}) center center /  21px 21px no-repeat` }}
              />
            }
            title="分类"
            key="class"
            // badge={'new'}
            selected={this.state.selectedTab === 'class'}
            onPress={() => {
              this.setState({
                selectedTab: 'class',
              });
            }}
            data-seed="logId1"
          >
            <ProduceClass />
          </TabBar.Item>
          <TabBar.Item
            icon={
              <div style={{
                width: '22px',
                height: '22px',
                background: `url(${require("../../images/icon/car.png")}) center center /  21px 21px no-repeat` }}
              />
            }
            selectedIcon={
              <div style={{
                width: '22px',
                height: '22px',
                background: `url(${require("../../images/icon/car_selected.png")}) center center /  21px 21px no-repeat` }}
              />
            }
            title="购物车"
            key="car"
            // dot
            selected={this.state.selectedTab === 'car'}
            onPress={() => {
              this.setState({
                selectedTab: 'car',
              });
            }}
          >
            <Car />
          </TabBar.Item>
          <TabBar.Item
            icon={
              <div style={{
                width: '22px',
                height: '22px',
                background: `url(${require("../../images/icon/mine.png")}) center center /  21px 21px no-repeat` }}
              />
            }
            selectedIcon={
              <div style={{
                width: '22px',
                height: '22px',
                background: `url(${require("../../images/icon/mine_selected.png")}) center center /  21px 21px no-repeat` }}
              />
            }
            title="我的"
            key="mine"
            // dot
            selected={this.state.selectedTab === 'mine'}
            onPress={() => {
              this.setState({
                selectedTab: 'mine',
              });
            }}
          >
            <Mine />
          </TabBar.Item>
        </TabBar>
      </div>
    );
  }
}
