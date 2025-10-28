function TodoItem2(){
let todoName="Go to the college";
let todoDate="4/10/2023";




return(
<div className="container text-center">
    <div className="row">
      <div className="col-6">
        {todoName}
      </div>
      <div className="col-4">
        {todoDate}
      </div>
      <div className="col-2"><button type="button" className="btn btn-outline-warning">Add</button></div>
    </div>
</div>
);


}
export default TodoItem2;

