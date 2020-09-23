import React, {useState, useEffect} from 'react';
import styled from 'styled-components'
import Country from './Country'
import { useSelector, useDispatch } from 'react-redux'

const CountryListStyled = styled.div`
  display: grid;
  grid-row-gap: 2.3em;
  background: var(--background);
  padding: 4em 2em;
  border: 1px solid red;
  justify-content: center;
`

function CountryList(props) {

    const dispatch = useDispatch()

    const countryList = useSelector((state) => state.CountryList)

    // const [countryList, setCountryList] = useState([]);

    useEffect(() => {
        fetch('https://restcountries.eu/rest/v2/all')
        .then((response) => {
            return response.json()
        })
        .then((list) => {
            dispatch({
               type: 'SET_COUNTRY_LIST',
               payload: list 
            })
            // setCountryList(data)
        })
        .catch((err) => {
            console.log('error', err)
        })
    }, [])
    return (
        <CountryListStyled>
            {
                countryList.map(({flag, name, population, region, capital}) => {
                    return (
                        <Country
                        key={name}
                        flag={flag}
                        name={name}
                        population={population}
                        region={region}
                        capital={capital}
                        />
                    )
                })
            }


        </CountryListStyled>
    );
}

export default CountryList;