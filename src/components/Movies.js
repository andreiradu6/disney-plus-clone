import React from 'react'
import styled from 'styled-components'

function Movies() {
    return (
        <Container>
            <h4>
                Recommended for You
            </h4>
            <Content>   
                <Wrap>
                    <img src="/images/login-background.jpg" alt="movie image"/>
                </Wrap>
                <Wrap>
                    <img src="/images/login-background.jpg" alt="movie image"/>
                </Wrap>
                <Wrap>
                    <img src="/images/login-background.jpg" alt="movie image"/>
                </Wrap>
                <Wrap>
                    <img src="/images/login-background.jpg" alt="movie image"/>
                </Wrap>
            </Content>
            <Content>   
                <Wrap>
                    <img src="/images/login-background.jpg" alt="movie image"/>
                </Wrap>
                <Wrap>
                    <img src="/images/login-background.jpg" alt="movie image"/>
                </Wrap>
                <Wrap>
                    <img src="/images/login-background.jpg" alt="movie image"/>
                </Wrap>
                <Wrap>
                    <img src="/images/login-background.jpg" alt="movie image"/>
                </Wrap>
            </Content>
        </Container>
    )
}

export default Movies


const Container = styled.div`


`

const Content = styled.div`
    padding: 20px 0;
    display: grid;
    grid-gap: 25px;
    grid-template-columns: repeat(4,minmax(0,1fr));

`   

const Wrap = styled.div`

    border: 3px solid rgba(249,249,249,.1);
    border-radius: 10px;
    overflow:hidden;
    box-shadow: (0 0 0 / 69%) 0px 26px 30px -10px, rgb(0 0 0 / 73%) 0px 16px 10px -10px;
    cursor: pointer;
    transition: all 250ms cub-bezier(.25,.46,.45,.94) 0s;

    img{
        width: 100%;
        height: 100%;
        object-fit: cover;
    }

    &:hover{
        transform:scale(1.05);
        border-color: rgba(249,249,249,.8);
    }

`;