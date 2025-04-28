"use client"

import type React from "react"

import { useState } from "react"
import { SidebarNavigation } from "@/components/sidebar-navigation"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { ArrowLeft, BookOpen, Clock, FileText, Plus, Sparkles, Video, X } from "lucide-react"
import Link from "next/link"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { useRouter } from "next/navigation"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Checkbox } from "@/components/ui/checkbox"

export default function CourseCreationPage() {
  const router = useRouter()
  const [activeTab, setActiveTab] = useState("details")
  const [modules, setModules] = useState([
    { title: "Introduction to the Course", type: "video", duration: "15 min" },
    { title: "Key Concepts Overview", type: "document", duration: "30 min" },
  ])

  const handleAddModule = () => {
    setModules([...modules, { title: "New Module", type: "video", duration: "30 min" }])
  }

  const handleRemoveModule = (index: number) => {
    setModules(modules.filter((_, i) => i !== index))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // In a real app, you would submit the course data to your backend
    router.push("/dashboard/teacher/courses")
  }

  return (
    <SidebarNavigation role="teacher">
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Button variant="ghost" size="sm" asChild className="gap-1">
              <Link href="/dashboard/teacher/courses">
                <ArrowLeft className="h-4 w-4" /> Back to Courses
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
                <CardTitle>Create a New Course</CardTitle>
                <CardDescription>Design your course structure and content</CardDescription>
              </CardHeader>
              <CardContent>
                <Tabs value={activeTab} onValueChange={setActiveTab}>
                  <TabsList className="grid grid-cols-3 mb-4">
                    <TabsTrigger value="details">Course Details</TabsTrigger>
                    <TabsTrigger value="modules">Modules</TabsTrigger>
                    <TabsTrigger value="settings">Settings</TabsTrigger>
                  </TabsList>

                  <TabsContent value="details" className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="title">Course Title</Label>
                      <Input id="title" placeholder="Enter course title" required />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="description">Course Description</Label>
                      <Textarea
                        id="description"
                        placeholder="Provide a detailed description of your course"
                        rows={5}
                        required
                      />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="department">Department</Label>
                        <Select defaultValue="cs">
                          <SelectTrigger>
                            <SelectValue placeholder="Select department" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="cs">Computer Science</SelectItem>
                            <SelectItem value="eng">Engineering</SelectItem>
                            <SelectItem value="math">Mathematics</SelectItem>
                            <SelectItem value="business">Business</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="level">Difficulty Level</Label>
                        <Select defaultValue="intermediate">
                          <SelectTrigger>
                            <SelectValue placeholder="Select level" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="beginner">Beginner</SelectItem>
                            <SelectItem value="intermediate">Intermediate</SelectItem>
                            <SelectItem value="advanced">Advanced</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="duration">Estimated Duration</Label>
                        <Select defaultValue="8-weeks">
                          <SelectTrigger>
                            <SelectValue placeholder="Select duration" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="4-weeks">4 weeks</SelectItem>
                            <SelectItem value="8-weeks">8 weeks</SelectItem>
                            <SelectItem value="12-weeks">12 weeks</SelectItem>
                            <SelectItem value="16-weeks">16 weeks</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="prerequisites">Prerequisites</Label>
                        <Input id="prerequisites" placeholder="e.g., Introduction to Programming" />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label>Course Thumbnail</Label>
                      <div className="border-2 border-dashed rounded-lg p-6 flex flex-col items-center justify-center text-center">
                        <div className="mb-4 rounded-full bg-primary/10 p-3">
                          <BookOpen className="h-6 w-6 text-primary" />
                        </div>
                        <h3 className="font-medium">Drag and drop an image here</h3>
                        <p className="text-sm text-muted-foreground mb-4">Recommended size: 1280x720px (16:9 ratio)</p>
                        <Button variant="outline">Choose File</Button>
                      </div>
                    </div>
                  </TabsContent>

                  <TabsContent value="modules" className="space-y-4">
                    <div className="flex items-center justify-between">
                      <h3 className="text-lg font-medium">Course Modules</h3>
                      <Button onClick={handleAddModule} className="gap-1">
                        <Plus className="h-4 w-4" /> Add Module
                      </Button>
                    </div>

                    <div className="space-y-2">
                      {modules.map((module, i) => (
                        <Card key={i} className="glass-card">
                          <CardContent className="p-4 flex flex-col md:flex-row md:items-center justify-between gap-4">
                            <div className="flex items-start gap-3">
                              <div className="rounded-full bg-primary/10 p-2">
                                {module.type === "video" ? (
                                  <Video className="h-5 w-5 text-primary" />
                                ) : (
                                  <FileText className="h-5 w-5 text-primary" />
                                )}
                              </div>
                              <div className="flex-1">
                                <Input
                                  value={module.title}
                                  onChange={(e) => {
                                    const newModules = [...modules]
                                    newModules[i].title = e.target.value
                                    setModules(newModules)
                                  }}
                                  className="mb-2"
                                />
                                <div className="flex flex-wrap gap-2">
                                  <Select
                                    value={module.type}
                                    onValueChange={(value) => {
                                      const newModules = [...modules]
                                      newModules[i].type = value
                                      setModules(newModules)
                                    }}
                                  >
                                    <SelectTrigger className="w-[150px]">
                                      <SelectValue placeholder="Select type" />
                                    </SelectTrigger>
                                    <SelectContent>
                                      <SelectItem value="video">Video</SelectItem>
                                      <SelectItem value="document">Document</SelectItem>
                                      <SelectItem value="quiz">Quiz</SelectItem>
                                      <SelectItem value="assignment">Assignment</SelectItem>
                                    </SelectContent>
                                  </Select>

                                  <div className="flex items-center gap-1">
                                    <Clock className="h-4 w-4 text-muted-foreground" />
                                    <Input
                                      value={module.duration}
                                      onChange={(e) => {
                                        const newModules = [...modules]
                                        newModules[i].duration = e.target.value
                                        setModules(newModules)
                                      }}
                                      className="w-[100px]"
                                    />
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="flex items-center gap-2 self-end md:self-auto">
                              <Button variant="outline" size="sm">
                                Upload
                              </Button>
                              <Button
                                variant="ghost"
                                size="icon"
                                onClick={() => handleRemoveModule(i)}
                                className="text-destructive"
                              >
                                <X className="h-4 w-4" />
                              </Button>
                            </div>
                          </CardContent>
                        </Card>
                      ))}
                    </div>

                    <div className="flex items-center justify-center p-4 border-2 border-dashed rounded-lg">
                      <Button variant="ghost" onClick={handleAddModule} className="gap-1">
                        <Plus className="h-4 w-4" /> Add Another Module
                      </Button>
                    </div>
                  </TabsContent>

                  <TabsContent value="settings" className="space-y-4">
                    <div className="space-y-2">
                      <h3 className="text-lg font-medium">Course Settings</h3>
                      <p className="text-sm text-muted-foreground">Configure additional settings for your course</p>
                    </div>

                    <div className="space-y-4">
                      <div className="flex items-center space-x-2">
                        <Checkbox id="visibility" />
                        <Label htmlFor="visibility">Make course visible to students</Label>
                      </div>

                      <div className="flex items-center space-x-2">
                        <Checkbox id="enrollment" />
                        <Label htmlFor="enrollment">Allow open enrollment</Label>
                      </div>

                      <div className="flex items-center space-x-2">
                        <Checkbox id="certificate" />
                        <Label htmlFor="certificate">Enable course completion certificate</Label>
                      </div>

                      <div className="flex items-center space-x-2">
                        <Checkbox id="discussion" defaultChecked />
                        <Label htmlFor="discussion">Enable discussion forum</Label>
                      </div>

                      <div className="flex items-center space-x-2">
                        <Checkbox id="ai-assistant" defaultChecked />
                        <Label htmlFor="ai-assistant">Enable AI teaching assistant</Label>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="start-date">Course Start Date</Label>
                      <Input type="date" id="start-date" />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="end-date">Course End Date</Label>
                      <Input type="date" id="end-date" />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="max-students">Maximum Students (Optional)</Label>
                      <Input type="number" id="max-students" placeholder="e.g., 50" />
                    </div>
                  </TabsContent>
                </Tabs>
              </CardContent>
              <CardFooter className="flex justify-between">
                <Button variant="outline" asChild>
                  <Link href="/dashboard/teacher/courses">Cancel</Link>
                </Button>
                <div className="flex gap-2">
                  <Button variant="outline">Save as Draft</Button>
                  <Button onClick={handleSubmit}>Create Course</Button>
                </div>
              </CardFooter>
            </Card>
          </div>

          <div className="md:w-1/3 space-y-4">
            <Card className="glass-card sticky top-20">
              <CardHeader>
                <CardTitle>Course Creation Tips</CardTitle>
                <CardDescription>Best practices for effective courses</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <h3 className="font-medium">Structure Your Content</h3>
                  <ul className="text-sm text-muted-foreground space-y-1 list-disc list-inside">
                    <li>Start with an engaging introduction</li>
                    <li>Organize content in logical modules</li>
                    <li>Include a mix of videos, readings, and activities</li>
                    <li>End each module with a quiz or assignment</li>
                    <li>Keep videos under 10 minutes for better engagement</li>
                  </ul>
                </div>

                <div className="space-y-2">
                  <h3 className="font-medium">Engage Your Students</h3>
                  <ul className="text-sm text-muted-foreground space-y-1 list-disc list-inside">
                    <li>Use real-world examples and case studies</li>
                    <li>Incorporate interactive elements</li>
                    <li>Encourage discussion and peer learning</li>
                    <li>Provide timely feedback on assignments</li>
                    <li>Use the AI assistant to answer common questions</li>
                  </ul>
                </div>

                <div className="p-4 rounded-lg bg-primary/5 border border-primary/20 flex items-start gap-2">
                  <Sparkles className="h-5 w-5 text-primary mt-0.5" />
                  <div>
                    <h3 className="font-medium">AI Course Generation</h3>
                    <p className="text-sm text-muted-foreground">
                      Use our AI assistant to help generate course outlines, module content, quizzes, and more. Click
                      the "Generate with AI" button to get started.
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
