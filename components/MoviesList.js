var MoviesList = React.createClass({
  render: function() {
    var film = this.props.films.map(function(movie) {
        return React.createElement(Movie, {film: movie, key: movie.id});
    });
    return (
      React.createElement('ul', {},film)
    );
  }
});