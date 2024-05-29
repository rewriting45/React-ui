import ChatBubble from ".";
import VoiceMessage from "../VoiceMessage";

export default {
    title: "UI 组件/ChatBubble",
    component: ChatBubble,
};

export const Default = () => <ChatBubble time="昨天 下午14:26">默认</ChatBubble>;

export const Mine = () => <ChatBubble type="mine" time="昨天 下午14:27">默认</ChatBubble>;

    export const VoiceMessageType = () => <ChatBubble time="昨天 下午14:27">
        <VoiceMessage time="01: 24"></VoiceMessage>
    </ChatBubble>;

export const VoiceMessageTypeMine = () => <ChatBubble type="mine" time="昨天 下午14:27">
    <VoiceMessage time="01: 24" type="mine"></VoiceMessage>
</ChatBubble>;
