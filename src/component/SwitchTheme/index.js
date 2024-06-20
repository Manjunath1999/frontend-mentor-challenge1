import { useState } from "react"
import Button from '@mui/material/Button';
import DarkModeIcon from '@mui/icons-material/DarkMode';


export default function SwitchTheme({ themeColour, setthemeColour }) {

    const handleThemeChange = (colour) => {
        setthemeColour(colour)
    }


    return (
        <div className="theme-container">
            {
                themeColour == "black" ?
                    <Button variant="text" sx={{ color: "white" }}
                        onClick={() => handleThemeChange("white")}>Light Mode</Button> :

                    <Button variant="text" sx={{ color: "black" }} startIcon={<DarkModeIcon />}
                        onClick={() => handleThemeChange("black")}>Dark Mode</Button>
            }

        </div>
    )
}