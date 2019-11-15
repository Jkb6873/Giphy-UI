export function changeInput(input){
  return {
    type: 'changeInput',
    payload: input
  }
}

export function changeOffset(offset){
  return {
    type: 'changeOffset',
    payload: offset
  }
}

export function addGifs(gifs){
  return {
    type: 'addGifs',
    payload: gifs
  }
}

export function setGifs(gifs){
  return {
    type: 'setGifs',
    payload: gifs
  }
}

export function setLoading(status){
  return {
    type: 'setLoading',
    payload: status
  }
}

export function addFav(fav){
  return {
    type: 'addFav',
    payload: fav
  }
}

export function dropFav(fav){
  return {
    type: 'dropFav',
    payload: fav
  }
}

export function setModalData(data){
  return {
    type: 'setModalData',
    payload: data
  }
}
