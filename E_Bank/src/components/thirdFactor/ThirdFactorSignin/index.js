import React from 'react';
import { Redirect } from 'react-router';
import {robotID} from '../ThirdFactorRegistration/Card';
import  Card from '../ThirdFactorRegistration/Card';
import {FactorComponentContainer,FactorHeadline,VerifyButton,Answer,
    Question, RobotComponentWrapper,QuestionComponentWrapper,QuestionHeadline} from '../ThirdFactorRegistration/thirdFactorelements';
import {robotSignin} from '../data';
import {Questions} from '../questions';

class index extends React.Component{
    constructor(props){
        super(props);
        this.state={
            robots:[],
            valid:false,
            questionID:'',
            question:'',
            answer:'',
            count:0
        }
    }
    componentDidMount(){
        fetch("https://jsonplaceholder.typicode.com/users")
            .then(response=>response.json())
            .then(data=>{
                this.setState({robots:data});               
            })
            .then(()=>{
                fetch(`http://localhost:3000/fetchQuestionID/${this.props.user.id}`)
                    .then(response=>response.json())
                    .then(data=>{
                        this.setState({questionID:data})
                        Questions.forEach((q,i)=>{
                            if(q.qid===data){
                                this.setState({question:q.question});
                            }
                        })
                    })
            })
    }
    onValueChange=(event)=>{
        this.setState({answer:event.target.value});
    }
    verifyThirdFactorInfo=()=>{
        fetch(`http://localhost:3000/thirdFactorSignin/${this.props.user.id}`,{
            method:'POST',
            headers:{'Content-Type':'application/json'},
            body:JSON.stringify({
                robots:robotID,
                answer:this.state.answer.toLowerCase()
            })
        })
        .then(response=>response.json())
        .then(data=>{
            if(data){
                this.setState({valid:data})
            }
            else{
                alert('You have chosen the wrong set of details');
                this.setState({count:0,valid:false});
                robotID.length=0;
            }
        })
        .catch(err=>console.log(err))
    }
    render(){
        const CardArray=this.state.robots.map((r,i)=>{
            return <Card key={i} id={r.id} name={r.name} maxRobots={robotSignin.maxRobots} phno={this.props.user.phno} count={this.state.count} />
        })
        
        return(
            <FactorComponentContainer>

                <FactorHeadline>{robotSignin.headline}</FactorHeadline>
                    <RobotComponentWrapper>
                    {CardArray}  
                    </RobotComponentWrapper>  
                    <QuestionHeadline>Answer this personal question</QuestionHeadline> 
                    <QuestionComponentWrapper>
                        <Question>{this.state.question}</Question>
                        <Answer placeholder='Enter your answer' type="text" onChange={this.onValueChange} id='answer'/>
                    </QuestionComponentWrapper>
 
                <VerifyButton onClick={this.verifyThirdFactorInfo}>Verify</VerifyButton>
                {
                    this.state.valid ? <Redirect to='/home' /> : <Redirect to='/thirdFactorSignin' />
                }
            </FactorComponentContainer>
        )
    };
}
export default index;