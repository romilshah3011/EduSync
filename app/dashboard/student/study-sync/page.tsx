import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Search, MessageSquare, Users, BookOpen, Code, Server, Shield } from "lucide-react"

export default function StudySync() {
  // Mock data for skill exchange listings
  const skillExchanges = [
    {
      id: 1,
      user: {
        name: "Alex Johnson",
        avatar: "/placeholder.svg?height=40&width=40",
        eduPoints: 1250,
      },
      offering: ["Machine Learning", "Python"],
      seeking: ["Cybersecurity", "Network Fundamentals"],
      description:
        "I can help with ML algorithms and Python programming. Looking for someone to teach me cybersecurity basics.",
      posted: "2 days ago",
      matches: 4,
    },
    {
      id: 2,
      user: {
        name: "Samantha Lee",
        avatar: "/placeholder.svg?height=40&width=40",
        eduPoints: 980,
      },
      offering: ["Web Development", "UI/UX Design"],
      seeking: ["Data Science", "SQL"],
      description:
        "Frontend developer willing to exchange knowledge on React, HTML/CSS for data science and SQL skills.",
      posted: "5 hours ago",
      matches: 7,
    },
    {
      id: 3,
      user: {
        name: "Marcus Chen",
        avatar: "/placeholder.svg?height=40&width=40",
        eduPoints: 1540,
      },
      offering: ["Cybersecurity", "Ethical Hacking"],
      seeking: ["Mobile Development", "Flutter"],
      description:
        "Security specialist offering knowledge exchange on cybersecurity principles for mobile app development skills.",
      posted: "1 week ago",
      matches: 2,
    },
    {
      id: 4,
      user: {
        name: "Priya Sharma",
        avatar: "/placeholder.svg?height=40&width=40",
        eduPoints: 1120,
      },
      offering: ["Data Visualization", "Tableau"],
      seeking: ["Cloud Computing", "AWS"],
      description: "Data visualization expert looking to learn cloud computing fundamentals and AWS services.",
      posted: "3 days ago",
      matches: 5,
    },
  ]

  // Mock data for my exchanges
  const myExchanges = [
    {
      id: 101,
      partner: {
        name: "Jordan Smith",
        avatar: "/placeholder.svg?height=40&width=40",
      },
      offering: ["JavaScript", "React"],
      receiving: ["Data Structures", "Algorithms"],
      status: "Active",
      nextSession: "Tomorrow, 4:00 PM",
      progress: 60,
    },
    {
      id: 102,
      partner: {
        name: "Taylor Wong",
        avatar: "/placeholder.svg?height=40&width=40",
      },
      offering: ["UI/UX Design"],
      receiving: ["Python", "Django"],
      status: "Scheduled",
      nextSession: "Friday, 6:30 PM",
      progress: 20,
    },
  ]

  // Skill categories for the filter
  const skillCategories = [
    { icon: <Code className="h-4 w-4 mr-1" />, name: "Programming" },
    { icon: <Server className="h-4 w-4 mr-1" />, name: "Data Science" },
    { icon: <Shield className="h-4 w-4 mr-1" />, name: "Cybersecurity" },
    { icon: <BookOpen className="h-4 w-4 mr-1" />, name: "Academic" },
    { icon: <Users className="h-4 w-4 mr-1" />, name: "Soft Skills" },
  ]

  return (
    <div className="container mx-auto py-6 space-y-8">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Study Sync</h1>
          <p className="text-muted-foreground">
            Exchange skills with fellow students - teach what you know, learn what you don't
          </p>
        </div>
        <Button className="bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700">
          Create Exchange Offer
        </Button>
      </div>

      <div className="relative">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
        <Input placeholder="Search by skills, topics, or keywords..." className="pl-10 w-full" />
      </div>

      <div className="flex flex-wrap gap-2">
        {skillCategories.map((category, index) => (
          <Button key={index} variant="outline" size="sm" className="flex items-center">
            {category.icon}
            {category.name}
          </Button>
        ))}
      </div>

      <Tabs defaultValue="browse" className="w-full">
        <TabsList className="grid w-full grid-cols-3 mb-6">
          <TabsTrigger value="browse">Browse Exchanges</TabsTrigger>
          <TabsTrigger value="my-exchanges">My Exchanges</TabsTrigger>
          <TabsTrigger value="matches">Potential Matches</TabsTrigger>
        </TabsList>

        <TabsContent value="browse" className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skillExchanges.map((exchange) => (
              <Card key={exchange.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                <CardHeader className="pb-2">
                  <div className="flex justify-between items-start">
                    <div className="flex items-center gap-3">
                      <Avatar>
                        <AvatarImage src={exchange.user.avatar || "/placeholder.svg"} alt={exchange.user.name} />
                        <AvatarFallback>{exchange.user.name.substring(0, 2)}</AvatarFallback>
                      </Avatar>
                      <div>
                        <CardTitle className="text-lg">{exchange.user.name}</CardTitle>
                        <CardDescription>{exchange.eduPoints} EduPoints</CardDescription>
                      </div>
                    </div>
                    <Badge variant="outline" className="text-xs">
                      {exchange.posted}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent className="pb-2">
                  <div className="mb-3">
                    <p className="text-sm font-medium mb-1">Offering:</p>
                    <div className="flex flex-wrap gap-1">
                      {exchange.offering.map((skill, i) => (
                        <Badge key={i} className="bg-green-100 text-green-800 hover:bg-green-200">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  <div className="mb-3">
                    <p className="text-sm font-medium mb-1">Seeking:</p>
                    <div className="flex flex-wrap gap-1">
                      {exchange.seeking.map((skill, i) => (
                        <Badge key={i} className="bg-blue-100 text-blue-800 hover:bg-blue-200">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground">{exchange.description}</p>
                </CardContent>
                <CardFooter className="flex justify-between pt-2">
                  <div className="flex items-center text-sm text-muted-foreground">
                    <Users className="h-4 w-4 mr-1" />
                    {exchange.matches} potential matches
                  </div>
                  <Button size="sm">Connect</Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="my-exchanges" className="space-y-6">
          {myExchanges.length > 0 ? (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {myExchanges.map((exchange) => (
                <Card key={exchange.id}>
                  <CardHeader className="pb-2">
                    <div className="flex justify-between items-center">
                      <div className="flex items-center gap-3">
                        <Avatar>
                          <AvatarImage
                            src={exchange.partner.avatar || "/placeholder.svg"}
                            alt={exchange.partner.name}
                          />
                          <AvatarFallback>{exchange.partner.name.substring(0, 2)}</AvatarFallback>
                        </Avatar>
                        <div>
                          <CardTitle className="text-lg">{exchange.partner.name}</CardTitle>
                          <Badge
                            variant={exchange.status === "Active" ? "default" : "outline"}
                            className={exchange.status === "Active" ? "bg-green-500" : ""}
                          >
                            {exchange.status}
                          </Badge>
                        </div>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-2 gap-4 mb-4">
                      <div>
                        <p className="text-sm font-medium mb-1">You're teaching:</p>
                        <div className="flex flex-wrap gap-1">
                          {exchange.offering.map((skill, i) => (
                            <Badge key={i} className="bg-green-100 text-green-800">
                              {skill}
                            </Badge>
                          ))}
                        </div>
                      </div>
                      <div>
                        <p className="text-sm font-medium mb-1">You're learning:</p>
                        <div className="flex flex-wrap gap-1">
                          {exchange.receiving.map((skill, i) => (
                            <Badge key={i} className="bg-blue-100 text-blue-800">
                              {skill}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span>Progress</span>
                        <span>{exchange.progress}%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
                        <div
                          className="bg-gradient-to-r from-pink-500 to-purple-600 h-2.5 rounded-full"
                          style={{ width: `${exchange.progress}%` }}
                        ></div>
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter className="flex justify-between">
                    <div className="text-sm">
                      <p className="font-medium">Next session:</p>
                      <p className="text-muted-foreground">{exchange.nextSession}</p>
                    </div>
                    <div className="flex gap-2">
                      <Button size="sm" variant="outline">
                        <MessageSquare className="h-4 w-4 mr-1" />
                        Message
                      </Button>
                      <Button size="sm">Join Session</Button>
                    </div>
                  </CardFooter>
                </Card>
              ))}
            </div>
          ) : (
            <Card className="p-8 text-center">
              <CardContent className="pt-6">
                <h3 className="text-xl font-semibold mb-2">No active exchanges yet</h3>
                <p className="text-muted-foreground mb-6">
                  Start by browsing available exchanges or create your own offer
                </p>
                <Button>Find Exchange Partners</Button>
              </CardContent>
            </Card>
          )}
        </TabsContent>

        <TabsContent value="matches" className="space-y-6">
          <Card className="p-8 text-center">
            <CardContent className="pt-6">
              <h3 className="text-xl font-semibold mb-2">Complete your skill profile</h3>
              <p className="text-muted-foreground mb-6">Add your skills and learning goals to see potential matches</p>
              <Button>Update Skill Profile</Button>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
