import axios from 'axios'

const getDews = () =>{
    return axios.get('http://api.are.na/v2/channels/denntenna-soc')
    .then((response) => response.data.contents.map((contentItem)=>contentItem.content))
    .catch((err)=> `ERROR fetching from Are.na ${err}`)
}

export {
    getDews
}