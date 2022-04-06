import { Routes, Route } from 'react-router-dom'
import { Home, SignIn } from './container'

function App() {
  return (
    <Routes>
      <Route path="/" element={<SignIn type="login" />} />
      <Route path="/register" element={<SignIn type="register" />} />
      <Route
        path="/forget-password"
        element={<SignIn type="forgetPassword" />}
      />
      <Route path="/home" element={<Home />} />
    </Routes>
  )
}

export default App
