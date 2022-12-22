import React from 'react';
import StyledCardImg from './CardImg.styled'

const CardImg = props => {
    return (
        <StyledCardImg src={props.src} variant={props.variant}>{props.children}</StyledCardImg>
    );
}

export default CardImg;