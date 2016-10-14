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
		const { header1, header2, header3, header4, pageName, tableButtonRoute } = this.props;
{/*styling for width of each column shouldgo on the page css under the class pagenameCol1, 2, 3 ex: homePageCol1*/}
		return (
			<div id="wholeTable">
				<div id='headRow' className='row remove-all-margin-padding'>
			 		<p className={pageName +'Col1 tableHeader'}>{header1}</p>
					<p className={pageName +'Col2 tableHeader'}>{header2}</p>
					<p className={pageName +'Col3 tableHeader'}>{header3}</p>
					<p className={pageName +'Col4 tableHeader'}>{header4}</p>

				</div>
				{
					dummyData.map((item, index) =>
						<TableRow
							col1={item.week}
							col2={item.homework}
							col3={item.dueDate}
							col4={item.submission}
							pageName = {pageName}
							key= {index}
							tableButton = {tableButtonRoute}
						/>
					)
				}
			</div>
		)
	}
}

export default Table;