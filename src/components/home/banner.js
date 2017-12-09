/**
 * Created by zhanxiaojing on 2017/12/09.
 */
import React,{ Component }from 'react';
import {ROOT_URL} from '../../actions/types';

class Banner extends Component{
    constructor(props) {
        super(props);
        this.state = {current: ''};
    }

    componentDidMount() {
        const $ = window.$;
        // initialization of scroll animation
        $.HSCore.components.HSHeader.init($('#js-header'));

    }
    render(){
        return(
            <div>
                <div className="g-overflow-hidden banner">
                        <section className="g-flex-centered g-bg-pos-center g-bg-img-hero g-py-150" style={{backgroundImage: "url(/public/img/banner.png)"}} data-calc-target="#js-header">
                            <div className="banner-con text-center g-color-white">
                                <div className="h4 d-inline-block  g-brd-2 g-font-size-40  g-font-weight-600  g-pb-5">InvestDigital</div>
                                <div className="g-font-size-20">数字货币一站式投资服务平台</div>
                                <div className="g-pt-20 banner-des">
                                    <div className="g-font-size-18 nl-main">InvestDigital是什么？</div>
                                    <span className="nl-style-sm"></span>
                                    <div className="g-font-size-14">InvestDigital是实现在EOS区块链上的数字资产管理协议和工具集，
                                        打造从内容/工具生产，到投资策略，再到金融产品的完整生态</div>
                                </div>
                                <a href="#" className="btn btn-md u-btn-outline-blue g-mr-10 g-mb-15 g-mt-20">白皮书</a>

                            </div>

                            <div className="container text-center g-z-index-1">
                                <div className="g-mb-50"
                                     data-animation="fadeInUp"
                                     data-animation-delay="200"
                                     data-animation-duration="1500">
                                    <a className="js-fancybox-media rounded-circle u-icon-v2 g-font-size-20 g-color-white g-bg-black g-brd-black g-bg-primary--hover g-brd-primary--hover g-text-underline--none--hover"
                                       data-open-effect="fadeIn"
                                       data-close-effect="fadeOut"
                                       data-open-speed="1000"
                                       data-close-speed="1000">
                                        <i className="g-pos-rel g-left-2 hs-icon hs-icon-play"></i>
                                    </a>
                                </div>
                                <div className="g-mb-25"
                                     data-animation="fadeInUp"
                                     data-animation-delay="500"
                                     data-animation-duration="1500">
                                    <h2 className="h4 d-inline-block g-brd-bottom g-brd-2 g-brd-black g-color-black g-font-weight-600 text-uppercase g-pb-5">Unify bootstrap template</h2>
                                </div>
                                <h3 className="g-color-black g-font-weight-700 g-font-size-40 g-font-size-55--md text-uppercase g-mb-40"
                                    data-animation="fadeInUp"
                                    data-animation-delay="800"
                                    data-animation-duration="1500">
                                    We are creative company
                                </h3>
                                <div
                                    data-animation="fadeInUp"
                                    data-animation-delay="1100"
                                    data-animation-duration="1500">
                                    <a className="btn btn-lg u-btn-outline-black g-font-weight-600 g-font-size-13 text-uppercase g-rounded-50 mx-2 g-px-25 g-py-15 g-mb-20" href="#">Discover More</a>
                                    <a className="btn btn-lg u-btn-primary g-font-weight-600 g-font-size-13 text-uppercase g-rounded-50 mx-2 g-px-25 g-py-15 g-mb-20" href="#">Purchase Now</a>
                                </div>
                            </div>
                        </section>
                </div>
            </div>

        )
    }
}
export default  Banner;