//Reducer 생성

interface Action {
    type: string;
}

//상태명은 counter가 됨
const counter = (state = 0, action: Action) => {
    //액션의 타입 별로 상태 처리 어떻게 해줄 것 인지(리듀서의 역할)
    //여기선 상태의 초기값이 0, 액션의 자료형은 문자열로 들어와야함
    switch (action.type) {
        case "INCREMENT": 
            return state+1;
        case "DECREMENT":
            return state-1;
        default:
            return state;
    }
}

export default counter;