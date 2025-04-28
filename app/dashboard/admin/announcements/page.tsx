"use client"

import { useState } from "react"
import { SidebarNavigation } from "@/components/sidebar-navigation"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Calendar, Filter, Megaphone, Plus, Search, Trash2 } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Switch } from "@/components/ui/switch"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"

// Mock data for announcements
const announcements = [
  {
    id: "1",
    title: "End of Semester Exam Schedule",
    content:
      "The final examination schedule for the Spring 2025 semester has been published. Please check your student portal for your personalized exam timetable.",
    target: "All",
    author: {
      name: "Admin Team",
      avatar: "/placeholder.svg?height=40&width=40",
    },
    createdAt: "2025-04-15T10:30:00",
    scheduledFor: "2025-04-15T10:30:00",
    expires: "2025-05-30T23:59:59",
    status: "published",
  },
  {
    id: "2",
    title: "Campus Maintenance Notice",
    content:
      "The main library will be closed for renovations from May 5-10, 2025. Alternative study spaces will be available in the Student Center.",
    target: "All",
    author: {
      name: "Facilities Management",
      avatar: "/placeholder.svg?height=40&width=40",
    },
    createdAt: "2025-04-20T14:15:00",
    scheduledFor: "2025-04-25T08:00:00",
    expires: "2025-05-11T23:59:59",
    status: "scheduled",
  },
  {
    id: "3",
    title: "Faculty Meeting Reminder",
    content:
      "All faculty members are reminded of the departmental meeting scheduled for April 28, 2025 at 2:00 PM in Conference Room A.",
    target: "Teachers",
    author: {
      name: "Department Heads",
      avatar: "/placeholder.svg?height=40&width=40",
    },
    createdAt: "2025-04-21T09:45:00",
    scheduledFor: "2025-04-21T09:45:00",
    expires: "2025-04-28T14:00:00",
    status: "published",
  },
  {
    id: "4",
    title: "New Course Registration Open",
    content:
      "Registration for Fall 2025 courses is now open. Please log in to your student portal to register for classes before May 15, 2025.",
    target: "Students",
    author: {
      name: "Registrar's Office",
      avatar: "/placeholder.svg?height=40&width=40",
    },
    createdAt: "2025-04-22T11:20:00",
    scheduledFor: "2025-05-01T00:00:00",
    expires: "2025-05-15T23:59:59",
    status: "scheduled",
  },
  {
    id: "5",
    title: "System Maintenance",
    content:
      "The student portal will be unavailable on April 30, 2025 from 2:00 AM to 5:00 AM due to scheduled system maintenance.",
    target: "All",
    author: {
      name: "IT Department",
      avatar: "/placeholder.svg?height=40&width=40",
    },
    createdAt: "2025-04-23T15:10:00",
    scheduledFor: "2025-04-23T15:10:00",
    expires: "2025-04-30T05:00:00",
    status: "published",
  },
]

