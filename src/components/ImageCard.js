import React, { Component } from "react";

class ImageCard extends Component {
  render() {
    // console.log(this.props);
    const { description, urls } = this.props.image;
    return (
      <div>
        <img alt={description} src={urls.regular} />
      </div>
    );
  }
}

export default ImageCard;
