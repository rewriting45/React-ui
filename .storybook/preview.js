import theme from "../src/theme";
import { withThemeFromJSXProvider } from "@storybook/addon-themes";
import {createGlobalStyle, ThemeProvider} from "styled-components";

const preview = {
    decorators: [
        withThemeFromJSXProvider({
            themes: {
                "theme": theme,
            },
            defaultTheme: "theme",
            Provider: ThemeProvider,
            GlobalStyles: createGlobalStyle``,
        }),
    ],
};

export default preview;