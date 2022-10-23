import React from 'react'
import Header from './Header'
import Total from './Total'
import Content from './Content'
const Course = ({courseCont}) =>
  <div>
    {courses.map(courseCont =>
      <div key={courseCont.id}>
        <Header course={courseCont.name} />
        <Content parts={courseCont.parts}/>
        <Total parts={courseCont.parts}/>
      </div>
    )}
  </div>
export default Course