import React from "react";
import yellowCar from "../../assets/website/team.jpg";
import { Canvas } from "@react-three/fiber";
import { useGLTF, Stage, PresentationControls } from "@react-three/drei";
import { TypeAnimation } from "react-type-animation";

function Model(props) {
  const { scene } = useGLTF("/the_medical_bag.glb");
  return <primitive object={scene}  {...props} />;
}


const Hero = () => {
  return (
    <div className="dark:bg-gray-950 dark:text-white duration-300 pb-2 shadow-xl ">
      <div className="container min-h-[620px] flex mt-10 sm:mt-0 ">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 place-items-center ">
          {/* Image section */}
          <div data-aos="zoom-in" className="order-1 sm:order-2 relative  ">

            <img
              src={yellowCar}
              alt=""
              className="w-full sm:max-w-[280px] md:max-w-[430px] rounded-3xl  "
            />
            <div
              data-aos="slide-right"
              className="absolute -bottom-5 -right-8 px-4 py-2 rounded-xl bg-white dark:bg-gray-900 dark:text-white shadow-md "
            >
              <p className="text-gray-500 text-sm ">⭐Ομάδα</p>
              <h1 className="font-bold">
                50+ <span className="font-normal">Ατόμων</span>
              </h1>
            </div>
          </div>
          <div className="order-1 sm:order-2 relative">
            <Canvas camera={{ fov: 45, position: [0, 0, 15] }}>
              <PresentationControls speed={0.5} global zoom={2} polar={[-0.1, Math.PI / 4]}>
                <Stage adjustCamera intensity={1.5} environment="sunset" scale={3}>
                  <Model scale={[50, 50, 50]} />
                </Stage>
              </PresentationControls>
            </Canvas>
          </div>

          {/* Text section */}
          <div className="space-y-5 order-2 sm:order-1 xl:pr-40 ">
            <h1
              data-aos="fade-up"
              className="text-3xl sm:text-xl font-semibold font-mono "
              style={{ lineHeight: 1.2 }}
            >
              Εθελοντική Διασωστική Οργάνωση{" "}
              <span className="text-primary font-semibold font-mono ">  <TypeAnimation
                sequence={[
                  "ΟΜ.Α.Κ.",
                  1500,
                  "Oμάδα",
                  1000,
                  "Αντιμετώπισης",
                  1000,
                  "Καταστροφών",
                  1000,
                  "Δήμου Καλαμαριάς",
                  2000
                ]}
                speed={50}
                repeat={Infinity}
                className="font-bold text-primary font-inter mb-4"
              /></span>
            </h1>
            <p data-aos="fade-up" data-aos-delay="300" className="">
              Μια παρέα , ένα σύνολο ατόμων , κάνει πράξη την κοινωνική συνείδηση και αλληλεγγύη , προσφέροντας εθελοντικά , χωρίς απολύτως
              κανένα αντάλλαγμα  την αγάπη και τη φροντίδα στον συνάνθρωπο.
            </p>
            <button
              data-aos="fade-up"
              data-aos-delay="500"
              data-aos-offset="0"
              className="primary-btn"
            >
              Περισσότερα
            </button>

          </div>
        </div>

      </div>

    </div >
  );
};

export default Hero;
