import React, { Component }  from 'react'
import { connect } from 'react-redux'
import './App.css'
import Header from './components/Header'
import Sidebar from './components/Sidebar'
import MainContent from './components/MainContent'
import Notification from './components/Notification'
import DeleteListModal from './components/DeleteListModal'
import EditListModal from './components/EditListModal'
import EditTaskModal from './components/EditTaskModal'
import DeleteTaskModal from './components/DeleteTaskModal'
import { RootState } from './store/store'


const mapStoreToProps = (state: RootState) => ({ 
  notification: state.notification,
  listIdToDelete: state.list.listIdToDelete,
  listToEdit: state.list.listToEdit,
  taskToEdit: state.list.taskToEdit,
  taskToDelete: state.list.taskToDelete
})

type IProps = ReturnType<typeof mapStoreToProps>

class App extends Component<IProps> {
  

  render() {
    return <div className="App">
      <Header title="Task List App" subtitle="Create some lists and add some tasks to each list" />

      <div className="container px-5">
        <div className="columns">
          <Sidebar />
          <MainContent />
        </div>
      </div>

      <Notification msg={this.props.notification.message} />
      {this.props.listIdToDelete && <DeleteListModal listId={this.props.listIdToDelete} />}
      {this.props.listToEdit && <EditListModal list={this.props.listToEdit} />}
      {this.props.taskToEdit && <EditTaskModal taskToEdit={this.props.taskToEdit} />}
      {this.props.taskToDelete && <DeleteTaskModal taskToDelete={this.props.taskToDelete} />}
    </div>
  }
}



export default connect(mapStoreToProps)( App );
