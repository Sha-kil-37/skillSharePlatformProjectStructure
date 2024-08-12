import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setTheme } from "../redux/theme/themeSlice";

const ThmeProvider = ({children}) => {
	const dispatch = useDispatch()

	const themeSetup = (currentTheme) => {
		const osTheme = window.matchMedia('(prefers-color-scheme: dark)')
		const element = document.documentElement

		/*
				* check the dark theme set in localstorage
				* check the theme in localstorage
				* check the system theme 
		*/
		if (localStorage.theme === 'dark' || (!('theme' in localStorage) && osTheme.matches)) {
				element.classList.add('dark')
				currentTheme('dark')
		} 
		else {
				element.classList.remove('dark')
				currentTheme('light')
		}

		const osThemeChange = (e) => {
				if (!('theme' in localStorage)) {
						if (e.matches) {
								element.classList.add('dark')
								currentTheme('dark')
						} 
						else {
								element.classList.remove('dark')
								currentTheme('light')
						}
				}
		}

		// when os theme has changed then change this app theme
		osTheme.removeEventListener('change', osThemeChange)
		osTheme.addEventListener('change', osThemeChange)
	}
	
  useEffect(() => {
  
    themeSetup((theme) => {
      dispatch(setTheme(theme))
    })
  }, [dispatch]);

  return <>{children}</>
};

export default ThmeProvider;