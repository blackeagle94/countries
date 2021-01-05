import React, { Component } from 'react';
import './App.css';
import Countries from './components/Countries';
import Filter from './components/Filter';
import Headers from './components/Header';
import { countriesAll } from './data/countriesAll';
import 'bootstrap/dist/css/bootstrap.min.css'



class App extends Component {
  state = {
    countries : countriesAll,
    filter: '',
    isClicked : false
  }

  filterRegion = (reg) => {
    if (reg == 'all') {
      this.setState({...this.state, countries: countriesAll})
    } else {
      this.setState({...this.state, countries: countriesAll.filter(item => item.region == reg)})
    }
  }

  filterNames = (text) => {
    if (text == '') {
      let select = document.getElementById('select').value
      if (select == 'all') {
        this.setState({...this.state, isClicked:false, countries: countriesAll})
      }
      if (select == 'Asia') {
        this.setState({...this.state, isClicked:false, countries: countriesAll.filter(item => item.region == 'Asia')})
      }
      if (select == 'Africa') {
        this.setState({...this.state, isClicked:false, countries: countriesAll.filter(item => item.region == 'Africa')})
      }
      if (select == 'Americas') {
        this.setState({...this.state, isClicked:false, countries: countriesAll.filter(item => item.region == 'Americas')})
      }
      if (select == 'Europe') {
        this.setState({...this.state, isClicked:false, countries: countriesAll.filter(item => item.region == 'Europe')})
      }
      if (select == 'Oceania') {
        this.setState({...this.state, isClicked:false, countries: countriesAll.filter(item => item.region == 'Oceania')})
      }
      if (select == 'Polar') {
        this.setState({...this.state, isClicked:false, countries: countriesAll.filter(item => item.region == 'Polar')})
      }
    } else {
      let filtered = this.state.countries.filter(item => item.name.toLowerCase().indexOf(text.toLowerCase()) !== -1
    )
      this.setState({...this.state, countries: filtered})
    }
  }

  isClicked = (name) => {
  
      this.setState({...this.state, isClicked: !this.state.isClicked, countries: countriesAll.filter(item => item.name == name)})
  }

  mainPage = () => {
    this.setState({...this.state, isClicked: false})
    let select = document.getElementById('select').value
      if (select == 'all') {
        this.setState({...this.state, isClicked: false, countries: countriesAll})
      }
      if (select == 'Asia') {
        this.setState({...this.state, isClicked: false, countries: countriesAll.filter(item => item.region == 'Asia')})
      }
      if (select == 'Africa') {
        this.setState({...this.state, isClicked: false, countries: countriesAll.filter(item => item.region == 'Africa')})
      }
      if (select == 'Americas') {
        this.setState({...this.state, isClicked: false, countries: countriesAll.filter(item => item.region == 'Americas')})
      }
      if (select == 'Europe') {
        this.setState({...this.state, isClicked: false, countries: countriesAll.filter(item => item.region == 'Europe')})
      }
      if (select == 'Oceania') {
        this.setState({...this.state, isClicked: false, countries: countriesAll.filter(item => item.region == 'Oceania')})
      }
      if (select == 'Polar') {
        this.setState({...this.state, isClicked: false, countries: countriesAll.filter(item => item.region == 'Polar')})
      }
  }

 

	render() {
		return (
			<div className="">
				<Headers />
				<Filter countries={this.state.countries} mainPage={this.mainPage} filterRegion={this.filterRegion} filterNames={this.filterNames} />
				<Countries filterNames={this.filterNames}  details={this.state.isClicked} isClicked={this.isClicked} countries={this.state.countries} countriesAll={countriesAll}/>
			</div>
		);
	}
}

export default App;
