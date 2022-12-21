import { propTypes } from 'react-bootstrap/esm/Image';
import styled from 'styled-components';

const DefaultStyledAlert = styled.div`
position: relative;
padding: 0.75rem 1.25rem;
margin-bottom: 1rem;
border: 1px solid transparent;
border-radius: 0.25rem;
`

const StyledAlert = styled(DefaultStyledAlert)(({ theme, variant }) => theme.alert[variant])


// WARIANTY ZAPFISU STYLI

//  wariant 1 - szybki
// ({color: 'red'}) -

// wariant 2 - js, zapis zmiennych w formie CamelCase
// {
//     return { color: 'red' }
// }

// wariant - 3 - zmienne jak w plikach css
// {
//     return css`
//             color:red;  
//         `
// }


export { StyledAlert };