import React, { Component } from 'react';
// onChange={updateText}

class InputBox extends Component {

	render() {
		const { value, updateText, currentText } = this.props;
		return (
			<div>
		    	<form action="action_page">
					<label>{value}</label>
					<input id="urlInputField" type="text" placeholder={value} value={currentText} onChange={updateText}/>
				</form>
			</div>
		)
	}
}

export default InputBox;
