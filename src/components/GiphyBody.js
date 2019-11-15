import React, {useRef, useCallback } from 'react';
import GiphyLoader from './GiphyLoader';
import GifCard from './GifCard';
import { useSelector, useDispatch } from 'react-redux';
import { changeOffset } from '../actions';
import '../styles/main.css';

export default function GiphyBody(){
  const input = useSelector(state => state.input)
  const offset = useSelector(state => state.offset)
  const gifs = useSelector(state => state.gifs)
  const loading = useSelector(state => state.loading)
  const dispatch = useDispatch()

  const observer = useRef()
  const midGif = useCallback(node => {
    if (loading === true){return}
    if (observer.current){observer.current.disconnect()}
    observer.current = new IntersectionObserver(entries => {
      if (entries[0].isIntersecting){
        dispatch(changeOffset(offset + 25))
      }
    })
    if (node){observer.current.observe(node)}
  }, [loading, dispatch, offset])

  GiphyLoader(input, offset)

  return (
    <div className="Gifs">{
      gifs.map((gif, index) =>
        <GifCard key={gif.id} gif={gif} passRef={index===offset+15?midGif:undefined}/>
      )
    }</div>
  )
}
