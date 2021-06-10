import React, { useEffect } from "react"
import "materialize-css"
import { useDispatch } from "react-redux"
import { Header } from "./components/header"
// import { News } from "./actions/pages"
import { Datel } from "./components/detal"
import { Search } from "./components/resultSearch"
import { List } from "./components//list"
import { actionList } from "./actions/pages"
import { useSelector } from "react-redux"



function App() {

  const dispatch = useDispatch()

  const isAuth = useSelector(state => state.user)

  console.log(isAuth.list)

  useEffect(() => {
    dispatch(actionList())
  }, [])


  return (
    <div className="container" >

      <Header />
      {isAuth.detal && <Datel />}
      {isAuth.search && <Search />}
      {isAuth.list && <List />}

    </div>
  );
}

export default App;


// import React from "react"
// import { actionList } from "../actions/pages"
// import { useDispatch } from "react-redux"

// export const List = (props) => {

//     const dispatch = useDispatch()

//     return (
//         <div className="navigation_mobile">
//             <p onClick={() => dispatch(actionList())}>LIST</p>
//         </div>)

// }

