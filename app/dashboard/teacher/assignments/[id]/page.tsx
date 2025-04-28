"use client"

import { useState } from "react"
import Link from "next/link"
import { SidebarNavigation } from "@/components/sidebar-navigation"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import {
  ArrowLeft,
  Calendar,
  CheckCircle2,
  Clock,
  Download,
  Eye,
  FileText,
  Search,
  Shield,
  Users,
  XCircle,
} from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Progress } from "@/components/ui/progress"
import { Separator } from "@/components/ui/separator"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

// Mock data for the assignment
const assignment = {
  id: "1",
  title: "Data Structures Implementation",
  description:
    "Implement a binary search tree and a hash table in your preferred programming language. Compare the performance of both data structures for different operations.",
  course: "Advanced Programming",
  dueDate: "2025-05-10T23:59:00",
  points: 100,
  submissionCount: 24,
  totalStudents: 35,
  lateSubmissions: 3,
  averageScore: 82,
  files: [
    { name: "assignment_instructions.pdf", size: "1.2 MB", type: "pdf" },
    { name: "reference_material.docx", size: "850 KB", type: "doc" },
  ],
}

// Mock data for student submissions
const submissions = [
  {
    id: "sub1",
    student: {
      id: "s1",
      name: "Alex Johnson",
      avatar: "/placeholder.svg?height=40&width=40",
    },
    submissionDate: "2025-05-09T14:30:00",
    status: "submitted",
    files: [
      { name: "binary_search_tree.py", size: "4.5 KB", type: "py" },
      { name: "hash_table.py", size: "3.2 KB", type: "py" },
      { name: "performance_analysis.pdf", size: "1.8 MB", type: "pdf" },
    ],
    grade: 92,
    feedback: "Excellent implementation with thorough performance analysis.",
    plagiarismScore: 2,
  },
  {
    id: "sub2",
    student: {
      id: "s2",
      name: "Jamie Smith",
      avatar: "/placeholder.svg?height=40&width=40",
    },
    submissionDate: "2025-05-08T10:15:00",
    status: "submitted",
    files: [
      { name: "data_structures.java", size: "8.3 KB", type: "java" },
      { name: "report.pdf", size: "2.1 MB", type: "pdf" },
    ],
    grade: 85,
    feedback: "Good work, but could improve the hash function efficiency.",
    plagiarismScore: 5,
  },
  {
    id: "sub3",
    student: {
      id: "s3",
      name: "Taylor Williams",
      avatar: "/placeholder.svg?height=40&width=40",
    },
    submissionDate: "2025-05-10T22:45:00",
    status: "submitted",
    files: [
      { name: "bst_implementation.cpp", size: "6.7 KB", type: "cpp" },
      { name: "hashtable.cpp", size: "5.9 KB", type: "cpp" },
      { name: "analysis.pdf", size: "1.5 MB", type: "pdf" },
    ],
    grade: 78,
    feedback: "Good implementation but missing some edge cases in the BST.",
    plagiarismScore: 3,
  },
  {
    id: "sub4",
    student: {
      id: "s4",
      name: "Morgan Lee",
      avatar: "/placeholder.svg?height=40&width=40",
    },
    submissionDate: "2025-05-11T01:20:00",
    status: "late",
    files: [
      { name: "data_structures.js", size: "7.2 KB", type: "js" },
      { name: "report.pdf", size: "1.9 MB", type: "pdf" },
    ],
    grade: 75,
    feedback: "Late submission. Good work but missing performance comparison.",
    plagiarismScore: 4,
  },
  {
    id: "sub5",
    student: {
      id: "s5",
      name: "Casey Brown",
      avatar: "/placeholder.svg?height=40&width=40",
    },
    submissionDate: null,
    status: "not_submitted",
    files: [],
    grade: null,
    feedback: "",
    plagiarismScore: null,
  },
]

