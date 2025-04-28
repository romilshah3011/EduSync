import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { SidebarNavigation } from "@/components/sidebar-navigation"
import { Progress } from "@/components/ui/progress"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { BookOpen, Calendar, Clock, Cpu, FileText, MessageSquare, Trophy, Users } from "lucide-react"
import Link from "next/link"

export default function StudentDashboard() {
  return (
    <SidebarNavigation role="student">
      <div className="space-y-6">
        <div className="flex flex-col md:flex-row gap-6">
          <Card className="flex-1 glass-card">
            <CardHeader className="pb-2">
              <CardTitle className="text-lg font-medium">Welcome back, John!</CardTitle>
              <CardDescription>Here's an overview of your learning journey</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium">Current Semester Progress</span>
                    <span className="text-sm text-muted-foreground">68%</span>
                  </div>
                  <Progress value={68} className="h-2" />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="flex flex-col gap-1 rounded-lg border p-3">
                    <div className="flex items-center gap-2">
                      <div className="rounded-full bg-primary/10 p-1">
                        <FileText className="h-4 w-4 text-primary" />
                      </div>
                      <span className="text-sm font-medium">Assignments</span>
                    </div>
                    <div className="flex items-end justify-between">
                      <span className="text-2xl font-bold">4</span>
                      <span className="text-xs text-muted-foreground">Due this week</span>
                    </div>
                  </div>

                  <div className="flex flex-col gap-1 rounded-lg border p-3">
                    <div className="flex items-center gap-2">
                      <div className="rounded-full bg-primary/10 p-1">
                        <BookOpen className="h-4 w-4 text-primary" />
                      </div>
                      <span className="text-sm font-medium">Courses</span>
                    </div>
                    <div className="flex items-end justify-between">
                      <span className="text-2xl font-bold">6</span>
                      <span className="text-xs text-muted-foreground">Active courses</span>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="md:w-80 glass-card">
            <CardHeader className="pb-2">
              <CardTitle className="text-lg font-medium">AI Mentor</CardTitle>
              <CardDescription>Your personal learning assistant</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center gap-3">
                <Avatar>
                  <AvatarImage src="/placeholder.svg?height=40&width=40" />
                  <AvatarFallback>AI</AvatarFallback>
                </Avatar>
                <div>
                  <p className="text-sm font-medium">EduSync AI</p>
                  <p className="text-xs text-muted-foreground">Always available to help</p>
                </div>
                <Badge variant="outline" className="ml-auto">
                  <Cpu className="h-3 w-3 mr-1" /> AI
                </Badge>
              </div>
              <div className="rounded-lg bg-muted p-3">
                <p className="text-sm">Need help with your upcoming Data Structures quiz? I can help you prepare!</p>
              </div>
              <Button asChild className="w-full">
                <Link href="/dashboard/student/ai-mentor">
                  <MessageSquare className="h-4 w-4 mr-2" /> Chat with AI Mentor
                </Link>
              </Button>
            </CardContent>
          </Card>
        </div>

        <Tabs defaultValue="upcoming">
          <TabsList>
            <TabsTrigger value="upcoming">Upcoming</TabsTrigger>
            <TabsTrigger value="courses">My Courses</TabsTrigger>
            <TabsTrigger value="achievements">Achievements</TabsTrigger>
          </TabsList>

          <TabsContent value="upcoming" className="space-y-4 mt-4">
            <h3 className="text-lg font-medium">Upcoming Tasks</h3>
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  title: "Algorithm Assignment",
                  course: "Data Structures & Algorithms",
                  due: "Today, 11:59 PM",
                  type: "assignment",
                  icon: FileText,
                },
                {
                  title: "Database Quiz",
                  course: "Database Management",
                  due: "Tomorrow, 2:00 PM",
                  type: "quiz",
                  icon: FileText,
                },
                {
                  title: "Group Project Meeting",
                  course: "Software Engineering",
                  due: "Wed, 3:30 PM",
                  type: "meeting",
                  icon: Users,
                },
              ].map((item, i) => (
                <Card key={i} className="glass-card">
                  <CardHeader className="pb-2">
                    <div className="flex items-center justify-between">
                      <Badge
                        variant={
                          item.type === "assignment" ? "default" : item.type === "quiz" ? "secondary" : "outline"
                        }
                      >
                        {item.type}
                      </Badge>
                      <item.icon className="h-4 w-4 text-muted-foreground" />
                    </div>
                    <CardTitle className="text-base font-medium mt-2">{item.title}</CardTitle>
                    <CardDescription>{item.course}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center text-sm text-muted-foreground">
                      <Clock className="h-4 w-4 mr-1" /> Due: {item.due}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="courses" className="space-y-4 mt-4">
            <h3 className="text-lg font-medium">My Courses</h3>
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  title: "Data Structures & Algorithms",
                  instructor: "Prof. Johnson",
                  progress: 75,
                  image: "/placeholder.svg?height=100&width=200",
                },
                {
                  title: "Database Management",
                  instructor: "Dr. Smith",
                  progress: 60,
                  image: "/placeholder.svg?height=100&width=200",
                },
                {
                  title: "Software Engineering",
                  instructor: "Prof. Williams",
                  progress: 45,
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
                    <CardTitle className="text-base font-medium">{course.title}</CardTitle>
                    <CardDescription>{course.instructor}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-muted-foreground">Progress</span>
                        <span className="text-sm font-medium">{course.progress}%</span>
                      </div>
                      <Progress value={course.progress} className="h-2" />
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="achievements" className="space-y-4 mt-4">
            <h3 className="text-lg font-medium">Recent Achievements</h3>
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  title: "Quiz Master",
                  description: "Scored 100% on 3 consecutive quizzes",
                  date: "2 days ago",
                  points: 150,
                  icon: Trophy,
                },
                {
                  title: "Consistent Learner",
                  description: "Logged in for 14 days in a row",
                  date: "1 week ago",
                  points: 100,
                  icon: Calendar,
                },
                {
                  title: "Helpful Peer",
                  description: "Answered 10 questions in the community",
                  date: "2 weeks ago",
                  points: 75,
                  icon: Users,
                },
              ].map((achievement, i) => (
                <Card key={i} className="glass-card">
                  <CardHeader className="pb-2">
                    <div className="flex items-center justify-between">
                      <div className="rounded-full bg-primary/10 p-2">
                        <achievement.icon className="h-4 w-4 text-primary" />
                      </div>
                      <Badge variant="outline">+{achievement.points} points</Badge>
                    </div>
                    <CardTitle className="text-base font-medium mt-2">{achievement.title}</CardTitle>
                    <CardDescription>{achievement.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="text-sm text-muted-foreground">Earned {achievement.date}</div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </SidebarNavigation>
  )
}
