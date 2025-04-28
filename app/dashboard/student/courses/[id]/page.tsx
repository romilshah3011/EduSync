import { SidebarNavigation } from "@/components/sidebar-navigation"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  BookOpen,
  Calendar,
  CheckCircle2,
  Clock,
  FileText,
  LockIcon,
  MessageSquare,
  Play,
  Star,
  Users,
} from "lucide-react"
import { Progress } from "@/components/ui/progress"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import Link from "next/link"

export default function CourseDetailsPage({ params }: { params: { id: string } }) {
  const courseId = params.id

  // Mock course data
  const course = {
    id: courseId,
    title: "Data Structures & Algorithms",
    instructor: "Prof. Johnson",
    department: "Computer Science",
    level: "Intermediate",
    duration: "12 weeks",
    rating: 4.8,
    students: 248,
    progress: 75,
    image: "/placeholder.svg?height=200&width=400",
    description:
      "Learn the fundamental data structures and algorithms used in computer science. This course covers arrays, linked lists, trees, graphs, sorting algorithms, and more.",
    prerequisites: ["Introduction to Programming", "Discrete Mathematics"],
    modules: [
      {
        title: "Introduction to Data Structures",
        status: "completed",
        type: "video",
        duration: "45 min",
      },
      {
        title: "Arrays and Linked Lists",
        status: "completed",
        type: "video",
        duration: "1 hr 10 min",
      },
      {
        title: "Stacks and Queues",
        status: "completed",
        type: "video",
        duration: "55 min",
      },
      {
        title: "Trees and Binary Search Trees",
        status: "in-progress",
        type: "video",
        duration: "1 hr 20 min",
      },
      {
        title: "Binary Trees Assignment",
        status: "pending",
        type: "assignment",
        duration: "2 hrs",
      },
      {
        title: "Heaps and Priority Queues",
        status: "locked",
        type: "video",
        duration: "1 hr",
      },
      {
        title: "Graphs and Graph Algorithms",
        status: "locked",
        type: "video",
        duration: "1 hr 30 min",
      },
      {
        title: "Sorting Algorithms",
        status: "locked",
        type: "video",
        duration: "1 hr 15 min",
      },
      {
        title: "Final Project",
        status: "locked",
        type: "project",
        duration: "10 hrs",
      },
    ],
    assignments: [
      {
        title: "Linked List Implementation",
        due: "Completed",
        grade: "92/100",
      },
      {
        title: "Stack and Queue Applications",
        due: "Completed",
        grade: "88/100",
      },
      {
        title: "Binary Trees Implementation",
        due: "Due in 3 days",
        grade: "Not submitted",
      },
    ],
  }

  return (
    <SidebarNavigation role="student">
      <div className="space-y-6">
        <div className="flex flex-col md:flex-row gap-6">
          <div className="md:w-2/3 space-y-6">
            <div className="relative h-48 md:h-64 w-full rounded-lg overflow-hidden">
              <img src={course.image || "/placeholder.svg"} alt={course.title} className="h-full w-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
              <div className="absolute bottom-0 left-0 p-4">
                <Badge variant="outline" className="bg-background/50 backdrop-blur-sm mb-2">
                  {course.level}
                </Badge>
                <h1 className="text-2xl md:text-3xl font-bold">{course.title}</h1>
                <p className="text-muted-foreground">{course.instructor}</p>
              </div>
            </div>

            <Tabs defaultValue="modules">
              <TabsList className="grid grid-cols-4 w-full">
                <TabsTrigger value="modules">Modules</TabsTrigger>
                <TabsTrigger value="overview">Overview</TabsTrigger>
                <TabsTrigger value="assignments">Assignments</TabsTrigger>
                <TabsTrigger value="discussion">Discussion</TabsTrigger>
              </TabsList>

              <TabsContent value="modules" className="space-y-4 mt-4">
                <div className="flex items-center justify-between">
                  <div>
                    <h2 className="text-xl font-semibold">Course Modules</h2>
                    <p className="text-sm text-muted-foreground">
                      Your progress: {course.progress}% complete (
                      {course.modules.filter((m) => m.status === "completed").length}/{course.modules.length} modules)
                    </p>
                  </div>
                  <Button variant="outline" size="sm" className="gap-1">
                    <Play className="h-4 w-4" /> Continue Learning
                  </Button>
                </div>

                <Progress value={course.progress} className="h-2" />

                <div className="space-y-2">
                  {course.modules.map((module, i) => (
                    <Card
                      key={i}
                      className={`glass-card ${
                        module.status === "in-progress"
                          ? "border-primary/30 bg-primary/5"
                          : module.status === "locked"
                            ? "opacity-70"
                            : ""
                      }`}
                    >
                      <CardContent className="p-4 flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <div
                            className={`rounded-full p-2 ${
                              module.status === "completed"
                                ? "bg-green-500/10 text-green-500"
                                : module.status === "in-progress"
                                  ? "bg-primary/10 text-primary"
                                  : module.status === "locked"
                                    ? "bg-muted text-muted-foreground"
                                    : "bg-blue-500/10 text-blue-500"
                            }`}
                          >
                            {module.status === "completed" ? (
                              <CheckCircle2 className="h-4 w-4" />
                            ) : module.status === "locked" ? (
                              <LockIcon className="h-4 w-4" />
                            ) : module.type === "video" ? (
                              <Play className="h-4 w-4" />
                            ) : module.type === "assignment" ? (
                              <FileText className="h-4 w-4" />
                            ) : (
                              <BookOpen className="h-4 w-4" />
                            )}
                          </div>
                          <div>
                            <p className="font-medium">{module.title}</p>
                            <div className="flex items-center gap-2 text-xs text-muted-foreground">
                              <span className="capitalize">{module.type}</span>
                              <span>•</span>
                              <span className="flex items-center gap-1">
                                <Clock className="h-3 w-3" /> {module.duration}
                              </span>
                            </div>
                          </div>
                        </div>
                        {module.status !== "locked" && (
                          <Button
                            variant={module.status === "in-progress" ? "default" : "outline"}
                            size="sm"
                            className="gap-1"
                          >
                            {module.status === "completed" ? (
                              "Review"
                            ) : module.status === "in-progress" ? (
                              <>
                                <Play className="h-3 w-3" /> Continue
                              </>
                            ) : (
                              "Start"
                            )}
                          </Button>
                        )}
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="overview" className="space-y-4 mt-4">
                <Card className="glass-card">
                  <CardHeader>
                    <CardTitle>Course Overview</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <h3 className="font-medium mb-2">Description</h3>
                      <p className="text-muted-foreground">{course.description}</p>
                    </div>

                    <div>
                      <h3 className="font-medium mb-2">Prerequisites</h3>
                      <ul className="list-disc list-inside text-muted-foreground">
                        {course.prerequisites.map((prereq, i) => (
                          <li key={i}>{prereq}</li>
                        ))}
                      </ul>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-1">
                        <h3 className="font-medium">Duration</h3>
                        <p className="text-muted-foreground flex items-center gap-1">
                          <Calendar className="h-4 w-4" /> {course.duration}
                        </p>
                      </div>
                      <div className="space-y-1">
                        <h3 className="font-medium">Level</h3>
                        <p className="text-muted-foreground">{course.level}</p>
                      </div>
                      <div className="space-y-1">
                        <h3 className="font-medium">Students</h3>
                        <p className="text-muted-foreground flex items-center gap-1">
                          <Users className="h-4 w-4" /> {course.students} enrolled
                        </p>
                      </div>
                      <div className="space-y-1">
                        <h3 className="font-medium">Rating</h3>
                        <p className="text-muted-foreground flex items-center gap-1">
                          <Star className="h-4 w-4 fill-primary text-primary" /> {course.rating}/5.0
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="glass-card">
                  <CardHeader>
                    <CardTitle>Instructor</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-start gap-4">
                      <Avatar className="h-12 w-12">
                        <AvatarImage src="/placeholder.svg?height=48&width=48" />
                        <AvatarFallback>PJ</AvatarFallback>
                      </Avatar>
                      <div>
                        <h3 className="font-medium">{course.instructor}</h3>
                        <p className="text-sm text-muted-foreground">Professor of Computer Science</p>
                        <p className="text-sm text-muted-foreground mt-2">
                          Expert in algorithms and data structures with over 15 years of teaching experience. Published
                          author of multiple textbooks on the subject.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="assignments" className="space-y-4 mt-4">
                <div className="flex items-center justify-between">
                  <h2 className="text-xl font-semibold">Assignments</h2>
                  <Badge variant="outline">{course.assignments.length} Total</Badge>
                </div>

                <div className="space-y-2">
                  {course.assignments.map((assignment, i) => (
                    <Card key={i} className="glass-card">
                      <CardContent className="p-4 flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <div
                            className={`rounded-full p-2 ${
                              assignment.due === "Completed"
                                ? "bg-green-500/10 text-green-500"
                                : "bg-blue-500/10 text-blue-500"
                            }`}
                          >
                            <FileText className="h-4 w-4" />
                          </div>
                          <div>
                            <p className="font-medium">{assignment.title}</p>
                            <div className="flex items-center gap-2 text-xs text-muted-foreground">
                              <span>Due: {assignment.due}</span>
                              {assignment.grade !== "Not submitted" && (
                                <>
                                  <span>•</span>
                                  <span>Grade: {assignment.grade}</span>
                                </>
                              )}
                            </div>
                          </div>
                        </div>
                        <Button
                          variant={assignment.due !== "Completed" ? "default" : "outline"}
                          size="sm"
                          className="gap-1"
                        >
                          {assignment.due === "Completed" ? "View Feedback" : "Submit Assignment"}
                        </Button>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="discussion" className="space-y-4 mt-4">
                <div className="flex items-center justify-between">
                  <h2 className="text-xl font-semibold">Discussion Forum</h2>
                  <Button size="sm" className="gap-1">
                    <MessageSquare className="h-4 w-4" /> New Thread
                  </Button>
                </div>

                <Card className="glass-card">
                  <CardContent className="p-4 space-y-4">
                    {[
                      {
                        author: "Sarah Chen",
                        avatar: "/placeholder.svg?height=40&width=40",
                        time: "2 days ago",
                        title: "Question about Binary Tree traversal",
                        content:
                          "I'm having trouble understanding the difference between pre-order, in-order, and post-order traversal. Can someone explain?",
                        replies: 4,
                      },
                      {
                        author: "Michael Rodriguez",
                        avatar: "/placeholder.svg?height=40&width=40",
                        time: "1 week ago",
                        title: "Resources for graph algorithms",
                        content:
                          "Does anyone have any good resources or practice problems for graph algorithms? I'm finding them particularly challenging.",
                        replies: 7,
                      },
                      {
                        author: "Prof. Johnson",
                        avatar: "/placeholder.svg?height=40&width=40",
                        time: "2 weeks ago",
                        title: "Announcement: Additional office hours",
                        content:
                          "I'll be holding additional office hours this week to help with the upcoming assignment on binary trees.",
                        replies: 2,
                        isInstructor: true,
                      },
                    ].map((thread, i) => (
                      <div key={i} className="border-b last:border-0 pb-4 last:pb-0">
                        <div className="flex items-start gap-3">
                          <Avatar>
                            <AvatarImage src={thread.avatar || "/placeholder.svg"} />
                            <AvatarFallback>{thread.author[0]}</AvatarFallback>
                          </Avatar>
                          <div className="flex-1">
                            <div className="flex items-center gap-2">
                              <span className="font-medium">{thread.author}</span>
                              {thread.isInstructor && (
                                <Badge variant="outline" className="text-xs">
                                  Instructor
                                </Badge>
                              )}
                              <span className="text-xs text-muted-foreground">{thread.time}</span>
                            </div>
                            <h3 className="font-medium mt-1">{thread.title}</h3>
                            <p className="text-sm text-muted-foreground mt-1">{thread.content}</p>
                            <div className="flex items-center gap-4 mt-2">
                              <Button variant="ghost" size="sm" className="gap-1 h-7">
                                <MessageSquare className="h-3 w-3" /> Reply
                              </Button>
                              <span className="text-xs text-muted-foreground">{thread.replies} replies</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>

          <div className="md:w-1/3 space-y-4">
            <Card className="glass-card sticky top-20">
              <CardHeader>
                <CardTitle>Your Progress</CardTitle>
                <CardDescription>Track your course completion</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex flex-col items-center justify-center p-4 border rounded-lg">
                  <div className="relative h-24 w-24">
                    <svg className="h-full w-full" viewBox="0 0 100 100">
                      <circle
                        className="text-muted stroke-current"
                        strokeWidth="8"
                        fill="transparent"
                        r="42"
                        cx="50"
                        cy="50"
                      />
                      <circle
                        className="text-primary stroke-current"
                        strokeWidth="8"
                        strokeLinecap="round"
                        fill="transparent"
                        r="42"
                        cx="50"
                        cy="50"
                        strokeDasharray="264"
                        strokeDashoffset={264 - (264 * course.progress) / 100}
                        transform="rotate(-90 50 50)"
                      />
                    </svg>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="text-2xl font-bold">{course.progress}%</span>
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground mt-2">
                    {course.modules.filter((m) => m.status === "completed").length} of {course.modules.length} modules
                    completed
                  </p>
                </div>

                <div className="space-y-2">
                  <h3 className="font-medium">Next Up</h3>
                  <Card className="bg-primary/5 border-primary/30">
                    <CardContent className="p-3 flex items-center gap-3">
                      <div className="rounded-full bg-primary/10 p-2">
                        <Play className="h-4 w-4 text-primary" />
                      </div>
                      <div>
                        <p className="font-medium">Trees and Binary Search Trees</p>
                        <p className="text-xs text-muted-foreground">1 hr 20 min</p>
                      </div>
                    </CardContent>
                  </Card>
                </div>

                <div className="space-y-2">
                  <h3 className="font-medium">Upcoming Deadlines</h3>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 p-2 rounded-md border">
                      <FileText className="h-4 w-4 text-muted-foreground" />
                      <div>
                        <p className="text-sm font-medium">Binary Trees Implementation</p>
                        <p className="text-xs text-muted-foreground">Due in 3 days</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="pt-2">
                  <Button asChild className="w-full gap-2">
                    <Link href={`/dashboard/student/courses/${courseId}/module/4`}>
                      <Play className="h-4 w-4" /> Continue Learning
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </SidebarNavigation>
  )
}
