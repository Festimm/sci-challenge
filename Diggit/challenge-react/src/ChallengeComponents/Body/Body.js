import React from 'react';
import './Body.css';

import VerticalNav from '../VerticalNav/VerticalNav';
import LineChart from '../Chart/Line';
import DoughnutChart from '../Chart/Doughnut';
import Filter from '../Body/Filter';
import LatestSignUps from '../Body/LatestSignUp';


import fundsIcon from '../../assets/icons/funds.svg';
import groupIcon from '../../assets/icons/Group.svg';
import pathIcon from '../../assets/icons/Path.svg';
import historyIcon from '../../assets/icons/history.svg';
import verificationWindowIcon from '../../assets/icons/verification.svg';
import lockIcon from '../../assets/icons/locked.svg';

const Body = () => {
     const individuals_LinechartData = [0,9,2,5,1,3,2,11,9];
     const individuals_LinechartLabels = ["" ,"Jun'19", "Jul'19", "Aug'19", "Sep'19", "Oct'19", "Nov'19", "Dec'19",""];
     const individuals_LinechartBackground = ["#2a5f74"];
     const companies_LinechartData = [0,6,3,9,7,8,2,9,5];
     const companies_LinechartLabels = ["" ,"Jun'19", "Jul'19", "Aug'19", "Sep'19", "Oct'19", "Nov'19", "Dec'19",""];
     const companies_LinechartBackground = ["#73317e"];

     const individuals_DoughnutChartData = ["364", "284"];
     const individuals_DoughnutChartLabels = ["Comapnies", "Individuals"];
     const individuals_DoughnutChartBackgroundColor = ["#ff56ee", "#1bfbe4"];

    return(
        <div className="container mainBody">
            <div className="row">
                <div className="col-md-1" >
                    <VerticalNav fundsIcon={fundsIcon} lockIcon={lockIcon} verificationWindowIcond={verificationWindowIcon} historyIcon={historyIcon} groupIcon={groupIcon} pathIcon={pathIcon} />
                </div>

                <div className="col-md-7" >
                    <div className="bodyDiv">
                        <LineChart backgroundColor={individuals_LinechartBackground}  label="Individuals" data={individuals_LinechartData} labels={individuals_LinechartLabels} />
                    </div>

                    <div className="bodyDiv">
                        <LineChart backgroundColor={companies_LinechartBackground}  label="Companies" data={companies_LinechartData} labels={companies_LinechartLabels} />
                    </div>
                </div>

                <div className="col-md-4" >
                    <div className="bodyDiv">
                        <DoughnutChart backgroundColor={individuals_DoughnutChartBackgroundColor}  label="Total Signups" data={individuals_DoughnutChartData} labels={individuals_DoughnutChartLabels} />
                    </div>

                    <div className="bodyDiv">
                        <Filter />
                    </div>

                    <div className="bodyDiv">
                        <LatestSignUps />   
                    </div>


                </div>
            </div>

        </div>
    )
}

export default Body;