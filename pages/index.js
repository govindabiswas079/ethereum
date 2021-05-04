import React, {Component} from 'react';
import factory from '../ethereum/factory';


class CampaignIndex extends Component{

    static async getInitialProps(){
        const campaigns = await factory.methods.getDepoyedCampaigns().call();

        return {campaigns};
    }

    render(){
        return <div>Campaigns Index</div>;
    }
}

export default CampaignIndex;

