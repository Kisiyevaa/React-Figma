import React, { useState } from 'react'
import Img1 from '../../../assets/img/Decoration.png'
import Img2 from '../../../assets/img/Decoration (3).png'
import { Form, Input, Label, Button } from 'reactstrap'
import { Link } from "react-router-dom"
function Main() {

  const [form, setForm] = useState({ email: '', password: '' })
  const [error, setError] = useState({
    email: true,
    password: true
  });


  const handleChange = (e) => {
      setForm({ ...form, [e.target.name]: e.target.value })
  }

  function handleEdit(e) {
    e.preventDefault()

    if (form.email && form.password) {
      setForm({
        email: '',
        password: ''
      })
      setError({name:true, email:true, password:true})
      console.log(data);
    }else{
      setError({
        email: form.email ? true : false,
        password: form.password ? true : false,
      })
    }
  }
  return (
    <div className='bg-purple-200 h-[125vh] relative' >
      <img src={Img1} alt="img" className='absolute' />
      <img src={Img2} alt="img2" className='absolute right-0 bottom-0 ' />
      <div className='container mx-auto flex justify-center' >
        <div className='absolute z-5 top-[134px]'>
          <div className='bg-white md:w-[590px]  sm:w-[390px] flex flex-col rounded-[12px] px-[58px]'>
            <h3
              className='text-[#6B50F6] text-[32px] font-bold text-center py-[39px]'>
             Sign in to didpool.
            </h3>
            <div>
              <Form
                className='mx-auto'>
                <div className=' mb-4'>
                  <div>
                    <Label htmlFor='email'
                      className='text-[16px] text-[#060026]'>Your email</Label>
                  </div>
                  <Input
                    name='email'
                    type="email"
                    id='email'
                    value={form.email}
                    onChange={handleChange}
                    placeholder='Your@email.com'
                    className='w-[100%] p-2 border-2 border-[#D4CCFF] rounded-md px-4 mt-2 outline-0'
                  />
                  {
                    !error.email && <p className='text-red-500 text-2xl italic'>Emailinizi daxil edin</p>
                  }
                </div>
                <div className=' mb-4'>
                 <div className='flex justify-between'>
                 <div>
                    <Label htmlFor='password'
                      className='text-[16px] text-[#060026]'>Password</Label>
                  </div>
                    <div className='text-[#6B50F6] text-[16px] underline underline-offset-1 '>
                      <Link>Forgot your password?</Link>
                    </div>
                 </div>
                  <Input
                    name='password'
                    type="password"
                    id='password'
                    value={form.password}
                    onChange={handleChange}
                    placeholder='Enter password'
                    className='w-[100%] p-2 border-2 border-[#D4CCFF] rounded-md px-4 mt-2 outline-0'
                  />
                  {
                    !error.password && <p className='text-red-500 text-2xl italic'>Passwordunuzu daxil edin</p>
                  }
                </div>
                <Input
                  type="checkbox"
                  id='check'
                  className='border-[#D4CCFF]'
                />
                <Label htmlFor='check' className='text-[18px] text-[#060026] ml-2'>
                  Remember me on this device
                </Label>
                <div className='text-center mt-4'>
                  <Button
                    onClick={handleEdit}
                    className='text-white bg-[#6B50F6] rounded-[8px] text-[18px] py-[10px] w-[100%]'
                  >
                   <Link> Sign in</Link>
                  </Button>
                  <p className='text-center mt-4  pb-[39px]'>
                    Don’t have an account?
                    <Link  to='/'className='text-[#6B50F6] underline underline-offset-1 ml-1'>
                      Sign Up
                    </Link>
                  </p>
                </div>
              </Form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Main