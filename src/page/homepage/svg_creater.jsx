/**
 * Created by 王冬 on 2020/3/23.
 * QQ: 20004604
 * weChat: qq20004604
 * 功能说明：
 * SVG要通过这个高阶组件包裹一下
 */
import React from 'react';
import {store} from 'common/store/index.js';

// 通过数据生成元素，传进来的参数是一个数据
class SvgCreater extends React.Component {
    render () {
        const {item} = this.props;
        return <g onClick={this.selectItem}>
            <image x={item.left}
                   y={item.top}
                   width={item.width}
                   height={item.height}
                   href={item.url}></image>
        </g>
    }

    selectItem = () => {
        const {item} = this.props;
        store.dispatch({
            type: 'selectItem',
            value: item
        })
    }
}

export default SvgCreater
