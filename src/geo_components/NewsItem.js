// the problem is in the class newsitem
import React, { Component } from 'react'

export class NewsItem extends Component {

  render() {
    let { title, description, imageUrl, newsUrl } = this.props;
    return (
<>
      <div className='my-3'>
        <div className="card" style={{ width: "18rem" }}>
          <img src={!imageUrl?"http://ichef.bbci.co.uk/ace/branded_weather/1200/cpsprodpb/b5ad/live/3dff2be0-fb60-11ef-a79f-495dc9a11716.jpg":imageUrl} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">  {title} ...</h5>
            <p className="card-text">{description}...</p>
            <a href={newsUrl} target="_blank"    className="btn btn-sm btn-primary">READ MORE</a>
          </div>
        </div>
      </div>
      </>
    )
  }
}

export default NewsItem
