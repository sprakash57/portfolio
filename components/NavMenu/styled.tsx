import styled, { css } from 'styled-components';
import { RouteLink } from '@/components/Elements';

export const active = css`
  @include active_link;
`;

export const brand = css`
  display: flex;
  align-items: center;
  width: 110px;
`;

export const Navbar = styled.nav`
  position: sticky;
  top: 0;
  height: 130px;
  z-index: 99;
`;

export const NavbarLinks = styled.section`
  display: flex;
  height: 30px;
  align-items: center;
  justify-content: flex-end;
  background: var(--arsenic);
  &__icons {
    margin: 0.6rem;
    padding: 0.3rem;
    display: flex;
    align-items: flex-end;
    border-top: 3px solid var(--arsenic);
    border-right: 1px solid var(--arsenic);
  }
`;

export const NavbarBrand = styled(RouteLink).attrs({
  classForContainer: 'brand',
})`
  &.brand {
    display: flex;
    align-items: center;
    width: 110px;
  }
`;

export const NavbarMenu = styled.section`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: var(--arsenic);
  padding: 0.5rem 6rem;
`;

export const NavbarMenuItems = styled.section`
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 300px;
  a {
    color: white;
    padding: 0.5rem;
    font-size: 0.8rem;
    &:hover {
      @include active_link;
    }
  }
`;
