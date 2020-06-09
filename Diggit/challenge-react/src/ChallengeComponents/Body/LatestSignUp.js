import React from 'react';

const LatestSignUps = () => {
    return (
        <div>
            <div className="table-responsive">
                <table className="table">
                    <thead>
                        <tr>
                            <th colSpan="2">Latest Signups</th>
                        </tr>
                        <tr>
                            <td >Name</td>
                            <td>Scheduled Meeting</td>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td><span style={{borderLeft: '2px solid #1bfbe4', paddingRight:'5px'}}></span>David Hansen</td>
                            <td>02-03-2020 - 2 PM</td>
                        </tr>
                        <tr>
                            <td><span style={{borderLeft: '2px solid #ff56ee', paddingRight:'5px'}}></span>David Hansen</td>
                            <td>02-03-2020 - 2 PM</td>
                        </tr>
                        <tr>
                            <td><span style={{borderLeft: '2px solid #ff56ee', paddingRight:'5px'}}></span>David Hansen</td>
                            <td>02-03-2020 - 2 PM</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default LatestSignUps;