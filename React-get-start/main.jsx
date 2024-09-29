import App from "./App";
import GlobalState from "./context";

ReatDOM.createRoot(document.getElementById('root')).render(
    <GlobalState>
        <App />
    </GlobalState>
)