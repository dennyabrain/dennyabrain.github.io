/** @jsx jsx */
import { jsx } from 'theme-ui'
import React, {useEffect, useState} from 'react'
import SimpleLayout from '../components/layouts/simple'
import DewContainer from '../components/container-dew'
import {getDews} from '../services/arena'

const Dew = () => {
    useEffect(() => {
        getDews()
        .then((dews)=>{
            console.log('here');
            console.log(dews)
            console.log(dews.length)
            setPosts(dews)
        })
        .catch((err)=>console.log(err))
    })

    const[posts, setPosts] = useState([])

    return(
    <SimpleLayout>
        <h1 sx={{
            color: 'base'
        }}> dew drops </h1>
        <p> half developed ideas </p>

        {
            posts.length==0?
            <p> Loading </p> :
            <DewContainer dews={posts}/>
        }
        
    </SimpleLayout>
    )
}

export default Dew