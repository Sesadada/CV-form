import React, { Component } from 'react'

class ImageUp extends Component {
  constructor(props){
    super(props)

  this.state = {
    newImage: localStorage.getItem('recent-image') || '',
    photoUploaded: false,
  }
  this.fileUploadHandler = this.fileUploadHandler.bind(this)
  this.fileSelectedHandler = this.fileSelectedHandler.bind(this)
}

 
fileSelectedHandler = (e) => {
  const temp = e.target.files[0]
  const reader = new FileReader()
  reader.addEventListener('load', () => {
    localStorage.setItem("recent-image", reader.result)
    this.fileUploadHandler(reader.result)
    this.setState({
      newImage: reader.result,
      photoUploaded: true
    }) 
  })
  reader.readAsDataURL(temp)
  
}


fileUploadHandler = (img) => {
  if(img){
    this.props.getPic(img)
  } else {
  let recentImageUrl;
  if(this.state.newImage === ""){
  recentImageUrl = localStorage.getItem("recent-image")}
  else {
    recentImageUrl = this.state.newImage
  }
  this.setState({
    newImage: recentImageUrl
  }, ()=> this.props.getPic(this.state.newImage)) 
}
}

cancelPic = () => {
  localStorage.removeItem("recent-image")
  this.setState({
    newImage: '',
  }, ()=> this.props.getPic(this.state.newImage))
}


render() {
  
    return (
      <>
    <input style={{display: 'none'}} type='file' onChange={this.fileSelectedHandler} ref={fileInput => this.fileInput = fileInput}/>
    <button onClick={()=> this.fileInput.click()}>Pick Photo</button>
    <button onClick={()=> this.cancelPic()}>Delet Pic</button>
    </>
     );
}
    }
export default ImageUp

/*
    <button onClick={() => this.fileUploadHandler()}>Upload to CV</button>
    <img src={this.state.newImage && this.state.newImage}  alt=""/>

*/

