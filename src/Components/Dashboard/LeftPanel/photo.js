import React, { Component } from "react";
import "../../../App.css";
import EXIF from "exif-js";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { updatePhoto } from "../../../Redux/Actions/addPhoto";

class PhotoUpload extends Component {
  //   constructor() {
  //       super();
  //       this.fileUploadHandler = this.fileUploadHandler.bind(this)
  //   }
  state = {
    selectedFile: null,
    center: { lat: 36.104, lng: -125.0003 }
  };

  fileUploadHandler = () => {
    const self = this;
    EXIF.getData(this.state.selectedFile, function() {
      var allMetaData = EXIF.getAllTags(this);
      var long = EXIF.getTag(this, "GPSLongitude");
      var lat = EXIF.getTag(this, "GPSLatitude");
      console.log("long:" + long, "lat:" + lat);
      console.log(allMetaData);
      var toDecimal = number => {
        return (
          number[0].numerator +
          number[1].numerator / (60 * number[1].denominator) +
          number[2].numerator / (3600 * number[2].denominator)
        );
      };

      console.log(toDecimal(lat));
      console.log(toDecimal(long));
      self.setState({ center: { lat: toDecimal(lat), lng: -toDecimal(long) } });
    });
    console.log(this.state);

    this.props.updatePhoto(this.state.center);
  };

  fileHandler = event => {
    this.setState({
      selectedFile: event.target.files[0]
    });
  };

  render() {
    console.log(this.state);
    return (
      <div className="Uploader">
        <input type="file" onChange={this.fileHandler} />
        <button onClick={this.fileUploadHandler.bind(this)}>Upload</button>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    location: state.location
  };
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators({ updatePhoto }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(PhotoUpload);
