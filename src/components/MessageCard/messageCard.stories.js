import MessageCard from ".";
import face1 from "/src/assets/images/face-female-1.jpg";

export default {
    title: "UI 组件/MessageCard",
    component: MessageCard,
};

export const Default = () => <MessageCard
    avatarSrc={face1}
    avatarStatus={"online"}
    name="张三"
    time="2022-01-01 12:00:00"
    message="你好，这是一个测试消息。"
    unreadCount={2}
/>;

export const Active = () => <MessageCard
    avatarSrc={face1}
    avatarStatus={"online"}
    name="张三"
    time="2022-01-01 12:00:00"
    message="你好，这是一个测试消息。"
    unreadCount={2}
    active={true}
/>;

export const Replied = () => <MessageCard
    avatarSrc={face1}
    avatarStatus={"online"}
    name="张三"
    time="2022-01-01 12:00:00"
    message="你好，这是一个测试消息。"
    unreadCount={2}
    active
    replied
/>;

export const RepliedInActive = () => <MessageCard
    avatarSrc={face1}
    avatarStatus={"online"}
    name="张三"
    time="2022-01-01 12:00:00"
    message="你好，这是一个测试消息。"
    unreadCount={2}
    replied
/>;
