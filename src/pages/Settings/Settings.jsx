import { useState } from 'react';
import { Settings as SettingsIcon, User, Bell, Shield, Globe, Moon, Eye, Save, Wallet } from 'lucide-react';
import { useWallet } from '../../context/WalletContext';
import '../../styles/Settings.css';

function Settings() {
  const { wallet } = useWallet();
  const [activeTab, setActiveTab] = useState('profile');
  const [settings, setSettings] = useState({
    displayName: 'LumaUser',
    email: '',
    bio: '',
    notifAirdrop: true,
    notifDAO: true,
    notifRewards: true,
    notifSocial: false,
    emailNotif: false,
    profilePublic: true,
    showBalance: false,
    language: 'en',
    theme: 'dark',
  });

  const handleToggle = (key) => {
    setSettings((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  const handleChange = (key, value) => {
    setSettings((prev) => ({ ...prev, [key]: value }));
  };

  const tabs = [
    { id: 'profile', label: 'Profile', icon: User },
    { id: 'notifications', label: 'Notifications', icon: Bell },
    { id: 'privacy', label: 'Privacy', icon: Shield },
    { id: 'preferences', label: 'Preferences', icon: Globe },
  ];

  return (
    <div className="settings-page">
      <div className="settings-header">
        <SettingsIcon size={28} className="settings-header-icon" />
        <h1 className="animate-fade-in"><span className="gradient-text">Settings</span></h1>
        <p className="animate-fade-in-up stagger-1">Manage your account preferences and privacy.</p>
      </div>

      <div className="settings-layout animate-fade-in-up stagger-2">
        <div className="settings-tabs">
          {tabs.map((tab) => {
            const Icon = tab.icon;
            return (
              <button
                key={tab.id}
                className={`settings-tab ${activeTab === tab.id ? 'active' : ''}`}
                onClick={() => setActiveTab(tab.id)}
              >
                <Icon size={18} />
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>

        <div className="settings-content">
          {activeTab === 'profile' && (
            <div className="settings-section animate-fade-in">
              <h3>Profile Settings</h3>
              <div className="settings-field">
                <label>Display Name</label>
                <input
                  type="text"
                  value={settings.displayName}
                  onChange={(e) => handleChange('displayName', e.target.value)}
                  placeholder="Enter display name"
                />
              </div>
              <div className="settings-field">
                <label>Email (Optional)</label>
                <input
                  type="email"
                  value={settings.email}
                  onChange={(e) => handleChange('email', e.target.value)}
                  placeholder="your@email.com"
                />
              </div>
              <div className="settings-field">
                <label>Bio</label>
                <textarea
                  value={settings.bio}
                  onChange={(e) => handleChange('bio', e.target.value)}
                  placeholder="Tell the community about yourself..."
                  rows={4}
                />
              </div>
              <div className="settings-field">
                <label>Wallet Address</label>
                <div className="settings-wallet-display">
                  <Wallet size={16} />
                  <span>{wallet.address || 'Not connected'}</span>
                </div>
              </div>
              <button className="settings-save-btn">
                <Save size={16} /> Save Changes
              </button>
            </div>
          )}

          {activeTab === 'notifications' && (
            <div className="settings-section animate-fade-in">
              <h3>Notification Preferences</h3>
              <div className="toggle-group">
                <div className="toggle-item">
                  <div className="toggle-info">
                    <span className="toggle-label">Airdrop Alerts</span>
                    <span className="toggle-desc">Get notified about new airdrops and claims</span>
                  </div>
                  <button className={`toggle-switch ${settings.notifAirdrop ? 'on' : ''}`} onClick={() => handleToggle('notifAirdrop')}>
                    <span className="toggle-knob"></span>
                  </button>
                </div>
                <div className="toggle-item">
                  <div className="toggle-info">
                    <span className="toggle-label">DAO Proposals</span>
                    <span className="toggle-desc">Notify when new proposals are created</span>
                  </div>
                  <button className={`toggle-switch ${settings.notifDAO ? 'on' : ''}`} onClick={() => handleToggle('notifDAO')}>
                    <span className="toggle-knob"></span>
                  </button>
                </div>
                <div className="toggle-item">
                  <div className="toggle-info">
                    <span className="toggle-label">Reward Notifications</span>
                    <span className="toggle-desc">Get alerts when you earn rewards</span>
                  </div>
                  <button className={`toggle-switch ${settings.notifRewards ? 'on' : ''}`} onClick={() => handleToggle('notifRewards')}>
                    <span className="toggle-knob"></span>
                  </button>
                </div>
                <div className="toggle-item">
                  <div className="toggle-info">
                    <span className="toggle-label">Social Activity</span>
                    <span className="toggle-desc">Likes, comments, and mentions</span>
                  </div>
                  <button className={`toggle-switch ${settings.notifSocial ? 'on' : ''}`} onClick={() => handleToggle('notifSocial')}>
                    <span className="toggle-knob"></span>
                  </button>
                </div>
                <div className="toggle-item">
                  <div className="toggle-info">
                    <span className="toggle-label">Email Notifications</span>
                    <span className="toggle-desc">Receive notifications via email</span>
                  </div>
                  <button className={`toggle-switch ${settings.emailNotif ? 'on' : ''}`} onClick={() => handleToggle('emailNotif')}>
                    <span className="toggle-knob"></span>
                  </button>
                </div>
              </div>
              <button className="settings-save-btn">
                <Save size={16} /> Save Preferences
              </button>
            </div>
          )}

          {activeTab === 'privacy' && (
            <div className="settings-section animate-fade-in">
              <h3>Privacy & Security</h3>
              <div className="toggle-group">
                <div className="toggle-item">
                  <div className="toggle-info">
                    <span className="toggle-label">Public Profile</span>
                    <span className="toggle-desc">Allow others to view your profile</span>
                  </div>
                  <button className={`toggle-switch ${settings.profilePublic ? 'on' : ''}`} onClick={() => handleToggle('profilePublic')}>
                    <span className="toggle-knob"></span>
                  </button>
                </div>
                <div className="toggle-item">
                  <div className="toggle-info">
                    <span className="toggle-label">Show Token Balance</span>
                    <span className="toggle-desc">Display your $LB balance publicly</span>
                  </div>
                  <button className={`toggle-switch ${settings.showBalance ? 'on' : ''}`} onClick={() => handleToggle('showBalance')}>
                    <span className="toggle-knob"></span>
                  </button>
                </div>
              </div>
              <button className="settings-save-btn">
                <Save size={16} /> Save Privacy Settings
              </button>
            </div>
          )}

          {activeTab === 'preferences' && (
            <div className="settings-section animate-fade-in">
              <h3>App Preferences</h3>
              <div className="settings-field">
                <label>Language</label>
                <select value={settings.language} onChange={(e) => handleChange('language', e.target.value)}>
                  <option value="en">English</option>
                  <option value="es">Español</option>
                  <option value="fr">Français</option>
                  <option value="de">Deutsch</option>
                  <option value="zh">中文</option>
                </select>
              </div>
              <div className="settings-field">
                <label>Theme</label>
                <div className="theme-options">
                  <button
                    className={`theme-btn ${settings.theme === 'dark' ? 'active' : ''}`}
                    onClick={() => handleChange('theme', 'dark')}
                  >
                    <Moon size={16} /> Dark
                  </button>
                  <button
                    className={`theme-btn ${settings.theme === 'light' ? 'active' : ''}`}
                    onClick={() => handleChange('theme', 'light')}
                  >
                    <Eye size={16} /> Light (Soon)
                  </button>
                </div>
              </div>
              <button className="settings-save-btn">
                <Save size={16} /> Save Preferences
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Settings;