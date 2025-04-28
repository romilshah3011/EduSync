import { SidebarNavigation } from "@/components/sidebar-navigation"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { BookOpen, Clock, Filter, Search, Star, Users } from "lucide-react"
import Link from "next/link"
import { Progress } from "@/components/ui/progress"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export default function CoursesPage() {
  return (
    <SidebarNavigation role="student">
      <div className="space-y-6">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <h1 className="text-2xl font-bold tracking-tight">Courses</h1>
            <p className="text-muted-foreground">Discover new courses or continue your learning journey</p>
          </div>
          <div className="flex items-center gap-2">
            <Button variant="outline" size="sm" className="gap-1">
              <Filter className="h-4 w-4" /> Filters
            </Button>
            <div className="relative w-full md:w-64">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input
                type="search"
                placeholder="Search courses..."
                className="w-full bg-background pl-8 md:w-[300px] lg:w-[320px]"
              />
            </div>
          </div>
        </div>

        <Tabs defaultValue="all">
          <TabsList>
            <TabsTrigger value="all">All Courses</TabsTrigger>
            <TabsTrigger value="enrolled">My Courses</TabsTrigger>
            <TabsTrigger value="recommended">Recommended</TabsTrigger>
          </TabsList>

          <div className="mt-6 flex flex-col md:flex-row gap-4">
            <div className="md:w-64 space-y-4">
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-base">Filters</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Department</label>
                    <Select defaultValue="all">
                      <SelectTrigger>
                        <SelectValue placeholder="All Departments" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="all">All Departments</SelectItem>
                        <SelectItem value="cs">Computer Science</SelectItem>
                        <SelectItem value="eng">Engineering</SelectItem>
                        <SelectItem value="math">Mathematics</SelectItem>
                        <SelectItem value="business">Business</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium">Difficulty</label>
                    <Select defaultValue="all">
                      <SelectTrigger>
                        <SelectValue placeholder="All Levels" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="all">All Levels</SelectItem>
                        <SelectItem value="beginner">Beginner</SelectItem>
                        <SelectItem value="intermediate">Intermediate</SelectItem>
                        <SelectItem value="advanced">Advanced</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium">Duration</label>
                    <Select defaultValue="all">
                      <SelectTrigger>
                        <SelectValue placeholder="Any Duration" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="all">Any Duration</SelectItem>
                        <SelectItem value="short">Short (0-4 weeks)</SelectItem>
                        <SelectItem value="medium">Medium (1-3 months)</SelectItem>
                        <SelectItem value="long">Long (3+ months)</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium">Rating</label>
                    <Select defaultValue="all">
                      <SelectTrigger>
                        <SelectValue placeholder="Any Rating" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="all">Any Rating</SelectItem>
                        <SelectItem value="4plus">4+ Stars</SelectItem>
                        <SelectItem value="3plus">3+ Stars</SelectItem>
                        <SelectItem value="2plus">2+ Stars</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <Button className="w-full">Apply Filters</Button>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-base">Popular Skills</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {[
                      "Web Development",
                      "Data Science",
                      "Machine Learning",
                      "Mobile Development",
                      "UI/UX Design",
                      "Cloud Computing",
                      "Cybersecurity",
                      "Blockchain",
                    ].map((skill) => (
                      <Badge key={skill} variant="outline" className="cursor-pointer hover:bg-secondary">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="flex-1">
              <TabsContent value="all" className="mt-0">
                <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                  {[
                    {
                      title: "Data Structures & Algorithms",
                      instructor: "Prof. Johnson",
                      department: "Computer Science",
                      level: "Intermediate",
                      duration: "12 weeks",
                      rating: 4.8,
                      students: 248,
                      image: "/placeholder.svg?height=150&width=300",
                    },
                    {
                      title: "Database Management Systems",
                      instructor: "Dr. Smith",
                      department: "Computer Science",
                      level: "Intermediate",
                      duration: "10 weeks",
                      rating: 4.6,
                      students: 186,
                      image: "/placeholder.svg?height=150&width=300",
                    },
                    {
                      title: "Software Engineering",
                      instructor: "Prof. Williams",
                      department: "Computer Science",
                      level: "Advanced",
                      duration: "16 weeks",
                      rating: 4.9,
                      students: 312,
                      image: "/placeholder.svg?height=150&width=300",
                    },
                    {
                      title: "Machine Learning Fundamentals",
                      instructor: "Dr. Chen",
                      department: "Computer Science",
                      level: "Advanced",
                      duration: "14 weeks",
                      rating: 4.7,
                      students: 275,
                      image: "/placeholder.svg?height=150&width=300",
                    },
                    {
                      title: "Web Development Bootcamp",
                      instructor: "Prof. Garcia",
                      department: "Computer Science",
                      level: "Beginner",
                      duration: "8 weeks",
                      rating: 4.5,
                      students: 420,
                      image: "/placeholder.svg?height=150&width=300",
                    },
                    {
                      title: "Mobile App Development",
                      instructor: "Dr. Patel",
                      department: "Computer Science",
                      level: "Intermediate",
                      duration: "10 weeks",
                      rating: 4.4,
                      students: 198,
                      image: "/placeholder.svg?height=150&width=300",
                    },
                  ].map((course, i) => (
                    <Card key={i} className="overflow-hidden glass-card">
                      <div className="h-40 w-full bg-muted">
                        <img
                          src={course.image || "/placeholder.svg"}
                          alt={course.title}
                          className="h-full w-full object-cover"
                        />
                      </div>
                      <CardHeader className="pb-2">
                        <div className="flex items-center justify-between">
                          <Badge variant="outline">{course.level}</Badge>
                          <div className="flex items-center gap-1">
                            <Star className="h-3 w-3 fill-primary text-primary" />
                            <span className="text-sm font-medium">{course.rating}</span>
                          </div>
                        </div>
                        <CardTitle className="text-base font-medium mt-2">{course.title}</CardTitle>
                        <CardDescription>{course.instructor}</CardDescription>
                      </CardHeader>
                      <CardContent className="pb-2">
                        <div className="flex items-center justify-between text-sm text-muted-foreground mb-2">
                          <div className="flex items-center gap-1">
                            <Clock className="h-3 w-3" />
                            <span>{course.duration}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <Users className="h-3 w-3" />
                            <span>{course.students} students</span>
                          </div>
                        </div>
                      </CardContent>
                      <CardFooter>
                        <Button asChild className="w-full">
                          <Link href={`/dashboard/student/courses/${i + 1}`}>View Course</Link>
                        </Button>
                      </CardFooter>
                    </Card>
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="enrolled" className="mt-0">
                <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                  {[
                    {
                      title: "Data Structures & Algorithms",
                      instructor: "Prof. Johnson",
                      progress: 75,
                      nextModule: "Binary Trees",
                      image: "/placeholder.svg?height=150&width=300",
                    },
                    {
                      title: "Database Management Systems",
                      instructor: "Dr. Smith",
                      progress: 60,
                      nextModule: "Normalization",
                      image: "/placeholder.svg?height=150&width=300",
                    },
                    {
                      title: "Software Engineering",
                      instructor: "Prof. Williams",
                      progress: 45,
                      nextModule: "Agile Methodologies",
                      image: "/placeholder.svg?height=150&width=300",
                    },
                  ].map((course, i) => (
                    <Card key={i} className="overflow-hidden glass-card">
                      <div className="h-40 w-full bg-muted">
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
                          <p className="text-xs text-muted-foreground mt-2">
                            Next up: <span className="font-medium">{course.nextModule}</span>
                          </p>
                        </div>
                      </CardContent>
                      <CardFooter>
                        <Button asChild className="w-full">
                          <Link href={`/dashboard/student/courses/${i + 1}`}>Continue Learning</Link>
                        </Button>
                      </CardFooter>
                    </Card>
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="recommended" className="mt-0">
                <div className="mb-4 p-4 rounded-lg bg-primary/5 border border-primary/10">
                  <div className="flex items-start gap-3">
                    <BookOpen className="h-5 w-5 text-primary mt-0.5" />
                    <div>
                      <h3 className="font-medium">AI-Powered Recommendations</h3>
                      <p className="text-sm text-muted-foreground">
                        Based on your interests and learning history, we recommend these courses to help you achieve
                        your learning goals.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                  {[
                    {
                      title: "Advanced Algorithms",
                      instructor: "Prof. Johnson",
                      match: 98,
                      reason: "Based on your interest in Data Structures",
                      image: "/placeholder.svg?height=150&width=300",
                    },
                    {
                      title: "Cloud Computing",
                      instructor: "Dr. Reynolds",
                      match: 92,
                      reason: "Complements your Web Development skills",
                      image: "/placeholder.svg?height=150&width=300",
                    },
                    {
                      title: "UI/UX Design Principles",
                      instructor: "Prof. Martinez",
                      match: 87,
                      reason: "Aligns with your career goals",
                      image: "/placeholder.svg?height=150&width=300",
                    },
                  ].map((course, i) => (
                    <Card key={i} className="overflow-hidden glass-card">
                      <div className="h-40 w-full bg-muted">
                        <img
                          src={course.image || "/placeholder.svg"}
                          alt={course.title}
                          className="h-full w-full object-cover"
                        />
                      </div>
                      <CardHeader className="pb-2">
                        <div className="flex items-center justify-between">
                          <Badge variant="secondary" className="bg-primary/10 text-primary hover:bg-primary/20">
                            {course.match}% Match
                          </Badge>
                        </div>
                        <CardTitle className="text-base font-medium mt-2">{course.title}</CardTitle>
                        <CardDescription>{course.instructor}</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <p className="text-xs text-muted-foreground">{course.reason}</p>
                      </CardContent>
                      <CardFooter>
                        <Button asChild className="w-full">
                          <Link href={`/dashboard/student/courses/${i + 10}`}>View Course</Link>
                        </Button>
                      </CardFooter>
                    </Card>
                  ))}
                </div>
              </TabsContent>
            </div>
          </div>
        </Tabs>
      </div>
    </SidebarNavigation>
  )
}
