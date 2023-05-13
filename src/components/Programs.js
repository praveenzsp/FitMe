import React from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const rotateCard = {
  rotateY: {
    rotateY: 360,
    transition: {
      rotateY: {
        duration: 1.5,
        ease: "easeIn",
      },
    },
  },
};

function Programs() {
  const navigate = useNavigate();

  return (
    <div id="Programs">
      <h2 className="font-sora font-bold text-[30px] text-center mt-16 mb-6 py-8 lg:text-5xl">
        Explore Our <span className="text-purple-500">Programs</span>
      </h2>

      <motion.div
        className=" flex flex-col justify-center items-center lg:flex lg:justify-evenly mb-10 mt-6 lg:flex-row"
        initial={{ scale: 0, opacity: 0, x: "-50vw" }}
        whileInView={{ scale: 1, opacity: 1, x: 0 }}
        viewport={{once:true,amount:0.5}}
        transition={{ type: "spring", duration: 1.2 }}
      >
        <motion.div
          variants={rotateCard}
          whileHover="rotateY"
          id="card-container"
          className="w-[300px] h-auto rounded-2xl text-left font-sora shadow-2xl lg:w-[350px] lg:h-auto lg:mx-6 p-10 mb-6"
        >
          <img
            className="h-[70px] my-6 ml-4"
            src="https://fit-me-zeta.vercel.app/images/cardio.png"
          ></img>
          <h3 className="ml-4 text-2xl font-bold text-purple-500 my-6">
            Cardio & Cross fit
          </h3>
          <p className="ml-4 text-gray-500 text-sm mb-10">
            Improve your cardiovascular health, help lower blood pressure,
            regulate weight, strengthen immune system, aid sleep with our
            Crossfit Cardio.
          </p>
          <button
            className="bg-purple-500 text-white ml-4 mb-4 rounded-2xl px-12 py-1"
            onClick={() =>
              navigate("../cardio_and_crossfit", { replace: true })
            }
          >
            Learn More
          </button>
        </motion.div>

        <motion.div
          variants={rotateCard}
          whileHover="rotateY"
          id="card-container"
          className="w-[300px] h-auto rounded-2xl text-left font-sora shadow-2xl bg-purple-500 lg:w-[350px] lg:h-auto lg:mx-6 p-10 mb-6"
        >
          <img
            className="h-[70px] my-6 ml-4"
            src="https://fit-me-zeta.vercel.app/images/gym.png"
          ></img>
          <h3 className="ml-4 text-2xl font-bold text-white my-6">
            Strength Training
          </h3>
          <p className="ml-4 text-white text-sm mb-10">
            Our professional trainers will help you manage or lose weight,
            increase your metabolism to help you burn more calories, enhance
            your quality of life.
          </p>
          <button
            className="bg-purple-500 text-white ml-4 mb-4 rounded-2xl px-2 py-1"
            onClick={() => navigate("/strength_training")}
          >
            Learn More
          </button>
        </motion.div>

        <motion.div
          variants={rotateCard}
          whileHover="rotateY"
          id="card-container"
          className="w-[300px] h-auto rounded-2xl text-left font-sora shadow-2xl lg:w-[350px]  lg:mx-6 p-10 mb-6"
        >
          <img
            className="h-[70px] my-6 ml-4"
            src="https://fit-me-zeta.vercel.app/images/yoga.png"
          ></img>
          <h3 className="ml-4 text-2xl font-bold text-purple-500 my-6">
            Yoga & Stretching
          </h3>
          <p className="ml-4 text-gray-500 text-sm mb-10">
            Yoga will help you improve strength, balance and flexibility, ease
            back pain, heart health, sleep better, manage stress.
          </p>
          <button
            className="bg-purple-500 text-white ml-4 mb-4 rounded-2xl px-12 py-1"
            onClick={() => navigate("/yoga_training")}
          >
            Learn More
          </button>
        </motion.div>
      </motion.div>
    </div>
  );
}

export default Programs;
