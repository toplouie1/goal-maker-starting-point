import "./App.css";
import NavBar from "./components/NavBar";
import { Component } from "react";

class App extends Component {
	constructor() {
		super();
		this.state = {
			mainList: "",
			childList: "",
			noteList: "",
		};
	}
	// for the mainList input
	changeAllList = (e) => {
		this.setState({
			[e.target.name]: e.target.value,
		});
	};

	// Main submit
	mainSubmit = (e) => {
		e.preventDefault();
		this.setState({
			mainList: e.target.value,
		});
	};

	render() {
		// it is checking the total of all completed list
		let CompletedListTotal = () => {
			return <div className="stats">Total Completed List : 0</div>;
		};

		// the main list
		let MainList = () => {
			return (
				<div>
					<h2>Lists</h2>
					<form onSubmit={this.mainSubmit}>
						<input
							name="mainList"
							value={this.state.mainList}
							onInput={this.changeAllList}
						/>
						<button type="submit">Add List</button>
					</form>
				</div>
			);
		};

		// the small list
		let ChildList = () => {
			return (
				<div>
					<h2>{this.state.mainList}</h2>
					<form>
						<input
							name="childList"
							value={this.state.childList}
							onInput={this.changeAllList}
						/>
						<button className="small-button">Add item</button>
						<ul>
							<li>{this.state.childList}</li>
						</ul>
					</form>
				</div>
			);
		};

		// the note
		let AllNotes = () => {
			return (
				<div>
					<h2>Notes</h2>
					<form>
						<input
							name="noteList"
							value={this.state.noteList}
							onInput={this.changeAllList}
						/>
						<button>Add Note</button>
					</form>
				</div>
			);
		};

		return (
			<div className="app">
				<NavBar id="navBar" />
				<div>
					<CompletedListTotal />
					<MainList className="list" />
					<ChildList />
				</div>
				<div>
					<AllNotes className="note" />
				</div>
			</div>
		);
	}
}

export default App;
