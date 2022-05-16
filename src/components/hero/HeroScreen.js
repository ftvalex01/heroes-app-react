import { useParams, Navigate, useNavigate } from "react-router-dom"
import { getHeroById } from "../../helpers/getHeroById"




const heroImages = require.context('../../assets/imagenes',true);

export const HeroScreen = () => {


  const {heroeId} = useParams()
  const hero = getHeroById(heroeId)
  const navigate = useNavigate();

  if(!hero){
    return <Navigate to="/"/>
  }

  const handleReturn = () =>{
      navigate(-1)
  }


  const {
    id,
    superhero,
    publisher,
    alter_ego,
    first_appearance,
    characters
  } = hero



  return (
    <div className="row mt-5">
        <div className="col-4 animate__animated animate__bounceInLeft">
          <img 
          src={heroImages(`./${id}.jpg`)} 
          alt={superhero}
          className="img-thumbnail"
          />
        </div>
        <div className="col-8 animate__animated animate__bounceInDown">
          <h3>{superhero}</h3>
          <ul className="list-group">
            <li className="list-group-item mb-2">
              <b>Alter ego:</b> {alter_ego}    
            </li>
            <li className="list-group-item mb-2">
              <b>Publisher:</b> {publisher}
            </li>
            <li className="list-group-item">
              <b>first appearance:</b> {first_appearance}
            </li>
          </ul>
          <h5 className="mt-4">characters</h5>
          <p>{characters}</p>

          <button className="btn btn-outline-info" onClick={handleReturn}>Atras</button>
        </div>
    </div>
  )
}
