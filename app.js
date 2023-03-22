const heading = React.createElement('h1', { id: 'heading' }, [
  React.createElement('h2', { id: 'child1' }, 'Hello World from ReactJS'),
  React.createElement('h2', { id: 'child2' }, 'Hello World again from ReactJS'),
]);

console.log(heading); //javascript object

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(heading);
