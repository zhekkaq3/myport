import { useEffect, useState } from "react"

export const UseThemeSwitcher = () => {

    const preferDarkQuery = "(prefer-color-scheme: dark)"
    const [mode, setMode] = useState("")

    useEffect(() => {
        const mediaQuery = window.matchMedia(preferDarkQuery)
        const usePref = window.localStorage.getItem("theme")

        const handleChange = () => {
            if (usePref) {
                let check = usePref === "dark" ? "dark" : "light"
                setMode(check)
                if (check === "dark") {
                    document.documentElement.classList.add("dark")
                } else {
                    document.documentElement.classList.remove("dark")
                }
            } else {
                let check = mediaQuery.matches ? "dark" : "light"
                setMode(check)
                if (check === "dark") {
                    document.documentElement.classList.add("dark")
                } else {
                    document.documentElement.classList.remove("dark")
                }
            }
        }

        mediaQuery.addEventListener("change", handleChange)

        return mediaQuery.removeEventListener("change", handleChange)

    }, [])

    return (
        <div>

        </div>
    )
}