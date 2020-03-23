/**
 * Created by 王冬 on 2020/3/23.
 * QQ: 20004604
 * weChat: qq20004604
 * 功能说明：
 *
 */
import React from 'react';
import SvgCreater from './svg_creater'
import {store} from 'common/store/index.js';

class SVGContainer extends React.Component {
    render () {
        const {ItemList, SVGContainer} = store.getState();
        const {Items} = ItemList;
        const {width, height} = SVGContainer
        return <svg width={width}
                    height={height}
                    className='svg-container'>
            {
                Items.map(item => <SvgCreater item={item} key={item.id}/>)
            }
        </svg>
    }
}

export default SVGContainer
