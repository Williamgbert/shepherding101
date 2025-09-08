import { useState } from "react";

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
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-purple-100 to-indigo-200 p-6">
      <div className="bg-white rounded-2xl shadow-lg p-8 max-w-2xl w-full transition-all duration-500">
        <h1 className="text-3xl font-bold text-center text-indigo-700 mb-6">
          Shepherding 101
        </h1>

        <div className="mb-8">
          <h2 className="text-xl font-semibold text-gray-800 mb-3">
            {courseContent[currentStep].title}
          </h2>
          <p className="text-gray-700 leading-relaxed">
            {courseContent[currentStep].text}
          </p>
        </div>

        <div className="flex justify-between items-center">
          <button
            onClick={handlePrev}
            disabled={currentStep === 0}
            className={`px-4 py-2 rounded-lg text-white font-medium transition-colors ${
              currentStep === 0
                ? "bg-gray-300 cursor-not-allowed"
                : "bg-indigo-600 hover:bg-indigo-700"
            }`}
          >
            Previous
          </button>
          <span className="text-gray-600 text-sm">
            Step {currentStep + 1} of {courseContent.length}
          </span>
          <button
            onClick={handleNext}
            disabled={currentStep === courseContent.length - 1}
            className={`px-4 py-2 rounded-lg text-white font-medium transition-colors ${
              currentStep === courseContent.length - 1
                ? "bg-gray-300 cursor-not-allowed"
                : "bg-indigo-600 hover:bg-indigo-700"
            }`}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
}

export default ShepherdingCourse;
