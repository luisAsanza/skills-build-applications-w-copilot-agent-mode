

import { Routes, Route, Link } from 'react-router-dom';
import Activities from './components/Activities';
import Leaderboard from './components/Leaderboard';
import Teams from './components/Teams';
import Users from './components/Users';
import Workouts from './components/Workouts';

function App() {
  return (
    <>
      <nav className="navbar">
        <img src={process.env.PUBLIC_URL + '/octofitapp-small.svg'} alt="Octofit Logo" className="navbar-logo octofit-logo" />
        <div className="navbar-links">
          <Link to="/">Home</Link>
          <Link to="/activities">Activities</Link>
          <Link to="/leaderboard">Leaderboard</Link>
          <Link to="/teams">Teams</Link>
          <Link to="/users">Users</Link>
          <Link to="/workouts">Workouts</Link>
        </div>
      </nav>
      <div className="App">
        <Routes>
          <Route path="/activities" element={<Activities />} />
          <Route path="/leaderboard" element={<Leaderboard />} />
          <Route path="/teams" element={<Teams />} />
          <Route path="/users" element={<Users />} />
          <Route path="/workouts" element={<Workouts />} />
          <Route path="/" element={<h2>Welcome to Octofit Tracker!</h2>} />
        </Routes>
      </div>
    </>
  );
}

export default App;
