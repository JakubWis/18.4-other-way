var Movie = React.createClass({
  render: function() {
    return (
      	React.createElement('li', {},
      		React.createElement(MovieTitle, {title: this.props.film.title},),
      		React.createElement(MovieDescription, {desc: this.props.film.desc},),
      		React.createElement(MoviePoster, {link: this.props.film.link},)
      		)
    );
  }
});