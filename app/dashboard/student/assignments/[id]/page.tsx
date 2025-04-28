import { SidebarNavigation } from "@/components/sidebar-navigation"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { AlertCircle, ArrowLeft, Calendar, Clock, Download, FileText, Upload } from "lucide-react"
import Link from "next/link"
import { Textarea } from "@/components/ui/textarea"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Progress } from "@/components/ui/progress"

export default function AssignmentDetailsPage({ params }: { params: { id: string } }) {
  const assignmentId = params.id

  // Mock assignment data
  const assignment = {
    id: assignmentId,
    title: "Binary Trees Implementation",
    course: "Data Structures & Algorithms",
    instructor: "Prof. Johnson",
    dueDate: "May 15, 2023 at 11:59 PM",
    status: "Not started",
    description:
      "Implement a binary search tree with the following operations: insert, delete, search, and traversal (in-order, pre-order, post-order). Your implementation should handle edge cases and include proper error handling.",
    requirements: [
      "Implement a Node class with value, left, and right properties",
      "Implement a BinarySearchTree class with insert, delete, search methods",
      "Implement in-order, pre-order, and post-order traversal methods",
      "Include proper error handling for edge cases",
      "Write test cases to verify your implementation",
    ],
    submissionType: "Code file (.java, .py, or .cpp)",
    maxPoints: 100,
    timeEstimate: "4-6 hours",
  }

  // Determine if the assignment is past due
  const isPastDue = false

  return (
    <SidebarNavigation role="student">
      <div className="space-y-6">
        <div className="flex items-center gap-2">
          <Button variant="ghost" size="sm" asChild className="gap-1">
            <Link href="/dashboard/student/assignments">
              <ArrowLeft className="h-4 w-4" /> Back to Assignments
            </Link>
          </Button>
        </div>

        <div className="flex flex-col md:flex-row gap-6">
          <div className="md:w-2/3 space-y-6">
            <Card className="glass-card">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div>
                    <CardTitle className="text-xl">{assignment.title}</CardTitle>
                    <CardDescription>{assignment.course}</CardDescription>
                  </div>
                  <Badge
                    variant={isPastDue ? "destructive" : "outline"}
                    className={isPastDue ? "" : "bg-primary/10 text-primary"}
                  >
                    {isPastDue ? "Past Due" : "Due Soon"}
                  </Badge>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center gap-4 text-sm text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <Calendar className="h-4 w-4" />
                    <span>Due: {assignment.dueDate}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <FileText className="h-4 w-4" />
                    <span>{assignment.submissionType}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="h-4 w-4" />
                    <span>Est. Time: {assignment.timeEstimate}</span>
                  </div>
                </div>

                <div>
                  <h3 className="font-medium mb-2">Assignment Description</h3>
                  <p className="text-muted-foreground">{assignment.description}</p>
                </div>

                <div>
                  <h3 className="font-medium mb-2">Requirements</h3>
                  <ul className="list-disc list-inside text-muted-foreground space-y-1">
                    {assignment.requirements.map((req, i) => (
                      <li key={i}>{req}</li>
                    ))}
                  </ul>
                </div>

                <div className="flex items-center justify-between p-3 rounded-lg bg-muted">
                  <div className="flex items-center gap-2">
                    <Avatar>
                      <AvatarImage src="/placeholder.svg?height=40&width=40" />
                      <AvatarFallback>PJ</AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="text-sm font-medium">{assignment.instructor}</p>
                      <p className="text-xs text-muted-foreground">Assignment Instructor</p>
                    </div>
                  </div>
                  <div className="text-sm">
                    <span className="font-medium">{assignment.maxPoints}</span> possible points
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="glass-card">
              <CardHeader>
                <CardTitle>Submit Your Assignment</CardTitle>
                <CardDescription>Upload your solution files and add any comments</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="border-2 border-dashed rounded-lg p-6 flex flex-col items-center justify-center text-center">
                  <div className="mb-4 rounded-full bg-primary/10 p-3">
                    <Upload className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-medium">Drag and drop your files here</h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    Supported formats: .java, .py, .cpp, .zip (max 10MB)
                  </p>
                  <Button className="gap-1">
                    <Upload className="h-4 w-4" /> Choose File
                  </Button>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium">Comments for Instructor (Optional)</label>
                  <Textarea placeholder="Add any comments or questions about your submission..." rows={4} />
                </div>
              </CardContent>
              <CardFooter className="flex justify-between">
                <Button variant="outline">Save Draft</Button>
                <Button>Submit Assignment</Button>
              </CardFooter>
            </Card>
          </div>

          <div className="md:w-1/3 space-y-4">
            <Card className="glass-card sticky top-20">
              <CardHeader>
                <CardTitle>Assignment Status</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium">Status</span>
                  <Badge variant="outline">{assignment.status}</Badge>
                </div>

                <div className="space-y-2">
                  <div className="flex items-center justify-between text-sm">
                    <span>Progress</span>
                    <span>0%</span>
                  </div>
                  <Progress value={0} className="h-2" />
                </div>

                <div className="rounded-lg border p-3 space-y-2">
                  <div className="flex items-center gap-2">
                    <Clock className="h-4 w-4 text-muted-foreground" />
                    <span className="text-sm font-medium">Time Remaining</span>
                  </div>
                  <div className="grid grid-cols-4 gap-2 text-center">
                    <div className="rounded-md bg-muted p-2">
                      <span className="text-lg font-bold">3</span>
                      <p className="text-xs text-muted-foreground">Days</p>
                    </div>
                    <div className="rounded-md bg-muted p-2">
                      <span className="text-lg font-bold">8</span>
                      <p className="text-xs text-muted-foreground">Hours</p>
                    </div>
                    <div className="rounded-md bg-muted p-2">
                      <span className="text-lg font-bold">45</span>
                      <p className="text-xs text-muted-foreground">Mins</p>
                    </div>
                    <div className="rounded-md bg-muted p-2">
                      <span className="text-lg font-bold">20</span>
                      <p className="text-xs text-muted-foreground">Secs</p>
                    </div>
                  </div>
                </div>

                <div className="space-y-2">
                  <h3 className="text-sm font-medium">Resources</h3>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between p-2 rounded-md border">
                      <div className="flex items-center gap-2">
                        <FileText className="h-4 w-4 text-muted-foreground" />
                        <span className="text-sm">Assignment Guidelines.pdf</span>
                      </div>
                      <Button variant="ghost" size="icon">
                        <Download className="h-4 w-4" />
                      </Button>
                    </div>
                    <div className="flex items-center justify-between p-2 rounded-md border">
                      <div className="flex items-center gap-2">
                        <FileText className="h-4 w-4 text-muted-foreground" />
                        <span className="text-sm">BinaryTree Example.java</span>
                      </div>
                      <Button variant="ghost" size="icon">
                        <Download className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </div>

                <div className="rounded-lg bg-amber-500/10 p-3 flex items-start gap-2">
                  <AlertCircle className="h-5 w-5 text-amber-500 mt-0.5" />
                  <div>
                    <h3 className="font-medium text-amber-500">Submission Tips</h3>
                    <p className="text-sm text-muted-foreground">
                      Make sure your code is well-commented and includes test cases. Submit early to avoid last-minute
                      technical issues.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </SidebarNavigation>
  )
}
