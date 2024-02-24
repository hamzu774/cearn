let CurrentTime = ()=>{
  let time = new Date();

  return <div>

<p>The Currnt Date in Pakistan is {'           '} {''} {''} {time.toDateString()}  and time is  {time.toTimeString()} </p>

  </div>
}

export default CurrentTime;