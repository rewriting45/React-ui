import ChatBubble from ".";

export default {
    title: "UI 组件/ChatBubble",
    component: ChatBubble,
};

export const Default = () => <ChatBubble time="昨天 下午14:26">默认</ChatBubble>;

export const Mine = () => <ChatBubble type="mine" time="昨天 下午14:27">默认</ChatBubble>;
