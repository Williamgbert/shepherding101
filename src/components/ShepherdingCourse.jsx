import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const ShepherdingCourse = () => {
  const [currentLesson, setCurrentLesson] = useState(0);
  const [completedLessons, setCompletedLessons] = useState(new Set());
  const [currentSlide, setCurrentSlide] = useState(0);
  const [showQuiz, setShowQuiz] = useState(false);
  const [quizAnswers, setQuizAnswers] = useState({});
  const [showResults, setShowResults] = useState(false);

  const lessons = [
    {
      id: 0,
      title: "Recognizing Spiritual Needs",
      icon: "❤️",
      color: "bg-blue-500",
      slides: [
        {
          title: "What Are Spiritual Needs?",
          content:
            "Spiritual needs are deep longings of the soul that connect us to God and purpose.",
          points: [
            "Need for meaning and purpose",
            "Desire for connection with God",
            "Seeking forgiveness and peace",
            "Longing for hope in difficult times",
          ],
        },
        {
          title: "Signs to Watch For",
          content: "Look for these indicators that someone may have spiritual needs:",
          points: [
            "Asking questions about faith or God",
            "Expressing feelings of emptiness or meaninglessness",
            "Struggling with guilt or shame",
            "Facing major life transitions or crises",
            "Showing interest in prayer or worship",
          ],
        },
        {
          title: "How to Respond",
          content: "When you recognize spiritual needs, respond with:",
          points: [
            "Active listening without judgment",
            "Gentle questions to understand better",
            "Sharing appropriate scripture or testimonies",
            "Offering to pray with them",
            "Connecting them to spiritual resources",
          ],
        },
      ],
      quiz: {
        question: "Which of these is a key sign of spiritual need?",
        options: [
          "Someone asking for money",
          "Someone expressing feelings of emptiness",
          "Someone being late to meetings",
          "Someone disagreeing with you",
        ],
        correct: 1,
      },
    },
    {
      id: 1,
      title: "Recognizing Emotional Needs",
      icon: "👥",
      color: "bg-green-500",
      slides: [
        {
          title: "Understanding Emotions",
          content: "Emotional needs involve feeling valued, understood, and supported.",
          points: [
            "Need for acceptance and belonging",
            "Desire to be heard and understood",
            "Seeking comfort in times of pain",
            "Wanting encouragement and affirmation",
          ],
        },
        {
          title: "Emotional Warning Signs",
          content: "Watch for these signs of emotional distress:",
          points: [
            "Withdrawal from group activities",
            "Sudden changes in behavior or mood",
            "Expressing feelings of loneliness or rejection",
            "Showing signs of anxiety or depression",
            "Difficulty making decisions",
          ],
        },
        {
          title: "Providing Emotional Care",
          content: "Respond to emotional needs by:",
          points: [
            "Creating a safe space for sharing",
            "Validating their feelings",
            "Offering consistent presence and support",
            "Avoiding quick fixes or advice",
            "Following up regularly",
          ],
        },
      ],
      quiz: {
        question: "What's the best first response to someone's emotional pain?",
        options: [
          "Give them advice immediately",
          "Tell them to pray about it",
          "Create a safe space for sharing",
          "Change the subject to cheer them up",
        ],
        correct: 2,
      },
    },
    {
      id: 2,
      title: "Recognizing Practical Needs",
      icon: "📞",
      color: "bg-purple-500",
      slides: [
        {
          title: "What Are Practical Needs?",
          content: "Practical needs are tangible, everyday challenges people face.",
          points: [
            "Financial struggles or job loss",
            "Health issues or medical needs",
            "Transportation problems",
            "Childcare or family challenges",
            "Housing or food insecurity",
          ],
        },
        {
          title: "Identifying Practical Needs",
          content: "People may not directly ask for help. Look for:",
          points: [
            "Mentions of financial stress",
            "Missing group activities due to transportation",
            "Appearing tired or overwhelmed",
            "Changes in appearance or hygiene",
            "Indirect comments about struggles",
          ],
        },
        {
          title: "Responding to Practical Needs",
          content: "Address practical needs through:",
          points: [
            "Asking specific, caring questions",
            "Offering concrete help within your ability",
            "Connecting them to church resources",
            "Mobilizing the group for support",
            "Following up on commitments made",
          ],
        },
      ],
      quiz: {
        question: "How should you identify practical needs?",
        options: [
          "Wait for people to ask directly",
          "Look for indirect signs and ask caring questions",
          "Assume everyone is fine unless told otherwise",
          "Only help with financial needs",
        ],
        correct: 1,
      },
    },
    {
      id: 3,
      title: "Prayer Ministry Basics",
      icon: "🙏",
      color: "bg-orange-500",
      slides: [
        {
          title: "The Heart of Prayer Ministry",
          content:
            "Prayer ministry is about partnering with God to bring His love and power into people's lives.",
          points: [
            "It's about God's work, not our ability",
            "Focus on listening to both God and the person",
            "Pray with faith and expectation",
            "Remember confidentiality is crucial",
          ],
        },
        {
          title: "Before You Pray",
          content: "Preparation is key to effective prayer ministry:",
          points: [
            "Ask permission before praying for someone",
            "Listen carefully to understand their need",
            "Ask clarifying questions if needed",
            "Invite the Holy Spirit to guide",
            "Set appropriate boundaries",
          ],
        },
        {
          title: "During Prayer",
          content: "Best practices while praying:",
          points: [
            "Keep prayers simple and heartfelt",
            "Pray scripture over their situation",
            "Listen for God's promptings",
            "Avoid 'preaching' through prayer",
            "Be sensitive to their comfort level",
          ],
        },
        {
          title: "After Prayer",
          content: "Follow up appropriately:",
          points: [
            "Check in on how they're doing",
            "Maintain confidentiality",
            "Continue praying for them privately",
            "Connect them to additional support if needed",
            "Document any pastoral care concerns",
          ],
        },
      ],
      quiz: {
        question: "What's the most important thing before praying for someone?",
        options: [
          "Making sure others can hear",
          "Having a long, eloquent prayer ready",
          "Asking permission and listening to their need",
          "Knowing the right Bible verses to quote",
        ],
        correct: 2,
      },
    },
    {
      id: 4,
      title: "When to Refer to Professionals",
      icon: "⚠️",
      color: "bg-red-500",
      slides: [
        {
          title: "Know Your Limits",
          content: "Caring shepherds know when professional help is needed.",
          points: [
            "You're not expected to handle everything",
            "Professional help shows wisdom, not failure",
            "Some situations require specialized training",
            "Your role is to care and connect, not cure",
          ],
        },
        {
          title: "When to Refer to Pastoral Staff",
          content: "Contact pastoral staff when you encounter:",
          points: [
            "Complex theological questions",
            "Marital or family crises",
            "Church discipline issues",
            "Requests for baptism or membership",
            "Situations beyond your experience",
          ],
        },
        {
          title: "When to Refer to Mental Health Professionals",
          content: "Seek professional help for:",
          points: [
            "Threats of suicide or self-harm",
            "Signs of severe depression or anxiety",
            "Substance abuse issues",
            "Domestic violence situations",
            "Trauma or PTSD symptoms",
            "Eating disorders",
          ],
        },
        {
          title: "How to Make Referrals",
          content: "Make referrals effectively:",
          points: [
            "Explain why you're recommending help",
            "Offer to help them make the connection",
            "Provide specific contact information",
            "Continue to support them through the process",
            "Follow up to ensure they received help",
          ],
        },
      ],
      quiz: {
        question: "What should you do if someone mentions thoughts of self-harm?",
        options: [
          "Tell them to pray more",
          "Keep it confidential and handle it yourself",
          "Immediately refer to mental health professionals",
          "Ignore it unless they bring it up again",
        ],
        correct: 2,
      },
    },
  ];

  const currentLessonData = lessons[currentLesson];
  const totalSlides = currentLessonData.slides.length;
  const progress = (completedLessons.size / lessons.length) * 100;

  const nextSlide = () => {
    if (currentSlide < totalSlides - 1) setCurrentSlide(currentSlide + 1);
    else setShowQuiz(true);
  };

  const prevSlide = () => {
    if (currentSlide > 0) setCurrentSlide(currentSlide - 1);
    else if (showQuiz) {
      setShowQuiz(false);
      setCurrentSlide(totalSlides - 1);
    }
  };

  const selectQuizAnswer = (optionIndex) =>
    setQuizAnswers({ ...quizAnswers, [currentLesson]: optionIndex });

  const submitQuiz = () => {
    setShowResults(true);
    if (quizAnswers[currentLesson] === currentLessonData.quiz.correct)
      setCompletedLessons((prev) => new Set([...prev, currentLesson]));
  };

  const nextLesson = () => {
    if (currentLesson < lessons.length - 1) {
      setCurrentLesson(currentLesson + 1);
      setCurrentSlide(0);
      setShowQuiz(false);
      setShowResults(false);
    }
  };

  const selectLesson = (lessonId) => {
    setCurrentLesson(lessonId);
    setCurrentSlide(0);
    setShowQuiz(false);
    setShowResults(false);
  };

  const resetLesson = () => {
    setCurrentSlide(0);
    setShowQuiz(false);
    setShowResults(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex flex-col">
      {/* Header */}
      <div className="bg-white shadow-sm border-b px-4 py-3">
        <h1 className="text-2xl font-bold text-gray-800 text-center">Shepherding 101</h1>
        <p className="text-sm text-gray-600 text-center mt-1">
          Caring for People in Your Group
        </p>

        {/* Animated Progress Bar */}
        <div className="mt-3">
          <div className="flex justify-between text-xs text-gray-600 mb-1">
            <span>Course Progress</span>
            <span>{Math.round(progress)}%</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-3">
            <motion.div
              className="bg-blue-500 h-3 rounded-full"
              animate={{ width: `${progress}%` }}
              transition={{ duration: 0.5 }}
            />
          </div>
        </div>
      </div>

      {/* Lesson Navigation */}
      <div className="bg-white border-b px-4 py-3 overflow-x-auto">
        <div className="flex space-x-2 min-w-max">
          {lessons.map((lesson, index) => (
            <button
              key={lesson.id}
              onClick={() => selectLesson(lesson.id)}
              className={`flex items-center space-x-2 px-3 py-2 rounded-lg text-sm font-medium transition-all whitespace-nowrap ${
                currentLesson === index
                  ? "bg-blue-500 text-white"
                  : completedLessons.has(index)
                  ? "bg-green-100 text-green-800"
                  : "bg-gray-100 text-gray-600 hover:bg-gray-200"
              }`}
            >
              {completedLessons.has(index) ? <span className="text-green-600">✅</span> : <span className="text-gray-400">⭕</span>}
              <span className="hidden sm:inline">{lesson.title}</span>
              <span className="sm:hidden">L{index + 1}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col p-4 max-w-4xl mx-auto w-full">
        <AnimatePresence mode="wait">
          {!showQuiz ? (
            <motion.div
              key={`slide-${currentSlide}`}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.3 }}
              className="flex-1 flex flex-col"
            >
              {/* Lesson Slide */}
              <div className={`inline-flex items-center space-x-2 px-3 py-1 rounded-full text-white text-sm font-medium ${currentLessonData.color}`}>
                <span className="text-lg">{currentLessonData.icon}</span>
                <span>{currentLessonData.title}</span>
              </div>

              <h2 className="text-xl font-semibold text-gray-800 mt-4">
                {currentLessonData.slides[currentSlide].title}
              </h2>

              <p className="text-gray-700 mt-2 mb-4">
                {currentLessonData.slides[currentSlide].content}
              </p>

              <ul className="space-y-2 list-inside list-disc text-gray-700">
                {currentLessonData.slides[currentSlide].points.map((p, i) => (
                  <li key={i}>{p}</li>
                ))}
              </ul>
            </motion.div>
          ) : (
            <motion.div
              key={`quiz-${currentLesson}`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              {/* Quiz Content */}
              <h2 className="text-xl font-semibold text-gray-800 mb-2">Knowledge Check</h2>
              <p className="text-gray-600 mb-4">Test your understanding of this lesson</p>
              <div className="space-y-3">
                {currentLessonData.quiz.options.map((opt, idx) => (
                  <button
                    key={idx}
                    onClick={() => selectQuizAnswer(idx)}
                    className={`w-full text-left p-4 rounded-lg border transition-colors ${
                      quizAnswers[currentLesson] === idx
                        ? showResults
                          ? idx === currentLessonData.quiz.correct
                            ? "bg-green-50 border-green-500 text-green-800"
                            : "bg-red-50 border-red-500 text-red-800"
                          : "bg-blue-50 border-blue-500 text-blue-800"
                        : showResults && idx === currentLessonData.quiz.correct
                        ? "bg-green-50 border-green-500 text-green-800"
                        : "bg-gray-50 border-gray-200 text-gray-700 hover:bg-gray-100"
                    }`}
                    disabled={showResults}
                  >
                    {opt}
                  </button>
                ))}
              </div>

              {showResults && (
                <div className="mt-4 p-4 rounded-lg bg-gray-50 text-gray-800">
                  {quizAnswers[currentLesson] === currentLessonData.quiz.correct ? "✅ Correct! Great job!" : "❌ Incorrect. Review and try again."}
                </div>
              )}

              <div className="flex justify-between mt-4">
                {!showResults ? (
                  <button
                    onClick={submitQuiz}
                    className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition"
                  >
                    Submit
                  </button>
                ) : (
                  <button
                    onClick={nextLesson}
                    className="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition"
                  >
                    Next Lesson
                  </button>
                )}
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Navigation */}
        <div className="flex justify-between mt-6">
          <button
            onClick={prevSlide}
            className="px-4 py-2 bg-gray-200 rounded-lg hover:bg-gray-300 transition"
          >
            Previous
          </button>
          {!showQuiz && (
            <button
              onClick={nextSlide}
              className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition"
            >
              Next
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default ShepherdingCourse;
