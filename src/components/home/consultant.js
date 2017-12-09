/**
 * Created by zhanxiaojing on 2017/12/09.
 */
import React,{ Component }from 'react';
import {ROOT_URL} from '../../actions/types';
import {getLocalValue} from '../common/language';

class Consultant extends Component{
    renderrow(item,index){
        return (
            <div className="col-6 col-lg-3 g-px-25 g-mb-50" key={index}>
                <div className="text-center">
                    <img className="u-shadow-v29 g-width-110  rounded-circle mb-5" style={{height: '110px'}}
                         src={item.src} alt="Image Description"/>
                    <h4 className="h5 g-font-weight-600 mb-1">{item.name}</h4>
                    <span className="d-block text-left ">{item.info}</span>
                </div>
            </div>
        )
    }
    render(){
        const consultantlist = [
            {src:`${ROOT_URL}public/img/OracleChain.png`,name:getLocalValue("ourteam_section1_name"),info:getLocalValue("ourteam_section1_desc")},
            {src:`${ROOT_URL}public/img/Ennan Zhai.png`,name:getLocalValue("ourteam_section2_name"),info:getLocalValue("ourteam_section2_desc")},
            {src:`${ROOT_URL}public/img/guanzhi.png`,name:getLocalValue("ourteam_section3_name"),info:getLocalValue("ourteam_section3_desc")},
            {src:`${ROOT_URL}public/img/chenyu.png`,name:getLocalValue("ourteam_section4_name"),info:getLocalValue("ourteam_section4_desc")}
        ]
        return(
            <section className="g-py-50 g-pb-100">
                <div className="container text-center g-max-width-75" style={{textAlign:'center'}}>
                    <h2 className="g-font-weight-400 nl-home-title g-font-size-24">InvestDigital的顾问团队</h2>
                    <div className="nl-underline g-mb-15">
                        <span className="nl-style"></span>
                    </div>
                </div>
                <div className="container">
                    <div className="row no-gutters">
                        {consultantlist.map(this.renderrow)}
                    </div>
                </div>
            </section>
        )
    }
}
export default  Consultant;