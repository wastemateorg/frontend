import React, { Component } from "react";
import PhotoComponent from './photoComponent';
import img1 from './img/trash.png';
import img2 from './img/trash2.jpg';
import img3 from './img/trash3.jpg';
import img4 from './img/trash4.jpg'

class PhotoList extends Component {

    render(){
        return (
            <div>
            <PhotoComponent title='San Jose' subtitle='10 west ave' details='trash will be after the bridge on the left' image={img1}/>
            <PhotoComponent title='Berkeley' subtitle='103 3rd st' details='trash has been slowly pilling up over the past week' image={img2}/>
            <PhotoComponent title='San Jose' subtitle='465 1st ave' details='no details' image={img3}/>
            <PhotoComponent title='San Mateo' subtitle='177 west brook' details='Trash has been attracting rats, please help!' image={img4}/>
            </div>

            )
    }
}

export default PhotoList;