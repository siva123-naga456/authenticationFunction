// Write your JS code here
import Cookies from 'js-cookie'
import {Redirect} from 'react-router-dom'
import './index.css'

const Login = props => {
  const jwtToken = Cookies.get('jwt_token')
  if (jwtToken !== undefined) {
    return <Redirect to="/" />
  }

  const onLoginSuccess = Token => {
    const {history} = props
    Cookies.set('jwt_token', Token, {expires: 30})
    history.replace('/')
  }

  const onSuccess = async () => {
    const userDetails = {username: 'rahul', password: 'rahul@2021'}
    const url = 'https://apis.ccbp.in/login'
    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }
    const response = await fetch(url, options)
    const data = await response.json()
    if (response.ok === true) {
      onLoginSuccess(data.jwt_token)
    }
  }

  return (
    <div className="logout-container">
      <h1>Please Login</h1>
      <button className="btn" type="button" onClick={onSuccess}>
        Login with Sample Creds
      </button>
    </div>
  )
}
export default Login
