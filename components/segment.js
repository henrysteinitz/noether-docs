import classnames from 'classnames'
import { useState } from 'react'

const apiKey = "test_key"

const exampleRequest = ({ text, imageUrl, question, dataKind }, setResponse) => {
  if (dataKind === 'text') {
    fetch(`https://noether-ai.herokuapp.com/partition?text=${text}&question=${question}&api_key=${apiKey}`)
      .then((response) => response.json())
      .then(body => setResponse(body))
  } else if (dataKind === 'image_url') {
    fetch(`https://noether-ai.herokuapp.com/partition?image_url=${imageUrl}&question=${question}&api_key=${apiKey}`)
      .then((response) => response.json())
      .then(body => setResponse(body))
  }
}

const Segment = () => {
  const [text, setText] = useState(null)
  const [imageUrl, setImageUrl] = useState("https://www.cesarsway.com/wp-content/uploads/2019/09/AdobeStock_195276899.jpeg")
  const [dataKind, setDataKind] = useState("image_url")
  const [response, setResponse] = useState(null)
	return (
		<div className="page-content">
          <h1>
            /partition
          </h1>
          <div className="summary">
            <code>partition</code> accepts multimedia data and partitions it into meaningful subsets
          </div>
          <h4>
            Inputs
          </h4>
          <ul>
            <li className="list-input-output">
             <code>num_partitions : int</code>
            </li>
            <li className="list-input-output">
              One of the following data inputs:
              <ul>
                <li className="list-input-output">
                  <code>text : string</code>
                </li>
                <li className="list-input-output">
                  <code>image_url : string</code>
                </li>
                <li className="list-input-output">
                  <code>audio_url : string</code>
                </li>
                <li className="list-input-output">
                  <code>video_url : string</code>
                </li>
              </ul>
            </li>
            <li className="list-input-output">
              <code>api_key : string</code> - API key for authentication.
            </li>
          </ul>
          <h4>
            Outputs
          </h4>
          <ul>
            <li className="list-input-output"> 
              <code>partitions : obj</code> - Semantic partitions the data for sequential data (text, audio, video). For image inputs, 
              a list of masks is returned.
            </li>
          </ul>
          <div className="examples">
            <h4>
              Examples
            </h4>
            <div className="data-type-selector">
              {/*<div onClick={(e) => {
                setDataKind("text")
                setText(e.target.value)
              }}
              className={classnames("data-kind-tab", { active: dataKind === "text" })}
              disabled={dataKind === "text"}>
                text
              </div>*/}
              <div onClick={(e) => {
                setDataKind("image_url")
                setImageUrl(e.target.value)
              }}
              className={classnames("data-kind-tab", { active: dataKind === "image_url" })}
              disabled={dataKind === "image_url"}>
                image_url
              </div>
              
              {dataKind === "text" && <input type="text" value={text} onChange={(e) => setText(e.target.value)} />}
              {dataKind === "image_url" && <input type="text" value={imageUrl} onChange={(e) => setImageUrl(e.target.value)} />}

              <div className="data-preview">
                {dataKind === "text" && <div className="data-preview-text">{text}</div>}
                {dataKind === "image_url" && <img className="data-preview-image" src={imageUrl} />}
              </div>

              <button disabled className="send-call-button" onClick={() => exampleRequest({ text, imageUrl, dataKind }, setResponse)}>
                Send call to /partition
              </button>
              { 
                response &&
                <div>
                  {response["data"]}
                </div>
              }
              </div>
            </div>
        </div>
	)
}

export default Segment