import React, { Component } from "react";
import "./TableColumn.css";



class TableColumn extends Component {
	
	render() {

		const { pageName, colNum, colType, colData} = this.props;

		return (
			<div className={pageName + 'Col' + colNum + ' table' + colType}>
				{colType === 'Button' ? (
					<div>
						<a href="#"><span className="glyphicon glyphicon-expand"></span></a>
					</div>
				) : (
					<p>{colData}</p>
				)}
			</div>
		)
	}
}

export default TableColumn;