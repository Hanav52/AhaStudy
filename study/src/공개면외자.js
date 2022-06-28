import 'bootstrap/dist/css/bootstrap.min.css';
import SideBar from './SideBar/SideBarMenu';
import BodyForMenu from './Body/BodyForMenu';


function Hole() {
    return (
        <div id='page-top'>
            <div id='wrapper'>
                <SideBar/>
                <BodyForMenu/>
            </div>
        
        </div>
        );
}

export default Hole;
