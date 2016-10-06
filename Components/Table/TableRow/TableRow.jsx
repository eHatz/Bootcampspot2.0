import React, { Component } from "react";
import "./TableRow.css";



class TableRow extends Component {

	render() {
		const { col1, col2, col3, col4, pageName } = this.props;
	
		return (
			<div className= "remove-all-margin-padding">
				<div id='dataRow' className='row remove-all-margin-padding'>
					<p className={pageName +'Col1 tableData'}>{col1}</p>
					<p className={pageName +'Col2 tableData'}>{col2}</p>
					<p className={pageName +'Col3 tableData'}>{col3}</p>
					<div className={pageName +'Col4 tableData'}>
						<button id='hwButton' className='btn btn-primary'>Submit</button>
					</div>
				</div>
			</div>
		)
	}
}

export default TableRow;