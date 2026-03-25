import { useState } from 'react';
import { Gift, Zap, Star, Target, TrendingUp, Users, MessageCircle, BookOpen, Vote, Trophy, Award, Clock, CheckCircle, ArrowRight, Flame, Coins } from 'lucide-react';
import '../../styles/Rewards.css';

function Rewards() {
  const [claimedMissions, setClaimedMissions] = useState({});

  const handleClaim = (id) => {
    setClaimedMissions((prev) => ({ ...prev, [id]: true }));
  };

  const userStats = {
    totalEarned: '4,250',
    level: 8,
    xp: 4250,
    xpNext: 5000,
    streak: 7,
    rank: 42,
  };

  const dailyMissions = [
    { id: 'd1', title: 'Daily Login', desc: 'Log in to the platform', xp: 10, reward: '5 $LB', icon: Zap, completed: true },
    { id: 'd2', title: 'Make a Post', desc: 'Share something in the Social Feed', xp: 25, reward: '10 $LB', icon: MessageCircle, completed: false },
    { id: 'd3', title: 'Like 5 Posts', desc: 'Engage with community content', xp: 15, reward: '5 $LB', icon: Star, completed: false },
    { id: 'd4', title: 'Refer a Friend', desc: 'Share your referral link', xp: 50, reward: '25 $LB', icon: Users, completed: false },
  ];

  const weeklyMissions = [
    { id: 'w1', title: 'Complete a Course', desc: 'Finish any Education Hub course', xp: 200, reward: '100 $LB', icon: BookOpen, completed: false },
    { id: 'w2', title: 'Vote on 3 Proposals', desc: 'Participate in DAO governance', xp: 150, reward: '75 $LB', icon: Vote, completed: false },
    { id: 'w3', title: 'Refer 5 Users', desc: 'Grow the community this week', xp: 300, reward: '200 $LB', icon: Users, completed: false },
  ];

  const earningMethods = [
    { title: 'Referral Rewards', desc: 'Earn $LB for every user that joins via your link', amount: '50-200 $LB', icon: Users, color: '#7B2FF7' },
    { title: 'Task Completion', desc: 'Complete airdrop tasks for instant rewards', amount: '10-500 $LB', icon: Target, color: '#00D4FF' },
    { title: 'DAO Voting', desc: 'Earn rewards for active governance participation', amount: '25-100 $LB', icon: Vote, color: '#00E68A' },
    { title: 'Social Engagement', desc: 'Post, comment, and engage to earn points', amount: '5-50 $LB', icon: MessageCircle, color: '#FFB800' },
    { title: 'Education', desc: 'Complete courses and earn learning rewards', amount: '50-200 $LB', icon: BookOpen, color: '#FF4D6A' },
    { title: 'Staking (Coming)', desc: 'Lock $LB tokens to earn passive yield', amount: '8-15% APY', icon: Coins, color: '#7B2FF7' },
  ];

  const levels = [
    { level: 1, name: 'Newbie', xp: 0 },
    { level: 3, name: 'Explorer', xp: 500 },
    { level: 5, name: 'Contributor', xp: 1500 },
    { level: 8, name: 'Influencer', xp: 4000 },
    { level: 10, name: 'Leader', xp: 5000 },
    { level: 15, name: 'Whale', xp: 10000 },
    { level: 20, name: 'Legend', xp: 20000 },
  ];

  const xpPct = (userStats.xp / userStats.xpNext) * 100;

  const renderMission = (mission) => {
    const Icon = mission.icon;
    const claimed = claimedMissions[mission.id];
    const done = mission.completed || claimed;

    return (
      <div key={mission.id} className={`mission-card ${done ? 'completed' : ''}`}>
        <div className="mission-icon-wrap">
          {done ? <CheckCircle size={20} className="mission-check" /> : <Icon size={20} />}
        </div>
        <div className="mission-info">
          <h4>{mission.title}</h4>
          <p>{mission.desc}</p>
        </div>
        <div className="mission-rewards">
          <span className="mission-xp"><Zap size={13} /> {mission.xp} XP</span>
          <span className="mission-lb"><Gift size={13} /> {mission.reward}</span>
        </div>
        {!done ? (
          <button className="mission-claim-btn" onClick={() => handleClaim(mission.id)}>
            <ArrowRight size={16} />
          </button>
        ) : (
          <span className="mission-done-badge">Done</span>
        )}
      </div>
    );
  };

  return (
    <div className="rewards-page">
      <div className="rewards-header">
        <Gift size={28} className="rewards-header-icon" />
        <h1 className="animate-fade-in">Rewards & <span className="gradient-text">Missions</span></h1>
        <p className="animate-fade-in-up stagger-1">Earn $LB tokens and XP through daily activities and challenges.</p>
      </div>

      <div className="rewards-overview animate-fade-in-up stagger-2">
        <div className="rewards-level-card">
          <div className="level-badge-large">
            <span className="level-number">{userStats.level}</span>
          </div>
          <div className="level-info">
            <h3>Level {userStats.level} — Influencer</h3>
            <div className="xp-bar">
              <div className="xp-bar-fill" style={{ width: `${xpPct}%` }}></div>
            </div>
            <span className="xp-text">{userStats.xp.toLocaleString()} / {userStats.xpNext.toLocaleString()} XP to Level {userStats.level + 1}</span>
          </div>
        </div>
        <div className="rewards-quick-stats">
          <div className="rq-stat">
            <Coins size={20} />
            <span className="rq-value">{userStats.totalEarned}</span>
            <span className="rq-label">$LB Earned</span>
          </div>
          <div className="rq-stat">
            <Flame size={20} />
            <span className="rq-value">{userStats.streak} Days</span>
            <span className="rq-label">Login Streak</span>
          </div>
          <div className="rq-stat">
            <Trophy size={20} />
            <span className="rq-value">#{userStats.rank}</span>
            <span className="rq-label">Global Rank</span>
          </div>
        </div>
      </div>

      <div className="missions-section animate-fade-in-up stagger-3">
        <div className="missions-block">
          <div className="missions-block-header">
            <div className="missions-block-title">
              <Target size={18} />
              <h3>Daily Missions</h3>
            </div>
            <span className="missions-reset"><Clock size={13} /> Resets in 16h</span>
          </div>
          <div className="missions-list">
            {dailyMissions.map(renderMission)}
          </div>
        </div>

        <div className="missions-block">
          <div className="missions-block-header">
            <div className="missions-block-title">
              <Star size={18} />
              <h3>Weekly Challenges</h3>
            </div>
            <span className="missions-reset"><Clock size={13} /> Resets in 4d</span>
          </div>
          <div className="missions-list">
            {weeklyMissions.map(renderMission)}
          </div>
        </div>
      </div>

      <div className="earning-section animate-fade-in-up stagger-4">
        <h3 className="section-label">All Ways to Earn</h3>
        <div className="earning-grid">
          {earningMethods.map((method) => {
            const Icon = method.icon;
            return (
              <div key={method.title} className="earning-card">
                <div className="earning-icon" style={{ background: `${method.color}15`, color: method.color }}>
                  <Icon size={22} />
                </div>
                <div className="earning-info">
                  <h4>{method.title}</h4>
                  <p>{method.desc}</p>
                </div>
                <span className="earning-amount">{method.amount}</span>
              </div>
            );
          })}
        </div>
      </div>

      <div className="levels-section animate-fade-in-up stagger-5">
        <h3 className="section-label">Level Progression</h3>
        <div className="levels-track">
          {levels.map((lv) => {
            const reached = userStats.level >= lv.level;
            return (
              <div key={lv.level} className={`level-node ${reached ? 'reached' : ''}`}>
                <div className="level-node-circle">
                  {reached ? <CheckCircle size={16} /> : <span>{lv.level}</span>}
                </div>
                <span className="level-node-name">{lv.name}</span>
                <span className="level-node-xp">{lv.xp.toLocaleString()} XP</span>
              </div>
            );
          })}
          <div className="levels-line"></div>
        </div>
      </div>
    </div>
  );
}

export default Rewards;
