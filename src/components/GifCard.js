import React, { Component } from 'react';
import { connect } from 'react-redux';
import Img from 'react-image';
import { setModalData } from '../actions';
import spinner from '../assets/spinner.gif';
import '../styles/main.css';

class GifCard extends Component {
  render(){
    return (
      <div className='GifCard' ref={this.props.passRef} onClick={() => this.props.dispatch(setModalData(this.props.gif))}>
        <div className='GifCenterer'>
          <Img
            crossOrigin="anonymous"
            className="GifCardImg"
            src={this.props.gif.images.fixed_height.url}
            loader={<img className="Spinner" alt="loading" src={spinner}/>}
          />
        </div>
      </div>
    )
  }

}

export default connect()(GifCard);
