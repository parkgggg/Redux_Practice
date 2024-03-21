enum ActionType {
    ADD_TODO =  "ADD_TODO",
    DELETE_TODO = "DELETE_TODO"
}

interface Action {
    type: ActionType;
    text: string;
}

//상태명은 todos가 됨
const todos = (state = [], action: Action) => {
    //액션의 타입 별로 상태 처리 어떻게 해줄 것 인지(리듀서의 역할)
    //여기선 상태의 초기값이 0, 액션의 자료형은 문자열로 들어와야함
    switch (action.type) {
        //"ADD_TODO" 액션이 dispatch 되면 상태에 데이터를 업데이트
        case "ADD_TODO": 
            return [...state, action.text];
        default:
            return state;
    }
}

export default todos;
