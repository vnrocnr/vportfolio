<template>
    <div class=" px-10 pt-5 lg:px-100 lg:h-[800px] dark:bg-black dark:text-white">
        <div class="relative h-full w-full ">
            <div class="absolute bottom-0 left-[-20%] right-0 top-[-10%] h-[500px] w-[500px] rounded-full bg-[radial-gradient(circle_farthest-side,rgba(255,0,182,.15),rgba(255,255,255,0))]"></div><div class="absolute bottom-0 right-[-20%] top-[-10%] h-[500px] w-[500px] rounded-full bg-[radial-gradient(circle_farthest-side,rgba(255,0,182,.15),rgba(255,255,255,0))]"></div>
        
        
            <div class="inside flex flex-col gap-5">
                 <h1 class="text-4xl font-bold">Let's get in touch</h1>
                 <p>Don't hesitate to talk with me...</p>
      
            <div class="sub-con border-t  mt-2 flex lg:gap-10 flex-col md:flex-col lg:flex-row sm:text-center justify-between items-center rounded-2xl p-3 md:p-20 border-gray-300">
             
            
             <div class="left flex flex-col gap-5 text-center">
                 <h1 class="text-3xl font-bold">Open to opportunities — drop me a message!</h1>
         
             <p class="md:max-w-[590px] sm:text-center">I’m currently open to new opportunities, collaborations, or freelance projects. Whether you have a question or just want to say hi, feel free to drop a message — I’ll get back to you as soon as possible.</p>
     
             </div>
 
             <div class="right">
                 <form action="" class="flex flex-col gap-3 dark:text-white">
                     <div class="inputs flex flex-col md:flex-row  w-full gap-4">
                         <input v-model="form.name" type="text" placeholder=" Name" class="w-full border border-gray-300 p-3 rounded-md">
                     <input v-model="form.email" type="email" placeholder="Email Address" class="w-full border border-gray-300 p-3 rounded-md">
                     
                     </div>

                     <input v-model="form.subject" type="text" placeholder="Subject" class="w-full border border-gray-300 p-3 rounded-md">

                 
                     <textarea v-model="form.message"
  name=""
  id="message"
  placeholder="Your message"
  cols="80"
  rows="10"
  class="w-full lg:w-[500px] border border-gray-300 rounded-md p-3 text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
></textarea>

 
<button 
  type="button" 
  @click="sendEmail"
  class="border dark:text-black dark:bg-white bg-black text-white w-[200px] h-[50px] hover:cursor-pointer rounded-md"
>
  Send Message
</button>

                 </form>
             </div>
 
        </div>
            </div>
        
        
        </div>
       
       
    </div>
</template>

<script setup>
import { reactive } from 'vue';
import emailjs from '@emailjs/browser'


const form = reactive({
  name: '',
  subject: '',
  email: '',
  message: ''
})
const sendEmail = () => {
  const serviceID = 'service_eweakuj'
  const templateID = 'template_dfbxncb'
  const publicKey = 'abSg7xzZtJk-Ij8lZ'

  emailjs.send(serviceID, templateID, {
    from_name: form.name,
    from_email: form.email,
    subject: form.subject,
    message: form.message,
  }, publicKey)
  .then((response) => {
    console.log('SUCCESS!', response.status, response.text)
    alert('Hi ' + form.name + '. Thank you for reaching out! Message delivered successfully.')
  
    form.name = ''
    form.email = ''
    form.subject = ''
    form.message = ''
  }, (error) => {
    console.log('FAILED...', error)
    alert('Failed to send message, please try again.')
  })
}

</script>