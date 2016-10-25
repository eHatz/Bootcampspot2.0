import React, { Component } from 'react';
// onChange={updateText}

class InputBox extends Component {

	render() {
		const { value, SubmitCareer, updateText, currentText } = this.props;
		return (
			<div>
		    	<form onSubmit={SubmitCareer}>
					<input 
						id="urlInputField"
						type="text"
						placeholder={value}
						value={currentText}
						onChange={updateText}
						required
					/>
					<button id="urlLinkButton" type="submit">Save</button>
				</form>
			</div>
		)
	}
}

export default InputBox;
