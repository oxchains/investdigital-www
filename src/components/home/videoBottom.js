/**
 * Created by zhanxiaojing on 2017/12/09.
 */
import React,{ Component }from 'react';
import {connect} from 'react-redux';
import {getLocalValue} from '../common/language';

class VideoBottom extends Component{
    constructor(props) {
        super(props);
        this.state = {

        };
    }
    render(){
        return(
            <div style={{backgroundColor:"#FFFFFF"}}>
            <div className="container px-0 navP" >
                <div className="row">
                    <div className="col-sm-6 col-lg-6 pict">
                        <video classID={"example_video_1"} className={"video-js vjs-default-skin vjs-big-play-centered"} width="165" controls preload="auto" poster="/public/img/1513154766.mp4" src="/public/img/1513154766.mp4" data-setup="{example_option:true}" >
                            <source src="/public/img/1513154766.mp4" type="video/mp4" />
                        </video>
                    </div>
                    <div className="col-sm-6 col-lg-6 det" style={{paddingRight:50}}>
                        <h3>{getLocalValue("video_title")}</h3>
                        <div className="nl-underline g-mb-15">
                            <span className="nl-style" style={{float:"right"}}></span>
                        </div>
                        <div>
                            <ul>
                                <li>{getLocalValue("video_title_li1")}<img src="/public/img/point.png" alt="point"/></li>
                                <li>{getLocalValue("video_title_li2")}<img src="/public/img/point.png" alt="point"/></li>
                                <li>{getLocalValue("video_title_li3")}<img src="/public/img/point.png" alt="point"/></li>
                                <li>{getLocalValue("video_title_li4")}<img src="/public/img/point.png" alt="point"/></li>
                            </ul>
                        </div>
                    </div>

                </div>
            </div>
            </div>
        )
    }
}
export default VideoBottom;