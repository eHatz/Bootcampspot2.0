import React, { Component } from "react";




class MenuButtons extends Component{
	render(){
		return(

			<div>
				<ul className="nav nav-pills">
				  <li className="active"><a data-toggle="pill" href="#home">Home</a></li>
				  <li><a data-toggle="pill" href="#menu1">Menu 1</a></li>
				  <li><a data-toggle="pill" href="#menu2">Menu 2</a></li>
				</ul>

				<div className="tab-content">
				  <div id="home" className="tab-pane fade in active">
				    <h3>HOME</h3>
				    <p>Some content.</p>
				  </div>
				  <div id="menu1" className="tab-pane fade">
				    <h3>Menu 1</h3>
				    <p>Some content in menu 1.</p>
				  </div>
				  <div id="menu2" className="tab-pane fade">
				    <h3>Menu 2</h3>
				    <p>Some content in menu 2.</p>
				  </div>
				</div>
			</div>

			)
	}

}

export default MenuButtons;