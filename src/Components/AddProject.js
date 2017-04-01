import React, { Component } from 'react';
import uuid from 'uuid';
// import ProjectItem from './ProjectItem';

// uuid creates a unique id. the "uuid.v4()" is a function that creates it.

class AddProject extends Component {
  constructor(){
    super();
    this.state = {
      newProject:{}
    }
  }

  static defaultProps = {
    categories: ['Web Design', 'Web Development', 'Mobile Development']
  }

  handleSubmit(e){
    if(this.refs.title.value === ''){
      alert('Title is required');
    } else {
      this.setState({newProject:{
        id: uuid.v4(),
        title: this.refs.title.value,
        category: this.refs.category.value        
      }}, function(){
        // console.log(this.state);
        this.props.addProject(this.state.newProject);
      });
    }
    e.preventDefault();
  }

  render() {
    // to show options in select drop down 
    let categoryOptions = this.props.categories.map(category => {
      return <option key={category} value={category}>{category}</option>
    });

    return (
      <div>
        <h3> Add Project</h3>
        <form onSubmit={this.handleSubmit.bind(this)}>
          <div>
            <label>Title</label><br />
            <input type="text" ref="title" /> 
          </div>
          <br />
          <div>
            <label>Category</label><br />
            <select ref="category">
              {categoryOptions}
            </select> 
          </div>
          <br />
          <input type="submit" values="Submit" />
        </form>
      </div>
    );
  }
}


// validations that check to make sure the project and ondelete are the correct type.
AddProject.propTypes = {
  category: React.PropTypes.array,
  AddDelete: React.PropTypes.func
}

export default AddProject;
