import { Code2, FileJson, Box, Github, ArrowUpRight, Terminal, BookOpen, Cpu } from 'lucide-react';
import '../../styles/DevPortal.css';

function DevPortal() {
  const resources = [
    { icon: FileJson, title: 'API Documentation', description: 'Comprehensive REST API docs for integrating with the LUMA BRAINS protocol.', status: 'coming-soon', color: '#7B2FF7' },
    { icon: Box, title: 'SDK & Libraries', description: 'JavaScript, Python, and Rust SDKs for building on the LUMA BRAINS ecosystem.', status: 'coming-soon', color: '#00D4FF' },
    { icon: Github, title: 'GitHub Repository', description: 'Open-source code, smart contracts, and contribution guidelines.', status: 'active', color: '#00E68A', link: '#' },
    { icon: Terminal, title: 'CLI Tools', description: 'Command-line tools for deploying and managing your LUMA BRAINS integrations.', status: 'coming-soon', color: '#FFB800' },
  ];

  const codeExample = `// Initialize LUMA BRAINS SDK
import { LumaBrains } from '@lumabrains/sdk';

const lb = new LumaBrains({
  apiKey: 'your-api-key',
  network: 'mainnet'
});

// Connect wallet
const wallet = await lb.wallet.connect();
console.log('Connected:', wallet.address);

// Get $LB balance
const balance = await lb.token.getBalance(
  wallet.address
);
console.log('Balance:', balance, '$LB');`;

  return (
    <div className="dev-page">
      <div className="dev-header">
        <div className="dev-header-icon"><Code2 size={28} /></div>
        <h1 className="animate-fade-in">Developer <span className="gradient-text">Portal</span></h1>
        <p className="animate-fade-in-up stagger-1">Build the next generation of Web3 applications on LUMA BRAINS.</p>
      </div>

      <div className="dev-content">
        <div className="dev-main">
          <div className="dev-code-preview animate-fade-in-up stagger-2">
            <div className="code-header">
              <div className="code-dots">
                <span className="dot red"></span>
                <span className="dot yellow"></span>
                <span className="dot green"></span>
              </div>
              <span className="code-title">quickstart.js</span>
            </div>
            <pre className="code-body">
              <code>{codeExample}</code>
            </pre>
          </div>

          <div className="dev-features animate-fade-in-up stagger-3">
            <h3 className="section-label">Why Build on LUMA BRAINS?</h3>
            <div className="dev-features-grid">
              <div className="dev-feature">
                <Cpu size={24} />
                <h4>Powerful APIs</h4>
                <p>RESTful APIs with WebSocket support for real-time data.</p>
              </div>
              <div className="dev-feature">
                <BookOpen size={24} />
                <h4>Rich Documentation</h4>
                <p>Detailed guides, tutorials, and code examples.</p>
              </div>
              <div className="dev-feature">
                <Github size={24} />
                <h4>Open Source</h4>
                <p>Contribute to the protocol and earn rewards.</p>
              </div>
            </div>
          </div>
        </div>

        <div className="dev-side animate-fade-in-up stagger-4">
          <h3 className="section-label">Resources</h3>
          <div className="dev-resources">
            {resources.map((res) => {
              const Icon = res.icon;
              return (
                <div key={res.title} className={`dev-resource ${res.status}`}>
                  <div className="dev-resource-icon" style={{ background: `${res.color}15`, color: res.color }}>
                    <Icon size={22} />
                  </div>
                  <div className="dev-resource-info">
                    <h4>{res.title}</h4>
                    <p>{res.description}</p>
                  </div>
                  {res.status === 'active' ? (
                    <ArrowUpRight size={18} className="resource-arrow" />
                  ) : (
                    <span className="resource-badge">Soon</span>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default DevPortal;
