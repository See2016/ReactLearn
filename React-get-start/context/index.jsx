import { createContext, useState } from "react"

// Create the context
export const GlobalContext = createContext(null); // เพราะว่าใช้ได้หลายที่

// Create the global state that receipe component as a children
const GlobalState = ({children}) => {

// function GlobalState({children}) {
  // มี var and set
  const [theme, setTheme] = useState("light");
  function handleChangeTheme() {
    setTheme(theme === 'light' ? 'dark' : 'light')
  }
  return (
    // ส่งค่าไป 2 ตัว car and set
    //  index -> button -> text
    // ตั้ง set ให้กับ btn และรับ var ไปใช้ในการเปลี่ยน text
    <GlobalContext.Provider value={{theme, handleChangeTheme}}> 
        {children}
    </GlobalContext.Provider>
  )
}

// This we make t wrap main.jsx or we call root!
export default GlobalState;