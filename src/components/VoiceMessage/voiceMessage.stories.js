import VoiceMessage from ".";

export default {
    title: "UI 组件/VoiceMessage",
    component: VoiceMessage,
};

export const Default = () => <VoiceMessage time={"01: 25"}/>;

export const Mine = () => <VoiceMessage type="mine" time={"01: 25"}/>;
