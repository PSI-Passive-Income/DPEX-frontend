import { MenuEntry, LinkStatus } from '@passive-income/dpex-uikit'

const status = {
  LIVE: <LinkStatus>{
    text: "LIVE",
    color: "failure",
  },
  SOON: <LinkStatus>{
    text: "SOON",
    color: "warning",
  },
  NEW: <LinkStatus>{
    text: "NEW",
    color: "success",
  },
};

const config: MenuEntry[] = [
  {
    label: 'Home',
    icon: 'HomeIcon',
    href: process.env.REACT_APP_PSIDEX_URL,
  },
  {
    label: 'Trade',
    icon: 'TradeIcon',
    items: [
      {
        label: 'Exchange',
        href: process.env.REACT_APP_PSIDEX_URL,
      },
      {
        label: 'Liquidity',
        href: `${process.env.REACT_APP_PSIDEX_URL}/#/pool`,
      },
      {
        label: 'Bridge',
        href: 'https://www.binance.org/en/bridge?utm_source=PSIDEX',
      },
    ],
  },
  {
    label: 'Farms',
    icon: 'FarmIcon',
    href: '/farms',
    initialOpenState: true,
    status: status.LIVE,
  },
  // {
  //   label: 'Pools',
  //   icon: 'PoolIcon',
  //   href: '/pools',
  // },
  // {
  //   label: 'Lottery',
  //   icon: 'TicketIcon',
  //   href: '/lottery',
  // },
  // {
  //   label: 'Collectibles',
  //   icon: 'NftIcon',
  //   href: '/collectibles',
  // },
  // {
  //   label: 'Teams & Profile',
  //   icon: 'GroupsIcon',
  //   calloutClass: 'rainbow',
  //   items: [
  //     {
  //       label: 'Leaderboard',
  //       href: '/teams',
  //     },
  //     {
  //       label: 'Task Center',
  //       href: '/profile/tasks',
  //     },
  //     {
  //       label: 'Your Profile',
  //       href: '/profile',
  //     },
  //   ],
  // },
  {
    label: 'Info',
    icon: 'InfoIcon',
    items: [
      {
        label: 'Overview',
        href: 'https://info.passive-income.io',
      },
      {
        label: 'Tokens',
        href: 'https://info.passive-income.io/tokens',
      },
      {
        label: 'Pairs',
        href: 'https://info.passive-income.io/pairs',
      },
      {
        label: 'Accounts',
        href: 'https://info.passive-income.io/accounts',
      },
    ],
  },
  // {
  //   label: 'IFO',
  //   icon: 'IfoIcon',
  //   href: '/ifo',
  // },
  {
    label: "More",
    icon: "MoreIcon",
    items: [
      // {
      //   label: "Voting",
      //   href: "https://voting.pancakeswap.finance",
      // },
      {
        label: "PSI Website",
        href: "https://www.passive-income.io/",
      },
      {
        label: "Github",
        href: "https://github.com/PSI-Passive-Income",
      },
      {
        label: "Docs",
        href: "https://passiveincome.gitbook.io/whitepaper/",
      },
      {
        label: "Blog",
        href: "https://p6ss1ve1nc0me.medium.com/passive-income-psi-375e6768cecf",
      },
    ],
  },
]

export default config
