import { useEffect } from 'react';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { addGifs, setGifs, setLoading } from '../actions';

function GiphyLoader(input, offset){
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(setLoading(true))
    axios({
      method: 'GET',
      url: `https://api.giphy.com/v1/gifs/${input===''?'trending':'search'}?api_key=${process.env.REACT_APP_GIPHY_KEY}`,
      params: {q: input, offset: offset},
    }).then(res => {
      dispatch(offset===0?setGifs(res.data.data):addGifs(res.data.data))
      dispatch(setLoading(false))
    })
  }, [input, offset, dispatch])
}

export default GiphyLoader
