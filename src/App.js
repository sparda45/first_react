import './App.css';
import Introduction from './components/introduction';
import Profile from './components/profile';
function App() {
  return (
    <div>
      <Profile/>
      <Introduction cita2="inget cita citamu jadi camat purbalingga" jilid="jilid 1"/>
      <Introduction cita2="jangan macem macem apalagi nombak jidat rektor" jilid="jilid2" />
    </div>
   
  );
}

export default App;
