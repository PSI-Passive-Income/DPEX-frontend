import tokens from './tokens'
import { FarmConfig } from './types'

const farms: FarmConfig[] = [
  {
    pid: 0,
    lpSymbol: 'PSI-BNB LP',
    lpAddresses: {
      97: '0xc7ef555b2e660981dddcb056d2d5f4238e080b0b',
      56: '0xe0E5Bb6C82bB95C33CB5a71be337cb9E124D3d5B',
    },
    token: tokens.psi,
    quoteToken: tokens.wbnb,
  },
  {
    pid: 1,
    lpSymbol: 'INC-BNB LP',
    lpAddresses: {
      97: '0xf9b69652cBbe888E25A46A304fdCea6A418Ab2e0',
      56: '0x69AD8B7BcDCCb30fB7291463D26963Bc350F2Ab3',
    },
    token: tokens.inc,
    quoteToken: tokens.wbnb,
  },
  {
    pid: 2,
    lpSymbol: 'INC-PSI LP',
    lpAddresses: {
      97: '0x7E2A82Dfd17732c8FfAe7D94cB60181836E1e0d9',
      56: '0x129B2Ed9e907481dC53D6314c35a75fE276Ef898',
    },
    token: tokens.psi,
    quoteToken: tokens.inc,
  },
  {
    pid: 3,
    lpSymbol: 'BUSD-BNB LP',
    lpAddresses: {
      97: '0xE6Ed40494ae1c8640fd987FA285AB1f2098733ba',
      56: '0x03386B91E1362cf5d790fbbf03388E5b94Abe50a',
    },
    token: tokens.busd,
    quoteToken: tokens.wbnb,
  },
  {
    pid: 4,
    lpSymbol: 'INC-BUSD LP',
    lpAddresses: {
      97: '',
      56: '0x72E4383D151CB8FFEd88640751F6b46dcc5c1C1d',
    },
    token: tokens.inc,
    quoteToken: tokens.busd,
  },
  {
    pid: 5,
    lpSymbol: 'USDT-BNB LP',
    lpAddresses: {
      97: '',
      56: '0x424a3B8E9F7f1590826cC71745E1c7A3A8De8AeC',
    },
    token: tokens.usdt,
    quoteToken: tokens.wbnb,
  },
  {
    pid: 6,
    lpSymbol: 'DAI-BNB LP',
    lpAddresses: {
      97: '',
      56: '0x50d6e8E190D055A0A425d1B7094e98a0e6F0488d',
    },
    token: tokens.dai,
    quoteToken: tokens.wbnb,
  },
  {
    pid: 7,
    lpSymbol: 'LINK-BNB LP',
    lpAddresses: {
      97: '',
      56: '0xB0E2088539877c9758D02dde7D01FeBC33C40ee7',
    },
    token: tokens.link,
    quoteToken: tokens.wbnb,
  },
  {
    pid: 8,
    lpSymbol: 'ETH-BNB LP',
    lpAddresses: {
      97: '',
      56: '0xa64872af7FbB93A49e2BEE184Ed38633FD04954D',
    },
    token: tokens.eth,
    quoteToken: tokens.wbnb,
  },
  {
    pid: 9,
    lpSymbol: 'DOT-BNB LP',
    lpAddresses: {
      97: '',
      56: '0x55c614A83ee57B7c1EBaE327C695F35764d599C1',
    },
    token: tokens.dot,
    quoteToken: tokens.wbnb,
  },
  {
    pid: 10,
    lpSymbol: 'SUSHI-BNB LP',
    lpAddresses: {
      97: '',
      56: '0xE6DE1cbEd42C7AfEFFE871A2e4E31990050E862f',
    },
    token: tokens.sushi,
    quoteToken: tokens.wbnb,
  },
  {
    pid: 11,
    lpSymbol: 'ADA-BNB LP',
    lpAddresses: {
      97: '',
      56: '0xFE1A51dA8953E965eBb351196A26e41F5DE8e0De',
    },
    token: tokens.ada,
    quoteToken: tokens.wbnb,
  },
  {
    pid: 12,
    lpSymbol: 'ATOM-BNB LP',
    lpAddresses: {
      97: '',
      56: '0x73E0B827108132Ffe50165565ee352452577FF84',
    },
    token: tokens.atom,
    quoteToken: tokens.wbnb,
  },
  {
    pid: 13,
    lpSymbol: 'JULB-BNB LP',
    lpAddresses: {
      97: '',
      56: '0xdf2Ef51B7C73BdE0077345eBcd88541aDF8F655c',
    },
    token: tokens.julb,
    quoteToken: tokens.wbnb,
  },
  {
    pid: 14,
    lpSymbol: 'CAKE-BNB LP',
    lpAddresses: {
      97: '',
      56: '0x634B77bF2960E5FE133A7628A08cFeE6AC5A261d',
    },
    token: tokens.cake,
    quoteToken: tokens.wbnb,
  },
  {
    pid: 15,
    lpSymbol: 'AUTOv2-BNB LP',
    lpAddresses: {
      97: '',
      56: '0xcE844B31C26c7Dab956D21c0295228c32865368F',
    },
    token: tokens.autov2,
    quoteToken: tokens.wbnb,
  },
  {
    pid: 16,
    lpSymbol: 'BIFI-BNB LP',
    lpAddresses: {
      97: '',
      56: '0xEb14e87Be620454cF6f09ce61a1Bc66032DbE624',
    },
    token: tokens.bifi,
    quoteToken: tokens.wbnb,
  },
  {
    pid: 17,
    lpSymbol: 'HELMET-BNB LP',
    lpAddresses: {
      97: '',
      56: '0x7427294efA441468Db7320614A6dE018815B032e',
    },
    token: tokens.helmet,
    quoteToken: tokens.wbnb,
  },
  {
    pid: 18,
    lpSymbol: 'FUEL-BNB LP',
    lpAddresses: {
      97: '',
      56: '0xAFCfcCB218E56B64c26429E4c587d125598dBD15',
    },
    token: tokens.fuel,
    quoteToken: tokens.wbnb,
  },
  {
    pid: 19,
    lpSymbol: 'BRY-BNB LP',
    lpAddresses: {
      97: '',
      56: '0x1b004169c47273AAcd32e0c549fAfF72371Cc508',
    },
    token: tokens.bry,
    quoteToken: tokens.wbnb,
  },
  {
    pid: 20,
    lpSymbol: 'LINA-BNB LP',
    lpAddresses: {
      97: '',
      56: '0x3f421141F76A46E2623b1c5E11806c741d61d8dE',
    },
    token: tokens.lina,
    quoteToken: tokens.wbnb,
  },
  {
    pid: 21,
    lpSymbol: 'SAFEMOON-BNB LP',
    lpAddresses: {
      97: '',
      56: '0x518f1FF0e7127DD1b44dD585d0867aD70d39D041',
    },
    token: tokens.safemoon,
    quoteToken: tokens.wbnb,
  },
  {
    pid: 22,
    lpSymbol: 'KNIGHT-PSI LP',
    lpAddresses: {
      97: '',
      56: '0xa28ee996c03cb10ad740c50d0f4db03ad5691f5e',
    },
    token: tokens.knight,
    quoteToken: tokens.psi,
  }
]

export default farms
