var React = require("react");

var style = {
  textField: {
    width: '100%',
    height: '7em',
    marginTop: '50px'
  },
  button: {
    width: '100%',
    height: '7em',
    marginTop: '100px'
  }
}

var Main = React.createClass({
  getInitialState: function() {
      return {
        textValue: "initial value"
      };
  },
  handleChange: function(event) {
   this.setState({value: event.target.value});
  },
  onClick: function(event) {
    if(this.state.value != ""){
      var color = ['red', 'blue', 'green', 'yellow', 'black'];
      var font = Math.floor( Math.random() * 300 );
      var l = Math.floor( Math.random() * 500 );
      var t = Math.floor( Math.random() * 500 );
      var c = Math.floor( Math.random() * 5 );

      firebase.database().ref('posts/').set({
        message: this.state.value,
        position: {
            color: color[c],
            fontSize: font,
            left: l,
            position: "fixed",
            top: t
        }
      });
      this.setState({value: ""});
    }
  },
  render:function(){
    return (
    <div>
      <input
        type="text"
        value={this.state.value}
        onChange={this.handleChange}
        style={style.textField}
      />
      <button onClick={this.onClick} style={style.button}>おしてね</button>
    </div>
    );
  }
});

module.exports = Main;
