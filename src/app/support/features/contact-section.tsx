import React from 'react'
import { Button } from "@/components/ui/button";
import '../style.css'


const ContactSection = () => {
    return (
        <div className="my-14  h-[550px] flex flex-col justify-center items-center">
            <h1 className="py-5 capitalize text-center text-3xl font-bold leading-[50px]">
                Contact Us
            </h1>
            <div className='bg-contact bg-cover bg-center bg-no-repeat w-[90%] lg:w-[80%] mt-5 round'>
                <div className="bg-black/40 px-5 lg:px-16 flex flex-col py-14 round">
                    <div className='lg:w-[50%]'>
                        <h5 className='capitalize text-white font-bold my-5'>DIDN’T SEE WHAT YOU’RE LOOKING FOR ON THE  FAQ? SEND US A MESSAGE USING THE BELOW FORM AND WE’D HELP YOU OUT.</h5>
                    <div className='contact-form bg-[#F3F3F3] p-5'>
                        <form>
                            <label className='font-bold' >EMAIL:</label><br/>
                        <input className='w-[100%] my-5 rounded-lg p-2 bg-[#F3F3F3] border-2 border-#D9D9D900' type="email" placeholder="Email" />
                        <br />
                        <label className='font-bold'>MESSAGE:</label><br/>
                        <textarea rows={5} className='w-[100%] my-5 rounded-lg p-2 bg-[#F3F3F3] border-2 border-#D9D9D900' placeholder='WRITE YOUR MASSAGE HERE' />
                        </form>
                        <Button type='submit' className='bg-black'>Send</Button>
                    </div>
                    </div>

                    
                </div>
            </div>
        </div>
    )
}

export default ContactSection