import React from 'react';
import { Container, Inner, Item, Pane, Title, SubTitle, Image } from './styles/jumbotron';

//this is how you add a default ('row') to a styled compound component property
// children means - you always pass all children along tot he compound component
// ...restProps means you always honour all properties passed to the compound component
export default function Jumbotron({children, direction = 'row', ...restProps}){
    return (
        <Item  { ...restProps}>
            <Inner direction={direction}>
                {children}
            </Inner>
        </Item>
    );
};

Jumbotron.Container = function JumbotronContainer({ children, ...restProps }){
    return <Container {...restProps}>{children}</Container>;
};

Jumbotron.Pane = function JumbotronPane({ children, ...restProps }){
    return <Pane {...restProps}>{children}</Pane>;
};

Jumbotron.Title = function JumbotronTitle({ children, ...restProps }){
    return <Title {...restProps}>{children}</Title>;
};

Jumbotron.SubTitle = function JumbotronSubTitle({ children, ...restProps }){
    return <SubTitle {...restProps}>{children}</SubTitle>;
};

Jumbotron.Image = function JumbotronImage({ ...restProps }){
    return <Image {...restProps} />;
};
