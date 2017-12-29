/**
 * Created by zhanxiaojing on 2017/12/09.
 */
import React,{ Component }from 'react';
import {ROOT_URL} from '../../actions/types';
import {getLocalValue} from '../common/language';

class Partner extends Component{
    constructor(props) {
        super(props);
    }
    // componentDidMount() {
    //     const $ = window.$;
    //
    //     $('.masonry-grid').imagesLoaded().then(function () {
    //         $('.masonry-grid').masonry({
    //             columnWidth: '.masonry-grid-sizer',
    //             itemSelector: '.masonry-grid-item',
    //             percentPosition: true
    //         });
    //     });
    // }
    render(){

        return(
            <section className=" g-pt-100 g-pb-70">
                <div className="container text-center g-max-width-75" style={{textAlign:'center'}}>
                    <h2 className="g-font-weight-400 nl-home-title g-font-size-24">{getLocalValue("partner_title")}</h2>
                    <div className="nl-underline g-mb-15">
                        <span className="nl-style"></span>
                    </div>
                    <p className="mb-0 g-line-height-1_3 g-mb-60 g-font-size-14"></p>
                </div>

                <div className="container">
                    <div className="row">
                        <div className="col-lg-3 col-sm-12 text-center g-py-10">

                            <img style={{margin:"auto"}} src={`${ROOT_URL}/public/img/partner-1.jpg`} alt="1"/>
                        </div>
                        <div className="col-lg-3 col-sm-12 text-center g-py-10">
                            <img style={{margin:"auto"}} src={`${ROOT_URL}/public/img/partner-2.jpg`} alt="2"/>
                        </div>
                        <div className="col-lg-3 col-sm-12 text-center g-py-10">
                            <img style={{margin:"auto"}} src={`${ROOT_URL}/public/img/partner-3.jpg`} alt="3"/>
                        </div>
                        <div className="col-lg-3 col-sm-12 text-center g-py-10">
                            <img style={{margin:"auto"}} src={`${ROOT_URL}/public/img/partner-4.jpg`} alt="4"/>
                        </div>
                        <div className="col-lg-3 col-sm-12 text-center g-py-10">
                            <img style={{margin:"auto"}} src={`${ROOT_URL}/public/img/partner-5.jpg`} alt="5"/>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}
export default Partner;