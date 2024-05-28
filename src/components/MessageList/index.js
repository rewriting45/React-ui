import React from 'react';
import PropTypes from "prop-types";
import StyledMessageList, {ChatList} from "./style";
import Filter from "../Filter";
import Select from "../Select";
import Option from "../Option";
import Button from "../Button";
import Icon from "../Icon";
import Input from "../Input";
import { ReactComponent as Plus } from "/src/assets/icons/plus.svg";
import face1 from "../../assets/images/face-female-1.jpg";
import MessageCard from "../MessageCard";

function MessageList({children, ...rest}) {
    return (
        <StyledMessageList {...rest}>
            <Input.Search/>
            <ChatFilter/>
            <ChatList>
                {
                    [1, 2, 3, 4, 5, 6].map((_, index) => <MessageCard
                        key={index}
                        avatarSrc={face1}
                        avatarStatus={"online"}
                        name="张三"
                        time="2022-01-01 12:00:00"
                        message="你好，这是一个测试消息。"
                        statusText="在线"
                        unreadCount={2}
                        active={index === 3}
                        replied={index % 3 === 0}
                    />)
                }
            </ChatList>
        </StyledMessageList>
    )
};

function ChatFilter() {
    return (
        <Filter style={{padding: "20px 0"}}>
            <Filter.Filters label="列表排序">
                <Select>
                    <Option>最新消息优先</Option>
                    <Option>在线好友优先</Option>
                </Select>
            </Filter.Filters>
            <Filter.Action label="创建会话">
                <Button>
                    <Icon icon={Plus} width={12} height={12}></Icon>
                </Button>
            </Filter.Action>
        </Filter>
    )
}

MessageList.propTypes = {
    children: PropTypes.any,
};

export default MessageList;