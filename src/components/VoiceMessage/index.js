import React from 'react';
import PropTypes from "prop-types";
import StyledVoiceMessage from "./style";
import Button from "../Button";
import Icon from "../Icon";
import Text from "../Text";
import { ReactComponent as Play} from "/src/assets/icons/play.svg";
import { ReactComponent as Wave} from "/src/assets/icons/wave.svg";
import {useTheme} from "styled-components";

function VoiceMessage({children, time, type, ...rest}) {

    const theme = useTheme();

    return (
        <StyledVoiceMessage type={type} {...rest}>
            <Button size="40px">
                <Icon icon={Play} color="white" width={14} height={16} style={{transform: "translateX(1px)"}}></Icon>
            </Button>
            <Icon icon={Wave} color={theme.primaryColor} width="100%" height="100%" style={{transform: "translateX(1px)"}}></Icon>
            <Text bold>{time}</Text>
        </StyledVoiceMessage>
    )
};

VoiceMessage.propTypes = {
    children: PropTypes.any,
    type: PropTypes.oneOf(["mine"]),
    time: PropTypes.string,
};

export default VoiceMessage;