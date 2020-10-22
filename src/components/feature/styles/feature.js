import styled from 'styled-components/macro';


export const Container = styled.div`
    display: flex;
    flex-direction: column;
    
    text-align: center;
    padding: 90px 50px 5px;
`;

export const Title = styled.h1`
    color: white;
    max-width: 640px;
    font-size: 4rem;
    font-weight: 500;
    margin: auto;

    @media (max-width: 600px){
        font-size: 35px;
    }
`;

export const SubTitle = styled.h2`
    color: white;
    font-size: 26px;
    font-weight: normal;
    margin: 16px auto;

    @media (max-width: 600px){
        font-size: 18px;
    }
`;

export const Break = styled.div`
    flex-basis: 100%;
    height: 0;
`;
