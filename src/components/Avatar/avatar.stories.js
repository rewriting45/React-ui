import Avatar from ".";
import face1 from "../../assets/images/face-female-1.jpg";
import face2 from "../../assets/images/face-female-2.jpg";
import face3 from "../../assets/images/face-female-3.jpg";
import face4 from "../../assets/images/face-female-4.jpg";


export default {
    title: "UI 组件/Avatar",
    component: Avatar,
};

export const Default = () => <Avatar src={face1} status="online"/>;

export const Sizes = () => {
    return (
        <div className="row-elements">
            <Avatar src={face1} size="48px"/>
            <Avatar src={face2} size="56px"/>
            <Avatar src={face3} size="64px"/>
            <Avatar src={face4} size="72px"/>
        </div>
    )
}

export const WithStatus = () => {
    return (
        <div className="row-elements">
            <Avatar src={face1} status="online"/>
            <Avatar src={face2} status="offline"/>
            <Avatar src={face4} size="72px" status="online"/>
        </div>
    )
}