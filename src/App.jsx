import UserContextprovider from './context/UserContextProvider'
import Login from './components/Login'
import Profile from './components/Profile';

function App() {

  return (
 <UserContextprovider>
  <Login/>
  <Profile/>
 </UserContextprovider>
  )
}

export default App
