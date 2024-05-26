import Icon from ".";
import { ReactComponent as Smile } from "../../assets/icons/smile.svg"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCommentDots} from "@fortawesome/free-solid-svg-icons";

export default {
    title: "UI 组件/Icon",
    component: Icon,
};

export const Default = () => <Icon icon={Smile}/>;

export const CustomSizes = () => {
    return <div className="row-elements">
        <Icon icon={Smile} width={48} height={48}/>
        <Icon icon={Smile} width={56} height={56}/>
        <Icon icon={Smile} width={64} height={64}/>
        <Icon icon={Smile} width={72} height={72}/>
    </div>
}

export const CustomColors = () => {
    return <div className="row-elements">
        <Icon icon={Smile} color="red"/>
        <Icon icon={Smile} color="black"/>
        <Icon icon={Smile} color="skyblue"/>
        <Icon icon={Smile} color="green"/>
    </div>
}

export const FontAwesome = () => {
    return <div className="row-elements">
        <FontAwesomeIcon icon={faCommentDots}></FontAwesomeIcon>
    </div>
}

export const FontAwesomeColor = () => {
    return <div className="row-elements">
        <FontAwesomeIcon icon={faCommentDots} color="red"></FontAwesomeIcon>
    </div>
}

export const FontAwesomeSize = () => {
    return <div className="row-elements">
        <FontAwesomeIcon icon={faCommentDots} color="red" fontSize="24px"></FontAwesomeIcon>
        <FontAwesomeIcon icon={faCommentDots} color="red" fontSize="32px"></FontAwesomeIcon>
        <FontAwesomeIcon icon={faCommentDots} color="red" fontSize="40px"></FontAwesomeIcon>
        <FontAwesomeIcon icon={faCommentDots} color="red" fontSize="48px"></FontAwesomeIcon>
    </div>
}