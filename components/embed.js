const Embed = () => {
	return (
		<div className="page-content">
          <h1>
          	/embed
          </h1>
          <div className="summary">
          	/embed accepts audio, image, video, or text data, and returns various float-tensor embeddings of the data. 
          	The embeddings are shared accross all data-types, meaning embeddings from different input types may be meaningfully compared.
          </div>
          <h4>
            Inputs
          </h4>
          <ul>
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
              <code>bert_embedding : array[float]</code> - BERT shared-embedding .
            </li>
          </ul>
          <div className="examples">
            <h4>
              Examples
            </h4>
            <code>coming soon</code>
          </div>
        </div>
	)
}

export default Embed