import React from 'react';
import {RobotCard,RobotImage,RobotName,RobotSelect} from './thirdFactorelements';

export const robotID=[];
export const robotName=[];
export const count=[];

const robotSelect=(id,name,maxRobots,count)=>{
    if(count.length>=maxRobots){
        alert(`You have already chosen ${maxRobots} robots`);
    }
    else{
        count.push('1');
        robotID.push(id);
        robotName.push(name);
    }
}

const Card=(props)=>{
    const {name,id,maxRobots,phno}=props;
    return(
        <RobotCard>
            {console.log(id*phno)}
            <RobotImage  src={`https://robohash.org/${id*phno}?200x200`} alt="image" ></RobotImage>
            <RobotName>{name}</RobotName>
            <RobotSelect onClick={()=>robotSelect(id,name,maxRobots,count)} >Select</RobotSelect>
        </RobotCard>
    );
};


export default Card;
