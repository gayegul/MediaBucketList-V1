'use strict';
var React = require('react');

module.exports = React.createClass({
  render: function() {
    var imageData = this.props.imageData;
    var movieData = this.props.movieData;
    var image = movieData.poster_path ? movieData.poster_path : movieData.still_path;
    var imgTag = image ? <img src={url} alt={title}/> : '';

    var url = imageData + movieData.poster_path;
    var title = !!(movieData.title) ? movieData.title : movieData.name;
    return (
      <div>
        {imgTag}
        <li>{title}</li>
        <input type="checkbox"/>
      </div>
    );
  }
});
