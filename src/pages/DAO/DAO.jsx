import { Vote, Plus, Shield, Users, Coins, TrendingUp } from 'lucide-react';
import ProposalCard from '../../components/ProposalCard/ProposalCard';
import StatsCard from '../../components/StatsCard/StatsCard';
import '../../styles/DAO.css';

function DAO() {
  const proposals = [
    {
      title: 'Community Treasury Allocation for Q1 2025',
      description: 'Proposal to allocate 500,000 $LB from the community treasury for developer grants, marketing initiatives, and ecosystem growth in Q1 2025.',
      yesVotes: 8420,
      noVotes: 2180,
      status: 'active',
      timeLeft: '2 days left',
      author: '0x7B2F...F7E4',
    },
    {
      title: 'Launch Staking Rewards Program',
      description: 'Introduce a staking mechanism where users can lock their $LB tokens to earn passive rewards with APY ranging from 8-15%.',
      yesVotes: 6100,
      noVotes: 1400,
      status: 'active',
      timeLeft: '5 days left',
      author: '0x3A1C...D8B2',
    },
    {
      title: 'Partner with DeFi Protocol XYZ',
      description: 'Strategic partnership to integrate LUMA BRAINS identity system with XYZ DeFi protocol for cross-platform benefits.',
      yesVotes: 5200,
      noVotes: 3800,
      status: 'pending',
      timeLeft: 'Starts in 1 day',
      author: '0x9E5D...A1C7',
    },
    {
      title: 'Increase Referral Rewards by 25%',
      description: 'Proposal to boost referral reward amounts by 25% to accelerate community growth and user acquisition.',
      yesVotes: 11200,
      noVotes: 800,
      status: 'closed',
      timeLeft: 'Ended',
      author: '0x4F2A...B3E1',
    },
  ];

  const stats = [
    { icon: Vote, label: 'Total Proposals', value: '47', iconColor: '#7B2FF7' },
    { icon: Users, label: 'Active Voters', value: '3,241', iconColor: '#00D4FF' },
    { icon: Coins, label: 'Treasury Balance', value: '2.4M $LB', iconColor: '#00E68A' },
    { icon: TrendingUp, label: 'Participation Rate', value: '67%', iconColor: '#FFB800' },
  ];

  return (
    <div className="dao-page">
      <div className="dao-header">
        <div>
          <h1 className="animate-fade-in">DAO <span className="gradient-text">Governance</span></h1>
          <p className="animate-fade-in-up stagger-1">Shape the future of LUMA BRAINS through community voting.</p>
        </div>
        <button className="create-proposal-btn animate-fade-in">
          <Plus size={18} /> Create Proposal
        </button>
      </div>

      <div className="dao-stats animate-fade-in-up stagger-2">
        {stats.map((stat) => (
          <StatsCard key={stat.label} {...stat} />
        ))}
      </div>

      <div className="dao-info-bar animate-fade-in-up stagger-3">
        <Shield size={18} />
        <span>All votes are recorded on-chain for full transparency. Minimum 100 $LB required to vote.</span>
      </div>

      <div className="proposals-section animate-fade-in-up stagger-4">
        <h3 className="section-label">Proposals</h3>
        <div className="proposals-grid">
          {proposals.map((proposal, idx) => (
            <ProposalCard key={idx} {...proposal} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default DAO;
