"use client"

import { useState } from "react"
import { SidebarNavigation } from "@/components/sidebar-navigation"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Progress } from "@/components/ui/progress"
import { ArrowLeft, ArrowRight, Clock, HelpCircle, Users } from "lucide-react"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import { useRouter } from "next/navigation"

export default function QuizPlayPage({ params }: { params: { id: string } }) {
  const router = useRouter()
  const quizId = params.id

  // Mock quiz data
  const quiz = {
    id: quizId,
    title: "Data Structures Challenge",
    course: "Data Structures & Algorithms",
    duration: "30 min",
    totalQuestions: 10,
    participants: 18,
    questions: [
      {
        id: 1,
        text: "Which of the following data structures is used for implementing recursion?",
        options: ["Queue", "Stack", "Array", "List"],
        correctAnswer: 1,
      },
      {
        id: 2,
        text: "What is the time complexity of searching an element in a binary search tree?",
        options: ["O(1)", "O(log n)", "O(n)", "O(n²)"],
        correctAnswer: 1,
      },
      {
        id: 3,
        text: "Which of the following is not a linear data structure?",
        options: ["Array", "Linked List", "Queue", "Tree"],
        correctAnswer: 3,
      },
      {
        id: 4,
        text: "What is the worst-case time complexity of quicksort?",
        options: ["O(n log n)", "O(n²)", "O(n)", "O(log n)"],
        correctAnswer: 1,
      },
      {
        id: 5,
        text: "Which data structure follows the FIFO (First In First Out) principle?",
        options: ["Stack", "Queue", "Tree", "Graph"],
        correctAnswer: 1,
      },
    ],
  }

  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [selectedAnswers, setSelectedAnswers] = useState<number[]>(Array(quiz.questions.length).fill(-1))
  const [timeLeft, setTimeLeft] = useState(1800) // 30 minutes in seconds
  const [quizCompleted, setQuizCompleted] = useState(false)

  const handleAnswerSelect = (answerIndex: number) => {
    const newAnswers = [...selectedAnswers]
    newAnswers[currentQuestion] = answerIndex
    setSelectedAnswers(newAnswers)
  }

  const handleNextQuestion = () => {
    if (currentQuestion < quiz.questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1)
    } else {
      setQuizCompleted(true)
    }
  }

  const handlePreviousQuestion = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1)
    }
  }

  const handleSubmitQuiz = () => {
    router.push(`/dashboard/student/quizzes/${quizId}/results`)
  }

  // Format time left
  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60)
    const secs = seconds % 60
    return `${mins}:${secs < 10 ? "0" : ""}${secs}`
  }

  return (
    <SidebarNavigation role="student">
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold tracking-tight">{quiz.title}</h1>
            <p className="text-muted-foreground">{quiz.course}</p>
          </div>
          <div className="flex items-center gap-2">
            <Badge variant="outline" className="gap-1">
              <Users className="h-3 w-3" /> {quiz.participants} Participants
            </Badge>
            <Badge variant="outline" className="gap-1 bg-amber-500/10 text-amber-500 hover:bg-amber-500/20">
              <Clock className="h-3 w-3" /> {formatTime(timeLeft)}
            </Badge>
          </div>
        </div>

        <div className="flex flex-col md:flex-row gap-6">
          <div className="md:w-3/4 space-y-6">
            <Card className="glass-card">
              <CardHeader className="pb-2">
                <div className="flex items-center justify-between">
                  <CardTitle className="text-lg">
                    Question {currentQuestion + 1} of {quiz.questions.length}
                  </CardTitle>
                  <Badge variant="outline">{selectedAnswers[currentQuestion] >= 0 ? "Answered" : "Unanswered"}</Badge>
                </div>
                <Progress value={((currentQuestion + 1) / quiz.questions.length) * 100} className="h-2" />
              </CardHeader>
              <CardContent className="space-y-6 pt-4">
                <div className="space-y-2">
                  <h3 className="text-xl font-medium">{quiz.questions[currentQuestion].text}</h3>
                </div>

                <RadioGroup
                  value={
                    selectedAnswers[currentQuestion] >= 0 ? selectedAnswers[currentQuestion].toString() : undefined
                  }
                  onValueChange={(value) => handleAnswerSelect(Number.parseInt(value))}
                  className="space-y-3"
                >
                  {quiz.questions[currentQuestion].options.map((option, i) => (
                    <div key={i} className="flex items-center space-x-2 rounded-lg border p-3 hover:bg-muted">
                      <RadioGroupItem value={i.toString()} id={`option-${i}`} />
                      <Label htmlFor={`option-${i}`} className="flex-1 cursor-pointer py-2">
                        {option}
                      </Label>
                    </div>
                  ))}
                </RadioGroup>
              </CardContent>
              <CardFooter className="flex justify-between">
                <Button
                  variant="outline"
                  onClick={handlePreviousQuestion}
                  disabled={currentQuestion === 0}
                  className="gap-1"
                >
                  <ArrowLeft className="h-4 w-4" /> Previous
                </Button>
                <Button onClick={handleNextQuestion} className="gap-1">
                  {currentQuestion === quiz.questions.length - 1 ? "Finish" : "Next"} <ArrowRight className="h-4 w-4" />
                </Button>
              </CardFooter>
            </Card>

            {quizCompleted && (
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle>Quiz Completed</CardTitle>
                  <CardDescription>Review your answers before submitting</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-5 gap-2">
                    {quiz.questions.map((_, i) => (
                      <Button
                        key={i}
                        variant={selectedAnswers[i] >= 0 ? "default" : "outline"}
                        className={`h-10 w-10 ${selectedAnswers[i] >= 0 ? "bg-primary" : "bg-muted"}`}
                        onClick={() => setCurrentQuestion(i)}
                      >
                        {i + 1}
                      </Button>
                    ))}
                  </div>
                  <div className="flex items-center justify-between mt-4 p-3 rounded-lg bg-muted">
                    <div className="flex items-center gap-2">
                      <HelpCircle className="h-5 w-5 text-muted-foreground" />
                      <span className="text-sm">
                        {selectedAnswers.filter((a) => a >= 0).length} of {quiz.questions.length} questions answered
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-sm text-muted-foreground">Time remaining: {formatTime(timeLeft)}</span>
                    </div>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button onClick={handleSubmitQuiz} className="w-full">
                    Submit Quiz
                  </Button>
                </CardFooter>
              </Card>
            )}
          </div>

          <div className="md:w-1/4 space-y-4">
            <Card className="glass-card sticky top-20">
              <CardHeader>
                <CardTitle>Live Leaderboard</CardTitle>
                <CardDescription>Current standings</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {[
                  { name: "Alex Johnson", avatar: "/placeholder.svg?height=32&width=32", score: 8, answered: 8 },
                  { name: "Samantha Lee", avatar: "/placeholder.svg?height=32&width=32", score: 7, answered: 8 },
                  {
                    name: "You",
                    avatar: "/placeholder.svg?height=32&width=32",
                    score: 6,
                    answered: 7,
                    isCurrentUser: true,
                  },
                  { name: "David Chen", avatar: "/placeholder.svg?height=32&width=32", score: 5, answered: 6 },
                  { name: "Maria Rodriguez", avatar: "/placeholder.svg?height=32&width=32", score: 5, answered: 7 },
                ].map((participant, i) => (
                  <div
                    key={i}
                    className={`flex items-center justify-between p-2 rounded-lg ${
                      participant.isCurrentUser ? "bg-primary/10 border border-primary/20" : "border"
                    }`}
                  >
                    <div className="flex items-center gap-2">
                      <span className="font-medium">{i + 1}</span>
                      <Avatar className="h-8 w-8">
                        <AvatarImage src={participant.avatar || "/placeholder.svg"} />
                        <AvatarFallback>{participant.name[0]}</AvatarFallback>
                      </Avatar>
                      <span className={participant.isCurrentUser ? "font-medium" : ""}>{participant.name}</span>
                    </div>
                    <div className="flex flex-col items-end">
                      <span className="font-medium">{participant.score}</span>
                      <span className="text-xs text-muted-foreground">{participant.answered}/10</span>
                    </div>
                  </div>
                ))}

                <div className="pt-2">
                  <p className="text-xs text-muted-foreground text-center">
                    Leaderboard updates in real-time as participants answer questions
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="glass-card sticky top-96">
              <CardHeader className="pb-2">
                <CardTitle>Question Navigator</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-5 gap-2">
                  {quiz.questions.map((_, i) => (
                    <Button
                      key={i}
                      variant="outline"
                      className={`h-10 w-10 p-0 ${
                        i === currentQuestion
                          ? "border-primary bg-primary text-primary-foreground"
                          : selectedAnswers[i] >= 0
                            ? "bg-primary/10 text-primary"
                            : ""
                      }`}
                      onClick={() => setCurrentQuestion(i)}
                    >
                      {i + 1}
                    </Button>
                  ))}
                </div>
                <div className="flex items-center justify-between mt-4">
                  <div className="flex items-center gap-1">
                    <div className="h-3 w-3 rounded-full bg-primary/10 border border-primary"></div>
                    <span className="text-xs">Answered</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <div className="h-3 w-3 rounded-full bg-primary"></div>
                    <span className="text-xs">Current</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <div className="h-3 w-3 rounded-full bg-muted border"></div>
                    <span className="text-xs">Unanswered</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </SidebarNavigation>
  )
}
