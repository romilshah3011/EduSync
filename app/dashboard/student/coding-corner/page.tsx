"use client"

import { useState } from "react"
import { SidebarNavigation } from "@/components/sidebar-navigation"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Search, Filter, Clock, Code, Trophy, Users, Terminal, ExternalLink, ArrowRight } from "lucide-react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"

// Mock data for coding contests
const ongoingContests = [
  {
    id: 1,
    title: "Weekly Algorithm Challenge",
    description: "Solve 5 algorithmic problems in 2 hours. Focus on data structures and time complexity optimization.",
    difficulty: "Medium",
    participants: 128,
    timeRemaining: "1 day 4 hours",
    tags: ["Algorithms", "Data Structures"],
  },
  {
    id: 2,
    title: "Web Dev Hackathon",
    description: "Build a responsive web application with specific requirements in 48 hours.",
    difficulty: "Hard",
    participants: 76,
    timeRemaining: "12 hours",
    tags: ["JavaScript", "React", "CSS"],
  },
  {
    id: 3,
    title: "Database Challenge",
    description: "Optimize SQL queries and design efficient database schemas for given scenarios.",
    difficulty: "Easy",
    participants: 95,
    timeRemaining: "2 days 8 hours",
    tags: ["SQL", "Database Design"],
  },
]

const upcomingContests = [
  {
    id: 4,
    title: "Machine Learning Competition",
    description: "Train models to solve a classification problem with the highest accuracy.",
    difficulty: "Hard",
    startDate: "May 15, 2023",
    duration: "7 days",
    tags: ["Python", "ML", "Data Science"],
  },
  {
    id: 5,
    title: "Mobile App Challenge",
    description: "Develop a mobile app prototype that solves a real-world problem.",
    difficulty: "Medium",
    startDate: "May 20, 2023",
    duration: "3 days",
    tags: ["Flutter", "React Native", "UI/UX"],
  },
]

// Mock code editor content
const initialCode = `function solveProblem(input) {
  // Your solution here
  
  return result;
}

// Example usage:
const input = [1, 2, 3, 4, 5];
const result = solveProblem(input);
console.log(result);`

