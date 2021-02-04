//액션 생성
export const increase = (username) => ({type:"INCREMENT", payload:username});
export const decrease = () => ({type:"DECREMENT"});

//초기 상태 생성
const initstate={
    username:"",
    number:1,
}

//액션의 결과를 걸러내는 역할
const reducer = (state = initstate,action) =>{
    switch (action.type) {
        case "INCREMENT":
            return{number : state.number+1, username:action.payload};
            //리턴되면 호출한 쪽에서 받는것이 아니라 return되는 순간 바로 UI가 변경(state가 변경됨)
        case "DECREMENT":
            return{number : state.number-1};
        default: 
            return state;
    }
}
export default reducer;  //reducer는 디폴트로 export가능
//만약 외부에서 reducer를 호출하면 최초 inistate는 초기값 number=0이며  
//action에 INCREMENT 가 날라오면 type : INCREMENT가 action에 들어오게 된고 action.type 이 INCREMENT이기 떄문에 
//해당 결과를 Return