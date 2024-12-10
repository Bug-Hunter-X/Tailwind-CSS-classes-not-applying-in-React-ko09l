```javascript
// bugSolution.js
import {useState} from 'react';
import '../styles.css'; // Import your Tailwind stylesheet

function App() {
  const [count,setCount] = useState(0);
  return (
    <div className="p-4">
      <button onClick={()=>setCount(count+1)} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
        Add
      </button>
      <p>Count:{count}</p>
    </div>
  );
}
export default App;
```