import { useParams, Navigate } from "react-router-dom"
import { getHeroById } from "../../helpers/getHeroById"




export const HeroScreen = () => {

  const {heroeId} = useParams()
  const hero = getHeroById(heroeId)

  if(!hero){
    return <Navigate to="/"/>
  }

  const imagePath = `/assets/imagenes/${hero.id}.jpg`;

  return (
    <div className="row mt-5">
        <div className="col-4">
          <img 
          src={imagePath} 
          alt={hero.superhero}
          className="img-thumbnail"
          />
        </div>
    </div>
  )
}
