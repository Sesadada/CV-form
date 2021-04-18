import React, { Component } from 'react'

class Work extends Component {
    render() {
        const {company, year, role, city, id} = this.props.info
        const {onChange} = this.props

        return (
           <div> 
               <input name='company' type="text" placeholder='Company Name' value={company} onChange={onChange}/>
               <input name='year' type="text" placeholder='Year/s worked' value={year} onChange={onChange}/>
               <input name='role' type="text" placeholder='Role' value={role} onChange={onChange}/>
               <input name='city' type="text" placeholder='City' value={city} onChange={onChange}/>
               <input name={id} type="submit" value='Delete' className={"deletStyle"} onClick={this.props.delete}/>

           </div>
        )
    }
}

export default Work

