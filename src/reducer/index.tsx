import { combineReducers } from "redux";
import counter from "./counter";
import todos from "./todos";

//combineReducer로 여러 개의 Reducer를 하나로 결합시켜준다
const rootReducer = combineReducers({
    counter,
    todos
})

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>