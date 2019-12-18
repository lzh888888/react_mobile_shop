import React from 'react';
import { Carousel, WingBlank, NavBar, Icon, ListView  } from 'antd-mobile';
import { BrowserRouter as  Link } from "react-router-dom";
import  './Home.css';


const  nav1 = require("../../images/nav/nav1.jpg");
const nav2 =  require("../../images/nav/nav2.jpg");
const nav3 =  require("../../images/nav/nav3.jpg");
const chongzhi = require("../../images/icon/chongzhi.png");


// ///////////////////////////
// import ReactDOM from 'react-dom';
const data = [
    {
      img: 'https://zos.alipayobjects.com/rmsportal/dKbkpPXKfvZzWCM.png',
      title: 'Meet hotel',
      des: '不是所有的兼职汪都需要风吹日晒',
    },
    {
      img: 'https://zos.alipayobjects.com/rmsportal/XmwCzSeJiqpkuMB.png',
      title: 'McDonald\'s invites you',
      des: '不是所有的兼职汪都需要风吹日晒',
    },
    {
      img: 'https://zos.alipayobjects.com/rmsportal/hfVtzEhPzTUewPm.png',
      title: 'Eat the week',
      des: '不是所有的兼职汪都需要风吹日晒',
    },
  ];
  const NUM_ROWS = 20;
  let pageIndex = 0;
  
  function genData(pIndex = 0) {
    const dataBlob = {};
    for (let i = 0; i < NUM_ROWS; i++) {
      const ii = (pIndex * NUM_ROWS) + i;
      dataBlob[`${ii}`] = `row - ${ii}`;
    }
    return dataBlob;
  }
// ///////////////////////////

export default class Home extends React.Component {
    constructor(props){
        super(props);
        // //////////////////////////
        const dataSource = new ListView.DataSource({
            rowHasChanged: (row1, row2) => row1 !== row2,
          });
            // ///////////////////////////////////
        this.state={
            data: [
                {id: 1, img: nav1 },
                {id: 2, img: nav2 },
                {id: 3, img: nav3 },
            ],
            imgHeight: 120,
            item_data: [1,2,3,4,5,6,7,8],

            // /////////
            dataSource,
            isLoading: true,
            // //////////////////////////

        }
    }

    // // /////////////////
    // componentDidUpdate() {
    //     if (this.state.useBodyScroll) {
    //       document.body.style.overflow = 'auto';
    //     } else {
    //       document.body.style.overflow = 'hidden';
    //     }
    //   }

    // //   /////////////////////


    componentDidMount() {
        // simulate img loading
        // setTimeout(() => {
        //   this.setState({
        //     data: ['1', '2', '3'],
        //   });
        // }, 100);

        // ////////////////////
        setTimeout(() => {
            this.rData = genData();
            this.setState({
              dataSource: this.state.dataSource.cloneWithRows(this.rData),
              isLoading: false,
            });
          }, 600);
    // ////////////////////////
      }

    //跳转到搜索页面
    gotoSearch = () => {
        console.log("gotoSearch");
    }

    // ///////////////////////////////////////////////////////
    onRefresh = () => {
        this.setState({ refreshing: true, isLoading: true });
        // simulate initial Ajax
        setTimeout(() => {
          this.rData = genData();
          this.setState({
            dataSource: this.state.dataSource.cloneWithRows(this.rData),
            refreshing: false,
            isLoading: false,
          });
        }, 600);
      };
    
      onEndReached = (event) => {
        // load new data
        // hasMore: from backend data, indicates whether it is the last page, here is false
        if (this.state.isLoading && !this.state.hasMore) {
          return;
        }
        console.log('reach end', event);
        this.setState({ isLoading: true });
        setTimeout(() => {
          this.rData = [...this.rData, ...genData(++pageIndex)];
          this.setState({
            dataSource: this.state.dataSource.cloneWithRows(this.rData),
            isLoading: false,
          });
        }, 1000);
      };
    //   ///////////////////////////////


