// Write your JS code here
import {Link, withRouter} from 'react-router-dom'
import './index.css'

const Header = () => (
  <div>
    <ul className="header-container">
      <li>
        <Link to="/" className="list">
          Home
        </Link>
      </li>
      <li>
        <Link to="/about" className="list">
          About
        </Link>
      </li>
    </ul>
  </div>
)
export default withRouter(Header)
