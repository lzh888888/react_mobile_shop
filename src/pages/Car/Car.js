import React from 'react';
import './Car.css';

export default class Car extends React.Component {
    constructor(props){
        super(props);
        this.state={
            classItemSelected: "item1",
        }
    }

    scrollToAnchor = (e,anchorName) => {
        this.setState({
            classItemSelected: anchorName,
        });
        console.log(e.target.style.background);
        if (anchorName) {
            let anchorElement = document.getElementById(anchorName);
            if(anchorElement) { anchorElement.scrollIntoView({behavior: "smooth"}); }
        }
      }
    




    render(){
        return(
            <div className="class_box">
                <div className="class_name_box">
                     <ul>
                         <li className={this.state.classItemSelected ===`item1` ? "classItem_selected": "classItem_Noselected"} onClick={(e)=>this.scrollToAnchor(e,'item1')}>item1</li>
                         <li  className={this.state.classItemSelected ===`item2` ? "classItem_selected": "classItem_Noselected"} onClick={(e)=>this.scrollToAnchor(e,'item2')}>item2</li>
                         <li  className={this.state.classItemSelected ===`item3` ? "classItem_selected": "classItem_Noselected"} onClick={(e)=>this.scrollToAnchor(e,'item3')}>item3</li>
                     </ul>
                </div>
                <div className="class_Item_box">
                    <ul className="ul"  id="item1">
                        <li className="class_item">item1</li>
                        <li className="class_item">2</li>
                        <li className="class_item">3</li>
                        <li className="class_item">4</li>
                    </ul>
                    <ul className="ul"  id="item2">
                        <li className="class_item">item3</li>
                        <li className="class_item">2</li>
                        <li className="class_item">3</li>
                        <li className="class_item">4</li>
                    </ul>
                    <ul className="ul"  id="item3">
                        <li className="class_item">item3</li>
                        <li className="class_item">2</li>
                        <li className="class_item">3</li>
                        <li className="class_item">4</li>
                    </ul>
                </div>
            </div>
        )
    }
}