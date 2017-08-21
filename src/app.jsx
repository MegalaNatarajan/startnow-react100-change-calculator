import React, { Component } from 'react';

class App extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
     twenties: 0,
     tens: 0,
     fives: 0,
     ones: 0,
     quarters: 0,
     dimes: 0,
     nickels: 0,
     pennies: 0,
     amountDue: '',
     amountReceived: '',
     changeDue : 0,
    }
  }
  
  changeDue(event){
    this.setState({
      amountDue:event.target.value,
    
    });
  }
  changeReceived(event){
    this.setState({
     
      amountReceived:event.target.value,
    })
  }
  
  result(){
    let changeDue =0;
    let amountDue=0; 
    let amountReceived=0;
    
    amountDue = this.state.amountDue;
    amountReceived = this.state.amountReceived;
    //const amountDue = $('#amountDue').val();  
    //const amountReceived = $('#amountReceived').val();
    
    changeDue = parseFloat(amountReceived) - parseFloat(amountDue);
    const dollars = Math.floor(changeDue);
    const twenty = Math.floor(dollars/20);
    const ten = Math.floor((dollars%20)/10);
    const five = Math.floor(((dollars%20)%10)/5);
    const one = Math.floor(((dollars%20)%10)%5);
    const cents = Math.round((changeDue % 1) * 100);
    const quarters = Math.floor(cents/25);
    const dimes = Math.floor((cents%25)/10);
    const nickels = Math.floor(((cents%25)%10)/5);
    const pennies = Math.floor(((cents%25)%10)%5);
    if (parseFloat(amountReceived) > parseFloat(amountDue)){
     //$('#pTotal').prepend("The total change due is ");
      //$('#pTotal').html();
      //}
     this.setState({
      twenties: twenty,
      tens: ten,
      fives: five,
      ones: one,
      quarters: quarters,
      dimes: dimes,
      nickels: nickels,
      pennies: pennies,
      changeDue:changeDue.toFixed(2),
     });
     $('#total').css("background", "#8cf2b8");
     //$('#pTotal').text("The total change due is $"+changeDue.toFixed(2));
    } 
    else {
      const additional = parseFloat(amountDue) - parseFloat(amountReceived);
      $('#total').css("background", "red");
      $('#pTotal').text("Additional money owed $"+additional);
      this.setState({
       
        twenties:'0',
        tens:'0',
        fives:'0',
        ones:'0',
        quarters:'0',
        dimes:'0',
        nickels:'0',
        pennies:'0',
      });  
    }
  }


  render() {
    const styObj = {color:"white",fontSize:20}
    return (
    <div>  
     <header style={styObj}>Change Calculator</header>
      <div className="container" style={{width:"35%",float:"left"}}>
      <div className="panel-default row" style={{width:"100%"}}>
       <div className="panel-heading col-xs-4" style={{width:"100%"}}>
         <label>Enter Information</label>
       </div>
      </div>
    <div className="panel-default row" style={{width:"100%"}}>
      <div className="panel-body col-xs-4" style={{width:"100%",background:"white"}}>
       <span>How much is due?</span>
       <input type="textbox" value={this.state.amountDue} onChange={this.changeDue.bind(this)} name="amountDue" id="amountDue" className="form-control"></input>
       <span>How much was received?</span>
       <input type="textbox" value={this.state.amountReceived} onChange={this.changeReceived.bind(this)} name="amountReceived" id="amountReceived" className="form-control"></input>
       <button className="btn btn-primary btn-md" onClick={this.result.bind(this)}>Calculate</button>
      </div>
    </div>
    </div>
    <div className="container" style={{float:"left",width:"60%",background:"white"}}>
    <div className="panel-default row" style={{width:"100%"}}>
     <div className="alert alert-success col-xs-8" id="total" style={{width:"100%",background:"#8cf2b8",marginTop:5,marginLeft:15}}>
       <p id="pTotal">The total change due is ${this.state.changeDue}</p>
     </div>
    </div> 
    <div className="panel-default row" style={{width:"100%",height:100,marginTop:10,marginLeft:5}} >
      <div className="well col-md-1" style={{width:"22%",float:"left"}}>
       <h5 style={{textAlign:"center"}}>Twenties</h5>
       <p className="lead">{this.state.twenties}</p>
      </div>
      <div className="well col-md-1" style={{width:"22%",float:"left"}}>
      <h5 style={{textAlign:"center"}}>Tens</h5>
       <p className="lead">{this.state.tens}</p>
      </div>
      <div className="well col-md-1" style={{width:"22%",float:"left"}}>
      <h5 style={{textAlign:"center"}}>Fives</h5>
       <p className="lead">{this.state.fives}</p>
      </div>
      <div className="well col-md-1" style={{width:"22%",float:"left"}} >
      <h5 style={{textAlign:"center"}}>Ones</h5>
       <p className="lead">{this.state.ones}</p>
      </div>
    </div> 
    <div className="panel-default row" style={{width:"100%",height:100,marginTop:5,marginLeft:5}}>
      <div className="well col-md-1" style={{width:"22%",float:"left"}}>
      <h5 style={{textAlign:"center"}}>Quarters</h5>
       <p className="lead">{this.state.quarters}</p>
      </div>
      <div className="well col-md-1" style={{width:"22%",float:"left"}}>
      <h5 style={{textAlign:"center"}}>Dimes</h5>
       <p className="lead">{this.state.dimes}</p>
      </div>
      <div className="well col-md-1" style={{width:"22%",float:"left"}}>
      <h5 style={{textAlign:"center"}}>Nickels</h5>
       <p className="lead">{this.state.nickels}</p>
      </div>
      <div className="well col-md-1" style={{width:"22%",float:"left"}}>
      <h5 style={{textAlign:"center"}}>Pennies</h5>
       <p className="lead">{this.state.pennies}</p>
      </div>
    </div>   
    </div> 
    </div> 
    );
  }
}

export default App;
