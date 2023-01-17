import React from 'react';
import Routes from '../Routes';
import Sidebar from './Sidebar';
​
function Layout(props) {
    return (
        <div>
            <p>I'm the daddy</p>
            <div>
                <Sidebar/>
                <Routes/>
            </div>
        </div>
    );
}
​
export default Layout;