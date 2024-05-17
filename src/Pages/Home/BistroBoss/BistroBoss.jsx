
import backgroundImage from '../../../assets/home/chef-service.jpg'

const BistroBoss = () => {
    return (
        <div
        className="relative bg-cover bg-center bg-fixed flex justify-center items-center h-[572px] bg-blend-soft-light"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        <div className="bg-white bg-opacity-90 p-8 md:p-16 rounded-lg shadow-lg text-center max-w-2xl">
          <h2 className="text-2xl md:text-4xl font-bold mb-4 text-black">Bistro Boss</h2>
          <p className="text-sm md:text-base leading-relaxed text-black">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, libero accusamus laborum deserunt ratione dolor officiis praesentium! Deserunt magni aperiam dolor eius dolore at, nihil iusto ducimus incidunt quibusdam nemo.
          </p>
        </div>
      </div>
    );
};

export default BistroBoss;