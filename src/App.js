import React, { Component } from 'react';
import './App.css';
import Form from './components/Form'
import Cv from './components/Cv'
import html2canvas from 'html2canvas';
import { jsPDF } from "jspdf"

class App extends Component {
  constructor(){
    super()
    this.state = {
      data: {}
    }
    this.getData = this.getData.bind(this)
    this.getPdf = this.getPdf.bind(this)
  }

  getData = (childData) =>{
    this.setState({data: childData})
  }
  
  getPdf = (e) => {
  const input = e.target.parentElement.nextElementSibling
    html2canvas(input, { 
    scrollY: -window.scrollY,  
    logging: true, 
    height: window.outerHeight + window.innerHeight,
    windowHeight: window.outerHeight + window.innerHeight,
    useCORS: true 
})
  .then((canvas) => {
    var context = canvas.getContext('2d');
    context.webkitImageSmoothingEnabled = false;
    context.msImageSmoothingEnabled = false;
    context.imageSmoothingEnabled = false;
    const imgData = canvas.toDataURL('image/png');
    const pdf = new jsPDF();
    const imgProps= pdf.getImageProperties(imgData);
    const pdfWidth = pdf.internal.pageSize.getWidth();
    const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;
    pdf.addImage(imgData, 'PNG', 0, 0, pdfWidth, pdfHeight);
    pdf.save("download.pdf");
  })
}



  render(){
    const {data} = this.state;
  return (
    <div className="App">
       <div className="editable">
         <h1>CV Builder</h1>
         <Form getData = {this.getData}/>
         <button style={{margin: '1rem'}} name='final' onClick={this.getPdf}>PDF</button>

       </div>
       <div className="final">
        <h1>Curriculum Vitae</h1>
        <Cv dataForm={data}/>
        
        
       </div>
    </div>
  );
  }
}

export default App;


