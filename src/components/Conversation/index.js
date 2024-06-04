import React from 'react';
import PropTypes from "prop-types";
import StyledConversation, {Conversations, MyChatBubble} from "./style";
import TitleBar from "../TitleBar";
import ChatBubble from "../ChatBubble";
import Footer from "../Footer";

function Conversation({children, ...rest}) {
    return (
        <StyledConversation {...rest}>
            <TitleBar/>
            <Conversations>
                <ChatBubble time="12:00 AM">Hello</ChatBubble>
                <MyChatBubble time="12:00 AM">Hello</MyChatBubble>
                <ChatBubble time="12:00 AM">Hello</ChatBubble>
                <MyChatBubble time="12:00 AM">Hello</MyChatBubble>
                <ChatBubble time="12:00 AM">Hello</ChatBubble>
                <MyChatBubble time="12:00 AM">Hello</MyChatBubble>
                <ChatBubble time="12:00 AM">Hello</ChatBubble>
                <MyChatBubble time="12:00 AM">Hello</MyChatBubble>
                <ChatBubble time="12:00 AM">Hello</ChatBubble>
                <MyChatBubble time="12:00 AM">Hello</MyChatBubble>
                <ChatBubble time="12:00 AM">Hello</ChatBubble>
                <MyChatBubble time="12:00 AM">Hello</MyChatBubble>
            </Conversations>
            <Footer/>
        </StyledConversation>
    )
};

Conversation.propTypes = {
    children: PropTypes.any,
};

export default Conversation;