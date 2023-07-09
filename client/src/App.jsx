import "./sass/main.scss";
import SignupForm from "./components/SignupForm";
import { createContext, useState } from "react";
import { Switch } from "antd";

export const ThemeContext = createContext(null);

function App() {
    const [theme, setTheme] = useState("light");

    const toggleTheme = () => {
        theme === "dark" ? setTheme("light") : setTheme("dark");
    };

    return (
        <ThemeContext.Provider value={(theme, toggleTheme)}>
            <div className="app" data-theme={theme}>
                <div className="toggle">
                    <Switch
                        className="toggle__btn"
                        onClick={toggleTheme}
                        defaultChecked={false}
                    />
                    <span>
                        {theme === "light" ? "Light Mode" : "Dark Mode"}
                    </span>
                </div>
                <SignupForm />
            </div>
        </ThemeContext.Provider>
    );
}

export default App;
