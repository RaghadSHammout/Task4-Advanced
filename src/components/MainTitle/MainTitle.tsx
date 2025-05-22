import "./MainTitle.css"

type props = {
    title : string ;
    subtitle : string;
}
const MainTitle = ({title , subtitle}:props) => {

  return (
    <div className="main-title">
      <h2 className="title">{title}</h2>
      <p className="subtitle">{subtitle}</p>
    </div>
  )
}

export default MainTitle