export default function CodingCornerPage() {
  const [activeTab, setActiveTab] = useState("ongoing")
  const [code, setCode] = useState(initialCode)
  const [language, setLanguage] = useState("javascript")
  const [output, setOutput] = useState("")
  const [isRunning, setIsRunning] = useState(false)

  const handleRunCode = () => {
    setIsRunning(true)
    setOutput("Running code...")

    // Simulate code execution
    setTimeout(() => {
      setOutput("// Output:\n// Your code executed successfully!\n// No result returned from the function.")
      setIsRunning(false)
    }, 1500)
  }

  const handleSaveCode = () => {
    // Simulate saving code
    setTimeout(() => {
      alert("Code saved successfully!")
    }, 500)
  }

  return (
    <SidebarNavigation role="student">
      <div className="space-y-6">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <h1 className="text-2xl font-bold tracking-tight">Coding Corner</h1>
            <p className="text-muted-foreground">Practice coding and participate in contests</p>
          </div>
          <div className="flex items-center gap-2">
            <div className="relative w-full md:w-64">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input
                type="search"
                placeholder="Search challenges..."
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
                <CardTitle className="text-base">Active Contests</CardTitle>
                <Badge className="bg-green-500 text-white hover:bg-green-600">Live Now</Badge>
              </div>
              <CardDescription>Ongoing coding competitions</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">3</div>
              <p className="text-sm text-muted-foreground">Join now to earn extra EduPoints</p>
            </CardContent>
          </Card>
          <Card className="glass-card">
            <CardHeader className="pb-2">
              <div className="flex items-center justify-between">
                <CardTitle className="text-base">Your Rank</CardTitle>
                <Badge variant="outline">This Month</Badge>
              </div>
              <CardDescription>Based on solved problems</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">42nd</div>
              <p className="text-sm text-muted-foreground">Solved 28 problems this month</p>
            </CardContent>
          </Card>
          <Card className="glass-card">
            <CardHeader className="pb-2">
              <div className="flex items-center justify-between">
                <CardTitle className="text-base">Upcoming Contests</CardTitle>
                <Badge variant="outline">This Week</Badge>
              </div>
              <CardDescription>Mark your calendar</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">5</div>
              <p className="text-sm text-muted-foreground">Next contest in 2 days</p>
            </CardContent>
          </Card>
        </div>

        <Tabs defaultValue="ongoing" value={activeTab} onValueChange={setActiveTab}>
          <TabsList className="grid w-full md:w-[400px] grid-cols-2">
            <TabsTrigger value="ongoing">Ongoing Contests</TabsTrigger>
            <TabsTrigger value="upcoming">Upcoming Contests</TabsTrigger>
          </TabsList>

          <TabsContent value="ongoing" className="space-y-4 mt-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {ongoingContests.map((contest) => (
                <Card key={contest.id} className="overflow-hidden">
                  <CardHeader className="pb-2">
                    <div className="flex justify-between items-start">
                      <CardTitle className="text-lg">{contest.title}</CardTitle>
                      <Badge
                        className={
                          contest.difficulty === "Easy"
                            ? "bg-green-500"
                            : contest.difficulty === "Medium"
                              ? "bg-yellow-500"
                              : "bg-red-500"
                        }
                      >
                        {contest.difficulty}
                      </Badge>
                    </div>
                    <CardDescription className="line-clamp-2">{contest.description}</CardDescription>
                  </CardHeader>
                  <CardContent className="pb-2">
                    <div className="flex flex-wrap gap-1 mb-3">
                      {contest.tags.map((tag) => (
                        <Badge key={tag} variant="outline" className="text-xs">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                    <div className="flex justify-between text-sm">
                      <div className="flex items-center gap-1">
                        <Users className="h-4 w-4" />
                        <span>{contest.participants} participants</span>
                      </div>
                      <div className="flex items-center gap-1 text-amber-500">
                        <Clock className="h-4 w-4" />
                        <span>{contest.timeRemaining}</span>
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button className="w-full">
                      Enter Contest
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="upcoming" className="space-y-4 mt-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {upcomingContests.map((contest) => (
                <Card key={contest.id} className="overflow-hidden">
                  <CardHeader className="pb-2">
                    <div className="flex justify-between items-start">
                      <CardTitle className="text-lg">{contest.title}</CardTitle>
                      <Badge
                        className={
                          contest.difficulty === "Easy"
                            ? "bg-green-500"
                            : contest.difficulty === "Medium"
                              ? "bg-yellow-500"
                              : "bg-red-500"
                        }
                      >
                        {contest.difficulty}
                      </Badge>
                    </div>
                    <CardDescription className="line-clamp-2">{contest.description}</CardDescription>
                  </CardHeader>
                  <CardContent className="pb-2">
                    <div className="flex flex-wrap gap-1 mb-3">
                      {contest.tags.map((tag) => (
                        <Badge key={tag} variant="outline" className="text-xs">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                    <div className="flex justify-between text-sm">
                      <div>
                        <span>Start Date:</span>
                        <span>{contest.startDate}</span>
                      </div>
                      <div>
                        <span>Duration:</span>
                        <span>{contest.duration}</span>
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button className="w-full">
                      Set Reminder
                      <Clock className="ml-2 h-4 w-4" />
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="md:col-span-2">
            <Card className="glass-card">
              <CardHeader>
                <CardTitle>Try a Quick Problem</CardTitle>
                <CardDescription>Practice your coding skills with this problem</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <h3 className="font-medium">Fibonacci Number</h3>
                  <p className="text-sm text-muted-foreground">
                    Write a function that returns the nth Fibonacci number. The Fibonacci sequence starts with 0 and 1,
                    and each subsequent number is the sum of the two preceding ones.
                  </p>
                  <div className="p-3 bg-muted rounded-md">
                    <p className="text-sm font-mono">
                      <strong>Example:</strong> Input: n = 5, Output: 5
                      <br />
                      <strong>Explanation:</strong> The Fibonacci sequence is [0, 1, 1, 2, 3, 5, 8, 13, 21, ...]. F(5) =
                      5.
                    </p>
                  </div>
                </div>

                <div className="border rounded-md overflow-hidden">
                  <div className="bg-muted p-2 flex justify-between items-center">
                    <div className="flex items-center gap-2">
                      <Terminal className="h-4 w-4" />
                      <span className="text-sm font-medium">JavaScript</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Button variant="ghost" size="sm">
                        Reset
                      </Button>
                      <Select defaultValue="javascript">
                        <SelectTrigger className="w-[130px] h-8">
                          <SelectValue placeholder="Language" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="javascript">JavaScript</SelectItem>
                          <SelectItem value="python">Python</SelectItem>
                          <SelectItem value="java">Java</SelectItem>
                          <SelectItem value="cpp">C++</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                  <Textarea
                    className="w-full h-64 p-4 font-mono text-sm bg-background focus:outline-none"
                    value={code}
                    onChange={(e) => setCode(e.target.value)}
                  />
                </div>
              </CardContent>
              <CardFooter className="flex justify-between">
                <Button variant="outline">Test Code</Button>
                <Button>Submit Solution</Button>
              </CardFooter>
            </Card>
          </div>

          <div>
            <Card className="glass-card">
              <CardHeader>
                <CardTitle>Coding Resources</CardTitle>
                <CardDescription>Helpful links and materials</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <h3 className="font-medium">Popular Platforms</h3>
                  <div className="space-y-2">
                    {[
                      { name: "LeetCode", url: "https://leetcode.com" },
                      { name: "HackerRank", url: "https://hackerrank.com" },
                      { name: "CodeForces", url: "https://codeforces.com" },
                      { name: "CodeChef", url: "https://codechef.com" },
                    ].map((platform, i) => (
                      <Button key={i} variant="outline" className="w-full justify-start gap-2" asChild>
                        <a href={platform.url} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="h-4 w-4" />
                          <span>{platform.name}</span>
                        </a>
                      </Button>
                    ))}
                  </div>
                </div>

                <div className="space-y-2">
                  <h3 className="font-medium">Recommended Courses</h3>
                  <div className="space-y-2">
                    {[
                      "Data Structures & Algorithms",
                      "Competitive Programming",
                      "Interview Preparation",
                      "System Design",
                    ].map((course, i) => (
                      <div key={i} className="flex items-center gap-2 p-2 rounded-md hover:bg-muted">
                        <Code className="h-4 w-4 text-muted-foreground" />
                        <span className="text-sm">{course}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-2">
                  <Button className="w-full gap-1">
                    <Trophy className="h-4 w-4" /> View Leaderboard
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
