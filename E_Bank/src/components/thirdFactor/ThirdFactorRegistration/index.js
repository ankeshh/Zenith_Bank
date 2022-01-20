import React from 'react';
import { Redirect } from 'react-router';
import {FactorComponentContainer,FactorHeadline,RobotComponentWrapper,
    QuestionOption,QuestionSelect,Answer, QuestionComponentWrapper, 
    QuestionHeadline, VerifyButton} from './thirdFactorelements';
import Card from './Card'
import {robotID,robotName} from './Card';
import {robotRegistration} from '../data';
import {Questions} from '../questions';

class index extends React.Component{
    constructor(props){
        super(props);
        this.state={
            robots:[],
            questionID:'',
            answer:'',
            valid:false,
            count:0
        }
    }
    componentDidMount(){
        fetch("https://jsonplaceholder.typicode.com/users")
            .then(response=>response.json())
            .then(data=>{
                this.setState({robots:data});               
            })
    }
    onValueChange=(event)=>{
        const id=event.target.id;
        const value=event.target.value;
        this.setState({[id]:value});
    } 
    registerthirdFactorInfo=()=>{
            fetch(`http://localhost:3000/thirdFactorRegistration/${this.props.user.id}`,{
                method:'POST',
                headers:{'Content-Type':'application/json'},
                body:JSON.stringify({
                    robots:robotID,
                    robotNames:robotName,
                    questionID:this.state.questionID,
                    answer:this.state.answer.toLowerCase()
                })
            })
            .then(response=>response.json())
            .then(data=>{
                if(data){
                    this.setState({valid:true});
                }
            })
            .catch(err=>{
                console.log(err);
            })
    }
    render(){
        const CardArray=this.state.robots.map((r,i)=>{
            return <Card key={i} id={r.id} name={r.name} maxRobots={robotRegistration.maxRobots}  phno={this.props.user.phno}  />
        });
        const QuestionArray=Questions.map((q,i)=>{
            return <QuestionOption key={i} value={q.qid}>{q.question}</QuestionOption>
        });
        return(
            <FactorComponentContainer>
                <FactorHeadline>{robotRegistration.headline}</FactorHeadline>
                    <RobotComponentWrapper>
                        {CardArray}
                    </RobotComponentWrapper>
                    <QuestionHeadline>Please choose a personal question</QuestionHeadline>
                    <QuestionComponentWrapper>
                        <QuestionSelect onChange={this.onValueChange} defaultValue={'DEFAULT'} name='questions' id='questionID'>Choose a question:
                            <QuestionOption value="DEFAULT" disabled >Select your question</QuestionOption>
                            {QuestionArray}
                        </QuestionSelect>
                <Answer type="text" onChange={this.onValueChange} id='answer'/>
                    </QuestionComponentWrapper>
                <VerifyButton onClick={this.registerthirdFactorInfo}>Verify</VerifyButton>
                {
                    this.state.valid ? <Redirect to='/home' /> : <Redirect to='/thirdFactorRegistration' />
                }
            </FactorComponentContainer>
        )
    };
}

export default index
