import React, { useRef, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Img from 'react-image';
import { addFav, dropFav, setModalData } from '../actions';
import '../styles/main.css';
import trash from '../assets/trash.png';
import close from '../assets/close.png';
import fav from '../assets/fav.png';
import spinner from '../assets/spinner.gif';

export default function GifModal(){
  const data = useSelector(state => state.modalData)
  const favs = useSelector(state => state.favs)
  const dispatch = useDispatch()
  const card = useRef()

  function handleFavUnfav(e){
    const span = card.current.childNodes[0]
    const toFav = (favs.indexOf(data)===-1)
    dispatch(toFav?addFav(data):dropFav(data))
    span.textContent = `Successfully ${toFav?"Favorited":"Unfavorited"} Gif`
    span.style.height = '20px';
    setTimeout(() => span.style.height = '0px', 2000)
  }

  function handleClickOutside(e) {
    if (Object.keys(data).length !== 0 && e.target !== card.current && !card.current.contains(e.target)) {
      dispatch(setModalData())
    }
  }

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  });
  return (
    <div className={Object.keys(data).length !== 0 ? "GifModal" : "GifModal Hidden"}>
      <div className="GifModalCard" ref={card}>
        <span className="ToastMessage"></span>{
          data.images &&
            <Img
              className="ExpandedGif"
              crossOrigin="anonymous"
              src={data.images.original.url}
              loader={<img className="ModalSpinner" alt="loading" src={spinner}/>}
            />
        }
        <div className="GifModalButtons">
          <button className='CloseModal IconButton' onClick={() => dispatch(setModalData())}>
            <embed className="Icon Inverted" src={close}/>
          </button>
          <button className="IconButton" onClick={(e) => handleFavUnfav(e)}>
            <embed className="Icon Inverted" src={favs.indexOf(data)===-1?fav:trash}/>
          </button>
        </div>
      </div>
    </div>
  )
}
