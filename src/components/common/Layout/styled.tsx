import styled from '@emotion/styled';

export const Container = styled.section`
 display: flex;
 flex-direction: column;
 align-items: center;
`;

export const ContainerDivider = styled.hr`
 border: none;
 border-radius: 0.5rem;
 background: linear-gradient(66deg, rgba(232, 107, 77, 1) 40%, rgba(227, 162, 100, 1) 100%);
 height: 4px;
 width: 100%;
 box-shadow: 0px 0px 20px 0px rgba(0, 0, 0, 0.5);
 margin: 2rem 0;
`;

export const ContainerHeader = styled.h1`
 text-align: center;
 margin-top: 2rem;
 font-size: 2.8rem;
 font-weight: 700;
 letter-spacing: 1px;
 text-shadow: 6px 6px 20px rgba(0, 0, 0, 0.5);
`;
