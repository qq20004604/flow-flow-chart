/**
 * Created by 王冬 on 2020/3/23.
 * QQ: 20004604
 * weChat: qq20004604
 * 功能说明：
 *
 */
import React from 'react';
import {store} from 'common/store/index.js';

class LabelBox extends React.Component {
    render () {
        const {ItemList, SVGContainer} = store.getState();
        const {Items, FocusIndex} = ItemList;
        const item = Items[FocusIndex];
        const {width, height} = SVGContainer;
        return <div id="label-box">
            <h3 className="title">
                绘图区域属性
            </h3>
            <div>
                <div className="label">图纸宽度</div>
                <input className="input"
                       type='number'
                       value={width}
                       onChange={e => this.changeContainer('width', e.target.value, SVGContainer)}/>
            </div>
            <div>
                <div className="label">图纸高度</div>
                <input className="input"
                       type='number'
                       value={height}
                       onChange={e => this.changeContainer('height', e.target.value, SVGContainer)}/>
            </div>
            <h3 className="title">
                当前选中元素属性
            </h3>
            {
                FocusIndex === -1 ? <div>尚未选中</div> : null
            }
            {/* 单行模板 */}
            {
                FocusIndex > -1 ? (
                    <React.Fragment>
                        <div>
                            <div className="label">Y</div>
                            <input className="input"
                                   type='number'
                                   value={item.top}
                                   onChange={e => this.change('top', e.target.value)}/>
                        </div>
                        <div>
                            <div className="label">X</div>
                            <input className="input"
                                   type='number'
                                   value={item.left}
                                   onChange={e => this.change('left', e.target.value)}/>
                        </div>
                        <div>
                            <div className="label">宽度</div>
                            <input className="input"
                                   type='number'
                                   value={item.width}
                                   onChange={e => this.change('width', e.target.value)}/>
                        </div>
                        <div>
                            <div className="label">高度</div>
                            <input className="input"
                                   type='number'
                                   value={item.height}
                                   onChange={e => this.change('height', e.target.value)}/>
                        </div>
                    </React.Fragment>) : null
            }
        </div>
    }

    change = (key, v) => {
        const {Items, FocusIndex} = store.getState().ItemList
        const item = Items[FocusIndex]
        const newItem = Object.assign({}, item, {
            [key]: v
        })
        console.log(newItem)
        const newList = [
            ...Items.slice(0, FocusIndex),
            newItem,
            ...Items.slice(FocusIndex + 1)
        ]
        store.dispatch({
            type: 'updateItem',
            value: newList
        })
    }
    changeContainer = (key, val, SVGContainer) => {
        const result = Object.assign({}, SVGContainer, {
            [key]: val
        })
        store.dispatch({
            type: 'updateSVGContainer',
            value: result
        })
    }
}

export default LabelBox
