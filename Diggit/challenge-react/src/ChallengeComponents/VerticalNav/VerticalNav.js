import React from 'react';
import './VerticalNav.css';


const VerticalNav = (props) => {
    return (
        <div>
            <ul className="verticalIconNav" style={{padding: '0px', listStyleType: 'none'}}>
                <li className="center verticalLI active" >
                    <a href="javascript:void(0)" className="verticalLinksIcon active">
                        <img src={props.groupIcon} />
                    </a>
                </li>

                <li className="center verticalLI" >
                    <a href="javascript:void(0)" className="verticalLinksIcon">
                        <img src={props.fundsIcon} />
                    </a>
                </li>

                <li className="center verticalLI" >
                    <a href="javascript:void(0)" className="verticalLinksIcon">
                        <img src={props.pathIcon} />
                    </a>
                </li>

                <li className="center verticalLI" >
                    <a href="javascript:void(0)" className="verticalLinksIcon">
                        <img src={props.historyIcon} />
                    </a>
                </li>

                <li className="center verticalLI" >
                    <a href="javascript:void(0)" className="verticalLinksIcon">
                        <img src={props.verificationWindowIcond} />
                    </a>
                </li>

                <li className="center verticalLI" >
                    <a href="javascript:void(0)" className="verticalLinksIcon">
                        <img src={props.lockIcon} />
                    </a>
                </li>
            </ul>
        </div>
    )
}

export default VerticalNav;