import React, {useState} from 'react';

function Filter(props) {
	const onChange = (e) => {
		props.filterNames(e.target.value);
	};
    const regions = (e) => {
        props.filterRegion(e.target.value)
    }
	return (
		<div className="row filter">
			<div className="col"><input className="form-control" name="name" onChange={onChange} type="text"  placeholder="Enter Country name..." /></div>
 
            {props.countries.length == 1 ? <button className="col btn btn-primary " onClick={() => props.mainPage()}>Back to Manin Page</button>  : ''}

			<div className="col">
            <select id="select" onChange={regions} className="form-select" aria-label="Disabled select example">
				<option value="all" >Select Region</option>
				<option value="Asia">Asia</option>
				<option value="Africa">Africa</option>
				<option value="Americas">Americas</option>
				<option value="Europe">Europe</option>
				<option value="Oceania">Oceania</option>
				<option value="Polar">Polar</option>
			</select>
            </div>
		</div>
	);
}
export default Filter;
