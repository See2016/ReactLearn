// export default function Users() {
//     const [usesList, setUserList] = useState([]);
//     const [pending, setPending] = useState(false);

// import { Children, createContext } from "react";

//     async function fetchAllUsers() {
//         try {
//             setPending(true);
//             const res = fetch('api url');
//             const result = res.json();

//             if(result?.users) {
//                 setUserList(result?.users)
//                 setPending(false);
//             } else {
//                 setUserList([])
//                 setPending(false);
//             }
//         } catch (error) {
//             console.log(error)
//         }
//     }

//     if(pending) return <h1>Fetching...</h1>

//     return (
//         <div>
//             <h1>User API List</h1>
//             <button onClick={fetchAllUsers}>Click to Show User List</button>
//             <ul>
//                 {
//                     usesList && usesList?.length > 0 ? (
//                         usesList.map((userItem) => (
//                             <li key={userItem?.id}>
//                                 <p>{userItem.firstName} {userItem.lastName}</p>
//                             </li>
//                         ))
//                     ) : (<h1>no user</h1>)
//                 }
//             </ul>
//         </div>
//     )
// }

// export const GlobalContext = createContext(null)

// function GlobalState({chidren}) {
//     <GlobalContext.Provider value={{}}>
//         {Children}
//     </GlobalContext.Provider>
// }
// export default GlobalState;