export default function AssignmentReviewPage({ params }: { params: { id: string } }) {
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedSubmission, setSelectedSubmission] = useState<string | null>("sub1")
  const [gradeInput, setGradeInput] = useState<Record<string, number>>({
    sub1: 92,
    sub2: 85,
    sub3: 78,
    sub4: 75,
  })
  const [feedbackInput, setFeedbackInput] = useState<Record<string, string>>({
    sub1: "Excellent implementation with thorough performance analysis.",
    sub2: "Good work, but could improve the hash function efficiency.",
    sub3: "Good implementation but missing some edge cases in the BST.",
    sub4: "Late submission. Good work but missing performance comparison.",
  })

  // Filter submissions based on search query
  const filteredSubmissions = submissions.filter((submission) =>
    submission.student.name.toLowerCase().includes(searchQuery.toLowerCase()),
  )

  const selectedSubmissionData = submissions.find((sub) => sub.id === selectedSubmission)

  const handleGradeChange = (submissionId: string, value: string) => {
    const numValue = Number.parseInt(value, 10)
    if (!isNaN(numValue) && numValue >= 0 && numValue <= assignment.points) {
      setGradeInput((prev) => ({ ...prev, [submissionId]: numValue }))
    }
  }

  const handleFeedbackChange = (submissionId: string, value: string) => {
    setFeedbackInput((prev) => ({ ...prev, [submissionId]: value }))
  }

  const getFileIcon = (type: string) => {
    switch (type) {
      case "pdf":
        return <FileText className="h-4 w-4 text-red-500" />
      case "doc":
      case "docx":
        return <FileText className="h-4 w-4 text-blue-500" />
      case "py":
        return <FileText className="h-4 w-4 text-green-500" />
      case "java":
        return <FileText className="h-4 w-4 text-orange-500" />
      case "cpp":
        return <FileText className="h-4 w-4 text-purple-500" />
      case "js":
        return <FileText className="h-4 w-4 text-yellow-500" />
      default:
        return <FileText className="h-4 w-4" />
    }
  }

  return (
    <SidebarNavigation role="teacher">
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <Button variant="ghost" size="sm" asChild className="gap-1">
            <Link href="/dashboard/teacher/assignments">
              <ArrowLeft className="h-4 w-4" /> Back to Assignments
            </Link>
          </Button>
        </div>

        <div className="flex flex-col lg:flex-row gap-6">
          <div className="lg:w-1/3 space-y-4">
            <Card className="glass-card">
              <CardHeader>
                <CardTitle>{assignment.title}</CardTitle>
                <CardDescription>{assignment.course}</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <div className="flex items-center text-sm text-muted-foreground">
                    <Calendar className="mr-2 h-4 w-4" />
                    Due: {new Date(assignment.dueDate).toLocaleString()}
                  </div>
                  <div className="flex items-center text-sm text-muted-foreground">
                    <Users className="mr-2 h-4 w-4" />
                    Submissions: {assignment.submissionCount}/{assignment.totalStudents}
                  </div>
                </div>

                <Separator />

                <div className="space-y-2">
                  <h3 className="text-sm font-medium">Description</h3>
                  <p className="text-sm text-muted-foreground">{assignment.description}</p>
                </div>

                <Separator />

                <div className="space-y-2">
                  <h3 className="text-sm font-medium">Assignment Files</h3>
                  <div className="space-y-2">
                    {assignment.files.map((file, i) => (
                      <div key={i} className="flex items-center justify-between p-2 border rounded-md bg-background">
                        <div className="flex items-center gap-2">
                          {getFileIcon(file.type)}
                          <span className="text-sm">{file.name}</span>
                          <span className="text-xs text-muted-foreground">({file.size})</span>
                        </div>
                        <Button variant="ghost" size="icon" className="h-8 w-8">
                          <Download className="h-4 w-4" />
                        </Button>
                      </div>
                    ))}
                  </div>
                </div>

                <Separator />

                <div className="space-y-2">
                  <h3 className="text-sm font-medium">Submission Statistics</h3>
                  <div className="space-y-4">
                    <div className="space-y-1">
                      <div className="flex items-center justify-between text-sm">
                        <span>Submission Rate</span>
                        <span className="font-medium">
                          {Math.round((assignment.submissionCount / assignment.totalStudents) * 100)}%
                        </span>
                      </div>
                      <Progress value={(assignment.submissionCount / assignment.totalStudents) * 100} />
                    </div>
                    <div className="space-y-1">
                      <div className="flex items-center justify-between text-sm">
                        <span>Average Score</span>
                        <span className="font-medium">
                          {assignment.averageScore}/{assignment.points}
                        </span>
                      </div>
                      <Progress value={(assignment.averageScore / assignment.points) * 100} />
                    </div>
                    <div className="grid grid-cols-2 gap-2">
                      <div className="p-2 border rounded-md">
                        <div className="text-sm text-muted-foreground">On Time</div>
                        <div className="text-lg font-medium">
                          {assignment.submissionCount - assignment.lateSubmissions}
                        </div>
                      </div>
                      <div className="p-2 border rounded-md">
                        <div className="text-sm text-muted-foreground">Late</div>
                        <div className="text-lg font-medium">{assignment.lateSubmissions}</div>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="lg:w-2/3 space-y-4">
            <Card className="glass-card">
              <CardHeader>
                <CardTitle>Student Submissions</CardTitle>
                <CardDescription>Review and grade student work</CardDescription>
              </CardHeader>
              <CardContent className="p-0">
                <div className="flex flex-col md:flex-row">
                  <div className="md:w-1/3 border-r">
                    <div className="p-4">
                      <div className="relative mb-4">
                        <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                        <Input
                          type="search"
                          placeholder="Search students..."
                          className="w-full pl-8"
                          value={searchQuery}
                          onChange={(e) => setSearchQuery(e.target.value)}
                        />
                      </div>
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-sm font-medium">{filteredSubmissions.length} Students</span>
                        <Select defaultValue="all">
                          <SelectTrigger className="h-8 w-[120px]">
                            <SelectValue placeholder="Filter" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="all">All</SelectItem>
                            <SelectItem value="submitted">Submitted</SelectItem>
                            <SelectItem value="late">Late</SelectItem>
                            <SelectItem value="not_submitted">Not Submitted</SelectItem>
                            <SelectItem value="graded">Graded</SelectItem>
                            <SelectItem value="ungraded">Ungraded</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                    <div className="max-h-[500px] overflow-y-auto">
                      {filteredSubmissions.map((submission) => (
                        <div
                          key={submission.id}
                          className={`p-4 border-b cursor-pointer hover:bg-muted/50 ${
                            selectedSubmission === submission.id ? "bg-muted" : ""
                          }`}
                          onClick={() => setSelectedSubmission(submission.id)}
                        >
                          <div className="flex items-center gap-3">
                            <Avatar>
                              <AvatarImage
                                src={submission.student.avatar || "/placeholder.svg"}
                                alt={submission.student.name}
                              />
                              <AvatarFallback>{submission.student.name.charAt(0)}</AvatarFallback>
                            </Avatar>
                            <div className="flex-1 min-w-0">
                              <div className="font-medium truncate">{submission.student.name}</div>
                              <div className="flex items-center text-xs text-muted-foreground">
                                {submission.status === "submitted" && (
                                  <>
                                    <CheckCircle2 className="mr-1 h-3 w-3 text-green-500" />
                                    <span>Submitted {new Date(submission.submissionDate!).toLocaleDateString()}</span>
                                  </>
                                )}
                                {submission.status === "late" && (
                                  <>
                                    <Clock className="mr-1 h-3 w-3 text-amber-500" />
                                    <span>Late {new Date(submission.submissionDate!).toLocaleDateString()}</span>
                                  </>
                                )}
                                {submission.status === "not_submitted" && (
                                  <>
                                    <XCircle className="mr-1 h-3 w-3 text-destructive" />
                                    <span>Not submitted</span>
                                  </>
                                )}
                              </div>
                            </div>
                            {submission.grade !== null && (
                              <Badge variant={submission.grade >= 70 ? "default" : "outline"}>
                                {submission.grade}/{assignment.points}
                              </Badge>
                            )}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="md:w-2/3 p-4">
                    {selectedSubmissionData ? (
                      <div className="space-y-4">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-3">
                            <Avatar>
                              <AvatarImage
                                src={selectedSubmissionData.student.avatar || "/placeholder.svg"}
                                alt={selectedSubmissionData.student.name}
                              />
                              <AvatarFallback>{selectedSubmissionData.student.name.charAt(0)}</AvatarFallback>
                            </Avatar>
                            <div>
                              <div className="font-medium">{selectedSubmissionData.student.name}</div>
                              {selectedSubmissionData.status !== "not_submitted" && (
                                <div className="text-sm text-muted-foreground">
                                  Submitted {new Date(selectedSubmissionData.submissionDate!).toLocaleString()}
                                </div>
                              )}
                            </div>
                          </div>
                          {selectedSubmissionData.status !== "not_submitted" && (
                            <div className="flex items-center gap-2">
                              {selectedSubmissionData.plagiarismScore !== null && (
                                <Badge
                                  variant={selectedSubmissionData.plagiarismScore > 20 ? "destructive" : "outline"}
                                  className="gap-1"
                                >
                                  <Shield className="h-3 w-3" />
                                  {selectedSubmissionData.plagiarismScore}% Match
                                </Badge>
                              )}
                            </div>
                          )}
                        </div>

                        {selectedSubmissionData.status !== "not_submitted" ? (
                          <>
                            <div className="space-y-2">
                              <h3 className="text-sm font-medium">Submitted Files</h3>
                              <div className="space-y-2">
                                {selectedSubmissionData.files.map((file, i) => (
                                  <div
                                    key={i}
                                    className="flex items-center justify-between p-2 border rounded-md bg-background"
                                  >
                                    <div className="flex items-center gap-2">
                                      {getFileIcon(file.type)}
                                      <span className="text-sm">{file.name}</span>
                                      <span className="text-xs text-muted-foreground">({file.size})</span>
                                    </div>
                                    <div className="flex items-center gap-1">
                                      <Button variant="ghost" size="icon" className="h-8 w-8">
                                        <Eye className="h-4 w-4" />
                                      </Button>
                                      <Button variant="ghost" size="icon" className="h-8 w-8">
                                        <Download className="h-4 w-4" />
                                      </Button>
                                    </div>
                                  </div>
                                ))}
                              </div>
                            </div>

                            <Separator />

                            <div className="space-y-2">
                              <Label htmlFor="grade">Grade</Label>
                              <div className="flex items-center gap-2">
                                <Input
                                  id="grade"
                                  type="number"
                                  min="0"
                                  max={assignment.points}
                                  value={gradeInput[selectedSubmissionData.id] || ""}
                                  onChange={(e) => handleGradeChange(selectedSubmissionData.id, e.target.value)}
                                  className="w-24"
                                />
                                <span className="text-sm text-muted-foreground">/ {assignment.points} points</span>
                              </div>
                            </div>

                            <div className="space-y-2">
                              <Label htmlFor="feedback">Feedback</Label>
                              <Textarea
                                id="feedback"
                                rows={4}
                                value={feedbackInput[selectedSubmissionData.id] || ""}
                                onChange={(e) => handleFeedbackChange(selectedSubmissionData.id, e.target.value)}
                                placeholder="Provide feedback to the student..."
                              />
                            </div>

                            <div className="flex justify-end gap-2">
                              <Button variant="outline">Save</Button>
                              <Button>Submit Grade</Button>
                            </div>
                          </>
                        ) : (
                          <div className="flex flex-col items-center justify-center py-12 text-center">
                            <div className="rounded-full bg-muted p-3 mb-4">
                              <XCircle className="h-6 w-6 text-muted-foreground" />
                            </div>
                            <h3 className="text-lg font-medium">No Submission</h3>
                            <p className="text-sm text-muted-foreground max-w-md mb-4">
                              This student has not submitted any work for this assignment yet.
                            </p>
                            <Button variant="outline">Send Reminder</Button>
                          </div>
                        )}
                      </div>
                    ) : (
                      <div className="flex flex-col items-center justify-center py-12 text-center">
                        <div className="rounded-full bg-muted p-3 mb-4">
                          <FileText className="h-6 w-6 text-muted-foreground" />
                        </div>
                        <h3 className="text-lg font-medium">Select a Submission</h3>
                        <p className="text-sm text-muted-foreground max-w-md">
                          Select a student from the list to view and grade their submission.
                        </p>
                      </div>
                    )}
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
