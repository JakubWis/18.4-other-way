var Movie = React.createClass({
  render: function() {
    var movieList = this.props.films.map(function(movie) {
        return React.createElement(MoviesList, {film: movie, key: movie.id});
    });
    return (
      React.createElement('ul', {},movieList)
    );
  }
});