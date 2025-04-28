"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Trophy, Search, Filter } from "lucide-react"

// Mock data for leaderboard
const leaderboardData = [
  {
    id: 1,
    name: "Alex Johnson",
    avatar: "/placeholder.svg?height=40&width=40",
    eduPoints: 9850,
    rank: 1,
    skills: ["Machine Learning", "Python", "Data Science"],
    badges: ["Top Contributor", "Quiz Master"],
  },
  {
    id: 2,
    name: "Samantha Lee",
    avatar: "/placeholder.svg?height=40&width=40",
    eduPoints: 9720,
    rank: 2,
    skills: ["Web Development", "JavaScript", "React"],
    badges: ["Code Ninja", "Perfect Attendance"],
  },
  {
    id: 3,
    name: "Michael Chen",
    avatar: "/placeholder.svg?height=40&width=40",
    eduPoints: 9510,
    rank: 3,
    skills: ["Cybersecurity", "Networking", "Python"],
    badges: ["Security Expert"],
  },
  {
    id: 4,
    name: "Priya Patel",
    avatar: "/placeholder.svg?height=40&width=40",
    eduPoints: 9350,
    rank: 4,
    skills: ["UI/UX Design", "Figma", "Web Development"],
    badges: ["Design Star"],
  },
  {
    id: 5,
    name: "David Kim",
    avatar: "/placeholder.svg?height=40&width=40",
    eduPoints: 9200,
    rank: 5,
    skills: ["Mobile Development", "Flutter", "Dart"],
    badges: ["App Wizard"],
  },
  {
    id: 6,
    name: "Emma Wilson",
    avatar: "/placeholder.svg?height=40&width=40",
    eduPoints: 9100,
    rank: 6,
    skills: ["Cloud Computing", "AWS", "DevOps"],
    badges: ["Cloud Champion"],
  },
  {
    id: 7,
    name: "James Rodriguez",
    avatar: "/placeholder.svg?height=40&width=40",
    eduPoints: 8950,
    rank: 7,
    skills: ["Blockchain", "Solidity", "Web3"],
    badges: ["Blockchain Pioneer"],
  },
  {
    id: 8,
    name: "Olivia Taylor",
    avatar: "/placeholder.svg?height=40&width=40",
    eduPoints: 8800,
    rank: 8,
    skills: ["Data Analysis", "R", "Tableau"],
    badges: ["Data Guru"],
  },
  {
    id: 9,
    name: "Noah Garcia",
    avatar: "/placeholder.svg?height=40&width=40",
    eduPoints: 8700,
    rank: 9,
    skills: ["Game Development", "Unity", "C#"],
    badges: ["Game Dev Pro"],
  },
  {
    id: 10,
    name: "Sophia Martinez",
    avatar: "/placeholder.svg?height=40&width=40",
    eduPoints: 8600,
    rank: 10,
    skills: ["AI", "TensorFlow", "Python"],
    badges: ["AI Innovator"],
  },
]

// All available skills for filtering
const allSkills = [
  "Machine Learning",
  "Python",
  "Data Science",
  "Web Development",
  "JavaScript",
  "React",
  "Cybersecurity",
  "Networking",
  "UI/UX Design",
  "Figma",
  "Mobile Development",
  "Flutter",
  "Dart",
  "Cloud Computing",
  "AWS",
  "DevOps",
  "Blockchain",
  "Solidity",
  "Web3",
  "Data Analysis",
  "R",
  "Tableau",
  "Game Development",
  "Unity",
  "C#",
  "AI",
  "TensorFlow",
]

export default function LeaderboardPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedSkill, setSelectedSkill] = useState<string>("")
  const [timeRange, setTimeRange] = useState("all-time")

  // Filter leaderboard data based on search term and selected skill
  const filteredData = leaderboardData.filter((student) => {
    const matchesSearch = student.name.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesSkill = selectedSkill === "" || student.skills.includes(selectedSkill)
    return matchesSearch && matchesSkill
  })

  return (
    <div className="container mx-auto py-6 space-y-6">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Leaderboard</h1>
          <p className="text-muted-foreground">See where you rank among your peers based on EduPoints</p>
        </div>

        <div className="flex flex-col sm:flex-row gap-2 w-full md:w-auto">
          <Select value={timeRange} onValueChange={setTimeRange}>
            <SelectTrigger className="w-full sm:w-[180px]">
              <SelectValue placeholder="Time Range" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="weekly">This Week</SelectItem>
              <SelectItem value="monthly">This Month</SelectItem>
              <SelectItem value="semester">This Semester</SelectItem>
              <SelectItem value="all-time">All Time</SelectItem>
            </SelectContent>
          </Select>

          <div className="relative w-full sm:w-[250px]">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              type="search"
              placeholder="Search students..."
              className="pl-8"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>
      </div>

      <div className="flex flex-col md:flex-row gap-6">
        {/* Filters */}
        <Card className="w-full md:w-64 h-fit">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Filter className="h-5 w-5" />
              Filters
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <label className="text-sm font-medium">Skills</label>
              <Select value={selectedSkill} onValueChange={setSelectedSkill}>
                <SelectTrigger>
                  <SelectValue placeholder="Filter by skill" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Skills</SelectItem>
                  {allSkills.map((skill) => (
                    <SelectItem key={skill} value={skill}>
                      {skill}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            {selectedSkill && (
              <Button variant="outline" className="w-full" onClick={() => setSelectedSkill("")}>
                Clear Filters
              </Button>
            )}
          </CardContent>
        </Card>

        {/* Leaderboard */}
        <Card className="w-full">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Trophy className="h-5 w-5 text-yellow-500" />
              Top Students
            </CardTitle>
            <CardDescription>
              {timeRange === "weekly" && "Rankings for this week"}
              {timeRange === "monthly" && "Rankings for this month"}
              {timeRange === "semester" && "Rankings for this semester"}
              {timeRange === "all-time" && "All-time rankings"}
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {filteredData.length > 0 ? (
                filteredData.map((student) => (
                  <div
                    key={student.id}
                    className="flex items-center justify-between p-4 rounded-lg border hover:bg-muted/50 transition-colors"
                  >
                    <div className="flex items-center gap-4">
                      <div className="flex items-center justify-center w-8 h-8 rounded-full bg-primary/10 text-primary font-bold">
                        {student.rank}
                      </div>
                      <Avatar>
                        <AvatarImage src={student.avatar || "/placeholder.svg"} alt={student.name} />
                        <AvatarFallback>{student.name.substring(0, 2)}</AvatarFallback>
                      </Avatar>
                      <div>
                        <h3 className="font-medium">{student.name}</h3>
                        <div className="flex flex-wrap gap-1 mt-1">
                          {student.skills.slice(0, 2).map((skill) => (
                            <Badge key={skill} variant="outline" className="text-xs">
                              {skill}
                            </Badge>
                          ))}
                          {student.skills.length > 2 && (
                            <Badge variant="outline" className="text-xs">
                              +{student.skills.length - 2}
                            </Badge>
                          )}
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col items-end">
                      <div className="font-bold text-lg">{student.eduPoints.toLocaleString()}</div>
                      <div className="text-xs text-muted-foreground">EduPoints</div>
                    </div>
                  </div>
                ))
              ) : (
                <div className="text-center py-8">
                  <p className="text-muted-foreground">No students match your filters</p>
                </div>
              )}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
