import React from 'react';
import {Menu, Header, Segment} from 'semantic-ui-react';
import {Link} from '../routes';

const Footer = (props) => {

    return (

        <div style={{marginTop:250}}>
        <Header as='h5' attached='top' textAlign='center'>
            Created by Jiazheng (Kevin) Li
        </Header>
        <Segment attached textAlign='center'>
            This website is a decentralized crowdfunding campaign platform using the Ethereum Blockchain. <br/>
            To be able to interact with the campaigns, users are required to use Metamask Ethereum wallet extension. <br/>
            The contract is built with Solidity, while this website is built with React, Semantic UI, and Next.js
        </Segment>
        <Segment attached textAlign='center'>
            Check out my portfolio! <br/> 
            <Link>
                <a href="http://kevinli.tech">
                    kevinli.tech
                </a>
            </Link>
        </Segment>
    </div>

    );

};

export default Footer;