import React, { Component } from 'react'
import Work from './Work'
import Study from './Study'
import MainInfo from './MainInfo'
import ImageUp from './ImageUp'

class Form extends Component {
    constructor(props){
        super(props)
        this.state = {
            pic: '',
            name: '',
            lastName: '',
            comments: '',
            address: '',
            email: '',
            phone: '',
            interests: '',
            jobs: [{
                id: 1,
                company: '',
                year: '',
                role: '',
                city: ''
            }],
            education: [{
                id: 1,
                title: '',
                year: '',
                subject: '',
                school: ''
            }]
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
        this.cancelInfo = this.cancelInfo.bind(this)
        this.addInfo = this.addInfo.bind(this)
        this.updateState = this.updateState.bind(this)
        this.getPic = this.getPic.bind(this)
    }

    handleChange = (e) => {
      this.setState({
          [e.target.name]: e.target.value,
      }, () => this.props.getData(this.state))
    }

    updateState = (e, id, list) => {   
        e.preventDefault()
        const elementsIndex = this.state[list].findIndex(obj => obj.id === id )
        let newArray = [...this.state[list]]
        newArray[elementsIndex] = {...newArray[elementsIndex], [e.target.name]: e.target.value}
        this.setState({
            [list]: newArray,
            }, () => this.props.getData(this.state));   
    }

    addInfo = (e, list, bp) => {
        e.preventDefault()
        let n;
        if(this.state[list][this.state[list].length -1]){
        n = (this.state[list][this.state[list].length -1].id) + 1}
        else {n = 1}
        const final = {...bp, id: n}
        this.setState({[list]: [...this.state[list], final
    ]});
    this.props.getData(this.state);
    }

    cancelInfo = (e, list) => {
        e.preventDefault()
        const actualId = parseInt(e.target.name)
        const final = this.state[list].filter(obj => obj.id !== actualId)
        this.setState({
            [list]: final,
            }, () => this.props.getData(this.state)
            );
    }

    handleSubmit = (e) => {
        e.preventDefault()
        this.props.getData(this.state);
    }  

    getPic = (childData) =>{
        this.setState({pic: childData})
        console.log(this.state)
        if(this.state.pic !== ''){
            this.props.getData(this.state)
        }
      }

    render() {
        const {jobs, education} = this.state

        const addStyle = {
            borderRadius: '3px', 
            width: '40vw', 
            backgroundColor:'rgb(171, 171, 230)', 
            border: 'none', 
            height: '2rem'
        }
        const bluePrint = [
            {
                id: '',
                company: '',
                year: '',
                role: '',
                city: ''
            },
            {
                id: '',
                title: '',
                year: '',
                subject: '',
                school: ''
            }
        ]
        return (
            <form onSubmit={this.handleSubmit}>
               <div className='mainInfo'>
                 <MainInfo info= {this.state} update={this.handleChange}/> 
               </div>
               <div className="imgBtn">
               <ImageUp getPic={this.getPic}/>
               </div>
               <div className="jobs">
                 <label>{jobs.length === 1? 'Your Actual Job':'Your Jobs'}</label>
                 {
                  jobs.map(job => <Work key={job.id} delete={(e) => this.cancelInfo(e, "jobs")} 
                  info={job} onChange={(e) => this.updateState(e, job.id, "jobs")}/>)
                 }
                 <button style={addStyle} onClick={(e) => this.addInfo(e, "jobs", bluePrint[0])}>Add Job</button>
               </div>

               <div className="education">
               <label>Your studies</label>
               {
                  education.map(edu => <Study key={edu.id} delete={(e) => this.cancelInfo(e, "education")} 
                  education={edu} onChange={(e) => this.updateState(e, edu.id, "education")}/>)
                 }
                 <button style={addStyle} onClick={(e) => this.addInfo(e, "education", bluePrint[1])}>Add Education</button>

               </div>
               <div className="interests">

               </div>
               <div className='textArea'>
                   <textarea placeholder='Your interests' name='interests' 
                   value={this.state.interests} onChange={this.handleChange}>
                   </textarea>
               </div>

            </form>
        )
    }
}

export default Form


/*old
               <button className="submit" type='submit'>Submit</button>

    handleJob = (e, id) => {
        e.preventDefault()
        const elementsIndex = this.state.jobs.findIndex(job => job.id === id )
        let newArray = [...this.state.jobs]
        newArray[elementsIndex] = {...newArray[elementsIndex], [e.target.name]: e.target.value}
        this.setState({
            jobs: newArray,
            }, () => this.props.getData(this.state));   
    }

    ///////////////////

handleEdu = (e, id) => {
    e.preventDefault()
    const elementsIndex = this.state.education.findIndex(job => job.id === id )
    let newArray = [...this.state.education]
    newArray[elementsIndex] = {...newArray[elementsIndex], [e.target.name]: e.target.value}
    this.setState({
        education: newArray,
        }, () => this.props.getData(this.state));   
}


-----

    addJob = (e) => {
        e.preventDefault()
        let n;
        if(this.state.jobs[this.state.jobs.length -1]){
        n = (this.state.jobs[this.state.jobs.length -1].id) + 1}
        else {n = 1}
        this.setState({jobs: [...this.state.jobs, {
            id: n ,
            company: '',
            year: '',
            role: '',
            city: ''
        }
    ]});
    this.props.getData(this.state);
    }


    ///////


addEdu = (e) => {
    e.preventDefault()
    let n;
    if(this.state.education[this.state.education.length -1]){
    n = (this.state.education[this.state.education.length -1].id) + 1}
    else {n = 1}
    this.setState({education: [...this.state.education, {
        id: n,
        title: '',
        year: '',
        subject: '',
        school: ''
    }
]});
this.props.getData(this.state);
}

    handleJobDelete = (e) => {
        e.preventDefault()
        const jobId = parseInt(e.target.name)
        const final = this.state.jobs.filter(job => job.id !== jobId)
        this.setState({
            jobs: final,
            }, () => this.props.getData(this.state)
            );
    }

cancelEdu = (e) => {
    e.preventDefault()
    const eduId = parseInt(e.target.name)
    const final = this.state.education.filter(study => study.id !== eduId)
    this.setState({
        education: final,
        }, () => this.props.getData(this.state)
        );
}
    */



