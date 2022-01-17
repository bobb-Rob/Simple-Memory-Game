import React from 'react'

const Instructions = (props) => {
    return (
        <div className='instruction-container' >
            <div className='instruction-wrapper' > 
                {props.children}
                <p className='instruction' >Click on an image to get points but do 
                {' '}<strong>NOT</strong> click on an image twice, else your point reset to zero</p>
            </div>
        </div>
    )
}

export default Instructions
