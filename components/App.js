var movies = [
  {
    id: 1,
    title: 'Harry Potter',
    desc: 'Film o czarodzieju',
    link: 'https://timedotcom.files.wordpress.com/2014/07/301386_full1.jpg'
  },
  {
    id: 2,
    title: 'Król Lew',
    desc: 'Film o królu sawanny',
    link: 'https://vignette.wikia.nocookie.net/fanowska-krol-lew/images/3/35/Kion.png/revision/latest?cb=20160202195813&path-prefix=pl'
  },
  {
    id: 3,
    title: 'Labirynt',
    desc: 'Film o zaginonym dziecku',
    link: 'https://i.iplsc.com/jake-gyllenhaal-i-hugh-jackman-w-filmie-labirynt/0004AO0CWY5RESP9-C122-F4.jpg'
  }
];

var App = React.createClass({
  render: function() {
    return (
      React.createElement('div',{},
        React.createElement(MoviesList, {films: movies})
      )
    );
  }
});