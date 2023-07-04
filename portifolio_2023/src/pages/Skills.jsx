import { CompanyTime } from "../components/CompanyTime"
import { SkillContainer } from "../components/SkillContainer"
import { TextPrimary } from "../components/TextPrimary"
import { Title } from "../components/Title"
import { TitleRole } from "../components/TitleRole"

export const Skills = () => {
  return(
    <div className="container mx-auto p-10 bg-opacity-0 lg:flex lg:justify-between">
        
        <div className="lg:w-3/4 lg:mt-10">
          <Title text="Experiência"/>
          <TitleRole text="Desenvolvedor Web"/>
          <CompanyTime company="Universidade do Vale do Itajaí" time="dez 2021 - até o momento."/>
          <TextPrimary
            text="Responsável por aplicar melhorias e corrigir os sistemas utilizados por professores e funcionários da universidade, utilizando a tecnologia GeneXus e banco de dados PL/SQL.
          "/>
            

        </div>

        <div className="my-8 lg:w-1/5">
          <Title text="Core Skills"/>

          <SkillContainer name="ReactJS"/>
          <SkillContainer name="React Native"/>
          <SkillContainer name="Styled-Components"/>
          <SkillContainer name="TailwindCSS"/>
          <SkillContainer name="Git"/>
          <SkillContainer name="Metodologias Ágeis"/>
          <SkillContainer name="PL/SQL"/>
        </div>
    </div>
  )
}