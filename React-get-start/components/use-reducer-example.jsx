import { useReducer } from "react"

const initialState = {
    showText: false,
    changeText: false
}

const HIDE_TEXT = 'HIDE_TEXT'
const SHOW_TEXT = 'SHOW_TEXT'
const CHANGE_TEXT = 'CHANGE_TEXT'

const reducer = (state, action) => {
    switch (action.type) {
        case HIDE_TEXT:
            // return state;
            console.log(state. action);
            return {
                ...state,
                showText: false
            }
        case SHOW_TEXT:
            return {
                ...state,
                showText: true
            }
        case CHANGE_TEXT:
            return {
                ...state,
                changeText: !state.changeText
            };

        default:
            return state;
    }
}

export default function UseReducerExample() {
    const [state, dispatch] = useReducer(reducer, initialState)
    console.log(state)
    return (
        <div>
            {
                state?.showText ? (
                    <h3
                    style={{
                        backgroundColor: state?.changeText ? 'black' : 'red'
                    }}
                    >
                        Use Reducer Part
                    </h3>
                ) : null
                
            }
            <h3>Hello My Friend</h3> {/* take actions on this element */}
            <button onClick={() => dispatch({type: HIDE_TEXT})}>Hide Text</button>
            <button onClick={() => dispatch({type: SHOW_TEXT})}>Show Text</button>
            <button onClick={() => dispatch({type: CHANGE_TEXT})}>Change Text Style</button>
        </div>
    )
}
