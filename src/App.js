import React, { useState } from 'react'

function App(){
    let [ counter, changeCounter ] = useState(1)
    window.changeCounter = changeCounter
    return (
      <di>
      <h1>this little number is {counter}</h1>
      <h3>okay why? {counter}</h3>
      </di>
      )
}

export default App;


