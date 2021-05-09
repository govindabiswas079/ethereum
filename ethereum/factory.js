import web3 from './web3';
import CampaignFactory from './build/CampaignFactory.json';

const instance = new web3.eth.Contract(
    JSON.parse(CampaignFactory.interface),
    '0x6BaA2B38C37967869273e7918af8C45d62C4cd53'
);

export default instance;