import React from 'react';
import StyledBreadcrumbItem from './BreadcrumbItem.styled';

const BreadcrumbItem = props => {
    return (
        <StyledBreadcrumbItem active={props.active}>
            {!props.href ? props.children : <a href={props.href}>{props.children}</a>}
        </StyledBreadcrumbItem>
    );
}

export default BreadcrumbItem;