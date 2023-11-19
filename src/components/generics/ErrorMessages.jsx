import React from 'react'

const ErrorMessages = ({message}) => {
    if (!message) return null    

    return (
        <div className='error-message'>
            {message}
        </div>
    )
}

export default ErrorMessages