import React, { Component } from 'react';
import './App.css';
import Countries from './components/Countries';
import Filter from './components/Filter';
import Headers from './components/Header';
import { countriesAll } from './data/countriesAll';
import 'bootstrap/dist/css/bootstrap.min.css';

const asia = countriesAll.filter((item) => item.region == 'Asia');
const africa = countriesAll.filter((item) => item.region == 'Africa');
const americas = countriesAll.filter((item) => item.region == 'Americas');
const europe = countriesAll.filter((item) => item.region == 'Europe');
const oceania = countriesAll.filter((item) => item.region == 'Oceania');
const polar = countriesAll.filter((item) => item.region == 'Polar');

class App extends Component {
	state = {
		countries: countriesAll,
		filter: '',
		isClicked: false
	};

	filterRegion = (reg) => {
		if (reg == 'all') {
			this.setState({ ...this.state, countries: countriesAll });
		} else {
			this.setState({ ...this.state, countries: countriesAll.filter((item) => item.region == reg) });
		}
	};

	filterNames = (text) => {
		if (text == '') {
			let select = document.getElementById('select').value;
			if (select == 'all') {
				this.setState({ ...this.state, isClicked: false, countries: countriesAll });
			}
			if (select == 'Asia') {
				this.setState({
					...this.state,
					isClicked: false,
					countries: countriesAll.filter((item) => item.region == 'Asia')
				});
			}
			if (select == 'Africa') {
				this.setState({
					...this.state,
					isClicked: false,
					countries: countriesAll.filter((item) => item.region == 'Africa')
				});
			}
			if (select == 'Americas') {
				this.setState({
					...this.state,
					isClicked: false,
					countries: countriesAll.filter((item) => item.region == 'Americas')
				});
			}
			if (select == 'Europe') {
				this.setState({
					...this.state,
					isClicked: false,
					countries: countriesAll.filter((item) => item.region == 'Europe')
				});
			}
			if (select == 'Oceania') {
				this.setState({
					...this.state,
					isClicked: false,
					countries: countriesAll.filter((item) => item.region == 'Oceania')
				});
			}
			if (select == 'Polar') {
				this.setState({
					...this.state,
					isClicked: false,
					countries: countriesAll.filter((item) => item.region == 'Polar')
				});
			}
		} else {
			let select = document.getElementById('select').value;
			switch (select) {
				case 'all':
					return this.setState({
						...this.state,
						countries: countriesAll.filter(
							(item) => item.name.toLowerCase().indexOf(text.toLowerCase()) !== -1
						)
					});
				case 'Africa':
					return this.setState({
						...this.state,
						countries: africa.filter((item) => item.name.toLowerCase().indexOf(text.toLowerCase()) !== -1)
					});
				case 'Asia':
					return this.setState({
						...this.state,
						countries: asia.filter((item) => item.name.toLowerCase().indexOf(text.toLowerCase()) !== -1)
					});
				case 'Americas':
					return this.setState({
						...this.state,
						countries: americas.filter((item) => item.name.toLowerCase().indexOf(text.toLowerCase()) !== -1)
					});
				case 'Europe':
					return this.setState({
						...this.state,
						countries: europe.filter((item) => item.name.toLowerCase().indexOf(text.toLowerCase()) !== -1)
					});
				case 'Oceania':
					return this.setState({
						...this.state,
						countries: oceania.filter((item) => item.name.toLowerCase().indexOf(text.toLowerCase()) !== -1)
					});
				case 'Polar':
					return this.setState({
						...this.state,
						countries: polar.filter((item) => item.name.toLowerCase().indexOf(text.toLowerCase()) !== -1)
					});
				default:
					return;
			}
		}
	};

	isClicked = (name) => {
		this.setState({
			...this.state,
			isClicked: !this.state.isClicked,
			countries: countriesAll.filter((item) => item.name == name)
		});
	};

	mainPage = () => {
		this.setState({ ...this.state, isClicked: false });
		let select = document.getElementById('select').value;
		if (select == 'all') {
			this.setState({ ...this.state, isClicked: false, countries: countriesAll });
		}
		if (select == 'Asia') {
			this.setState({
				...this.state,
				isClicked: false,
				countries: countriesAll.filter((item) => item.region == 'Asia')
			});
		}
		if (select == 'Africa') {
			this.setState({
				...this.state,
				isClicked: false,
				countries: countriesAll.filter((item) => item.region == 'Africa')
			});
		}
		if (select == 'Americas') {
			this.setState({
				...this.state,
				isClicked: false,
				countries: countriesAll.filter((item) => item.region == 'Americas')
			});
		}
		if (select == 'Europe') {
			this.setState({
				...this.state,
				isClicked: false,
				countries: countriesAll.filter((item) => item.region == 'Europe')
			});
		}
		if (select == 'Oceania') {
			this.setState({
				...this.state,
				isClicked: false,
				countries: countriesAll.filter((item) => item.region == 'Oceania')
			});
		}
		if (select == 'Polar') {
			this.setState({
				...this.state,
				isClicked: false,
				countries: countriesAll.filter((item) => item.region == 'Polar')
			});
		}
	};

	render() {
		console.log(asia, africa, americas, europe, oceania, polar);
		return (
			<div className="">
				<Headers />
				<Filter
					countries={this.state.countries}
					mainPage={this.mainPage}
					filterRegion={this.filterRegion}
					filterNames={this.filterNames}
				/>
				<Countries
					filterNames={this.filterNames}
					details={this.state.isClicked}
					isClicked={this.isClicked}
					countries={this.state.countries}
					countriesAll={countriesAll}
				/>
			</div>
		);
	}
}

export default App;
