import styled from 'styled-components';

const DefaultStyledButton = styled.button`
`


const SizeStyledButton = styled(DefaultStyledButton)(({ theme, size }) => theme.button.sizes[size])
const ActiveStyledButton = styled(DefaultStyledButton)(({ theme, active }) => theme.button.active[active])
const VariantStyledButton = styled(SizeStyledButton)(({ theme, variant }) => theme.button.variants[variant])


export const StyledButton = Object.assign({}, VariantStyledButton)


