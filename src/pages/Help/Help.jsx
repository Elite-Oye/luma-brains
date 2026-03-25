import { useState } from 'react';
import { HelpCircle, ChevronDown, ChevronUp, MessageCircle, Mail, BookOpen, ExternalLink, Search, Wallet, Gift, Vote, Shield } from 'lucide-react';
import '../../styles/Help.css';

function Help() {
  const [openFAQ, setOpenFAQ] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');

  const faqs = [
    {
      icon: Wallet,
      question: 'How do I connect my wallet?',
      answer: 'Click the "Connect Wallet" button in the top navigation bar. Choose from MetaMask, WalletConnect, or Trust Wallet. Follow the prompts in your wallet to approve the connection. Your wallet address will appear in the navbar once connected.',
    },
    {
      icon: Gift,
      question: 'How do I claim my airdrop rewards?',
      answer: 'Navigate to the Airdrop page from the sidebar. Complete the available tasks listed (follow social accounts, refer friends, etc.). Once tasks are completed, click the "Claim Airdrop" button at the bottom. Your $LB tokens will be credited to your wallet balance.',
    },
    {
      icon: Vote,
      question: 'How does DAO voting work?',
      answer: 'Go to the DAO page to see active proposals. You need a minimum of 100 $LB tokens to vote. Click "Vote Yes" or "Vote No" on any active proposal. Your vote is recorded on-chain and cannot be changed once submitted. Proposals pass based on majority vote when the voting period ends.',
    },
    {
      question: 'What is the $LB token?',
      answer: '$LB (LUMA BRAINS) is the native utility token of the protocol. It is used for governance voting, marketplace payments, staking rewards, referral bonuses, accessing premium content, and creator monetization within the ecosystem.',
    },
    {
      question: 'How does the referral system work?',
      answer: 'Each user gets a unique referral link on the Dashboard. Share your link with friends. When someone joins using your link, both you and the new user earn $LB tokens. You can track your referral stats including total invites, active referrals, and rewards earned.',
    },
    {
      icon: Shield,
      question: 'Is my data secure?',
      answer: 'LUMA BRAINS is built on decentralized blockchain technology. Your wallet connection is encrypted, and we never store your private keys. All governance votes are recorded on-chain for full transparency. You control your data through the Privacy settings.',
    },
    {
      question: 'How do I earn more $LB tokens?',
      answer: 'There are multiple ways to earn: complete airdrop tasks, refer new users, participate in DAO voting, engage in the Social Feed (likes, posts, comments), complete education courses, and contribute to the developer ecosystem.',
    },
    {
      question: 'What wallets are supported?',
      answer: 'Currently we support MetaMask (browser extension), WalletConnect (mobile wallets via QR scan), and Trust Wallet. More wallets will be added in future updates including TON wallet support.',
    },
  ];

  const contacts = [
    { icon: MessageCircle, label: 'Discord Community', desc: 'Join our Discord for real-time support', link: '#' },
    { icon: MessageCircle, label: 'Telegram Group', desc: 'Chat with the community on Telegram', link: '#' },
    { icon: Mail, label: 'Email Support', desc: 'support@lumabrains.io', link: '#' },
    { icon: BookOpen, label: 'Documentation', desc: 'Read the full protocol docs', link: '#' },
  ];

  const filteredFAQs = faqs.filter(
    (faq) =>
      faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="help-page">
      <div className="help-header">
        <HelpCircle size={28} className="help-header-icon" />
        <h1 className="animate-fade-in">Help <span className="gradient-text">Center</span></h1>
        <p className="animate-fade-in-up stagger-1">Find answers, get support, and learn about the protocol.</p>
      </div>

      <div className="help-search animate-fade-in-up stagger-2">
        <Search size={20} />
        <input
          type="text"
          placeholder="Search for help..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>

      <div className="help-content">
        <div className="help-main animate-fade-in-up stagger-3">
          <h3 className="help-section-label">Frequently Asked Questions</h3>
          <div className="faq-list">
            {filteredFAQs.map((faq, idx) => {
              const isOpen = openFAQ === idx;
              const FaqIcon = faq.icon || HelpCircle;
              return (
                <div key={idx} className={`faq-item ${isOpen ? 'open' : ''}`}>
                  <button className="faq-question" onClick={() => setOpenFAQ(isOpen ? null : idx)}>
                    <div className="faq-q-left">
                      <FaqIcon size={18} className="faq-icon" />
                      <span>{faq.question}</span>
                    </div>
                    {isOpen ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
                  </button>
                  {isOpen && (
                    <div className="faq-answer animate-fade-in">
                      <p>{faq.answer}</p>
                    </div>
                  )}
                </div>
              );
            })}
            {filteredFAQs.length === 0 && (
              <div className="faq-empty">No results found for "{searchQuery}"</div>
            )}
          </div>
        </div>

        <div className="help-side animate-fade-in-up stagger-4">
          <h3 className="help-section-label">Get in Touch</h3>
          <div className="contact-list">
            {contacts.map((c) => {
              const CIcon = c.icon;
              return (
                <a key={c.label} href={c.link} className="contact-card">
                  <div className="contact-icon"><CIcon size={20} /></div>
                  <div className="contact-info">
                    <span className="contact-label">{c.label}</span>
                    <span className="contact-desc">{c.desc}</span>
                  </div>
                  <ExternalLink size={16} className="contact-arrow" />
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Help;