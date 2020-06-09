import React from 'react';
import './HorizonalNav.css';

const HorizontalNav = () => {
    return(
        <div className="container HorizontalNav">
            <div className="row">
                <div className="col-md-1"></div>
                <div className="col-md-11 col-sm-6">
                    <ul className="list-group list-group-horizontal horizontal-links">
                        <li className="list-group-item"><a className="current" href="javascript:void(0)">Signups</a></li>
                        <li className="list-group-item"><a href="javascript:void(0)">Investments</a></li>
                        <li className="list-group-item"><a href="javascript:void(0)">Revenue</a></li>
                        <li className="list-group-item"><a href="javascript:void(0)">Exits</a></li>
                        <li className="list-group-item"><a href="javascript:void(0)">Trades</a></li>
                    </ul>
                </div>
            </div>
        </div>

    )
}

export default HorizontalNav;