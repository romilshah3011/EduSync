"use client"

import { useState } from "react"
import { SidebarNavigation } from "@/components/sidebar-navigation"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import {
  Search,
  Filter,
  Calendar,
  Clock,
  MapPin,
  Users,
  Star,
  CalendarPlus,
  Bell,
  ExternalLink,
  ThumbsUp,
  Tag,
  X,
  Plus,
} from "lucide-react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import Link from "next/link"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"

export default function EventsPage() {
  const [searchQuery, setSearchQuery] = useState("")

  return (
    <SidebarNavigation role="student">
      <div className="space-y-6">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <h1 className="text-2xl font-bold tracking-tight">Events</h1>
            <p className="text-muted-foreground">Discover and join upcoming events</p>
          </div>
          <div className="flex items-center gap-2">
            <div className="relative w-full md:w-64">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input
                type="search"
                placeholder="Search events..."
                className="w-full bg-background pl-8 md:w-[300px] lg:w-[320px]"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
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
                <CardTitle className="text-base">Upcoming Events</CardTitle>
                <Badge className="bg-primary/10 text-primary hover:bg-primary/20">This Week</Badge>
              </div>
              <CardDescription>Events happening soon</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">8</div>
              <p className="text-sm text-muted-foreground">Next event in 2 days</p>
            </CardContent>
          </Card>
          <Card className="glass-card">
            <CardHeader className="pb-2">
              <div className="flex items-center justify-between">
                <CardTitle className="text-base">Registered Events</CardTitle>
                <Badge variant="outline">Your Calendar</Badge>
              </div>
              <CardDescription>Events you're attending</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">3</div>
              <p className="text-sm text-muted-foreground">View in your calendar</p>
            </CardContent>
          </Card>
          <Card className="glass-card">
            <CardHeader className="pb-2">
              <div className="flex items-center justify-between">
                <CardTitle className="text-base">Recommended</CardTitle>
                <Badge variant="outline">Based on Skills</Badge>
              </div>
              <CardDescription>Events matching your interests</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">5</div>
              <p className="text-sm text-muted-foreground">Tailored to your profile</p>
            </CardContent>
          </Card>
        </div>

        <Tabs defaultValue="upcoming">
          <TabsList>
            <TabsTrigger value="upcoming">Upcoming</TabsTrigger>
            <TabsTrigger value="recommended">Recommended</TabsTrigger>
            <TabsTrigger value="registered">Registered</TabsTrigger>
            <TabsTrigger value="past">Past Events</TabsTrigger>
          </TabsList>

          <TabsContent value="upcoming" className="mt-4 space-y-4">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
              <h2 className="text-xl font-semibold">Upcoming Events</h2>
              <div className="flex items-center gap-2">
                <Select defaultValue="all">
                  <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="Event type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Events</SelectItem>
                    <SelectItem value="workshop">Workshops</SelectItem>
                    <SelectItem value="hackathon">Hackathons</SelectItem>
                    <SelectItem value="conference">Conferences</SelectItem>
                    <SelectItem value="networking">Networking</SelectItem>
                    <SelectItem value="career">Career Fairs</SelectItem>
                  </SelectContent>
                </Select>
                <Select defaultValue="all">
                  <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="Filter by topic" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Topics</SelectItem>
                    <SelectItem value="programming">Programming</SelectItem>
                    <SelectItem value="data-science">Data Science</SelectItem>
                    <SelectItem value="ai">Artificial Intelligence</SelectItem>
                    <SelectItem value="web-dev">Web Development</SelectItem>
                    <SelectItem value="cybersecurity">Cybersecurity</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  title: "Web Development Workshop",
                  description: "Learn modern frontend frameworks and best practices",
                  type: "Workshop",
                  date: "May 15, 2023",
                  time: "2:00 PM - 5:00 PM",
                  location: "Tech Building, Room 302",
                  attendees: 42,
                  image: "/placeholder.svg?height=150&width=300",
                  tags: ["Web Development", "JavaScript", "React"],
                  id: "1",
                },
                {
                  title: "Data Science Symposium",
                  description: "Explore the latest trends in data science and analytics",
                  type: "Conference",
                  date: "May 18, 2023",
                  time: "9:00 AM - 4:00 PM",
                  location: "Science Center Auditorium",
                  attendees: 120,
                  image: "/placeholder.svg?height=150&width=300",
                  tags: ["Data Science", "Machine Learning", "Analytics"],
                  id: "2",
                },
                {
                  title: "Cybersecurity Hackathon",
                  description: "Test your security skills in this 24-hour challenge",
                  type: "Hackathon",
                  date: "May 20-21, 2023",
                  time: "10:00 AM - 10:00 AM (24 hours)",
                  location: "Engineering Building, Labs 101-105",
                  attendees: 75,
                  image: "/placeholder.svg?height=150&width=300",
                  tags: ["Cybersecurity", "Ethical Hacking", "Network Security"],
                  id: "3",
                },
                {
                  title: "Tech Industry Networking",
                  description: "Connect with professionals from leading tech companies",
                  type: "Networking",
                  date: "May 25, 2023",
                  time: "6:00 PM - 8:00 PM",
                  location: "Student Union, Grand Hall",
                  attendees: 90,
                  image: "/placeholder.svg?height=150&width=300",
                  tags: ["Networking", "Career", "Industry"],
                  id: "4",
                },
                {
                  title: "Mobile App Development Workshop",
                  description: "Hands-on workshop on building cross-platform mobile apps",
                  type: "Workshop",
                  date: "May 27, 2023",
                  time: "1:00 PM - 4:00 PM",
                  location: "Tech Building, Room 205",
                  attendees: 35,
                  image: "/placeholder.svg?height=150&width=300",
                  tags: ["Mobile Development", "React Native", "Flutter"],
                  id: "5",
                },
                {
                  title: "AI Research Showcase",
                  description: "Faculty and student presentations on AI research projects",
                  type: "Conference",
                  date: "May 30, 2023",
                  time: "10:00 AM - 3:00 PM",
                  location: "Computer Science Building, Auditorium",
                  attendees: 65,
                  image: "/placeholder.svg?height=150&width=300",
                  tags: ["Artificial Intelligence", "Machine Learning", "Research"],
                  id: "6",
                },
              ].map((event, i) => (
                <Card key={i} className="glass-card overflow-hidden">
                  <div className="h-40 w-full bg-muted">
                    <img
                      src={event.image || "/placeholder.svg"}
                      alt={event.title}
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <CardHeader className="pb-2">
                    <div className="flex items-center justify-between">
                      <Badge
                        variant="outline"
                        className={
                          event.type === "Workshop"
                            ? "bg-blue-500/10 text-blue-500"
                            : event.type === "Conference"
                              ? "bg-purple-500/10 text-purple-500"
                              : event.type === "Hackathon"
                                ? "bg-green-500/10 text-green-500"
                                : "bg-amber-500/10 text-amber-500"
                        }
                      >
                        {event.type}
                      </Badge>
                      <div className="flex items-center gap-1 text-sm text-muted-foreground">
                        <Users className="h-3 w-3" />
                        <span>{event.attendees}</span>
                      </div>
                    </div>
                    <CardTitle className="text-base mt-2">{event.title}</CardTitle>
                    <CardDescription>{event.description}</CardDescription>
                  </CardHeader>
                  <CardContent className="pb-2">
                    <div className="space-y-2 text-sm text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <Calendar className="h-3 w-3" />
                        <span>{event.date}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="h-3 w-3" />
                        <span>{event.time}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <MapPin className="h-3 w-3" />
                        <span>{event.location}</span>
                      </div>
                    </div>
                    <div className="flex flex-wrap gap-1 mt-3">
                      {event.tags.map((tag, j) => (
                        <Badge key={j} variant="outline" className="text-xs">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button asChild className="w-full gap-1">
                      <Link href={`/dashboard/student/events/${event.id}`}>
                        <CalendarPlus className="h-4 w-4" /> Register
                      </Link>
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="recommended" className="mt-4 space-y-4">
            <div className="mb-4 p-4 rounded-lg bg-primary/5 border border-primary/10">
              <div className="flex items-start gap-3">
                <Star className="h-5 w-5 text-primary mt-0.5" />
                <div>
                  <h3 className="font-medium">Personalized Recommendations</h3>
                  <p className="text-sm text-muted-foreground">
                    Based on your skills, interests, and academic performance, we've curated these events that might
                    interest you.
                  </p>
                </div>
              </div>
            </div>

            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  title: "Advanced Algorithms Workshop",
                  description: "Deep dive into complex algorithms and optimization techniques",
                  type: "Workshop",
                  date: "May 22, 2023",
                  time: "3:00 PM - 6:00 PM",
                  location: "Computer Science Building, Room 401",
                  attendees: 30,
                  image: "/placeholder.svg?height=150&width=300",
                  tags: ["Algorithms", "Data Structures", "Optimization"],
                  matchPercentage: 95,
                  reason: "Based on your high performance in Data Structures & Algorithms",
                  id: "7",
                },
                {
                  title: "Web Development Career Panel",
                  description: "Industry experts discuss careers in web development",
                  type: "Panel",
                  date: "May 24, 2023",
                  time: "5:00 PM - 7:00 PM",
                  location: "Career Center, Conference Room A",
                  attendees: 50,
                  image: "/placeholder.svg?height=150&width=300",
                  tags: ["Web Development", "Career", "Industry"],
                  matchPercentage: 88,
                  reason: "Matches your interest in Web Development",
                  id: "8",
                },
                {
                  title: "Database Systems Seminar",
                  description: "Latest advancements in database technologies and practices",
                  type: "Seminar",
                  date: "May 26, 2023",
                  time: "2:00 PM - 4:00 PM",
                  location: "Tech Building, Room 105",
                  attendees: 45,
                  image: "/placeholder.svg?height=150&width=300",
                  tags: ["Databases", "SQL", "NoSQL"],
                  matchPercentage: 90,
                  reason: "Complements your Database Management Systems course",
                  id: "9",
                },
              ].map((event, i) => (
                <Card key={i} className="glass-card overflow-hidden">
                  <div className="h-40 w-full bg-muted">
                    <img
                      src={event.image || "/placeholder.svg"}
                      alt={event.title}
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <CardHeader className="pb-2">
                    <div className="flex items-center justify-between">
                      <Badge
                        variant="outline"
                        className={
                          event.type === "Workshop"
                            ? "bg-blue-500/10 text-blue-500"
                            : event.type === "Panel"
                              ? "bg-purple-500/10 text-purple-500"
                              : "bg-green-500/10 text-green-500"
                        }
                      >
                        {event.type}
                      </Badge>
                      <Badge variant="secondary" className="bg-primary/10 text-primary hover:bg-primary/20">
                        {event.matchPercentage}% Match
                      </Badge>
                    </div>
                    <CardTitle className="text-base mt-2">{event.title}</CardTitle>
                    <CardDescription>{event.description}</CardDescription>
                  </CardHeader>
                  <CardContent className="pb-2">
                    <div className="space-y-2 text-sm text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <Calendar className="h-3 w-3" />
                        <span>{event.date}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="h-3 w-3" />
                        <span>{event.time}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Star className="h-3 w-3 text-primary" />
                        <span className="text-primary">{event.reason}</span>
                      </div>
                    </div>
                    <div className="flex flex-wrap gap-1 mt-3">
                      {event.tags.map((tag, j) => (
                        <Badge key={j} variant="outline" className="text-xs">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button asChild className="w-full gap-1">
                      <Link href={`/dashboard/student/events/${event.id}`}>
                        <CalendarPlus className="h-4 w-4" /> Register
                      </Link>
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="registered" className="mt-4 space-y-4">
            <div className="flex items-center justify-between">
              <h2 className="text-xl font-semibold">Your Registered Events</h2>
              <Button variant="outline" size="sm" className="gap-1">
                <Calendar className="h-4 w-4" /> Add to Calendar
              </Button>
            </div>

            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  title: "Data Science Symposium",
                  description: "Explore the latest trends in data science and analytics",
                  type: "Conference",
                  date: "May 18, 2023",
                  time: "9:00 AM - 4:00 PM",
                  location: "Science Center Auditorium",
                  attendees: 120,
                  image: "/placeholder.svg?height=150&width=300",
                  tags: ["Data Science", "Machine Learning", "Analytics"],
                  reminder: true,
                  id: "2",
                },
                {
                  title: "Tech Industry Networking",
                  description: "Connect with professionals from leading tech companies",
                  type: "Networking",
                  date: "May 25, 2023",
                  time: "6:00 PM - 8:00 PM",
                  location: "Student Union, Grand Hall",
                  attendees: 90,
                  image: "/placeholder.svg?height=150&width=300",
                  tags: ["Networking", "Career", "Industry"],
                  reminder: true,
                  id: "4",
                },
                {
                  title: "AI Research Showcase",
                  description: "Faculty and student presentations on AI research projects",
                  type: "Conference",
                  date: "May 30, 2023",
                  time: "10:00 AM - 3:00 PM",
                  location: "Computer Science Building, Auditorium",
                  attendees: 65,
                  image: "/placeholder.svg?height=150&width=300",
                  tags: ["Artificial Intelligence", "Machine Learning", "Research"],
                  reminder: false,
                  id: "6",
                },
              ].map((event, i) => (
                <Card key={i} className="glass-card overflow-hidden">
                  <div className="h-40 w-full bg-muted">
                    <img
                      src={event.image || "/placeholder.svg"}
                      alt={event.title}
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <CardHeader className="pb-2">
                    <div className="flex items-center justify-between">
                      <Badge
                        variant="outline"
                        className={
                          event.type === "Workshop"
                            ? "bg-blue-500/10 text-blue-500"
                            : event.type === "Conference"
                              ? "bg-purple-500/10 text-purple-500"
                              : "bg-amber-500/10 text-amber-500"
                        }
                      >
                        {event.type}
                      </Badge>
                      <Badge variant="outline" className="bg-green-500/10 text-green-500 hover:bg-green-500/20">
                        Registered
                      </Badge>
                    </div>
                    <CardTitle className="text-base mt-2">{event.title}</CardTitle>
                    <CardDescription>{event.description}</CardDescription>
                  </CardHeader>
                  <CardContent className="pb-2">
                    <div className="space-y-2 text-sm text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <Calendar className="h-3 w-3" />
                        <span>{event.date}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="h-3 w-3" />
                        <span>{event.time}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <MapPin className="h-3 w-3" />
                        <span>{event.location}</span>
                      </div>
                    </div>
                    <div className="flex items-center space-x-2 mt-3">
                      <Checkbox id={`reminder-${event.id}`} defaultChecked={event.reminder} />
                      <Label htmlFor={`reminder-${event.id}`} className="text-sm">
                        Send me a reminder
                      </Label>
                    </div>
                  </CardContent>
                  <CardFooter className="flex justify-between">
                    <Button variant="outline" size="sm" className="gap-1">
                      <Bell className="h-4 w-4" /> Reminder
                    </Button>
                    <Button variant="outline" size="sm" className="gap-1" asChild>
                      <Link href={`/dashboard/student/events/${event.id}`}>View Details</Link>
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="past" className="mt-4 space-y-4">
            <div className="flex items-center justify-between">
              <h2 className="text-xl font-semibold">Past Events</h2>
              <Select defaultValue="recent">
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Sort by" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="recent">Most Recent</SelectItem>
                  <SelectItem value="oldest">Oldest First</SelectItem>
                  <SelectItem value="type">Event Type</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <Card className="glass-card">
              <CardContent className="p-0">
                <table className="w-full">
                  <thead>
                    <tr className="border-b">
                      <th className="text-left p-4 font-medium">Event</th>
                      <th className="text-left p-4 font-medium">Type</th>
                      <th className="text-left p-4 font-medium">Date</th>
                      <th className="text-left p-4 font-medium">Attended</th>
                      <th className="text-left p-4 font-medium">Resources</th>
                      <th className="text-left p-4 font-medium">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      {
                        title: "Introduction to Machine Learning",
                        type: "Workshop",
                        date: "April 15, 2023",
                        attended: true,
                        resources: true,
                        id: "p1",
                      },
                      {
                        title: "Spring Career Fair",
                        type: "Career Fair",
                        date: "April 10, 2023",
                        attended: true,
                        resources: false,
                        id: "p2",
                      },
                      {
                        title: "Cloud Computing Seminar",
                        type: "Seminar",
                        date: "April 5, 2023",
                        attended: false,
                        resources: true,
                        id: "p3",
                      },
                      {
                        title: "UI/UX Design Workshop",
                        type: "Workshop",
                        date: "March 28, 2023",
                        attended: true,
                        resources: true,
                        id: "p4",
                      },
                      {
                        title: "Blockchain Technology Panel",
                        type: "Panel",
                        date: "March 20, 2023",
                        attended: false,
                        resources: true,
                        id: "p5",
                      },
                    ].map((event, i) => (
                      <tr key={i} className="border-b">
                        <td className="p-4">{event.title}</td>
                        <td className="p-4">
                          <Badge
                            variant="outline"
                            className={
                              event.type === "Workshop"
                                ? "bg-blue-500/10 text-blue-500"
                                : event.type === "Seminar"
                                  ? "bg-purple-500/10 text-purple-500"
                                  : event.type === "Panel"
                                    ? "bg-green-500/10 text-green-500"
                                    : "bg-amber-500/10 text-amber-500"
                            }
                          >
                            {event.type}
                          </Badge>
                        </td>
                        <td className="p-4">{event.date}</td>
                        <td className="p-4">
                          <Badge
                            variant="outline"
                            className={
                              event.attended ? "bg-green-500/10 text-green-500" : "bg-amber-500/10 text-amber-500"
                            }
                          >
                            {event.attended ? "Attended" : "Missed"}
                          </Badge>
                        </td>
                        <td className="p-4">
                          {event.resources ? (
                            <Button variant="ghost" size="sm" className="gap-1">
                              <ExternalLink className="h-3 w-3" /> View
                            </Button>
                          ) : (
                            <span className="text-sm text-muted-foreground">None</span>
                          )}
                        </td>
                        <td className="p-4">
                          <div className="flex items-center gap-2">
                            <Button variant="ghost" size="sm" className="gap-1">
                              <ThumbsUp className="h-3 w-3" /> Rate
                            </Button>
                            <Button variant="ghost" size="sm" asChild>
                              <Link href={`/dashboard/student/events/${event.id}`}>Details</Link>
                            </Button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="md:col-span-2">
            <Card className="glass-card">
              <CardHeader>
                <CardTitle>Featured Event</CardTitle>
                <CardDescription>Don't miss this special opportunity</CardDescription>
              </CardHeader>
              <CardContent className="p-0">
                <div className="relative h-64 w-full">
                  <img
                    src="/placeholder.svg?height=256&width=800"
                    alt="Tech Innovation Summit"
                    className="h-full w-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
                  <div className="absolute bottom-0 left-0 p-4">
                    <Badge className="mb-2 bg-primary text-primary-foreground">Featured</Badge>
                    <h3 className="text-xl font-bold text-white">Tech Innovation Summit 2023</h3>
                    <p className="text-white/80">
                      Join industry leaders and innovators for a day of inspiration and networking
                    </p>
                    <div className="flex items-center gap-4 mt-2 text-white/80">
                      <div className="flex items-center gap-1">
                        <Calendar className="h-4 w-4" />
                        <span>June 5, 2023</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <MapPin className="h-4 w-4" />
                        <span>Main Campus Conference Center</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="p-4 flex justify-between items-center">
                  <div className="flex items-center gap-2">
                    <Avatar className="h-8 w-8">
                      <AvatarImage src="/placeholder.svg?height=32&width=32" />
                      <AvatarFallback>TC</AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="text-sm font-medium">Tech Council</p>
                      <p className="text-xs text-muted-foreground">Event Organizer</p>
                    </div>
                  </div>
                  <Button className="gap-1">
                    <CalendarPlus className="h-4 w-4" /> Register Now
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

          <div>
            <Card className="glass-card">
              <CardHeader>
                <CardTitle>Your Interests</CardTitle>
                <CardDescription>Manage event recommendations</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <h3 className="text-sm font-medium">Topics You Follow</h3>
                  <div className="flex flex-wrap gap-2">
                    {[
                      "Web Development",
                      "Data Science",
                      "Algorithms",
                      "Cybersecurity",
                      "AI",
                      "Career",
                      "Networking",
                    ].map((topic, i) => (
                      <Badge key={i} variant="outline" className="gap-1">
                        {topic} <X className="h-3 w-3 cursor-pointer" />
                      </Badge>
                    ))}
                  </div>
                </div>

                <div className="space-y-2">
                  <h3 className="text-sm font-medium">Suggested Topics</h3>
                  <div className="flex flex-wrap gap-2">
                    {["Cloud Computing", "Mobile Development", "UI/UX Design", "Blockchain"].map((topic, i) => (
                      <Badge key={i} variant="outline" className="gap-1 bg-muted hover:bg-primary/10 cursor-pointer">
                        <Plus className="h-3 w-3" /> {topic}
                      </Badge>
                    ))}
                  </div>
                </div>

                <div className="space-y-2">
                  <h3 className="text-sm font-medium">Event Types</h3>
                  <div className="space-y-2">
                    {[
                      { label: "Workshops", checked: true },
                      { label: "Conferences", checked: true },
                      { label: "Hackathons", checked: true },
                      { label: "Career Fairs", checked: false },
                      { label: "Networking Events", checked: true },
                      { label: "Seminars", checked: false },
                    ].map((item, i) => (
                      <div key={i} className="flex items-center space-x-2">
                        <Checkbox id={`type-${i}`} defaultChecked={item.checked} />
                        <Label htmlFor={`type-${i}`}>{item.label}</Label>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-2">
                  <Button className="w-full gap-1">
                    <Tag className="h-4 w-4" /> Update Interests
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
