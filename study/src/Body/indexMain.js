import 'bootstrap/dist/css/bootstrap.min.css';
import SideBar from '../SideBar/SideBarMenu';
import '../css/sb-admin-2.min.css';
import ContentBody from './Content';

function IndexMain() {
  return (
    <div id='page-top'>
        <div id='wrapper'>
            <SideBar/>
            <ContentBody/>
        </div>

    </div>
    );
}

export default IndexMain;
