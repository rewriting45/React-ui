import NavBar, {MenuItem} from ".";
import {faCommentDots} from "@fortawesome/free-solid-svg-icons";
import "styled-components/macro"; // 这个东西要控制 styled-components 的版本 5.1.1 超过需要安装另外的插件
export default {
    title: "页面组件/NavBar",
    component: NavBar,
};

export const Default = () => <NavBar/>;

export const Menu = () => {
    return (
        <div css={`background-color: ${({theme}) => theme.darkPurple}; width: 100px;`}>
            <MenuItem showBadge active={true} icon={faCommentDots}/>
        </div>
    )
}
