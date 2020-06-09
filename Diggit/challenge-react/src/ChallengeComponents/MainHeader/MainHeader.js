import React from 'react';
import './MainHeader.css';


const mainHeader = (props) => {

    const style = {
        paddingTop: '20px'
    }

    return (
        <div className="container-fluid mainHeader">
            <div className="container" style={{paddingRight: '0px'}}> 
                <nav className="navbar navbar-expand-lg" >
                    <a className="navbar-brand" href="javascript:void(0)"><img className="appLogo" src={props.logo} alt="Logo" /></a>

                    <button className="navbar-toggler navbar-toggler-right mobileNavIcon" type="button" data-toggle="collapse" data-target="#navb">
                        <span>Navigation</span>
                    </button>

                    <div className="collapse navbar-collapse" id="navb">
                        <ul className="navbar-nav mr-auto">

                        </ul>
                        <div className="my-2 my-lg-0" style={{paddingRight: '30px'}}>
                            <ul className="navbar-nav mr-auto">
                                <li className="nav-item">
                                    <a className="nav-link" href="javascript:void(0)">Account</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="javascript:void(0)">Charts</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="javascript:void(0)">Help</a>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className="my-2 my-lg-0 mainHeaderUser">
                        <div className="row">
                            <div className="col-md-1">
                                <img src={props.avatar} alt="Profile Picture" className="profilePicture" />
                            </div>
                            <div className="col-md-6" className="authorName">
                                Elsa Andersen
                            </div>
                            <div className="col-md-5" className="authorDesc" >
                                17-02-2020 <br/>2.45 PM
                            </div>
                        </div>
                        {/* <ul className="list-unstyled">
                            <li className="media">
                                <img src={props.avatar} alt="Profile Picture" />
                            </li>
                        </ul> */}
                    </div>

                </nav>

                

            </div>
            
        </div>
    );
}

export default mainHeader;