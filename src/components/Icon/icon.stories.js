import Icon from ".";
import { ReactComponent as Smile } from "../../assets/icons/smile.svg"

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
