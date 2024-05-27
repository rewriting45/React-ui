import Input from ".";
import {ReactComponent as ClipIcon} from "/src/assets/icons/clip.svg";
import {ReactComponent as SmileIcon} from "/src/assets/icons/smile.svg";
import Icon from "../Icon";

export default {
    title: "UI 组件/Input",
    component: Input,
};

export const Default = () => <Input/>;

export const Search = () => <Input.Search/>

export const withAffix = () => <Input prefix={<Icon icon={ClipIcon} color="#ccc"/>} suffix={<Icon icon={SmileIcon} color="#ccc"/>}/>;
