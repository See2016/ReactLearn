import { useContext } from "react"
import { GlobalContext } from "../../context"

const ContextButtonComponent = () => {
// function ContextButtonComponent() {
    const {handleChangeTheme} = useContext(GlobalContext);

    return (
        <button onClick={handleChangeTheme}>
        {/* <button onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}> */}
            Change Theme!
        </button>
    )
}

export default ContexButtonComponent