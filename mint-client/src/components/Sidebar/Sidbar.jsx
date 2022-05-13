import React, { useState } from "react";
import navbarItems from "../../Data/Navbar";

import {
    SidebarContainer,
    Icon,
    CloseIcon,
    SidebarWrapper,
    SidebarMenu,
    SidebarLink,
    SideBtnWrap,
} from './SidebarElements'

const Sidebar = ({
    isOpen,
    toggle,
}) => {

    return (
        <SidebarContainer isOpen={isOpen} onClick={toggle}>
      <Icon onClick={toggle}>
        <CloseIcon />
      </Icon>
      <SidebarWrapper>
        <SidebarMenu>
          {navbarItems.map((item, index) => {          
                    return(
                        <SidebarLink
                            to={item.id}
                            onClick={toggle}
                            smooth={true}
                            duration={500}
                            spy={true}
                            exact="true"
                            offset={item.offset}
                        >
                            {item.name}
                        </SidebarLink>
                    )
            })}
        </SidebarMenu>
      </SidebarWrapper>
    </SidebarContainer>
    )
}

export default Sidebar