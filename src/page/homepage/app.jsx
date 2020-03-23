import React from 'react';
import ReactDOM from 'react-dom';
import 'common/css/reset.css';
import './style.scss';
import SVGContainer from './svg';
import LabelBox from './label_box';
import {connect, Provider} from 'react-redux';
import {MapState, store} from 'common/store/index.js';

// import $ajax from 'api/ajax.js';

const list = [
    {
        id: 0,
        top: 20,
        left: 20,
        width: 155,
        height: 155,
        url: require('@/img/冷凝器.png')
    },
    {
        id: 1,
        top: 280,
        left: 40,
        width: 140,
        height: 220,
        url: require('@/img/空气处理机.png')
    },
    {
        id: 2,
        top: 290,
        left: 200,
        width: 140,
        height: 220,
        url: require('@/img/空气处理机.png')
    },
    {
        id: 3,
        top: 230,
        left: 680,
        width: 70,
        height: 100,
        url: require('@/img/分水器.png')
    },
    {
        id: 4,
        top: 50,
        left: 280,
        width: 300,
        height: 150,
        url: require('@/img/中央空调主机.png')
    },
    {
        id: 5,
        top: 80,
        left: 130,
        width: 220,
        height: 100,
        url: require('@/img/冷却回水.png')
    },
    {
        id: 6,
        top: 315,
        left: 400,
        width: 180,
        height: 60,
        url: require('@/img/风机盘管.png')
    },
    {
        id: 7,
        top: 380,
        left: 400,
        width: 180,
        height: 60,
        url: require('@/img/风机盘管.png')
    },
    {
        id: 8,
        top: 445,
        left: 400,
        width: 180,
        height: 60,
        url: require('@/img/风机盘管.png')
    },
    {
        id: 9,
        top: 245,
        left: 565,
        width: 130,
        height: 260,
        url: require('@/img/风机管.png')
    },
    {
        id: 10,
        top: 185,
        left: 570,
        width: 80,
        height: 80,
        url: require('@/img/集水器.png')
    },
    {
        id: 11,
        top: 40,
        left: 530,
        width: 170,
        height: 220,
        url: require('@/img/冷却水（右）.png')
    },
    {
        id: 12,
        top: 225,
        left: 150,
        width: 550,
        height: 280,
        url: require('@/img/下方管道.png')
    },
]
store.dispatch({
    type: 'updateItem',
    value: list
})

class Root extends React.Component {
    state = {};

    render () {
        return <div id='app'>
            <h2 id="title">
                流程图演示（由于素材是自己PS截图下来的，所以比较简陋，见谅）
            </h2>

            <div id="box">
                <SVGContainer/>
            </div>

            <LabelBox/>
            <button onClick={this.export} className='export'>导出数据</button>
        </div>;
    }

    changeTab = (tab) => {
        this.setState({
            focusTab: tab
        });
    };

    export = () => {
        const {ItemList} = store.getState();
        const {Items} = ItemList;
        console.log(JSON.stringify(Items))
    }
}

const App = connect(MapState)(Root)
ReactDOM.render((<Provider store={store}>
        <App/>
    </Provider>),
    document.getElementById('root'));
