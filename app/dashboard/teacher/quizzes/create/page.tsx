"use client"

import { Badge } from "@/components/ui/badge"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { SidebarNavigation } from "@/components/sidebar-navigation"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { useRouter } from "next/navigation"
import { ArrowLeft, ArrowUp, ArrowDown, Copy, ListChecks, Plus, Sparkles, Trash2, Upload, X } from "lucide-react"
import { Switch } from "@/components/ui/switch"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"

export default function CreateQuizPage() {
  const router = useRouter()
  const [activeTab, setActiveTab] = useState("details")
  const [quizMode, setQuizMode] = useState("manual")
  const [questions, setQuestions] = useState([
    {
      id: "q1",
      type: "multiple-choice",
      text: "Which data structure uses LIFO (Last In First Out) principle?",
      options: [
        { id: "o1", text: "Queue", isCorrect: false },
        { id: "o2", text: "Stack", isCorrect: true },
        { id: "o3", text: "Linked List", isCorrect: false },
        { id: "o4", text: "Binary Tree", isCorrect: false },
      ],
      points: 5,
    },
    {
      id: "q2",
      type: "true-false",
      text: "A binary search tree's search operation has an average time complexity of O(log n).",
      options: [
        { id: "o1", text: "True", isCorrect: true },
        { id: "o2", text: "False", isCorrect: false },
      ],
      points: 3,
    },
    {
      id: "q3",
      type: "short-answer",
      text: "What is the time complexity of quicksort in the worst case?",
      answer: "O(n²)",
      points: 5,
    },
  ])

  const handleAddQuestion = (type: string) => {
    const newQuestion = {
      id: `q${questions.length + 1}`,
      type,
      text: "",
      points: 5,
    }

    if (type === "multiple-choice") {
      newQuestion.options = [
        { id: "o1", text: "", isCorrect: false },
        { id: "o2", text: "", isCorrect: false },
        { id: "o3", text: "", isCorrect: false },
        { id: "o4", text: "", isCorrect: false },
      ]
    } else if (type === "true-false") {
      newQuestion.options = [
        { id: "o1", text: "True", isCorrect: false },
        { id: "o2", text: "False", isCorrect: false },
      ]
    } else if (type === "short-answer") {
      newQuestion.answer = ""
    }

    setQuestions([...questions, newQuestion])
  }

  const handleRemoveQuestion = (id: string) => {
    setQuestions(questions.filter((q) => q.id !== id))
  }

  const handleMoveQuestion = (id: string, direction: "up" | "down") => {
    const index = questions.findIndex((q) => q.id === id)
    if ((direction === "up" && index === 0) || (direction === "down" && index === questions.length - 1)) {
      return
    }

    const newQuestions = [...questions]
    const newIndex = direction === "up" ? index - 1 : index + 1
    const temp = newQuestions[index]
    newQuestions[index] = newQuestions[newIndex]
    newQuestions[newIndex] = temp
    setQuestions(newQuestions)
  }

  const handleDuplicateQuestion = (id: string) => {
    const questionToDuplicate = questions.find((q) => q.id === id)
    if (!questionToDuplicate) return

    const newQuestion = {
      ...JSON.parse(JSON.stringify(questionToDuplicate)),
      id: `q${questions.length + 1}`,
    }
    setQuestions([...questions, newQuestion])
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // In a real app, you would submit the quiz data to your backend
    router.push("/dashboard/teacher/quizzes")
  }

  return (
    <SidebarNavigation role="teacher">
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Button variant="ghost" size="sm" asChild className="gap-1">
              <Link href="/dashboard/teacher/quizzes">
                <ArrowLeft className="h-4 w-4" /> Back to Quizzes
              </Link>
            </Button>
          </div>
          <Button className="gap-1">
            <Sparkles className="h-4 w-4" /> Generate with AI
          </Button>
        </div>

        <div className="flex flex-col md:flex-row gap-6">
          <div className="md:w-2/3 space-y-4">
            <Card className="glass-card">
              <CardHeader>
                <CardTitle>Create a New Quiz</CardTitle>
                <CardDescription>Set up quiz details, questions, and settings</CardDescription>
              </CardHeader>
              <CardContent>
                <Tabs value={activeTab} onValueChange={setActiveTab}>
                  <TabsList className="grid grid-cols-3 mb-4">
                    <TabsTrigger value="details">Quiz Details</TabsTrigger>
                    <TabsTrigger value="questions">Questions</TabsTrigger>
                    <TabsTrigger value="settings">Settings</TabsTrigger>
                  </TabsList>

                  <TabsContent value="details" className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="title">Quiz Title</Label>
                      <Input id="title" placeholder="Enter quiz title" required />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="description">Quiz Description</Label>
                      <Textarea id="description" placeholder="Provide a description of the quiz" rows={3} />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="course">Course</Label>
                        <Select required>
                          <SelectTrigger>
                            <SelectValue placeholder="Select course" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="advanced-programming">Advanced Programming</SelectItem>
                            <SelectItem value="database-systems">Database Systems</SelectItem>
                            <SelectItem value="human-computer-interaction">Human-Computer Interaction</SelectItem>
                            <SelectItem value="computer-networks">Computer Networks</SelectItem>
                            <SelectItem value="artificial-intelligence">Artificial Intelligence</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="total-points">Total Points</Label>
                        <Input id="total-points" type="number" defaultValue="100" required />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="time-limit">Time Limit (minutes)</Label>
                        <Input id="time-limit" type="number" defaultValue="30" required />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="due-date">Due Date</Label>
                        <Input id="due-date" type="date" required />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label>Quiz Creation Mode</Label>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-2">
                        <div
                          className={`border rounded-lg p-4 cursor-pointer ${
                            quizMode === "manual" ? "border-primary bg-primary/5" : ""
                          }`}
                          onClick={() => setQuizMode("manual")}
                        >
                          <div className="flex items-center gap-2">
                            <ListChecks className="h-5 w-5 text-primary" />
                            <h3 className="font-medium">Manual Mode</h3>
                          </div>
                          <p className="text-sm text-muted-foreground mt-1">Create questions manually one by one</p>
                        </div>
                        <div
                          className={`border rounded-lg p-4 cursor-pointer ${
                            quizMode === "ai" ? "border-primary bg-primary/5" : ""
                          }`}
                          onClick={() => setQuizMode("ai")}
                        >
                          <div className="flex items-center gap-2">
                            <Sparkles className="h-5 w-5 text-primary" />
                            <h3 className="font-medium">AI-Generated Mode</h3>
                          </div>
                          <p className="text-sm text-muted-foreground mt-1">
                            Generate questions using AI from your materials
                          </p>
                        </div>
                      </div>
                    </div>

                    {quizMode === "ai" && (
                      <div className="space-y-4 p-4 border rounded-lg bg-muted/30">
                        <div className="space-y-2">
                          <Label>Upload Syllabus or Content</Label>
                          <div className="border-2 border-dashed rounded-lg p-6 flex flex-col items-center justify-center text-center">
                            <div className="mb-4 rounded-full bg-primary/10 p-3">
                              <Upload className="h-6 w-6 text-primary" />
                            </div>
                            <h3 className="font-medium">Drag and drop files here</h3>
                            <p className="text-sm text-muted-foreground mb-4">
                              Upload PDF, DOCX, or TXT files with your course content
                            </p>
                            <Button variant="outline">Choose Files</Button>
                          </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div className="space-y-2">
                            <Label htmlFor="num-questions">Number of Questions</Label>
                            <Input id="num-questions" type="number" defaultValue="10" />
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="difficulty">Difficulty Level</Label>
                            <Select defaultValue="medium">
                              <SelectTrigger>
                                <SelectValue placeholder="Select difficulty" />
                              </SelectTrigger>
                              <SelectContent>
                                <SelectItem value="easy">Easy</SelectItem>
                                <SelectItem value="medium">Medium</SelectItem>
                                <SelectItem value="hard">Hard</SelectItem>
                                <SelectItem value="mixed">Mixed</SelectItem>
                              </SelectContent>
                            </Select>
                          </div>
                        </div>

                        <div className="space-y-2">
                          <Label>Question Types</Label>
                          <div className="flex flex-wrap gap-2 mt-2">
                            <div className="flex items-center space-x-2">
                              <Checkbox id="ai-mcq" defaultChecked />
                              <Label htmlFor="ai-mcq">Multiple Choice</Label>
                            </div>
                            <div className="flex items-center space-x-2">
                              <Checkbox id="ai-tf" defaultChecked />
                              <Label htmlFor="ai-tf">True/False</Label>
                            </div>
                            <div className="flex items-center space-x-2">
                              <Checkbox id="ai-sa" />
                              <Label htmlFor="ai-sa">Short Answer</Label>
                            </div>
                          </div>
                        </div>

                        <Button className="w-full gap-1">
                          <Sparkles className="h-4 w-4" /> Generate Questions
                        </Button>
                      </div>
                    )}
                  </TabsContent>

                  <TabsContent value="questions" className="space-y-4">
                    <div className="flex items-center justify-between">
                      <h3 className="text-lg font-medium">Quiz Questions</h3>
                      <div className="flex gap-2">
                        <Select defaultValue="multiple-choice">
                          <SelectTrigger className="w-[180px]">
                            <SelectValue placeholder="Question type" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="multiple-choice">Multiple Choice</SelectItem>
                            <SelectItem value="true-false">True/False</SelectItem>
                            <SelectItem value="short-answer">Short Answer</SelectItem>
                          </SelectContent>
                        </Select>
                        <Button onClick={() => handleAddQuestion("multiple-choice")} className="gap-1">
                          <Plus className="h-4 w-4" /> Add Question
                        </Button>
                      </div>
                    </div>

                    <div className="space-y-4">
                      {questions.map((question, index) => (
                        <Card key={question.id} className="glass-card">
                          <CardHeader className="pb-2">
                            <div className="flex items-center justify-between">
                              <div className="flex items-center gap-2">
                                <Badge variant="outline">Question {index + 1}</Badge>
                                <Badge>
                                  {question.type === "multiple-choice"
                                    ? "Multiple Choice"
                                    : question.type === "true-false"
                                      ? "True/False"
                                      : "Short Answer"}
                                </Badge>
                              </div>
                              <div className="flex items-center gap-1">
                                <Button
                                  variant="ghost"
                                  size="icon"
                                  onClick={() => handleMoveQuestion(question.id, "up")}
                                  disabled={index === 0}
                                >
                                  <ArrowUp className="h-4 w-4" />
                                </Button>
                                <Button
                                  variant="ghost"
                                  size="icon"
                                  onClick={() => handleMoveQuestion(question.id, "down")}
                                  disabled={index === questions.length - 1}
                                >
                                  <ArrowDown className="h-4 w-4" />
                                </Button>
                                <Button
                                  variant="ghost"
                                  size="icon"
                                  onClick={() => handleDuplicateQuestion(question.id)}
                                >
                                  <Copy className="h-4 w-4" />
                                </Button>
                                <Button
                                  variant="ghost"
                                  size="icon"
                                  onClick={() => handleRemoveQuestion(question.id)}
                                  className="text-destructive"
                                >
                                  <Trash2 className="h-4 w-4" />
                                </Button>
                              </div>
                            </div>
                          </CardHeader>
                          <CardContent className="space-y-4">
                            <div className="space-y-2">
                              <Label htmlFor={`question-${question.id}`}>Question</Label>
                              <Textarea
                                id={`question-${question.id}`}
                                value={question.text}
                                onChange={(e) => {
                                  const newQuestions = [...questions]
                                  const questionIndex = newQuestions.findIndex((q) => q.id === question.id)
                                  newQuestions[questionIndex].text = e.target.value
                                  setQuestions(newQuestions)
                                }}
                                placeholder="Enter your question"
                                rows={2}
                              />
                            </div>

                            {question.type === "multiple-choice" && (
                              <div className="space-y-2">
                                <Label>Answer Options</Label>
                                <div className="space-y-2">
                                  {question.options?.map((option, optionIndex) => (
                                    <div key={option.id} className="flex items-center gap-2">
                                      <RadioGroup
                                        value={question.options.find((o) => o.isCorrect)?.id || ""}
                                        onValueChange={(value) => {
                                          const newQuestions = [...questions]
                                          const questionIndex = newQuestions.findIndex((q) => q.id === question.id)
                                          newQuestions[questionIndex].options = newQuestions[
                                            questionIndex
                                          ].options?.map((o) => ({
                                            ...o,
                                            isCorrect: o.id === value,
                                          }))
                                          setQuestions(newQuestions)
                                        }}
                                      >
                                        <RadioGroupItem value={option.id} id={option.id} />
                                      </RadioGroup>
                                      <Input
                                        value={option.text}
                                        onChange={(e) => {
                                          const newQuestions = [...questions]
                                          const questionIndex = newQuestions.findIndex((q) => q.id === question.id)
                                          newQuestions[questionIndex].options[optionIndex].text = e.target.value
                                          setQuestions(newQuestions)
                                        }}
                                        placeholder={`Option ${optionIndex + 1}`}
                                        className="flex-1"
                                      />
                                      <Button
                                        variant="ghost"
                                        size="icon"
                                        onClick={() => {
                                          const newQuestions = [...questions]
                                          const questionIndex = newQuestions.findIndex((q) => q.id === question.id)
                                          newQuestions[questionIndex].options = newQuestions[
                                            questionIndex
                                          ].options?.filter((_, i) => i !== optionIndex)
                                          setQuestions(newQuestions)
                                        }}
                                        disabled={question.options?.length <= 2}
                                        className="text-destructive"
                                      >
                                        <X className="h-4 w-4" />
                                      </Button>
                                    </div>
                                  ))}
                                </div>
                                <Button
                                  variant="outline"
                                  size="sm"
                                  onClick={() => {
                                    const newQuestions = [...questions]
                                    const questionIndex = newQuestions.findIndex((q) => q.id === question.id)
                                    newQuestions[questionIndex].options?.push({
                                      id: `o${newQuestions[questionIndex].options?.length + 1}`,
                                      text: "",
                                      isCorrect: false,
                                    })
                                    setQuestions(newQuestions)
                                  }}
                                  className="mt-2"
                                >
                                  Add Option
                                </Button>
                              </div>
                            )}

                            {question.type === "true-false" && (
                              <div className="space-y-2">
                                <Label>Correct Answer</Label>
                                <RadioGroup
                                  value={question.options?.find((o) => o.isCorrect)?.id || ""}
                                  onValueChange={(value) => {
                                    const newQuestions = [...questions]
                                    const questionIndex = newQuestions.findIndex((q) => q.id === question.id)
                                    newQuestions[questionIndex].options = newQuestions[questionIndex].options?.map(
                                      (o) => ({
                                        ...o,
                                        isCorrect: o.id === value,
                                      }),
                                    )
                                    setQuestions(newQuestions)
                                  }}
                                  className="flex gap-4"
                                >
                                  <div className="flex items-center space-x-2">
                                    <RadioGroupItem value="o1" id={`true-${question.id}`} />
                                    <Label htmlFor={`true-${question.id}`}>True</Label>
                                  </div>
                                  <div className="flex items-center space-x-2">
                                    <RadioGroupItem value="o2" id={`false-${question.id}`} />
                                    <Label htmlFor={`false-${question.id}`}>False</Label>
                                  </div>
                                </RadioGroup>
                              </div>
                            )}

                            {question.type === "short-answer" && (
                              <div className="space-y-2">
                                <Label htmlFor={`answer-${question.id}`}>Correct Answer</Label>
                                <Input
                                  id={`answer-${question.id}`}
                                  value={question.answer || ""}
                                  onChange={(e) => {
                                    const newQuestions = [...questions]
                                    const questionIndex = newQuestions.findIndex((q) => q.id === question.id)
                                    newQuestions[questionIndex].answer = e.target.value
                                    setQuestions(newQuestions)
                                  }}
                                  placeholder="Enter the correct answer"
                                />
                              </div>
                            )}

                            <div className="flex items-center gap-4">
                              <div className="space-y-2 w-24">
                                <Label htmlFor={`points-${question.id}`}>Points</Label>
                                <Input
                                  id={`points-${question.id}`}
                                  type="number"
                                  value={question.points}
                                  onChange={(e) => {
                                    const newQuestions = [...questions]
                                    const questionIndex = newQuestions.findIndex((q) => q.id === question.id)
                                    newQuestions[questionIndex].points = Number.parseInt(e.target.value)
                                    setQuestions(newQuestions)
                                  }}
                                  min="1"
                                />
                              </div>
                            </div>
                          </CardContent>
                        </Card>
                      ))}
                    </div>

                    {questions.length === 0 && (
                      <div className="flex flex-col items-center justify-center p-8 border-2 border-dashed rounded-lg text-center">
                        <div className="rounded-full bg-primary/10 p-3 mb-4">
                          <ListChecks className="h-6 w-6 text-primary" />
                        </div>
                        <h3 className="text-lg font-medium">No Questions Added</h3>
                        <p className="text-sm text-muted-foreground mb-4">Start adding questions to your quiz</p>
                        <div className="flex gap-2">
                          <Button onClick={() => handleAddQuestion("multiple-choice")}>Add Multiple Choice</Button>
                          <Button variant="outline" onClick={() => handleAddQuestion("true-false")}>
                            Add True/False
                          </Button>
                          <Button variant="outline" onClick={() => handleAddQuestion("short-answer")}>
                            Add Short Answer
                          </Button>
                        </div>
                      </div>
                    )}
                  </TabsContent>

                  <TabsContent value="settings" className="space-y-4">
                    <div className="space-y-2">
                      <h3 className="text-lg font-medium">Quiz Settings</h3>
                      <p className="text-sm text-muted-foreground">
                        Configure how the quiz will be presented to students
                      </p>
                    </div>

                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <div className="space-y-0.5">
                          <Label htmlFor="shuffle-questions">Shuffle Questions</Label>
                          <p className="text-sm text-muted-foreground">
                            Present questions in random order for each student
                          </p>
                        </div>
                        <Switch id="shuffle-questions" defaultChecked />
                      </div>

                      <div className="flex items-center justify-between">
                        <div className="space-y-0.5">
                          <Label htmlFor="shuffle-options">Shuffle Answer Options</Label>
                          <p className="text-sm text-muted-foreground">
                            Randomize the order of answer options for multiple choice questions
                          </p>
                        </div>
                        <Switch id="shuffle-options" defaultChecked />
                      </div>

                      <div className="flex items-center justify-between">
                        <div className="space-y-0.5">
                          <Label htmlFor="show-results">Show Results After Submission</Label>
                          <p className="text-sm text-muted-foreground">
                            Allow students to see their score immediately after submitting
                          </p>
                        </div>
                        <Switch id="show-results" />
                      </div>

                      <div className="flex items-center justify-between">
                        <div className="space-y-0.5">
                          <Label htmlFor="show-answers">Show Correct Answers</Label>
                          <p className="text-sm text-muted-foreground">Show correct answers after quiz completion</p>
                        </div>
                        <Switch id="show-answers" />
                      </div>

                      <div className="flex items-center justify-between">
                        <div className="space-y-0.5">
                          <Label htmlFor="one-at-time">One Question at a Time</Label>
                          <p className="text-sm text-muted-foreground">
                            Show only one question at a time, with next/previous navigation
                          </p>
                        </div>
                        <Switch id="one-at-time" />
                      </div>

                      <div className="flex items-center justify-between">
                        <div className="space-y-0.5">
                          <Label htmlFor="time-limit-enforced">Enforce Time Limit</Label>
                          <p className="text-sm text-muted-foreground">Automatically submit quiz when time expires</p>
                        </div>
                        <Switch id="time-limit-enforced" defaultChecked />
                      </div>

                      <div className="flex items-center justify-between">
                        <div className="space-y-0.5">
                          <Label htmlFor="multiple-attempts">Allow Multiple Attempts</Label>
                          <p className="text-sm text-muted-foreground">Students can take the quiz more than once</p>
                        </div>
                        <Switch id="multiple-attempts" />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="password">Quiz Password (Optional)</Label>
                        <Input id="password" type="password" placeholder="Enter a password to restrict access" />
                        <p className="text-xs text-muted-foreground">
                          If set, students will need to enter this password to access the quiz
                        </p>
                      </div>
                    </div>
                  </TabsContent>
                </Tabs>
              </CardContent>
              <CardFooter className="flex justify-between">
                <Button variant="outline" asChild>
                  <Link href="/dashboard/teacher/quizzes">Cancel</Link>
                </Button>
                <div className="flex gap-2">
                  <Button variant="outline">Save as Draft</Button>
                  <Button onClick={handleSubmit}>Create Quiz</Button>
                </div>
              </CardFooter>
            </Card>
          </div>

          <div className="md:w-1/3 space-y-4">
            <Card className="glass-card sticky top-20">
              <CardHeader>
                <CardTitle>Quiz Creation Tips</CardTitle>
                <CardDescription>Best practices for effective quizzes</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <h3 className="font-medium">Question Design</h3>
                  <ul className="text-sm text-muted-foreground space-y-1 list-disc list-inside">
                    <li>Keep questions clear and concise</li>
                    <li>Avoid double negatives in questions</li>
                    <li>Make all multiple choice options plausible</li>
                    <li>Ensure questions align with learning objectives</li>
                    <li>Vary question types to test different skills</li>
                  </ul>
                </div>

                <div className="space-y-2">
                  <h3 className="font-medium">Quiz Structure</h3>
                  <ul className="text-sm text-muted-foreground space-y-1 list-disc list-inside">
                    <li>Start with easier questions to build confidence</li>
                    <li>Group questions by topic or difficulty</li>
                    <li>Include a mix of recall and application questions</li>
                    <li>Allocate points based on question complexity</li>
                    <li>Set appropriate time limits for completion</li>
                  </ul>
                </div>

                <div className="p-4 rounded-lg bg-primary/5 border border-primary/20 flex items-start gap-2">
                  <Sparkles className="h-5 w-5 text-primary mt-0.5" />
                  <div>
                    <h3 className="font-medium">AI Quiz Generation</h3>
                    <p className="text-sm text-muted-foreground">
                      Upload your course materials and let our AI generate quiz questions automatically. Click the
                      "Generate with AI" button to get started.
                    </p>
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
