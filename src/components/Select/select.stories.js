import Select from ".";
import Option from "../Option";

export default {
    title: "UI 组件/Input/Select",
    component: Select,
};

export const Default = () => <Select>
    <Option>option1</Option>
    <Option>option2</Option>
</Select>;
