import { createContext, useContext, useState, useCallback } from 'react';

const WalletContext = createContext(null);

export function WalletProvider({ children }) {
  const [wallet, setWallet] = useState({
    connected: false,
    address: '',
    balance: 0,
    provider: '',
  });
  const [showWalletModal, setShowWalletModal] = useState(false);

  const connectWallet = useCallback((provider) => {
    const mockAddresses = {
      metamask: '0x7B2F...F7E4',
      walletconnect: '0x3A1C...D8B2',
      trustwallet: '0x9E5D...A1C7',
    };
    
    setWallet({
      connected: true,
      address: mockAddresses[provider] || '0x0000...0000',
      balance: 12450.75,
      provider: provider,
    });
    setShowWalletModal(false);
  }, []);

  const disconnectWallet = useCallback(() => {
    setWallet({
      connected: false,
      address: '',
      balance: 0,
      provider: '',
    });
  }, []);

  return (
    <WalletContext.Provider value={{
      wallet,
      showWalletModal,
      setShowWalletModal,
      connectWallet,
      disconnectWallet,
    }}>
      {children}
    </WalletContext.Provider>
  );
}

export function useWallet() {
  const context = useContext(WalletContext);
  if (!context) throw new Error('useWallet must be used within WalletProvider');
  return context;
}