export default function AnnouncementsPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [activeTab, setActiveTab] = useState("all")
  const [isCreateDialogOpen, setIsCreateDialogOpen] = useState(false)

  // Filter announcements based on search query and active tab
  const filteredAnnouncements = announcements.filter(
    (announcement) =>
      (announcement.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        announcement.content.toLowerCase().includes(searchQuery.toLowerCase())) &&
      (activeTab === "all" ||
        (activeTab === "published" && announcement.status === "published") ||
        (activeTab === "scheduled" && announcement.status === "scheduled")),
  )

  return (
    <SidebarNavigation role="admin">
      <div className="space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <h1 className="text-2xl font-bold tracking-tight">Announcements</h1>
            <p className="text-muted-foreground">Create and manage announcements for your institution</p>
          </div>
          <Dialog open={isCreateDialogOpen} onOpenChange={setIsCreateDialogOpen}>
            <DialogTrigger asChild>
              <Button>
                <Plus className="mr-2 h-4 w-4" /> Create Announcement
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[600px]">
              <DialogHeader>
                <DialogTitle>Create New Announcement</DialogTitle>
                <DialogDescription>
                  Create an announcement to notify users about important information
                </DialogDescription>
              </DialogHeader>
              <div className="space-y-4 py-4">
                <div className="space-y-2">
                  <Label htmlFor="title">Announcement Title</Label>
                  <Input id="title" placeholder="Enter a clear, concise title" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="content">Announcement Content</Label>
                  <Textarea id="content" placeholder="Enter the full announcement message" rows={5} />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="target">Target Audience</Label>
                    <Select defaultValue="all">
                      <SelectTrigger>
                        <SelectValue placeholder="Select audience" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="all">All Users</SelectItem>
                        <SelectItem value="students">Students Only</SelectItem>
                        <SelectItem value="teachers">Teachers Only</SelectItem>
                        <SelectItem value="admins">Admins Only</SelectItem>
                        <SelectItem value="custom">Custom Groups</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="priority">Priority Level</Label>
                    <Select defaultValue="normal">
                      <SelectTrigger>
                        <SelectValue placeholder="Select priority" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="low">Low</SelectItem>
                        <SelectItem value="normal">Normal</SelectItem>
                        <SelectItem value="high">High</SelectItem>
                        <SelectItem value="urgent">Urgent</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
                <div className="space-y-2">
                  <Label>Scheduling Options</Label>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="schedule-date">Publish Date</Label>
                      <Input id="schedule-date" type="date" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="schedule-time">Publish Time</Label>
                      <Input id="schedule-time" type="time" />
                    </div>
                  </div>
                </div>
                <div className="space-y-2">
                  <Label>Expiration Options</Label>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="expiry-date">Expiry Date</Label>
                      <Input id="expiry-date" type="date" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="expiry-time">Expiry Time</Label>
                      <Input id="expiry-time" type="time" />
                    </div>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label htmlFor="send-email">Send Email Notification</Label>
                      <p className="text-sm text-muted-foreground">Also send this announcement as an email</p>
                    </div>
                    <Switch id="send-email" />
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label htmlFor="send-push">Send Push Notification</Label>
                      <p className="text-sm text-muted-foreground">Send as a push notification to mobile devices</p>
                    </div>
                    <Switch id="send-push" />
                  </div>
                </div>
              </div>
              <DialogFooter>
                <Button variant="outline" onClick={() => setIsCreateDialogOpen(false)}>
                  Cancel
                </Button>
                <Button onClick={() => setIsCreateDialogOpen(false)}>Create Announcement</Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
          <div className="relative w-full sm:w-96">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              type="search"
              placeholder="Search announcements..."
              className="w-full pl-8"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          <div className="flex items-center gap-2 w-full sm:w-auto">
            <Select defaultValue="all-targets">
              <SelectTrigger className="w-full sm:w-[180px]">
                <SelectValue placeholder="All Targets" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all-targets">All Targets</SelectItem>
                <SelectItem value="students">Students</SelectItem>
                <SelectItem value="teachers">Teachers</SelectItem>
                <SelectItem value="admins">Admins</SelectItem>
                <SelectItem value="all-users">All Users</SelectItem>
              </SelectContent>
            </Select>
            <Button variant="outline" size="icon">
              <Filter className="h-4 w-4" />
            </Button>
          </div>
        </div>

        <Tabs defaultValue="all" value={activeTab} onValueChange={setActiveTab}>
          <TabsList>
            <TabsTrigger value="all">All</TabsTrigger>
            <TabsTrigger value="published">Published</TabsTrigger>
            <TabsTrigger value="scheduled">Scheduled</TabsTrigger>
          </TabsList>
          <TabsContent value={activeTab} className="space-y-4 mt-4">
            {filteredAnnouncements.length > 0 ? (
              filteredAnnouncements.map((announcement) => (
                <Card key={announcement.id} className="glass-card overflow-hidden">
                  <CardContent className="p-0">
                    <div className="flex flex-col md:flex-row md:items-center justify-between">
                      <div className="p-6 flex-1">
                        <div className="flex items-start gap-4">
                          <div className="rounded-full bg-primary/10 p-3">
                            <Megaphone className="h-6 w-6 text-primary" />
                          </div>
                          <div className="flex-1 min-w-0">
                            <div className="flex items-center gap-2">
                              <h3 className="text-lg font-medium">{announcement.title}</h3>
                              <Badge variant={announcement.status === "published" ? "default" : "outline"}>
                                {announcement.status === "published" ? "Published" : "Scheduled"}
                              </Badge>
                            </div>
                            <div className="flex items-center gap-2 mt-1 text-sm text-muted-foreground">
                              <span>To: {announcement.target}</span>
                              <span>•</span>
                              <span className="flex items-center">
                                <Calendar className="mr-1 h-3.5 w-3.5" />
                                {new Date(announcement.scheduledFor).toLocaleDateString()}
                              </span>
                            </div>
                            <p className="mt-2 text-sm line-clamp-2">{announcement.content}</p>
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-col p-4 md:p-6 bg-muted/30 border-t md:border-t-0 md:border-l">
                        <div className="flex items-center gap-3 mb-4">
                          <Avatar>
                            <AvatarImage
                              src={announcement.author.avatar || "/placeholder.svg"}
                              alt={announcement.author.name}
                            />
                            <AvatarFallback>{announcement.author.name.charAt(0)}</AvatarFallback>
                          </Avatar>
                          <div>
                            <div className="font-medium">{announcement.author.name}</div>
                            <div className="text-xs text-muted-foreground">
                              Created: {new Date(announcement.createdAt).toLocaleDateString()}
                            </div>
                          </div>
                        </div>
                        <div className="flex flex-wrap gap-2">
                          <Button variant="outline" size="sm" className="flex-1">
                            Edit
                          </Button>
                          <Button variant="outline" size="sm" className="flex-1">
                            Duplicate
                          </Button>
                          <Button variant="ghost" size="icon" className="text-destructive">
                            <Trash2 className="h-4 w-4" />
                          </Button>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))
            ) : (
              <Card className="glass-card">
                <CardContent className="flex flex-col items-center justify-center p-6 text-center">
                  <div className="rounded-full bg-primary/10 p-3 mb-4">
                    <Megaphone className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-lg font-medium">No announcements found</h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    {searchQuery
                      ? "Try adjusting your search query"
                      : "You don't have any announcements in this category"}
                  </p>
                  <Button onClick={() => setIsCreateDialogOpen(true)}>
                    <Plus className="mr-2 h-4 w-4" /> Create Announcement
                  </Button>
                </CardContent>
              </Card>
            )}
          </TabsContent>
        </Tabs>
      </div>
    </SidebarNavigation>
  )
}
