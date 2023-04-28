import React from 'react';
import { Container, ContainerDivider, ContainerHeader } from './styled';
import ScrollToView from '../ScrollToView';
import { Sections } from 'src/constants';

interface Props {
 children: React.ReactElement[];
 header?: string;
 scrollTo?: Sections;
}

const Layout = ({ children, header = '', scrollTo = '' as Sections }: Props) => {
 return (
  <Container id={header || Sections.Introduction}>
   {header && <ContainerHeader>{header}</ContainerHeader>}
   {children.map((child, i) => (
    <React.Fragment key={i}>{child}</React.Fragment>
   ))}
   {scrollTo && <ScrollToView elementId={scrollTo} />}
   <ContainerDivider />
  </Container>
 );
};

export default Layout;
