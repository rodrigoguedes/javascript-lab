var React = require('react')
var ThumbnailList = require('./thumbnail-list')

var options = {
  thumbnailData : [{
    title: 'Show Courses',
    number: 12,
    header: 'Learn React',
    description: 'Test descriptions React',
    imageUrl: 'https://raw.githubusercontent.com/wiki/facebook/react/react-logo-1000-transparent.png'
  },{
    title: 'Show Courses',
    number: 25,
    header: 'Learn Gulp',
    description: 'Test descriptions Gupl',
    imageUrl: 'http://brunch.io/images/others/gulp.png'
  }]
};

var element = React.createElement(ThumbnailList, options);

ReactDOM.render(
  element,
  example
);
