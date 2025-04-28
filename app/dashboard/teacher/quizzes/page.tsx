"use client"

import { useState } from "react"
import Link from "next/link"
import { SidebarNavigation } from "@/components/sidebar-navigation"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { BarChart3, Calendar, Clock, Filter, ListChecks, Plus, Search, Users } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Progress } from "@/components/ui/progress"

// Mock data for quizzes
const quizzes = [
  {
    id: "1",
    title: "Data Structures Fundamentals",
    course: "Advanced Programming",
    dueDate: "2025-05-12",
    status: "active",
    questions: 15,
    timeLimit: 30,
    submissions: 28,
    totalStudents: 35,
    averageScore: 78,
  },
  {
    id: "2",
    title: "Algorithm Complexity",
    course: "Advanced Programming",
    dueDate: "2025-05-18",
    status: "active",
    questions: 10,
    timeLimit: 20,
    submissions: 15,
    totalStudents: 35,
    averageScore: 82,
  },
  {
    id: "3",
    title: "Database Normalization",
    course: "Database Systems",
    dueDate: "2025-05-22",
    status: "active",
    questions: 12,
    timeLimit: 25,
    submissions: 10,
    totalStudents: 28,
    averageScore: 75,
  },
  {
    id: "4",
    title: "UI Design Principles",
    course: "Human-Computer Interaction",
    dueDate: "2025-04-28",
    status: "past",
    questions: 20,
    timeLimit: 40,
    submissions: 30,
    totalStudents: 32,
    averageScore: 85,
  },
  {
    id: "5",
    title: "Network Protocols",
    course: "Computer Networks",
    dueDate: "2025-04-20",
    status: "past",
    questions: 15,
    timeLimit: 30,
    submissions: 27,
    totalStudents: 30,
    averageScore: 72,
  },
  {
    id: "6",
    title: "Neural Networks Basics",
    course: "Artificial Intelligence",
    dueDate: "2025-05-30",
    status: "draft",
    questions: 18,
    timeLimit: 35,
    submissions: 0,
    totalStudents: 25,
    averageScore: 0,
  },
]

