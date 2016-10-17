import React, { Component } from "react";
import "./TableRow.css";
import TableColumn from '../TableColumn/TableColumn.jsx';


class TableRow extends Component {

	render() {
		const { columnCount, pageName } = this.props;
		return (
			<div className= "remove-all-margin-padding">
				<div className='row remove-all-margin-padding'>
					{
						columnCount.map((item, index) =>
							<TableColumn
								pageName = {pageName}
								colNum = {index + 1}
								colData = {item.value}
								colType = {item.type}
								key= {index}
							/>
						)
					}
				</div>
			</div>
		)
	}
}

export default TableRow;