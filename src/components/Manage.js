import React, { Component } from 'react';
// import autobind from 'autobind-decorator';
import update from 'react-addons-update';
import AddEntryForm from './AddEntryForm.js';

// import Firebase stuff
import Rebase from 're-base';
var base = Rebase.createClass({
  	  apiKey: "AIzaSyBdsPVoPIkaN_poNEGcEU71GiBupw049U4",
      authDomain: "not-quicken.firebaseapp.com",
      databaseURL: "https://not-quicken.firebaseio.com/",
      storageBucket: "not-quicken.appspot.com",
});
/*-------------------------------------
| Render the <Manage/>  component
-------------------------------------*/
// @autobind
class Manage extends Component {
	constructor(){
		super();
		//Set the initial state to look for entries
		this.state = {
			entries : {}
			// entries : {
			// 	0 : {
			// 		id : 'id1',
			// 		title : 'test title 1',
			// 		date : '2016-09-02',
			// 		amount : '100'
			// 	}
			// }
		}
		this.addEntry = this.addEntry.bind(this);
	}
	//link the app with firebase
	componentDidMount(){
		base.syncState(this.props.params + '/entries', {
			context : this,
			state : 'entries'
		})
	}
	addEntry(entry){
		console.log('from addEntry', entry);
		console.log('from addEntry', this.state.entries);
		// create a timestamp
		let key = 'entry-'+(new Date()).getTime();
		// update the state object
		// this.state.entries['entry-' + timestamp] = entry;
		// set the state
		this.setState({
			entries: update(this.state.entries, {[key]: {$set: entry}})
		})
	}
	removeEntry(key){
		// 1. Confirm that the user wants to delete the entry
		if(confirm("Are you sure you want to delete this entry?")){
			// 2. if yes, delete entry
			this.setState({
				entries: update(this.state.entries, {[key]: {$set: null}})
			});
		}
	}
	handleChange(key, event){
		let thisName = event.target.name;
		let thisData = event.target.value;
		console.log(event.target);
		console.log(key);
		// console.log(event.target.value);
		// console.log(event.parent);
		this.setState({
			entries: update(this.state.entries, {[key]: {[thisName]: {$set: thisData}}})
		})
		// Update(this.state.entries, {1: {title: {$set: thisData}}});
		// this.setState({ [event.target.id]: event.target.value });
	}
	renderEntries(key){
		// console.log('from renderEntries', this.state.entries[key]);
		let thisEntry = this.state.entries[key];
		return (
			<div className="entry-list-item" key={key}>
				<li>
					{/* change this to a list of the entries, with an arrow that opens up the field */}
					<span>
					{thisEntry.title}

					</span>
					<span>
					{thisEntry.date}

					</span>
					<span>
					{thisEntry.amount}

					</span>
				</li>
				<span className="form-block">
					<label htmlFor="title">Title</label>
					<input type="text" ref="title" name="title" value={thisEntry.title}  onChange={this.handleChange.bind(this, key)} required/>
				</span>
				<span className="form-block">
					<label htmlFor="date">Date</label>
					<input type="date" ref="date" name="date" value={thisEntry.date}  onChange={this.handleChange.bind(this)} required/>
				</span>
				<span className="form-block">
					<label htmlFor="amount">Amount $</label>
					<input type="text" ref="amount" name="amount" value={thisEntry.amount}  onChange={this.handleChange.bind(this)} required/>
				</span>
				<button onClick={this.removeEntry.bind(this, key)}>Remove Entry</button>
			</div>
		)
	}
	render(){
		return (
			<main>
				<h1>Manage your stuff</h1>
				<div className="entry-form">
					<h2>Make a new Entry</h2>
				<AddEntryForm addEntry={this.addEntry}/>
				</div>
				<section className="entries">
					<h1>Entries</h1>
						<div className="entries">
					 	 {Object.keys(this.state.entries).map(this.renderEntries.bind(this))}
						</div>
				</section>
			</main>
		);
	} //end of render
}

export default Manage;
