import Equipe from './components/equipe'

export default function App() {
  return (
    <div>
      <h1>Aula de componentes React.</h1>
      <Equipe nome='Peterson' cargo= 'Garoto De Programa java' />
      <Equipe nome='Lucas' cargo= 'Garoto De Programa Html'/>
      <Equipe nome='Gabriel' cargo= 'Garoto De Programa Css' />
      <Equipe nome='Emilio' cargo= 'Garoto De Programa JS'/>
    </div>
  )
}