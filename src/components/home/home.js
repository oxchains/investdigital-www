import React,{ Component } from 'react';

import Product from './product';
import  Banner from './banner';
import Technology from './technology';
import Ourteams from "./ourteams";
import Circuit from './circuit'
import Consultant from './consultant'
<<<<<<< HEAD
=======
import Cornerstone from './cornerstone';
>>>>>>> f2c31098b34821f8c39ce45ecb7bbaa4d8b84a03
import New from './new'
import VideoBottom from './videoBottom'
import Video from './video';
import {getLocalValue} from '../common/language';

class Home extends Component{
    componentDidMount() {
        this.node.scrollIntoView();
    }
    render(){
        return(
            <section id="about-section" className="g-bg-secondary g-pos-rel" ref={node => this.node = node}>
                <Banner/>
                <Product/>
                <Technology/>
                <Video/>
                <VideoBottom/>
                <New/>
                <Circuit/>
                <Ourteams/>
                <Consultant/>
                <Cornerstone />
            </section>
        )
    }
}
export default  Home;