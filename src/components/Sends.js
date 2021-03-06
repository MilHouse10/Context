import React, {Component} from 'react';
import { UseSample } from '../contexts/sample';

class Sends extends Component{

    state={
        input: ''
    }

    componentDidMount() {
        //초기 값 설정
        this.setState({
            input: this.props.value,
        })
    }

    handleChange = (e) => {
        this.setState({ input: e.target.value });
    }

    handleSubmit = (e) => {
        e.preventDefault();
        //props로 받은 setValue 호출
        this.props.setValue(this.state.input);
    }

    render(){
        return(
            <form onSubmit={this.handleSubmit}>
                <input value={this.state.input} onChange={this.handleChange}/>
                <button type="submit">설정</button>
            </form>
        );
    }
}

export default UseSample(Sends);