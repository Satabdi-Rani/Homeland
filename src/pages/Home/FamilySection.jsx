import 'animate.css';
const FamilySection = () => {
    return (
        <div  className="mb-32">
            <div className="grid grid-col-1 sm:grid-cols-2 gap-10 container mx-auto mt-24 sm:mt-48">
                <div className="mx-12 sm:mx-0">
                    <img className="w-[400px] sm:w-[500px] h-[500px] sm:h-[700px] mb-0" src="https://i.ibb.co/vvxXspn/blue-yellow-geomtric-cupboards.jpg" alt="" />
                    <img className="w-[400px] sm:w-[500px] h-[500px] sm:h-[700px] relative 
                    bottom-[530px] sm:bottom-[780px] left-[30px]  sm:left-[70px] mb-0" src="https://i.ibb.co/C66DnMJ/family-portrait-sofa.jpg" alt="" />
                </div>
                <div className="flex flex-col sm:mt-32 ml-16">
                    <h4 className="text-yellow-800 font-5 text-2xl sm:text-3xl animate__animated animate__bounce">PLC Construction LLC</h4>
                    <h3 className="text-3xl sm:text-5xl font-semibold mt-3 sm:mt-4 animate__animated animate__zoomIn">Living Spaces for creative people</h3>
                    <p className="text-lg mt-6 sm:mt-8 w-4/5">We are waiting for you in our sales office for having all these opportunities with affordable prices and appropriate payment opportunities</p>
                </div>
            </div>
        </div>
    );
};

export default FamilySection;