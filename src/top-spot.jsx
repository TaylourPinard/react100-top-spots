import React, { component } from 'react';
export default (props) => {
  return(
    <div className='well'>
      <h4>{props.name}</h4>
      <p>{props.description}</p>
      <a href={`https://maps.google.com/?q=${props.location[0]},${props.location[1]}`}><button className="btn btn-primary">Link</button></a>
    </div>
  );
}