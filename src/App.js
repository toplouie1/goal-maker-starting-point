import "./App.css";
import NavBar from "./components/NavBar";
import { Component } from "react";

class App extends Component {
	constructor() {
		super();
		this.state = {
			mainList: "",
		};
	}

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
							value={this.state.mainList}
							onInput={this.changeInput}
						/>
						<button>Add List</button>
					</form>
				</div>
			);
		};

		return (
			<div className="app">
				<NavBar />
				<CompletedListTotal />
				<MainList />
			</div>
		);
	}
}

export default App;
