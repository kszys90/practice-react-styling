import styled from 'styled-components';

const DefaultStyledCardImg = styled.img`
    vertical-align: middle;
    border-style: none;
    -ms-flex-negative: 0;
    flex-shrink: 0;
    width: 100%;
`

const StyledCardImg = styled(DefaultStyledCardImg)(({ theme, variant }) => theme.card.imgVariants[variant])

export default StyledCardImg; 