import { useForm } from 'react-hook-form'

function RegisterPage() {

    const { register, handleSubmit } = useForm();

  return (
    <div>
      <form onSubmit={handleSubmit( async (values) => {
        console.log(values);
      } )}>
        <input type="text" {...register("username", {required:true})} placeholder='username' />
        <input type="email" {...register("email", {required:true})} placeholder='email' />
        <input type="password" {...register("password", {required:true})} placeholder='password' />
        <button type="submit" className="rounded-full">Register</button>
      </form>
    </div>
  )
}

export default RegisterPage
