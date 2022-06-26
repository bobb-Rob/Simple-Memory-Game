import React from 'react'

const ImageCard = ({id, name, occupation, image, handleClick, StateClickStatus }) => {
   const classN = () => StateClickStatus ? 'animate' : '';
    
    return (
        <div className={'card ' + classN} onClick={() => handleClick(id.name)} key={id} >
            <div className="img-container" >
                <img src= {image} alt={name} />
            </div>
            <div className="img-content" >
                <p><strong>Name: </strong>{name}</p>
                <p><strong>Ocupation: </strong>{occupation}</p>
            </div>
          
        </div>
    )
}

export default ImageCard
