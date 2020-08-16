import React from 'react';
import MarkDown from 'react-markdown'
import '@/App.less';
function App() {
  return (
    <div className="App">
      <header className="App-header">
        this is my react blog
      </header>
      <MarkDown source={'# This is a header\n\n**And this is a paragraph**'} />
    </div>
  );
}

export default App;
