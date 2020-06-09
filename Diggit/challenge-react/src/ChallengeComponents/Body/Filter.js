import React from 'react';

const Filter = () => {
    return (
        <div className="row">
            <div className="col-md-3">
                <span style={{ color: '#99aabb', fontWeight: '500', borderLeft: '2px solid #4effa1', paddingLeft: '5px' }}>By Gender</span>
            </div>
            <div className="col-md-3" >
                <select className="selectFormFilter">
                    <option value="Male">Male</option>
                    <option value="Female" selected>Female</option>
                </select>
            </div>
            <div className="col-md-3" >
                <select className="selectFormFilter">
                    <option value="Individuals" selected>Individuals</option>
                    <option value="Comapnies" >Comapnies</option>
                </select>
            </div>
            <div className="col-md-3 center" >
                <span style={{ color: '#41d187', fontWeight: '500' }}>102</span>
            </div>
        </div>
    )
}

export default Filter;
