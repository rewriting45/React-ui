import Button from ".";
import { ReactComponent as Plus } from "/src/assets/icons/plus.svg";
import Icon from "../Icon";

export default {
    title: "UI 组件/Button",
    component: Button,
};

export const Default = () => <Button shape="rect">默认按钮</Button>;


export const CircleButton = () => <Button shape="circle">
    <Icon icon={Plus} width={12} height={12}/>
</Button>;
