import React from 'react';
import { DatePicker, message } from 'antd';
import { Link } from 'react-router';
import './App.less';
import Detail from './detail.jsx';


const App = React.createClass({
  getInitialState(){
    return {
      date: ''
    };
  },
  handleChange(value){
    message.info('你选择的日期是:' + value.toString());
    this.setState({
      date: value
    });
  },
  render(){
    return <div style={{ width:400,margin:'100px auto' }}>
      <DatePicker onChange={this.handleChange}/>
      <div style={{ marginTop:20 }}>当前日期 {this.state.date.toString()}</div>
      <Detail />
      <Link to="/from">表单</Link>
      {this.props.children}
    </div>
  }
});

export default App;
