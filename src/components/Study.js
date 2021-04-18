import React, { Component } from 'react'

class Study extends Component {

    render() {
        const {title, year, subject, school, id} = this.props.education

        return (
           <div> 
               <input name='title' type="text" placeholder='Title' value={title} onChange={this.props.onChange}/>
               <input name='year' type="text" placeholder='Year/s' value={year} onChange={this.props.onChange}/>
               <input name='subject' type="text" placeholder='Subject' value={subject} onChange={this.props.onChange}/>
               <input name='school' type="text" placeholder='School' value={school} onChange={this.props.onChange}/>
               <input name={id} type="submit" value='Delete' className={"deletStyle"} onClick={this.props.delete}/>

           </div>
        )
    }
}

export default Study
