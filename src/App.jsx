// import {  useEffect, useState } from 'react'
// // import reactLogo from './assets/react.svg'
// // import viteLogo from '/vite.svg'
// import './App.css'
// // function Card(obj){
// //   return(
// //     <div className='cardStyle'>{obj.num}</div>
// //   )
// // }
// function App() {

//   const [a,setA]=useState([]);
//   console.log(a);

//   const [ b , setB] =  useState("");



//   useEffect(()=>{

//     clickabc

//   },[])

//   async function clickabc  (){
    
//     let res = await fetch("https://jsonplaceholder.typicode.com/posts");
//     let data = await res.json();
//     setA(data);
//   }


//     async function hubu  (){
    
//     setB("Souvik");
//   }





//   // let [show,setShow]=useState("false");
//   // function ab(){
//   //   setShow("true");
//   // }
//   // // const [count, setCount] = useState(0)
//   // let arr=["man","woman","child","girl"];
//   // function square(para1,para2){
//   //   return(
//   //     <>
//   //       <h1>{para1}</h1>
//   //       <h1>{para2}</h1>
//   //     </>
//   //   )
//   // }

//   ////////////////////////////////////////////////////
//   return (
//     <>

//      {/* <p>{name}</p>
//      <div onClick={ab} style={{cursor:"pointer"}}>{age}</div>
//      <p>{show && show}</p>
//      <div>{arr.forEach((items,index)=>{
//       return <p key={index} >{items}</p>
//      })}</div>
//      <Card num={21}/>
//      <Card num={20}/>
//      <Card num={91}/>
//      {square("hello","world")} */}
//      {/* /////////////////////////////////////////////////////////////// */}


//     <button onClick={clickabc}>Click</button>
//     <div>{a.map((name,index)=>{
//       return (

//         <div className='babla'>
//         <ul key={index}>

//           <li>{name.id}</li>
//           <li>{name.body}</li>
//           <li>{name.userId}</li>
//           <li>{name.title}</li>

//         </ul>
//         </div>
//       )
//     })}</div>

//      {/* <p>{a}</p> */}



//      <div>
//       <h1>{b}</h1>

      
//      <button onClick={hubu}>submit</button>
//      </div>






//     </>
//   )
// }

// export default App

