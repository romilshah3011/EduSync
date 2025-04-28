"use client"

import { useState } from "react"
import { SidebarNavigation } from "@/components/sidebar-navigation"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import {
  AlertTriangle,
  CheckCircle2,
  Eye,
  Filter,
  Flag,
  MessageSquare,
  Search,
  Shield,
  User,
  XCircle,
} from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"

// Mock data for flagged content
const flaggedContent = [
  {
    id: "1",
    type: "community_post",
    title: "Question about assignment deadline",
    content: "Is the deadline for the data structures assignment still May 10th? I heard it might be extended.",
    author: {
      id: "u1",
      name: "Alex Johnson",
      avatar: "/placeholder.svg?height=40&width=40",
    },
    reportCount: 3,
    reportReason: "Misinformation",
    severity: "low",
    reportedAt: "2025-04-22T14:30:00",
    status: "pending",
  },
  {
    id: "2",
    type: "comment",
    title: "Re: Final exam preparation",
    content:
      "This course is terrible and the professor doesn't know what they're talking about. Don't waste your time studying.",
    author: {
      id: "u2",
      name: "Jamie Smith",
      avatar: "/placeholder.svg?height=40&width=40",
    },
    reportCount: 5,
    reportReason: "Harassment",
    severity: "high",
    reportedAt: "2025-04-23T09:15:00",
    status: "pending",
  },
  {
    id: "3",
    type: "quiz_question",
    title: "Advanced Algorithms Quiz - Question 3",
    content:
      "Which sorting algorithm has the worst average-case time complexity? A) Quicksort B) Mergesort C) Bubble Sort D) Insertion Sort",
    author: {
      id: "u3",
      name: "Taylor Williams",
      avatar: "/placeholder.svg?height=40&width=40",
    },
    reportCount: 2,
    reportReason: "Incorrect Information",
    severity: "medium",
    reportedAt: "2025-04-21T16:45:00",
    status: "pending",
  },
  {
    id: "4",
    type: "course_content",
    title: "Introduction to Machine Learning - Module 2",
    content:
      "This module contains potentially copyrighted material from another university's course without proper attribution.",
    author: {
      id: "u4",
      name: "Morgan Lee",
      avatar: "/placeholder.svg?height=40&width=40",
    },
    reportCount: 4,
    reportReason: "Copyright Violation",
    severity: "high",
    reportedAt: "2025-04-20T11:30:00",
    status: "pending",
  },
  {
    id: "5",
    type: "community_post",
    title: "Study group for final exams",
    content:
      "Looking to form a study group for the upcoming finals. Please contact me at my personal email: student@example.com",
    author: {
      id: "u5",
      name: "Casey Brown",
      avatar: "/placeholder.svg?height=40&width=40",
    },
    reportCount: 1,
    reportReason: "Personal Information",
    severity: "medium",
    reportedAt: "2025-04-24T13:20:00",
    status: "pending",
  },
]

