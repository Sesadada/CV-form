import CvJobs from './CvJob'
import CvStudy from './CvStudy'
const Cv = (props) => {
    const {comments, name, lastName, address, phone, email, pic, interests} = props.dataForm

    return (
        <main className="wrapper">
        <article className="container">
        <section className="grid-area image">
          <img className='cvImg' src={pic && pic} alt={pic && 'Your pic'}/>
        </section>
        <section className='grid-area cvName'>
        <h2 >{name} {lastName}</h2>
        <h6 className={comments && 'cvComments'}>{comments}</h6>
        </section>

        <section className='grid-area cvMainInfo'>
           <h6 style={{marginBottom: '0.5rem', fontSize: '9px'}}>{address}</h6>
           <h6 style={{marginBottom: '0.5rem', fontSize: '9px'}}>{email}</h6>
            <h6>{phone}</h6>
            </section>
        <section className="grid-area cvJobs">
        <p className='compTitle'>Experience</p>
            {
                props.dataForm?.jobs && props.dataForm.jobs.map(
                    job => <CvJobs key={job.id} jobs={job}/>)
            }
        </section>
        <section className="grid-area cvStudies">
        <p className='compTitle'>Education</p>
            {
                props.dataForm?.education && props.dataForm.education.map(
                    study => <CvStudy key={study.id} studies={study}/>)
            }
        </section>
        <section className="grid-area cvInterests">
        <p style={{marginBottom: '0.5rem', fontSize: '9px'}}>{interests}</p>
        </section>
        </article>
        </main>
    )
}

export default Cv

/*
import CvJobs from './CvJob'
import CvStudy from './CvStudy'
const Cv = (props) => {
    const {comments, name, lastName, address, phone, email, pic, interests} = props.dataForm

    return (
        <div className="container">
        <div className="image">
          <img className='cvImg' src={pic && pic} alt={pic && 'Your pic'}/>
        </div>
        <h2 className='cvName'>{name} {lastName}</h2>
        <h3 className='cvIntro' >{comments}</h3>
        <div className='cvMainInfo'>
           <h6>{address}</h6>
           <h6>{email}</h6>
            <h6>{phone}</h6>
            </div>
        <div className="cvJobs">
            {
                props.dataForm?.jobs && props.dataForm.jobs.map(job => <CvJobs key={job.id} jobs={job}/>)

            }
            </div>
            <div className="cvStudies">
            {
                props.dataForm?.education && props.dataForm.education.map(
                    study => <CvStudy key={study.id} studies={study}/>)

            }
            </div>
            <p className="cvInterests">{interests}</p>


       
        </div>
    )
}

export default Cv

*/
