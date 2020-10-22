import React from 'react';
import { Container, Title, SubTitle, Break } from './styles/feature';

export default function Feature({ children, ...restProps}){
    return <Container {...restProps}>{children}</Container>;
};

Feature.Title = function FeatureTitle({children, ...restProps}){
    return <Title {...restProps}>{children}</Title>;
}

Feature.SubTitle = function FeatureSubTitle({children, ...restProps}){
    return <SubTitle {...restProps}>{children}</SubTitle>;
}

Feature.Break = function FeatureBreak({...restProps}){
    return <Break {...restProps} />;
};