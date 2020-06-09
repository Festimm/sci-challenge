import React from 'react';
import './SecondHeader.css';

const secondHeader = () => {

    const style = (color) => {
        return {color: color, fontSize:'18pt'}
    }

    return (
        <div className="container-fluid SecondHeader">
            <div className="container">
                <div className="row">
                    <div className="col-md-2 col-sm-6 center">
                        <div className="dropdown">
                            <button type="button" className="btn btn-primary dropdown-toggle secondHeaderDropdownBtn" data-toggle="dropdown">
                                OVERVIEW
                            </button>
                            <div className="dropdown-menu">
                                <a class="dropdown-item" href="javascript:void(0)">Link 1</a>
                                <a className="dropdown-item" href="javascript:void(0)">Link 2</a>
                                <a className="dropdown-item" href="javascript:void(0)">Link 3</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-2 col-sm-6 center">
                        <span>Total signups</span><br /><span className="bold" style={style('#4effa1')}>648</span>
                    </div>
                    <div className="col-md-2 col-sm-6 center">
                        <span>Last Week</span><br /><span className="bold" style={style('#ff56ee')}>12</span>
                    </div>
                    <div className="col-md-2 col-sm-6 center">
                        <span>Total Investment</span><br /><span className="bold" style={style('#1bfbe4')}>102</span>
                    </div>
                    <div className="col-md-2 col-sm-6 center">
                        <span>Average Investment</span><br /><span style={style('#4effa1')}>NOK <span className="bold">345.565</span></span>
                    </div>
                    <div className="col-md-2 col-sm-6 center">
                        <span>Total exits</span><br /><span className="bold" style={style('#ff56ee')}>15</span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default secondHeader;