export default function ModerationPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [activeTab, setActiveTab] = useState("all")
  const [selectedContent, setSelectedContent] = useState<string | null>(null)
  const [isViewDialogOpen, setIsViewDialogOpen] = useState(false)
  const [isActionDialogOpen, setIsActionDialogOpen] = useState(false)
  const [actionType, setActionType] = useState<"approve" | "remove" | "warn" | null>(null)

  // Filter content based on search query and active tab
  const filteredContent = flaggedContent.filter(
    (content) =>
      (content.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        content.content.toLowerCase().includes(searchQuery.toLowerCase())) &&
      (activeTab === "all" || content.type === activeTab),
  )

  const selectedContentData = flaggedContent.find((content) => content.id === selectedContent)

  const handleAction = (id: string, action: "approve" | "remove" | "warn") => {
    setSelectedContent(id)
    setActionType(action)
    setIsActionDialogOpen(true)
  }

  const handleViewContent = (id: string) => {
    setSelectedContent(id)
    setIsViewDialogOpen(true)
  }

  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case "low":
        return "bg-green-500/10 text-green-500"
      case "medium":
        return "bg-amber-500/10 text-amber-500"
      case "high":
        return "bg-red-500/10 text-red-500"
      default:
        return "bg-muted text-muted-foreground"
    }
  }

  const getContentTypeIcon = (type: string) => {
    switch (type) {
      case "community_post":
        return <MessageSquare className="h-4 w-4" />
      case "comment":
        return <MessageSquare className="h-4 w-4" />
      case "quiz_question":
        return <AlertTriangle className="h-4 w-4" />
      case "course_content":
        return <AlertTriangle className="h-4 w-4" />
      default:
        return <Flag className="h-4 w-4" />
    }
  }

  const getContentTypeName = (type: string) => {
    switch (type) {
      case "community_post":
        return "Community Post"
      case "comment":
        return "Comment"
      case "quiz_question":
        return "Quiz Question"
      case "course_content":
        return "Course Content"
      default:
        return type.replace("_", " ")
    }
  }

  return (
    <SidebarNavigation role="admin">
      <div className="space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <h1 className="text-2xl font-bold tracking-tight">Moderation Panel</h1>
            <p className="text-muted-foreground">Review and moderate flagged content across the platform</p>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
          <div className="relative w-full sm:w-96">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              type="search"
              placeholder="Search flagged content..."
              className="w-full pl-8"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          <div className="flex items-center gap-2 w-full sm:w-auto">
            <Select defaultValue="all-severity">
              <SelectTrigger className="w-full sm:w-[180px]">
                <SelectValue placeholder="All Severity" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all-severity">All Severity</SelectItem>
                <SelectItem value="high">High</SelectItem>
                <SelectItem value="medium">Medium</SelectItem>
                <SelectItem value="low">Low</SelectItem>
              </SelectContent>
            </Select>
            <Button variant="outline" size="icon">
              <Filter className="h-4 w-4" />
            </Button>
          </div>
        </div>

        <Tabs defaultValue="all" value={activeTab} onValueChange={setActiveTab}>
          <TabsList>
            <TabsTrigger value="all">All Content</TabsTrigger>
            <TabsTrigger value="community_post">Community Posts</TabsTrigger>
            <TabsTrigger value="comment">Comments</TabsTrigger>
            <TabsTrigger value="quiz_question">Quiz Questions</TabsTrigger>
            <TabsTrigger value="course_content">Course Content</TabsTrigger>
          </TabsList>
          <TabsContent value={activeTab} className="space-y-4 mt-4">
            {filteredContent.length > 0 ? (
              filteredContent.map((content) => (
                <Card key={content.id} className="glass-card overflow-hidden">
                  <CardContent className="p-0">
                    <div className="flex flex-col md:flex-row md:items-center justify-between">
                      <div className="p-6 flex-1">
                        <div className="flex items-start gap-4">
                          <div className="rounded-full bg-primary/10 p-3">
                            <Shield className="h-6 w-6 text-primary" />
                          </div>
                          <div className="flex-1 min-w-0">
                            <div className="flex items-center gap-2">
                              <h3 className="text-lg font-medium truncate">{content.title}</h3>
                              <Badge variant="outline" className="gap-1">
                                {getContentTypeIcon(content.type)}
                                {getContentTypeName(content.type)}
                              </Badge>
                            </div>
                            <div className="flex items-center gap-2 mt-1">
                              <Badge className={getSeverityColor(content.severity)}>
                                {content.severity.charAt(0).toUpperCase() + content.severity.slice(1)} Severity
                              </Badge>
                              <Badge variant="outline" className="gap-1">
                                <Flag className="h-3 w-3" />
                                {content.reportCount} Reports
                              </Badge>
                              <span className="text-sm text-muted-foreground">Reason: {content.reportReason}</span>
                            </div>
                            <p className="mt-2 text-sm line-clamp-2">{content.content}</p>
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-col p-4 md:p-6 bg-muted/30 border-t md:border-t-0 md:border-l">
                        <div className="flex items-center gap-3 mb-4">
                          <Avatar>
                            <AvatarImage src={content.author.avatar || "/placeholder.svg"} alt={content.author.name} />
                            <AvatarFallback>{content.author.name.charAt(0)}</AvatarFallback>
                          </Avatar>
                          <div>
                            <div className="font-medium">{content.author.name}</div>
                            <div className="text-xs text-muted-foreground">
                              Reported: {new Date(content.reportedAt).toLocaleDateString()}
                            </div>
                          </div>
                        </div>
                        <div className="flex flex-wrap gap-2">
                          <Button
                            variant="outline"
                            size="sm"
                            className="flex-1 gap-1"
                            onClick={() => handleViewContent(content.id)}
                          >
                            <Eye className="h-3.5 w-3.5" /> View
                          </Button>
                          <Button
                            variant="default"
                            size="sm"
                            className="flex-1 gap-1"
                            onClick={() => handleAction(content.id, "approve")}
                          >
                            <CheckCircle2 className="h-3.5 w-3.5" /> Approve
                          </Button>
                          <Button
                            variant="outline"
                            size="sm"
                            className="flex-1 gap-1 text-amber-500"
                            onClick={() => handleAction(content.id, "warn")}
                          >
                            <AlertTriangle className="h-3.5 w-3.5" /> Warn
                          </Button>
                          <Button
                            variant="outline"
                            size="sm"
                            className="flex-1 gap-1 text-destructive"
                            onClick={() => handleAction(content.id, "remove")}
                          >
                            <XCircle className="h-3.5 w-3.5" /> Remove
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
                    <Shield className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-lg font-medium">No flagged content found</h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    {searchQuery
                      ? "Try adjusting your search query"
                      : "There is no flagged content to review at this time"}
                  </p>
                </CardContent>
              </Card>
            )}
          </TabsContent>
        </Tabs>

        {/* View Content Dialog */}
        <Dialog open={isViewDialogOpen} onOpenChange={setIsViewDialogOpen}>
          <DialogContent className="sm:max-w-[600px]">
            <DialogHeader>
              <DialogTitle>View Flagged Content</DialogTitle>
              <DialogDescription>Review the content that has been flagged by users</DialogDescription>
            </DialogHeader>
            {selectedContentData && (
              <div className="space-y-4 py-4">
                <div className="flex items-center justify-between">
                  <Badge variant="outline" className="gap-1">
                    {getContentTypeIcon(selectedContentData.type)}
                    {getContentTypeName(selectedContentData.type)}
                  </Badge>
                  <Badge className={getSeverityColor(selectedContentData.severity)}>
                    {selectedContentData.severity.charAt(0).toUpperCase() + selectedContentData.severity.slice(1)}{" "}
                    Severity
                  </Badge>
                </div>

                <div className="space-y-1">
                  <h3 className="font-medium">{selectedContentData.title}</h3>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <User className="h-3.5 w-3.5" />
                    <span>{selectedContentData.author.name}</span>
                    <span>•</span>
                    <span>Reported {new Date(selectedContentData.reportedAt).toLocaleDateString()}</span>
                  </div>
                </div>

                <div className="rounded-md border p-4 bg-muted/30">
                  <p className="whitespace-pre-wrap">{selectedContentData.content}</p>
                </div>

                <div className="space-y-2">
                  <h4 className="text-sm font-medium">Report Details</h4>
                  <div className="grid grid-cols-2 gap-2 text-sm">
                    <div className="space-y-1">
                      <p className="text-muted-foreground">Report Reason</p>
                      <p>{selectedContentData.reportReason}</p>
                    </div>
                    <div className="space-y-1">
                      <p className="text-muted-foreground">Report Count</p>
                      <p>{selectedContentData.reportCount}</p>
                    </div>
                  </div>
                </div>
              </div>
            )}
            <DialogFooter className="flex gap-2">
              <Button variant="outline" onClick={() => setIsViewDialogOpen(false)}>
                Close
              </Button>
              <div className="flex-1 flex gap-2">
                <Button
                  variant="default"
                  className="flex-1 gap-1"
                  onClick={() => {
                    setIsViewDialogOpen(false)
                    handleAction(selectedContentData!.id, "approve")
                  }}
                >
                  <CheckCircle2 className="h-3.5 w-3.5" /> Approve
                </Button>
                <Button
                  variant="outline"
                  className="flex-1 gap-1 text-amber-500"
                  onClick={() => {
                    setIsViewDialogOpen(false)
                    handleAction(selectedContentData!.id, "warn")
                  }}
                >
                  <AlertTriangle className="h-3.5 w-3.5" /> Warn
                </Button>
                <Button
                  variant="outline"
                  className="flex-1 gap-1 text-destructive"
                  onClick={() => {
                    setIsViewDialogOpen(false)
                    handleAction(selectedContentData!.id, "remove")
                  }}
                >
                  <XCircle className="h-3.5 w-3.5" /> Remove
                </Button>
              </div>
            </DialogFooter>
          </DialogContent>
        </Dialog>

        {/* Action Dialog */}
        <Dialog open={isActionDialogOpen} onOpenChange={setIsActionDialogOpen}>
          <DialogContent className="sm:max-w-[500px]">
            <DialogHeader>
              <DialogTitle>
                {actionType === "approve" ? "Approve Content" : actionType === "warn" ? "Warn User" : "Remove Content"}
              </DialogTitle>
              <DialogDescription>
                {actionType === "approve"
                  ? "Approve this content and dismiss the reports"
                  : actionType === "warn"
                    ? "Send a warning to the user who posted this content"
                    : "Remove this content and notify the user"}
              </DialogDescription>
            </DialogHeader>
            {selectedContentData && (
              <div className="space-y-4 py-4">
                <div className="space-y-1">
                  <h3 className="font-medium">{selectedContentData.title}</h3>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <User className="h-3.5 w-3.5" />
                    <span>{selectedContentData.author.name}</span>
                  </div>
                </div>

                {actionType !== "approve" && (
                  <div className="space-y-2">
                    <Label htmlFor="message">Message to User</Label>
                    <Textarea
                      id="message"
                      rows={4}
                      placeholder={
                        actionType === "warn"
                          ? "Explain why this content is problematic and what changes are needed..."
                          : "Explain why this content has been removed..."
                      }
                    />
                  </div>
                )}

                {actionType === "remove" && (
                  <div className="space-y-2">
                    <Label htmlFor="reason">Removal Reason</Label>
                    <Select defaultValue="violation">
                      <SelectTrigger>
                        <SelectValue placeholder="Select reason" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="violation">Community Guidelines Violation</SelectItem>
                        <SelectItem value="inappropriate">Inappropriate Content</SelectItem>
                        <SelectItem value="harassment">Harassment or Bullying</SelectItem>
                        <SelectItem value="misinformation">Misinformation</SelectItem>
                        <SelectItem value="copyright">Copyright Violation</SelectItem>
                        <SelectItem value="personal-info">Personal Information</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                )}
              </div>
            )}
            <DialogFooter>
              <Button variant="outline" onClick={() => setIsActionDialogOpen(false)}>
                Cancel
              </Button>
              <Button
                variant={actionType === "remove" ? "destructive" : "default"}
                onClick={() => setIsActionDialogOpen(false)}
              >
                {actionType === "approve"
                  ? "Approve Content"
                  : actionType === "warn"
                    ? "Send Warning"
                    : "Remove Content"}
              </Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>
    </SidebarNavigation>
  )
}
