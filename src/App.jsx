import './App.css'
import Grandpa from './components/Grandpa/Grandpa'
// import ReusableForm from './components/ReusableForm/ReusableForm'
// import Hookform from './components/Hookform/Hookform'
// import RefForm from './components/RefForm/RefForm'
// import Simpleform from './components/Simpleform/Simpleform'
// import Statefullform from './components/Statefullform/Statefullform'

function App() {
  
  // const handleLoginSubmit=(data)=>{
  //   console.log('Login Data',data);
  // }
  // const handleProfileSubmit=(data)=>{
  //   console.log('Profile Update',data);
  // }

  return (
    <>
      <h1>Form Master</h1>
      <Grandpa></Grandpa>
      {/* <Simpleform></Simpleform> */}
      {/* <Statefullform></Statefullform> */}
      {/* <RefForm></RefForm> */}
      {/* <Hookform></Hookform> */}
      {/* <ReusableForm 
      formTitle={'Sign Up'} 
      submitBtnText={'Login'}
      handleSubmit={handleLoginSubmit}
      >
        <p>Welcome to Login User</p>
      </ReusableForm>
      <ReusableForm 
      formTitle={'Profile Update'} 
      submitBtnText={'Update'}
      handleSubmit={handleProfileSubmit}>
        <p>Welcome to Update Profiles</p>
      </ReusableForm> */}
    </>
  )
}

export default App
