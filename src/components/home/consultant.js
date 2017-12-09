/**
 * Created by zhanxiaojing on 2017/12/09.
 */
import React,{ Component }from 'react';
import {ROOT_URL} from '../../actions/types';
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
            {src:`${ROOT_URL}public/img/OracleChain.png`,name:"OracleChain",info:"作为全球第一个在EOS生态圈上构筑的应用，OracleChain将解决该生态的Oracle（预言机）需求，实现区块链技术服务和现实生活中的多种需求场景直接高效对接。作为一个基于EOS的去中心化的Oracle技术平台，OracleChain采用自主的PoRD机制，将现实世界数据引入区块链，并将此作为基础设施为其他区块链应用提供服务。OracleChain的使命是“让世界与区块链互联”，立志打造未来区块链世界中最高效的获取链外数据的服务提供平台。"},
            {src:`${ROOT_URL}public/img/Ennan Zhai.png`,name:"Ennan Zhai",info:"耶鲁大学博士、博士后，耶鲁大学副研究员。主要研究方向为声誉系统和大规模分布式系统，研究重点是利用分布式系统，编程语言和密码学等领域的技术构建安全可靠的计算机系统。目前工作包括使用高效、准确和深入的审计技术来提高大型分布式系统的可靠性和安全性，以及PriFi：第一个低延迟和抗跟踪的匿名通信系统。他的博士论文工作着重于构建云计算的可靠性审计系统，该系统可以主动检测可能导致云规模相关故障的深层原因和异常依赖关系。"},
            {src:`${ROOT_URL}public/img/guanzhi.png`,name:"关志",info:"北京大学副研究员，德国曼海姆大学访问学者，主要研究方向为密码学和安全协议，著名国密算法开源项目GmSSL的主要开发者和社区领袖，研发了Hyperledger Fabric国密算法套件，培养了多名区块链方向硕士研究生。在椭圆曲线加密算法性能优化与安全增强领域有丰富研究和工程实践经验。"},
            {src:`${ROOT_URL}public/img/chenyu.png`,name:"陈宇",info:"中国科学院信息工程研究所信息安全国家重点实验室副研究员、硕士生导师，主持国家自然科学基金两项。入选中国科学院青年创新促进会会员，担任中国密码学会青年工作委员会委员。主要研究方向为公钥密码学、可证明安全理论、基本密码组件等。近年在密码学领域高水平期刊Design, Codes and Cryptography等及国际会议CRYPTO、PKC、SCN等上发表学术论文多篇。"}
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