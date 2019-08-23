/** @jsx jsx */
import { jsx } from 'theme-ui'
import React from 'react'

const DewContainer = (props) => (
    <div >
        <ul>
            {props.dews.map((dew)=>{
                return(
                    <div sx={{
                        p:3,
                        m:3,
                        borderRadius:'0.4em',
                        backgroundColor:'indigo.1'
                    }}>
                        {dew}
                    </div>
                )
            })}
        </ul>
    </div>
)

export default DewContainer