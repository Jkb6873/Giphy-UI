import React, {useRef} from 'react';
import {useDispatch} from 'react-redux';
import {changeInput, changeOffset} from '../actions';
import {Link} from 'react-router-dom';
import '../styles/main.css';
import home from '../assets/home.png';
import fav from '../assets/fav.png';
import logo from '../assets/logo.svg';

export default function TopHat(){
  const dispatch = useDispatch()
  const input = useRef()

  function HandleSubmit(e){
    e.preventDefault()
    dispatch(changeInput(input.current.value))
    dispatch(changeOffset(0))
  }

  return (
    <div className="TopHatBackLight">
      <div className="TopHatContainer">
        <embed className="Icon" src={logo}/>
        <form className="TopHatForm" onSubmit={(input) => HandleSubmit(input)}>
          <input className="TopHatSearch" type="text" placeholder="Search" ref={input}></input>
          <button className="TopHatButton"/>
        </form>
        <Link className="IconButton" to={'/'}>
          <embed className="Icon Inverted" src={home}/>
        </Link>
        <Link className="IconButton" to={'/favs'}>
          <embed className="Icon Inverted" src={fav}/>
        </Link>
      </div>
    </div>
  )
}
