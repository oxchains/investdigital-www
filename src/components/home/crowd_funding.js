/**
 * Created by zhanxiaojing on 2017/12/27.
 */
import React,{ Component }from 'react';
import {getLocalValue} from '../common/language';

class CrowdFunding extends Component{
    constructor(props) {
        super(props);
    }
    componentDidMount() {
        const $ = window.$;
        // initialization of HSScrollNav
        $.HSCore.components.HSScrollNav.init($('#js-scroll-nav'), {
            duration: 700,
            easing: 'easeOutExpo'
        });
    }
    // crowd_funding_title:"众售说明",
    // crowd_funding_section1_name1:"项目名称:",
    // crowd_funding_section1_item1:"InvestDigital",
    // crowd_funding_section1_name2:"众售时间:",
    // crowd_funding_section1_item2:"2018年1月14日",
    // crowd_funding_section1_name3:"代币简称:",
    // crowd_funding_section1_item3:"IDC",
    // crowd_funding_section1_name4:"代币总量:",
    // crowd_funding_section1_item4:"8亿IDC",
    // crowd_funding_section1_name5:"筹集币种:",
    // crowd_funding_section1_item5:"ETH",
    // crowd_funding_section1_name6:"兑换比例:",
    // crowd_funding_section1_item6:"1:7000",
    // crowd_funding_section1_name7:"众筹目标:",
    // crowd_funding_section1_item7:"3.6亿IDC",
    // crowd_funding_section1_name8:"上限模式:",
    // crowd_funding_section1_item8:"硬顶2400万美元等值的ETH",
    //
    // crowd_funding_section2_time1:"2017.12.25",
    // crowd_funding_section2_content1:"开始私募",
    // crowd_funding_section2_time2:"2018.01.14",
    // crowd_funding_section2_content2:"开始众售",
    // crowd_funding_section2_content2_tip:"（达到硬顶后立即结束众售）",
    // crowd_funding_section2_time3:"",
    // crowd_funding_section2_content3:"众售结束",
    // crowd_funding_section2_content3_tip:"（众售结束后两周发行代币）",
    render(){

        return(
            <section id="crowd-funding" className="crowd-funding g-pt-100 g-pb-70">
                <div className="container text-center g-max-width-75" style={{textAlign:'center'}}>
                    <h2 className="g-font-weight-400 nl-home-title g-font-size-24 g-color-white">{getLocalValue("crowd_funding_title")}</h2>
                    <div className="nl-underline g-mb-15">
                        <span className="nl-style"></span>
                    </div>
                </div>

                <div className="container">
                    <div className="row g-font-weight-400" >
                        <div className="col-sm-12">
                            <div className="crowd-section1">
                                <div className="crowd-section2 g-color-white clearfix g-font-size-14">
                                    <div className="col-md-6 float-left">
                                        <div>{getLocalValue("crowd_funding_section1_name1")}{getLocalValue("crowd_funding_section1_item1")}</div>
                                        <div>{getLocalValue("crowd_funding_section1_name2")}{getLocalValue("crowd_funding_section1_item2")}</div>
                                        <div>{getLocalValue("crowd_funding_section1_name3")}{getLocalValue("crowd_funding_section1_item3")}</div>
                                        <div>{getLocalValue("crowd_funding_section1_name4")}{getLocalValue("crowd_funding_section1_item4")}</div>
                                    </div>
                                    <div className="col-md-6 float-left">
                                        <div>{getLocalValue("crowd_funding_section1_name5")}{getLocalValue("crowd_funding_section1_item5")}</div>
                                        <div>{getLocalValue("crowd_funding_section1_name6")}{getLocalValue("crowd_funding_section1_item6")}</div>
                                        <div>{getLocalValue("crowd_funding_section1_name7")}{getLocalValue("crowd_funding_section1_item7")}</div>
                                        <div>{getLocalValue("crowd_funding_section1_name8")}{getLocalValue("crowd_funding_section1_item8")}</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-12 g-color-white g-my-50">
                            <div className="col-sm-12 crowd-section3-line"></div>
                            <div className="range"></div>
                            <div className="col-sm-4 float-left crowd-section3-content">
                                <div className="pull-left">
                                    <div className="g-mb-5"><span className="dian"></span></div>
                                    <div>{getLocalValue("crowd_funding_section2_time1")}</div>
                                    <div className="g-font-size-16">{getLocalValue("crowd_funding_section2_content1")}</div>
                                </div>
                            </div>
                            <div className="col-sm-4 float-left crowd-section3-content">
                                <div className="pull-right">
                                    <div className="text-center g-mb-5"><span className="dian"></span></div>
                                    <div className="text-center">{getLocalValue("crowd_funding_section2_time2")}</div>
                                    <div className="text-center g-font-size-16">{getLocalValue("crowd_funding_section2_content2")}</div>
                                    <div className="text-center g-font-size-14">{getLocalValue("crowd_funding_section2_content2_tip")}</div>
                                </div>
                            </div>
                            <div className="col-sm-4 float-left crowd-section3-content">
                                <div className="pull-right">
                                    <div className="text-right g-mb-5"><span className="dian"></span></div>
                                    <div className="text-right">{getLocalValue("crowd_funding_section2_time3")}</div>
                                    <div className="text-right g-font-size-16">{getLocalValue("crowd_funding_section2_content3")}</div>
                                    <div className="text-right g-font-size-14">{getLocalValue("crowd_funding_section2_content3_tip")}</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}
export default CrowdFunding;