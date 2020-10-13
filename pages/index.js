import Head from 'next/head'
import TodoList from '../components/TodoList'

export default function Home() {
  return (
    <div className="app">
      <Head>
        <title>Todo List</title>
      </Head>
      <nav className="navbar navbar-dark bg-dark">
        <span className="navbar-brand mb-0 h1">Todo List</span>
      </nav>
      <div className="container">
        <h1>Todo List en React</h1>
        <div className="row">
          <div className="col-6">
            <TodoList />
          </div>
        </div>
      </div>
    </div>
  )
}
