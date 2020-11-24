export const Action=Object.freeze({
    loadMeetings:'loadMeetings',
    loadUser:'loadUser',
    showLoginError:'showLoginError',
    changeView:'changeView',
    userLogout:'userLogout',
    changeOption:'changeOption',
    changePage:'changePage',
    loadCandidate:'loadCandidate',
    loadParticipant:'loadParticipant',
    loadLocation:'loadLocation',
    loadMessage:'loadMessage',
    removeMeeting:'removeMeeting',
    insertMessage:'insertMessage',
});

function loadMeetings(meetings){
    return{
        type:Action.loadMeetings,
        payload:meetings,
    };         
}

function loadUser(user){
    return{
        type:Action.loadUser,
        payload:user,
    };
}

function showLoginError(){
    return{
        type:Action.showLoginError,
    };
}

function loadCandidate(candidate){
    return{
        type:Action.loadCandidate,
        payload:candidate,
    };
}

function loadParticipant(participant){
    return{
        type:Action.loadParticipant,
        payload:participant,
    };
}

function loadLocation(location){
    return{
        type:Action.loadLocation,
        payload:location,
    };
}

function loadMessage(message){
    return{
        type:Action.loadMessage,
        payload:message,
    };
}

function removeMeeting(id){
    return{
        type:Action.removeMeeting,
        payload:id,
    };
}

function insertMessage(message){
    return{
        type:Action.insertMessage,
        payload:message,
    };
}

export function changeView(id){
    return{
        type:Action.changeView,
        payload:id,
    };
}

export function userLogout(){
    return{
        type:Action.userLogout,
    };
}

export function changeOption(option){
    return{
        type:Action.changeOption,
        payload:option,
    };
}

export function changePage(page){
    return{
        type:Action.changePage,
        payload:page,
    };
}

//const host='http://138.68.20.45:8080';
const host='http://localhost:8080';
export function findAllMeetings(){
    return dispatch=>{
        fetch(`${host}/getAllMeetings`)
        .then(response=>response.json())
        .then(data=>{
            dispatch(loadMeetings(data));
        })
        .catch(error=>console.log(error));
    };
};

export function findUser(email,password){
    return dispatch=>{
        fetch(`${host}/getUser/${email}/${password}`)
        .then(response=>response.json())
        .then(data=>{
            if(password===data.upassword){
                dispatch(loadUser(data));
                dispatch(findMeetingsByUserId(data.uid));
            }
            else{
                dispatch(showLoginError());
            }
        })
        .catch(error=>console.log(error));
    };
};

export function findMeetingsByUserId(id){
    return dispatch=>{
        fetch(`${host}/getMeetingsByUserId/${id}`)
        .then(response=>response.json())
        .then(data=>{
            dispatch(loadMeetings(data));
        })
        .catch(error=>console.log(error));
    };
}

export function createMeeting(userList,startTime,endTime,lid){
    var status=0;
    var feedback=null;
    const meeting={userList,startTime,endTime,lid,status,feedback};
    const options ={
        method: 'POST',
        headers:{
            'Content-Type': 'application/json',
        },
        body:JSON.stringify(meeting),
    }
    fetch(`${host}/insertMeeting`, options)
    .catch(error=>console.log(error));
}

export function deleteMeeting(mid){
    return dispatch=>{
        const options ={
            method: 'DELETE',
            headers:{
                'Content-Type': 'application/json',
            },
        }
        fetch(`${host}/deleteMeeting/${mid}`, options)
        .then(()=>{
            dispatch(removeMeeting(mid));
        })
        .catch(error=>console.log(error));
    };
}

export function createAccount(uname,email,upassword,phoneNumber,type){
    const user={uname,email,upassword,phoneNumber,type}
    const options ={
        method:'POST',
        headers:{
            'Content-Type': 'application/json',
        },
        body:JSON.stringify(user),
    }
    fetch(`${host}/insertUser`,options)
    .catch(error=>console.log(error));
}

export function findCandiate(){
    return dispatch=>{
        fetch(`${host}/getCandidate`)
        .then(response=>response.json())
        .then(data=>{
            dispatch(loadCandidate(data));
        })
        .catch(error=>console.log(error));
    };
}

export function findParticipant(){
    return dispatch=>{
        fetch(`${host}/getParticipant`)
        .then(response=>response.json())
        .then(data=>{
            dispatch(loadParticipant(data));
        })
        .catch(error=>console.log(error));
    };
}

export function findLocation(){
    return dispatch=>{
        fetch(`${host}/getLocation`)
        .then(response=>response.json())
        .then(data=>{
            dispatch(loadLocation(data));
        })
        .catch(error=>console.log(error));
    };
}

export function findMessage(id){
    return dispatch=>{
        fetch(`${host}/getMessage/${id}`)
        .then(response=>response.json())
        .then(data=>{
            dispatch(loadMessage(data));
        })
        .catch(error=>console.log(error));
    };
}

export function addMessage(b_id,u_name,m_body,postTime){
    return dispatch=>{
        const message={b_id,u_name,m_body,postTime}
        const options ={
            method:'POST',
            headers:{
                'Content-Type': 'application/json',
            },
            body:JSON.stringify(message),
        }
        fetch(`${host}/insertMessage`,options)
        .then(response=>response.json())
        .then(data=>{
            dispatch(insertMessage(data));
        })
        .catch(error=>console.log(error));
    };
}