import { SidebarNavigation } from "@/components/sidebar-navigation"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import {
  BarChart,
  TrendingUp,
  TrendingDown,
  BookOpen,
  Brain,
  Lightbulb,
  Award,
  Zap,
  ArrowRight,
  Cpu,
  Target,
  FileText,
  Video,
  Shield,
  Users,
  Plus,
  Code,
  Database,
  Layers,
  Calendar,
  Trophy,
} from "lucide-react"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function AnalyticsPage() {
  return (
    <SidebarNavigation role="student">
      <div className="space-y-6">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <h1 className="text-2xl font-bold tracking-tight">Learning Analytics</h1>
            <p className="text-muted-foreground">Insights and recommendations for your learning journey</p>
          </div>
          <Button variant="outline" size="sm" className="gap-1">
            <BarChart className="h-4 w-4" /> View Detailed Report
          </Button>
        </div>

        <div className="grid gap-4 md:grid-cols-3">
          <Card className="glass-card">
            <CardHeader className="pb-2">
              <div className="flex items-center justify-between">
                <CardTitle className="text-base">Learning Progress</CardTitle>
                <Badge variant="outline" className="bg-primary/10 text-primary hover:bg-primary/20">
                  This Semester
                </Badge>
              </div>
              <CardDescription>Overall completion rate</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">68%</div>
              <div className="flex items-center gap-1 text-green-500 text-sm">
                <TrendingUp className="h-4 w-4" />
                <span>+12% from last month</span>
              </div>
            </CardContent>
          </Card>
          <Card className="glass-card">
            <CardHeader className="pb-2">
              <div className="flex items-center justify-between">
                <CardTitle className="text-base">Skill Mastery</CardTitle>
                <Badge variant="outline">Top Skills</Badge>
              </div>
              <CardDescription>Your strongest areas</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">3 Skills</div>
              <p className="text-sm text-muted-foreground">Data Structures, Algorithms, Web Development</p>
            </CardContent>
          </Card>
          <Card className="glass-card">
            <CardHeader className="pb-2">
              <div className="flex items-center justify-between">
                <CardTitle className="text-base">Learning Recommendations</CardTitle>
                <Badge variant="outline" className="bg-amber-500/10 text-amber-500 hover:bg-amber-500/20">
                  5 New
                </Badge>
              </div>
              <CardDescription>Personalized suggestions</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">12 Resources</div>
              <p className="text-sm text-muted-foreground">Based on your performance and goals</p>
            </CardContent>
          </Card>
        </div>

        <Tabs defaultValue="performance">
          <TabsList>
            <TabsTrigger value="performance">Performance Analysis</TabsTrigger>
            <TabsTrigger value="recommendations">Recommendations</TabsTrigger>
            <TabsTrigger value="skills">Skill Assessment</TabsTrigger>
            <TabsTrigger value="goals">Learning Goals</TabsTrigger>
          </TabsList>

          <TabsContent value="performance" className="mt-4 space-y-6">
            <div className="grid gap-6 md:grid-cols-2">
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle>Course Performance</CardTitle>
                  <CardDescription>Your progress across current courses</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  {[
                    { course: "Data Structures & Algorithms", progress: 92, trend: "up" },
                    { course: "Database Management Systems", progress: 78, trend: "up" },
                    { course: "Software Engineering", progress: 65, trend: "down" },
                    { course: "Web Development", progress: 88, trend: "up" },
                    { course: "Computer Networks", progress: 72, trend: "stable" },
                  ].map((course, i) => (
                    <div key={i} className="space-y-2">
                      <div className="flex items-center justify-between">
                        <span className="text-sm font-medium">{course.course}</span>
                        <div className="flex items-center gap-1">
                          <span className="text-sm">{course.progress}%</span>
                          {course.trend === "up" ? (
                            <TrendingUp className="h-3 w-3 text-green-500" />
                          ) : course.trend === "down" ? (
                            <TrendingDown className="h-3 w-3 text-red-500" />
                          ) : null}
                        </div>
                      </div>
                      <Progress value={course.progress} className="h-2" />
                    </div>
                  ))}
                </CardContent>
              </Card>

              <Card className="glass-card">
                <CardHeader>
                  <CardTitle>Learning Activity</CardTitle>
                  <CardDescription>Your engagement over time</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="h-[300px] flex items-end gap-2">
                    {[65, 70, 60, 80, 75, 90, 85].map((height, i) => (
                      <div key={i} className="relative flex flex-1 flex-col items-center">
                        <div className="w-full rounded-md bg-primary" style={{ height: `${height}%` }} />
                        <span className="mt-2 text-xs">{["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"][i]}</span>
                      </div>
                    ))}
                  </div>
                  <div className="mt-4 flex items-center justify-between text-sm">
                    <div>
                      <span className="font-medium">Weekly Average:</span> 75%
                    </div>
                    <div className="flex items-center gap-1 text-green-500">
                      <TrendingUp className="h-4 w-4" />
                      <span>+15% from last week</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="glass-card">
                <CardHeader>
                  <CardTitle>Strengths & Weaknesses</CardTitle>
                  <CardDescription>Based on your assessment results</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h3 className="text-sm font-medium mb-2">Strengths</h3>
                    <div className="space-y-2">
                      {[
                        { skill: "Algorithm Analysis", score: 95 },
                        { skill: "Database Design", score: 90 },
                        { skill: "Frontend Development", score: 88 },
                      ].map((item, i) => (
                        <div key={i} className="flex items-center justify-between p-2 rounded-lg border">
                          <div className="flex items-center gap-2">
                            <div className="rounded-full bg-green-500/10 p-1">
                              <TrendingUp className="h-4 w-4 text-green-500" />
                            </div>
                            <span className="text-sm">{item.skill}</span>
                          </div>
                          <Badge variant="outline" className="bg-green-500/10 text-green-500">
                            {item.score}%
                          </Badge>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h3 className="text-sm font-medium mb-2">Areas for Improvement</h3>
                    <div className="space-y-2">
                      {[
                        { skill: "Network Security", score: 65 },
                        { skill: "System Design", score: 70 },
                        { skill: "Mobile Development", score: 72 },
                      ].map((item, i) => (
                        <div key={i} className="flex items-center justify-between p-2 rounded-lg border">
                          <div className="flex items-center gap-2">
                            <div className="rounded-full bg-amber-500/10 p-1">
                              <TrendingDown className="h-4 w-4 text-amber-500" />
                            </div>
                            <span className="text-sm">{item.skill}</span>
                          </div>
                          <Badge variant="outline" className="bg-amber-500/10 text-amber-500">
                            {item.score}%
                          </Badge>
                        </div>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="glass-card">
                <CardHeader>
                  <CardTitle>Learning Style Analysis</CardTitle>
                  <CardDescription>Your preferred learning methods</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {[
                      {
                        style: "Visual Learning",
                        percentage: 40,
                        description: "You learn best through images and diagrams",
                      },
                      {
                        style: "Practical Application",
                        percentage: 30,
                        description: "You excel with hands-on exercises",
                      },
                      {
                        style: "Collaborative Learning",
                        percentage: 20,
                        description: "You benefit from group discussions",
                      },
                      {
                        style: "Theoretical Learning",
                        percentage: 10,
                        description: "You understand through concepts and theory",
                      },
                    ].map((style, i) => (
                      <div key={i} className="space-y-1">
                        <div className="flex items-center justify-between">
                          <span className="text-sm font-medium">{style.style}</span>
                          <span className="text-sm">{style.percentage}%</span>
                        </div>
                        <Progress value={style.percentage} className="h-2" />
                        <p className="text-xs text-muted-foreground">{style.description}</p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="recommendations" className="mt-4 space-y-6">
            <div className="mb-4 p-4 rounded-lg bg-primary/5 border border-primary/10">
              <div className="flex items-start gap-3">
                <Cpu className="h-5 w-5 text-primary mt-0.5" />
                <div>
                  <h3 className="font-medium">AI-Powered Recommendations</h3>
                  <p className="text-sm text-muted-foreground">
                    Based on your learning patterns, performance, and goals, our AI has generated these personalized
                    recommendations to help you improve and reach your objectives.
                  </p>
                </div>
              </div>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle>Recommended Courses</CardTitle>
                  <CardDescription>Based on your current skills and goals</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  {[
                    {
                      title: "Advanced Algorithms",
                      description: "Deep dive into complex algorithmic techniques",
                      match: 95,
                      reason: "Based on your strong performance in Data Structures",
                      icon: BookOpen,
                    },
                    {
                      title: "Cloud Computing",
                      description: "Learn about cloud architecture and services",
                      match: 88,
                      reason: "Complements your web development skills",
                      icon: BookOpen,
                    },
                    {
                      title: "Cybersecurity Fundamentals",
                      description: "Essential security concepts and practices",
                      match: 82,
                      reason: "Addresses your knowledge gap in network security",
                      icon: BookOpen,
                    },
                  ].map((course, i) => (
                    <div key={i} className="p-3 border rounded-lg">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <div className="rounded-full bg-primary/10 p-1">
                            <course.icon className="h-4 w-4 text-primary" />
                          </div>
                          <div>
                            <h4 className="font-medium">{course.title}</h4>
                            <p className="text-xs text-muted-foreground">{course.description}</p>
                          </div>
                        </div>
                        <Badge variant="outline" className="bg-primary/10 text-primary">
                          {course.match}% Match
                        </Badge>
                      </div>
                      <div className="mt-2 flex items-start gap-2">
                        <Lightbulb className="h-4 w-4 text-amber-500 mt-0.5" />
                        <p className="text-xs text-muted-foreground">{course.reason}</p>
                      </div>
                    </div>
                  ))}
                  <Button variant="outline" className="w-full gap-1">
                    View All Recommended Courses <ArrowRight className="h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>

              <Card className="glass-card">
                <CardHeader>
                  <CardTitle>Learning Resources</CardTitle>
                  <CardDescription>Materials to enhance your understanding</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  {[
                    {
                      title: "System Design Interview Guide",
                      type: "PDF",
                      relevance: "Addresses your system design knowledge gap",
                      icon: FileText,
                    },
                    {
                      title: "Mobile Development with React Native",
                      type: "Video Course",
                      relevance: "Helps improve your mobile development skills",
                      icon: Video,
                    },
                    {
                      title: "Network Security Fundamentals",
                      type: "Interactive Tutorial",
                      relevance: "Strengthens your weakest area",
                      icon: Shield,
                    },
                  ].map((resource, i) => (
                    <div key={i} className="p-3 border rounded-lg">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <div className="rounded-full bg-blue-500/10 p-1">
                            <resource.icon className="h-4 w-4 text-blue-500" />
                          </div>
                          <div>
                            <h4 className="font-medium">{resource.title}</h4>
                            <p className="text-xs text-muted-foreground">{resource.type}</p>
                          </div>
                        </div>
                        <Button variant="ghost" size="sm">
                          Access
                        </Button>
                      </div>
                      <div className="mt-2 flex items-start gap-2">
                        <Target className="h-4 w-4 text-green-500 mt-0.5" />
                        <p className="text-xs text-muted-foreground">{resource.relevance}</p>
                      </div>
                    </div>
                  ))}
                  <Button variant="outline" className="w-full gap-1">
                    View All Resources <ArrowRight className="h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>

              <Card className="glass-card">
                <CardHeader>
                  <CardTitle>Study Strategies</CardTitle>
                  <CardDescription>Personalized learning approaches</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  {[
                    {
                      title: "Visual Learning Enhancement",
                      description: "Leverage your visual learning preference with diagrams and mind maps",
                      icon: Brain,
                    },
                    {
                      title: "Practical Project Focus",
                      description: "Reinforce concepts through hands-on implementation in personal projects",
                      icon: Zap,
                    },
                    {
                      title: "Study Group Formation",
                      description: "Form study groups for collaborative learning in challenging subjects",
                      icon: Users,
                    },
                  ].map((strategy, i) => (
                    <div key={i} className="p-3 border rounded-lg">
                      <div className="flex items-start gap-2">
                        <div className="rounded-full bg-purple-500/10 p-1 mt-0.5">
                          <strategy.icon className="h-4 w-4 text-purple-500" />
                        </div>
                        <div>
                          <h4 className="font-medium">{strategy.title}</h4>
                          <p className="text-xs text-muted-foreground">{strategy.description}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>

              <Card className="glass-card">
                <CardHeader>
                  <CardTitle>Performance Insights</CardTitle>
                  <CardDescription>Areas to focus on for improvement</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  {[
                    {
                      insight: "Software Engineering Engagement",
                      description:
                        "Your participation in Software Engineering has decreased by 15% in the last two weeks",
                      recommendation: "Schedule regular study sessions and engage more in class discussions",
                    },
                    {
                      insight: "Quiz Performance Pattern",
                      description: "You consistently score lower on theoretical questions compared to practical ones",
                      recommendation: "Allocate more time to understanding theoretical concepts before implementation",
                    },
                    {
                      insight: "Assignment Submission Timing",
                      description: "You tend to submit assignments close to deadlines, which may affect quality",
                      recommendation: "Start assignments earlier to allow time for review and refinement",
                    },
                  ].map((item, i) => (
                    <div key={i} className="p-3 border rounded-lg space-y-2">
                      <h4 className="font-medium">{item.insight}</h4>
                      <p className="text-xs text-muted-foreground">{item.description}</p>
                      <div className="flex items-start gap-2 pt-1">
                        <Lightbulb className="h-4 w-4 text-amber-500 mt-0.5" />
                        <p className="text-xs">{item.recommendation}</p>
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="skills" className="mt-4 space-y-6">
            <div className="grid gap-6 md:grid-cols-2">
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle>Skill Assessment</CardTitle>
                  <CardDescription>Your proficiency across different areas</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  {[
                    { skill: "Data Structures", level: 90, category: "Computer Science" },
                    { skill: "Algorithms", level: 85, category: "Computer Science" },
                    { skill: "Web Development", level: 82, category: "Programming" },
                    { skill: "Database Management", level: 78, category: "Data" },
                    { skill: "Software Engineering", level: 75, category: "Development" },
                    { skill: "System Design", level: 70, category: "Architecture" },
                    { skill: "Mobile Development", level: 72, category: "Programming" },
                    { skill: "Network Security", level: 65, category: "Security" },
                  ].map((skill, i) => (
                    <div key={i} className="space-y-2">
                      <div className="flex items-center justify-between">
                        <div>
                          <span className="text-sm font-medium">{skill.skill}</span>
                          <span className="text-xs text-muted-foreground ml-2">({skill.category})</span>
                        </div>
                        <span className="text-sm">{skill.level}%</span>
                      </div>
                      <Progress
                        value={skill.level}
                        className={`h-2 ${
                          skill.level >= 80 ? "bg-green-500" : skill.level >= 70 ? "bg-blue-500" : "bg-amber-500"
                        }`}
                      />
                    </div>
                  ))}
                </CardContent>
              </Card>

              <Card className="glass-card">
                <CardHeader>
                  <CardTitle>Skill Growth</CardTitle>
                  <CardDescription>Your progress over time</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="h-[300px] flex items-end gap-2">
                    {[
                      { month: "Jan", level: 60 },
                      { month: "Feb", level: 65 },
                      { month: "Mar", level: 70 },
                      { month: "Apr", level: 75 },
                      { month: "May", level: 80 },
                    ].map((item, i) => (
                      <div key={i} className="relative flex flex-1 flex-col items-center">
                        <div className="w-full rounded-md bg-primary" style={{ height: `${item.level}%` }} />
                        <div className="mt-2 text-xs text-center">
                          <div>{item.month}</div>
                          <div className="font-medium">{item.level}%</div>
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="mt-4 flex items-center justify-between text-sm">
                    <div>
                      <span className="font-medium">Overall Growth:</span> +20%
                    </div>
                    <div className="flex items-center gap-1 text-green-500">
                      <TrendingUp className="h-4 w-4" />
                      <span>Consistent improvement</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="glass-card md:col-span-2">
                <CardHeader>
                  <CardTitle>Skill Roadmap</CardTitle>
                  <CardDescription>Your personalized skill development path</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="relative">
                    <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-muted-foreground/20" />
                    <div className="space-y-8 relative">
                      {[
                        {
                          phase: "Current Focus",
                          skills: ["System Design", "Network Security", "Mobile Development"],
                          timeframe: "Next 2 months",
                          status: "In Progress",
                        },
                        {
                          phase: "Next Steps",
                          skills: ["Cloud Computing", "DevOps", "Microservices"],
                          timeframe: "3-6 months",
                          status: "Upcoming",
                        },
                        {
                          phase: "Future Growth",
                          skills: ["AI/ML Fundamentals", "Blockchain", "AR/VR Development"],
                          timeframe: "6-12 months",
                          status: "Planned",
                        },
                      ].map((phase, i) => (
                        <div key={i} className="relative pl-10">
                          <div
                            className={`absolute left-2.5 -translate-x-1/2 w-5 h-5 rounded-full ${
                              phase.status === "In Progress"
                                ? "bg-primary"
                                : phase.status === "Upcoming"
                                  ? "bg-amber-500"
                                  : "bg-muted-foreground/20"
                            }`}
                          />
                          <div className="space-y-2">
                            <div className="flex items-center justify-between">
                              <h3 className="font-medium">{phase.phase}</h3>
                              <Badge
                                variant="outline"
                                className={
                                  phase.status === "In Progress"
                                    ? "bg-primary/10 text-primary"
                                    : phase.status === "Upcoming"
                                      ? "bg-amber-500/10 text-amber-500"
                                      : "bg-muted-foreground/20"
                                }
                              >
                                {phase.status}
                              </Badge>
                            </div>
                            <p className="text-sm text-muted-foreground">Timeframe: {phase.timeframe}</p>
                            <div className="flex flex-wrap gap-2 mt-2">
                              {phase.skills.map((skill, j) => (
                                <Badge key={j} variant="outline">
                                  {skill}
                                </Badge>
                              ))}
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="goals" className="mt-4 space-y-6">
            <div className="grid gap-6 md:grid-cols-2">
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle>Learning Goals</CardTitle>
                  <CardDescription>Your current objectives and progress</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  {[
                    {
                      goal: "Master Advanced Data Structures",
                      progress: 75,
                      deadline: "June 30, 2023",
                      status: "On Track",
                    },
                    {
                      goal: "Complete Full-Stack Web Project",
                      progress: 60,
                      deadline: "July 15, 2023",
                      status: "On Track",
                    },
                    {
                      goal: "Improve System Design Skills",
                      progress: 40,
                      deadline: "August 1, 2023",
                      status: "Needs Attention",
                    },
                    {
                      goal: "Learn Cloud Computing Fundamentals",
                      progress: 25,
                      deadline: "August 30, 2023",
                      status: "Just Started",
                    },
                  ].map((goal, i) => (
                    <div key={i} className="space-y-2">
                      <div className="flex items-center justify-between">
                        <span className="text-sm font-medium">{goal.goal}</span>
                        <Badge
                          variant="outline"
                          className={
                            goal.status === "On Track"
                              ? "bg-green-500/10 text-green-500"
                              : goal.status === "Needs Attention"
                                ? "bg-amber-500/10 text-amber-500"
                                : "bg-blue-500/10 text-blue-500"
                          }
                        >
                          {goal.status}
                        </Badge>
                      </div>
                      <div className="flex items-center justify-between text-xs text-muted-foreground">
                        <span>Progress: {goal.progress}%</span>
                        <span>Deadline: {goal.deadline}</span>
                      </div>
                      <Progress value={goal.progress} className="h-2" />
                    </div>
                  ))}
                  <Button className="w-full gap-1">
                    <Plus className="h-4 w-4" /> Add New Goal
                  </Button>
                </CardContent>
              </Card>

              <Card className="glass-card">
                <CardHeader>
                  <CardTitle>Achievements</CardTitle>
                  <CardDescription>Milestones you've reached</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  {[
                    {
                      title: "Algorithm Master",
                      description: "Completed all algorithm challenges with 90%+ score",
                      date: "April 15, 2023",
                      icon: Award,
                    },
                    {
                      title: "Consistent Learner",
                      description: "Maintained study streak for 30 consecutive days",
                      date: "March 20, 2023",
                      icon: Calendar,
                    },
                    {
                      title: "Project Excellence",
                      description: "Received top grade for database project implementation",
                      date: "February 28, 2023",
                      icon: Trophy,
                    },
                  ].map((achievement, i) => (
                    <div key={i} className="flex items-start gap-3 p-3 border rounded-lg">
                      <div className="rounded-full bg-primary/10 p-2">
                        <achievement.icon className="h-4 w-4 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-medium">{achievement.title}</h4>
                        <p className="text-xs text-muted-foreground">{achievement.description}</p>
                        <p className="text-xs text-muted-foreground mt-1">Earned on {achievement.date}</p>
                      </div>
                    </div>
                  ))}
                  <Button variant="outline" className="w-full gap-1">
                    View All Achievements <ArrowRight className="h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>

              <Card className="glass-card md:col-span-2">
                <CardHeader>
                  <CardTitle>Career Path Analysis</CardTitle>
                  <CardDescription>How your skills align with career opportunities</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="grid gap-4 md:grid-cols-3">
                    {[
                      {
                        path: "Full-Stack Developer",
                        match: 85,
                        skills: ["Web Development", "Database Management", "Frontend", "Backend"],
                        icon: Code,
                      },
                      {
                        path: "Data Engineer",
                        match: 72,
                        skills: ["Database Management", "Data Structures", "SQL", "Big Data"],
                        icon: Database,
                      },
                      {
                        path: "Software Architect",
                        match: 68,
                        skills: ["System Design", "Software Engineering", "Cloud Computing"],
                        icon: Layers,
                      },
                    ].map((career, i) => (
                      <Card key={i} className="border border-muted">
                        <CardHeader className="pb-2">
                          <div className="flex items-center justify-between">
                            <div className="rounded-full bg-primary/10 p-2">
                              <career.icon className="h-4 w-4 text-primary" />
                            </div>
                            <Badge variant="outline" className="bg-primary/10 text-primary">
                              {career.match}% Match
                            </Badge>
                          </div>
                          <CardTitle className="text-base mt-2">{career.path}</CardTitle>
                        </CardHeader>
                        <CardContent>
                          <div className="flex flex-wrap gap-1">
                            {career.skills.map((skill, j) => (
                              <Badge key={j} variant="outline" className="text-xs">
                                {skill}
                              </Badge>
                            ))}
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>

                  <div className="p-4 rounded-lg bg-primary/5 border border-primary/10">
                    <h3 className="font-medium flex items-center gap-2">
                      <Lightbulb className="h-4 w-4 text-primary" /> Career Development Recommendation
                    </h3>
                    <p className="text-sm text-muted-foreground mt-2">
                      Based on your skills and interests, focusing on advanced web development technologies and system
                      design would strengthen your profile for Full-Stack Developer roles. Consider adding cloud
                      computing to your skill set to increase your software architect match.
                    </p>
                    <Button variant="outline" className="mt-4 gap-1">
                      <Target className="h-4 w-4" /> Generate Detailed Career Roadmap
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
