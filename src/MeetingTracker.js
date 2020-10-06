import React from 'react';
import {MeetingView} from './MeetingVeiw.js';
import './css/MeetingTracker.css';
import {useDispatch,useSelector} from 'react-redux';
import { changeView } from './actions.js';

export function MeetingTracker(props){
    var info = props.info;
    const currentView=useSelector(state=>state.currentView);
    const dispatch=useDispatch();
    return(
        <div className="Container_Info">
            <div onClick={()=>openView(info.mid)}>
                <p>{parseTime(info.startTime)+'\xa0\xa0\xa0\xa0~\xa0\xa0\xa0\xa0'+parseTime(info.endTime)}</p>
                <p>{info.room+', '+info.location}</p>
            </div>
            {currentView===info.mid&&<MeetingView key={info.mid} info={info}/>}
        </div>
    );

    function openView(id){
        dispatch(changeView(id));
    }

    
    function parseTime(time){
        var result=time.substring(5,7)+'/'+time.substring(8,10)+'/'+time.substring(0,4)+'\xa0\xa0\xa0'+time.substring(11,19);
        return result;
    }
}