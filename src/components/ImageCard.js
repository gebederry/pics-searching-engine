import React, { Component } from "react";

class ImageCard extends Component {
  constructor(props) {
    super(props);
    this.state = { spans: 0 };

    this.imageRef = React.createRef();
  }

  setSpans = () => {
    const height = this.imageRef.current.clientHeight;
    const spans = Math.ceil(height / 150);
    this.setState({ spans });
  };

  componentDidMount() {
    // 为了确保在图片下载并加载完后再获取 DOM
    this.imageRef.current.addEventListener("load", this.setSpans);
  }

  render() {
    // console.log(this.props);
    const { description, urls } = this.props.image;
    return (
      <div style={{ gridRowEnd: `span ${this.state.spans}` }}>
        <img ref={this.imageRef} alt={description} src={urls.regular} />
      </div>
    );
  }
}

export default ImageCard;
