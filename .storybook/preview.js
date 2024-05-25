import theme from "../src/theme";
import { withThemeFromJSXProvider } from "@storybook/addon-themes";
import {createGlobalStyle, ThemeProvider} from "styled-components";

export const decorators  = [
    withThemeFromJSXProvider({
        themes: {
            "theme": theme,
        },
        defaultTheme: "theme",
        Provider: ThemeProvider,
        GlobalStyles: createGlobalStyle``
    }),
]
