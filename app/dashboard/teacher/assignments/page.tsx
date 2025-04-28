"use client"

import { useState } from "react"
import Link from "next/link"
import { SidebarNavigation } from "@/components/sidebar-navigation"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Calendar, FileText, Filter, Plus, Search, Users } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

// Mock data for assignments
const assignments = [
  {
    id: "1",
    title: "Data Structures Implementation",
    course: "Advanced Programming",
    dueDate: "2025-05-10",
    status: "active",
    submissions: 24,
    totalStudents: 35,
  },
  {
    id: "2",
    title: "Algorithm Analysis Report",
    course: "Advanced Programming",
    dueDate: "2025-05-15",
    status: "active",
    submissions: 18,
    totalStudents: 35,
  },
  {
    id: "3",
    title: "Database Design Project",
    course: "Database Systems",
    dueDate: "2025-05-20",
    status: "active",
    submissions: 12,
    totalStudents: 28,
  },
  {
    id: "4",
    title: "UI/UX Case Study",
    course: "Human-Computer Interaction",
    dueDate: "2025-04-30",
    status: "past",
    submissions: 30,
    totalStudents: 32,
  },
  {
    id: "5",
    title: "Network Security Analysis",
    course: "Computer Networks",
    dueDate: "2025-04-25",
    status: "past",
    submissions: 26,
    totalStudents: 30,
  },
  {
    id: "6",
    title: "Machine Learning Model Training",
    course: "Artificial Intelligence",
    dueDate: "2025-05-25",
    status: "draft",
    submissions: 0,
    totalStudents: 25,
  },
]

export default function AssignmentsPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [activeTab, setActiveTab] = useState("active")

  // Filter assignments based on search query and active tab
  const filteredAssignments = assignments.filter(
    (assignment) =>
      assignment.title.toLowerCase().includes(searchQuery.toLowerCase()) &&
      (activeTab === "all" || assignment.status === activeTab),
  )

  return (
    <SidebarNavigation role="teacher">
      <div className="space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <h1 className="text-2xl font-bold tracking-tight">Assignments</h1>
            <p className="text-muted-foreground">Create and manage assignments for your courses</p>
          </div>
          <Button asChild>
            <Link href="/dashboard/teacher/assignments/create">
              <Plus className="mr-2 h-4 w-4" /> Create Assignment
            </Link>
          </Button>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
          <div className="relative w-full sm:w-96">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              type="search"
              placeholder="Search assignments..."
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
            {filteredAssignments.length > 0 ? (
              filteredAssignments.map((assignment) => (
                <Card key={assignment.id} className="glass-card overflow-hidden">
                  <CardContent className="p-0">
                    <div className="flex flex-col md:flex-row md:items-center justify-between">
                      <div className="p-6 flex-1">
                        <div className="flex items-start gap-4">
                          <div className="rounded-full bg-primary/10 p-3">
                            <FileText className="h-6 w-6 text-primary" />
                          </div>
                          <div>
                            <Link
                              href={`/dashboard/teacher/assignments/${assignment.id}`}
                              className="text-lg font-medium hover:underline"
                            >
                              {assignment.title}
                            </Link>
                            <div className="flex flex-wrap items-center gap-2 mt-1">
                              <Badge variant="outline">{assignment.course}</Badge>
                              <div className="flex items-center text-sm text-muted-foreground">
                                <Calendar className="mr-1 h-3.5 w-3.5" />
                                Due: {new Date(assignment.dueDate).toLocaleDateString()}
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center justify-between md:justify-end gap-4 p-4 md:p-6 bg-muted/30 border-t md:border-t-0 md:border-l">
                        <div className="flex flex-col items-center">
                          <div className="flex items-center text-sm font-medium">
                            <Users className="mr-1 h-4 w-4 text-muted-foreground" />
                            <span>
                              {assignment.submissions}/{assignment.totalStudents}
                            </span>
                          </div>
                          <span className="text-xs text-muted-foreground">Submissions</span>
                        </div>
                        <Button asChild>
                          <Link href={`/dashboard/teacher/assignments/${assignment.id}`}>
                            {assignment.status === "draft" ? "Edit" : "Review"}
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
                    <FileText className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-lg font-medium">No assignments found</h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    {searchQuery
                      ? "Try adjusting your search query"
                      : activeTab === "draft"
                        ? "You don't have any draft assignments yet"
                        : "You don't have any assignments in this category"}
                  </p>
                  <Button asChild>
                    <Link href="/dashboard/teacher/assignments/create">
                      <Plus className="mr-2 h-4 w-4" /> Create Assignment
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
