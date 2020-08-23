import React from 'react';

const Footer = (props) => {
    console.log(props);
    return (
        <div>
        <h3>NAME: {props.state.quote}</h3>
        </div>
    )}
    

export default Footer;