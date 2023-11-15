import React from 'react'

const Articletext = ({ content, repeats, separator = ' ' }) => {

    const fullText = Array(repeats).fill(content).join(separator)
       
    return (
        <>{fullText}</>
    )
}

export default Articletext