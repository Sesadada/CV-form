import React, { Component } from 'react'

class MainInfo extends Component {
    render() {
        const {name, lastName, phone, email, address, comments} = this.props.info
        return (
            <div>                    <input name='name' type="text" placeholder='Name' 
            value={name} onChange={this.props.update}/>
            <input name='lastName' type="text" placeholder='Lastname' 
            value={lastName} onChange={this.props.update}/>
               <div className='textArea'>
                   <textarea placeholder='Introduce Yourself' name='comments' 
                   value={comments} onChange={this.props.update}>
                   </textarea>
               </div>

                   <input name='phone' type="text" placeholder='Phone Number' 
                   value={phone} onChange={this.props.update}/>
                   <input name='email' type="text" placeholder='Email' 
                   value={email} onChange={this.props.update}/>
                   <input style={{width: '40vw'}} name='address' type="text" placeholder='Address' 
                   value={address} onChange={this.props.update}/>
            </div>
        )
    }
}

export default MainInfo
