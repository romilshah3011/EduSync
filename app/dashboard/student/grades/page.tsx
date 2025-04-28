import { SidebarNavigation } from "@/components/sidebar-navigation"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Search, Filter, Download, BarChart, TrendingUp, AlertCircle } from "lucide-react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Progress } from "@/components/ui/progress"

export default function GradesPage() {
  return (
    <SidebarNavigation role="student">
      <div className="space-y-6">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <h1 className="text-2xl font-bold tracking-tight">My Grades</h1>
            <p className="text-muted-foreground">View your academic performance across all courses</p>
          </div>
          <div className="flex items-center gap-2">
            <Button variant="outline" size="sm" className="gap-1">
              <Download className="h-4 w-4" /> Export
            </Button>
            <div className="relative w-full md:w-64">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input
                type="search"
                placeholder="Search courses..."
                className="w-full bg-background pl-8 md:w-[300px] lg:w-[320px]"
              />
            </div>
            <Button variant="outline" size="icon">
              <Filter className="h-4 w-4" />
            </Button>
          </div>
        </div>

        <div className="grid gap-4 md:grid-cols-3">
          <Card className="glass-card">
            <CardHeader className="pb-2">
              <div className="flex items-center justify-between">
                <CardTitle className="text-base">Overall GPA</CardTitle>
                <Badge variant="outline" className="bg-primary/10 text-primary hover:bg-primary/20">
                  Current Semester
                </Badge>
              </div>
              <CardDescription>Cumulative grade point average</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">3.8/4.0</div>
              <div className="flex items-center gap-1 text-green-500 text-sm">
                <TrendingUp className="h-4 w-4" />
                <span>+0.2 from last semester</span>
              </div>
            </CardContent>
          </Card>
          <Card className="glass-card">
            <CardHeader className="pb-2">
              <div className="flex items-center justify-between">
                <CardTitle className="text-base">Completed Credits</CardTitle>
                <Badge variant="outline">Total</Badge>
              </div>
              <CardDescription>Credits earned towards graduation</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">68/120</div>
              <Progress value={(68 / 120) * 100} className="h-2 mt-2" />
              <p className="text-sm text-muted-foreground mt-2">57% of required credits completed</p>
            </CardContent>
          </Card>
          <Card className="glass-card">
            <CardHeader className="pb-2">
              <div className="flex items-center justify-between">
                <CardTitle className="text-base">Current Standing</CardTitle>
                <Badge variant="outline" className="bg-green-500/10 text-green-500 hover:bg-green-500/20">
                  Good Standing
                </Badge>
              </div>
              <CardDescription>Your academic status</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">Junior</div>
              <p className="text-sm text-muted-foreground">Year 3 - Computer Science</p>
            </CardContent>
          </Card>
        </div>

        <Tabs defaultValue="current">
          <TabsList>
            <TabsTrigger value="current">Current Semester</TabsTrigger>
            <TabsTrigger value="previous">Previous Semesters</TabsTrigger>
            <TabsTrigger value="all">All Courses</TabsTrigger>
            <TabsTrigger value="analytics">Grade Analytics</TabsTrigger>
          </TabsList>

          <TabsContent value="current" className="mt-4 space-y-4">
            <div className="flex items-center justify-between">
              <h2 className="text-xl font-semibold">Spring 2023 Grades</h2>
              <Select defaultValue="all">
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Filter by grade" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Grades</SelectItem>
                  <SelectItem value="a">A Grades</SelectItem>
                  <SelectItem value="b">B Grades</SelectItem>
                  <SelectItem value="c">C Grades</SelectItem>
                  <SelectItem value="d">D Grades</SelectItem>
                  <SelectItem value="f">F Grades</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <Card className="glass-card">
              <CardContent className="p-0">
                <table className="w-full">
                  <thead>
                    <tr className="border-b">
                      <th className="text-left p-4 font-medium">Course</th>
                      <th className="text-left p-4 font-medium">Code</th>
                      <th className="text-left p-4 font-medium">Instructor</th>
                      <th className="text-left p-4 font-medium">Credits</th>
                      <th className="text-left p-4 font-medium">Grade</th>
                      <th className="text-left p-4 font-medium">Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      {
                        course: "Data Structures & Algorithms",
                        code: "CS301",
                        instructor: "Prof. Johnson",
                        credits: 4,
                        grade: "A",
                        percentage: 92,
                        status: "Completed",
                      },
                      {
                        course: "Database Management Systems",
                        code: "CS302",
                        instructor: "Dr. Smith",
                        credits: 3,
                        grade: "A-",
                        percentage: 89,
                        status: "Completed",
                      },
                      {
                        course: "Software Engineering",
                        code: "CS310",
                        instructor: "Prof. Williams",
                        credits: 4,
                        grade: "B+",
                        percentage: 87,
                        status: "In Progress",
                      },
                      {
                        course: "Web Development",
                        code: "CS315",
                        instructor: "Prof. Garcia",
                        credits: 3,
                        grade: "A",
                        percentage: 94,
                        status: "Completed",
                      },
                      {
                        course: "Computer Networks",
                        code: "CS320",
                        instructor: "Dr. Reynolds",
                        credits: 3,
                        grade: "B",
                        percentage: 83,
                        status: "In Progress",
                      },
                    ].map((course, i) => (
                      <tr key={i} className="border-b">
                        <td className="p-4">{course.course}</td>
                        <td className="p-4">{course.code}</td>
                        <td className="p-4">{course.instructor}</td>
                        <td className="p-4">{course.credits}</td>
                        <td className="p-4">
                          <Badge
                            className={
                              course.grade.startsWith("A")
                                ? "bg-green-500/10 text-green-500"
                                : course.grade.startsWith("B")
                                  ? "bg-blue-500/10 text-blue-500"
                                  : course.grade.startsWith("C")
                                    ? "bg-amber-500/10 text-amber-500"
                                    : course.grade.startsWith("D")
                                      ? "bg-orange-500/10 text-orange-500"
                                      : "bg-red-500/10 text-red-500"
                            }
                          >
                            {course.grade} ({course.percentage}%)
                          </Badge>
                        </td>
                        <td className="p-4">
                          <Badge
                            variant="outline"
                            className={
                              course.status === "Completed"
                                ? "bg-green-500/10 text-green-500"
                                : "bg-blue-500/10 text-blue-500"
                            }
                          >
                            {course.status}
                          </Badge>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </CardContent>
            </Card>

            <div className="p-4 rounded-lg bg-amber-500/10 border border-amber-500/20 flex items-start gap-2">
              <AlertCircle className="h-5 w-5 text-amber-500 mt-0.5" />
              <div>
                <h3 className="font-medium text-amber-500">Grade Information</h3>
                <p className="text-sm text-muted-foreground">
                  Final grades for some courses may not be posted yet. Grades are updated as they are received from
                  instructors. If you have questions about a specific grade, please contact your instructor.
                </p>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="previous" className="mt-4 space-y-4">
            <div className="flex items-center justify-between">
              <h2 className="text-xl font-semibold">Previous Semesters</h2>
              <Select defaultValue="fall-2022">
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Select semester" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="fall-2022">Fall 2022</SelectItem>
                  <SelectItem value="spring-2022">Spring 2022</SelectItem>
                  <SelectItem value="fall-2021">Fall 2021</SelectItem>
                  <SelectItem value="spring-2021">Spring 2021</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <Card className="glass-card">
              <CardHeader>
                <CardTitle>Fall 2022</CardTitle>
                <CardDescription>GPA: 3.6/4.0 - Credits: 16</CardDescription>
              </CardHeader>
              <CardContent className="p-0">
                <table className="w-full">
                  <thead>
                    <tr className="border-b">
                      <th className="text-left p-4 font-medium">Course</th>
                      <th className="text-left p-4 font-medium">Code</th>
                      <th className="text-left p-4 font-medium">Credits</th>
                      <th className="text-left p-4 font-medium">Grade</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      {
                        course: "Introduction to Algorithms",
                        code: "CS201",
                        credits: 4,
                        grade: "A-",
                        percentage: 91,
                      },
                      {
                        course: "Operating Systems",
                        code: "CS240",
                        credits: 4,
                        grade: "B+",
                        percentage: 88,
                      },
                      {
                        course: "Discrete Mathematics",
                        code: "MATH210",
                        credits: 3,
                        grade: "A",
                        percentage: 94,
                      },
                      {
                        course: "Technical Writing",
                        code: "ENG220",
                        credits: 3,
                        grade: "B",
                        percentage: 85,
                      },
                      {
                        course: "Computer Architecture",
                        code: "CS230",
                        credits: 3,
                        grade: "A-",
                        percentage: 90,
                      },
                    ].map((course, i) => (
                      <tr key={i} className="border-b">
                        <td className="p-4">{course.course}</td>
                        <td className="p-4">{course.code}</td>
                        <td className="p-4">{course.credits}</td>
                        <td className="p-4">
                          <Badge
                            className={
                              course.grade.startsWith("A")
                                ? "bg-green-500/10 text-green-500"
                                : course.grade.startsWith("B")
                                  ? "bg-blue-500/10 text-blue-500"
                                  : course.grade.startsWith("C")
                                    ? "bg-amber-500/10 text-amber-500"
                                    : course.grade.startsWith("D")
                                      ? "bg-orange-500/10 text-orange-500"
                                      : "bg-red-500/10 text-red-500"
                            }
                          >
                            {course.grade} ({course.percentage}%)
                          </Badge>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="all" className="mt-4 space-y-4">
            <div className="flex items-center justify-between">
              <h2 className="text-xl font-semibold">All Courses</h2>
              <div className="flex items-center gap-2">
                <Select defaultValue="all">
                  <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="Filter by department" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Departments</SelectItem>
                    <SelectItem value="cs">Computer Science</SelectItem>
                    <SelectItem value="math">Mathematics</SelectItem>
                    <SelectItem value="eng">English</SelectItem>
                    <SelectItem value="sci">Science</SelectItem>
                  </SelectContent>
                </Select>
                <Select defaultValue="all">
                  <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="Sort by" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">Default Order</SelectItem>
                    <SelectItem value="grade-high">Highest Grade</SelectItem>
                    <SelectItem value="grade-low">Lowest Grade</SelectItem>
                    <SelectItem value="recent">Most Recent</SelectItem>
                    <SelectItem value="oldest">Oldest First</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <Card className="glass-card">
              <CardContent className="p-0">
                <table className="w-full">
                  <thead>
                    <tr className="border-b">
                      <th className="text-left p-4 font-medium">Course</th>
                      <th className="text-left p-4 font-medium">Code</th>
                      <th className="text-left p-4 font-medium">Semester</th>
                      <th className="text-left p-4 font-medium">Credits</th>
                      <th className="text-left p-4 font-medium">Grade</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      {
                        course: "Data Structures & Algorithms",
                        code: "CS301",
                        semester: "Spring 2023",
                        credits: 4,
                        grade: "A",
                        percentage: 92,
                      },
                      {
                        course: "Database Management Systems",
                        code: "CS302",
                        semester: "Spring 2023",
                        credits: 3,
                        grade: "A-",
                        percentage: 89,
                      },
                      {
                        course: "Introduction to Algorithms",
                        code: "CS201",
                        semester: "Fall 2022",
                        credits: 4,
                        grade: "A-",
                        percentage: 91,
                      },
                      {
                        course: "Operating Systems",
                        code: "CS240",
                        semester: "Fall 2022",
                        credits: 4,
                        grade: "B+",
                        percentage: 88,
                      },
                      {
                        course: "Discrete Mathematics",
                        code: "MATH210",
                        semester: "Fall 2022",
                        credits: 3,
                        grade: "A",
                        percentage: 94,
                      },
                      {
                        course: "Introduction to Programming",
                        code: "CS101",
                        semester: "Spring 2022",
                        credits: 4,
                        grade: "A",
                        percentage: 96,
                      },
                      {
                        course: "Calculus I",
                        code: "MATH101",
                        semester: "Spring 2022",
                        credits: 4,
                        grade: "B+",
                        percentage: 87,
                      },
                      {
                        course: "Introduction to Computer Science",
                        code: "CS100",
                        semester: "Fall 2021",
                        credits: 3,
                        grade: "A",
                        percentage: 95,
                      },
                      {
                        course: "College Writing",
                        code: "ENG101",
                        semester: "Fall 2021",
                        credits: 3,
                        grade: "A-",
                        percentage: 90,
                      },
                    ].map((course, i) => (
                      <tr key={i} className="border-b">
                        <td className="p-4">{course.course}</td>
                        <td className="p-4">{course.code}</td>
                        <td className="p-4">{course.semester}</td>
                        <td className="p-4">{course.credits}</td>
                        <td className="p-4">
                          <Badge
                            className={
                              course.grade.startsWith("A")
                                ? "bg-green-500/10 text-green-500"
                                : course.grade.startsWith("B")
                                  ? "bg-blue-500/10 text-blue-500"
                                  : course.grade.startsWith("C")
                                    ? "bg-amber-500/10 text-amber-500"
                                    : course.grade.startsWith("D")
                                      ? "bg-orange-500/10 text-orange-500"
                                      : "bg-red-500/10 text-red-500"
                            }
                          >
                            {course.grade} ({course.percentage}%)
                          </Badge>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="analytics" className="mt-4 space-y-6">
            <div className="flex items-center justify-between">
              <h2 className="text-xl font-semibold">Grade Analytics</h2>
              <Button variant="outline" size="sm" className="gap-1">
                <BarChart className="h-4 w-4" /> View Detailed Report
              </Button>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle>Grade Distribution</CardTitle>
                  <CardDescription>Your grades by letter grade</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {[
                      { grade: "A", count: 5, percentage: 38 },
                      { grade: "A-", count: 3, percentage: 23 },
                      { grade: "B+", count: 3, percentage: 23 },
                      { grade: "B", count: 2, percentage: 15 },
                      { grade: "B-", count: 0, percentage: 0 },
                      { grade: "C+", count: 0, percentage: 0 },
                      { grade: "C", count: 0, percentage: 0 },
                      { grade: "C-", count: 0, percentage: 0 },
                      { grade: "D", count: 0, percentage: 0 },
                      { grade: "F", count: 0, percentage: 0 },
                    ].map((item, i) => (
                      <div key={i} className="space-y-2">
                        <div className="flex items-center justify-between">
                          <span className="text-sm font-medium">{item.grade}</span>
                          <span className="text-sm text-muted-foreground">
                            {item.count} courses ({item.percentage}%)
                          </span>
                        </div>
                        <Progress value={item.percentage} className="h-2" />
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card className="glass-card">
                <CardHeader>
                  <CardTitle>GPA Trend</CardTitle>
                  <CardDescription>Your GPA over time</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="h-[300px] flex items-end gap-2">
                    {[
                      { semester: "Fall 2021", gpa: 3.7 },
                      { semester: "Spring 2022", gpa: 3.6 },
                      { semester: "Fall 2022", gpa: 3.6 },
                      { semester: "Spring 2023", gpa: 3.8 },
                    ].map((item, i) => (
                      <div key={i} className="relative flex flex-1 flex-col items-center">
                        <div className="w-full rounded-md bg-primary" style={{ height: `${(item.gpa / 4) * 100}%` }} />
                        <div className="mt-2 text-xs text-center">
                          <div>{item.semester}</div>
                          <div className="font-medium">{item.gpa}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card className="glass-card">
                <CardHeader>
                  <CardTitle>Performance by Department</CardTitle>
                  <CardDescription>Average grades across departments</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {[
                      { department: "Computer Science", average: 3.8, courses: 8 },
                      { department: "Mathematics", average: 3.7, courses: 2 },
                      { department: "English", average: 3.5, courses: 2 },
                      { department: "Science", average: 3.6, courses: 1 },
                    ].map((item, i) => (
                      <div key={i} className="space-y-2">
                        <div className="flex items-center justify-between">
                          <span className="text-sm font-medium">{item.department}</span>
                          <span className="text-sm text-muted-foreground">
                            {item.average}/4.0 ({item.courses} courses)
                          </span>
                        </div>
                        <Progress value={(item.average / 4) * 100} className="h-2" />
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card className="glass-card">
                <CardHeader>
                  <CardTitle>Areas for Improvement</CardTitle>
                  <CardDescription>Courses with lower performance</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-4">
                    {[
                      {
                        course: "Operating Systems",
                        code: "CS240",
                        grade: "B+",
                        improvement: "Focus on practical implementation",
                      },
                      {
                        course: "Technical Writing",
                        code: "ENG220",
                        grade: "B",
                        improvement: "Work on clarity and structure",
                      },
                      {
                        course: "Computer Networks",
                        code: "CS320",
                        grade: "B",
                        improvement: "Review networking protocols",
                      },
                    ].map((item, i) => (
                      <div key={i} className="p-3 border rounded-lg">
                        <div className="flex items-center justify-between">
                          <div>
                            <h4 className="font-medium">{item.course}</h4>
                            <p className="text-sm text-muted-foreground">{item.code}</p>
                          </div>
                          <Badge
                            className={
                              item.grade.startsWith("A")
                                ? "bg-green-500/10 text-green-500"
                                : item.grade.startsWith("B")
                                  ? "bg-blue-500/10 text-blue-500"
                                  : "bg-amber-500/10 text-amber-500"
                            }
                          >
                            {item.grade}
                          </Badge>
                        </div>
                        <div className="mt-2 flex items-start gap-2">
                          <TrendingUp className="h-4 w-4 text-green-500 mt-0.5" />
                          <p className="text-sm">{item.improvement}</p>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="p-4 rounded-lg bg-primary/5 border border-primary/20">
                    <h3 className="font-medium">Academic Advisor Note</h3>
                    <p className="text-sm text-muted-foreground mt-1">
                      Your overall performance is excellent. Consider taking more advanced courses in algorithms and
                      data structures where you've shown strong aptitude. Schedule a meeting to discuss graduate school
                      options.
                    </p>
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
