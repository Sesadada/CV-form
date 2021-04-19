import CvJobs from './CvJob'
import CvStudy from './CvStudy'
const Cv = (props) => {
    const {comments, name, lastName, address, phone, email, pic, interests} = props.dataForm

    const classChecker = (w, empty, full) => {
        if (!props.dataForm[w]) {
          return empty
        } else if(props.dataForm[w]){
           let checkEmpty = props.dataForm[w][0]
           const ar = Object.getOwnPropertyNames(checkEmpty)
            if(!(checkEmpty[ar[1]] ||checkEmpty[ar[2]] ||checkEmpty[ar[3]] ||checkEmpty[ar[4]])) {
                return empty
            } 
                return full
        }
    }

    return (
        <main className="wrapper">
        <article className="container">
        <section className="grid-area image">
         <div className={pic? null : "picStyle"}>
          <img className='cvImg' src={pic && pic} alt={pic && 'Your pic'}/>
          <br/><br/>
          {!pic && 'Your Pic'}
          <br/>
          {!pic && 'Here'}
          </div> 
        </section>
        <section className='grid-area cvName'>
        <h2> {!name && 'Your name here'}{name} {lastName}</h2>
        <h6 className={!comments? "emptyIntro":'cvComments'}>
        {!comments && 'Your introduction here'}{comments}
        </h6>
        </section>

        <section className={!(phone||address||email)? "emptyInfo":'grid-area cvMainInfo'} >
        {!(phone||address||email) && 'Your info here'}
           <h6 style={{marginBottom: '0.5rem', fontSize: '9px'}}>{address}</h6>
           <h6 style={{marginBottom: '0.5rem', fontSize: '9px'}}>{email}</h6>
            <h6>{phone}</h6>
            </section>
        <section className={classChecker('jobs', 'emptyJobs', 'grid-area cvJobs')}>
        <p className='compTitle'>Experience</p>
            {
                props.dataForm?.jobs && props.dataForm.jobs.map(
                    job => <CvJobs key={job.id} jobs={job}/>)
            }
        </section>
        <section className={classChecker('education', 'emptyStudies', 'grid-area cvStudies')}>
        <p className='compTitle'>Education</p>
            {
                props.dataForm?.education && props.dataForm.education.map(
                    study => <CvStudy key={study.id} studies={study}/>)
            }
        </section>
        <section className={!interests? "emptyInterests":"grid-area cvInterests"} >
        {!interests && 'Your Interests here'}
        <p style={{marginBottom: '0.5rem', fontSize: '9px'}}>{interests}</p>
        </section>
        </article>
        </main>
    )
}

export default Cv
