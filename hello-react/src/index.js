import React from 'react';
import ReactDOM from 'react-dom';
import Front from './homepage/front.js';
import List from './homepage/list.js'

function Room() {
  return (
    <html>
    <head>
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.0/css/bootstrap.min.css"integrity="sha384-9gVQ4dYFwwWSjIDZnLEWnxCjeSWFphJiwGPXr1jddIhOegiu1FwO5qRGvFXOdJZ4"crossorigin="anonymous"></link>
    <title>Hello</title></head>
    <div>
    <Front/>
    <List/> 
    </div>
    </html>
  );
}

ReactDOM.render(<Room />, document.getElementById('root'));
