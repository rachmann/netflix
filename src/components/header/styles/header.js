import styled from 'styled-components/macro';
import { Link as ReactRouterLink } from 'react-router-dom';

export const Background = styled.div`
    padding: 20px 0 120px;
    display: block;
    flex-direction: column;
    border-bottom: 8px solid #222;    
    background: black;
    background: url(${({ src }) => (src ? `../images/misc/${src}.jpg` :
         '../images/misc/home-CA-bg.jpg')})
         top left / cover no-repeat;
    background: linear-gradient(to top,rgba(0,0,0,.8) 0,
        rgba(0,0,0,0) 65%,rgba(0,0,0,.8) 100%), url(${({ src }) => (src ? `../images/misc/${src}.jpg` :
         '../images/misc/home-CA-bg.jpg')})
         top left / cover no-repeat;
`;

export const Container = styled.div`
    display: flex;
    margin: 0 56px;
    height: 64px;
    padding: 20px 0;
    justify-content: space-between;

    a {
        display: flex;
    }

    @media (max-width: 1000px){
        margin 0 30px;
    }
`;

export const ButtonLink = styled(ReactRouterLink)`
    display: block;
    background-color: #E50914;
    width: 84px;
    height: fit-content;
    color: white;
    border 0;
    font-size: 15px;
    border-radius: 3px;
    padding: 8px 17px;
    cursor: pointer;
    text-decoration: none;
    box-sizing: border-box;

    &:hover{
        background-color: #F40612;
    };
`;

export const Logo = styled.img`
    height: 32px;
    width: 108px;
    margin-right: 40px;

    @media (min-width: 1449px){
        height: 45px;
        width: 167px;
    };
`;
