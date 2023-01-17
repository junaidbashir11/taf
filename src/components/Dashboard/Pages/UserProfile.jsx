import React, { useEffect, useState } from 'react'
import Icon from '../Utilities/Icon';
import IconButton from '../Utilities/IconButton';
import { BsUpload } from "react-icons/bs";
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../../../firebase';
import { updateUserProfile } from '../../../auth/user'; 
function UserProfile({ onSidebarHide }) {

  const [inputs, setInputs] = useState({});
  const [user, loading, error] = useAuthState(auth);
  const [file, setFile] = useState('https://assets.codepen.io/3685267/mock_faces_8.jpg');
  function handleChange(e) {
    console.log(e.target.files);
    setFile(URL.createObjectURL(e.target.files[0]));
  }

  useEffect(() => {
    console.log(user);
    if (user?.photoURL)
      setFile(user?.photoURL);
    if (user?.displayName) {
      setInputs(values => ({ ...values, ["firstName"]: user?.displayName.split(' ')[0] }))
      setInputs(values => ({ ...values, ["lastName"]: user?.displayName.split(' ')[1] }))
    }
    else {
      setInputs(values => ({ ...values, ["firstName"]: "" }))
      setInputs(values => ({ ...values, ["lastName"]: "" }))
    }
  }, [user])

  const handleInputs = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs(values => ({ ...values, [name]: value }))
  }

  const submit = () => {
    updateUserProfile(inputs);
  }

  const inputStyle = "form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-[#001038] bg-clip-padding border border-solid border-[#007a70] rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-[#132249] focus:border[#00ffea] focus:outline-none"

  return (
    <div className="flex w-full">
      <div className="w-full h-screen hidden sm:block sm:w-60 flex-shrink-0">
        .
      </div>
      <div className=" h-screen flex-grow overflow-x-hidden overflow-auto flex flex-wrap justify-center items-center p-2">
        <div className=' flex justify-center items-center w-full'>
          <div className="block p-6 rounded-lg shadow-lg bg-[#1F2F43] max-w-md">
            <div className='flex flex-col gap-3 justify-center items-center'>
              <form action="upload.php" method="post" encType="multipart/form-data">
                <label htmlFor="fileToUpload">
                  <div className="h-36 w-36 rounded-full bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 p-[3px]">
                    <div className="profile-pic h-full w-full rounded-full flex justify-center items-center" style={{ backgroundImage: `url(${file})` }}>
                      <BsUpload className='w-10 h-10' />
                    </div>
                  </div>
                </label>
                <input type="File" name="fileToUpload" id="fileToUpload" onChange={handleChange} className="hidden cursor-pointer" />
              </form>
              <div className="grid grid-cols-2 gap-4">
                <div className="form-group mb-6">
                  <input type="text" name="firstName" className={inputStyle} id="exampleInput123"
                    aria-describedby="emailHelp123" value={inputs.firstName} placeholder="First Name" onChange={handleInputs} />
                </div>
                <div className="form-group mb-6">
                  <input type="text" name="lastName" className={inputStyle} id="exampleInput124"
                    aria-describedby="emailHelp124" value={inputs.lastName} placeholder="Last Name" onChange={handleInputs} />
                </div>
              </div>
              <div className="w-full form-group mb-6">
                <input type="email" name="email" className={inputStyle} value={user ? user.email : 'Email Address'} id="exampleInput125" />
              </div>
              <div className="w-full form-group mb-6">
                <input type="phonenumber" className={inputStyle} value={user?.phoneNumber ? user?.phoneNumber : 'Phone Number'} id="exampleInput126" />
              </div>
              <button className="w-full px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out" onClick={submit} >Save</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default UserProfile