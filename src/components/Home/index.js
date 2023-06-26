// Write your JS code here
import Header from '../Header'
import LogoutButton from '../LogoutButton'
import './index.css'

const Home = () => (
  <div className="home-container">
    <Header />
    <div className="heading">
      <h1>Home Route</h1>
      <LogoutButton />
    </div>
  </div>
)

export default Home
