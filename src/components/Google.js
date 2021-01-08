import React, { Component } from 'react';

const API_KEY = 'AIzaSyAl9NFvH_oMn-oEVgRGHsQ2YKy2rEuLQuc'
class Google extends Component {

    state = {
        latitude: null,
        longitude: null,
        userAddress: null
    }


    getLocation = () => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(this.getCoordinates, this.handleLocationError);
          } else {
            alert("Geolocation is not supported by this browser.");
          }
    }

    getCoordinates = (position) => {
        this.setState({
            ...this.state,
            latitude: position.coords.latitude,
            longitude: position.coords.longitude
        })
    }

    handleLocationError = (error) => {
        switch(error.code) {
            case error.PERMISSION_DENIED:
               alert("User denied the request for Geolocation.")
              break;
            case error.POSITION_UNAVAILABLE:
               alert("Location information is unavailable.")
              break;
            case error.TIMEOUT:
               alert("The request to get user location timed out.")
              break;
            case error.UNKNOWN_ERROR:
               alert("An unknown error occurred.")
              break;
              default:
                  alert('Unknown Error')
          }
    }

	render() {
		return (
			<div>
				<h2>Location</h2>
                <button onClick={this.getLocation}>Get Coordinates</button>
                <h4>HTML 5 Coordinates</h4>
                <p>Latitude: {this.state.latitude}</p>
                <p>Longitude: {this.state.longitude}</p>
                <h4>Google Maps Recerse Geocoding</h4>
                <p>Address: {this.state.userAddress}</p>
                {this.state.latitude && this.state.longitude ? 
                <img src={`https://maps.googleapis.com/maps/api/staticmap?center=${this.state.latitude},${this.state.longitude}&zoom=14&size=400x300&sensor=false&markers=color:red%7C${this.state.latitude},${this.state.longitude}&key=${API_KEY}`} alt='location' /> : null
                }

			</div>
		);
	}
}



export default Google


// https://maps.googleapis.com/maps/api/staticmap?center=${this.state.latitude},${this.state.longitude}&zoom=14&size=400x300&sensor=false&markers=color:red%7C${this.state.latitude},${this.state.longitude}&key=${API_KEY}