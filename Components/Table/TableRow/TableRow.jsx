import React, { Component } from "react";
import "./TableRow.css";
import TableColumn from '../TableColumn/TableColumn.jsx';


class TableRow extends Component {

	render() {
		const { columnCount, pageName, rowLink } = this.props;


		return (
			<div className= "row remove-all-margin-padding">
				<div className={'remove-all-margin-padding tableRow' + columnCount[0].type}>
					{!rowLink  ? (
						
						columnCount.map((item, index) =>
							<TableColumn
								pageName = {pageName}
								colNum = {index + 1}
								colData = {item.value}
								colType = {item.type}
								colButton = {item.button ? item.button : null}
								key= {index}
							/>
						)
						
					) : (
						<a href={'#' + rowLink}>
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
						</a>
					)}
				</div>
			</div>
		)
	}
}

export default TableRow;