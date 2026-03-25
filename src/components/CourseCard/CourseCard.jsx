import { Clock, BookOpen, ArrowRight, Star } from 'lucide-react';
import '../../styles/CourseCard.css';

function CourseCard({ title, category, duration, lessons, level, image, rating }) {
  return (
    <div className="course-card">
      <div className="course-image" style={{ background: image || 'var(--accent-gradient)' }}>
        <span className="course-level">{level}</span>
      </div>
      <div className="course-body">
        <span className="course-category">{category}</span>
        <h4 className="course-title">{title}</h4>
        <div className="course-meta">
          <span><Clock size={14} /> {duration}</span>
          <span><BookOpen size={14} /> {lessons} lessons</span>
          <span className="course-rating"><Star size={14} /> {rating}</span>
        </div>
        <button className="course-start-btn">
          Start Learning <ArrowRight size={16} />
        </button>
      </div>
    </div>
  );
}

export default CourseCard;
