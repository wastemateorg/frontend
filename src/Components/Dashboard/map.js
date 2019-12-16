import React, { Component } from "react";
import GoogleMapReact from "google-map-react";
import { connect } from "react-redux";
import "../../App.css";

const AnyReactComponent = () => <div className="Marker" />;

class SimpleMap extends Component {
  state = { location: { lat: 37.103, lng: -122.0003 } };
  render() {
    console.log(this.props.location);
    return (
      // Important! Always set the container height explicitly
      <div style={{ height: "90vh", width: "100%" }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: "AIzaSyCKLQ2S37um3pr1I42yHHfWO4HCxRyNVQk" }}
          defaultCenter={this.state.location}
          defaultZoom={8}
        >
          <AnyReactComponent
            lat={this.props.location.lat}
            lng={this.props.location.lng}
            text="My Marker"
          />
        </GoogleMapReact>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    location: state.location
  };
};

//   function mapDispachToProps (dispatch) {
//     return bindActionCreators()
//   }

export default connect(mapStateToProps)(SimpleMap);