export default function QuizzesPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [activeTab, setActiveTab] = useState("active")

  // Filter quizzes based on search query and active tab
  const filteredQuizzes = quizzes.filter(
    (quiz) =>
      quiz.title.toLowerCase().includes(searchQuery.toLowerCase()) &&
      (activeTab === "all" || quiz.status === activeTab),
  )

  return (
    <SidebarNavigation role="teacher">
      <div className="space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <h1 className="text-2xl font-bold tracking-tight">Quizzes</h1>
            <p className="text-muted-foreground">Create and manage quizzes for your courses</p>
          </div>
          <Button asChild>
            <Link href="/dashboard/teacher/quizzes/create">
              <Plus className="mr-2 h-4 w-4" /> Create Quiz
            </Link>
          </Button>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
          <div className="relative w-full sm:w-96">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              type="search"
              placeholder="Search quizzes..."
              className="w-full pl-8"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          <div className="flex items-center gap-2 w-full sm:w-auto">
            <Select defaultValue="all-courses">
              <SelectTrigger className="w-full sm:w-[180px]">
                <SelectValue placeholder="All Courses" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all-courses">All Courses</SelectItem>
                <SelectItem value="advanced-programming">Advanced Programming</SelectItem>
                <SelectItem value="database-systems">Database Systems</SelectItem>
                <SelectItem value="human-computer-interaction">Human-Computer Interaction</SelectItem>
                <SelectItem value="computer-networks">Computer Networks</SelectItem>
                <SelectItem value="artificial-intelligence">Artificial Intelligence</SelectItem>
              </SelectContent>
            </Select>
            <Button variant="outline" size="icon">
              <Filter className="h-4 w-4" />
            </Button>
          </div>
        </div>

        <Tabs defaultValue="active" value={activeTab} onValueChange={setActiveTab}>
          <TabsList>
            <TabsTrigger value="active">Active</TabsTrigger>
            <TabsTrigger value="past">Past</TabsTrigger>
            <TabsTrigger value="draft">Drafts</TabsTrigger>
            <TabsTrigger value="all">All</TabsTrigger>
          </TabsList>
          <TabsContent value={activeTab} className="space-y-4 mt-4">
            {filteredQuizzes.length > 0 ? (
              filteredQuizzes.map((quiz) => (
                <Card key={quiz.id} className="glass-card overflow-hidden">
                  <CardContent className="p-0">
                    <div className="flex flex-col md:flex-row md:items-center justify-between">
                      <div className="p-6 flex-1">
                        <div className="flex items-start gap-4">
                          <div className="rounded-full bg-primary/10 p-3">
                            <ListChecks className="h-6 w-6 text-primary" />
                          </div>
                          <div>
                            <Link
                              href={`/dashboard/teacher/quizzes/${quiz.id}`}
                              className="text-lg font-medium hover:underline"
                            >
                              {quiz.title}
                            </Link>
                            <div className="flex flex-wrap items-center gap-2 mt-1">
                              <Badge variant="outline">{quiz.course}</Badge>
                              <div className="flex items-center text-sm text-muted-foreground">
                                <Calendar className="mr-1 h-3.5 w-3.5" />
                                Due: {new Date(quiz.dueDate).toLocaleDateString()}
                              </div>
                            </div>
                            <div className="flex flex-wrap items-center gap-4 mt-2 text-sm text-muted-foreground">
                              <div className="flex items-center">
                                <ListChecks className="mr-1 h-3.5 w-3.5" />
                                {quiz.questions} Questions
                              </div>
                              <div className="flex items-center">
                                <Clock className="mr-1 h-3.5 w-3.5" />
                                {quiz.timeLimit} Minutes
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-col p-4 md:p-6 bg-muted/30 border-t md:border-t-0 md:border-l">
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-sm text-muted-foreground">Completion</span>
                          <span className="text-sm font-medium">
                            {Math.round((quiz.submissions / quiz.totalStudents) * 100)}%
                          </span>
                        </div>
                        <Progress value={(quiz.submissions / quiz.totalStudents) * 100} className="h-2 mb-4" />
                        <div className="grid grid-cols-2 gap-4 mb-4">
                          <div>
                            <div className="text-sm text-muted-foreground">Submissions</div>
                            <div className="flex items-center">
                              <Users className="mr-1 h-3.5 w-3.5 text-muted-foreground" />
                              <span className="font-medium">
                                {quiz.submissions}/{quiz.totalStudents}
                              </span>
                            </div>
                          </div>
                          <div>
                            <div className="text-sm text-muted-foreground">Avg. Score</div>
                            <div className="flex items-center">
                              <BarChart3 className="mr-1 h-3.5 w-3.5 text-muted-foreground" />
                              <span className="font-medium">
                                {quiz.status === "draft" ? "N/A" : `${quiz.averageScore}%`}
                              </span>
                            </div>
                          </div>
                        </div>
                        <Button asChild>
                          <Link href={`/dashboard/teacher/quizzes/${quiz.id}`}>
                            {quiz.status === "draft" ? "Edit" : "View Results"}
                          </Link>
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))
            ) : (
              <Card className="glass-card">
                <CardContent className="flex flex-col items-center justify-center p-6 text-center">
                  <div className="rounded-full bg-primary/10 p-3 mb-4">
                    <ListChecks className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-lg font-medium">No quizzes found</h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    {searchQuery
                      ? "Try adjusting your search query"
                      : activeTab === "draft"
                        ? "You don't have any draft quizzes yet"
                        : "You don't have any quizzes in this category"}
                  </p>
                  <Button asChild>
                    <Link href="/dashboard/teacher/quizzes/create">
                      <Plus className="mr-2 h-4 w-4" /> Create Quiz
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            )}
          </TabsContent>
        </Tabs>
      </div>
    </SidebarNavigation>
  )
}
