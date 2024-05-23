

import Hero from "./Components/Hero.jsx"
import { Route, Routes } from "react-router-dom";
import Nav from "./Components/Nav.jsx"
import { Account } from "./Components/Account.jsx";


function App() {
 

  return (
    <div className="w-[90%] m-auto p-5">
        <Nav />
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/account" element={<Account />} />
        </Routes>
      </div>
  )
}

export default App
