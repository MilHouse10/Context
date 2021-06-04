import React, {Component, createContext} from 'react';

const Context = createContext(); //Context 생성

//context 안에는 provider와 consumer가 존재한다.
//이 둘은 context를 이용하기 위해 필요한 컴포넌트들이다.
const { Provider, Consumer: SampleConsumer } = Context;

//Provider에서 state를 사용하기 위해서 컴포넌트를 새로 만들어준다.
class SampleProvider extends Component{
    state = {
        value: '기본값입니다'
    }

    //actions 객체는 임의로 설정하는 객체이다.
    //나중에 함수를 하나하나 전달하지 않고 객체 하나로 한꺼번에 전달하기 위함이다.
    actions = {
        setValue: (value) => {
            this.setState({value});
        }
    }

    render(){
        const { state, actions } = this;
        //provider 내에서 사용할 값은 value 라고 부른다.
        const value = { state, actions };
        return(
            <Provider value={value}>
                {this.props.children}
            </Provider>
        )
    }
}

//HoC 를 사용
function UseSample(WrappedComponent) {
    return function UseSample(props) {
        return (
            <SampleConsumer>
                {
                    ({ state, actions }) => (
                        <WrappedComponent
                            value={state.value}
                            setValue={actions.setValue}
                        />
                    )
                }
            </SampleConsumer>
        )
    }
}

//내보내준다
export{
    SampleProvider,
    SampleConsumer,
    UseSample
};