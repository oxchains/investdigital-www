/**
 * Created by zhanxiaojing on 2017/12/09.
 */
import React,{ Component }from 'react';
import {ROOT_URL} from '../../actions/types';

class Ourteams extends Component {
    constructor(props) {
        super(props);
        this.renderrow = this.renderrow.bind(this);
    }
    componentDidMount() {
        const $ = window.$;
        // initialization of HSScrollNav
        $.HSCore.components.HSScrollNav.init($('#js-scroll-nav'), {
            duration: 700,
            easing: 'easeOutExpo'
        });
    }

    renderrow(src, index) {
        return (
            <div className="col-6 col-lg-3 g-px-25 g-mb-50" key={index}>
                <div className="text-center">
                    <img className="u-shadow-v29 g-width-110  rounded-circle mb-5" style={{height: '110px'}}
                         src={src.src} alt="Image Description"/>
                    <h4 className="h5 g-font-weight-600 mb-1">{src.name}</h4>
                    <span className="d-block text-left ">{src.info}</span>
                </div>
            </div>
        )
    }

    render() {
        const imgLinks = [
            {
                src: `${ROOT_URL}public/img/Daniele Bernardi.png`,
                name: 'Daniele Bernardi',
                info: "负责InvestDigital商业生态的顶层设计和战略。他是一位不断寻求创新的企业家，担任Diaman SCF的创办人兼首席执行官，INVESTORS’ Magazine Italia杂志主席。他致力于开发高回报的投资战略，他提出的面向数学模型的定量方法开发等研究成果能减少投资选择中的情感因素影响及其带来的风险，从而改善结果并增加客户满意度，简化投资者和家族企业的决策过程，减少投资风险。他领导的Diaman SCF在改变客户金融工具需求和制定动态投资策略方面处于领先地位。"
            },
            {
                src: `${ROOT_URL}public/img/Hugo Gong.png`,
                name: 'Hugo Gong',
                info: "负责InvestDigital产品设计与运营。伦敦大学学院区块链研究中心研究员，中英区块链协会秘书长，伦敦大学学院金融数学博士，研究项目包括联合国食品署数字身份计划、ICO监管及挑战和用于数字货币基金的套利策略等，研究方向为算法和高频交易，包括交易策略研发和订单执行等，拥有丰富的数字货币金融产品设计经验。"
            },
            {
                src: `${ROOT_URL}public/img/Riaz Ahmad.png`,
                name: 'Riaz Ahmad',
                info: "InvestDigital首席科学家。伦敦大学学院和牛津大学客座教授，应用数学家，国际数量金融工程认证CQF的创始人和CQF Faculty负责人，研究兴趣包括金融衍生工具的数学和计算方法，特别是随机波动率、跳跃扩散模型、奇异期权和利率模型等。Ahmad教授拥有伦敦大学学院数学博士学位。"
            },
            {
                src: `${ROOT_URL}public/img/zhaohui.jpg`,
                name: '晁辉',
                info: "负责InvestDigital系统架构。资深互联网技术和产品技术管理专家。早年进入北京大学攻读理学博士学位，后离校创业。曾在雪球网担任高级总监，在阿里巴巴支付宝担任资深架构师，拥有十五年大型金融和互联网系统研发和管理经验。"
            },
            {
                src: `${ROOT_URL}public/img/zhangli.png`,
                name: '张力',
                info: "负责InvestDigital市场推广与社区建设。方正证券资产管理分公司权益投资经理，北京大学博士，量化交易专家，资深证券投资专家。证券从业经历8年，金融信息化研究经历13年，拥有丰富资产管理经验和客户资源。"
            },
            {
                src: `${ROOT_URL}public/img/wangqianfeng.png`,
                name: '王前锋',
                info: "负责InvestDigital项目投资策略和产品风控。泰康资产高级产品经理，香港中文大学金融工程硕士，智能投顾专家。曾参与沪港深投资产品、MSCI指数产品、量化策略产品等的开发和发行，著有智能投顾专著《量化大类资产配置》。"
            },
            {
                src: `${ROOT_URL}public/img/tangcong.png`,
                name: '唐聪',
                info: "负责InvestDigital区块链和密码学技术架构。北京大学理学博士，纽约大学访问学者。原北信源（300352）产品总监，区块链和分布式账本技术专家，网络和信息安全领域专家。有丰富的区块链架构设计与系统开发落地经验。主持研发供应链金融、产品追溯和医疗健康等多个行业区块链产品和应用。"
            },
            {
                src: `${ROOT_URL}public/img/menghongwei.png`,
                name: '孟宏伟',
                info: "负责InvestDigital产品架构和协议设计。北京大学理学博士，高级工程师。长期从事大型信息系统顶层设计，拥有大型系统研制和管理经验。未来互联网体系结构专家、密码学和区块链专家，对区块链架构、共识算法、智能合约有深刻理解。"
            },
            {
                src: `${ROOT_URL}public/img/huchengjian.png`,
                name: '胡成建',
                info: "负责InvestDigital区块链系统开发。高级软件工程师，北京大学工学硕士。开发了基于改进BFT共识机制的高速私有区块链（北航链），是国内最早的区块链参与者和开发人员。"
            },
            {
                src: `${ROOT_URL}public/img/liuhan.png`,
                name: '刘浛',
                info: "负责InvestDigital智能合约形式化验证。清华大学博士，加州大学戴维斯分校访问学者。主要研究领域为软件缺陷检测及漏洞分析、软件测试等。主持和负责DATE：Java程序动态分析及测试平台项目，开发了多个软件安全验证和自动化测试平台，包括Closure*工具，Tsmart-SiRi异步嵌入式系统的建模、验证工具，Tsmart-Edola同步系统集成开发平台。"
            }
        ]
        return (
            <div className="ourteam" id="ourteam" name="ourteam">
                <div className="container g-py-100">
                    <div className="navbar-nav g-font-weight-600 ml-auto">
                        <div className="" style={{textAlign: 'center'}}>
                            <h2 className="g-font-weight-400 g-font-size-24">InvestDigital的团队</h2>
                            <div className="nl-underline g-mb-30">
                                <span className="nl-style"></span>
                            </div>
                        </div>
                    </div>
                    <div className="row g-mx-minus-25 g-mb-40">
                        {imgLinks.map(this.renderrow)}
                    </div>
                </div>
            </div>
        )
    }
}
export default  Ourteams;