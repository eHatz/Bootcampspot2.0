import React, { Component } from "react";
import "./Table.css";
import TableRow from './TableRow/TableRow.jsx'

	var dummyData= [
		{
			week: 1,
			homework: 'Homework1',
			dueDate: '1/2/2016',
			submission: '1/1/2016'
		},
		{
			week: 2,
			homework: 'Homework2',
			dueDate: '1/2/2016',
			submission: '1/1/2016'
		},
		{
			week: 3,
			homework: 'Homework3',
			dueDate: '1/2/2016',
			submission: '1/1/2016'
		}
	];
class Table extends Component {

	render() {
		const { header1, header2, header3, header4 } = this.props;
	
		return (
			<div className= "col-md-8 remove-all-margin-padding">
				<div id='headRow' className='row remove-all-margin-padding'>
					<p className='tableHeader'>{header1}</p>
					<p className='tableHeader'>{header2}</p>
					<p className='tableHeader'>{header3}</p>
					<p className='tableHeader'>{header4}</p>
				</div>
				{
					dummyData.map((item, index) =>
						<TableRow
							col1={item.week}
							col2={item.homework}
							col3={item.dueDate}
							col4={item.submission}
							key= {index}
						/>
					)
				}
			</div>
		)
	}
}

export default Table;