import React, { Component } from 'react';

class ProjectItem extends Component {
  
  deleteProject(id){
    console.log('test')
    this.props.onDelete(id);
  }

  render() {
    return (
      <li className="Projects">
       <strong>{this.props.project.title}: {this.props.project.category} <a href="#" onClick={this.deleteProject.bind(this, this.props.project.id)}><button>Delete</button></a></strong>
      </li>
    );
  }
}

// validations that check to make sure the project and ondelete are the correct type.
ProjectItem.propTypes = {
  project: React.PropTypes.object,
  onDelete: React.PropTypes.func
}

export default ProjectItem;
