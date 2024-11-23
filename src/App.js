import {BrowserRouter,Routes,Route} from "react-router-dom"
import HomePage from "./components/HomePage"
import AddNote from "./components/AddNote"
import UpdateNote from "./components/UpdateNote"

const App = () => (
  <BrowserRouter>
    <Routes>
      <Route exact path="/" element={<HomePage/>}/>
      <Route exact path="/add-note" element={<AddNote/>} />
      <Route exact path="/update-note/:id" element={<UpdateNote/>} />
    </Routes>
  </BrowserRouter>
)

export default App