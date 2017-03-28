var Employee = React.createClass({

  render: function(){
    return (<h1> Hello world </h1>);
  }
});

var Navigation = React.createClass({


  render: function(){
    return (
     
          React.createElement("header", {className: "main-header"},
             React.createElement("a", {href: "#",className: " logo"},
              React.createElement("span", {className: " logo-lg"},
                React.createElement("b", {},this.props.children ) 
                )
              )
           )
      );
  }
});

ReactDOM.render(<Navigation >Hospital </Navigation >, document.getElementById('example'));

