import React from 'react';
import PropTypes from "prop-types";
import StyledNavBar, {MenuIcon, MenuItems, StyledMenuItem} from "./style";
import Badge from "../Badge";
import Avatar from "../Avatar";

import profileImage from "/src/assets/images/face-female-1.jpg";
import {faCommentDots, faFolder, faStickyNote, faUsers, faEllipsisH, faCog} from "@fortawesome/free-solid-svg-icons";

function NavBar({children, ...rest}) {
    return (
        <StyledNavBar {...rest}>
            <Avatar src={profileImage} status={"online"}/>
            <MenuItems>
                <MenuItem showBadge active icon={faCommentDots}></MenuItem>
                <MenuItem icon={faUsers}></MenuItem>
                <MenuItem icon={faFolder}></MenuItem>
                <MenuItem icon={faStickyNote}></MenuItem>
                <MenuItem icon={faEllipsisH}></MenuItem>
                <MenuItem icon={faCog} css={`align-self: end`}></MenuItem>
            </MenuItems>
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

MenuItem.propTypes = {
    icon: PropTypes.element,
    active: PropTypes.bool,
    showBadge: PropTypes.bool,
}

export default NavBar;

export {MenuItem};