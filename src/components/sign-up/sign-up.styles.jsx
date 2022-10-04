import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { colors } from '../../assets/styles/variables';

const { whiteColor, blackColor, primaryColor, secondaryColor, tertiaryColor, quaternaryColor } = colors;

const SignUpContainer = styled.div`
    background-color: ${whiteColor};
    width: 32rem;
    height: 80vh;
    padding: 2rem 2.5rem;
    box-shadow: rgba(${blackColor}, 0.35) 0 .5rem 1.5rem;
    border-radius: 3rem;
    display: flex;
    flex-direction: column;
    margin: 5rem;

    p {
        margin-top: auto;
        font-size: 1.4rem;
    }

    @media screen and (max-width: 800px) {
        display: ${prop => prop.pathname === '/sign-up' ? 'flex' : 'none'};
        width: 50vw;
    }

`

const H2 = styled.h2`
    font-size: 2.5rem;
    margin: 1rem 0;
    text-align: left;
    font-weight: 800;
`

const StyledLink = styled(Link)`
    color: ${primaryColor};

    &:hover{
        color: ${secondaryColor};
    }
`

export {
    SignUpContainer,
    H2,
    StyledLink
}