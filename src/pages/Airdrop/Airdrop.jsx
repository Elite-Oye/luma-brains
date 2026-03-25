import { useState } from 'react';
import { Gift, Twitter, Users, MessageCircle, BookOpen, Share2, CheckCircle2, Flame, Target, Zap } from 'lucide-react';
import TaskCard from '../../components/TaskCard/TaskCard';
import Leaderboard from '../../components/Leaderboard/Leaderboard';
import '../../styles/Airdrop.css';

function Airdrop() {
  const [tasks, setTasks] = useState([
    { id: 1, title: 'Follow on Twitter/X', description: 'Follow @LumaBrains on Twitter', reward: '+50 $LB', completed: false, icon: Twitter },
    { id: 2, title: 'Join Telegram Group', description: 'Join the official Telegram community', reward: '+50 $LB', completed: true, icon: MessageCircle },
    { id: 3, title: 'Refer 3 Friends', description: 'Invite 3 friends using your referral link', reward: '+200 $LB', completed: false, icon: Users },
    { id: 4, title: 'Complete Web3 Basics', description: 'Finish the intro course in Education Hub', reward: '+100 $LB', completed: false, icon: BookOpen },
    { id: 5, title: 'Share on Social Media', description: 'Share LUMA BRAINS on any social platform', reward: '+75 $LB', completed: true, icon: Share2 },
    { id: 6, title: 'First DAO Vote', description: 'Cast your first vote on a proposal', reward: '+100 $LB', completed: false, icon: CheckCircle2 },
  ]);

  const completedCount = tasks.filter((t) => t.completed).length;
  const progress = (completedCount / tasks.length) * 100;

  const handleComplete = (id) => {
    setTasks((prev) => prev.map((t) => (t.id === id ? { ...t, completed: true } : t)));
  };

  const leaderboardData = [
    { name: 'CryptoKing', address: '0x7B2F...F7E4', points: 15200 },
    { name: 'Web3Alice', address: '0x3A1C...D8B2', points: 12800 },
    { name: 'DeFiMax', address: '0x9E5D...A1C7', points: 11500 },
    { name: 'ChainMaster', address: '0x4F2A...B3E1', points: 9800 },
    { name: 'BlockNinja', address: '0x1D8C...F4A2', points: 8200 },
  ];

  return (
    <div className="airdrop-page">
      <div className="airdrop-header">
        <div className="airdrop-header-content">
          <div className="airdrop-badge"><Flame size={14} /> Active Campaign</div>
          <h1 className="animate-fade-in">$LB Token <span className="gradient-text">Airdrop</span></h1>
          <p className="animate-fade-in-up stagger-1">Complete tasks, earn rewards, and climb the leaderboard.</p>
        </div>
      </div>

      <div className="airdrop-content">
        <div className="airdrop-main">
          <div className="progress-card animate-fade-in-up stagger-2">
            <div className="progress-header">
              <div className="progress-info">
                <Target size={20} />
                <h3>Your Progress</h3>
              </div>
              <span className="progress-count">{completedCount}/{tasks.length} Tasks</span>
            </div>
            <div className="progress-bar">
              <div className="progress-fill" style={{ width: `${progress}%` }}></div>
            </div>
            <div className="progress-reward">
              <Zap size={16} />
              <span>Estimated reward: <strong>575 $LB</strong></span>
            </div>
          </div>

          <div className="tasks-section animate-fade-in-up stagger-3">
            <h3 className="section-label">Airdrop Tasks</h3>
            <div className="tasks-list">
              {tasks.map((task) => (
                <TaskCard
                  key={task.id}
                  {...task}
                  onComplete={() => handleComplete(task.id)}
                />
              ))}
            </div>
          </div>

          <button className="claim-airdrop-btn">
            <Gift size={20} />
            Claim Airdrop ({completedCount * 50} $LB Available)
          </button>
        </div>

        <div className="airdrop-side animate-fade-in-up stagger-4">
          <Leaderboard data={leaderboardData} />
        </div>
      </div>
    </div>
  );
}

export default Airdrop;
