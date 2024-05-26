import React from 'react';
import PropTypes from "prop-types";
import StyledNavBar, {MenuIcon, StyledMenuItem} from "./style";
import Badge from "../Badge";

function NavBar({children, ...rest}) {
    return (
        <StyledNavBar {...rest}>
            {
                children
            }
        </StyledNavBar>
    )
};

function MenuItem({icon, active, showBadge, ...rest}) {
    return (
        <StyledMenuItem active={active} {...rest}>
            <a href="#">
                <Badge show={showBadge}>
                    <MenuIcon active={active} icon={icon}></MenuIcon>
                </Badge>
            </a>
        </StyledMenuItem>
    )
}

NavBar.propTypes = {
    children: PropTypes.any,
};

MenuItem.propTypes = {
    icon: PropTypes.element,
    active: PropTypes.bool,
    showBadge: PropTypes.bool,
}

export default NavBar;

export {MenuItem};