    render(){
        const separator = (sectionID, rowID) => (
            <div
              key={`${sectionID}-${rowID}`}
              style={{
                backgroundColor: '#F5F5F9',
                height: 8,
                borderTop: '1px solid #ECECED',
                borderBottom: '1px solid #ECECED',
              }}
            />
          );
          let index = data.length - 1;
          const row = (rowData, sectionID, rowID) => {
            if (index < 0) {
              index = data.length - 1;
            }
            const obj = data[index--];
            return (
              <div key={rowID} style={{ padding: '0 15px' }}>
                <div
                  style={{
                    lineHeight: '50px',
                    color: '#888',
                    fontSize: 18,
                    borderBottom: '1px solid #F6F6F6',
                  }}
                >{obj.title}</div>
                <div style={{ display: '-webkit-box',  padding: '15px 0' }}>
                  <img style={{ height: '64px', marginRight: '15px' }} src={obj.img} alt="" />
                  <div style={{ lineHeight: 1 }}>
                    <div style={{ marginBottom: '8px', fontWeight: 'bold' }}>{obj.des}</div>
                    <div><span style={{ fontSize: '30px', color: '#FF6E27' }}>{rowID}</span>¥</div>
                  </div>
                </div>
              </div>
            );
          };


        return (
            <div>
                <NavBar
                    style={{background: "#c82519",color: "white"}}
                    mode="light"
                    // icon={<Icon type="left" />}
                    // onLeftClick={() => console.log('onLeftClick')}
                    rightContent={[
                       <Link to="/search"><Icon key="0"  type="search" style={{ marginRight: '16px',color: "white" }} onClick={this.gotoSearch} /></Link> 
                    ]}
                >
                    <span style={{color:"white"}}>易购购</span>
                </NavBar>
                {/* 轮播图 */}
                <div style={{overflow: "hidden", width: "100%"}}>
                    <WingBlank style={{position: "relative",}} >
                        <div className="slider-bg"></div>
                        <Carousel
                        autoplay={true}
                        infinite
                        // beforeChange={(from, to) => console.log(`slide from ${from} to ${to}`)}
                        // afterChange={index => console.log('slide to', index)}
                        >
                        {this.state.data.map(val => (
                            <a
                            key={val.id}
                            href="http://www.alipay.com"
                            style={{ display: 'inline-block', width: '100%', height: this.state.imgHeight}}
                            >
                            <img
                                src={val.img}
                                alt=""
                                style={{ width: '100%', verticalAlign: 'top', borderRadius: "10px"}}
                                onLoad={() => {
                                // fire window resize event to change height
                                window.dispatchEvent(new Event('resize'));
                                this.setState({ imgHeight: 'auto' });
                                }}
                            />
                            </a>
                        ))}
                        </Carousel>
                    </WingBlank>
                </div>
                {/* 功能页面 */}
                <div className="box_wrapper">
                   {this.state.item_data.map(v=>(
                         <div key={v} className="box_item">
                         <img alt="" src={chongzhi} />
                         <span>充值缴费</span>
                      </div>
                   ))}
                </div>
                {/* 商品列 */}
                <ListView
                    ref={el => this.lv = el}
                    dataSource={this.state.dataSource}
                    // renderHeader={() => <span>header</span>}
                    renderFooter={() => (<div style={{ padding: 30, textAlign: 'center' }}>
                    {this.state.isLoading ? 'Loading...' : 'Loaded'}
                    </div>)}
                    renderRow={row}
                    renderSeparator={separator}
                    className="am-list"
                    pageSize={4}
                    useBodyScroll
                    onScroll={() => { console.log('scroll'); }}
                    scrollRenderAheadDistance={500}
                    onEndReached={this.onEndReached}
                    onEndReachedThreshold={10}
                />

            </div>
        )
    }
}