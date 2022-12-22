import styled from 'styled-components';

const StyledBreadcrumbItem = styled.li`
    display: list-item;
    text-align: -webkit-match-parent;
    color: ${props => props.active ? '#6c757d' : 'pink'};
    & + &::before {
        display: inline-block;
        padding-right: 0.5rem;
        padding-left: 0.5rem;
        content: "/";
    }
`

export default StyledBreadcrumbItem