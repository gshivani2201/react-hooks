import React, {useState, useEffect} from 'react'
import axios from 'axios'

function DataFetching() {

    const [post, setPost] = useState({})
    const [id, setId] = useState(1)
    const [idFromButtonClick, setIdFromButtonClick] = useState(1)

    const clickHandler = () => {
        setIdFromButtonClick(id)
    }

    useEffect (() => {
        axios.get(`https://jsonplaceholder.typicode.com/posts/${idFromButtonClick}`)
            .then(res => {
                console.log(res)
                setPost(res.data)
            })
            .catch(err => {
                console.log(err)
            })
    }, [idFromButtonClick])

  return (
    <div>
        <input type="text" value={id} onChange={e => setId(e.target.value)}/>
        <button type='button' onClick={clickHandler}>Fetch Post</button>
        <h3>{post.title}</h3>
    </div>
  )
}

export default DataFetching