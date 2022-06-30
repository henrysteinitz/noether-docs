import { useState } from 'react'
import classnames from 'classnames'

const apiKey = "test_key"

const exampleRequest = ({ text, imageUrl, documentUrl, question, dataKind }, setResponse) => {
  if (dataKind === "text") {
    fetch(`https://noether-ai.herokuapp.com/ask?text=${text}&question=${question}&api_key=${apiKey}`)
      .then((response) => response.json())
      .then(body => setResponse(body))
  } else if (dataKind === "image_url") {
    fetch(`https://noether-ai.herokuapp.com/ask?image_url=${imageUrl}&question=${question}&api_key=${apiKey}`)
      .then((response) => response.json())
      .then(body => setResponse(body))
  } else if (dataKind === "document_url") {
    fetch(`https://noether-ai.herokuapp.com/ask?document_url=${documentUrl}&question=${question}&api_key=${apiKey}`)
      .then((response) => response.json())
      .then(body => setResponse(body))
  }
}

const noetherText = "Noether's mathematical work has been divided into three \"epochs\".[6] In the first (1908–1919), she made contributions to the theories of algebraic invariants and number fields. Her work on differential invariants in the calculus of variations, Noether's theorem, has been called \"one of the most important mathematical theorems ever proved in guiding the development of modern physics\".[7] In the second epoch (1920–1926), she began work that \"changed the face of [abstract] algebra\".[8] In her classic 1921 paper Idealtheorie in Ringbereichen (Theory of Ideals in Ring Domains), Noether developed the theory of ideals in commutative rings into a tool with wide-ranging applications. She made elegant use of the ascending chain condition, and objects satisfying it are named Noetherian in her honor. In the third epoch (1927–1935), she published works on noncommutative algebras and hypercomplex numbers and united the representation theory of groups with the theory of modules and ideals. In addition to her own publications, Noether was generous with her ideas and is credited with several lines of research published by other mathematicians, even in fields far removed from her main work, such as algebraic topology."

const Ask = ({ apiUrl }) => {
  const [text, setText] = useState(noetherText)
  const [imageUrl, setImageUrl] = useState("https://cdn.vox-cdn.com/thumbor/oCiqoTZlurIloHrG8O3cHqpBOiE=/241x193:2304x1644/1200x800/filters:focal(1034x301:1446x713)/cdn.vox-cdn.com/uploads/chorus_image/image/53741489/618916710.0.jpg")
  const [documentUrl, setDocumentUrl] = useState("https://data.unhcr.org/images/documents/big_aa2c81585e808b644ef70587136c23601d33a2e9.jpg")
  const [dataKind, setDataKind] = useState("image_url")
  const [question, setQuestion] = useState("What color are the letters on the players shirt?")
  const [response, setResponse] = useState(null)

	return (
		<div className="page-content">
          <h1>
          /ask
          </h1>
          <div className="summary">
          	<code>ask</code> accepts audio, image, video, document, or text data, and a natural language question about the data. It then returns its best answer.
          </div>
          <h4>
            Inputs
          </h4>
          <ul>
            <li className="list-input-output">
              One of the following data inputs:
              <ul>
                <li className="list-input-output">
                  <code>text : string</code>
                </li>
                <li className="list-input-output">
                  <code>document_url : string</code>
                </li>
                <li className="list-input-output">
                  <code>image_url : string</code>
                </li>
                <li className="list-input-output">
                  <code>audio_url : string</code> (coming soon)
                </li>
                <li className="list-input-output"> 
                  <code>video_url : string</code> (coming soon)
                </li>
              </ul>
            </li>
            <li className="list-input-output"> 
              <code>question : string</code> - English question to ask about provided data.
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
              <div onClick={(e) => {
                setDataKind("text")
              }}
              className={classnames("data-kind-tab", { active: dataKind === "text" })}
              disabled={dataKind === "text"}>
                text
              </div>
              <div onClick={(e) => {
                setDataKind("document_url")
              }}
              className={classnames("data-kind-tab", { active: dataKind === "document_url" })}
              disabled={dataKind === "document_url"}>
                document_url
              </div>
              <div onClick={(e) => {
                setDataKind("image_url")
              }}
              className={classnames("data-kind-tab", { active: dataKind === "image_url" })}
              disabled={dataKind === "image_url"}>
                image_url
              </div>
           
              <br />
              {dataKind === "text" && <textarea placeholder="text" className="example-input-text" type="text" value={text} onChange={(e) => setText(e.target.value)}>{text}</textarea>}
              {dataKind === "document_url" && <input placeholder="document_url" className="example-input-image-url" type="text" value={documentUrl} onChange={(e) => setDocumentUrl(e.target.value)} />}
              {dataKind === "image_url" && <input placeholder="image_url" className="example-input-image-url" type="text" value={imageUrl} onChange={(e) => setImageUrl(e.target.value)} />}

              <div className="data-preview">
                {dataKind === "image_url" && <img className="data-preview-image" src={imageUrl} />}
                {dataKind === "document_url" && <img className="data-preview-image" src={documentUrl} />}
              </div>

              <input className="example-question-input" type="text" value={question} onChange={(e) => setQuestion(e.target.value)}/>  
              <button className="send-call-button" onClick={() => exampleRequest({ text, imageUrl, documentUrl, question, dataKind }, setResponse)}>
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