import './App.css';
import PhotoProfil from './composant/profil/photoProfil';
import NomComplet from './composant/profil/nomComplet';
import Adresse from './composant/profil/adresse';

function App() {

  return (
    <div className="App">
      <div className='photo'>
        <PhotoProfil/>
      </div>
      <div className='paragraphe'>
        <NomComplet/>
        <Adresse/>
        </div>
    </div>
  );
}

export default App;
