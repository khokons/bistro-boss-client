

const SectionTitle = ({heading, subHeading}) => {
    return (
        <div className="text-center md:w-4/12 mx-auto my-8">
            <p className="text-yellow-700 mb-2">{subHeading}</p>
            <h2 className="text-red-500 text-3xl uppercase border-y-4 py-4">{heading}</h2>
        </div>
    );
};

export default SectionTitle;