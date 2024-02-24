import 'bootstrap/dist/css/bootstrap.css';

function List(){
  let fooditem = ["Dal","Sabzi","Chicken","Mutton","Beef","Fish"]
 // let fooditem =[];
 //let msg = fooditem.length === 0 ? <h3>I am Still hungery</h3> : null ;

  return <>

  <h1>Menu Items</h1>

  
  <ul className='list-group'>
   {fooditem.length === 0  && <h3>I am Still hungery</h3>}

    {fooditem.map((item) =>{
      return <li className='list-group-item'>{item}</li>
    })}


  </ul>
  
  </>

}
export default List;