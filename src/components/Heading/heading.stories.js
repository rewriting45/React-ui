import Heading from ".";

export default {
    title: "排版/Heading",
    component: Heading,
};

export const H1 = () => <Heading level={1}>H1</Heading>
export const H2 = () => <Heading level={2}>H2</Heading>
export const H3 = () => <Heading level={3}>H3</Heading>
export const H4 = () => <Heading level={4}>H4</Heading>
export const H5 = () => <Heading level={5}>H5</Heading>
export const H6 = () => <Heading level={6}>H6</Heading>
