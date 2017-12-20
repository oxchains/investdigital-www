/**
 * Created by zhanxiaojing on 2017/12/09.
 */
import React,{ Component }from 'react';
import {getLocalValue} from '../common/language';

class Investor extends Component{
    constructor(props) {
        super(props);
    }
    componentDidMount() {
        const $ = window.$;

        $('.masonry-grid').imagesLoaded().then(function () {
            $('.masonry-grid').masonry({
                columnWidth: '.masonry-grid-sizer',
                itemSelector: '.masonry-grid-item',
                percentPosition: true
            });
        });
    }
    render(){

        return(
            <section className="investor g-pt-100 g-pb-70">
                <div className="container text-center g-max-width-75" style={{textAlign:'center'}}>
                    <h2 className="g-font-weight-400 nl-home-title g-font-size-24">{getLocalValue("investor_title")}</h2>
                    <div className="nl-underline g-mb-15">
                        <span className="nl-style"></span>
                    </div>
                    <p className="mb-0 g-line-height-1_3 g-mb-60 g-font-size-14"></p>
                </div>

                <div className="row content">
                    <img style={{margin:"auto"}} src="/public/img/investor1.jpg" alt=""/>
                    <p className="col-sm-12 text-center">inblockchain</p>
                </div>
            </section>
        )
    }
}
export default Investor;