import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { SidebarNavigation } from "@/components/sidebar-navigation"
import { Progress } from "@/components/ui/progress"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { BarChart, BookOpen, FileText, Layers, Plus, Sparkles, Users } from "lucide-react"
import Link from "next/link"

export default function TeacherDashboard() {
  return (
    <SidebarNavigation role="teacher">
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-bold tracking-tight">Teacher Dashboard</h1>
          <Button className="gap-2">
            <Plus className="h-4 w-4" /> Create New Course
          </Button>
        </div>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {[
            {
              title: "Active Courses",
              value: "6",
              description: "2 need updates",
              icon: BookOpen,
              color: "bg-blue-500/10 text-blue-500",
            },
            {
              title: "Total Students",
              value: "248",
              description: "+12 this week",
              icon: Users,
              color: "bg-green-500/10 text-green-500",
            },
            {
              title: "Pending Assignments",
              value: "18",
              description: "5 need grading",
              icon: FileText,
              color: "bg-amber-500/10 text-amber-500",
            },
            {
              title: "Upcoming Quizzes",
              value: "3",
              description: "Next: Tomorrow",
              icon: Layers,
              color: "bg-purple-500/10 text-purple-500",
            },
          ].map((item, i) => (
            <Card key={i} className="glass-card">
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium">{item.title}</CardTitle>
                <div className={`rounded-full p-2 ${item.color}`}>
                  <item.icon className="h-4 w-4" />
                </div>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{item.value}</div>
                <p className="text-xs text-muted-foreground">{item.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid gap-4 md:grid-cols-7">
          <Card className="md:col-span-4 glass-card">
            <CardHeader>
              <CardTitle>Student Engagement</CardTitle>
              <CardDescription>Weekly activity across your courses</CardDescription>
            </CardHeader>
            <CardContent className="pl-2">
              <div className="h-[200px] flex items-end gap-2">
                {[40, 30, 70, 80, 55, 60, 45].map((height, i) => (
                  <div key={i} className="relative flex flex-1 flex-col items-center">
                    <div className="w-full rounded-md bg-primary" style={{ height: `${height}%` }} />
                    <span className="mt-2 text-xs">{["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"][i]}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card className="md:col-span-3 glass-card">
            <CardHeader>
              <CardTitle>AI Teaching Assistant</CardTitle>
              <CardDescription>Powered by advanced AI</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="rounded-lg bg-muted p-3">
                <p className="text-sm">
                  Use AI to help create course content, grade assignments, and generate quizzes.
                </p>
              </div>
              <div className="space-y-2">
                {[
                  { label: "Generate Quiz", icon: Layers },
                  { label: "Create Course Outline", icon: BookOpen },
                  { label: "Grade Assignments", icon: FileText },
                ].map((item, i) => (
                  <Button key={i} variant="outline" className="w-full justify-start gap-2">
                    <Sparkles className="h-4 w-4 text-primary" />
                    <item.icon className="h-4 w-4" />
                    <span>{item.label}</span>
                  </Button>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        <Tabs defaultValue="courses">
          <TabsList>
            <TabsTrigger value="courses">My Courses</TabsTrigger>
            <TabsTrigger value="assignments">Pending Assignments</TabsTrigger>
            <TabsTrigger value="analytics">Student Analytics</TabsTrigger>
          </TabsList>

          <TabsContent value="courses" className="space-y-4 mt-4">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-medium">Active Courses</h3>
              <Button variant="outline" size="sm" asChild>
                <Link href="/dashboard/teacher/courses">View All</Link>
              </Button>
            </div>

            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  title: "Data Structures & Algorithms",
                  students: 42,
                  completion: 75,
                  image: "/placeholder.svg?height=100&width=200",
                },
                {
                  title: "Database Management",
                  students: 38,
                  completion: 60,
                  image: "/placeholder.svg?height=100&width=200",
                },
                {
                  title: "Software Engineering",
                  students: 56,
                  completion: 45,
                  image: "/placeholder.svg?height=100&width=200",
                },
              ].map((course, i) => (
                <Card key={i} className="overflow-hidden glass-card">
                  <div className="h-32 w-full bg-muted">
                    <img
                      src={course.image || "/placeholder.svg"}
                      alt={course.title}
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <CardHeader className="pb-2">
                    <div className="flex items-center justify-between">
                      <CardTitle className="text-base font-medium">{course.title}</CardTitle>
                      <Badge variant="outline" className="ml-auto">
                        <Users className="h-3 w-3 mr-1" /> {course.students}
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-muted-foreground">Average Completion</span>
                        <span className="text-sm font-medium">{course.completion}%</span>
                      </div>
                      <Progress value={course.completion} className="h-2" />
                      <div className="flex justify-end">
                        <Button variant="ghost" size="sm" className="gap-1">
                          <BarChart className="h-3 w-3" /> Analytics
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="assignments" className="space-y-4 mt-4">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-medium">Pending Assignments</h3>
              <Button variant="outline" size="sm" asChild>
                <Link href="/dashboard/teacher/assignments">View All</Link>
              </Button>
            </div>

            <Card className="glass-card">
              <CardContent className="p-0">
                <table className="w-full">
                  <thead>
                    <tr className="border-b">
                      <th className="text-left p-4 font-medium">Assignment</th>
                      <th className="text-left p-4 font-medium">Course</th>
                      <th className="text-left p-4 font-medium">Submissions</th>
                      <th className="text-left p-4 font-medium">Due Date</th>
                      <th className="text-left p-4 font-medium">Status</th>
                      <th className="text-left p-4 font-medium">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      {
                        title: "Algorithm Implementation",
                        course: "Data Structures",
                        submissions: "32/42",
                        dueDate: "Yesterday",
                        status: "Needs Grading",
                      },
                      {
                        title: "Database Schema Design",
                        course: "Database Management",
                        submissions: "28/38",
                        dueDate: "2 days ago",
                        status: "Needs Grading",
                      },
                      {
                        title: "UI/UX Prototype",
                        course: "Software Engineering",
                        submissions: "45/56",
                        dueDate: "Today",
                        status: "Open",
                      },
                    ].map((assignment, i) => (
                      <tr key={i} className="border-b">
                        <td className="p-4">{assignment.title}</td>
                        <td className="p-4">{assignment.course}</td>
                        <td className="p-4">{assignment.submissions}</td>
                        <td className="p-4">{assignment.dueDate}</td>
                        <td className="p-4">
                          <Badge variant={assignment.status === "Open" ? "outline" : "default"}>
                            {assignment.status}
                          </Badge>
                        </td>
                        <td className="p-4">
                          <Button variant="ghost" size="sm">
                            View
                          </Button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="analytics" className="space-y-4 mt-4">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-medium">Student Performance</h3>
              <Button variant="outline" size="sm" asChild>
                <Link href="/dashboard/teacher/analytics">Detailed Analytics</Link>
              </Button>
            </div>

            <div className="grid gap-4 md:grid-cols-2">
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle>Quiz Performance</CardTitle>
                  <CardDescription>Average scores by course</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {[
                      { course: "Data Structures", score: 82 },
                      { course: "Database Management", score: 76 },
                      { course: "Software Engineering", score: 88 },
                    ].map((item, i) => (
                      <div key={i} className="space-y-2">
                        <div className="flex items-center justify-between">
                          <span className="text-sm font-medium">{item.course}</span>
                          <span className="text-sm text-muted-foreground">{item.score}%</span>
                        </div>
                        <Progress value={item.score} className="h-2" />
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card className="glass-card">
                <CardHeader>
                  <CardTitle>Engagement Metrics</CardTitle>
                  <CardDescription>Student participation levels</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {[
                      { metric: "Video Completion", value: 78 },
                      { metric: "Assignment Submission", value: 92 },
                      { metric: "Discussion Participation", value: 64 },
                      { metric: "Quiz Attempts", value: 86 },
                    ].map((item, i) => (
                      <div key={i} className="space-y-2">
                        <div className="flex items-center justify-between">
                          <span className="text-sm font-medium">{item.metric}</span>
                          <span className="text-sm text-muted-foreground">{item.value}%</span>
                        </div>
                        <Progress value={item.value} className="h-2" />
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </SidebarNavigation>
  )
}
