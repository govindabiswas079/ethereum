import web3 from './web3';
import CampaignFactory from './build/CampaignFactory.json';

const instance = new web3.eth.Contract(
    JSON.parse(CampaignFactory.interface),
    '0x6b5be528A138847C6cF9aca0dD1E325465fc7f56'
);

export default instance;