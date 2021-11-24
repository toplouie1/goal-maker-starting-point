import "./App.css";
import NavBar from "./components/NavBar";
import { Component } from "react";

class App extends Component {
	constructor() {
		super();
		this.state = {
			mainList: "",
			childList: "",
		};
	}
	// for the mainList input
	changeAllList = (e) => {
		this.setState({
			[e.target.name]: e.target.value,
		});
	};

	render() {
		// it is checking the total of all completed list
		let CompletedListTotal = () => {
			return <div>Total Completed List : 0</div>;
		};

		let MainList = () => {
			return (
				<div>
					<h2>Lists</h2>
					<form>
						<input
							name="mainList"
							type="text"
							value={this.state.mainList}
							onInput={this.changeAllList}
						/>
						<button>Add List</button>
					</form>
				</div>
			);
		};

		let ChildList = () => {
			return (
				<div>
					<h2>{this.state.mainList}</h2>
					<form>
						<input
							name="childList"
							type="text"
							value={this.state.childList}
							onInput={this.changeAllList}
						/>
						<button>Add List</button>
						<uL>
							<li>{this.state.childList}</li>
						</uL>
					</form>
				</div>
			);
		};

		return (
			<div className="app">
				<NavBar />
				<CompletedListTotal />
				<MainList />
				<ChildList />
				<ChildList />
				<ChildList />
			</div>
		);
	}
}

export default App;
