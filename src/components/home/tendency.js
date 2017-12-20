/**
 * Created by zhanxiaojing on 2017/12/20.
 */
import React,{ Component }from 'react';
import {connect} from 'react-redux';
import {getLocalValue} from '../common/language';

class Tendency extends Component{
    constructor(props) {
        super(props);
        this.state = {

        };
    }
    componentDidMount() {
    }
    render(){
        return(
            <section className="container g-pt-100 g-pb-70">
                <div className="container text-center g-max-width-75" style={{textAlign:'center'}}>
                    <h2 className="g-font-weight-400 nl-home-title g-font-size-24">{getLocalValue("tendency_title")}</h2>
                    <div className="nl-underline g-mb-15">
                        <span className="nl-style"></span>
                    </div>
                    <p className="mb-0 g-line-height-1_3 g-mb-60 g-font-size-14"></p>
                </div>

                <div className="row">

                </div>
            </section>
        )
    }
}
export default Tendency;