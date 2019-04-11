import React, { Component } from "react";
import { createProject } from "store/actions/projectActions";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";

class CreateProject extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      content: ""
    };
  }
  handleChange = e => {
    // console.log(e.target.id);
    this.setState({
      [e.target.id]: e.target.value
    });
  };
  handleSubmit = e => {
    // console.log(e);
    e.preventDefault();
    // console.log(this.state);
    this.props.createProject(this.state);
    this.props.history.push("/");
  };
  render() {
    const { auth } = this.props;
    if (!auth.uid) return <Redirect to="/signin" />;
    return (
      <div className="container">
        <form onSubmit={this.handleSubmit} className="white">
          <h5 className="grey-text text-darken-3">Creacte new project</h5>
          <div className="input-field">
            <label>Title</label>
            <input type="text" id="title" onChange={this.handleChange} />
          </div>
          <div className="input-field">
            <label>Content Project</label>
            <textarea
              id="content"
              className="materialize-textarea"
              onChange={this.handleChange}
            />
          </div>
          <div className="input-field">
            <button className="btn pink lighten-1 z-depth-0">Create </button>
          </div>
        </form>
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    auth: state.firebase.auth
  };
};

const mapDispatchToProps = dispatch => {
  return {
    createProject: project => dispatch(createProject(project))
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CreateProject);
