import { CheckCircle, Circle, Gift, ArrowRight } from 'lucide-react';
import '../../styles/TaskCard.css';

function TaskCard({ title, description, reward, completed, icon: Icon, onComplete }) {
  return (
    <div className={`task-card ${completed ? 'completed' : ''}`}>
      <div className="task-status">
        {completed ? <CheckCircle size={22} className="check-icon" /> : <Circle size={22} />}
      </div>
      <div className="task-icon-wrap">
        <Icon size={20} />
      </div>
      <div className="task-info">
        <h4 className="task-title">{title}</h4>
        <p className="task-desc">{description}</p>
      </div>
      <div className="task-reward">
        <Gift size={14} />
        <span>{reward}</span>
      </div>
      {!completed && (
        <button className="task-action" onClick={onComplete}>
          <ArrowRight size={18} />
        </button>
      )}
    </div>
  );
}

export default TaskCard;
