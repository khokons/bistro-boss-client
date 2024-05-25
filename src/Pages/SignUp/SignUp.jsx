import { useContext } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";
import { Helmet } from "react-helmet-async";
import Swal from 'sweetalert2'


const SignUp = () => {
    const {register, handleSubmit, reset, formState: { errors }} =useForm();

    const {createUser, updateUserProfile} = useContext(AuthContext);
    const navigate = useNavigate();

    const onSubmit = (data) => {
        console.log(data)
        createUser(data.email, data.password)
        .then(result=>{
            console.log(result.user);
            updateUserProfile(data.name, data.photoURL)
            .then( ()=>{
              console.log("user profile info update")
            })
            reset();
            Swal.fire({
              title: "Good job!",
              text: "User create successful!",
              icon: "success"
            });
            navigate('/')
            
        })
        .catch(error=>{
            console.error(error);

        })
    };


    return (
     <>
     <Helmet>
                <title>Bistro Boss | SignUp</title>
            </Helmet>
        <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Register now!</h1>
            <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
          </div>
          <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form onSubmit={handleSubmit(onSubmit)} className="card-body">

                {/* Name----------- */}
            <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input type="text" {...register("name", {required: true})}  placeholder="Name" className="input input-bordered"/>
                {errors.name && <span className="text-red-700">Name field is required</span>}
              </div>

              {/* Photo URL */}

              <div className="form-control">
                <label className="label">
                  <span className="label-text">Photo URL</span>
                </label>
                <input type="text" {...register("photoURL", {required: true})}  placeholder="Photo URL" className="input input-bordered"/>
                {errors.photoURL && <span className="text-red-700">Photo field is required</span>}
              </div>

              {/* Email----------- */}
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input type="email" {...register("email", { required: true })}  placeholder="email" className="input input-bordered"/>
                {errors.email && <span className="text-red-700">Email field is required</span>}

              </div>

              {/* password------- */}
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input type="password" {...register("password", {
                    required: true, 
                    minLength: 6,
                    maxLength: 20,
                    pattern: /(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*\W)(?!.* )/
                    })} placeholder="password" className="input input-bordered"/>

                {errors.password?.type === "required" && (<p className="text-red-700">Password is required</p>)}
                {errors.password?.type === "minLength" && (<p className="text-red-700">Password must be 6 character</p>)}
                {errors.password?.type === "maxLength" && (<p className="text-red-700">Password less then 20 character</p>)}
                {errors.password?.type === "pattern" && (<p className="text-red-700">Password must be one uppercase, one lowercase, one digit, one special</p>)}

                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                </label>
              </div>
              {/* Button----------- */}
              <div className="form-control mt-6">
                <input className="btn btn-primary" type="submit" value="Sign Up" />
              </div>
              <p className='text-center text-2xl'><small>Have a account? <Link to="/login" className='text-blue-800 underline'>Please Login</Link> </small></p>
            </form>
          </div>
        </div>
      </div>
     </>
    );
};

export default SignUp;