import React from 'react';
import Thumbnail from './thumbnail';

export default class ThumbnailList extends React.Component {
  render() {
    var list = this.props.thumbnailData.map( tp => <Thumbnail {...tp} />);

    return <div>
        {list}
      </div>
  }
}
