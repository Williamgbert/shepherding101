import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

function ShepherdingCourse() {
  const [currentStep, setCurrentStep] = useState(0);

  const courseContent = [
    {
      title: "Introduction",
      text: "Welcome to Shepherding 101. This course will guide you through the biblical, theological, and practical foundations of pastoral shepherding. You'll move step by step through history, theology, and real-life application.",
    },
    {
      title: "Biblical Foundations",
      text: "Shepherding imagery runs throughout Scripture. From David in the fields to Jesus as the Good Shepherd (John 10), the metaphor is central. Shepherding means guidance, provision, and protection.",
    },
    {
      title: "Historical Foundations",
      text: "The early church fathers often used shepherding imagery to describe pastoral leadership. For example, Ignatius of Antioch urged bishops to shepherd the flock as Christ did — not as lords, but as servants.",
    },
    {
      title: "Theological Foundations",
      text: "Shepherding reflects God’s care for His people. Pastors are under-shepherds, accountable to Christ, the Chief Shepherd (1 Peter 5:4). This means shepherding is less about authority and more about sacrificial service.",
    },
    {
      title: "Practical Shepherding",
      text: "Practical shepherding includes preaching the Word, visiting the sick, discipling believers, equipping leaders, and protecting the church from false teaching. It’s both spiritual care and organizational guidance.",
    },
    {
      title: "Challenges in Shepherding",
      text: "Shepherding in the modern era comes with challenges: burnout, cultural resistance, and the temptation toward corporate leadership models instead of biblical ones. A shepherd must guard his heart as well as his flock.",
    },
    {
      title: "Conclusion",
      text: "Pastoral shepherding is both an ancient practice and a present calling. Whether in a local congregation or multi-site context, the shepherd reflects Christ through faithful love and care for the flock."
    },
  ];

  const handleNext = () => {
    if (currentStep < courseContent.length - 1) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handlePrev = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-indigo-100 via-purple-100 to-pink-100 p-6">
      <motion.div
        className="bg-white rounded-2xl shadow-2xl p-8 max-w-3xl w-full relative overflow-hidden"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        {/* Title */}
        <h1 className="text-4xl font-extrabold text-center bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent mb-6">
          Shepherding 101
        </h1>

        {/* Animated Card */}
        <AnimatePresence mode="wait">
          <motion.div
            key={currentStep}
            initial={{ opacity: 0, x: 60 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -60 }}
            transition={{ duration: 0.5 }}
            className="bg-gradient-to-tr from-indigo-50 via-purple-50 to-pink-50 rounded-xl shadow-md p-6 mb-8"
          >
            <h2 className="text-2xl font-semibold text-indigo-800 mb-3">
              {courseContent[currentStep].title}
            </h2>
            <p className="text-gray-700 leading-relaxed">
              {courseContent[currentStep].text}
            </p>
          </motion.div>
        </AnimatePresence>

        {/* Progress Bar */}
        <div className="w-full bg-gray-200 rounded-full h-2 mb-6">
          <motion.div
            className="bg-gradient-to-r from-indigo-500 to-purple-600 h-2 rounded-full"
            initial={{ width: 0 }}
            animate={{
              width: `${((currentStep + 1) / courseContent.length) * 100}%`,
            }}
            transition={{ duration: 0.5 }}
          />
        </div>

        {/* Controls */}
        <div className="flex justify-between items-center">
          <button
            onClick={handlePrev}
            disabled={currentStep === 0}
            className={`px-5 py-2 rounded-lg font-medium transition-all ${
              currentStep === 0
                ? "bg-gray-300 text-gray-500 cursor-not-allowed"
                : "bg-indigo-600 text-white hover:bg-indigo-700 shadow-md"
            }`}
          >
            Previous
          </button>

          <span className="text-gray-600 text-sm font-medium">
            Step {currentStep + 1} of {courseContent.length}
          </span>

          <button
            onClick={handleNext}
            disabled={currentStep === courseContent.length - 1}
            className={`px-5 py-2 rounded-lg font-medium transition-all ${
              currentStep === courseContent.length - 1
                ? "bg-gray-300 text-gray-500 cursor-not-allowed"
                : "bg-purple-600 text-white hover:bg-purple-700 shadow-md"
            }`}
          >
            Next
          </button>
        </div>
      </motion.div>
    </div>
  );
}

export default ShepherdingCourse;
