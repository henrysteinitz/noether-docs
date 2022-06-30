import { useState } from 'react'
import classnames from 'classnames'

const apiKey = "test_key"

const exampleRequest = ({ text, imageUrl, question, dataKind }, setResponse) => {
  if (dataKind === 'text') {
    fetch(`https://noether-ai.herokuapp.com/summary?text=${text}&question=${question}&api_key=${apiKey}`)
      .then((response) => response.json())
      .then(body => setResponse(body))
  } else if (dataKind === 'image_url') {
    fetch(`https://noether-ai.herokuapp.com/summary?image_url=${imageUrl}&question=${question}&api_key=${apiKey}`)
      .then((response) => response.json())
      .then(body => setResponse(body))
  }
}

const noetherText = "Noether's mathematical work has been divided into three \"epochs\".[6] In the first (1908–1919), she made contributions to the theories of algebraic invariants and number fields. Her work on differential invariants in the calculus of variations, Noether's theorem, has been called \"one of the most important mathematical theorems ever proved in guiding the development of modern physics\".[7] In the second epoch (1920–1926), she began work that \"changed the face of [abstract] algebra\".[8] In her classic 1921 paper Idealtheorie in Ringbereichen (Theory of Ideals in Ring Domains), Noether developed the theory of ideals in commutative rings into a tool with wide-ranging applications. She made elegant use of the ascending chain condition, and objects satisfying it are named Noetherian in her honor. In the third epoch (1927–1935), she published works on noncommutative algebras and hypercomplex numbers and united the representation theory of groups with the theory of modules and ideals. In addition to her own publications, Noether was generous with her ideas and is credited with several lines of research published by other mathematicians, even in fields far removed from her main work, such as algebraic topology."

const Summary = () => {
  const [text, setText] = useState(noetherText)
  const [imageUrl, setImageUrl] = useState("https://robbreport.com/wp-content/uploads/2018/12/large-9956-mclaren720sgt3tomakefirstpublicappearanceinbahrain.jpg?w=1000")
  const [dataKind, setDataKind] = useState("image_url")
  const [response, setResponse] = useState(null)
	return (
		<div className="page-content">
          <h1>
            /summary
          </h1>
          <div className="summary">
            <code>summary</code> accepts audio, image, video, or text data, and returns a short text summary of the data. 
          </div>
          <h4>
            Inputs
          </h4>
          <ul>
            <li className="list-input-output">
              One of the following data inputS:
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
              <code>summary : text</code> - Summary/caption of the data
            </li>
          </ul>
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
                setDataKind("image_url")
              }}
              className={classnames("data-kind-tab", { active: dataKind === "image_url" })}
              disabled={dataKind === "image_url"}>
                image_url
              </div>
              
              {dataKind === "text" && <textarea placeholder="text" className="example-input-text" type="text" value={text} onChange={(e) => setText(e.target.value)}>{text}</textarea>}
              {dataKind === "image_url" && <input type="text" value={imageUrl} onChange={(e) => setImageUrl(e.target.value)} />}

              <div className="data-preview">
                {dataKind === "image_url" && <img className="data-preview-image" src={imageUrl} />}
              </div>

              <button className="send-call-button" onClick={() => exampleRequest({ text, imageUrl, dataKind }, setResponse)}>
                Send call to /summary
              </button>
              { 
                response &&
                <div>
                  {response["data"][0]["summary"]}
                </div>
              }
              </div>
            </div>
        </div>
	)
}

export default Summary