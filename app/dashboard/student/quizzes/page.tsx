import { SidebarNavigation } from "@/components/sidebar-navigation"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Calendar, Clock, Filter, Layers, Search, Trophy, Users } from "lucide-react"
import Link from "next/link"
import { Input } from "@/components/ui/input"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export default function QuizzesPage() {
  return (
    <SidebarNavigation role="student">
      <div className="space-y-6">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <h1 className="text-2xl font-bold tracking-tight">Quiz Battle</h1>
            <p className="text-muted-foreground">Test your knowledge and compete with peers</p>
          </div>
          <div className="flex items-center gap-2">
            <Button variant="outline" size="sm" className="gap-1">
              <Filter className="h-4 w-4" /> Filters
            </Button>
            <div className="relative w-full md:w-64">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input
                type="search"
                placeholder="Search quizzes..."
                className="w-full bg-background pl-8 md:w-[300px] lg:w-[320px]"
              />
            </div>
          </div>
        </div>

        <div className="grid gap-4 md:grid-cols-3">
          <Card className="glass-card">
            <CardHeader className="pb-2">
              <div className="flex items-center justify-between">
                <CardTitle className="text-base">Live Quizzes</CardTitle>
                <Badge className="bg-green-500 text-white hover:bg-green-600">Live Now</Badge>
              </div>
              <CardDescription>Join ongoing quiz battles</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">3</div>
              <p className="text-sm text-muted-foreground">Active quiz rooms</p>
            </CardContent>
          </Card>
          <Card className="glass-card">
            <CardHeader className="pb-2">
              <div className="flex items-center justify-between">
                <CardTitle className="text-base">Your Performance</CardTitle>
                <Badge variant="outline">Top 15%</Badge>
              </div>
              <CardDescription>Quiz statistics</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">85%</div>
              <p className="text-sm text-muted-foreground">Average score</p>
            </CardContent>
          </Card>
          <Card className="glass-card">
            <CardHeader className="pb-2">
              <div className="flex items-center justify-between">
                <CardTitle className="text-base">Upcoming</CardTitle>
                <Badge variant="outline">This Week</Badge>
              </div>
              <CardDescription>Scheduled quizzes</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">5</div>
              <p className="text-sm text-muted-foreground">Upcoming quiz events</p>
            </CardContent>
          </Card>
        </div>

        <Tabs defaultValue="live">
          <TabsList>
            <TabsTrigger value="live">Live Quizzes</TabsTrigger>
            <TabsTrigger value="upcoming">Upcoming</TabsTrigger>
            <TabsTrigger value="completed">Completed</TabsTrigger>
            <TabsTrigger value="leaderboard">Leaderboard</TabsTrigger>
          </TabsList>

          <TabsContent value="live" className="mt-4 space-y-4">
            <div className="flex items-center justify-between">
              <h2 className="text-xl font-semibold">Live Quiz Battles</h2>
              <Select defaultValue="all">
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Filter by subject" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Subjects</SelectItem>
                  <SelectItem value="cs">Computer Science</SelectItem>
                  <SelectItem value="math">Mathematics</SelectItem>
                  <SelectItem value="eng">Engineering</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  title: "Data Structures Challenge",
                  course: "Data Structures & Algorithms",
                  participants: 18,
                  duration: "30 min",
                  difficulty: "Intermediate",
                  startTime: "Live Now",
                  id: "1",
                },
                {
                  title: "Database Concepts",
                  course: "Database Management",
                  participants: 12,
                  duration: "20 min",
                  difficulty: "Beginner",
                  startTime: "Live Now",
                  id: "2",
                },
                {
                  title: "Software Design Patterns",
                  course: "Software Engineering",
                  participants: 24,
                  duration: "45 min",
                  difficulty: "Advanced",
                  startTime: "Live Now",
                  id: "3",
                },
              ].map((quiz, i) => (
                <Card key={i} className="glass-card overflow-hidden">
                  <div className="bg-primary h-1" />
                  <CardHeader className="pb-2">
                    <div className="flex items-center justify-between">
                      <Badge variant="outline" className="bg-green-500/10 text-green-500 hover:bg-green-500/20">
                        Live Now
                      </Badge>
                      <Badge variant="outline">{quiz.difficulty}</Badge>
                    </div>
                    <CardTitle className="text-base mt-2">{quiz.title}</CardTitle>
                    <CardDescription>{quiz.course}</CardDescription>
                  </CardHeader>
                  <CardContent className="pb-2">
                    <div className="flex items-center justify-between text-sm text-muted-foreground mb-2">
                      <div className="flex items-center gap-1">
                        <Users className="h-3 w-3" />
                        <span>{quiz.participants} participants</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="h-3 w-3" />
                        <span>{quiz.duration}</span>
                      </div>
                    </div>

                    <div className="flex -space-x-2 overflow-hidden">
                      {[...Array(4)].map((_, j) => (
                        <Avatar key={j} className="h-6 w-6 border-2 border-background">
                          <AvatarImage src={`/placeholder.svg?height=24&width=24`} />
                          <AvatarFallback>U{j}</AvatarFallback>
                        </Avatar>
                      ))}
                      {quiz.participants > 4 && (
                        <div className="flex h-6 w-6 items-center justify-center rounded-full border-2 border-background bg-muted text-xs">
                          +{quiz.participants - 4}
                        </div>
                      )}
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button asChild className="w-full gap-1">
                      <Link href={`/dashboard/student/quizzes/${quiz.id}`}>
                        <Layers className="h-4 w-4" /> Join Battle
                      </Link>
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="upcoming" className="mt-4 space-y-4">
            <div className="flex items-center justify-between">
              <h2 className="text-xl font-semibold">Upcoming Quizzes</h2>
              <Button variant="outline" size="sm" className="gap-1">
                <Calendar className="h-4 w-4" /> Add to Calendar
              </Button>
            </div>

            <Card className="glass-card">
              <CardContent className="p-0">
                <table className="w-full">
                  <thead>
                    <tr className="border-b">
                      <th className="text-left p-4 font-medium">Quiz</th>
                      <th className="text-left p-4 font-medium">Course</th>
                      <th className="text-left p-4 font-medium">Date & Time</th>
                      <th className="text-left p-4 font-medium">Duration</th>
                      <th className="text-left p-4 font-medium">Type</th>
                      <th className="text-left p-4 font-medium">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      {
                        title: "Algorithms Mid-term",
                        course: "Data Structures & Algorithms",
                        datetime: "May 15, 2023 - 10:00 AM",
                        duration: "60 min",
                        type: "Solo",
                        id: "4",
                      },
                      {
                        title: "SQL Challenge",
                        course: "Database Management",
                        datetime: "May 18, 2023 - 2:00 PM",
                        duration: "45 min",
                        type: "Multiplayer",
                        id: "5",
                      },
                      {
                        title: "UML Diagrams",
                        course: "Software Engineering",
                        datetime: "May 20, 2023 - 11:00 AM",
                        duration: "30 min",
                        type: "Solo",
                        id: "6",
                      },
                      {
                        title: "Web Development Basics",
                        course: "Web Technologies",
                        datetime: "May 22, 2023 - 3:00 PM",
                        duration: "40 min",
                        type: "Multiplayer",
                        id: "7",
                      },
                      {
                        title: "Machine Learning Concepts",
                        course: "Artificial Intelligence",
                        datetime: "May 25, 2023 - 1:00 PM",
                        duration: "50 min",
                        type: "Solo",
                        id: "8",
                      },
                    ].map((quiz, i) => (
                      <tr key={i} className="border-b">
                        <td className="p-4">{quiz.title}</td>
                        <td className="p-4">{quiz.course}</td>
                        <td className="p-4">{quiz.datetime}</td>
                        <td className="p-4">{quiz.duration}</td>
                        <td className="p-4">
                          <Badge
                            variant="outline"
                            className={
                              quiz.type === "Multiplayer"
                                ? "bg-primary/10 text-primary hover:bg-primary/20"
                                : "bg-secondary/50"
                            }
                          >
                            {quiz.type}
                          </Badge>
                        </td>
                        <td className="p-4">
                          <Button variant="outline" size="sm" className="gap-1">
                            <Calendar className="h-3 w-3" /> Set Reminder
                          </Button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="completed" className="mt-4 space-y-4">
            <div className="flex items-center justify-between">
              <h2 className="text-xl font-semibold">Completed Quizzes</h2>
              <Select defaultValue="recent">
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Sort by" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="recent">Most Recent</SelectItem>
                  <SelectItem value="score">Highest Score</SelectItem>
                  <SelectItem value="course">Course</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  title: "Arrays and Linked Lists",
                  course: "Data Structures & Algorithms",
                  date: "April 28, 2023",
                  score: 92,
                  rank: "3rd",
                  participants: 45,
                  id: "9",
                },
                {
                  title: "Normalization",
                  course: "Database Management",
                  date: "April 20, 2023",
                  score: 88,
                  rank: "5th",
                  participants: 38,
                  id: "10",
                },
                {
                  title: "Software Development Lifecycle",
                  course: "Software Engineering",
                  date: "April 15, 2023",
                  score: 95,
                  rank: "1st",
                  participants: 42,
                  id: "11",
                },
                {
                  title: "HTML & CSS Basics",
                  course: "Web Technologies",
                  date: "April 10, 2023",
                  score: 90,
                  rank: "4th",
                  participants: 50,
                  id: "12",
                },
                {
                  title: "Python Fundamentals",
                  course: "Programming Languages",
                  date: "April 5, 2023",
                  score: 85,
                  rank: "7th",
                  participants: 55,
                  id: "13",
                },
                {
                  title: "Computer Networks",
                  course: "Network Security",
                  date: "March 30, 2023",
                  score: 78,
                  rank: "12th",
                  participants: 60,
                  id: "14",
                },
              ].map((quiz, i) => (
                <Card key={i} className="glass-card">
                  <CardHeader className="pb-2">
                    <div className="flex items-center justify-between">
                      <Badge variant="outline">{quiz.date}</Badge>
                      <div className="flex items-center gap-1">
                        <Trophy className="h-4 w-4 text-amber-500" />
                        <span className="text-sm font-medium">Rank: {quiz.rank}</span>
                      </div>
                    </div>
                    <CardTitle className="text-base mt-2">{quiz.title}</CardTitle>
                    <CardDescription>{quiz.course}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm text-muted-foreground">Your Score</span>
                      <span className="text-sm font-medium">{quiz.score}%</span>
                    </div>
                    <div className="h-2 bg-muted rounded-full overflow-hidden">
                      <div className="h-full bg-primary rounded-full" style={{ width: `${quiz.score}%` }}></div>
                    </div>
                    <p className="text-xs text-muted-foreground mt-2">{quiz.participants} participants</p>
                  </CardContent>
                  <CardFooter>
                    <Button variant="outline" asChild className="w-full">
                      <Link href={`/dashboard/student/quizzes/${quiz.id}/results`}>View Results</Link>
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="leaderboard" className="mt-4 space-y-4">
            <div className="flex items-center justify-between">
              <h2 className="text-xl font-semibold">Quiz Leaderboard</h2>
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
                <Select defaultValue="all-time">
                  <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="Time period" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all-time">All Time</SelectItem>
                    <SelectItem value="this-month">This Month</SelectItem>
                    <SelectItem value="this-week">This Week</SelectItem>
                    <SelectItem value="today">Today</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="grid gap-6 md:grid-cols-3">
              <Card className="glass-card col-span-2">
                <CardHeader>
                  <CardTitle>Top Performers</CardTitle>
                  <CardDescription>Students with the highest quiz scores</CardDescription>
                </CardHeader>
                <CardContent className="p-0">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b">
                        <th className="text-left p-4 font-medium">Rank</th>
                        <th className="text-left p-4 font-medium">Student</th>
                        <th className="text-left p-4 font-medium">Department</th>
                        <th className="text-left p-4 font-medium">Quizzes</th>
                        <th className="text-left p-4 font-medium">Avg. Score</th>
                        <th className="text-left p-4 font-medium">Edupoints</th>
                      </tr>
                    </thead>
                    <tbody>
                      {[
                        {
                          rank: 1,
                          name: "Alex Johnson",
                          avatar: "/placeholder.svg?height=32&width=32",
                          department: "Computer Science",
                          quizzes: 42,
                          avgScore: 96,
                          edupoints: 1250,
                        },
                        {
                          rank: 2,
                          name: "Samantha Lee",
                          avatar: "/placeholder.svg?height=32&width=32",
                          department: "Computer Science",
                          quizzes: 38,
                          avgScore: 94,
                          edupoints: 1180,
                        },
                        {
                          rank: 3,
                          name: "David Chen",
                          avatar: "/placeholder.svg?height=32&width=32",
                          department: "Engineering",
                          quizzes: 45,
                          avgScore: 93,
                          edupoints: 1120,
                        },
                        {
                          rank: 4,
                          name: "Maria Rodriguez",
                          avatar: "/placeholder.svg?height=32&width=32",
                          department: "Computer Science",
                          quizzes: 36,
                          avgScore: 92,
                          edupoints: 1050,
                        },
                        {
                          rank: 5,
                          name: "James Wilson",
                          avatar: "/placeholder.svg?height=32&width=32",
                          department: "Mathematics",
                          quizzes: 40,
                          avgScore: 91,
                          edupoints: 980,
                        },
                        {
                          rank: 6,
                          name: "John Doe",
                          avatar: "/placeholder.svg?height=32&width=32",
                          department: "Computer Science",
                          quizzes: 35,
                          avgScore: 89,
                          edupoints: 920,
                          isCurrentUser: true,
                        },
                      ].map((student, i) => (
                        <tr key={i} className={`border-b ${student.isCurrentUser ? "bg-primary/5 font-medium" : ""}`}>
                          <td className="p-4">
                            {student.rank === 1 ? (
                              <div className="flex items-center justify-center w-8 h-8 rounded-full bg-yellow-500/10">
                                <Trophy className="h-4 w-4 text-yellow-500" />
                              </div>
                            ) : student.rank === 2 ? (
                              <div className="flex items-center justify-center w-8 h-8 rounded-full bg-gray-300/20">
                                <Trophy className="h-4 w-4 text-gray-400" />
                              </div>
                            ) : student.rank === 3 ? (
                              <div className="flex items-center justify-center w-8 h-8 rounded-full bg-amber-600/10">
                                <Trophy className="h-4 w-4 text-amber-600" />
                              </div>
                            ) : (
                              <span className="pl-3">{student.rank}</span>
                            )}
                          </td>
                          <td className="p-4">
                            <div className="flex items-center gap-2">
                              <Avatar className="h-8 w-8">
                                <AvatarImage src={student.avatar || "/placeholder.svg"} />
                                <AvatarFallback>{student.name[0]}</AvatarFallback>
                              </Avatar>
                              <span>{student.name}</span>
                              {student.isCurrentUser && (
                                <Badge variant="outline" className="ml-2">
                                  You
                                </Badge>
                              )}
                            </div>
                          </td>
                          <td className="p-4">{student.department}</td>
                          <td className="p-4">{student.quizzes}</td>
                          <td className="p-4">{student.avgScore}%</td>
                          <td className="p-4">
                            <Badge variant="outline" className="bg-primary/10 text-primary hover:bg-primary/20">
                              {student.edupoints} pts
                            </Badge>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </CardContent>
              </Card>

              <Card className="glass-card">
                <CardHeader>
                  <CardTitle>Your Ranking</CardTitle>
                  <CardDescription>Your position on the leaderboard</CardDescription>
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
                          strokeDashoffset={264 - (264 * 89) / 100}
                          transform="rotate(-90 50 50)"
                        />
                      </svg>
                      <div className="absolute inset-0 flex items-center justify-center">
                        <span className="text-2xl font-bold">89%</span>
                      </div>
                    </div>
                    <p className="text-sm text-muted-foreground mt-2">Average Score</p>
                  </div>

                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="text-sm">Current Rank</span>
                      <span className="font-medium">6th</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm">Total Quizzes</span>
                      <span className="font-medium">35</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm">Edupoints</span>
                      <span className="font-medium">920</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm">Top 10 Finishes</span>
                      <span className="font-medium">12</span>
                    </div>
                  </div>

                  <div className="pt-2">
                    <Button className="w-full gap-1">
                      <Trophy className="h-4 w-4" /> View All Rankings
                    </Button>
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
