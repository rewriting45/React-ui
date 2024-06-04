import Popover from ".";
import Button from "../Button";

export default {
    title: "UI 组件/Popover",
    component: Popover,
};

export const Default = () => (
    <div
        style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "50vh",
        }}
    >
        <Popover content="hello">
            <Button shape="rect">click</Button>
        </Popover>;
    </div>
)

export const WithOffset = () => (
    <div
        style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "50vh",
        }}
    >
        <Popover offset={{x: "-25%"}} content="hello">
            <Button shape="rect">click</Button>
        </Popover>;
    </div>
)

