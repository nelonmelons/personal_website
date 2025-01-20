import { ProjectPage } from '../ProjectPage';

export function DoraHacks() {
  return (
    <ProjectPage
      title="Decentralized Perpetual Exchange"
      date="March 2024"
      tech={['Solidity', 'Hardhat', 'Chainlink', 'React', 'TypeScript']}
      image="https://dorahacks.io/api/files/buidl/21712/cover"
      description="A decentralized perpetual futures exchange built on Base that enables users to trade with up to 10x leverage. The platform features an advanced order matching engine, real-time price feeds via Chainlink oracles, and a sophisticated liquidation mechanism to maintain market stability."
      features={[
        'Perpetual futures trading with up to 10x leverage',
        'Automated market making with virtual liquidity pools',
        'Real-time price feeds using Chainlink oracles',
        'Advanced order matching engine for efficient execution',
        'Automated liquidation mechanism for risk management',
        'User-friendly interface with real-time trading data',
        'Built on Base for low-cost, fast transactions',
        'Integration with major Web3 wallets'
      ]}
      repoUrl="https://github.com/nelonmelons/perpetual-dex"
      demoUrl="https://dorahacks.io/buidl/21712"
    />
  );
} 