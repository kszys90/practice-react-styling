import React from 'react';
import StyledCardText from './CardText.styled'

const CardText = props => {
    return (
        <StyledCardText style={props.style}>{props.children}</StyledCardText>
    );
}

export default CardText;