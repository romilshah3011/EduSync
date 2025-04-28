"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { SidebarNavigation } from "@/components/sidebar-navigation"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { useRouter } from "next/navigation"
import { ArrowLeft, FileText, Plus, Sparkles, Upload, X } from "lucide-react"
import { Switch } from "@/components/ui/switch"

export default function CreateAssignmentPage() {
  const router = useRouter()
  const [activeTab, setActiveTab] = useState("details")
  const [attachments, setAttachments] = useState([
    { name: "assignment_instructions.pdf", size: "1.2 MB", type: "pdf" },
    { name: "reference_material.docx", size: "850 KB", type: "doc" },
  ])

  const handleRemoveAttachment = (index: number) => {
    setAttachments(attachments.filter((_, i) => i !== index))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // In a real app, you would submit the assignment data to your backend
    router.push("/dashboard/teacher/assignments")
  }

  const getFileIcon = (type: string) => {
    switch (type) {
      case "pdf":
        return <FileText className="h-4 w-4 text-red-500" />
      case "doc":
      case "docx":
        return <FileText className="h-4 w-4 text-blue-500" />
      case "ppt":
      case "pptx":
        return <FileText className="h-4 w-4 text-orange-500" />
      default:
        return <FileText className="h-4 w-4" />
    }
  }

  return (
    <SidebarNavigation role="teacher">
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Button variant="ghost" size="sm" asChild className="gap-1">
              <Link href="/dashboard/teacher/assignments">
                <ArrowLeft className="h-4 w-4" /> Back to Assignments
              </Link>
            </Button>
          </div>
          <Button className="gap-1">
            <Sparkles className="h-4 w-4" /> Generate with AI
          </Button>
        </div>

        <div className="flex flex-col md:flex-row gap-6">
          <div className="md:w-2/3 space-y-4">
            <Card className="glass-card">
              <CardHeader>
                <CardTitle>Create a New Assignment</CardTitle>
                <CardDescription>Set up assignment details, requirements, and submission options</CardDescription>
              </CardHeader>
              <CardContent>
                <Tabs value={activeTab} onValueChange={setActiveTab}>
                  <TabsList className="grid grid-cols-3 mb-4">
                    <TabsTrigger value="details">Assignment Details</TabsTrigger>
                    <TabsTrigger value="materials">Materials & Files</TabsTrigger>
                    <TabsTrigger value="settings">Submission Settings</TabsTrigger>
                  </TabsList>

                  <TabsContent value="details" className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="title">Assignment Title</Label>
                      <Input id="title" placeholder="Enter assignment title" required />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="description">Assignment Description</Label>
                      <Textarea
                        id="description"
                        placeholder="Provide detailed instructions for the assignment"
                        rows={5}
                        required
                      />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="course">Course</Label>
                        <Select required>
                          <SelectTrigger>
                            <SelectValue placeholder="Select course" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="advanced-programming">Advanced Programming</SelectItem>
                            <SelectItem value="database-systems">Database Systems</SelectItem>
                            <SelectItem value="human-computer-interaction">Human-Computer Interaction</SelectItem>
                            <SelectItem value="computer-networks">Computer Networks</SelectItem>
                            <SelectItem value="artificial-intelligence">Artificial Intelligence</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="points">Maximum Points</Label>
                        <Input id="points" type="number" placeholder="e.g., 100" required />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="due-date">Due Date</Label>
                        <Input id="due-date" type="date" required />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="due-time">Due Time</Label>
                        <Input id="due-time" type="time" required />
                      </div>
                    </div>
                  </TabsContent>

                  <TabsContent value="materials" className="space-y-4">
                    <div className="space-y-2">
                      <Label>Assignment Files</Label>
                      <div className="border-2 border-dashed rounded-lg p-6 flex flex-col items-center justify-center text-center">
                        <div className="mb-4 rounded-full bg-primary/10 p-3">
                          <Upload className="h-6 w-6 text-primary" />
                        </div>
                        <h3 className="font-medium">Drag and drop files here</h3>
                        <p className="text-sm text-muted-foreground mb-4">
                          Upload instructions, reference materials, or any files students will need
                        </p>
                        <Button variant="outline">Choose Files</Button>
                      </div>
                    </div>

                    {attachments.length > 0 && (
                      <div className="space-y-2">
                        <Label>Uploaded Files</Label>
                        <div className="space-y-2">
                          {attachments.map((file, i) => (
                            <div
                              key={i}
                              className="flex items-center justify-between p-3 border rounded-md bg-background"
                            >
                              <div className="flex items-center gap-2">
                                {getFileIcon(file.type)}
                                <span>{file.name}</span>
                                <span className="text-xs text-muted-foreground">({file.size})</span>
                              </div>
                              <Button
                                variant="ghost"
                                size="icon"
                                onClick={() => handleRemoveAttachment(i)}
                                className="h-8 w-8 text-muted-foreground hover:text-destructive"
                              >
                                <X className="h-4 w-4" />
                              </Button>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    <div className="space-y-2">
                      <Label>Reference Materials</Label>
                      <div className="border rounded-md p-4 space-y-4">
                        <div className="flex items-center justify-between">
                          <h3 className="text-sm font-medium">Additional Resources</h3>
                          <Button variant="outline" size="sm" className="gap-1">
                            <Plus className="h-3 w-3" /> Add Resource
                          </Button>
                        </div>
                        <div className="space-y-2">
                          <div className="flex items-center gap-2">
                            <Input placeholder="Resource title" className="flex-1" />
                            <Input placeholder="URL" className="flex-1" />
                            <Button variant="ghost" size="icon" className="text-muted-foreground">
                              <X className="h-4 w-4" />
                            </Button>
                          </div>
                          <div className="flex items-center gap-2">
                            <Input placeholder="Resource title" className="flex-1" />
                            <Input placeholder="URL" className="flex-1" />
                            <Button variant="ghost" size="icon" className="text-muted-foreground">
                              <X className="h-4 w-4" />
                            </Button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </TabsContent>

                  <TabsContent value="settings" className="space-y-4">
                    <div className="space-y-2">
                      <h3 className="text-lg font-medium">Submission Settings</h3>
                      <p className="text-sm text-muted-foreground">Configure how students can submit their work</p>
                    </div>

                    <div className="space-y-4">
                      <div className="flex flex-col space-y-2">
                        <Label>Accepted File Types</Label>
                        <div className="flex flex-wrap gap-2">
                          <div className="flex items-center space-x-2">
                            <Checkbox id="pdf" defaultChecked />
                            <Label htmlFor="pdf">PDF</Label>
                          </div>
                          <div className="flex items-center space-x-2">
                            <Checkbox id="doc" defaultChecked />
                            <Label htmlFor="doc">DOC/DOCX</Label>
                          </div>
                          <div className="flex items-center space-x-2">
                            <Checkbox id="ppt" />
                            <Label htmlFor="ppt">PPT/PPTX</Label>
                          </div>
                          <div className="flex items-center space-x-2">
                            <Checkbox id="image" />
                            <Label htmlFor="image">Images</Label>
                          </div>
                          <div className="flex items-center space-x-2">
                            <Checkbox id="zip" />
                            <Label htmlFor="zip">ZIP</Label>
                          </div>
                          <div className="flex items-center space-x-2">
                            <Checkbox id="code" />
                            <Label htmlFor="code">Code files</Label>
                          </div>
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="max-size">Maximum File Size (MB)</Label>
                        <Input id="max-size" type="number" defaultValue="10" />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="max-files">Maximum Number of Files</Label>
                        <Input id="max-files" type="number" defaultValue="5" />
                      </div>

                      <div className="flex items-center justify-between">
                        <div className="space-y-0.5">
                          <Label htmlFor="late-submissions">Allow Late Submissions</Label>
                          <p className="text-sm text-muted-foreground">Students can submit after the deadline</p>
                        </div>
                        <Switch id="late-submissions" />
                      </div>

                      <div className="flex items-center justify-between">
                        <div className="space-y-0.5">
                          <Label htmlFor="plagiarism-check">Enable Plagiarism Check</Label>
                          <p className="text-sm text-muted-foreground">
                            Automatically check submissions for plagiarism
                          </p>
                        </div>
                        <Switch id="plagiarism-check" defaultChecked />
                      </div>

                      <div className="flex items-center justify-between">
                        <div className="space-y-0.5">
                          <Label htmlFor="peer-review">Enable Peer Review</Label>
                          <p className="text-sm text-muted-foreground">Allow students to review each other's work</p>
                        </div>
                        <Switch id="peer-review" />
                      </div>
                    </div>
                  </TabsContent>
                </Tabs>
              </CardContent>
              <CardFooter className="flex justify-between">
                <Button variant="outline" asChild>
                  <Link href="/dashboard/teacher/assignments">Cancel</Link>
                </Button>
                <div className="flex gap-2">
                  <Button variant="outline">Save as Draft</Button>
                  <Button onClick={handleSubmit}>Create Assignment</Button>
                </div>
              </CardFooter>
            </Card>
          </div>

          <div className="md:w-1/3 space-y-4">
            <Card className="glass-card sticky top-20">
              <CardHeader>
                <CardTitle>Assignment Tips</CardTitle>
                <CardDescription>Best practices for effective assignments</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <h3 className="font-medium">Clear Instructions</h3>
                  <ul className="text-sm text-muted-foreground space-y-1 list-disc list-inside">
                    <li>Provide detailed, step-by-step instructions</li>
                    <li>Include examples or samples when possible</li>
                    <li>Clearly state the learning objectives</li>
                    <li>Define the evaluation criteria</li>
                    <li>Specify formatting requirements</li>
                  </ul>
                </div>

                <div className="space-y-2">
                  <h3 className="font-medium">Timing Considerations</h3>
                  <ul className="text-sm text-muted-foreground space-y-1 list-disc list-inside">
                    <li>Allow sufficient time for completion</li>
                    <li>Consider workload from other courses</li>
                    <li>Set deadlines at appropriate times (e.g., not midnight)</li>
                    <li>Plan for grading turnaround time</li>
                  </ul>
                </div>

                <div className="p-4 rounded-lg bg-primary/5 border border-primary/20 flex items-start gap-2">
                  <Sparkles className="h-5 w-5 text-primary mt-0.5" />
                  <div>
                    <h3 className="font-medium">AI Assignment Generation</h3>
                    <p className="text-sm text-muted-foreground">
                      Use our AI assistant to help generate assignment instructions, rubrics, and example solutions.
                      Click the "Generate with AI" button to get started.
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
