import { useState } from 'react'

const exampleRequest = ({ text, imageUrl, question }, setResponse) => {
  if (text) {
    fetch(`https://noether-ai.herokuapp.com/ask?text=${text}&question=${question}`)
      .then((response) => response.json())
      .then(body => setResponse(body))
  } else if (imageUrl) {
    fetch(`https://noether-ai.herokuapp.com/ask?image_url=${imageUrl}&question=${question}`)
      .then((response) => response.json())
      .then(body => setResponse(body))
  }
}

const Ask = ({ apiUrl }) => {
  const [text, setText] = useState(null)
  const [imageUrl, setImageUrl] = useState("https://cdn.vox-cdn.com/thumbor/oCiqoTZlurIloHrG8O3cHqpBOiE=/241x193:2304x1644/1200x800/filters:focal(1034x301:1446x713)/cdn.vox-cdn.com/uploads/chorus_image/image/53741489/618916710.0.jpg")
  const [dataKind, setDataKind] = useState("image_url")
  const [question, setQuestion] = useState("What color are the letters on the players shirt?")
  const [response, setResponse] = useState(null)

	return (
		<div className="page-content">
          <h1>
          /ask
          </h1>
          <div className="summary">
          	/ask accepts audio, image, video, or text data, and a natural language question about the data. It then returns its best answer.
          </div>
          <h4>
            Inputs
          </h4>
          <ul>
            <li className="list-input-output"> 
              <code>question : string</code> - English question to ask about provided data.
            </li>
            <li className="list-input-output">
              One of the following data input parameters:
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
          </ul>
          <h4>
            Outputs
          </h4>
          <ul>
            <li className="list-input-output"> 
              <code>answer : string</code> - Best answer to the asked question.
            </li>
          </ul>
          <div className="output">
          </div>
          <div className="examples">
            <h4>
              Examples
            </h4>
            <div className="data-type-selector">
              <button onClick={(e) => {
                setDataKind("text")
                setText(e.target.value)
              }}
              disabled={dataKind === "text"}>
                text
              </button>
              <button onClick={(e) => {
                setDataKind("image_url")
                setImageUrl(e.target.value)
              }}
              disabled={dataKind === "image_url"}>
                image_url
              </button>
              
              {dataKind === "text" && <input type="text" value={text} onChange={(e) => setText(e.target.value)} />}
              {dataKind === "image_url" && <input type="text" value={imageUrl} onChange={(e) => setImageUrl(e.target.value)} />}

              <div className="data-preview">
                {dataKind === "text" && <div className="data-preview-text">{text}</div>}
                {dataKind === "image_url" && <img className="data-preview-image" src={imageUrl} />}
              </div>

              <input className="example-question-input" type="text" value={question} onChange={(e) => setQuestion(e.target.value)}/>  
              <button onClick={() => exampleRequest({ text, imageUrl, question }, setResponse)}>
                Send call to /ask
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

export default Ask