import React from 'react'
import Title from './Title'
function Card(props){
    return(
<>
     <div className="card">
     <img src={props.imgsrc} alt="notfound"/>
     <div className='cardinfo'>
          <Title title={props.title}/>
          <a href={props.links} alt="notfound">
          <button>Watch Now</button>
          </a>
     </div>
     </div>
</>
    );
}
export default Card;