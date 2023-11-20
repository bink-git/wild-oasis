import React, { useState } from 'react';
import styled from 'styled-components';
import Logo from './Logo';
import MainNav from './MainNav';
import { IoClose } from 'react-icons/io5';

const StyledSidebar = styled.aside`
  padding: 3.2rem 2.4rem;
  background-color: var(--color-grey-0);
  border-right: 1px solid var(--color-grey-100);

  grid-row: 1/-1;
  display: flex;
  flex-direction: column;
  gap: 3.2rem;

  position: relative;
`;

const StyledCloseIcon = styled(IoClose)`
  position: absolute;
  top: 1.6rem;
  right: 2.4rem;
  cursor: pointer;
  transition: all 0.3s;

  &:hover {
    color: var(--color-grey-500);
  }
`;

const Sidebar = () => {
  const [showSidebar, setShowSidebar] = useState(true);

  return (
    showSidebar && (
      <StyledSidebar>
        <StyledCloseIcon onClick={() => setShowSidebar(true)} />
        <Logo />
        <MainNav />
      </StyledSidebar>
    )
  );
};

export default Sidebar;
