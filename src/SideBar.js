import React, {useState ,useEffect} from 'react';
import './SideBar.css';
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';
import CreateIcon from '@material-ui/icons/Create';
import SidebarOption from './SidebarOption.js';
import InsertCommentIcon from '@material-ui/icons/InsertComment';
import InboxIcon from '@material-ui/icons/Inbox';
import DraftsIcon from '@material-ui/icons/Drafts';
import BookmarkBorderIcon from '@material-ui/icons/BookmarkBorder';
import PeopleAltIcon from '@material-ui/icons/PeopleAlt';
import AppsIcon from '@material-ui/icons/Apps';
import FileCopyIcon from '@material-ui/icons/FileCopy';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import AddIcon from '@material-ui/icons/Add';
import db from './Firebase.js';

function SideBar() {
    const [channels,setchannel]=useState([]);
    useEffect(()=>{
        db.collection('room1').onSnapshot(snapshot=>(setchannel(
            snapshot.docs.map(
                doc=>({
                    id:doc.id,
                    name:doc.data().name,
                })
            )
        )));
     }, [] );
    return (
        <div className="sidebar">
            <div className="sidebar_header">
                <div className="sidebar_info">
                    <h2>Infoview Technologies</h2>
                    <h3>
                    <FiberManualRecordIcon/>
                     praveen kumar
                     </h3>
                 </div>
                <CreateIcon/>
            </div>
            <SidebarOption Icon={InsertCommentIcon} title='Thread'/>
            <SidebarOption Icon={InboxIcon} title='Mentions & reactions'/>
            <SidebarOption Icon={DraftsIcon} title='Saved Items'/>
            <SidebarOption Icon={BookmarkBorderIcon} title='Channel Browser'/>
            <SidebarOption Icon={PeopleAltIcon} title='People & user groups'/>
            <SidebarOption Icon={AppsIcon} title='Apps'/>
            <SidebarOption Icon={FileCopyIcon} title='File Browser'/>
            <SidebarOption Icon={ExpandLessIcon} title='ShowLess'/>
            <hr/>
            <SidebarOption Icon={ExpandMoreIcon} title='Channel'/>
            <hr/>
            <SidebarOption Icon={AddIcon} title='Add Channel'/>
            {channels.map(channel=>(
               <SidebarOption  title={channel.name} />
            ))}
        </div>
         )
}

export default SideBar
