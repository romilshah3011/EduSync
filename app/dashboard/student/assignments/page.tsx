import { SidebarNavigation } from "@/components/sidebar-navigation"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Calendar, CheckCircle, Clock, FileText, Upload } from "lucide-react"
import Link from "next/link"
import { Progress } from "@/components/ui/progress"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export default function AssignmentsPage() {
  return (
    <SidebarNavigation role="student">
      <div className="space-y-6">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <h1 className="text-2xl font-bold tracking-tight">Assignments</h1>
            <p className="text-muted-foreground">Manage and submit your course assignments</p>
          </div>
          <div className="flex items-center gap-2">
            <Select defaultValue="all">
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Filter by course" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Courses</SelectItem>
                <SelectItem value="dsa">Data Structures & Algorithms</SelectItem>
                <SelectItem value="db">Database Management</SelectItem>
                <SelectItem value="se">Software Engineering</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        <div className="grid gap-4 md:grid-cols-3">
          <Card className="glass-card">
            <CardHeader className="pb-2">
              <div className="flex items-center justify-between">
                <CardTitle className="text-base">Upcoming</CardTitle>
                <Badge>{3}</Badge>
              </div>
              <CardDescription>Assignments due soon</CardDescription>
            </CardHeader>
            <CardContent className="space-y-2">
              <Progress value={33} className="h-2" />
            </CardContent>
          </Card>
          <Card className="glass-card">
            <CardHeader className="pb-2">
              <div className="flex items-center justify-between">
                <CardTitle className="text-base">Submitted</CardTitle>
                <Badge variant="outline">{5}</Badge>
              </div>
              <CardDescription>Waiting for grades</CardDescription>
            </CardHeader>
            <CardContent className="space-y-2">
              <Progress value={56} className="h-2" />
            </CardContent>
          </Card>
          <Card className="glass-card">
            <CardHeader className="pb-2">
              <div className="flex items-center justify-between">
                <CardTitle className="text-base">Completed</CardTitle>
                <Badge variant="outline">{8}</Badge>
              </div>
              <CardDescription>Graded assignments</CardDescription>
            </CardHeader>
            <CardContent className="space-y-2">
              <Progress value={89} className="h-2" />
            </CardContent>
          </Card>
        </div>

        <Tabs defaultValue="upcoming">
          <TabsList>
            <TabsTrigger value="upcoming">Upcoming</TabsTrigger>
            <TabsTrigger value="submitted">Submitted</TabsTrigger>
            <TabsTrigger value="completed">Completed</TabsTrigger>
            <TabsTrigger value="all">All Assignments</TabsTrigger>
          </TabsList>

          <TabsContent value="upcoming" className="mt-4 space-y-4">
            {[
              {
                title: "Binary Trees Implementation",
                course: "Data Structures & Algorithms",
                due: "3 days",
                status: "Not started",
                id: "1",
              },
              {
                title: "Database Schema Design",
                course: "Database Management",
                due: "1 week",
                status: "In progress",
                id: "2",
              },
              {
                title: "UI/UX Prototype",
                course: "Software Engineering",
                due: "2 weeks",
                status: "Not started",
                id: "3",
              },
            ].map((assignment, i) => (
              <Card key={i} className="glass-card">
                <CardContent className="p-4 flex flex-col md:flex-row md:items-center justify-between gap-4">
                  <div className="flex items-start gap-3">
                    <div className="rounded-full bg-primary/10 p-2">
                      <FileText className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-medium">{assignment.title}</h3>
                      <p className="text-sm text-muted-foreground">{assignment.course}</p>
                      <div className="flex items-center gap-2 mt-1">
                        <Badge
                          variant={assignment.status === "In progress" ? "secondary" : "outline"}
                          className="text-xs"
                        >
                          {assignment.status}
                        </Badge>
                        <span className="text-xs text-muted-foreground flex items-center gap-1">
                          <Clock className="h-3 w-3" /> Due in {assignment.due}
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 self-end md:self-auto">
                    <Button variant="outline" size="sm" asChild>
                      <Link href={`/dashboard/student/assignments/${assignment.id}`}>View Details</Link>
                    </Button>
                    <Button size="sm" className="gap-1">
                      <Upload className="h-4 w-4" /> Submit
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </TabsContent>

          <TabsContent value="submitted" className="mt-4 space-y-4">
            {[
              {
                title: "Linked List Implementation",
                course: "Data Structures & Algorithms",
                submitted: "2 days ago",
                status: "Under review",
                id: "4",
              },
              {
                title: "SQL Queries Assignment",
                course: "Database Management",
                submitted: "1 week ago",
                status: "Under review",
                id: "5",
              },
              {
                title: "Requirements Specification",
                course: "Software Engineering",
                submitted: "3 days ago",
                status: "Under review",
                id: "6",
              },
            ].map((assignment, i) => (
              <Card key={i} className="glass-card">
                <CardContent className="p-4 flex flex-col md:flex-row md:items-center justify-between gap-4">
                  <div className="flex items-start gap-3">
                    <div className="rounded-full bg-amber-500/10 p-2">
                      <Clock className="h-5 w-5 text-amber-500" />
                    </div>
                    <div>
                      <h3 className="font-medium">{assignment.title}</h3>
                      <p className="text-sm text-muted-foreground">{assignment.course}</p>
                      <div className="flex items-center gap-2 mt-1">
                        <Badge variant="secondary" className="text-xs">
                          {assignment.status}
                        </Badge>
                        <span className="text-xs text-muted-foreground flex items-center gap-1">
                          <Calendar className="h-3 w-3" /> Submitted {assignment.submitted}
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 self-end md:self-auto">
                    <Button variant="outline" size="sm" asChild>
                      <Link href={`/dashboard/student/assignments/${assignment.id}`}>View Submission</Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </TabsContent>

          <TabsContent value="completed" className="mt-4 space-y-4">
            {[
              {
                title: "Arrays and Sorting",
                course: "Data Structures & Algorithms",
                submitted: "3 weeks ago",
                grade: "92/100",
                feedback: "Excellent work on the sorting algorithms!",
                id: "7",
              },
              {
                title: "ER Diagram Design",
                course: "Database Management",
                submitted: "2 weeks ago",
                grade: "88/100",
                feedback: "Good work, but could improve on the relationship notations.",
                id: "8",
              },
              {
                title: "Software Development Lifecycle",
                course: "Software Engineering",
                submitted: "1 month ago",
                grade: "95/100",
                feedback: "Outstanding analysis of the different methodologies.",
                id: "9",
              },
            ].map((assignment, i) => (
              <Card key={i} className="glass-card">
                <CardContent className="p-4 flex flex-col md:flex-row md:items-center justify-between gap-4">
                  <div className="flex items-start gap-3">
                    <div className="rounded-full bg-green-500/10 p-2">
                      <CheckCircle className="h-5 w-5 text-green-500" />
                    </div>
                    <div>
                      <h3 className="font-medium">{assignment.title}</h3>
                      <p className="text-sm text-muted-foreground">{assignment.course}</p>
                      <div className="flex items-center gap-2 mt-1">
                        <Badge
                          variant="outline"
                          className="text-xs bg-green-500/10 text-green-500 hover:bg-green-500/20"
                        >
                          Grade: {assignment.grade}
                        </Badge>
                        <span className="text-xs text-muted-foreground flex items-center gap-1">
                          <Calendar className="h-3 w-3" /> Submitted {assignment.submitted}
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 self-end md:self-auto">
                    <Button variant="outline" size="sm" asChild>
                      <Link href={`/dashboard/student/assignments/${assignment.id}`}>View Feedback</Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </TabsContent>

          <TabsContent value="all" className="mt-4">
            <Card className="glass-card">
              <CardHeader>
                <CardTitle>All Assignments</CardTitle>
                <CardDescription>View all your assignments across all courses</CardDescription>
              </CardHeader>
              <CardContent className="p-0">
                <table className="w-full">
                  <thead>
                    <tr className="border-b">
                      <th className="text-left p-4 font-medium">Assignment</th>
                      <th className="text-left p-4 font-medium">Course</th>
                      <th className="text-left p-4 font-medium">Due Date</th>
                      <th className="text-left p-4 font-medium">Status</th>
                      <th className="text-left p-4 font-medium">Grade</th>
                      <th className="text-left p-4 font-medium">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      {
                        title: "Binary Trees Implementation",
                        course: "Data Structures & Algorithms",
                        due: "3 days",
                        status: "Not started",
                        grade: "-",
                        id: "1",
                      },
                      {
                        title: "Database Schema Design",
                        course: "Database Management",
                        due: "1 week",
                        status: "In progress",
                        grade: "-",
                        id: "2",
                      },
                      {
                        title: "Linked List Implementation",
                        course: "Data Structures & Algorithms",
                        due: "2 days ago",
                        status: "Under review",
                        grade: "-",
                        id: "4",
                      },
                      {
                        title: "Arrays and Sorting",
                        course: "Data Structures & Algorithms",
                        due: "Completed",
                        status: "Completed",
                        grade: "92/100",
                        id: "7",
                      },
                      {
                        title: "ER Diagram Design",
                        course: "Database Management",
                        due: "Completed",
                        status: "Completed",
                        grade: "88/100",
                        id: "8",
                      },
                    ].map((assignment, i) => (
                      <tr key={i} className="border-b">
                        <td className="p-4">{assignment.title}</td>
                        <td className="p-4">{assignment.course}</td>
                        <td className="p-4">{assignment.due}</td>
                        <td className="p-4">
                          <Badge
                            variant={
                              assignment.status === "Completed"
                                ? "outline"
                                : assignment.status === "Under review"
                                  ? "secondary"
                                  : "default"
                            }
                            className={
                              assignment.status === "Completed"
                                ? "bg-green-500/10 text-green-500 hover:bg-green-500/20"
                                : ""
                            }
                          >
                            {assignment.status}
                          </Badge>
                        </td>
                        <td className="p-4">{assignment.grade}</td>
                        <td className="p-4">
                          <Button variant="ghost" size="sm" asChild>
                            <Link href={`/dashboard/student/assignments/${assignment.id}`}>View</Link>
                          </Button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </SidebarNavigation>
  )
}
