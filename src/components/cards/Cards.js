import React from 'react'
import { useContext } from 'react';
import Moment from 'react-moment';
import { CardContext,} from '../../App';
import './cards.css'
const Cards = () => {
    {/*useContext that we get from app component */}
    const cards=useContext(CardContext);
   const date= new Date('2/10/2019 12:00:00 AM');
   console.log(date.getTimezoneOffset()/60);
    
  return (
    <div className='cardsmain'>
{/*mapping cards data */}
        { 
            cards.map((d)=>{
                return(
                    <div className='cards'>
                    {/*images getting from player image folder */}
                    <img src={require(`../player-images/${d.Id}.jpg`)}/>
                   <div className='carddetails'>
                   <h4>Name: {d.PFName}</h4>
                   <h5> Skill: {d.Skill}</h5>
                    <h5>
                    SkillDesc: {d.SkillDesc}
                    </h5>
                    <h5>Value: ${d.Value}<br/></h5>
                   <h5>
                   MDate:{d.UpComingMatchesList.map((e)=>{
                    return(
                        <span>
                            {/* moment for user local timezone */}
                            <Moment format ='DD-MM-YYYY h:mm:ss a'>{e.MDate}</Moment>
                        </span>
                     
                    )
                        
                        
                    
                   })}
                   </h5>
                   <h5>
                        {/* For display upcoming matches  */}
                   UpComing Match:&nbsp;&nbsp;{d.UpComingMatchesList.map((e)=>{
                    return(
                        <span>
                            <span>{e.CCode}
                        </span>
                        <span></span>&nbsp;&nbsp;&nbsp;
                        VS <span></span> &nbsp;&nbsp;&nbsp;
                         <span>{e.VsCCode}
                         </span>
                     
                        </span>
                        
                    )
                        
                        
                    
                   })}
                   </h5>
                       </div>
                  </div>
                );
               
            })
        }
    </div>
  )
}

export default Cards;