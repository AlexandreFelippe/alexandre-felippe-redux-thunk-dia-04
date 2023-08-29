import './App.css'
import { useDispatch, useSelector } from 'react-redux';
import { Dispatch, ReduxState } from './types';
import { dataGameOfThrones } from './redux/actions';
import { useState } from 'react';


function App() {
  const rootState = useSelector((state: ReduxState) => state);
  const dispatch: Dispatch = useDispatch();
  const [ name, setName ] = useState('');
  const [ click, setClick ] = useState(false);
  console.log(rootState);

  if (rootState.isFetching) return <p>Carregando...</p>;
  return (
    <div>
      <input 
        type="text"
        value={name}
        onChange={ (e) => setName(e.target.value)}
      />
      <button onClick={ () => { 
        dispatch(dataGameOfThrones(name))
        setClick(true);
        } }>Pesquisar Personagem</button>
      {
          click
          && (
            <div>
              <h1>{ rootState.data.name }</h1>
              <img
                src={ rootState.data.url }
                alt="imagem do personagem"
              />
              <p>Títulos:</p>
              <ul>
                { rootState.data.titles && rootState.data.titles.map((title) => (
                  <li key={ title }>{ title }</li>
                ))}
              </ul>
              <p>Apelidos:</p>
              <ul>
                { rootState.data.aliases && rootState.data.aliases.map((alias) => (
                  <li key={ alias }>{ alias }</li>
                ))}
              </ul>
            </div>
          )
        }
    </div>)
}

export default App
