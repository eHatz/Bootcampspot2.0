import React, { Component } from "react";
import "./TableColumn.css";



class TableColumn extends Component {
	
	render() {

		const { pageName, colNum, colType, colData} = this.props;

		return (
			<div className={pageName + 'Col' + colNum + ' table' + colType}>
				{colType === 'Button' ? (
					<div>
						
					</div>
				) : (
					<p>{colData}</p>
				)}
			</div>
		)
	}
}

export default TableColumn;