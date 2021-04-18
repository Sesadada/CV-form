import React, { Component } from 'react'

export class CvStudy extends Component {
    render() {
        const {title, subject, year, school} = this.props.studies

        return (
            <div>
            <div className="firstLine">
           <p style={{fontWeight: "bold"}}>{title}</p>
           <p>{year}</p>
           
           </div>
           <div className="secondLine">
           <p>{subject}</p>
           <p>{school}</p>
           </div>
            </div>
        )
    }
}

export default CvStudy
