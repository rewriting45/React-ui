import React from 'react';
import PropTypes from "prop-types";
import StyledTitleBar, {Actions, Title} from "./style";
import Avatar from "../Avatar";
import Paragraph from "../Paragraph";
import Text from "../Text";
import Icon from "../Icon";
import face from "/src/assets/images/face-female-1.jpg";
import { ReactComponent as Call } from "/src/assets/icons/call.svg";
import { ReactComponent as Camera } from "/src/assets/icons/camera.svg";
import { ReactComponent as Options } from "/src/assets/icons/options.svg";

function TitleBar({name = "用户名", children, ...rest}) {
    return (
        <StyledTitleBar {...rest}>
           <Avatar status="offline" src={face}/>
            <Title>
                <Paragraph size="large">{name}</Paragraph>
                <Paragraph type="secondary">
                    <Text>离线</Text>
                    <Text>最后阅读：3小时前</Text>
                </Paragraph>
            </Title>
            <Actions>
                <Icon opacity={0.3} icon={Call}/>
                <Icon opacity={0.3} icon={Camera}/>
                <Icon opacity={0.3} icon={Options}/>
            </Actions>
        </StyledTitleBar>
    )
};

TitleBar.propTypes = {
    children: PropTypes.any,
};

export default TitleBar;