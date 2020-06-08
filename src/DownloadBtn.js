import React from 'react'
import './DownloadBtn.css'
const DownloadBtn = (props) => {
  return (
    <div>
      <center>
        <button class="btn"><i class="fa fa-download"></i><a href={props.Img}> Download</a></button>
      </center>
    </div>
  )
}
export default DownloadBtn
