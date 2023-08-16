import { FaTruckFast, FaSackDollar, FaHeadset } from "react-icons/fa6";
const Feature = () => {
  return (
    <>
      <section className="feature-section bg-green-100/50 py-12 lg:py-20">
        <div className="container">
          <div className="grid md:grid-cols-3 gap-4 xl:gap-8">
            {/* Start Feature Item */}
            <div className="flex space-x-4 xl:space-x-8 p-6 border border-dashed border-primary">
              <div className="text-5xl text-primary">
                <FaTruckFast />
              </div>
              <div>
                <h3 className="text-xl mb-2 font-semibold">
                  Fast & Secure Delivery
                </h3>
                <p>
                  Get free shipping on orders over $100 within the 10 To 15 Days
                </p>
              </div>
            </div>
            {/* Start Feature Item */}
            {/* Start Feature Item */}
            <div className="flex space-x-4 xl:space-x-8 p-6 border border-dashed border-primary">
              <div className="text-5xl text-primary">
                <FaSackDollar />
              </div>
              <div>
                <h3 className="text-xl mb-2 font-semibold">
                  Moneyback Gurantee
                </h3>
                <p>
                  We’re committed to the perfect fit get full refund on any our
                  returns
                </p>
              </div>
            </div>
            {/* Start Feature Item */}
            {/* Start Feature Item */}
            <div className="flex space-x-4 xl:space-x-8 p-6 border border-dashed border-primary">
              <div className="text-5xl text-primary">
                <FaHeadset />
              </div>
              <div>
                <h3 className="text-xl mb-2 font-semibold">
                  After Sales Support
                </h3>
                <p>
                  Ready to help you with any questions related to products item
                </p>
              </div>
            </div>
            {/* Start Feature Item */}
          </div>
        </div>
      </section>
    </>
  );
};

export default Feature;
