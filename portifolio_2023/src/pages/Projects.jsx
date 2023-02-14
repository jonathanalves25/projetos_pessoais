import { ProjectItem } from "../components/ProjectItem"

export const Projects = () => {
  return (
    <div className="container grid md:grid-cols-2 lg:grid-cols-3 lg:mx-auto lg:h-3/4 gap-8 p-10 h-full bg-opacity-0 to-blue-700">
      <ProjectItem label="Em Construção"/>
      <ProjectItem label="Em Construção"/>
      <ProjectItem label="Em Construção"/>
      <ProjectItem label="Em Construção"/>
      <ProjectItem label="Em Construção"/>

    </div>
  )
}