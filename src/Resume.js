import React from 'react';
import icon from './avatar.svg';
import Data from './Data.json';
let Resume=(props)=>{
    let info = Object.values(props.location.index.value);
    let person=Data.profiles[info]
    console.log(person)
    return(
        <div className="parent">
            <div className="child">
                <img src={icon} alt="profile" />
                <h3>{person.basics.name}</h3>
                <hr></hr>
                <h3>{person.basics.email}</h3>
                <h3>{person.basics.mobile}</h3>
                <hr></hr>
                </div>
            <div className="child2">
                <h3>Educatinal Qualifications</h3>
                <hr></hr>
                {person.education.map((i,j)=>
                    <div key={j}>
                    <h4>{i.degree}</h4>
                    <ul>
                        <li>{i.percentage+"%"}</li>
                        <li>{i.institute}</li>
                    </ul>
                    </div>
                )}
                <h3>skills</h3><hr></hr>
                {person.skills.map((x,y)=>(
                    <div>
                        <h4>{x.type}</h4>
                        {x.values.map((k,l)=>(
                        <div key={l} style={{display:"inline"}}>
                            <span  className="skill" >{k}</span>
                    </div>
                    ))}
                    </div>
            ))
            }
          </div>
        </div>
    )
}   
export default Resume;