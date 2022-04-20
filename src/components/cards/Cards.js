import React from 'react'
import { useContext,useState,useEffect,useCallback } from 'react';
import Moment from 'react-moment';
import { CardContext,} from '../../App';
import './cards.css'
const Cards = () => {
    {/*useContext that we get from app component */}
    const cards=useContext(CardContext);
    
   
    
    
    

    
      
 
  
    
  return (
    <div className='cardsmain'>
{/*mapping cards data */}
        { 
        cards.length <1 ? <h1>No data found</h1>:cards && cards.sort((a,b)=>{
            return a.Value-b.Value
        }).map((d)=>{
                return(
                    <div className='cards' id={d.Id}>
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