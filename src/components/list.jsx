var React = require('react');
var listItem = require('./listItem.jsx');

var ingredients = [{"id":1, "text":"ham"}, {"id":2, "text":"cheese"}, {"id":3, "text":"potato"}];

var list = React.create.createClass({
   render: function() {
       var listItems = ingredients.map(function(item) {
           return <listItem key={item.id} ingredient={item.text} />;
       });

       return (<ul>{listItems}</ul>);
   }
});

module.exports = list;