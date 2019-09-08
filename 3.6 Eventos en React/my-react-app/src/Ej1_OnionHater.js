import React from 'react';


const ContainsOnion = event =>{
if (event.target.value.indexOf('cebolla') > -1) {
    alert('ODIO LA CEBOLLA');
}
}

const OnionHater = () =>{
    return (
    <div>
        <textarea rows="4" cols="50" onChange={ContainsOnion}>
        </textarea>
    </div>)
}

export default OnionHater;