import { Heart, MessageCircle, Share2, MoreHorizontal, Clock } from 'lucide-react';
import { useState } from 'react';
import '../../styles/SocialPost.css';

function SocialPost({ author, avatar, content, time, likes, comments, liked: initialLiked }) {
  const [liked, setLiked] = useState(initialLiked || false);
  const [likeCount, setLikeCount] = useState(likes);

  const handleLike = () => {
    setLiked(!liked);
    setLikeCount(prev => liked ? prev - 1 : prev + 1);
  };

  return (
    <div className="social-post">
      <div className="post-header">
        <div className="post-avatar">{avatar || author.charAt(0)}</div>
        <div className="post-author-info">
          <span className="post-author-name">{author}</span>
          <span className="post-time"><Clock size={12} /> {time}</span>
        </div>
        <button className="post-more"><MoreHorizontal size={18} /></button>
      </div>
      <p className="post-content">{content}</p>
      <div className="post-actions">
        <button className={`post-action-btn ${liked ? 'liked' : ''}`} onClick={handleLike}>
          <Heart size={18} fill={liked ? 'currentColor' : 'none'} />
          <span>{likeCount}</span>
        </button>
        <button className="post-action-btn">
          <MessageCircle size={18} />
          <span>{comments}</span>
        </button>
        <button className="post-action-btn">
          <Share2 size={18} />
          <span>Share</span>
        </button>
      </div>
    </div>
  );
}

export default SocialPost;
