import React from 'react';
import { Link as ReactRouterLink } from 'react-router-dom';
import { Background, Container, ButtonLink, Logo } from './styles/header';

export default function Header({ bg = true, children, ...restProps }){
    return bg ? <Background {...restProps}>{children}</Background> : children;
};

Header.Frame = function HeaderFrame({children, ...restProps}){
    return <Container {...restProps}>{children}</Container>;
};

Header.ButtonLink = function HeaderButtonLink({ children, ...restProps}){
    return (
        <ButtonLink {...restProps}>
            {children}
           {/* <img src="/images/icons/logo.png" alt="Try Now" /> */ }
        </ButtonLink>
    );
};

Header.Logo = function HeaderLogo({to, ...restProps}){
    return (
        <ReactRouterLink to={to}>
            <Logo {...restProps} />
        </ReactRouterLink>
    )
};

