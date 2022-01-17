import React from 'react'

const GameWrapper = (props) => {
    return (
        <main className='wrapper' >
            {props.children}
        </main>
    )
}

export default GameWrapper
