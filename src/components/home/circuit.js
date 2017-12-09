/**
 * Created by zhanxiaojing on 2017/12/09.
 */
import React,{ Component }from 'react';
import {connect} from 'react-redux';

class Circuit extends Component{

    renderrow(src,index){
        return (
            <li className="col-md-12 g-mb-50" key={index}>
                <div className="row">
                    <div className="col-md-3 text-md-right g-pt-20--md g-pr-40--md g-mb-20">
                        <h5 className="h6 g-font-weight-700 mb-10">{src.time}</h5>
                    </div>
                    <div className="col-md-9 g-orientation-left g-pl-40--md">
                        <article className="g-pos-rel g-bg-gray-light-v5 g-pa-30">
                            <div className="hidden-md-up u-triangle-inclusive-v1--top g-left-20 g-z-index-2">
                                <div className="u-triangle-inclusive-v1--top__back g-brd-gray-light-v5-bottom"></div>
                            </div>
                            <p className="lead g-mb-25">{src.info}</p>
                        </article>
                    </div>
                </div>
            </li>
        )
    }

    render(){
        const Links = [
            {time: '2016.06',info:"The DAO 遭攻击"},
            {time: '2016.08',info:"形式化验证工具开发"},
            {time: '2017.02',info:"InvestDigital构思"},
            {time: '2017.06',info:"技术验证"},
            {time: '2017.12',info:"基金市场Demo"},
        ]
        return(
            <section id="circuit" className="g-py-50">
                <div className="container text-center g-max-width-75 " style={{textAlign:'center'}}>
                    <h2 className="g-font-weight-400 nl-home-title g-font-size-24">线路图</h2>
                    <div className="nl-underline g-mb-15">
                        <span className="nl-style"></span>
                    </div>
                    <p className="mb-0 g-line-height-1_3 g-mb-100 hidden-sm-down g-font-size-14"></p>
                    <div className="circuit-img hidden-sm-down"></div>
                </div>
                <div className="col-lg-12 hidden-md-up">
                    <p className=" g-mb-50"></p>
                    <ul className="row u-timeline-v2-wrap list-unstyled">
                        {Links.map(this.renderrow)}
                    </ul>
                </div>
            </section>
        )
    }
}
export default  Circuit;