import Paragraph from ".";
import React from "react";

export default {
    title: "排版/Paragraph",
    component: Paragraph,
};

export const Default = () => <React.Fragment>
    <Paragraph>默认</Paragraph>
    <Paragraph>默认</Paragraph>
</React.Fragment>;

export const Ellipsis = () => <Paragraph ellipsis>默认默认默认默认默认默认默认默认默认默认默认默认默认默认默认默认默认默认默认默认默认默认默认默认默认默认默认默认默认默认默认默认默认默认默认默认默认默认默认默认默认默认默认默认默认默认默认默认默认默认默认默认默认默认默认默认默认默认默认默认默认默认默认默认默认默认默认</Paragraph>