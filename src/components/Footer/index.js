import React, {useState} from 'react';
import PropTypes from "prop-types";
import StyledFooter, {IconContainer, StyledPopoverContent} from "./style";
import Input from "../Input";
import Icon from "../Icon";
import Button from "../Button";
import Emoji from "../Emoji";
import Popover from "../Popover";
import { ReactComponent as ClipIcon} from "/src/assets/icons/clip.svg";
import { ReactComponent as SmileIcon} from "/src/assets/icons/smile.svg";
import { ReactComponent as MicrophoneIcon} from "/src/assets/icons/microphone.svg";
import { ReactComponent as PlaneIcon} from "/src/assets/icons/plane.svg";
import { ReactComponent as OptionsIcon} from "/src/assets/icons/options.svg";
import {useTheme} from "styled-components";

function Footer({children, ...rest}) {

    const [emojiIconActive, setEmojiIconActive] = useState(false);
    const theme = useTheme();

    return (
        <StyledFooter {...rest}>
            <Input
                placeholder="输入想和对方说的话"
                prefix={<Icon icon={ClipIcon}/>}
                suffix={
                    <IconContainer>
                        <Popover content={<PopoverContent/>} offset={{ x: "-25%", y: "0px" }} onVisible={() => setEmojiIconActive(true)} onHide={() => setEmojiIconActive(false)}>
                            <Icon icon={SmileIcon} color={emojiIconActive ? undefined : theme.gray3}/>
                        </Popover>
                        <Icon icon={MicrophoneIcon}/>
                        <Button size="52px">
                            <Icon icon={PlaneIcon} color="white" style={{ transform: "translateX(-2px)"}}/>
                        </Button>
                    </IconContainer>
                }
            />
        </StyledFooter>
    )
};

function PopoverContent(){
    return (
        <StyledPopoverContent>
            <Emoji label="tears">😂</Emoji>
            <Emoji label="love">😍</Emoji>
            <Emoji label="sile">😒</Emoji>
            <Emoji label="wink">️😉</Emoji>
            <Emoji label="smile">☺️</Emoji>
            <Emoji label="bear">🐻</Emoji>
            <Emoji label="clock">⏲️</Emoji>
            <Icon icon={OptionsIcon} style={{ marginLeft: "24px"}}/>
        </StyledPopoverContent>
    )
}

Footer.propTypes = {
    children: PropTypes.any,
};

export default Footer;