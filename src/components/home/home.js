import React,{ Component } from 'react';

import Product from './product';
import  Banner from './banner';
import Technology from './technology';
import New from './new';
import Ourteams from "./ourteams";
import Circuit from './circuit'
import Consultant from './consultant'
import Investor from './investor';
import Cornerstone from './cornerstone';
import VideoBottom from './videoBottom'
import Video from './video';
import Tendency from './tendency'
import MarketRequirement from './market_requirement'
import Goal from './goal'
import {getLocalValue} from '../common/language';

class Home extends Component{
    componentDidMount() {
        this.node.scrollIntoView();
    }
    render(){
        return(
            <section id="about-section" className="g-bg-secondary g-pos-rel" ref={node => this.node = node}>
                <Banner/>
                <Tendency/>
                <MarketRequirement/>
                <Goal/>
                <Product/>
                <Technology/>
                <Video/>
                <VideoBottom/>
                <Investor/>
                <Cornerstone />
                <New/>
                <Circuit/>
                <Ourteams/>
                <Consultant/>
            </section>
        )
    }
}
export default  Home;
