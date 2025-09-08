// src/components/ShepherdingCourse.jsx
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const ShepherdingCourse = () => {
  const [currentLesson, setCurrentLesson] = useState(0);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [showQuiz, setShowQuiz] = useState(false);
  const [quizAnswers, setQuizAnswers] = useState({});
  const [showResults, setShowResults] = useState(false);
  const [completedLessons, setCompletedLessons] = useState(new Set());

  const lessons = [
    // Full lessons array from your original code (all 5 lessons)…
    // Copy everything from the last message here
  ];

  const currentLessonData = lessons[currentLesson];
  const totalSlides = currentLessonData.slides.length;

  const nextSlide = () => {
    if (currentSlide < totalSlides - 1) {
      setCurrentSlide(currentSlide + 1);
    } else {
      setShowQuiz(true);
    }
  };

  const prevSlide = () => {
    if (currentSlide > 0) {
      setCurrentSlide(currentSlide - 1);
    } else if (showQuiz) {
      setShowQuiz(false);
      setCurrentSlide(totalSlides - 1);
    }
  };

  const selectQuizAnswer = (optionIndex) => {
    setQuizAnswers({ ...quizAnswers, [currentLesson]: optionIndex });
  };

  const submitQuiz = () => {
    setShowResults(true);
    const isCorrect = quizAnswers[currentLesson] === currentLessonData.quiz.correct;
    if (isCorrect) {
      setCompletedLessons((prev) => new Set([...prev, currentLesson]));
    }
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

  const progress = (completedLessons.size / lessons.length) * 100;

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex flex-col">
      {/* Header */}
      <div className="bg-white shadow-sm border-b px-4 py-3">
        <h1 className="text-xl font-bold text-gray-800 text-center">Shepherding 101</h1>
        <p className="text-sm text-gray-600 text-center mt-1">Caring for People in Your Group</p>
        {/* Progress Bar */}
        <div className="mt-3">
          <div className="flex justify-between text-xs text-gray-600 mb-1">
            <span>Course Progress</span>
            <span>{Math.round(progress)}%</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div
              className="bg-blue-500 h-2 rounded-full transition-all duration-300"
              style={{ width: `${progress}%` }}
            ></div>
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
      <div className="flex-1 flex flex-col">
        {!showQuiz ? (
          <div className="flex-1 p-4">
            <div className="max-w-2xl mx-auto">
              {/* Lesson Header */}
              <div className="mb-6">
                <div
                  className={`inline-flex items-center space-x-2 px-3 py-1 rounded-full text-white text-sm font-medium ${currentLessonData.color}`}
                >
                  <span className="text-lg">{currentLessonData.icon}</span>
                  <span>{currentLessonData.title}</span>
                </div>
                <div className="flex justify-between items-center mt-3">
                  <h2 className="text-lg font-semibold text-gray-800">{currentLessonData.slides[currentSlide].title}</h2>
                  <span className="text-sm text-gray-500">
                    {currentSlide + 1} of {totalSlides}
                  </span>
                </div>
              </div>

              {/* Slide Content */}
              <AnimatePresence exitBeforeEnter>
                <motion.div
                  key={currentSlide}
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -50 }}
                  className="bg-white rounded-xl shadow-sm border p-6 mb-6"
                >
                  <p className="text-gray-700 mb-4 leading-relaxed">{currentLessonData.slides[currentSlide].content}</p>
                  <div className="space-y-3">
                    {currentLessonData.slides[currentSlide].points.map((point, i) => (
                      <div key={i} className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                        <p className="text-gray-700">{point}</p>
                      </div>
                    ))}
                  </div>
                </motion.div>
              </AnimatePresence>

              {/* Slide Indicators */}
              <div className="flex justify-center space-x-2 mb-6">
                {currentLessonData.slides.map((_, index) => (
                  <div key={index} className={`w-2 h-2 rounded-full ${index === currentSlide ? "bg-blue-500" : "bg-gray-300"}`}></div>
                ))}
              </div>
            </div>
          </div>
        ) : (
          // Quiz Content
          <div className="flex-1 p-4">
            <div className="max-w-2xl mx-auto">
              <div className="mb-6">
                <h2 className="text-lg font-semibold text-gray-800 mb-2">Knowledge Check</h2>
                <p className="text-gray-600">Test your understanding of this lesson</p>
              </div>

              <div className="bg-white rounded-xl shadow-sm border p-6 mb-6">
                <h3 className="font-medium text-gray-800 mb-4">{currentLessonData.quiz.question}</h3>
                <div className="space-y-3">
                  {currentLessonData.quiz.options.map((option, index) => (
                    <button
                      key={index}
                      onClick={() => selectQuizAnswer(index)}
                      disabled={showResults}
                      className={`w-full text-left p-4 rounded-lg border transition-all ${
                        quizAnswers[currentLesson] === index
                          ? showResults
                            ? index === currentLessonData.quiz.correct
                              ? "bg-green-50 border-green-500 text-green-800"
                              : "bg-red-50 border-red-500 text-red-800"
                            : "bg-blue-50 border-blue-500 text-blue-800"
                          : showResults && index === currentLessonData.quiz.correct
                          ? "bg-green-50 border-green-500 text-green-800"
                          : "bg-gray-50 border-gray-200 text-gray-700 hover:bg-gray-100"
                      }`}
                    >
                      {option}
                    </button>
                  ))}
                </div>

                {!showResults && quizAnswers[currentLesson] !== undefined && (
                  <button
                    onClick={submitQuiz}
                    className="w-full mt-4 bg-blue-500 text-white py-3 rounded-lg font-medium hover:bg-blue-600 transition-colors"
                  >
                    Submit Answer
                  </button>
                )}

                {showResults && (
                  <div className="mt-4 p-4 rounded-lg bg-gray-50">
                    <p className="font-medium text-gray-800">
                      {quizAnswers[currentLesson] === currentLessonData.quiz.correct ? "✅ Correct!" : "❌ Incorrect"}
                    </p>
                    <p className="text-sm text-gray-600 mt-1">
                      {quizAnswers[currentLesson] === currentLessonData.quiz.correct ? "Great job! You can move on to the next lesson." : "Review the lesson content and try again."}
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>
        )}

        {/* Navigation Buttons */}
        <div className="bg-white border-t px-4 py-4">
          <div className="max-w-2xl mx-auto flex justify-between">
            <button
              onClick={prevSlide}
              className={`flex items-center space-x-2 px-4 py-2 rounded-lg font-medium transition-colors ${
                currentSlide === 0 && !showQuiz ? "bg-gray-100 text-gray-400 cursor-not-allowed" : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
              disabled={currentSlide === 0 && !showQuiz}
            >
              <span>←</span>
              <span>Previous</span>
            </button>

            <div className="flex space-x-2">
              {showResults && quizAnswers[currentLesson] !== currentLessonData.quiz.correct && (
                <button
                  onClick={resetLesson}
                  className="px-4 py-2 bg-orange-500 text-white rounded-lg font-medium hover:bg-orange-600 transition-colors"
                >
                  Review Lesson
                </button>
              )}

              <button
                onClick={showQuiz ? (showResults && completedLessons.has(currentLesson) ? nextLesson : submitQuiz) : nextSlide}
                className={`flex items-center space-x-2 px-4 py-2 rounded-lg font-medium transition-colors ${
                  showResults && completedLessons.has(currentLesson) && currentLesson === lessons.length - 1
                    ? "bg-green-500 text-white hover:bg-green-600"
                    : "bg-blue-500 text-white hover:bg-blue-600"
                }`}
              >
                <span>
                  {showQuiz
                    ? showResults
                      ? completedLessons.has(currentLesson)
                        ? currentLesson === lessons.length - 1
                          ? "Complete Course"
                          : "Next Lesson"
                        : "Submit"
                      : "Submit"
                    : currentSlide === totalSlides - 1
                    ? "Take Quiz"
                    : "Next"}
                </span>
                <span>→</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Course Completion Modal */}
      {completedLessons.size === lessons.length && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-xl p-6 max-w-md w-full text-center">
            <div className="text-6xl mb-4">🎉</div>
            <h2 className="text-xl font-bold text-gray-800 mb-2">Congratulations!</h2>
            <p className="text-gray-600 mb-4">
              You've completed the Shepherding 101 course. You're now better equipped to care for people in your group with wisdom and compassion.
            </p>
            <button
              onClick={() => window.location.reload()}
              className="w-full bg-blue-500 text-white py-3 rounded-lg font-medium hover:bg-blue-600 transition-colors"
            >
              Start Over
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ShepherdingCourse;
