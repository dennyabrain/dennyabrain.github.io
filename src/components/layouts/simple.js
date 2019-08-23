/** @jsx jsx */
import { jsx } from 'theme-ui'
import React from 'react'

const SimpleLayout = (props) => (
    <div sx={{
        padding: 4
    }}>
        {props.children}
    </div>
)

export default SimpleLayout