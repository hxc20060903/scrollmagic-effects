import React, { useLayoutEffect } from 'react';
import styled from 'styled-components';
import { gsap } from 'gsap';
import ScrollMagic from 'scrollmagic';

const controller = new ScrollMagic.Controller();
const Container = styled.div`
  margin: 55vh 0;
  padding: 50px;
  outline: 1px dashed orange;
`;
const Block = styled.div`
  padding: 10px;
  border: 1px solid black;
  font-family: Helvetica;
`;

export const Scroll = (): JSX.Element => {
  useLayoutEffect(() => {
    // @ts-ignore
    const blockTween = gsap.to('#block', 3.5, {
      backgroundColor: 'red',
    });
    new ScrollMagic.Scene({
      triggerElement: '#container',
    })
      .setTween(blockTween)
      .addIndicators()
      .addTo(controller);
  }, []);
  return (
    <Container id="container">
      <Block id="block">Hi there !</Block>
    </Container>
  );
};
