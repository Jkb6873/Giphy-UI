import React from 'react';
import GifCard from './GifCard';
import { useSelector } from 'react-redux';

export default function GiphyFavs(){
  const favs = useSelector(state => state.favs)
  return (
    <div className="Gifs">{
      favs.length===0 ?
        <div className="NoFavs">
          <span>No favs found.</span>
          <span>Click images to favorite them.</span>
        </div> :
        favs.map((gif) => <GifCard key={gif.id} gif={gif}/>)
    }</div>
  )
}
