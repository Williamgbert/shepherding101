// src/components/ShepherdingCourse.jsx
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const ShepherdingCourse = () => {
  const [currentStep, setCurrentStep] = useState(0);

  const courseContent = [
    {
      title: "Recognizing Spiritual Needs",
      text:
        "Spiritual needs are deep longings of the soul that connect us to God and purpose. Learn how to listen and respond with wisdom.",
    },
    {
      title: "Recognizing Emotional Needs",
      text:
        "Emotional care is about presence: listening, validating, and offering steady support rather than quick fixes.",
    },
    {
      title: "Recognizing Practical Needs",
      text:
        "Practical needs are tangible problems (transportation, food, finances). Notice indirect signals and offer concrete help.",
    },
    {
      title: "Prayer Ministry Basics",
      text:
        "Prayer ministry partners with God. Ask permission, listen, pray simply, and follow up. Confidentiality matters.",
    },
    {
      title: "When to Refer to Professionals",
      text:
        "Know the limits of lay care. Refer for suicide risk, severe mental health issues, domestic violence, or specialized counseling.",
    }
  ];

  const total = courseContent.length;

  const handleNext = () => {
    setCurrentStep((s) => Math.min(s + 1, total - 1));
  };

  const handlePrev = () => {
    setCurrentStep((s) => Math.max(s - 1, 0));
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 p-6">
      <motion.div
        className="w-full max-w-4xl bg-white rounded-2xl shadow-2xl overflow-hidden"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="p-8">
          <h1 className="text-center text-4xl font-extrabold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent mb-6">
            Shepherding 101
          </h1>

          <div className="flex flex-col md:flex-row md:space-x-6">
            {/* Left: card/slide */}
            <div className="flex-1 mb-6 md:mb-0">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentStep}
                  initial={{ opacity: 0, x: 40 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -40 }}
                  transition={{ duration: 0.45 }}
                  className="bg-gradient-to-tr from-white to-indigo-50 rounded-xl p-6 shadow-lg"
                >
                  <h2 className="text-2xl font-semibold text-indigo-800 mb-3">
                    {courseContent[currentStep].title}
                  </h2>
                  <p className="text-gray-700 leading-relaxed">
                    {courseContent[currentStep].text}
                  </p>

                  <div className="mt-6 space-y-3">
                    <div className="flex items-center space-x-3">
                      <div className="w-3 h-3 rounded-full bg-indigo-500" />
                      <span className="text-sm text-gray-600">Practice listening</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-3 h-3 rounded-full bg-purple-500" />
                      <span className="text-sm text-gray-600">Ask gentle questions</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-3 h-3 rounded-full bg-pink-500" />
                      <span className="text-sm text-gray-600">Make practical plans</span>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Right: overview / progress */}
            <div className="w-full md:w-72">
              <div className="rounded-xl p-4 bg-white border shadow-sm">
                <div className="text-sm text-gray-500 mb-3">Course Progress</div>
                <div className="w-full bg-gray-100 rounded-full h-2 mb-3">
                  <motion.div
                    className="h-2 rounded-full bg-gradient-to-r from-indigo-500 to-purple-600"
                    initial={{ width: 0 }}
                    animate={{ width: `${((currentStep + 1) / total) * 100}%` }}
                    transition={{ duration: 0.5 }}
                  />
                </div>

                <div className="text-xs text-gray-600 mb-4">
                  Step {currentStep + 1} of {total}
                </div>

                <div className="space-y-2">
                  {courseContent.map((c, i) => (
                    <button
                      key={i}
                      onClick={() => setCurrentStep(i)}
                      className={`w-full text-left px-3 py-2 rounded-lg transition-all ${
                        i === currentStep
                          ? "bg-indigo-600 text-white shadow"
                          : "bg-gray-50 hover:bg-gray-100 text-gray-700"
                      }`}
                    >
                      <div className="flex justify-between items-center">
                        <div className="text-sm font-medium">{c.title}</div>
                        <div className="text-xs text-gray-400">L{i + 1}</div>
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Controls */}
          <div className="mt-6 flex justify-between items-center">
            <button
              onClick={handlePrev}
              disabled={currentStep === 0}
              className={`px-4 py-2 rounded-lg font-medium ${
                currentStep === 0
                  ? "bg-gray-200 text-gray-400 cursor-not-allowed"
                  : "bg-white border hover:shadow"
              }`}
            >
              ← Previous
            </button>

            <div className="text-sm text-gray-600">Take your time — practice each skill.</div>

            <button
              onClick={handleNext}
              disabled={currentStep === total - 1}
              className={`px-4 py-2 rounded-lg font-medium ${
                currentStep === total - 1
                  ? "bg-gray-200 text-gray-400 cursor-not-allowed"
                  : "bg-indigo-600 text-white hover:bg-indigo-700"
              }`}
            >
              Next →
            </button>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default ShepherdingCourse;
