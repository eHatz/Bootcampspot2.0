import React, { Component } from "react";
import "./TableColumn.css";



class TableColumn extends Component {
	
	render() {

		const { pageName, colNum, colType, colData, colButton } = this.props;

		return (
			<div className={pageName + 'Col' + colNum + ' table' + colType}>
				{colType === 'Button' ? (
					<div>
						{colButton}
					</div>
				) : (
					<p>{colData}</p>
				)}
			</div>
		)
	}
}

export default TableColumn;