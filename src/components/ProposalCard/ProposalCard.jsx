import { useState } from 'react';
import { ThumbsUp, ThumbsDown, Clock, Users } from 'lucide-react';
import '../../styles/ProposalCard.css';

function ProposalCard({ title, description, yesVotes, noVotes, status, timeLeft, author }) {
  const [voted, setVoted] = useState(null);
  const totalVotes = yesVotes + noVotes;
  const yesPercent = totalVotes > 0 ? (yesVotes / totalVotes) * 100 : 0;

  const handleVote = (type) => {
    if (!voted) setVoted(type);
  };

  return (
    <div className="proposal-card">
      <div className="proposal-status-bar">
        <span className={`proposal-status ${status}`}>{status}</span>
        <span className="proposal-time"><Clock size={14} /> {timeLeft}</span>
      </div>
      <h3 className="proposal-title">{title}</h3>
      <p className="proposal-desc">{description}</p>
      <div className="proposal-author">
        <div className="author-avatar"><Users size={14} /></div>
        <span>{author}</span>
      </div>

      <div className="vote-bar">
        <div className="vote-bar-fill" style={{ width: `${yesPercent}%` }}></div>
      </div>
      <div className="vote-counts">
        <span className="vote-yes">YES {yesVotes.toLocaleString()}</span>
        <span className="vote-no">NO {noVotes.toLocaleString()}</span>
      </div>

      <div className="vote-actions">
        <button
          className={`vote-btn yes ${voted === 'yes' ? 'active' : ''}`}
          onClick={() => handleVote('yes')}
          disabled={!!voted}
        >
          <ThumbsUp size={16} /> {voted === 'yes' ? 'Voted Yes' : 'Vote Yes'}
        </button>
        <button
          className={`vote-btn no ${voted === 'no' ? 'active' : ''}`}
          onClick={() => handleVote('no')}
          disabled={!!voted}
        >
          <ThumbsDown size={16} /> {voted === 'no' ? 'Voted No' : 'Vote No'}
        </button>
      </div>
    </div>
  );
}

export default ProposalCard;
