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
                        <h3>随时随地，智能交易</h3>
                        <div className="nl-underline g-mb-15">
                            <span className="nl-style" style={{float:"right"}}></span>
                        </div>
                        <div>
                            <ul>
                                <li>提供多种维度排行榜，快速发现优质基金 <img src="/public/img/point.png" alt="point"/></li>
                                <li>提供用户友好图形界面，一键轻松投资全球<img src="/public/img/point.png" alt="point"/></li>
                                <li>基金认购支持多种数字货币，免除复杂流程<img src="/public/img/point.png" alt="point"/></li>
                                <li>平等开放投资交流社区，与“大咖”零距离沟通<img src="/public/img/point.png" alt="point"/></li>
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