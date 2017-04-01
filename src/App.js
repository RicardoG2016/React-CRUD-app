import React, { Component } from 'react';
import Projects from './Components/Projects';
import AddProject from './Components/AddProject';
import uuid from 'uuid';
import './App.css';
import $ from 'jquery';
import Todos from './Components/Todos';

class App extends Component {
  
  constructor(){
    super()
    this.state = {
      projects: []
    }
  }

  getTodos(){
    $.ajax({
      url: 'https://jsonplaceholder.typicode.com/todos',
      datatype: 'json',
      cache: false,
      success: function(data){
        this.setState({todos: data}, function(){
          console.log(this.state);
        });
      }.bind(this),
      error: function(xhr, status, err){
        console.log(err);
      }
    })
  };

  getProjects(){
    this.setState({projects: [
      {
        id:uuid.v4(),
        title: "Business Website",
        category: "Web Design"
      },
      {
        id:uuid.v4(),
        title: "Social App",
        category: "Mobile Dev"
      },
      {
        id:uuid.v4(),
        title: "Ecommerce Shopping Chart",
        category: "Web Development"
      }
    ]})
  };


// CREATE

// lifecycle method fires every time the component is re-rendered
// Ajax calls should happen in lifecycle methods.
  componentWillMount(){
    this.getProjects();
    this.getTodos();
  }

  componentDidMount(){
    this.getTodos();
  }


// ADD
  handleAddProject(project){
    // console.log(project);
    let projects = this.state.projects;
    projects.push(project);
    this.setState({projects:projects});
  }

// DELETE
  handleDeleteProject(id){
  // console.log(project);
  let projects = this.state.projects;
  let index = projects.findIndex(x => x.id === id);
  projects.splice(index, 1);
  this.setState({projects:projects});
  }

  render() {
    return (
      <div className="App">
        <AddProject addProject={this.handleAddProject.bind(this)} />
        <Projects projects={this.state.projects} onDelete={this.handleDeleteProject.bind(this)} />
        <hr />
        <Todos todos={this.state.todos} />
      </div>
    );
  }
}

export default App;
