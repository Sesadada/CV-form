import React, { Component } from 'react'

class CvJob extends Component {
    render() {
        const {company, role, year, city} = this.props.jobs

        return (
            <div>
            <div className='firstLine'>
           <p style={{fontWeight: "bold"}} >{company}</p>
           <p >{year}</p>
           </div>
           <div className='secondLine'>
           <p>{role}</p>
           <p>{city}</p>
           </div>
            </div>
        )
    }
}

export default CvJob
