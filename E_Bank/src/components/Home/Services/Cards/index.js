import React from 'react';
import SideMenu from '../../modules/SideMenu';
import {ComponentWrapper} from '../../HomeElements';
import CardDesign from './CardDesign';
import Carousel from './Carousel';
import { IndexContainer, IndexWrap, AddIcon, AddCard, Headline, Headline1} from './CardElements';

class index  extends React.Component {
    constructor(props){
        super(props);
        this.state={
            cards:[],
            ready:false,
        }
    }
    componentDidMount(){
        fetch(`http://localhost:3000/getCard/${this.props.user.id}`)
        .then(response=>response.json())            
        .then(data=>{
            let tempArr=[];
            data.map(val=>{
                return tempArr.push(val);
            });
            this.setState({cards:tempArr});
        })
        .then(()=>{
            this.setState({ready:true})
        })
        .catch(err=>{
            console.log(`Couldnt fetch cards ${err}`);
        })
    }
    render(){
        const CardArray=this.state.cards.map((val,i)=>{
            return  <CardDesign key={i} cards={val} />
        })
        return (
            <>
                <ComponentWrapper>
                    <SideMenu/>
                    <IndexContainer>
                        <Headline>Card Details</Headline>
                        <IndexWrap>
                            {
                                this.state.ready ? <Carousel CardArray={CardArray} />
                                : console.log('wait')
                            }
                        </IndexWrap>
                        <Headline1>Add a new Card</Headline1>
                            <AddCard to='/card/new'>
                                <AddIcon />
                            </AddCard>
                    </IndexContainer>
                </ComponentWrapper>
            </>

        )
    }
}

export default index
