import { useState } from 'react';
import { GraduationCap, Search, Filter } from 'lucide-react';
import CourseCard from '../../components/CourseCard/CourseCard';
import '../../styles/Education.css';

function Education() {
  const [activeFilter, setActiveFilter] = useState('all');
  const [search, setSearch] = useState('');

  const filters = ['all', 'web3', 'crypto', 'nft', 'blockchain', 'defi'];

  const courses = [
    { title: 'Web3 Fundamentals', category: 'Web3', duration: '45 min', lessons: 8, level: 'Beginner', rating: 4.8, image: 'linear-gradient(135deg, #7B2FF7, #4A1DB2)' },
    { title: 'Introduction to Cryptocurrency', category: 'Crypto', duration: '1h 20m', lessons: 12, level: 'Beginner', rating: 4.9, image: 'linear-gradient(135deg, #00D4FF, #0090B2)' },
    { title: 'NFT Creation Masterclass', category: 'NFT', duration: '2h', lessons: 15, level: 'Intermediate', rating: 4.7, image: 'linear-gradient(135deg, #FF4D6A, #CC2244)' },
    { title: 'DeFi Deep Dive', category: 'DeFi', duration: '1h 45m', lessons: 10, level: 'Advanced', rating: 4.6, image: 'linear-gradient(135deg, #00E68A, #00B36B)' },
    { title: 'Blockchain Architecture', category: 'Blockchain', duration: '3h', lessons: 20, level: 'Advanced', rating: 4.8, image: 'linear-gradient(135deg, #FFB800, #CC9300)' },
    { title: 'Smart Contract Development', category: 'Web3', duration: '2h 30m', lessons: 18, level: 'Advanced', rating: 4.9, image: 'linear-gradient(135deg, #7B2FF7, #00D4FF)' },
    { title: 'Crypto Trading Basics', category: 'Crypto', duration: '1h', lessons: 6, level: 'Beginner', rating: 4.5, image: 'linear-gradient(135deg, #FF4D6A, #7B2FF7)' },
    { title: 'DAO Governance Models', category: 'Web3', duration: '50 min', lessons: 7, level: 'Intermediate', rating: 4.7, image: 'linear-gradient(135deg, #00D4FF, #7B2FF7)' },
    { title: 'Tokenomics Explained', category: 'Crypto', duration: '1h 15m', lessons: 9, level: 'Intermediate', rating: 4.6, image: 'linear-gradient(135deg, #FFB800, #FF4D6A)' },
  ];

  const filtered = courses.filter((c) => {
    const matchFilter = activeFilter === 'all' || c.category.toLowerCase() === activeFilter;
    const matchSearch = c.title.toLowerCase().includes(search.toLowerCase());
    return matchFilter && matchSearch;
  });

  return (
    <div className="education-page">
      <div className="education-header">
        <div className="education-header-icon"><GraduationCap size={28} /></div>
        <h1 className="animate-fade-in">Education <span className="gradient-text">Hub</span></h1>
        <p className="animate-fade-in-up stagger-1">Learn Web3 from the ground up. From basics to advanced — all in one place.</p>
      </div>

      <div className="education-controls animate-fade-in-up stagger-2">
        <div className="search-bar">
          <Search size={18} />
          <input
            type="text"
            placeholder="Search courses..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
        <div className="filter-bar">
          <Filter size={16} />
          {filters.map((f) => (
            <button
              key={f}
              className={`filter-btn ${activeFilter === f ? 'active' : ''}`}
              onClick={() => setActiveFilter(f)}
            >
              {f.toUpperCase()}
            </button>
          ))}
        </div>
      </div>

      <div className="courses-grid animate-fade-in-up stagger-3">
        {filtered.map((course, idx) => (
          <CourseCard key={idx} {...course} />
        ))}
      </div>

      {filtered.length === 0 && (
        <div className="no-results">
          <p>No courses found matching your criteria.</p>
        </div>
      )}
    </div>
  );
}

export default Education;
