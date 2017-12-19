/**
 * Created by zhanxiaojing on 2017/12/09.
 */
import React,{ Component }from 'react';
import {connect} from 'react-redux';
import {getLocalValue} from '../common/language';

class New extends Component{
    constructor(props) {
        super(props);
        this.state = {

        };
    }

    render(){

        return(
            <div className="g-bg-secondary">
                <div className="container g-pt-100 g-pb-70">
                    <div className="container text-center g-max-width-75" style={{textAlign:'center'}}>
                        <h2 className="g-font-weight-400 nl-home-title g-font-size-24 ">{getLocalValue("news_title")}</h2>
                        <div className="nl-underline g-mb-15">
                            <span className="nl-style"></span>
                        </div>
                        <p className="mb-0 g-line-height-1_3 g-mb-100 g-font-size-14 g-color-white"></p>
                    </div>
                    <div className="masonry-grid row">
                        <div className="masonry-grid-item col-sm-12 col-lg-8 g-mb-30">
                            <article className="row align-items-stretch no-gutters u-shadow-v21 u-shadow-v21--hover g-transition-0_3 shad">
                                <div className="col-md-6 g-rounded-left-5">
                                    <div className="g-pa-60">
                                        <ul className="list-inline g-color-gray-dark-v4 g-font-weight-600 g-font-size-12">
                                            <li className="list-inline-item mr-0">Alex Teseira</li>
                                            <li className="list-inline-item mx-2">&#183;</li>
                                            <li className="list-inline-item">2017年6月5日</li>
                                        </ul>
                                        <h2 className="h5 g-color-black g-font-weight-600 mb-4">
                                            <a className="u-link-v5 g-color-black g-color-primary--hover g-cursor-pointer" href="#">我们正在进行巡回演讲</a>
                                        </h2>
                                        {/*<p className="g-color-gray-dark-v4 g-line-height-1_8 mb-4">我们正在进行巡回演讲</p>*/}
                                        <p className="g-color-gray-dark-v4 g-line-height-1_8 mb-4">唐聪博士为深圳市互金协会主办金融科技第一期专题培训会授课。</p>
                                        <ul className="list-inline g-font-size-12 mb-0">
                                            <li className="list-inline-item g-mb-10">
                                                <a className="u-tags-v1 g-color-blue g-bg-blue-opacity-0_1 g-bg-blue--hover g-color-white--hover g-rounded-50 g-py-4 g-px-15" href="#">详情</a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="col-md-6 g-bg-size-cover g-bg-pos-center g-min-height-300 g-rounded-right-5" style={{width:500,height:400}}></div>
                            </article>
                        </div>
                        <div className="masonry-grid-item col-sm-6 col-lg-4 g-mb-30">
                            <article className="u-shadow-v21 u-shadow-v21--hover g-transition-0_3 shad">
                                <div className="img-fluid w-100 g-rounded-top-5" style={{width:400,height:270}}></div>
                                <div className=" g-pa-30 g-rounded-bottom-5">
                                    <ul className="list-inline g-color-gray-dark-v4 g-font-weight-600 g-font-size-12">
                                        <li className="list-inline-item mr-0">Alex Teseira</li>
                                        <li className="list-inline-item mx-2">&#183;</li>
                                        <li className="list-inline-item">2017年6月5日</li>
                                    </ul>
                                    <h2 className="h5 g-color-black g-font-weight-600 mb-4">
                                        <a className="u-link-v5 g-color-black g-color-primary--hover g-cursor-pointer" href="#">独家访问InvestDigital的首席顾问</a>
                                    </h2>
                                    <ul className="list-inline g-font-size-12 mb-0">
                                        <li className="list-inline-item g-mb-10">
                                            <a className="u-tags-v1 g-color-blue g-bg-blue-opacity-0_1 g-bg-blue--hover g-color-white--hover g-rounded-50 g-py-4 g-px-15" href="#">详情</a>
                                        </li>
                                    </ul>
                                </div>
                            </article>
                        </div>
                        <div className="masonry-grid-item col-sm-6 col-lg-4 g-mb-30 clearfix" >
                            <article className="u-shadow-v21 u-shadow-v21--hover g-transition-0_3 shad">
                                <div className="img-fluid w-100 g-rounded-top-5" style={{width:400,height:270}}></div>
                                <div className=" g-pa-30 g-rounded-bottom-5">
                                    <ul className="shad list-inline g-color-gray-dark-v4 g-font-weight-600 g-font-size-12">
                                        <li className="list-inline-item mr-0">Alex Teseira</li>
                                        <li className="list-inline-item mx-2">&#183;</li>
                                        <li className="list-inline-item">2017年6月5日</li>
                                    </ul>
                                    <h2 className="h5 g-color-black g-font-weight-600 mb-4">
                                        <a className="u-link-v5 g-color-black g-color-primary--hover g-cursor-pointer" href="#">互联网大会宣传</a>
                                    </h2>
                                    <ul className="list-inline g-font-size-12 mb-0">
                                        <li className="list-inline-item g-mb-10">
                                            <a className="u-tags-v1 g-color-blue g-bg-blue-opacity-0_1 g-bg-blue--hover g-color-white--hover g-rounded-50 g-py-4 g-px-15" href="#">详情</a>
                                        </li>
                                    </ul>
                                </div>
                            </article>
                        </div>
                        <div className="masonry-grid-item col-sm-12 col-lg-8 g-mb-30">
                            <div className="masonry-grid-item col-sm-6 col-lg-6 g-mb-30" style={{marginTop:-20}}>
                                <article className=" g-transition-0_3  text-center g-rounded-5 g-pa-5 g-py-10" style={{backgroundColor:"#DBE8FA"}}>
                                    <h4 className="h3 g-color-blue g-font-weight-600 ">顶尖的数字货币智能交易平台</h4>
                                </article>
                            </div>
                            <article className="row shad align-items-stretch no-gutters u-shadow-v21 u-shadow-v21--hover g-transition-0_3">
                                <div className="col-md-6  g-rounded-left-5" style={{paddingTop:150}}>
                                    <div className="g-pa-30">
                                        <ul className="list-inline g-color-gray-dark-v4 g-font-weight-600 g-font-size-12">
                                            <li className="list-inline-item mr-0">Alex Teseira</li>
                                            <li className="list-inline-item mx-2">&#183;</li>
                                            <li className="list-inline-item">2017年6月5日</li>
                                        </ul>

                                        <h2 className="h5 g-color-black g-font-weight-600 mb-4">
                                            <a className="u-link-v5 g-color-black g-color-primary--hover g-cursor-pointer" href="#">我们正在进行巡回演讲</a>
                                        </h2>
                                        <p className="g-color-gray-dark-v4 g-line-height-1_8 mb-4">孟宏伟博士应邀为深圳市区块链协会与深圳市防伪协会授课。</p>

                                        <ul className="list-inline g-font-size-12 mb-0">
                                            <li className="list-inline-item g-mb-10">
                                                <a className="u-tags-v1 g-color-blue g-bg-blue-opacity-0_1 g-bg-blue--hover g-color-white--hover g-rounded-50 g-py-4 g-px-15" href="#">详情</a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="col-md-6 g-bg-size-cover g-bg-pos-center g-min-height-300 g-rounded-right-5" style={{width:500,height:400}}></div>
                            </article>

                        </div>




                    </div>
                </div>
            </div>
        )
    }
}
export default New;