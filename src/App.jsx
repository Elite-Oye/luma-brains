import { Routes, Route, useLocation } from 'react-router-dom';
import { useWallet } from './context/WalletContext';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import Sidebar from './components/Sidebar/Sidebar';
import WalletConnect from './components/WalletConnect/WalletConnect';
import Landing from './pages/Landing/Landing';
import Dashboard from './pages/Dashboard/Dashboard';
import Airdrop from './pages/Airdrop/Airdrop';
import DAO from './pages/DAO/DAO';
import MarketSquare from './pages/MarketSquare/MarketSquare';
import Education from './pages/Education/Education';
import DevPortal from './pages/DevPortal/DevPortal';
import SocialFeed from './pages/SocialFeed/SocialFeed';
import LeaderboardPage from './pages/LeaderboardPage/LeaderboardPage';
import Settings from './pages/Settings/Settings';
import Help from './pages/Help/Help';
import './styles/App.css';
import Profile from './pages/Profile/Profile';
import Communities from './pages/Communities/Communities';
import Rewards from './pages/Rewards/Rewards';
function App() {
  const { wallet, showWalletModal } = useWallet();
  const location = useLocation();
  const isLanding = location.pathname === '/';
  const showSidebar = wallet.connected && !isLanding;

  return (
    <div className="app">
      <Navbar />
      {showWalletModal && <WalletConnect />}
      <div className={`app-layout ${showSidebar ? 'with-sidebar' : ''}`}>
        {showSidebar && <Sidebar />}
        <main className={`main-content ${showSidebar ? 'shifted' : ''}`}>
          <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/airdrop" element={<Airdrop />} />
            <Route path="/dao" element={<DAO />} />
            <Route path="/marketsquare" element={<MarketSquare />} />
            <Route path="/education" element={<Education />} />
            <Route path="/developers" element={<DevPortal />} />
            <Route path="/social" element={<SocialFeed />} />
            <Route path="/leaderboard" element={<LeaderboardPage />} />
            <Route path="/settings" element={<Settings />} />
            <Route path="/help" element={<Help />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/communities" element={<Communities />} />
            <Route path="/rewards" element={<Rewards />} />
          </Routes>
        </main>
      </div>
      {isLanding && <Footer />}
    </div>
  );
}

export default App;