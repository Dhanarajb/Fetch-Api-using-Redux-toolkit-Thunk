import React,{useEffect} from 'react'
import './App.css';
import {useSelector,useDispatch} from 'react-redux'
import {getPosts} from './redux/features/postSlice';
 
function App() {
  const dispatch = useDispatch()
  const {posts,loading} =useSelector(state=>state.post)
  useEffect(()=>{
      dispatch(getPosts())
  })
  return (
    <div  className="App">
      <table border={1}>
        <tr>
          <th>Id</th>
          <th>Title</th>
          <th>Body</th>
        </tr>
        {
          posts.map((item)=>(
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.title}</td>
              <td>{item.body}</td>
            </tr>
          ))
        }
      </table>
    </div>
  );
}

export default App;
