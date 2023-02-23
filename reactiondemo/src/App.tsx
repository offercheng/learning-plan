import React from 'react';
import './App.css';
import { reaction, observable, autorun } from 'mobx'

const todos = observable([
  {
    title: 'Make coffee',
    done: true
  },
  {
    title: 'Find biscuit',
    done: false
  }
])


const reaction2 = reaction(
  () => todos.map(todo => todo.title),
  titles => console.log('reaction2:', titles.join(","))
)

const autorun1 = autorun(
  () => console.log('autorun1:', todos.map(todo => todo.title).join(','))
)

todos.push({ title: 'explain reactions', done: false})
// console.log(reaction2);
// console.log(autorun1);



todos[0].title = 'Make tea'

// console.log(reaction2);
// console.log(autorun1);


function App() {
  return (
    <div>

    </div>
  );
}

export default App;
