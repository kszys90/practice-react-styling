import styled, { css } from 'styled-components';

const StyledTabs = styled.nav`
    display: flex;
    -ms-flex-wrap: wrap;
    flex-wrap: wrap;
    padding-left: 0;
    margin-bottom: 0;
    list-style: none;
    border-bottom: 1px solid #dee2e6;

`
const DefaultStyledTabsLink = styled.a`
&& {
    color: #0056b3;
    -webkit-text-decoration: none;
    text-decoration: none;
    background-color: transparent;
    display: block;
    padding: 0.5rem 1rem;
    margin-bottom: -1px;
    border: 1px solid transparent;
    border-top-left-radius: 0.25rem;
    border-top-right-radius: 0.25rem;
}
`

const DisabledStyledTabsLink = styled(DefaultStyledTabsLink)(props => props.active && css`
    &&, &&:hover {
        color: #6c757d;
        background-color: transparent;
        border-color: transparent;
    }
`)


const StyledTabsLink = styled(DisabledStyledTabsLink)(props => props.active && css`
    &&, &&:hover {    
        color: #495057;
        background-color: #fff;
        border-color: #dee2e6 #dee2e6 #fff;
    }
`)

const StyledTabsChild = styled.div`
    display: ${props => props.active ? 'block' : 'none'};
`

export { StyledTabs, StyledTabsChild, StyledTabsLink }


