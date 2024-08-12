import { createSlice } from "@reduxjs/toolkit";
// import themeSetup from "../../utils/themeSetup";

const initialState = {
    theme: null,
}
export const themeSlice = createSlice({
    name: "theme",
    initialState,
    reducers: {
        setTheme: (state, actions) => {
            state.theme = actions.payload
        },
        setThemeDirectly: (state, actions) => {
            state.theme = actions.payload
            localStorage.setItem('theme', actions.payload)
            // themeSetup(() => {})
            document.documentElement.classList = actions.payload
        }
    },
})


export const {setTheme, setThemeDirectly} = themeSlice.actions

export default themeSlice.reducer
