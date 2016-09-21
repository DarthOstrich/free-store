import React, { Component } from 'react';

/*-------------------------------------
| Create <AddEntryForm/> component
-------------------------------------*/
class AddEntryForm extends Component {
	handleSubmit(event){
		// 1. Prevent default behavior of the form
		event.preventDefault();
		// console.log(this.refs.title);

		// 2. Create an object from data
		// console.log(this.refs.title.value);
		var entry = {
			title : this.refs.title.value,
			date : this.refs.date.value,
			amount : this.refs.amount.value
		}

		// 3. Add entry to Manage State
		// console.log(entry);
		this.props.addEntry(entry);

		// 4. Reset the Form
		this.refs.entryForm.reset();

	}
	render(){
		return (
				<form ref="entryForm" className="new-entry-form" onSubmit={this.handleSubmit.bind(this)}>
					<div className="form-row">
						<label htmlFor="title">Name of the Job <span className="required">(required)</span></label>
						<input type="text" ref="title" name="title" placeholder="example: Website for Vandalay Industries" required/>
					</div>
					<div className="form-row">
						<label htmlFor="date">Date <span className="required">(required)</span></label>
						<input type="date" ref="date" name="date" required/>
					</div>
					<div className="form-row">
						<label htmlFor="amount">How much did you make? <span className="required">(required)</span></label>
						<input type="text" ref="amount" name="amount" placeholder="100.10" required/>
					</div>
					<button type="submit">Add Entry</button>
				</form>
		);
	}
}
export default AddEntryForm;
