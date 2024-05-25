import Swal from "sweetalert2";
import useAuth from "../../../Hooks/useAuth";
import { useLocation, useNavigate } from "react-router-dom";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import useCart from "../../../Hooks/useCart";

const FoodCard = ({item}) => {

    const {name, recipe, image, price, _id} = item;
    const {user} = useAuth();
    const navigate = useNavigate();
    const location = useLocation();
    const axiosSecure = useAxiosSecure();
    const [, refetch] = useCart();

    const handleAddToCart = () =>{
      if(user && user.email){
        // TODO: send cart item to database
        console.log(user.email);

        const cartItem = {
          menuId: _id,
          email: user.email,
          name,
          image,
          price
        }
        axiosSecure.post('/carts', cartItem)
        .then(res=>{
          console.log(res.data)
          if(res.data.insertedId){
            Swal.fire({
              position: "top-end",
              icon: "success",
              title: "Added to your cart",
              showConfirmButton: false,
              timer: 1500
            });
            // Refetch cart to update the cart item counts
            refetch();
          }
        })
      }

      else{
        Swal.fire({
          title: "You are not login",
          text: "First login, than click to the add cart!",
          icon: "warning",
          showCancelButton: true,
          confirmButtonColor: "#3085d6",
          cancelButtonColor: "#d33",
          confirmButtonText: "Please Login"
        }).then((result) => {
          if (result.isConfirmed) {

         navigate('/login', {state: {from: location}})
          }
        });
      }
    }

    return (
        <div className="my-12 flex">
            <div className="card card-compact w-96 bg-base-100 shadow-xl flex-grow">
  <figure><img src={image} alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title text-center">{name}</h2>
    <p className="">{recipe}</p>
    <p className="absolute right-0 top-10 p-2 mr-5 text-white bg-black ">${price}</p>
    <div className="card-actions justify-center">
      <button onClick={handleAddToCart}
       className="btn btn-outline border-0 border-b-4 mt-4">Add to Cart</button>
    </div>
  </div>
</div>
        </div>
    );
};

export default FoodCard;