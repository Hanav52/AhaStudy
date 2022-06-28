import 'bootstrap/dist/css/bootstrap.min.css';
import SideBar from './SideBar/SideBarMenu';
import BodyForMenu from './Body/BodyForMenu';
import SimpleAccordion from './SideBar/SimpleAccordian';
import BasicTabs from './Component/Component';



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
