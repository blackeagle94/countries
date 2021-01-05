import React, { Component } from 'react';

class Countries extends Component {
    state = {
        filter : []
    }




	render() {
		return (
			<div className="row row-cols-1 row-cols-md-5 g-4 main bgimg">
                
				{this.props.countries.map((country) => (
                    <div className="col">
					<div key={country.name} className="card">
						<img onClick={() => this.props.isClicked(country.name)} src={country.flag} className="card-img-top" alt={country.name} />
						<div className="card-body">
							<h5 className="card-title">{country.name}</h5>
							<p className="card-text">Population: <small className="text-muted">{country.population}</small>
							</p>
                            <p className="card-text">Region: <small className="text-muted">{country.region}</small>
							</p>
                            <p className="card-text">Capital: <small className="text-muted">{country.capital}</small>
			 				</p>
                            {this.props.details ? (
                                <div>
                                <p className="card-text">Languages: {country.languages.map(lang => (
                                    <small key={lang.name} className="text-muted">{lang.name} </small>
                                ))}
							</p>
                            <p className="card-text">Currencies: {country.currencies.map((cur,index) => (
                                    <small key={index} className="text-muted">{cur.name} </small>
                                ))}
							</p>
                            {country.borders.length > 0 ? (
                                <div>
                                <p className="card-text">Borders: 
							    </p>
                                    {country.borders.map(border => this.props.countriesAll.map(count => count.alpha3Code == border ? <div key={border}><img onClick={() => this.props.isClicked(count.name)}  className="minImg" src={count.flag} alt={count.name}/> <h4>{count.name}</h4></div> : ''))}
                                </div>
                            ) : ''}
                                </div>
                            ): ''}
						</div>
					</div>
                    </div>
				))}
			</div>
		);
	}
}

export default Countries;
