import React from 'react'
import { getHeroesByName } from '../../helpers/getHeroesByName';
import { useForm } from '../../hooks/useForm'
import { HeroCard } from '../../components/hero/HeroCard'
import { useNavigate,useLocation } from 'react-router-dom';
import queryString from 'query-string'



export const SearchScreen = () => {

  const navigate = useNavigate();
  const location = useLocation();
  const {q = ''} = queryString.parse(location.search)


  const [formValues , handleInputChange] = useForm({
    searchText:q,
  })
  const {searchText} = formValues;

  const heroesFilter = getHeroesByName(q);

  const handleSearch = (e) =>{
      e.preventDefault()
      console.log(searchText)
      navigate(`?q=${searchText}`)
  }



  return (
    <>
        <h1>Búsquedas</h1>
        <hr/>

        <div className='row'>
          <div className='col-5'>
            <h4>Buscar</h4>
            <hr/>
            <form onSubmit={handleSearch}>
              <input 
                type="text"
                placeholder='buscar un heroe'
                className='form-control'
                name='searchText'
                autoComplete='off'
                value={searchText}
                onChange={handleInputChange}
              />
          
              <button 
              type="submit"
              className='btn btn-primary mt-2 btn-block'>
                Buscar...
              </button>
            </form>
          </div>
          <div className='col-7'>
                <h4>Resultados</h4>
                <hr/>
                {
                  heroesFilter.map(hero=>(
                    <HeroCard
                      key={hero.id}
                      {...hero}
                    />
                  ))
                }
              </div>
        </div>
    </>
 )
}
