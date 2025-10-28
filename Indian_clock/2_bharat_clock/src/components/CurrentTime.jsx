let CurrentTime=() =>{
    let time=new Date();
      return( <p>This is the current time is: {time.toLocaleDateString()}-{""}{time.toLocaleTimeString()}</p>

      );
};
export default CurrentTime;






