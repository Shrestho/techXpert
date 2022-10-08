import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Sidenav from '../../components/layout/Sidenav';
import QrGenerator from '../../components/QrGenerator';

function AccountRouter() {

    return (
        <Sidenav>
            <Router>
                <Routes>
                    <Route path='/account' element={<QrGenerator />} />
                </Routes>
            </Router>
        </Sidenav>
    )
}


export default AccountRouter;

if (document.getElementById('account-app')) {
    ReactDOM.render(<AccountRouter />, document.getElementById('account-app'))
}
