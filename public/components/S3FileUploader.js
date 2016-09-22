import React,{Component} from 'react';
import DropzoneComponent from 'react-dropzone';
import ReactDOMServer from 'react-dom/server'
import Dropzone from 'react-dropzone-component';
import request from 'superagent';

var uploaderStyle={
  margin:'10%',
  border:'1px solid black',
  width:'50%',
  height:'50%'
}
var thumbnail={
  height:'10%',
  width:'10%'
}


export default class S3FileUploader extends React.Component{
  constructor(props){
    super(props)
    this.state = {isUploaded:false,isUploadedVisible:false,file:{}}
  }
  componentWillMount(){
    console.log("Component will mount is called");
    if(localStorage.token == "undefined"){
      location.replace('/#loginReg');
    }
  }
  onDropAccepted(files){
    console.log("Files accepted");
  }
  onDropRejected(files){
    this.setState({isFileRejected:true})
  }
  onDrop(files){
     var that= this;
     var file = new FormData();

     file.append('file', files[0]);

    request.post('/upload')
      .send(file)
      .end(function(err, resp) {
        if (err) {

          console.error(err); }
        else{
          console.log("Response is:",resp);
          that.setState({isUploaded:true,isUploadedVisible:true,file:files[0]})
          that.props.getUrl("http://placehold.it/300x300");
          console.log("Is uploaded is:",that.state);
        }
      });




  }

  render(){
      var fileUploaded;
      var preview;
      var fileRejected;
      console.log(this.state.file)
      if(this.state.isUploadedVisible){
        if(this.state.isUploaded){
          fileUploaded= 'Files uploaded successfully ';

         preview='.././resources/ppticon.jpeg'
        }
        else{
          fileUploaded= 'Some Error occurred';
        }
      }

      if(this.state.isFileRejected){
        fileRejected="Kindly upload a file with .ppt extension"
      }

    return(
        <div>
          {fileRejected}
          <DropzoneComponent onDropAccepted={this.onDropAccepted.bind(this)} onDropRejected={this.onDropRejected.bind(this)} multiple={false} onDrop={this.onDrop.bind(this)} >
           Drop your files here or click to upload.
         </DropzoneComponent>
         {fileUploaded}

         <div><img style={thumbnail} src={preview}/></div>
        <div>{this.state.file.name}</div>
        </div>


      )
  }
}
