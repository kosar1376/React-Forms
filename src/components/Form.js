import React, { Component } from 'react';
import styles from "./Form.module.css";

class Form extends Component {
    constructor(){
        super()
        this.state={
            Firstname:"",
            LastName:"",
            PhoneNumber:"",
            BirthDate:"",
            gender:"",
            passingFileds:{
                English:false,
                ICDL:false,
                RESCUE:false
            },
            address:"",
            city:"",
            option:"Tehran",
            
        }
    }

    ChangeHandler=(event)=>{
        
   
        {this.setState({[event.target.name]:event.target.value})}
    }

     textarea=document.getElementById("aa");
     city11=document.getElementById("city1")


    submitHandler=(event)=>{
        event.preventDefault();
        
        
    }


    
   

    render() {
        const{Firstname,LastName,PhoneNumber,BirthDate,gender,passingFileds:{English,ICDL,RESCUE},address,city,option}=this.state;
       
        return (
           
                <form onSubmit={this.submitHandler}>
                <fieldset className={styles.Formcontainer}>
                <legend className={styles.legend1}>Register For Learning <span> React.js </span></legend>
                <div className={styles.nameContainer}>
                
                <label>First Name:&nbsp;
                    <input type={"text"} value={Firstname} name="Firstname" onChange={this.ChangeHandler} className={styles.name} required minLength={2} maxLength={20}/>
                </label>
                <label>LastName:&nbsp;
                    <input type={"text"} value={LastName}  name="LastName" onChange={this.ChangeHandler} className={styles.name} required minLength={2} maxLength={20}/>
                </label>
                </div><br/>
                <div className={styles.nameContainer}>
                <label>PhoneNumber:&nbsp;
                    <input type={"tel"} value={PhoneNumber} name="PhoneNumber" onChange={this.ChangeHandler} className={styles.name} required maxLength={11}/>
                </label>
                <label>BirthDate:&nbsp;
                    <input type={"date"} value={BirthDate} name="BirthDate" onChange={this.ChangeHandler} className={styles.name} required/>
                </label>
                </div><br/>
                <label>Address:&nbsp;
                    <textarea value={address} name="address" onChange={this.ChangeHandler}  className={styles.name} id={"aa"}></textarea>
                </label>
                <div className={styles.container3}>
                    <div>
                <h3 className={styles.hh3}>Gender:&nbsp;&nbsp;</h3>
                <label>man
                    <input type={"radio"} value={"man"} onChange={(event)=>{this.setState({gender:event.target.value})}} checked={gender==="man"}/>
                 
                </label>
                <label>woman
                    <input type={"radio"} value={"woman"} onChange={(event)=>{this.setState({gender:event.target.value})}} checked={gender==="woman"}/>
                </label>
                </div>

                <fieldset className={styles.checkboxContainer}>
                    <legend>passing course:</legend>
                    <label>English:
                        <input type={"checkbox"} name="English" value={English} onChange={this.ChangeHandler} />
                    </label><br/>
                    <label>ICDL:
                        <input type={"checkbox"} name="ICDL" value={ICDL} onChange={this.ChangeHandler}/>
                    </label><br/>
                    <label>RESCUE:
                        <input type={"checkbox"} name="RESCUE" value={RESCUE} onChange={this.ChangeHandler}/>
                    </label>



                </fieldset>
                </div>
               <label>Choose your city:&nbsp;
                <select value={city} onChange={this.ChangeHandler} name="city" id={"city1"}>
                    <option value={"Tehran"}>Tehran</option>
                    <option value={"Kermanshah"}>Kermanshah</option>
                    <option value={"Babol"}>Babol</option>
                    <option value={"Shiraz"}>shiraz</option>
                    <option value={"Esfahan"}>Esfahan</option>


                </select>
                <h3 className={styles.citycontainer}>You choosed:&nbsp;<span>{city}</span></h3>

                </label>

                <button type={"submit"} className={styles.submitbutton}>Submit</button>

              
                </fieldset>
                </form>
                
            
        );
    }
}

export default Form;