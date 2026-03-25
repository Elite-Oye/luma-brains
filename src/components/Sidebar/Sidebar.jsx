import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  LayoutDashboard, Gift, Vote, Store, GraduationCap,
  Code2, MessageCircle, ChevronLeft, ChevronRight, Trophy, Settings, HelpCircle, User,Star, Users
} from 'lucide-react';
import '../../styles/Sidebar.css';

function Sidebar() {
  const [collapsed, setCollapsed] = useState(false);
  const location = useLocation();

  const menuItems = [
    { path: '/dashboard', icon: LayoutDashboard, label: 'Dashboard' },
    { path: '/profile', icon: User, label: 'Profile' },
    { path: '/airdrop', icon: Gift, label: 'Airdrop' },
    { path: '/rewards', icon: Star, label: 'Rewards' },
    { path: '/dao', icon: Vote, label: 'DAO' },
    { path: '/marketsquare', icon: Store, label: 'MarketSquare' },
    { path: '/communities', icon: Users, label: 'Communities' },
    { path: '/education', icon: GraduationCap, label: 'Education' },
    { path: '/social', icon: MessageCircle, label: 'Social Feed' },
    { path: '/developers', icon: Code2, label: 'Developers' },
];
 const bottomItems = [
    { path: '/leaderboard', icon: Trophy, label: 'Leaderboard' },
    { path: '/settings', icon: Settings, label: 'Settings' },
    { path: '/help', icon: HelpCircle, label: 'Help' },
];
  return (
    <aside className={`sidebar ${collapsed ? 'collapsed' : ''}`}>
      <div className="sidebar-inner">
        <div className="sidebar-menu">
          {menuItems.map((item) => {
            const Icon = item.icon;
            const isActive = location.pathname === item.path;
            return (
              <Link
                key={item.path}
                to={item.path}
                className={`sidebar-item ${isActive ? 'active' : ''}`}
                title={collapsed ? item.label : ''}
              >
                <div className="sidebar-icon-wrapper">
                  <Icon size={20} />
                  {isActive && <div className="active-indicator"></div>}
                </div>
                {!collapsed && <span className="sidebar-label">{item.label}</span>}
              </Link>
            );
          })}
        </div>

        <div className="sidebar-divider"></div>

  <div className="sidebar-bottom">
  {bottomItems.map((item) => {
    const Icon = item.icon;
    return (
      <Link key={item.label} to={item.path} className="sidebar-item" title={collapsed ? item.label : ''}>
        <div className="sidebar-icon-wrapper">
          <Icon size={20} />
        </div>
        {!collapsed && <span className="sidebar-label">{item.label}</span>}
      </Link>
    );
  })}
</div>
      </div>

      <button className="sidebar-toggle" onClick={() => setCollapsed(!collapsed)}>
        {collapsed ? <ChevronRight size={16} /> : <ChevronLeft size={16} />}
      </button>
    </aside>
  );
}

export default Sidebar;
