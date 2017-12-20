/**
 * Created by zhanxiaojing on 2017/12/09.
 */
import React,{ Component }from 'react';
import {connect} from 'react-redux';
import {getLocalValue} from '../common/language';

class Video extends Component{
    constructor(props) {
        super(props);
        this.state = {

        };
    }
    componentDidMount() {
        const $ = window.$;
        // initialization of popups
        $.HSCore.components.HSPopup.init('.js-fancybox');
    }
    render(){
        return(
            <section className="container-fluid px-0">
                <div className="dzsparallaxer auto-init height-is-based-on-content use-loading mode-scroll loaded dzsprx-readyall g-bg-cover g-bg-black-opacity-0_6--after" data-options='{direction: "fromtop", animation_duration: 25, direction: "reverse"}'>
                    {/*<div className="dzsparallaxer--target"  style={{width:'100%' , height: '200%'}} data-forcewidth_ratio="1.77">*/}
                        {/*<div className="js-bg-video g-pos-abs w-100 h-100" data-hs-bgv-type="vimeo" data-hs-bgv-id="167434033" data-hs-bgv-loop="1"></div>*/}
                    {/*</div>*/}
                    <div className="text-center g-pos-rel g-z-index-1 " style={{width:"100%",height:"auto",backgroundColor:"#FFF",fontSize:0}}>
                        <div style={{zIndex:999,backgroundColor:"#000"}}></div>
                            <video classID={"example_video_1"} className={"video-js vjs-default-skin vjs-big-play-centered "} style={{display:"block",fontSize:0}} width="100%" height="auto"  preload="auto" data-setup="{example_option:true}" poster="/public/img/bgVideo.mp4" playsInline="webkit-playsinline" loop="loop" autoPlay="autoPlay"  src="/public/img/bgVideo.mp4"  >
                            <source src="/public/img/bgVideo.mp4" type="video/mp4" />
                            </video>

                        <div className={"na"}>
                            <a className="js-fancybox d-block" title="Single Image" href="/public/img/bgVideo.mp4">
                                <span className="u-icon-v3 u-icon-size--lg g-color-black g-color-primary--hover g-font-size-20 g-rounded-50x g-cursor-pointer">
                                    <i className="g-pos-rel g-left-2 fa fa-play"></i></span>
                            </a>
                            <span className="d-block g-color-white g-font-size-20 text-uppercase g-letter-spacing-5">点击查看完整视频</span>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}
export default Video;