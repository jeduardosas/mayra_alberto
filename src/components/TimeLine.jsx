import React from 'react'
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component'
import 'react-vertical-timeline-component/style.min.css';
import '../styles/timeline.css'

const TimeLine = () => {

  const settings = {
    bgColor:'#f5f0ea',
    color:'#415b78',
    lineColor:'#f5f0ea'

  }
  const protocol = [
    {
      id:1,
      time:'16:30 Hrs',
      name:'Ceremonia Religiosa',
      icon:'CHURCH',
      color:'var(--color_timeline)',
      textColor:'rgb(218 167 88)'
    },

    {
      id:2,
      time:'18:30 Hrs',
      name:'Recepción',
      icon:'recepcion',
      color:'var(--color_timeline)',
      textColor:'rgb(218 167 88)'
    },

    {
      id:3,
      time:'19:00 Hrs.',
      name:'Entrada de los Novios',
      icon:'ramo_novia',
      color:'var(--color_timeline)',
      textColor:'rgb(218 167 88)'
    },

    {
      id:4,
      time:'20:30 Hrs',
      name:'Banquete',
      icon:'comida',
      color:'var(--color_timeline)',
      textColor:'rgb(218 167 88)'
    },

  ]
  return (
    <div className='timeline'>
      <h3 className='timeline-title-cont'>Itinerario</h3>
      <VerticalTimeline
      lineColor={`${settings.lineColor}`}
      >
        {
          protocol.map(item=>(
            <VerticalTimelineElement
              key=
                {item.id}
              className=
                "vertical-timeline-element--work"
              contentStyle={
                { background: `${settings.bgColor}`,
                  color:`${settings.color}`,
                  marginRight:'10px',
                  boxShadow:'none'}}
              contentArrowStyle={
                { borderRight: `7px solid ${settings.bgColor}`}}
              date=
                {`${item.time}`}
              dateClassName=
                'custom-date-color'
              iconStyle={
                { background: `${settings.bgColor}`, 
                fill: `${settings.bgColor}`,
                boxShadow:`0 0 0 4px ${settings.bgColor}`}} 
              icon={
                <img src={`/icons/${item.icon}.svg`} 
                alt={`ico-${item.icon}`} 
                className='custom-icon'/>}
            >
            <h3 className="vertical-timeline-element-title timeline-title">{item.name}</h3>
            </VerticalTimelineElement>
          ))
        }

      </VerticalTimeline>
    </div>
  )
}

export default TimeLine