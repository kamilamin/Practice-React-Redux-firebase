import React from 'react'

const ProjectDetails = (props) => {
    console.log(props.match.params)
    const id = props.match.params.id
  return (
    <div className="container section project-details">
      <div className="card z-depth-0">
        <div className="card-content">
            <span className="card-title">Project Title - {id}</span>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repudiandae optio, incidunt nobis porro eligendi perspiciatis explicabo et, autem commodi placeat modi vel ea, id cupiditate laboriosam eius aperiam voluptatibus obcaecati.</p>
        </div>
        <div className="card-action gret lighten-4 grey-text">
            <div>Posted by Kamil amin</div>
            <div>16th Feb, 2019, 2AM</div>
        </div>
      </div>
    </div>
  )
}

export default ProjectDetails
